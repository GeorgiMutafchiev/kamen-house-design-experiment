# Render-complete visual research sessions

This procedure implements the owner's `KAMEN_HOUSE_RENDER_COMPLETE_CAPTURE_PROTOCOL.md`. It supersedes the former `DOMContentLoaded` plus one full-page screenshot capture. The original files are retained as quarantined evidence.

## Capture phases

`capture-live` records the requested and resolved URLs, HTTP status, redirect chain, failed requests and browser errors. It waits for page load, fonts, visible hero video readiness where possible, and a short hydration interval. A timeout becomes a warning, never proof of readiness.

The first screenshot preserves the natural initial viewport. An optional `--dismiss-selector` performs and logs a real click when a consent or location overlay prevents inspection. The browser then moves by roughly 72% of the viewport height per mouse-wheel step. It waits and samples each position, including new content when document height grows. It saves selected viewport states, reaches a stable bottom, and makes an upward pass when reveal or empty-section signals appear (always on retry). Only after traversal does it attempt a full-page screenshot. The viewport states remain the primary evidence of scroll-dependent design.

Each page and viewport gets `references/local-evidence/<id>/sessions/<page>-<viewport>/session.json`, `diagnostics.json`, and numbered JPEG images. Evidence entries distinguish `static_visual` from `interaction_state`. The session records browser size, device scale, timing, scroll coordinates, initial and final document height, readiness, asset failures, interactions, retries, and whether forced visibility was used. Forced visibility is never used by this command.

## Completeness checks and retry

Each sampled viewport checks visible images for `complete` and `naturalWidth`, lazy media, video state, large hidden/reveal elements, offscreen reveal transforms, zero-sized media, large empty section wrappers, fixed overlays, and a low-resolution pixel-uniformity signal. Browser resource errors are retained. Blankness alone is not a failure: it is evaluated with DOM and asset signals so intentional whitespace is not automatically rejected.

Suspicious images or reveal states receive additional settling time. An incomplete first pass triggers a slower second pass and an upward traversal. A still incomplete session is recorded as `VISUAL_CAPTURE_INCOMPLETE`; all artifacts and diagnostics remain. A successful traversal with no unresolved health signal becomes `VISUAL_CAPTURE_COMPLETE`. `SOURCE_REACHABLE`, `DOM_LOADED`, `ASSETS_PARTIALLY_READY` or `ASSETS_READY`, and `SCROLL_TRAVERSAL_COMPLETE` are recorded as milestones, not substituted for visual completion.

## Qualification policy

The append-only `capture.session` events are the authority for browser capture qualification. A browser reference must have complete **desktop and mobile home sessions** before any positive pattern from it can affect research coverage. The latest session for each viewport controls the status. Legacy images without a complete session, failed sessions, and their patterns cannot enter positive coverage, owner calibration, concept evidence, or the researched holdout set. `reference-ledger.json` labels each old and new artifact's qualification; `capture-sessions.json` retains the session timeline. `export-calibration` and `export-concept-brief` include only qualified non-holdout evidence.

The scope of a complete session is the pages actually traversed. It does not certify unseen interior pages or untested interactions. Researchers must cite specific visible session states for observations and keep interaction claims separate from static claims. Consent overlays and visual ambiguities should be inspected manually before presenting a calibration item.
