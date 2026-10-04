import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { chromium } from "playwright";
import { captureVisualSession, inspectViewport, viewportStep } from "../../design-intelligence/lib/capture.mjs";
import { appendEvent, calibrationCandidates, captureStatus, computeCoverage, publicConceptEvidence, readState } from "../../design-intelligence/lib/core.mjs";

const pin = "n9jEr2dCP1tg9exQzr7xEpZ4TjG2QWO02LUFhmAzII4=";
const svg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80'%3E%3Crect width='120' height='80' fill='green'/%3E%3C/svg%3E";

async function fixture(t, html) {
  const root = await mkdtemp(join(tmpdir(), "kamen-capture-test-"));
  const server = createServer((request, response) => {
    if (request.url === "/missing.png") { response.writeHead(404); response.end(); return; }
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.end(html);
  });
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const browser = await chromium.launch({ headless: true, executablePath: "/usr/bin/chromium", args: ["--no-sandbox", `--ignore-certificate-errors-spki-list=${pin}`] });
  t.after(async () => { await browser.close(); await new Promise(resolve => server.close(resolve)); await rm(root, { recursive: true, force: true }); });
  return { root, browser, url: `http://127.0.0.1:${server.address().port}/` };
}

test("progressive viewport traversal reveals lazy image and follows growing document height", async t => {
  const html = `<!doctype html><html><body style="margin:0"><main>
  <section style="height:700px"><h1>Opening</h1><p>Visible opening text</p></section>
  <section id="reveal" style="height:700px;opacity:0"><h2>Revealed section</h2><img id="lazy" loading="lazy" width="120" height="80"></section>
  <section style="height:700px"><h2>Initial bottom</h2></section></main>
  <script>
    new IntersectionObserver(entries => { if(entries[0].isIntersecting){document.querySelector('#reveal').style.opacity='1';document.querySelector('#lazy').src=${JSON.stringify(svg)}} }).observe(document.querySelector('#reveal'));
    let added=false; addEventListener('scroll',()=>{if(!added && scrollY>700){added=true;const s=document.createElement('section');s.style.height='700px';s.innerHTML='<h2>New bottom after scroll</h2>';document.querySelector('main').append(s)}});
  </script></body></html>`;
  const { root, browser, url } = await fixture(t, html);
  assert.equal(viewportStep(600), 432);
  const result = await captureVisualSession(browser, { url, viewport: { width: 800, height: 600 }, label: "desktop" }, { dir: join(root, "session"), page: "home" });
  assert.equal(result.session.status, "VISUAL_CAPTURE_COMPLETE", JSON.stringify(result.final?.samples.map(s => ({ y: s.scroll_y, h: s.document_height, images: s.visible_failed_images, hidden: s.visible_hidden_reveals, initial: s.initial_signals }))));
  const samples = result.session.attempts[0].samples;
  assert.ok(new Set(samples.map(s => s.scroll_y)).size >= 4, "multiple real scroll positions were sampled");
  assert.ok(result.session.attempts[0].document_height_final > result.session.attempts[0].document_height_initial, "dynamic height was followed");
  assert.ok(samples.some(s => s.visible_images && !s.visible_failed_images.length));
  assert.equal(result.session.forced_visibility, false);
  assert.ok(result.evidence.some(e => e.page.includes("full-page-after-traversal")));
  assert.equal(JSON.parse(await readFile(result.sessionPath, "utf8")).resolved_url, url);
});

test("failed image and hidden reveal trigger retry and an incomplete state", async t => {
  const html = `<!doctype html><html><body style="margin:0"><main><section style="height:700px"><h1>Visible heading</h1><img src="/missing.png" width="200" height="200"></section><section style="height:700px;opacity:0"><h2>Never revealed</h2></section></main></body></html>`;
  const { root, browser, url } = await fixture(t, html);
  const page = await browser.newPage({ viewport: { width: 800, height: 600 } });
  await page.goto(url);
  const diagnostic = await inspectViewport(page);
  assert.equal(diagnostic.visible_failed_images.length, 1);
  await page.mouse.wheel(0, 500);
  await page.waitForTimeout(150);
  assert.ok((await inspectViewport(page)).visible_hidden_reveals.length > 0);
  await page.close();
  const result = await captureVisualSession(browser, { url, viewport: { width: 800, height: 600 }, label: "desktop" }, { dir: join(root, "session"), page: "home" });
  assert.equal(result.session.status, "VISUAL_CAPTURE_INCOMPLETE");
  assert.equal(result.session.attempts.length, 2, "slower retry ran");
  assert.match(result.final.assessment.reasons.join(" "), /hidden\/reveal|unloaded/);
  assert.equal(JSON.parse(await readFile(result.diagnosticsPath, "utf8")).status, "VISUAL_CAPTURE_INCOMPLETE");
});

test("client-side navigation settles before the canonical initial capture", async t => {
  const html = `<!doctype html><html><body><main><section style="height:800px"><h1>Final page</h1><p>This is the actual content after client-side navigation.</p></section><section style="height:800px"><h2>Second section</h2><p>Additional visible content makes the scroll sequence testable.</p></section></main><script>if(location.pathname==='/')setTimeout(()=>location.replace('/final'),300)</script></body></html>`;
  const { root, browser, url } = await fixture(t, html);
  const result = await captureVisualSession(browser, { url, viewport: { width: 800, height: 600 }, label: "desktop" },
    { dir: join(root, "redirect-session"), page: "home" });
  assert.equal(result.session.status, "VISUAL_CAPTURE_COMPLETE", JSON.stringify({ errors: result.session.browser_errors, warnings: result.session.readiness_warnings, reasons: result.final?.assessment.reasons }));
  assert.match(result.session.resolved_url, /\/final$/);
  assert.ok(result.session.navigation_history.some(x => x.url.endsWith("/final")));
  assert.ok(result.evidence.some(e => e.page.includes("full-page-after-traversal")));
});

test("an invisible fixed layer is not misclassified as an obstructing overlay", async t => {
  const html = `<!doctype html><html><body><div style="position:fixed;inset:0;z-index:100;opacity:0;pointer-events:none">Inactive drawer</div><main><section style="height:800px"><h1>Visible opening with substantial content</h1></section><section style="height:800px"><h2>Visible continuation of the page</h2></section></main></body></html>`;
  const { root, browser, url } = await fixture(t, html);
  const result = await captureVisualSession(browser, { url, viewport: { width: 800, height: 600 }, label: "desktop" },
    { dir: join(root, "hidden-overlay-session"), page: "home" });
  assert.equal(result.session.status, "VISUAL_CAPTURE_COMPLETE", JSON.stringify(result.final?.assessment.reasons));
  assert.ok(result.final.samples.every(sample => sample.fixed_overlays.length === 0));
});

test("visible embedded player error invalidates an otherwise traversable capture", async t => {
  const html = `<!doctype html><html><body><main><section style="height:800px"><h1>Property</h1><div><span>Player error</span></div><p>The player is having trouble.</p></section><section style="height:800px"><h2>Stay</h2></section></main></body></html>`;
  const { root, browser, url } = await fixture(t, html);
  const result = await captureVisualSession(browser, { url, viewport: { width: 800, height: 600 }, label: "desktop" },
    { dir: join(root, "player-error-session"), page: "home" });
  assert.equal(result.session.status, "VISUAL_CAPTURE_INCOMPLETE");
  assert.match(result.final.assessment.reasons.join(" "), /visible player\/page error/i);
  assert.ok(result.final.samples.some(sample => sample.visible_error_messages.includes("Player error")));
});

test("a logged dismiss click does not qualify a capture while the control remains visible", async t => {
  const html = `<!doctype html><html><body><div style="position:fixed;bottom:0;background:white;z-index:10"><button id="consent">Accept</button></div><main><section style="height:800px"><h1>Opening</h1></section><section style="height:800px"><h2>Continuation</h2></section></main></body></html>`;
  const { root, browser, url } = await fixture(t, html);
  const result = await captureVisualSession(browser, { url, viewport: { width: 800, height: 600 }, label: "desktop" },
    { dir: join(root, "persistent-consent-session"), page: "home", dismissSelector: "#consent" });
  assert.equal(result.session.status, "VISUAL_CAPTURE_INCOMPLETE");
  assert.equal(result.session.interactions.length, 1);
  assert.match(result.final.assessment.reasons.join(" "), /dismiss control remained visible/);
});

test("audit and incomplete captures cannot affect coverage, calibration, holdouts, or concept evidence", async t => {
  const root = await mkdtemp(join(tmpdir(), "kamen-capture-ledger-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const [id, holdout] of [["R-1", false], ["H-1", true]]) {
    const url = `https://example.com/${id}`;
    await appendEvent(root, "reference.upsert", { id, title: id, source: "example.com", source_type: "live_website",
      url_or_external_id: url, category: "hospitality", operating_commercial: true, holdout,
      evidence: [{ kind: "rendered_capture", location: `/tmp/${id}-legacy.jpg`, observed_at: "2026-10-04", viewport: "desktop" },
        ...["desktop", "mobile"].map(viewport => ({ kind: "rendered_capture", location: `/tmp/${id}-${viewport}.jpg`, observed_at: "2026-10-04", viewport }))],
      researched_at: "2026-10-04", usable_patterns: [], problematic_patterns: [], provenance: { adapter: "fixture" } });
    await appendEvent(root, "pattern.add", { id: `P-${id}`, dimension: "typography", principle: "Scale creates hierarchy", observation: "Large headline beside small utility labels", polarity: "usable", confidence: "medium", reference_ids: [id], do_not_copy: "Do not duplicate typography" });
    for (const viewport of ["desktop", "mobile"]) await appendEvent(root, "capture.session", { id: `AUDIT-${id}-${viewport}`, reference_id: id, page: "home", viewport,
      requested_url: url, captured_at: "2026-10-04", status: "CAPTURE_AUDIT_REQUIRED", reason: "legacy capture" });
  }
  let state = await readState(root);
  assert.equal(computeCoverage(state).counts.researched, 0);
  assert.equal(computeCoverage(state).counts.holdout, 0);
  assert.equal(calibrationCandidates(state).length, 0);
  assert.equal(publicConceptEvidence(state).references.length, 0);
  assert.equal(captureStatus(state.references[0], state), "CAPTURE_AUDIT_REQUIRED");
  for (const id of ["R-1", "H-1"]) for (const viewport of ["desktop", "mobile"]) await appendEvent(root, "capture.session", {
    id: `VALID-${id}-${viewport}`, reference_id: id, page: "home", viewport, status: "VISUAL_CAPTURE_COMPLETE",
    requested_url: `https://example.com/${id}`, resolved_url: `https://example.com/${id}`, captured_at: "2026-10-04",
    reason: "render complete", traversal_complete: true, forced_visibility: false,
    session_path: `/tmp/${id}-${viewport}/session.json`, diagnostics_path: `/tmp/${id}-${viewport}/diagnostics.json`,
    evidence_locations: [`/tmp/${id}-${viewport}.jpg`],
  });
  state = await readState(root);
  assert.equal(computeCoverage(state).counts.researched, 1);
  assert.equal(computeCoverage(state).counts.holdout, 1);
  assert.equal(calibrationCandidates(state).length, 1);
  assert.deepEqual(publicConceptEvidence(state).references.map(r => r.id), ["R-1"]);
  assert.deepEqual(calibrationCandidates(state)[0].evidence.map(e => e.location).sort(), ["/tmp/R-1-desktop.jpg", "/tmp/R-1-mobile.jpg"]);
  await appendEvent(root, "capture.session", { id: "BROKEN-R-1-mobile", reference_id: "R-1", page: "home", viewport: "mobile",
    requested_url: "https://example.com/R-1", captured_at: "2026-10-04", status: "VISUAL_CAPTURE_INCOMPLETE", reason: "image failed" });
  await appendEvent(root, "capture.session", { id: "BROKEN-H-1-mobile", reference_id: "H-1", page: "home", viewport: "mobile",
    requested_url: "https://example.com/H-1", captured_at: "2026-10-04", status: "VISUAL_CAPTURE_INCOMPLETE", reason: "image failed" });
  state = await readState(root);
  assert.equal(computeCoverage(state).counts.researched, 0);
  assert.equal(computeCoverage(state).counts.holdout, 0);
  assert.equal(calibrationCandidates(state).length, 0);
  assert.equal(publicConceptEvidence(state).references.length, 0);
});
