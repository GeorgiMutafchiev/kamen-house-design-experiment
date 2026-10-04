# Current State

Project phase: Design Quality Discovery — render-complete capture correction implemented; live corpus quarantined
Design status: HUMAN_REJECTED; no replacement direction is accepted or locked
Last recoverable product checkpoint: `HUMAN_REJECTED_BASELINE_001` at `98715a99bf60070cb21b26941fe72c504496ee0c`
Current branch: `work`
Run command: `npm run dev`
Test command: `npm test && npm run lint && npm run build && npm run test:e2e`
Browser/screenshot command: `npm run screenshots`
Design research commands: `node design-intelligence/cli.mjs refresh` and `node design-intelligence/cli.mjs gate`

## Human verdict

The human owner rejected the rendered visual direction as generic, visibly AI-generated, aesthetically weak, and below professionally art-directed commercial work. This verdict supersedes the former design lock, Conservation Mode, AI review passes, GREEN visual status, and Champion promotions as visual-quality evidence.

`AI_SELF_EVALUATION_FAILURE_001` is active: AI-only review approved a result the human owner immediately rejected. AI evaluation is now a diagnostic filter only and can never unlock full-site implementation.

## Preserved baseline

The complete site remains recoverable at annotated tag `human-rejected-baseline-001`. Its ten screenshots remain under `tests/visual/golden/` and are indexed in `design-v2/HUMAN_REJECTED_BASELINE_001.md`. Existing engineering and functionality may be reused later, but the visual direction is not trusted.

Validation at capture:
- unit: 1 passed;
- lint: passed;
- production build: passed, 28 static routes;
- Playwright: 23 passed.

## Architecture and working functionality

Next.js App Router, React, TypeScript, authored CSS, Node tests, and Playwright. Existing routes, navigation, responsive behavior, accessibility coverage, differentiated rooms, honest non-transmitting inquiry states, metadata, icon, sitemap, and robots output remain intact in the preserved baseline.

## Active scope

Homepage/design laboratory only. Secondary pages, full-site redesign, production integration, and Champion/Challenger visual evolution are stopped until a rendered concept receives explicit human approval.

## Design Lab

Isolated concept work remains under `design-lab/`. The persistent research system is `design-intelligence/`; its event log is authoritative and its derived coverage and `CURRENT_DESIGN_TRUTH.md` explain exactly what is known. Concepts must remain independently inspectable and must not overwrite the preserved site.

## Research gate

The owner explicitly replaced the browser-only prerequisite with D-008, then D-009 tightened visual evidence integrity after Ace Hotel's incomplete screenshot was identified. Fifteen current-run first-party live captures are preserved and quarantined; 13 await render-complete audit and two (Ace and Fogo) failed recapture because HTTPS again returned HTTP 503. They contribute zero positive references or valid holdouts. Structured exports, human-supplied material, and valid local evidence remain usable independently. The synthesis gate is FALSE because the evidence is insufficient. Exact gaps are in `design-intelligence/CURRENT_DESIGN_TRUTH.md` and `design-intelligence/research/research-coverage.json`.

Capture-correction validation: 13/13 unit/integration tests passed, including local Chromium fixtures; lint passed; production build emitted the same 28 routes. No product UI file changed.

## Current drift status

HUMAN_REJECTED. The former GREEN report is preserved as evidence of `AI_SELF_EVALUATION_FAILURE_001`, not as a quality claim.

## Highest-priority next actions

1. Revalidate quarantined first-party captures with render-complete sessions when HTTPS recovers; ingest any independently valid structured or owner-supplied visual evidence meanwhile.
2. Extract atomic principles with provenance and fill the precise coverage gaps, including mobile and holdout evidence.
3. When the synthesis gate passes, create isolated directions and six homepage concepts; benchmark and render finalists, then stop for explicit human approval.

## Files to read before continuing

1. `HUMAN_OWNER_OVERRIDE_VISUAL_RESET.md`
2. `ops/PROJECT_CONSTITUTION.md`
3. `ops/DECISIONS.md`
4. `ops/CURRENT_STATE.md`
5. `ops/CHANGE_QUEUE.md`
6. `design-v2/HUMAN_REJECTED_BASELINE_001.md`
7. `design-lab/README.md`
8. `KAMEN_CHAMPION_CHALLENGER_PROTOCOL.md`
9. `design-intelligence/CURRENT_DESIGN_TRUTH.md`
10. `design-intelligence/research/source-policy.md`
11. `design-intelligence/research/render-complete-capture.md`
12. `design-intelligence/research/capture-audit-2026-10-04.md`
