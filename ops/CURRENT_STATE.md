# Current State

Project phase: Design Quality Discovery — resilient research infrastructure complete; evidence collection next
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

The owner explicitly replaced the browser-only prerequisite with D-008. The live HTTPS source currently returns HTTP 503, but structured database exports, curated sources when reachable, human-supplied references, and existing local evidence can be ingested independently. Successful records persist before later failures. Initial HTTP 200 reachability is not counted as research. The current synthesis gate is FALSE because no positive reference has sufficient evidence and atomic extraction yet. Exact gaps are in `design-intelligence/CURRENT_DESIGN_TRUTH.md` and `design-intelligence/research/research-coverage.json`.

Infrastructure validation: 10/10 unit tests passed, lint passed, production build emitted 28 routes, and the live adapter correctly recorded an actual HTTP 503 without creating a reference. No product UI file changed.

## Current drift status

HUMAN_REJECTED. The former GREEN report is preserved as evidence of `AI_SELF_EVALUATION_FAILURE_001`, not as a quality claim.

## Highest-priority next actions

1. Collect 20–30 diverse, evidence-rich references through available adapters; use live Chromium opportunistically when the channel recovers.
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
