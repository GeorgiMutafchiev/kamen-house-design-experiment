#!/usr/bin/env node
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";
import { randomUUID } from "node:crypto";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { chromium } from "playwright";
import { captureVisualSession } from "../lib/capture.mjs";
import { loadQueue, publicUrl, selectQueue, standardViewports } from "./queue.mjs";
import { relativeArtifact, sha256, validateManifestFiles } from "./contract.mjs";

const value = flag => { const index = process.argv.indexOf(flag); return index < 0 ? null : process.argv[index + 1]; };

async function filesUnder(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async entry => entry.isDirectory() ? filesUnder(join(dir, entry.name)) : [join(dir, entry.name)]));
  return nested.flat();
}

function screenshotRole(path) {
  const name = basename(path);
  if (name.startsWith("00-initial")) return "initial";
  if (name.startsWith("02-scroll")) return "scroll";
  if (name.startsWith("98-bottom")) return "bottom";
  if (name.startsWith("99-full-page-after-traversal")) return "full_after_traversal";
  if (name.startsWith("97-upward-return")) return "upward";
  return null;
}

export async function bundleFromCapture(out, item, route, viewportClass, result, runId) {
  const session = result.session;
  const final = result.final;
  const dir = join(out, item.candidate_id, `${route.name}-${viewportClass}`);
  const files = await filesUnder(dir);
  const artifacts = await Promise.all(files.map(async path => ({ path: relativeArtifact(out, path), sha256: sha256(await readFile(path)) })));
  const screenshots = artifacts.filter(a => a.path.endsWith(".jpg") && screenshotRole(a.path))
    .map(a => ({ path: a.path, role: screenshotRole(a.path) }));
  const samples = final?.samples ?? [];
  return {
    schema_version: 1, bundle_id: randomUUID(), candidate_id: item.candidate_id, category: item.category,
    reason_for_interest: item.reason_for_interest, source_discovery_provenance: item.source_discovery_provenance,
    requested_url: route.url, resolved_url: session.resolved_url, route: route.name,
    captured_at: session.captured_at, capture_adapter: "github_actions_playwright",
    runner_id: process.env.RUNNER_NAME || "local-worker", run_id: runId,
    user_agent: session.user_agent, browser_version: session.browser_version,
    viewport_class: viewportClass, viewport: standardViewports[viewportClass], device_scale_factor: session.device_scale_factor,
    status: session.status, forced_visibility: session.forced_visibility,
    navigation: { http_status: session.navigation_status, resolved_url: session.resolved_url,
      redirects: session.redirects, timing: session.navigation_timing, console_errors: session.console_errors,
      browser_errors: session.browser_errors, failed_resources: session.failed_resources,
      blocked_requests: session.failed_resources.filter(x => x.status === 403 || x.status === 451),
      readiness_warnings: session.readiness_warnings },
    render: { document_height_initial: final?.document_height_initial ?? null,
      document_height_final: final?.document_height_final ?? null,
      traversal_steps: samples.length, document_grew: Boolean(final && final.document_height_final > final.document_height_initial),
      second_pass: session.attempts.length > 1, retry_count: Math.max(0, session.attempts.length - 1),
      traversal_complete: final?.traversal_complete ?? false, image_readiness: session.base_readiness?.visible_failed_images ?? [],
      font_readiness: session.base_readiness?.font_status ?? "unknown",
      hidden_reveal_count: samples.reduce((sum, s) => sum + s.visible_hidden_reveals.length, 0),
      suspicious_blank_count: samples.filter(s => s.uniform_pixel_fraction > 0.92 && (s.visible_hidden_reveals.length || s.visible_empty_sections.length)).length,
      lazy_content_observations: samples.map(s => ({ step: s.step, document_height: s.document_height, lazy_images: s.lazy_images, visible_images: s.visible_images })),
      completeness_reasons: final?.assessment.reasons ?? session.browser_errors },
    session_path: relativeArtifact(out, result.sessionPath), diagnostics_path: relativeArtifact(out, result.diagnosticsPath),
    screenshots, artifacts,
  };
}

export async function runWorker({ queuePath, out, ids = [], limit = 3, executablePath = null, runId = process.env.GITHUB_RUN_ID || `local-${Date.now()}` }) {
  const queue = await loadQueue(queuePath);
  const selected = selectQueue(queue, ids, limit);
  if (!selected.length) throw new Error("no eligible queued candidates selected");
  await mkdir(out, { recursive: true });
  const manifest = { schema_version: 1, run_id: String(runId), generated_at: new Date().toISOString(),
    queue_source: queuePath, runner: process.env.RUNNER_NAME || "local-worker", bundles: [], errors: [] };
  await writeFile(join(out, "research-evidence-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  let browser;
  try {
    browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}), args: ["--no-sandbox"] });
    for (const item of selected) for (const route of item.requested_routes) for (const viewportClass of item.requested_viewports) {
      const target = { name: `${route.name}-${viewportClass}`, page: route.name, url: route.url,
        viewport: standardViewports[viewportClass], label: viewportClass };
      try {
        const result = await captureVisualSession(browser, target, {
          dir: join(out, item.candidate_id, target.name), page: route.name, dismissSelector: item.dismiss_selector,
          adapter: "github_actions_playwright", runner: manifest.runner,
          requestGuard: url => {
            if (/^(?:data|blob|about):/.test(url)) return true;
            try { publicUrl(url); return true; } catch { return false; }
          },
        });
        const bundle = await bundleFromCapture(out, item, route, viewportClass, result, manifest.run_id);
        manifest.bundles.push(bundle);
        manifest.generated_at = new Date().toISOString();
        await writeFile(join(out, "research-evidence-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
        console.log(`${item.candidate_id} ${route.name} ${viewportClass}: ${bundle.status}`);
      } catch (error) {
        manifest.errors.push({ candidate_id: item.candidate_id, route: route.name, viewport: viewportClass, error: error.message });
        manifest.generated_at = new Date().toISOString();
        await writeFile(join(out, "research-evidence-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
      }
    }
  } catch (error) {
    manifest.errors.push({ error: error.message, stage: "worker" });
    manifest.generated_at = new Date().toISOString();
    await writeFile(join(out, "research-evidence-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  } finally { await browser?.close(); }
  await validateManifestFiles(out, manifest);
  return manifest;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const queuePath = value("--queue") || "design-studio-v5/discovery/research-queue.json";
  const out = value("--out") || "remote-research-evidence";
  const ids = value("--ids")?.split(",").map(x => x.trim()).filter(Boolean) ?? [];
  const limit = Number(value("--limit") || "3");
  runWorker({ queuePath, out, ids, limit, executablePath: value("--browser") }).then(manifest => {
    console.log(`manifest: ${join(out, "research-evidence-manifest.json")} (${manifest.bundles.length} bundles, ${manifest.errors.length} errors)`);
    if (manifest.errors.length) process.exitCode = 2;
  }).catch(error => { console.error(error.stack || error.message); process.exitCode = 2; });
}
