# KAMEN HOUSE Design Intelligence

This is the persistent research layer for the isolated homepage Design Lab. It does not modify the preserved product. Its job is to collect credible design evidence from several independent channels, remember explicit owner taste, extract small principles with provenance, reveal missing knowledge, and prepare independent evaluation. It does not approve a visual direction.

## Current state

Read `CURRENT_DESIGN_TRUTH.md` first. The protected `HUMAN_REJECTED_BASELINE_001` is present as negative human evidence. There are no owner-approved positive references yet. The prior HTTP 200 site checks are candidate reachability, not completed research. Live HTTPS currently returns a cloud tunnel 503; other adapters remain usable. The synthesis gate is closed because the corpus is genuinely insufficient.

## Source channels

| Channel | Operational entry | Evidence needed |
| --- | --- | --- |
| Real production websites | `capture-live`, then `ingest` annotation and `pattern` | Actual rendered captures, interior/mobile inspection where relevant, observed principle |
| Curated galleries | `capture-live --source-type curated_gallery` or `adapter-ingest` | Permitted screenshot or retained screen metadata; gallery listing does not prove linked site inspection |
| Structured database / MCP export | `adapter-ingest` | Permitted screen ID or visual evidence and provenance; no bulk mirroring |
| Human supplied | `adapter-ingest`, then `feedback` | Owner attachment or URL; owner preference only from explicit feedback |
| Existing local evidence | `ingest` or `adapter-ingest` | Actual artifact and original provenance |

See `research/source-adapters.md` for commands and a manifest. No proprietary connector is assumed to exist; adapters accept authorized exports when available.

## Persistence and failure behavior

`research/events.jsonl` is append-only and flushed on every event. Reference records, patterns, owner feedback, and source health use separate event types. Derived JSON files and `CURRENT_DESIGN_TRUTH.md` can be regenerated with `node design-intelligence/cli.mjs refresh`. A sparse reimport merges with previous research instead of deleting captures or human feedback. A failed live capture writes `source.status = unavailable` and leaves earlier captures and other source records intact. Each successful viewport capture is persisted before the next attempt.

The former baseline's human rejection is event `AI_SELF_EVALUATION_FAILURE_001`. Taste is updated only by explicit `human_owner` feedback with reason and provenance. The model does not infer a liked font or layout from a generic rejection.

## Atomic extraction and originality

`pattern.add` requires a dimension, one abstract principle, a visible observation, reference IDs, polarity, confidence, and a `do_not_copy` note. Direction decisions cite pattern IDs, which cite references. A direction must state seven visual grammar axes and differ from existing directions on at least four. This keeps synthesis traceable without copying a whole site.

## Gate and evaluation

`node design-intelligence/cli.mjs gate` reports stage, gaps, and whether isolated design synthesis may start. A browser outage is not a gate condition; evidence quality and coverage are. `research/source-policy.md` records the conservative thresholds. `export-concept-brief` produces a holdout-filtered evidence packet.

Rendered candidates require separate creator and reviewer identities, desktop/laptop/mobile screenshots, concrete review findings, at least four distinct reviewers in four roles including holdout, and explicit owner feedback for final approval. `review-gate <direction-id>` reports these separately. A passing internal filter never substitutes for the owner.

## Immediate next step

Collect a diverse first batch of 20–30 evidence-rich references using available authorized sources; add atomic observations as each one is inspected. `research/next-tasks.json` and `research/unresolved-gaps.md` show what is missing. Once the synthesis gate opens, create isolated directions and six homepage concepts, then present rendered finalists for the human gate specified in `HUMAN_OWNER_OVERRIDE_VISUAL_RESET.md`.
