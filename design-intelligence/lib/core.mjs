import { mkdir, open, readFile, rename, stat, unlink, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { randomUUID } from "node:crypto";

export const dimensions = [
  "typography", "navigation", "hero", "photography", "layout_rhythm", "grid",
  "content_density", "cta_hierarchy", "interaction_motion", "mobile_responsive",
  "footer", "hospitality_credibility", "originality_differentiation",
];

export const sourceTypes = [
  "live_website", "curated_gallery", "structured_database", "human_supplied", "local_evidence",
];

export const humanStatuses = ["unreviewed", "approved", "liked", "neutral", "rejected", "forbidden"];
export const feedbackStatuses = ["approved", "partially_approved", "rejected"];
const eventTypes = new Set(["reference.upsert", "pattern.add", "feedback.add", "source.status", "direction.add", "evaluation.add", "capture.session"]);
export const captureStatuses = ["CAPTURE_AUDIT_REQUIRED", "VISUAL_CAPTURE_COMPLETE", "VISUAL_CAPTURE_INCOMPLETE"];

function object(value, label) {
  if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error(`${label} must be an object`);
  return value;
}

function required(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${label} is required`);
  return value.trim();
}

function list(value, label) {
  if (!Array.isArray(value)) throw new Error(`${label} must be an array`);
  return value;
}

function unique(values) { return [...new Set(values)]; }

export function validateReference(input) {
  const r = object(input, "reference");
  required(r.id, "reference.id");
  required(r.title, "reference.title");
  if (!sourceTypes.includes(r.source_type)) throw new Error(`unknown source_type: ${r.source_type}`);
  required(r.source, "reference.source");
  required(r.url_or_external_id, "reference.url_or_external_id");
  required(r.category, "reference.category");
  object(r.provenance, "reference.provenance");
  if (!humanStatuses.includes(r.human_status ?? "unreviewed")) throw new Error("invalid human_status");
  if (!Array.isArray(r.evidence)) throw new Error("reference.evidence must be an array");
  for (const e of r.evidence) {
    object(e, "evidence");
    required(e.kind, "evidence.kind");
    required(e.location, "evidence.location");
    required(e.observed_at, "evidence.observed_at");
    if (!["desktop", "laptop", "mobile", "unspecified"].includes(e.viewport ?? "unspecified")) throw new Error("invalid evidence viewport");
  }
  for (const key of ["usable_patterns", "problematic_patterns"]) {
    if (!Array.isArray(r[key] ?? [])) throw new Error(`reference.${key} must be an array`);
  }
  if (r.operating_commercial !== undefined && typeof r.operating_commercial !== "boolean") throw new Error("operating_commercial must be boolean");
  if (r.holdout !== undefined && typeof r.holdout !== "boolean") throw new Error("holdout must be boolean");
  return {
    ...r, human_status: r.human_status ?? "unreviewed", holdout: r.holdout ?? false,
    operating_commercial: r.operating_commercial ?? false,
    usable_patterns: r.usable_patterns ?? [], problematic_patterns: r.problematic_patterns ?? [],
    notes: r.notes ?? "", researched_at: r.researched_at ?? null,
  };
}

export function validatePattern(input, references) {
  const p = object(input, "pattern");
  required(p.id, "pattern.id");
  if (!dimensions.includes(p.dimension)) throw new Error(`unknown dimension: ${p.dimension}`);
  required(p.principle, "pattern.principle");
  if (!["usable", "avoid"].includes(p.polarity)) throw new Error("pattern.polarity must be usable or avoid");
  const ids = list(p.reference_ids, "pattern.reference_ids");
  if (!ids.length) throw new Error("pattern requires reference provenance");
  for (const id of ids) {
    if (!references.some(r => r.id === id)) throw new Error(`unknown reference: ${id}`);
  }
  required(p.do_not_copy, "pattern.do_not_copy");
  if (!["low", "medium", "high"].includes(p.confidence ?? "low")) throw new Error("invalid pattern confidence");
  return { ...p, reference_ids: unique(ids), observation: required(p.observation, "pattern.observation"), confidence: p.confidence ?? "low" };
}

export function validateFeedback(input) {
  const f = object(input, "feedback");
  required(f.id, "feedback.id");
  required(f.subject_id, "feedback.subject_id");
  if (!feedbackStatuses.includes(f.status)) throw new Error("invalid feedback status");
  required(f.reason, "feedback.reason");
  required(f.provenance, "feedback.provenance");
  if (f.by !== "human_owner") throw new Error("only explicit human owner feedback belongs in the taste ledger");
  return f;
}

export function emptyState() {
  return { references: [], patterns: [], feedback: [], sources: {}, directions: [], evaluations: [], capture_sessions: [] };
}

export function applyEvent(state, event) {
  if (!eventTypes.has(event.type)) throw new Error(`unknown event type: ${event.type}`);
  const data = event.data;
  if (event.type === "reference.upsert") {
    const r = validateReference(data);
    const old = state.references.findIndex(x => x.id === r.id);
    if (old < 0 && r.human_status !== "unreviewed") throw new Error("human status must come from an explicit feedback event");
    if (old >= 0) {
      const previous = state.references[old];
      if (r.source_type !== previous.source_type || r.url_or_external_id !== previous.url_or_external_id || r.holdout !== previous.holdout) {
        throw new Error("reference identity, source type, and holdout assignment are immutable; use a new ID for a different source");
      }
      if (r.human_status !== "unreviewed" && r.human_status !== previous.human_status) {
        throw new Error("human status may change only through feedback");
      }
      r.human_status = previous.human_status;
      const evidence = new Map();
      for (const entry of [...previous.evidence, ...r.evidence]) evidence.set(`${entry.kind}|${entry.location}|${entry.page ?? ""}|${entry.viewport ?? ""}`, entry);
      r.evidence = [...evidence.values()];
      r.researched_at = r.researched_at ?? previous.researched_at;
      r.usable_patterns = unique([...previous.usable_patterns, ...r.usable_patterns]);
      r.problematic_patterns = unique([...previous.problematic_patterns, ...r.problematic_patterns]);
      r.notes = r.notes || previous.notes;
      r.provenance = { ...previous.provenance, ...r.provenance };
    }
    if (old < 0) state.references.push(r); else state.references[old] = r;
  } else if (event.type === "pattern.add") {
    const p = validatePattern(data, state.references);
    if (state.patterns.some(x => x.id === p.id)) throw new Error(`duplicate pattern: ${p.id}`);
    state.patterns.push(p);
  } else if (event.type === "feedback.add") {
    const f = validateFeedback(data);
    if (!state.references.some(r => r.id === f.subject_id) && !state.directions.some(d => d.id === f.subject_id)) {
      throw new Error(`feedback subject is unknown: ${f.subject_id}`);
    }
    if (state.feedback.some(x => x.id === f.id)) throw new Error(`duplicate feedback: ${f.id}`);
    state.feedback.push(f);
    const ref = state.references.find(x => x.id === f.subject_id);
    if (ref) ref.human_status = f.status === "approved" ? "approved" : f.status === "rejected" ? "rejected" : "liked";
  } else if (event.type === "source.status") {
    required(data.source, "source.status.source");
    if (!["available", "unavailable", "unknown"].includes(data.status)) throw new Error("invalid source status");
    state.sources[data.source] = data;
  } else if (event.type === "capture.session") {
    object(data, "capture.session");
    required(data.id, "capture.session.id");
    required(data.reference_id, "capture.session.reference_id");
    if (!state.references.some(r => r.id === data.reference_id)) throw new Error("capture session reference is unknown");
    if (!["desktop", "laptop", "mobile"].includes(data.viewport)) throw new Error("invalid capture viewport");
    if (!captureStatuses.includes(data.status)) throw new Error("invalid capture status");
    required(data.page, "capture.session.page");
    required(data.requested_url, "capture.session.requested_url");
    required(data.captured_at, "capture.session.captured_at");
    required(data.reason, "capture.session.reason");
    if (data.status === "VISUAL_CAPTURE_COMPLETE") {
      required(data.resolved_url, "capture.session.resolved_url");
      required(data.session_path, "capture.session.session_path");
      required(data.diagnostics_path, "capture.session.diagnostics_path");
      if (data.traversal_complete !== true || data.forced_visibility === true) throw new Error("complete capture requires faithful traversal");
      if (!Array.isArray(data.evidence_locations) || !data.evidence_locations.length ||
        data.evidence_locations.some(location => !state.references.find(r => r.id === data.reference_id)?.evidence.some(e => e.kind === "rendered_capture" && e.location === location))) {
        throw new Error("complete capture requires stored rendered evidence for this reference");
      }
    }
    if (state.capture_sessions.some(s => s.id === data.id)) throw new Error(`duplicate capture session: ${data.id}`);
    state.capture_sessions.push(data);
  } else if (event.type === "direction.add") {
    validateDirection(data, state);
    if (state.directions.some(x => x.id === data.id)) throw new Error(`duplicate direction: ${data.id}`);
    state.directions.push(data);
  } else if (event.type === "evaluation.add") {
    validateEvaluation(data, state);
    if (state.evaluations.some(x => x.id === data.id)) throw new Error(`duplicate evaluation: ${data.id}`);
    state.evaluations.push(data);
  }
  return state;
}

export function validateDirection(d, state) {
  object(d, "direction"); required(d.id, "direction.id"); object(d.visual_grammar, "direction.visual_grammar");
  required(d.creator, "direction.creator");
  const grammarKeys = ["composition", "typography", "density", "navigation", "imagery", "rhythm", "mobile"];
  for (const key of grammarKeys) required(d.visual_grammar[key], `direction.visual_grammar.${key}`);
  required(d.hypothesis, "direction.hypothesis");
  if (!Array.isArray(d.decision_provenance) || !d.decision_provenance.length) throw new Error("direction needs decision provenance");
  for (const decision of d.decision_provenance) {
    required(decision.key, "decision.key"); required(decision.choice, "decision.choice");
    const ids = list(decision.pattern_ids, "decision.pattern_ids");
    if (!ids.length || ids.some(id => !state.patterns.some(p => p.id === id && p.reference_ids.every(rid => !state.references.find(r => r.id === rid)?.holdout)))) {
      throw new Error("direction decision must cite known non-holdout patterns");
    }
    if (!ids.some(id => state.patterns.some(p => p.id === id && p.polarity === "usable"))) {
      throw new Error("direction decision needs at least one usable evidence pattern");
    }
  }
  for (const existing of state.directions) {
    const different = grammarKeys.filter(key => existing.visual_grammar[key] !== d.visual_grammar[key]);
    if (different.length < 4) throw new Error(`direction too similar to ${existing.id}; at least four visual grammar axes must differ`);
  }
  return d;
}

export function validateEvaluation(e, state) {
  object(e, "evaluation"); required(e.id, "evaluation.id"); required(e.direction_id, "evaluation.direction_id");
  const direction = state.directions.find(d => d.id === e.direction_id);
  if (!direction) throw new Error("evaluation direction is unknown");
  required(e.reviewer, "evaluation.reviewer"); required(e.creator, "evaluation.creator");
  if (e.creator !== direction.creator) throw new Error("evaluation creator must match the direction creator");
  if (e.reviewer === e.creator) throw new Error("independent evaluation requires a reviewer other than the creator");
  const captures = list(e.rendered_evidence, "evaluation.rendered_evidence");
  if (captures.some(x => !x.viewport || !x.path) || !["desktop", "laptop", "mobile"].every(v => captures.some(x => x.viewport === v))) {
    throw new Error("evaluation requires desktop, laptop, and mobile rendered screenshots");
  }
  if (!["art_direction", "typography", "hospitality", "ux", "mobile", "originality", "coherence", "holdout"].includes(e.role)) throw new Error("invalid reviewer role");
  if (!["filter_pass", "filter_fail", "needs_work"].includes(e.verdict)) throw new Error("invalid evaluation verdict");
  required(e.evidence, "evaluation.evidence");
  return e;
}

export async function readState(root) {
  const state = emptyState();
  let raw;
  try { raw = await readFile(join(root, "research", "events.jsonl"), "utf8"); }
  catch (error) { if (error.code === "ENOENT") return state; throw error; }
  for (const [index, line] of raw.split("\n").entries()) {
    if (!line) continue;
    let event;
    try { event = JSON.parse(line); applyEvent(state, event); }
    catch (error) { throw new Error(`corrupt event log at line ${index + 1}: ${error.message}`); }
  }
  return state;
}

export async function appendEvent(root, type, data) {
  const path = join(root, "research", "events.jsonl");
  const lock = join(root, "research", "events.lock");
  await mkdir(dirname(path), { recursive: true });
  let guard;
  for (let attempt = 0; attempt < 120; attempt++) {
    try { guard = await open(lock, "wx"); break; }
    catch (error) {
      if (error.code !== "EEXIST") throw error;
      const age = await stat(lock).then(s => Date.now() - s.mtimeMs).catch(() => 0);
      if (age > 30_000) await unlink(lock).catch(() => {});
      await new Promise(resolve => setTimeout(resolve, 25));
    }
  }
  if (!guard) throw new Error("event log is locked; retry after the active writer finishes");
  try {
    const state = await readState(root);
    const event = { event_id: randomUUID(), at: new Date().toISOString(), type, data };
    applyEvent(state, event);
    const handle = await open(path, "a");
    try { await handle.writeFile(`${JSON.stringify(event)}\n`); await handle.sync(); }
    finally { await handle.close(); }
    return state;
  } finally {
    await guard.close();
    await unlink(lock);
  }
}

export async function saveJson(path, value) {
  await mkdir(dirname(path), { recursive: true });
  const temp = `${path}.${randomUUID()}.tmp`;
  await writeFile(temp, `${JSON.stringify(value, null, 2)}\n`);
  await rename(temp, path);
}

export function referenceIsResearched(r, state) {
  if (!r.researched_at || r.holdout) return false;
  if (r.human_status === "rejected" || r.human_status === "forbidden") return false;
  if (!visualEvidenceValid(r, state)) return false;
  return hasVisualEvidence(r) &&
    state.patterns.some(p => p.polarity === "usable" && p.reference_ids.includes(r.id) &&
      p.reference_ids.every(id => visualEvidenceValid(state.references.find(ref => ref.id === id), state)));
}

function hasVisualEvidence(r) {
  return r.evidence.some(e => e.kind === "rendered_capture" || e.kind === "human_attachment" || e.kind === "structured_screen");
}

export function captureStatus(r, state) {
  if (!r || !["live_website", "curated_gallery"].includes(r.source_type) ||
    !r.evidence.some(e => e.kind === "rendered_capture")) return "NOT_BROWSER_CAPTURED";
  const sessions = state.capture_sessions.filter(s => s.reference_id === r.id && s.page === "home");
  const latest = viewport => sessions.filter(s => s.viewport === viewport).at(-1);
  const desktop = latest("desktop");
  const mobile = latest("mobile");
  if ([desktop, mobile].some(s => s?.status === "VISUAL_CAPTURE_INCOMPLETE")) return "VISUAL_CAPTURE_INCOMPLETE";
  if (desktop?.status === "VISUAL_CAPTURE_COMPLETE" && mobile?.status === "VISUAL_CAPTURE_COMPLETE") return "VISUAL_CAPTURE_COMPLETE";
  return "CAPTURE_AUDIT_REQUIRED";
}

export function visualEvidenceValid(r, state) {
  if (!r) return false;
  if (["live_website", "curated_gallery"].includes(r.source_type) &&
    r.evidence.some(e => e.kind === "rendered_capture")) return captureStatus(r, state) === "VISUAL_CAPTURE_COMPLETE";
  return hasVisualEvidence(r);
}

export function qualifiedEvidence(r, state) {
  if (!["live_website", "curated_gallery"].includes(r.source_type) ||
    !r.evidence.some(e => e.kind === "rendered_capture")) return r.evidence;
  const sessions = state.capture_sessions.filter(s => s.reference_id === r.id && s.page === "home");
  const latest = ["desktop", "mobile"].map(viewport => sessions.filter(s => s.viewport === viewport).at(-1));
  if (latest.some(s => s?.status !== "VISUAL_CAPTURE_COMPLETE")) return [];
  const locations = new Set(latest.flatMap(s => s.evidence_locations ?? []));
  return r.evidence.filter(e => locations.has(e.location));
}

export function computeCoverage(state) {
  const researched = state.references.filter(r => referenceIsResearched(r, state));
  const byDimension = {};
  for (const dimension of dimensions) {
    const patterns = state.patterns.filter(p => p.dimension === dimension && p.polarity === "usable");
    const refIds = unique(patterns.flatMap(p => p.reference_ids)).filter(id => researched.some(r => r.id === id));
    const refs = researched.filter(r => refIds.includes(r.id));
    const types = unique(refs.map(r => r.source_type));
    const confidence = refs.length >= 4 && types.length >= 2 ? "high" : refs.length >= 2 && types.length >= 2 ? "medium" : refs.length ? "low" : "insufficient";
    byDimension[dimension] = { confidence, reference_count: refs.length, source_types: types, reference_ids: refIds };
  }
  const types = unique(researched.map(r => r.source_type));
  const categories = unique(researched.map(r => r.category));
  const mobile = researched.filter(r => r.evidence.some(e => e.viewport === "mobile") && visualEvidenceValid(r, state)).length;
  const commercial = researched.filter(r => r.operating_commercial).length;
  const holdouts = state.references.filter(r => r.holdout && r.researched_at && visualEvidenceValid(r, state) &&
    state.patterns.some(p => p.polarity === "usable" && p.reference_ids.includes(r.id) &&
      p.reference_ids.every(id => visualEvidenceValid(state.references.find(ref => ref.id === id), state))));
  const gaps = dimensions.filter(d => !["medium", "high"].includes(byDimension[d].confidence));
  const synthesis_ready = researched.length >= 20 && types.length >= 3 && categories.length >= 4 &&
    commercial / researched.length >= 0.7 && mobile >= 8 && holdouts.length >= 4 && gaps.length === 0;
  return {
    generated_at: new Date().toISOString(), stage: synthesis_ready ? "synthesis_review" : researched.length < 20 ? "high_signal_exploration" : "gap_directed_expansion",
    counts: {
      researched: researched.length,
      partial_or_candidate: state.references.filter(r => !r.holdout && !["rejected", "forbidden"].includes(r.human_status) && !researched.includes(r)).length,
      rejected: state.references.filter(r => ["rejected", "forbidden"].includes(r.human_status)).length,
      holdout: holdouts.length, mobile, operating_commercial: commercial,
      capture_audit_required: state.references.filter(r => captureStatus(r, state) === "CAPTURE_AUDIT_REQUIRED").length,
      capture_incomplete: state.references.filter(r => captureStatus(r, state) === "VISUAL_CAPTURE_INCOMPLETE").length,
      capture_complete: state.references.filter(r => captureStatus(r, state) === "VISUAL_CAPTURE_COMPLETE").length,
    },
    source_types: types, categories, dimensions: byDimension, unresolved_gaps: gaps,
    synthesis_ready,
    gate_reasons: [
      researched.length < 20 && `need ${20 - researched.length} more researched references`,
      types.length < 3 && `need ${3 - types.length} more independent source types`,
      categories.length < 4 && `need ${4 - categories.length} more design categories`,
      researched.length > 0 && commercial / researched.length < 0.7 && "operating commercial share below 70%",
      mobile < 8 && `need ${8 - mobile} more mobile reference captures`,
      holdouts.length < 4 && `need ${4 - holdouts.length} more researched holdouts`,
      gaps.length > 0 && `under-covered dimensions: ${gaps.join(", ")}`,
    ].filter(Boolean),
  };
}

export function nextResearchTasks(coverage) {
  if (coverage.counts.researched < 20) return ["Stage 1: collect diverse, evidence-rich references across operating commercial categories", ...coverage.gate_reasons];
  if (!coverage.synthesis_ready) return ["Stage 2: research only the remaining evidence gaps", ...coverage.gate_reasons];
  return ["Synthesis gate open: create distinct isolated homepage directions, then request independent rendered review"];
}

export function publicConceptEvidence(state) {
  const references = state.references.filter(r => !r.holdout &&
    (referenceIsResearched(r, state) || (r.source_type === "local_evidence" && r.human_status === "rejected")))
    .map(r => ({ ...r, evidence: qualifiedEvidence(r, state) }));
  const ids = new Set(references.map(r => r.id));
  return {
    references,
    patterns: state.patterns.filter(p => p.reference_ids.every(id => ids.has(id))),
    feedback: state.feedback.filter(f => ids.has(f.subject_id) || f.subject_id === "HUMAN_REJECTED_BASELINE_001"),
  };
}

export function calibrationCandidates(state) {
  return state.references.filter(r => !r.holdout && referenceIsResearched(r, state))
    .map(r => ({ ...r, evidence: qualifiedEvidence(r, state) }));
}

export function tasteModel(state) {
  return {
    positive: state.feedback.filter(f => f.status !== "rejected"),
    negative: state.feedback.filter(f => f.status === "rejected"),
    unreviewed_references: state.references.filter(r => r.human_status === "unreviewed").map(r => r.id),
    rule: "Only explicit human-owner feedback changes taste. AI judgments are diagnostic.",
  };
}

export function candidateReview(state, directionId) {
  const reviews = state.evaluations.filter(e => e.direction_id === directionId);
  const roles = unique(reviews.map(e => e.role));
  const reviewers = unique(reviews.map(e => e.reviewer));
  const hasHoldout = roles.includes("holdout");
  const validHoldoutSet = computeCoverage(state).counts.holdout >= 4;
  const human = state.feedback.filter(f => f.subject_id === directionId && f.by === "human_owner").at(-1);
  return {
    direction_id: directionId, independent_review_count: reviewers.length, reviewer_roles: roles,
    holdout_reviewed: hasHoldout, valid_holdout_set: validHoldoutSet,
    filter_passed: reviewers.length >= 4 && roles.length >= 4 && hasHoldout && validHoldoutSet && reviews.every(e => e.verdict === "filter_pass"),
    human_status: human?.status ?? "unreviewed", human_approved: human?.status === "approved",
  };
}

export function designTruthMarkdown(state, coverage) {
  const negative = state.feedback.filter(f => f.status === "rejected");
  const sourceLines = Object.values(state.sources).map(s => `- ${s.source}: ${s.status} (${s.checked_at ?? "unknown date"}) — ${s.detail ?? "no detail"}`);
  const humanApprovedDirections = state.directions.filter(d => candidateReview(state, d.id).human_approved).map(d => d.id);
  return `# Current Design Truth

Generated from \`research/events.jsonl\`. This file reports evidence, not design approval.

## Protected baseline and design status

- Preserved baseline: \`HUMAN_REJECTED_BASELINE_001\`, tag \`human-rejected-baseline-001\`, commit \`98715a99bf60070cb21b26941fe72c504496ee0c\`.
- Protected baseline visual direction: HUMAN_REJECTED. Production UI is unchanged by this research layer.
- Human-approved new directions: ${humanApprovedDirections.join(", ") || "none"}. A direction lock is a separate governance decision.
- Human owner remains the final design gate.

## Research channels

Supported: live websites, curated galleries, structured database exports, human-supplied references, and local evidence. Each channel can fail independently. Availability is recorded below.
${sourceLines.length ? sourceLines.join("\n") : "- No live source has been checked through this ledger yet. The historical tunnel failure is documented in design-v2/NETWORK_RESEARCH_BLOCKER.md."}

## Evidence and coverage

Browser captures are qualified only by the latest render-complete desktop and mobile sessions. The current-run audit is in research/capture-audit-2026-10-04.md. Raw images without a passing session remain in the ledger but are excluded from positive research, calibration, holdouts, and synthesis.

- Researched non-holdout references: ${coverage.counts.researched}.
- Partial or candidate references: ${coverage.counts.partial_or_candidate}.
- Human-rejected or forbidden references: ${coverage.counts.rejected}.
- Researched holdouts: ${coverage.counts.holdout}.
- Browser captures awaiting audit: ${coverage.counts.capture_audit_required}.
- Incomplete browser captures: ${coverage.counts.capture_incomplete}.
- Render-complete browser references: ${coverage.counts.capture_complete}.
- References with mobile evidence: ${coverage.counts.mobile}.
- Operating commercial references: ${coverage.counts.operating_commercial}.
- Source types represented: ${coverage.source_types.join(", ") || "none"}.
- Categories represented: ${coverage.categories.join(", ") || "none"}.
- Research stage: ${coverage.stage}.

| Dimension | Confidence | References | Source types |
| --- | --- | ---: | --- |
${dimensions.map(d => `| ${d} | ${coverage.dimensions[d].confidence} | ${coverage.dimensions[d].reference_count} | ${coverage.dimensions[d].source_types.join(", ") || "none"} |`).join("\n")}

## Human taste evidence

${negative.length ? negative.map(f => `- ${f.subject_id}: ${f.status} — ${f.reason} (${f.provenance})`).join("\n") : "- No explicit human rejection has been recorded yet."}

Owner-approved positive references: ${state.references.filter(r => r.human_status === "approved").length}. Unreviewed reference records are not owner preferences.

## Synthesis gate

Status: ${coverage.synthesis_ready ? "EVIDENCE SUFFICIENT FOR ISOLATED CONCEPT EXPLORATION" : "INSUFFICIENT EVIDENCE — NO DESIGN SYNTHESIS"}.
${coverage.gate_reasons.length ? coverage.gate_reasons.map(r => `- ${r}`).join("\n") : "- No coverage gap remains under the current conservative thresholds."}

## Candidate directions and evaluation

${state.directions.length ? state.directions.map(d => `- ${d.id}: ${JSON.stringify(d.visual_grammar)}. Review: ${JSON.stringify(candidateReview(state, d.id))}`).join("\n") : "- No new candidate direction exists."}

Independent screen review and holdout comparison are diagnostic filters. Only explicit human-owner feedback can approve a rendered direction.

## Next research action

${nextResearchTasks(coverage).map(t => `- ${t}`).join("\n")}
`;
}

export async function refreshDerived(root) {
  const state = await readState(root);
  const coverage = computeCoverage(state);
  await Promise.all([
    saveJson(join(root, "research", "reference-ledger.json"), state.references.map(r => ({ ...r,
      capture_status: captureStatus(r, state),
      evidence: r.evidence.map(e => ({ ...e, qualified_for_visual_research: qualifiedEvidence(r, state).some(x => x.location === e.location) })),
    }))),
    saveJson(join(root, "research", "capture-sessions.json"), state.capture_sessions),
    saveJson(join(root, "research", "research-coverage.json"), coverage),
    saveJson(join(root, "taste", "feedback-ledger.json"), state.feedback),
    saveJson(join(root, "taste", "taste-profile.json"), tasteModel(state)),
    saveJson(join(root, "taste", "approved-references.json"), state.references.filter(r => r.human_status === "approved").map(r => ({ reference_id: r.id, provenance: state.feedback.filter(f => f.subject_id === r.id).at(-1)?.provenance }))),
    saveJson(join(root, "taste", "rejected-references.json"), state.references.filter(r => r.human_status === "rejected").map(r => ({ reference_id: r.id, feedback_id: state.feedback.filter(f => f.subject_id === r.id).at(-1)?.id, provenance: state.feedback.filter(f => f.subject_id === r.id).at(-1)?.provenance }))),
    saveJson(join(root, "research", "source-health.json"), state.sources),
    saveJson(join(root, "research", "next-tasks.json"), nextResearchTasks(coverage)),
    mkdir(join(root, "research"), { recursive: true }).then(() => writeFile(
      join(root, "research", "unresolved-gaps.md"),
      `# Unresolved research gaps\n\nStage: ${coverage.stage}\n\n${coverage.gate_reasons.map(r => `- ${r}`).join("\n") || "No threshold gap remains."}\n\nLive-web availability is a source status, not a synthesis gate.\n`,
    )),
    mkdir(root, { recursive: true }).then(() => writeFile(join(root, "CURRENT_DESIGN_TRUTH.md"), designTruthMarkdown(state, coverage))),
  ]);
  return { state, coverage };
}

export function assertInside(root, path) {
  const absolute = resolve(root, path);
  if (absolute !== resolve(root) && !absolute.startsWith(resolve(root) + "/")) throw new Error("evidence path is outside Design Intelligence root");
  return absolute;
}
