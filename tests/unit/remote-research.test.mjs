import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import sharp from "sharp";
import { captureStatus, computeCoverage, readState } from "../../design-intelligence/lib/core.mjs";
import { assessSamples } from "../../design-intelligence/lib/capture.mjs";
import { safeArtifactPath, sha256, validateManifestFiles } from "../../design-intelligence/remote/contract.mjs";
import { ingestRemote } from "../../design-intelligence/remote/ingest.mjs";
import { loadQueue, selectQueue, validateQueue } from "../../design-intelligence/remote/queue.mjs";

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), "kamen-remote-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const artifactRoot = join(root, "artifact"), intelligenceRoot = join(root, "intelligence"), queuePath = join(root, "queue.json");
  await mkdir(artifactRoot, { recursive: true });
  const queue = { schema_version: 1, items: [{ candidate_id: "TEST_SITE", url: "https://example.com/", category: "hospitality",
    reason_for_interest: "flow test", priority: 1, requested_viewports: ["desktop", "mobile"],
    requested_routes: [{ name: "home", url: "https://example.com/" }], source_discovery_provenance: "fixture",
    status: "QUEUED", attempt_count: 0, last_error: null }] };
  await writeFile(queuePath, JSON.stringify(queue));
  return { root, artifactRoot, intelligenceRoot, queuePath, queue };
}

async function addBundle(artifactRoot, viewportClass, status = "VISUAL_CAPTURE_COMPLETE") {
  const viewport = viewportClass === "desktop" ? { width: 1440, height: 1000 } : { width: 390, height: 844 };
  const prefix = `TEST_SITE/home-${viewportClass}`;
  const artifacts = [], screenshots = [];
  const put = async (path, bytes) => {
    const absolute = join(artifactRoot, path);
    await mkdir(dirname(absolute), { recursive: true });
    await writeFile(absolute, bytes);
    artifacts.push({ path, sha256: sha256(bytes) });
  };
  if (status === "VISUAL_CAPTURE_COMPLETE") for (const [role, name, height] of [
    ["initial", "00-initial.jpg", viewport.height], ["scroll", "02-scroll-00.jpg", viewport.height],
    ["bottom", "98-bottom.jpg", viewport.height], ["full_after_traversal", "99-full-page-after-traversal.jpg", viewport.height + 200],
  ]) {
    const path = `${prefix}/attempt-01/${name}`;
    await put(path, await sharp({ create: { width: viewport.width, height, channels: 3, background: "#abcdef" } }).jpeg().toBuffer());
    screenshots.push({ path, role });
  }
  const sample = { visible_failed_images: [], video_states: [], visible_hidden_reveals: [], visible_empty_sections: [],
    fixed_overlays: [], visible_images: 1, visible_media: 0, uniform_pixel_fraction: 0.4 };
  const session = { status, requested_url: "https://example.com/", resolved_url: status === "VISUAL_CAPTURE_COMPLETE" ? "https://example.com/" : null, viewport };
  const diagnostics = { status, attempts: status === "VISUAL_CAPTURE_COMPLETE" ? [{ traversal_complete: true,
    document_height_initial: viewport.height, document_height_final: viewport.height + 200, samples: [sample, sample] }] : [] };
  const session_path = `${prefix}/session.json`, diagnostics_path = `${prefix}/diagnostics.json`;
  await put(session_path, Buffer.from(JSON.stringify(session)));
  await put(diagnostics_path, Buffer.from(JSON.stringify(diagnostics)));
  return { schema_version: 1, bundle_id: `bundle-${viewportClass}`, candidate_id: "TEST_SITE", category: "hospitality",
    reason_for_interest: "flow test", source_discovery_provenance: "fixture", requested_url: "https://example.com/",
    resolved_url: session.resolved_url, route: "home", captured_at: "2026-10-04T12:00:00Z",
    capture_adapter: "github_actions_playwright", runner_id: "test-runner", run_id: "123", user_agent: "test-agent", browser_version: "1",
    viewport_class: viewportClass, viewport, device_scale_factor: 1, status, forced_visibility: false,
    navigation: { http_status: status === "VISUAL_CAPTURE_COMPLETE" ? 200 : 503, redirects: [], console_errors: [], browser_errors: [], failed_resources: [] },
    render: { document_height_initial: viewport.height, document_height_final: viewport.height + 200,
      traversal_steps: status === "VISUAL_CAPTURE_COMPLETE" ? 2 : 0, retry_count: status === "VISUAL_CAPTURE_COMPLETE" ? 0 : 1,
      traversal_complete: status === "VISUAL_CAPTURE_COMPLETE", completeness_reasons: status === "VISUAL_CAPTURE_COMPLETE" ? [] : ["HTTP 503"] },
    session_path, diagnostics_path, screenshots, artifacts };
}

async function manifest(root, bundles) {
  const value = { schema_version: 1, run_id: "123", generated_at: "2026-10-04T12:00:00Z", bundles, errors: [] };
  await writeFile(join(root, "research-evidence-manifest.json"), JSON.stringify(value));
  return value;
}

test("queue keeps all 19 V5 candidates and rejects unsafe or duplicate work", async () => {
  const queue = await loadQueue("design-studio-v5/discovery/research-queue.json");
  assert.equal(queue.items.length, 19);
  assert.equal(new Set(queue.items.map(x => x.candidate_id)).size, 19);
  assert.equal(selectQueue(queue, [], 3).length, 3);
  assert.throws(() => validateQueue({ ...queue, items: [queue.items[0], queue.items[0]] }), /duplicate/);
  assert.throws(() => validateQueue({ ...queue, items: [{ ...queue.items[0], url: "https://127.0.0.1/" }] }), /public HTTPS/);
});

test("manifest validates artifacts, faithful traversal and browser dimensions", async t => {
  const f = await fixture(t);
  const bundle = await addBundle(f.artifactRoot, "desktop");
  const index = await manifest(f.artifactRoot, [bundle]);
  await validateManifestFiles(f.artifactRoot, index);
  assert.equal(assessSamples([{ visible_failed_images: [{ src: "broken" }], video_states: [], visible_hidden_reveals: [],
    visible_empty_sections: [], fixed_overlays: [], visible_images: 1, visible_media: 0, uniform_pixel_fraction: 0.4 }], true).status,
  "VISUAL_CAPTURE_INCOMPLETE");
  assert.throws(() => safeArtifactPath(f.artifactRoot, "../escape.jpg"), /unsafe/);
  const screenshot = bundle.artifacts.find(a => a.path.endsWith("00-initial.jpg"));
  screenshot.sha256 = "0".repeat(64);
  await assert.rejects(validateManifestFiles(f.artifactRoot, index), /hash mismatch/);
});

test("ingestion is idempotent; desktop and mobile must both complete", async t => {
  const f = await fixture(t);
  const desktop = await addBundle(f.artifactRoot, "desktop");
  const mobile = await addBundle(f.artifactRoot, "mobile");
  await manifest(f.artifactRoot, [desktop, mobile]);
  const first = await ingestRemote(f);
  assert.equal(first.ingested, 2);
  let state = await readState(f.intelligenceRoot);
  assert.equal(captureStatus(state.references[0], state), "VISUAL_CAPTURE_COMPLETE");
  assert.equal(computeCoverage(state).counts.researched, 0, "capture without audited pattern is not research");
  const second = await ingestRemote(f);
  assert.equal(second.ingested, 0);
  state = await readState(f.intelligenceRoot);
  assert.equal(state.capture_sessions.length, 2);
  const queue = JSON.parse(await readFile(f.queuePath, "utf8"));
  assert.equal(queue.items[0].status, "AUDIT_READY");
  assert.equal(queue.items[0].attempt_count, 1);
  assert.equal(queue.items[0].last_run_id, "123");
});

test("incomplete mobile session remains excluded from positive evidence", async t => {
  const f = await fixture(t);
  await manifest(f.artifactRoot, [await addBundle(f.artifactRoot, "desktop"), await addBundle(f.artifactRoot, "mobile", "VISUAL_CAPTURE_INCOMPLETE")]);
  await ingestRemote(f);
  const state = await readState(f.intelligenceRoot);
  assert.equal(captureStatus(state.references[0], state), "VISUAL_CAPTURE_INCOMPLETE");
  assert.equal(computeCoverage(state).counts.capture_complete, 0);
  const queue = JSON.parse(await readFile(f.queuePath, "utf8"));
  assert.equal(queue.items[0].status, "CAPTURE_INCOMPLETE");
});
