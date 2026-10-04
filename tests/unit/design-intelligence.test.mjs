import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import {
  appendEvent, candidateReview, computeCoverage, dimensions, nextResearchTasks, publicConceptEvidence,
  readState, refreshDerived, validateDirection, validateEvaluation,
} from "../../design-intelligence/lib/core.mjs";
import { adaptRecord } from "../../design-intelligence/lib/adapters.mjs";

async function scratch(t) {
  const root = await mkdtemp(join(tmpdir(), "kamen-intelligence-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  return root;
}

function reference(id, extras = {}) {
  return {
    id, source: extras.source ?? "sample.org", source_type: extras.source_type ?? "live_website",
    url_or_external_id: `https://sample.org/${id}`, title: `Sample ${id}`, category: extras.category ?? "hospitality",
    operating_commercial: true, holdout: extras.holdout ?? false, human_status: "unreviewed",
    evidence: extras.evidence ?? [{ kind: "rendered_capture", location: `/tmp/${id}.png`, observed_at: "2026-10-04", viewport: "mobile" }],
    researched_at: extras.researched_at === undefined ? "2026-10-04" : extras.researched_at, usable_patterns: [], problematic_patterns: [],
    provenance: { source_record: `fixture-${id}` },
  };
}

function pattern(id, referenceIds, extras = {}) {
  return {
    id, dimension: extras.dimension ?? "typography", polarity: extras.polarity ?? "usable",
    principle: `Independent type hierarchy ${id}`, observation: `Visible type contrast in ${id}`,
    reference_ids: referenceIds, confidence: "medium", do_not_copy: "Do not reproduce source layout",
  };
}

test("successful research persists across a source failure and restart", async t => {
  const root = await scratch(t);
  await appendEvent(root, "reference.upsert", reference("R-1"));
  await appendEvent(root, "pattern.add", pattern("P-1", ["R-1"]));
  await appendEvent(root, "source.status", { source: "sample.org", status: "unavailable", checked_at: "2026-10-04", detail: "HTTP 503" });
  await appendEvent(root, "reference.upsert", reference("R-1", { evidence: [], researched_at: null }));
  const restarted = await readState(root);
  assert.equal(restarted.references.length, 1);
  assert.equal(restarted.references[0].evidence.length, 1);
  assert.equal(restarted.references[0].researched_at, "2026-10-04");
  assert.equal(restarted.patterns.length, 1);
  assert.equal(restarted.sources["sample.org"].status, "unavailable");
  const { coverage } = await refreshDerived(root);
  assert.equal(coverage.dimensions.typography.reference_count, 1);
  assert.equal(coverage.synthesis_ready, false);
  assert.match(await readFile(join(root, "CURRENT_DESIGN_TRUTH.md"), "utf8"), /sample\.org: unavailable/);
});

test("all five adapters retain source provenance without inventing inspection", async t => {
  const root = await scratch(t);
  const types = ["live_website", "curated_gallery", "structured_database", "human_supplied", "local_evidence"];
  for (const [index, type] of types.entries()) {
    const r = adaptRecord({ source_type: type, source: `channel-${type}`, provenance: `manifest-${index}` }, {
      id: `R-${index}`, title: type, category: "hospitality", url_or_external_id: `external-${index}`, evidence: [],
    });
    assert.equal(r.provenance.source_record, `manifest-${index}`);
    await appendEvent(root, "reference.upsert", r);
  }
  const state = await readState(root);
  assert.deepEqual(new Set(state.references.map(r => r.source_type)), new Set(types));
  assert.equal(computeCoverage(state).counts.researched, 0);
});

test("offline adapter ingestion remains operational after live browser failure", async t => {
  const root = await scratch(t);
  await appendEvent(root, "source.status", { source: "live-browser", status: "unavailable", checked_at: "2026-10-04", detail: "HTTP 503" });
  const manifest = join(root, "owner-manifest.json");
  await writeFile(manifest, JSON.stringify({
    source_type: "human_supplied", source: "owner upload", provenance: "file-owner-001",
    items: [{ id: "R-OWNER-001", title: "Owner reference", category: "hospitality", url_or_external_id: "file-owner-001",
      evidence: [{ kind: "human_attachment", location: "owner/home.png", observed_at: "2026-10-04", viewport: "desktop" }] }],
  }));
  const cli = resolve("design-intelligence/cli.mjs");
  const run = spawnSync(process.execPath, [cli, "adapter-ingest", manifest, "--root", root], { encoding: "utf8" });
  assert.equal(run.status, 0, run.stderr);
  const state = await readState(root);
  assert.equal(state.references[0].source_type, "human_supplied");
  assert.equal(state.references[0].provenance.source_record, "file-owner-001");
  assert.equal(state.sources["live-browser"].status, "unavailable");
  assert.equal(computeCoverage(state).counts.researched, 0);
});

test("explicit human rejection persists and import cannot overwrite it", async t => {
  const root = await scratch(t);
  await assert.rejects(appendEvent(root, "feedback.add", {
    id: "F-UNKNOWN", subject_id: "missing", by: "human_owner", status: "rejected",
    reason: "Unknown target", provenance: "owner review",
  }), /feedback subject is unknown/);
  await appendEvent(root, "reference.upsert", reference("R-1"));
  await appendEvent(root, "feedback.add", {
    id: "F-1", subject_id: "R-1", by: "human_owner", status: "rejected",
    reason: "Owner found the rendered layout generic", provenance: "owner review 2026-10-04",
  });
  await appendEvent(root, "reference.upsert", reference("R-1"));
  const state = await readState(root);
  assert.equal(state.references[0].human_status, "rejected");
  assert.equal(state.feedback[0].reason, "Owner found the rendered layout generic");
  assert.equal(computeCoverage(state).counts.researched, 0);
});

test("atomic patterns require provenance and holdouts stay out of concept briefs", async t => {
  const root = await scratch(t);
  await appendEvent(root, "reference.upsert", reference("R-1"));
  await appendEvent(root, "reference.upsert", reference("H-1", { holdout: true }));
  await assert.rejects(appendEvent(root, "pattern.add", pattern("BAD", ["missing"])), /unknown reference/);
  await appendEvent(root, "pattern.add", pattern("P-1", ["R-1"]));
  await appendEvent(root, "pattern.add", pattern("H-P-1", ["H-1"]));
  const state = await readState(root);
  const brief = publicConceptEvidence(state);
  assert.deepEqual(brief.references.map(r => r.id), ["R-1"]);
  assert.deepEqual(brief.patterns.map(p => p.id), ["P-1"]);
  assert.equal(computeCoverage(state).dimensions.typography.reference_count, 1);
});

test("coverage is gap-directed and synthesis refuses a small homogeneous corpus", async t => {
  const root = await scratch(t);
  await appendEvent(root, "reference.upsert", reference("R-1"));
  await appendEvent(root, "pattern.add", pattern("P-1", ["R-1"]));
  const state = await readState(root);
  const coverage = computeCoverage(state);
  assert.equal(coverage.stage, "high_signal_exploration");
  assert.equal(coverage.dimensions.typography.confidence, "low");
  assert.equal(coverage.dimensions.navigation.confidence, "insufficient");
  assert.equal(coverage.synthesis_ready, false);
  assert.match(nextResearchTasks(coverage)[0], /Stage 1/);

  const directionPath = join(root, "direction.json");
  await writeFile(directionPath, JSON.stringify({ id: "D-A" }));
  const cli = resolve("design-intelligence/cli.mjs");
  const run = spawnSync(process.execPath, [cli, "direction", directionPath, "--root", root], { encoding: "utf8" });
  assert.notEqual(run.status, 0);
  assert.match(run.stderr, /design synthesis blocked/);
});

test("sufficient mixed evidence survives a live channel outage", async t => {
  const root = await scratch(t);
  const types = ["live_website", "structured_database", "human_supplied", "local_evidence"];
  const categories = ["hospitality", "restaurant", "architecture", "premium consumer"];
  for (let index = 0; index < 24; index++) {
    const id = index < 20 ? `R-${index}` : `H-${index}`;
    await appendEvent(root, "reference.upsert", reference(id, {
      source_type: types[index % types.length], source: `source-${index % types.length}`,
      category: categories[index % categories.length], holdout: index >= 20,
    }));
    await appendEvent(root, "pattern.add", pattern(`P-${index}`, [id]));
  }
  for (const dimension of dimensions.filter(d => d !== "typography")) {
    await appendEvent(root, "pattern.add", pattern(`P-${dimension}`, ["R-0", "R-1"], { dimension }));
  }
  const fullState = await readState(root);
  const withoutHoldouts = structuredClone(fullState);
  withoutHoldouts.references = withoutHoldouts.references.filter(r => !r.holdout);
  const holdoutGap = computeCoverage(withoutHoldouts);
  assert.equal(holdoutGap.stage, "gap_directed_expansion");
  assert.match(nextResearchTasks(holdoutGap).join(" "), /researched holdouts/);
  const before = computeCoverage(fullState);
  assert.equal(before.synthesis_ready, true);
  assert.equal(before.counts.researched, 20);
  assert.equal(before.counts.holdout, 4);
  await appendEvent(root, "source.status", { source: "source-0", status: "unavailable", checked_at: "2026-10-04", detail: "network down" });
  const after = computeCoverage(await readState(root));
  assert.equal(after.synthesis_ready, true);
  assert.deepEqual(after.unresolved_gaps, []);
});

test("direction provenance, distinct grammar, and independent rendered evaluation are enforced", async t => {
  const root = await scratch(t);
  await appendEvent(root, "reference.upsert", reference("R-1"));
  await appendEvent(root, "reference.upsert", reference("H-1", { holdout: true }));
  await appendEvent(root, "pattern.add", pattern("P-1", ["R-1"]));
  await appendEvent(root, "pattern.add", pattern("H-P-1", ["H-1"]));
  await appendEvent(root, "pattern.add", pattern("AVOID-1", ["R-1"], { polarity: "avoid" }));
  const state = await readState(root);
  const grammar = {
    composition: "split", typography: "compact", density: "high", navigation: "static",
    imagery: "contained", rhythm: "alternating", mobile: "reordered",
  };
  const direction = { id: "D-A", hypothesis: "Can a factual opening carry the identity?", visual_grammar: grammar,
    decision_provenance: [{ key: "hero", choice: "factual lead", pattern_ids: ["P-1"] }], creator: "concept-maker" };
  validateDirection(direction, state);
  state.directions.push(direction);
  assert.throws(() => validateDirection({ ...direction, id: "D-B", visual_grammar: { ...grammar, composition: "stacked" } }, state), /too similar/);
  assert.throws(() => validateDirection({ ...direction, id: "D-C", decision_provenance: [{ key: "hero", choice: "image", pattern_ids: ["UNKNOWN"] }] }, state), /non-holdout patterns/);
  assert.throws(() => validateDirection({ ...direction, id: "D-H", decision_provenance: [{ key: "hero", choice: "image", pattern_ids: ["H-P-1"] }] }, state), /non-holdout patterns/);
  assert.throws(() => validateDirection({ ...direction, id: "D-N", decision_provenance: [{ key: "hero", choice: "image", pattern_ids: ["AVOID-1"] }] }, state), /usable evidence pattern/);
  const evaluation = {
    id: "E-1", direction_id: "D-A", creator: "concept-maker", reviewer: "art-director",
    role: "art_direction", verdict: "needs_work", evidence: "Desktop hierarchy collapses after hero",
    rendered_evidence: ["desktop", "laptop", "mobile"].map(viewport => ({ viewport, path: `${viewport}.png` })),
  };
  validateEvaluation(evaluation, state);
  assert.throws(() => validateEvaluation({ ...evaluation, reviewer: "concept-maker" }, state), /other than the creator/);
  assert.throws(() => validateEvaluation({ ...evaluation, rendered_evidence: [evaluation.rendered_evidence[0]] }, state), /desktop, laptop, and mobile/);
  state.evaluations.push(evaluation);
  assert.equal(candidateReview(state, "D-A").human_approved, false);
  for (const [index, role] of ["typography", "mobile", "holdout", "ux"].entries()) {
    state.evaluations.push({ ...evaluation, id: `E-${index + 2}`, reviewer: `reviewer-${index}`, role, verdict: "filter_pass" });
  }
  assert.equal(candidateReview(state, "D-A").filter_passed, false);
  state.evaluations[0].verdict = "filter_pass";
  assert.equal(candidateReview(state, "D-A").filter_passed, true);
  assert.equal(candidateReview(state, "D-A").human_approved, false);
});

test("concurrent event writers preserve every record", async t => {
  const root = await scratch(t);
  await Promise.all(Array.from({ length: 8 }, (_, index) => appendEvent(root, "reference.upsert", reference(`R-${index}`))));
  assert.equal((await readState(root)).references.length, 8);
});
