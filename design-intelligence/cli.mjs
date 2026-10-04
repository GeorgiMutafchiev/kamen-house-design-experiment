#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { randomUUID } from "node:crypto";
import {
  appendEvent, assertInside, calibrationCandidates, candidateReview, computeCoverage, nextResearchTasks, publicConceptEvidence,
  readState, refreshDerived, saveJson, sourceTypes, validateReference,
} from "./lib/core.mjs";
import { adaptRecord } from "./lib/adapters.mjs";
import { captureVisualSession } from "./lib/capture.mjs";

const defaultRoot = resolve(import.meta.dirname);
const argv = process.argv.slice(2);
const rootFlag = argv.indexOf("--root");
const root = rootFlag >= 0 ? resolve(argv[rootFlag + 1]) : defaultRoot;
if (rootFlag >= 0) argv.splice(rootFlag, 2);
const command = argv.shift();
const arg = (name, fallback) => {
  const index = argv.indexOf(name);
  return index < 0 ? fallback : argv[index + 1];
};
const has = name => argv.includes(name);
const readJson = async path => JSON.parse(await readFile(path, "utf8"));

async function ingest() {
  const path = argv[0];
  if (!path) throw new Error("usage: ingest <record.json> [--root path]");
  const payload = await readJson(path);
  const entries = Array.isArray(payload) ? payload : [payload];
  for (const item of entries) {
    const r = validateReference(item);
    await appendEvent(root, "reference.upsert", r);
    console.log(`saved ${r.id} (${r.source_type}, ${r.evidence.length} evidence items)`);
  }
  await refreshDerived(root);
}

async function adapterIngest() {
  const path = argv[0];
  if (!path) throw new Error("usage: adapter-ingest <manifest.json>");
  const manifest = await readJson(path);
  if (!Array.isArray(manifest.items)) throw new Error("adapter manifest needs items array");
  for (const item of manifest.items) {
    const r = adaptRecord(manifest, item);
    await appendEvent(root, "reference.upsert", r);
    console.log(`persisted ${r.id} from ${r.source_type}`);
  }
  await refreshDerived(root);
}

async function record(type) {
  const path = argv[0];
  if (!path) throw new Error(`usage: ${command} <record.json>`);
  const payload = await readJson(path);
  for (const item of Array.isArray(payload) ? payload : [payload]) await appendEvent(root, type, item);
  await refreshDerived(root);
  console.log(`${type}: saved`);
}

async function captureLive() {
  const id = arg("--id");
  const url = arg("--url");
  const category = arg("--category");
  const interior = arg("--interior");
  const sourceType = arg("--source-type", "live_website");
  if (!id || !url || !category) throw new Error("usage: capture-live --id R-001 --url https://... --category hospitality [--interior https://...] [--source-type live_website|curated_gallery]");
  if (!sourceTypes.includes(sourceType) || !["live_website", "curated_gallery"].includes(sourceType)) throw new Error("capture-live supports live_website or curated_gallery");
  if (!/^https:\/\//.test(url) || (interior && !/^https:\/\//.test(interior))) throw new Error("browser capture requires HTTPS URLs");
  if (!/^[A-Za-z0-9_-]+$/.test(id)) throw new Error("id must contain only letters, digits, hyphen, underscore");
  const state = await readState(root);
  const existing = state.references.find(r => r.id === id);
  const source = new URL(url).hostname;
  const reference = {
    ...existing, id, source, source_type: sourceType, url_or_external_id: url,
    title: existing?.title ?? source, category,
    evidence: existing?.evidence ?? [], operating_commercial: existing?.operating_commercial ?? has("--commercial"),
    holdout: existing?.holdout ?? has("--holdout"),
    usable_patterns: existing?.usable_patterns ?? [], problematic_patterns: existing?.problematic_patterns ?? [],
    provenance: existing?.provenance ?? { adapter: "live-browser", source_url: url, captured_by: "design-intelligence/cli.mjs" },
  };
  const pin = arg("--proxy-spki");
  const browserArgs = ["--no-sandbox"];
  if (pin) browserArgs.push(`--ignore-certificate-errors-spki-list=${pin}`);
  let browser;
  const targets = [
    { name: "home-desktop", page: "home", url, viewport: { width: 1440, height: 1000 }, label: "desktop" },
    { name: "home-mobile", page: "home", url, viewport: { width: 390, height: 844 }, label: "mobile" },
    ...(interior ? [
      { name: "interior-desktop", page: "interior", url: interior, viewport: { width: 1440, height: 1000 }, label: "desktop" },
      { name: "interior-mobile", page: "interior", url: interior, viewport: { width: 390, height: 844 }, label: "mobile" },
    ] : []),
  ];
  try {
    const { chromium } = await import("playwright");
    browser = await chromium.launch({ headless: true, executablePath: arg("--browser", "/usr/bin/chromium"), args: browserArgs });
    for (const target of targets) {
      const dir = join(root, "references", "local-evidence", id, "sessions", target.name);
      const result = await captureVisualSession(browser, target, {
        dir, page: target.page, dismissSelector: arg("--dismiss-selector"),
      });
      const sessionId = randomUUID();
      reference.evidence = [...reference.evidence, ...result.evidence.map(e => ({ ...e,
        relative_location: relative(root, e.location), capture_session_id: sessionId }))];
      await appendEvent(root, "reference.upsert", reference);
      await appendEvent(root, "capture.session", {
        id: sessionId, reference_id: id, viewport: target.label, page: target.page,
        status: result.session.status, requested_url: target.url, resolved_url: result.session.resolved_url,
        captured_at: result.session.captured_at, reason: result.final?.assessment.reasons.join("; ") ||
          (result.session.status === "VISUAL_CAPTURE_COMPLETE" ? "faithful viewport traversal passed diagnostics" : result.session.browser_errors.join("; ") || "capture incomplete"),
        session_path: result.sessionPath, diagnostics_path: result.diagnosticsPath,
        relative_session_path: relative(root, result.sessionPath), relative_diagnostics_path: relative(root, result.diagnosticsPath),
        traversal_complete: result.final?.traversal_complete ?? false, forced_visibility: false,
        evidence_locations: result.evidence.map(e => e.location),
      });
      await appendEvent(root, "source.status", { source, status: result.session.navigation_status && result.session.navigation_status < 400 ? "available" : "unavailable",
        checked_at: new Date().toISOString(), detail: `HTTP ${result.session.navigation_status ?? "no response"}; ${result.session.status}` });
      await refreshDerived(root);
      console.log(`persisted ${id} ${target.name}: ${result.session.status} (${result.sessionPath})`);
      if (result.session.status !== "VISUAL_CAPTURE_COMPLETE") process.exitCode = 2;
    }
  } catch (error) {
    await appendEvent(root, "source.status", { source, status: "unavailable", checked_at: new Date().toISOString(), detail: error.message });
    await refreshDerived(root);
    console.error(`source unavailable: ${source}: ${error.message}`);
    process.exitCode = 2;
  } finally { if (browser) await browser.close(); }
}

async function main() {
  switch (command) {
    case "ingest": return ingest();
    case "adapter-ingest": return adapterIngest();
    case "pattern": return record("pattern.add");
    case "feedback": return record("feedback.add");
    case "source-status": return record("source.status");
    case "capture-audit": return record("capture.session");
    case "direction": {
      const { coverage } = await refreshDerived(root);
      if (!coverage.synthesis_ready) throw new Error(`design synthesis blocked: ${coverage.gate_reasons.join("; ")}`);
      return record("direction.add");
    }
    case "evaluation": return record("evaluation.add");
    case "capture-live": return captureLive();
    case "refresh": {
      const { coverage } = await refreshDerived(root);
      console.log(JSON.stringify({ stage: coverage.stage, synthesis_ready: coverage.synthesis_ready, gaps: coverage.gate_reasons }, null, 2));
      return;
    }
    case "gate": {
      const state = await readState(root);
      const coverage = computeCoverage(state);
      console.log(JSON.stringify({ synthesis_ready: coverage.synthesis_ready, reasons: coverage.gate_reasons, next: nextResearchTasks(coverage) }, null, 2));
      if (!coverage.synthesis_ready) process.exitCode = 2;
      return;
    }
    case "review-gate": {
      const id = argv[0];
      if (!id) throw new Error("usage: review-gate <direction-id>");
      const state = await readState(root);
      if (!state.directions.some(d => d.id === id)) throw new Error(`unknown direction: ${id}`);
      const review = candidateReview(state, id);
      console.log(JSON.stringify(review, null, 2));
      if (!review.filter_passed || !review.human_approved) process.exitCode = 2;
      return;
    }
    case "export-concept-brief": {
      const state = await readState(root);
      const path = arg("--out", join(root, "directions", "concept-evidence.json"));
      assertInside(root, path);
      await saveJson(path, publicConceptEvidence(state));
      console.log(`wrote holdout-filtered brief: ${path}`);
      return;
    }
    case "export-calibration": {
      const state = await readState(root);
      const path = arg("--out", join(root, "research", "calibration-candidates.json"));
      assertInside(root, path);
      await saveJson(path, calibrationCandidates(state));
      console.log(`wrote valid, non-holdout calibration candidates: ${path}`);
      return;
    }
    default: throw new Error("commands: ingest, adapter-ingest, capture-live, capture-audit, pattern, feedback, source-status, direction, evaluation, refresh, gate, review-gate, export-concept-brief, export-calibration");
  }
}

main().catch(error => { console.error(error.message); process.exitCode = 1; });
