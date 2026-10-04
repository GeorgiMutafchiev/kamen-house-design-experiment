#!/usr/bin/env node
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { appendEvent, readState, refreshDerived, saveJson } from "../lib/core.mjs";
import { loadQueue } from "./queue.mjs";
import { safeArtifactPath, validateManifestFiles } from "./contract.mjs";

const value = flag => { const index = process.argv.indexOf(flag); return index < 0 ? null : process.argv[index + 1]; };

async function materialize(sourceRoot, destinationRoot, manifest) {
  await mkdir(destinationRoot, { recursive: true });
  for (const bundle of manifest.bundles) for (const artifact of bundle.artifacts) {
    const source = safeArtifactPath(sourceRoot, artifact.path);
    const target = safeArtifactPath(destinationRoot, artifact.path);
    await mkdir(dirname(target), { recursive: true });
    await copyFile(source, target);
  }
  await writeFile(join(destinationRoot, "research-evidence-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
  await validateManifestFiles(destinationRoot, manifest);
}

function evidenceFromBundle(destinationRoot, bundle) {
  return bundle.screenshots.map(shot => ({
    kind: "rendered_capture", location: safeArtifactPath(destinationRoot, shot.path),
    observed_at: bundle.captured_at, viewport: bundle.viewport_class,
    page: `${bundle.route}-${shot.role}`, evidence_class: shot.role === "scroll" || shot.role === "bottom" ? "interaction_state" : "static_visual",
    capture_session_id: bundle.bundle_id, url: bundle.resolved_url,
    provenance: { manifest: join(destinationRoot, "research-evidence-manifest.json"), sha256: bundle.artifacts.find(a => a.path === shot.path).sha256 },
  }));
}

async function updateQueue(queuePath, queue, manifest) {
  const byId = new Map();
  for (const bundle of manifest.bundles) {
    if (!byId.has(bundle.candidate_id)) byId.set(bundle.candidate_id, []);
    byId.get(bundle.candidate_id).push(bundle);
  }
  for (const item of queue.items) {
    const bundles = byId.get(item.candidate_id);
    if (!bundles?.length) continue;
    item.attempt_count += 1;
    const expected = item.requested_routes.flatMap(route => item.requested_viewports.map(viewport => `${route.name}:${viewport}`));
    const complete = expected.every(key => bundles.some(b => `${b.route}:${b.viewport_class}` === key && b.status === "VISUAL_CAPTURE_COMPLETE"));
    item.status = complete ? "AUDIT_READY" : "CAPTURE_INCOMPLETE";
    item.last_error = complete ? null : bundles.filter(b => b.status !== "VISUAL_CAPTURE_COMPLETE")
      .map(b => `${b.route}/${b.viewport_class}: ${b.render?.completeness_reasons?.join("; ") || "incomplete"}`).join(" | ");
  }
  await saveJson(queuePath, queue);
}

export async function ingestRemote({ artifactRoot, intelligenceRoot, queuePath, updateQueueStatus = true, expectedRunId = null }) {
  const manifest = JSON.parse(await readFile(join(artifactRoot, "research-evidence-manifest.json"), "utf8"));
  if (expectedRunId && manifest.run_id !== expectedRunId) throw new Error(`manifest run ID ${manifest.run_id} differs from downloaded run ${expectedRunId}`);
  await validateManifestFiles(artifactRoot, manifest);
  const queue = await loadQueue(queuePath);
  for (const bundle of manifest.bundles) {
    const item = queue.items.find(x => x.candidate_id === bundle.candidate_id);
    if (!item || item.category !== bundle.category || item.source_discovery_provenance !== bundle.source_discovery_provenance ||
        !item.requested_routes.some(r => r.name === bundle.route && r.url === bundle.requested_url) ||
        !item.requested_viewports.includes(bundle.viewport_class)) throw new Error(`bundle not authorized by queue: ${bundle.candidate_id}`);
  }
  const targetRoot = resolve(intelligenceRoot, "references", "remote-evidence", manifest.run_id);
  await materialize(artifactRoot, targetRoot, manifest);
  let ingested = 0;
  for (const bundle of manifest.bundles) {
    const state = await readState(intelligenceRoot);
    if (state.capture_sessions.some(s => s.id === bundle.bundle_id)) continue;
    const existing = state.references.find(r => r.id === bundle.candidate_id);
    if (existing && (existing.url_or_external_id !== bundle.requested_url || existing.source_type !== "live_website")) {
      throw new Error(`reference identity conflict: ${bundle.candidate_id}`);
    }
    const source = new URL(bundle.requested_url).hostname;
    const evidence = evidenceFromBundle(targetRoot, bundle);
    await appendEvent(intelligenceRoot, "reference.upsert", {
      id: bundle.candidate_id, source, source_type: "live_website", url_or_external_id: bundle.requested_url,
      title: existing?.title ?? source, category: existing?.category ?? bundle.category,
      operating_commercial: existing?.operating_commercial ?? false, holdout: existing?.holdout ?? false,
      researched_at: existing?.researched_at ?? null, evidence, usable_patterns: [], problematic_patterns: [],
      provenance: { ...(existing?.provenance ?? {}), remote_capture_runs: [...new Set([...(existing?.provenance?.remote_capture_runs ?? []), manifest.run_id])],
        discovery: bundle.source_discovery_provenance, capture_adapter: bundle.capture_adapter },
      notes: existing?.notes ?? "Remote capture awaiting V5 human/agent audition; no role assigned.",
    });
    await appendEvent(intelligenceRoot, "capture.session", {
      id: bundle.bundle_id, reference_id: bundle.candidate_id, viewport: bundle.viewport_class, page: bundle.route,
      status: bundle.status, requested_url: bundle.requested_url, resolved_url: bundle.resolved_url,
      captured_at: bundle.captured_at, reason: bundle.status === "VISUAL_CAPTURE_COMPLETE" ? "remote render-complete diagnostics passed" :
        bundle.render?.completeness_reasons?.join("; ") || "remote capture incomplete",
      session_path: safeArtifactPath(targetRoot, bundle.session_path), diagnostics_path: safeArtifactPath(targetRoot, bundle.diagnostics_path),
      traversal_complete: bundle.render.traversal_complete, forced_visibility: bundle.forced_visibility,
      evidence_locations: evidence.map(e => e.location),
      remote_manifest_path: join(targetRoot, "research-evidence-manifest.json"), remote_run_id: manifest.run_id,
    });
    await appendEvent(intelligenceRoot, "source.status", {
      source, status: bundle.navigation.http_status >= 200 && bundle.navigation.http_status < 400 ? "available" : "unavailable",
      checked_at: bundle.captured_at, detail: `remote ${bundle.capture_adapter}: HTTP ${bundle.navigation.http_status ?? "no response"}; ${bundle.status}`,
    });
    ingested++;
  }
  await refreshDerived(intelligenceRoot);
  if (updateQueueStatus && ingested) await updateQueue(queuePath, queue, manifest);
  return { run_id: manifest.run_id, bundles: manifest.bundles.length, ingested, destination: targetRoot };
}

if (process.argv[1] && import.meta.url === new URL(`file://${resolve(process.argv[1])}`).href) {
  ingestRemote({ artifactRoot: value("--artifact-root") || "remote-research-evidence",
    intelligenceRoot: value("--intelligence-root") || "design-intelligence",
    queuePath: value("--queue") || "design-studio-v5/discovery/research-queue.json",
    updateQueueStatus: !process.argv.includes("--no-queue-update") })
    .then(result => console.log(JSON.stringify(result, null, 2)))
    .catch(error => { console.error(error.stack || error.message); process.exitCode = 2; });
}
