# Current State

Project phase: Design Quality Discovery — human-directed visual reset
Design status: HUMAN_REJECTED; no replacement direction is accepted or locked
Last recoverable product checkpoint: `HUMAN_REJECTED_BASELINE_001` at `98715a99bf60070cb21b26941fe72c504496ee0c`
Current branch: `work`
Run command: `npm run dev`
Test command: `npm test && npm run lint && npm run build && npm run test:e2e`
Browser/screenshot command: `npm run screenshots`

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

Isolated work lives under `design-lab/`. Research and new visual evidence live under `design-v2/`. Concepts must remain independently inspectable and must not overwrite the preserved site.

## Research gate

BLOCKED. After Internet was enabled, Chromium loaded Ace Hotel, Aesop, and eight hospitality homepages with HTTP 200 using a scoped trust pin for the exact environment proxy CA. During deeper inspection, the shared `cloudflare_https_tunnel` began returning HTTP 503 for every destination, including `example.com`, through both Chromium and system `curl`. Initial reachability is not counted as completed reference inspection. Discovery remains paused before corpus creation and concept generation; imagined references are prohibited. See `design-v2/NETWORK_RESEARCH_BLOCKER.md`.

## Current drift status

HUMAN_REJECTED. The former GREEN report is preserved as evidence of `AI_SELF_EVALUATION_FAILURE_001`, not as a quality claim.

## Highest-priority next actions

1. Resume in an environment whose Chromium can open external professional reference sites.
2. Assemble positive, negative, and holdout sets only from actually inspected pages and viewports.
3. Then build six isolated homepage concepts, benchmark them, render surviving desktop/mobile candidates, and stop for the human gate.

## Files to read before continuing

1. `HUMAN_OWNER_OVERRIDE_VISUAL_RESET.md`
2. `ops/PROJECT_CONSTITUTION.md`
3. `ops/DECISIONS.md`
4. `ops/CURRENT_STATE.md`
5. `ops/CHANGE_QUEUE.md`
6. `design-v2/HUMAN_REJECTED_BASELINE_001.md`
7. `design-lab/README.md`
8. `KAMEN_CHAMPION_CHALLENGER_PROTOCOL.md`
