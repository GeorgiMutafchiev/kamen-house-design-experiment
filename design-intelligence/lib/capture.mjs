import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

export function viewportStep(height) { return Math.max(180, Math.round(height * 0.72)); }

async function bounded(promise, ms, label, diagnostics) {
  try { await Promise.race([promise, pause(ms).then(() => { throw new Error(`${label} timed out`); })]); }
  catch (error) { diagnostics.readiness_warnings.push(error.message); }
}

export async function inspectViewport(page) {
  return page.evaluate(() => {
    const width = innerWidth, height = innerHeight;
    const intersects = rect => rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < height && rect.right > 0 && rect.left < width;
    const visible = element => {
      const rect = element.getBoundingClientRect();
      const css = getComputedStyle(element);
      return intersects(rect) && css.display !== "none" && css.visibility !== "hidden";
    };
    const images = [...document.images];
    const visibleImages = images.filter(visible);
    const failedImages = visibleImages.filter(img => !img.complete || img.naturalWidth === 0);
    const media = [...document.querySelectorAll("video,canvas,svg")].filter(visible);
    const videos = [...document.querySelectorAll("video")].filter(visible);
    const hidden = [...document.querySelectorAll("main *,section,article,[data-aos],[data-scroll]")]
      .filter(element => {
        const rect = element.getBoundingClientRect();
        if (!intersects(rect) || rect.width * rect.height < 8000) return false;
        const css = getComputedStyle(element);
        return Number(css.opacity) < 0.1 || css.visibility === "hidden";
      }).slice(0, 20).map(element => ({ tag: element.tagName, class_name: String(element.className).slice(0, 100), text: (element.textContent || "").trim().slice(0, 80) }));
    const sections = [...document.querySelectorAll("main section,section,main article")]
      .filter(element => intersects(element.getBoundingClientRect()));
    const emptySections = sections.filter(element => {
      const rect = element.getBoundingClientRect();
      const css = getComputedStyle(element);
      return rect.height >= height * 0.7 && (element.innerText || "").trim().length < 12 &&
        !element.querySelector("img,video,canvas") && css.backgroundImage === "none";
    }).map(element => ({ tag: element.tagName, class_name: String(element.className).slice(0, 100) }));
    const textElements = [...document.querySelectorAll("main h1,main h2,main h3,main p,main a,article h1,article h2,article p")].filter(visible);
    const fixedOverlays = [...document.querySelectorAll("body *")].filter(element => {
      const css = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return ["fixed", "sticky"].includes(css.position) && css.display !== "none" &&
        css.visibility !== "hidden" && Number(css.opacity) >= 0.05 && intersects(rect) &&
        rect.width * rect.height > width * height * 0.32 && Number(css.zIndex) >= 2;
    }).slice(0, 5).map(element => ({ tag: element.tagName, class_name: String(element.className).slice(0, 100) }));
    const zeroSizedMedia = [...document.querySelectorAll("img,video,canvas")].filter(element => {
      const css = getComputedStyle(element), rect = element.getBoundingClientRect();
      return css.display !== "none" && css.visibility !== "hidden" && rect.width * rect.height === 0 &&
        (element.loading === "lazy" || element.hasAttribute("data-src") || element.tagName === "VIDEO");
    }).slice(0, 20).map(element => ({ tag: element.tagName, source: element.currentSrc || element.src || element.getAttribute("data-src") }));
    const offscreenReveals = [...document.querySelectorAll("[data-aos],[data-scroll],.reveal")].filter(element => {
      const rect = element.getBoundingClientRect(), css = getComputedStyle(element);
      return css.transform !== "none" && rect.width * rect.height > 8000 &&
        (rect.right < 0 || rect.left > width) && rect.top < height && rect.bottom > 0;
    }).slice(0, 20).map(element => ({ tag: element.tagName, class_name: String(element.className).slice(0, 100) }));
    return {
      scroll_y: scrollY, viewport_width: width, viewport_height: height,
      document_height: document.documentElement.scrollHeight,
      font_status: document.fonts?.status ?? "unknown",
      total_images: images.length, lazy_images: images.filter(img => img.loading === "lazy").length,
      visible_images: visibleImages.length, visible_failed_images: failedImages.map(img => ({ src: img.currentSrc || img.src, complete: img.complete, natural_width: img.naturalWidth })).slice(0, 20),
      visible_media: media.length, video_states: videos.map(video => ({ ready_state: video.readyState, network_state: video.networkState, error: video.error?.message ?? null })),
      zero_sized_media: zeroSizedMedia, offscreen_reveals: offscreenReveals,
      visible_hidden_reveals: hidden, visible_empty_sections: emptySections,
      visible_main_text_chars: textElements.reduce((n, e) => n + (e.innerText || "").trim().length, 0),
      fixed_overlays: fixedOverlays,
    };
  });
}

async function inspectAfterNavigation(page, session) {
  for (let retry = 0; retry < 4; retry++) {
    try { return await inspectViewport(page); }
    catch (error) {
      if (!/Execution context was destroyed|navigation|Target closed/i.test(error.message) || retry === 3) throw error;
      session.readiness_warnings.push(`transient navigation during inspection; retry ${retry + 1}`);
      await page.waitForLoadState("domcontentloaded", { timeout: 5000 }).catch(() => {});
      await pause(750);
    }
  }
}

async function waitForStablePage(page) {
  let previous = "";
  let stable = 0;
  for (let i = 0; i < 10 && stable < 2; i++) {
    await pause(450);
    const state = `${page.url()}|${await page.evaluate(() => document.readyState).catch(() => "navigating")}`;
    stable = state === previous && !state.endsWith("navigating") ? stable + 1 : 0;
    previous = state;
  }
}

export async function analyzeBlankViewport(page) {
  const buffer = await page.screenshot({ type: "jpeg", quality: 55, fullPage: false });
  const { data, info } = await sharp(buffer).resize({ width: 24, height: 24, fit: "fill" }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const bins = new Map();
  for (let i = 0; i < data.length; i += info.channels) {
    const key = `${data[i] >> 4}-${data[i + 1] >> 4}-${data[i + 2] >> 4}`;
    bins.set(key, (bins.get(key) ?? 0) + 1);
  }
  return Math.max(...bins.values()) / (info.width * info.height);
}

export function assessSamples(samples, traversalComplete) {
  const reasons = [];
  if (!traversalComplete) reasons.push("scroll traversal did not reach a stable document bottom");
  const failed = samples.filter(s => s.visible_failed_images.length);
  if (failed.length) reasons.push(`unloaded or failed visible images at ${failed.length} sampled scroll positions`);
  const failedVideo = samples.filter(s => s.video_states.some(v => v.error || (v.network_state === 3 && v.ready_state < 2)));
  if (failedVideo.length) reasons.push(`failed visible video at ${failedVideo.length} sampled scroll positions`);
  const hidden = samples.filter(s => s.visible_hidden_reveals.length);
  if (hidden.length) reasons.push(`large hidden/reveal elements at ${hidden.length} sampled scroll positions`);
  const empty = samples.filter(s => s.visible_empty_sections.length && s.visible_main_text_chars < 18 && !s.visible_media);
  if (empty.length >= 2 && (failed.length || hidden.length)) reasons.push(`repeated visually empty section wrappers with asset/reveal failures at ${empty.length} positions`);
  const obstructed = samples.filter(s => s.fixed_overlays.length);
  if (obstructed.length >= 2) reasons.push(`large fixed overlay obstructed ${obstructed.length} sampled positions`);
  const blank = samples.filter(s => s.uniform_pixel_fraction > 0.92 && s.visible_images === 0 && s.visible_media === 0 &&
    (s.visible_hidden_reveals.length || s.visible_empty_sections.length));
  if (blank.length >= 2) reasons.push(`repeated near-uniform viewport with hidden or empty DOM sections at ${blank.length} positions`);
  return { status: reasons.length ? "VISUAL_CAPTURE_INCOMPLETE" : "VISUAL_CAPTURE_COMPLETE", reasons };
}

async function captureAttempt(page, target, attempt, options, session) {
  const dir = join(options.dir, `attempt-${String(attempt).padStart(2, "0")}`);
  await mkdir(dir, { recursive: true });
  const evidence = [];
  const samples = [];
  const screenshot = async (name, kind = "static_visual") => {
    const path = join(dir, `${name}.jpg`);
    await page.screenshot({ path, type: "jpeg", quality: 82, fullPage: false });
    evidence.push({ kind: "rendered_capture", location: path, observed_at: new Date().toISOString(), viewport: target.label, page: `${options.page}-${name}`, evidence_class: kind, scroll_y: await page.evaluate(() => scrollY), url: page.url() });
    return path;
  };
  if (attempt === 1) {
    await screenshot("00-initial");
    if (options.dismissSelector) {
      try {
        await page.locator(options.dismissSelector).first().click({ timeout: 2500 });
        session.interactions.push({ action: "click", selector: options.dismissSelector, at: new Date().toISOString() });
      } catch (error) { session.readiness_warnings.push(`dismiss interaction failed: ${error.message}`); }
    }
  }
  await pause(attempt === 1 ? 700 : 1300);
  await screenshot("01-after-load");
  const step = viewportStep(target.viewport.height);
  let stableBottom = 0;
  let previousHeight = 0;
  let traversalComplete = false;
  const waitMs = attempt === 1 ? 420 : 900;
  for (let i = 0; i < 100; i++) {
    await pause(waitMs);
    let sample = await inspectAfterNavigation(page, session);
    const initialSignals = { failed_images: sample.visible_failed_images.length, hidden_reveals: sample.visible_hidden_reveals.length };
    for (let settle = 0; settle < 3 && (sample.visible_failed_images.length || sample.visible_hidden_reveals.length); settle++) {
      await pause(attempt === 1 ? 450 : 800);
      sample = await inspectAfterNavigation(page, session);
    }
    sample.initial_signals = initialSignals;
    sample.uniform_pixel_fraction = await analyzeBlankViewport(page);
    sample.step = i;
    sample.at = new Date().toISOString();
    samples.push(sample);
    if (i === 0 || i % 3 === 0 || sample.scroll_y + target.viewport.height >= sample.document_height - 12) {
      await screenshot(`02-scroll-${String(i).padStart(2, "0")}`, "interaction_state");
    }
    const atBottom = sample.scroll_y + target.viewport.height >= sample.document_height - 12;
    stableBottom = atBottom && sample.document_height === previousHeight ? stableBottom + 1 : 0;
    if (stableBottom >= 2) { traversalComplete = true; break; }
    previousHeight = sample.document_height;
    await page.mouse.wheel(0, step);
  }
  await pause(900);
  await screenshot("98-bottom", "interaction_state");
  if (attempt > 1 || samples.some(s => s.visible_hidden_reveals.length || s.visible_empty_sections.length)) {
    const lastY = await page.evaluate(() => scrollY);
    for (let y = lastY; y > 0; y -= step * 2) {
      await page.mouse.wheel(0, -step * 2);
      await pause(attempt === 1 ? 250 : 500);
    }
    await screenshot("97-upward-return", "interaction_state");
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await pause(900);
  const fullPath = join(dir, "99-full-page-after-traversal.jpg");
  await page.screenshot({ path: fullPath, type: "jpeg", quality: 82, fullPage: true });
  evidence.push({ kind: "rendered_capture", location: fullPath, observed_at: new Date().toISOString(), viewport: target.label, page: `${options.page}-full-page-after-traversal`, evidence_class: "static_visual", url: page.url() });
  const assessment = assessSamples(samples, traversalComplete);
  return { attempt, dir, samples, traversal_complete: traversalComplete, assessment, evidence,
    document_height_initial: samples[0]?.document_height ?? null, document_height_final: samples.at(-1)?.document_height ?? null };
}

export async function captureVisualSession(browser, target, options) {
  const page = await browser.newPage({ viewport: target.viewport, deviceScaleFactor: 1 });
  if (options.requestGuard) await page.route("**/*", route => {
    if (options.requestGuard(route.request().url())) return route.continue();
    return route.abort("blockedbyclient");
  });
  const session = {
    schema_version: 1, requested_url: target.url, resolved_url: null,
    viewport: target.viewport, device_scale_factor: 1, browser: "chromium", captured_at: new Date().toISOString(),
    adapter: options.adapter ?? "design-intelligence/lib/capture.mjs", runner: options.runner ?? "local",
    browser_version: browser.version(), user_agent: await page.evaluate(() => navigator.userAgent),
    redirects: [], navigation_history: [], navigation_status: null, navigation_timing: null,
    console_errors: [], browser_errors: [], failed_resources: [], readiness_warnings: [], interactions: [], attempts: [], milestones: [],
    forced_visibility: false, status: "REQUESTED",
  };
  page.on("pageerror", error => session.browser_errors.push(error.message));
  page.on("response", response => {
    try {
      if (response.request().isNavigationRequest() && response.frame() === page.mainFrame()) {
        session.navigation_status = response.status();
        session.resolved_url = response.url();
        session.navigation_timing = response.request().timing();
        session.navigation_history.push({ url: response.url(), status: response.status(), at: new Date().toISOString() });
      }
    } catch { /* a detached navigation response is recorded only by its failed request */ }
  });
  page.on("console", message => { if (message.type() === "error") session.console_errors.push(message.text()); });
  page.on("requestfailed", request => session.failed_resources.push({ url: request.url(), error: request.failure()?.errorText ?? "unknown" }));
  page.on("response", response => { if (response.status() >= 400) session.failed_resources.push({ url: response.url(), status: response.status() }); });
  await mkdir(options.dir, { recursive: true });
  try {
    const response = await page.goto(target.url, { waitUntil: "domcontentloaded", timeout: 30_000 });
    session.navigation_status = response?.status() ?? null;
    session.navigation_timing = response?.request().timing() ?? null;
    session.resolved_url = page.url();
    if (!response || response.status() >= 400) throw new Error(`HTTP ${response?.status() ?? "no response"}`);
    session.milestones.push({ state: "SOURCE_REACHABLE", at: new Date().toISOString(), http_status: response.status() });
    session.status = "DOM_LOADED";
    session.milestones.push({ state: "DOM_LOADED", at: new Date().toISOString() });
    for (let request = response.request(); request?.redirectedFrom(); request = request.redirectedFrom()) {
      session.redirects.unshift({ from: request.redirectedFrom().url(), to: request.url() });
    }
    await bounded(page.waitForLoadState("load", { timeout: 5000 }), 5500, "load", session);
    await waitForStablePage(page);
    await bounded(page.evaluate(() => document.fonts.ready), 4000, "fonts", session);
    await bounded(page.waitForFunction(() => [...document.querySelectorAll("video")]
      .filter(video => { const rect = video.getBoundingClientRect(); return rect.width * rect.height > 0 && rect.top < innerHeight && rect.bottom > 0; })
      .every(video => video.readyState >= 2 || video.networkState === 3), null, { timeout: 3500 }), 4000, "hero media", session);
    await pause(900);
    const readiness = await inspectAfterNavigation(page, session);
    session.resolved_url = page.url();
    session.base_readiness = readiness;
    session.status = readiness.visible_failed_images.length || readiness.video_states.some(v => v.error || v.ready_state < 2 && v.network_state === 3) ? "ASSETS_PARTIALLY_READY" : "ASSETS_READY";
    session.milestones.push({ state: session.status, at: new Date().toISOString() });
    for (let attempt = 1; attempt <= 2; attempt++) {
      const result = await captureAttempt(page, target, attempt, options, session);
      session.attempts.push(result);
      if (result.traversal_complete) session.milestones.push({ state: "SCROLL_TRAVERSAL_COMPLETE", at: new Date().toISOString(), attempt });
      session.status = result.assessment.status;
      session.milestones.push({ state: session.status, at: new Date().toISOString(), attempt });
      if (result.assessment.status === "VISUAL_CAPTURE_COMPLETE") break;
    }
    const final = session.attempts.at(-1);
    const diagnosticsPath = join(options.dir, "diagnostics.json");
    const sessionPath = join(options.dir, "session.json");
    await writeFile(diagnosticsPath, `${JSON.stringify({
      status: session.status, reasons: final.assessment.reasons, attempts: session.attempts.map(a => ({
        attempt: a.attempt, traversal_complete: a.traversal_complete, document_height_initial: a.document_height_initial,
        document_height_final: a.document_height_final, assessment: a.assessment, samples: a.samples,
      })), readiness_warnings: session.readiness_warnings, failed_resources: session.failed_resources,
      browser_errors: session.browser_errors, console_errors: session.console_errors,
    }, null, 2)}\n`);
    await writeFile(sessionPath, `${JSON.stringify({ ...session, attempts: session.attempts.map(a => ({
      attempt: a.attempt, artifact_dir: a.dir, traversal_complete: a.traversal_complete,
      document_height_initial: a.document_height_initial, document_height_final: a.document_height_final,
      assessment: a.assessment, evidence: a.evidence,
    })), diagnostics_path: diagnosticsPath }, null, 2)}\n`);
    return { session, sessionPath, diagnosticsPath, evidence: final.evidence, final };
  } catch (error) {
    session.status = "VISUAL_CAPTURE_INCOMPLETE";
    session.milestones.push({ state: session.status, at: new Date().toISOString(), reason: error.message });
    session.browser_errors.push(error.message);
    const sessionPath = join(options.dir, "session.json");
    const diagnosticsPath = join(options.dir, "diagnostics.json");
    await writeFile(sessionPath, `${JSON.stringify(session, null, 2)}\n`);
    await writeFile(diagnosticsPath, `${JSON.stringify({ status: session.status, error: error.message, failed_resources: session.failed_resources }, null, 2)}\n`);
    return { session, sessionPath, diagnosticsPath, evidence: [], final: null };
  } finally { await page.close(); }
}
