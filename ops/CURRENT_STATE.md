# Current State

Project phase: Phase 8 — Conservation Mode
Design status: LOCKED — The House Register
Last accepted checkpoint: Conservation Mode entry after three clean review cycles
Current branch: work
Run command: `npm run dev`
Test command: `npm test && npm run lint && npm run build && npm run test:e2e`
Browser/screenshot command: `npm run screenshots`

## Architecture

Next.js App Router, React, TypeScript, authored CSS, Playwright browser tests.

## Implemented pages

Home, Rooms overview, eleven room detail routes, Fire Kitchen, Around, The House, Journal index, three journal articles, Find us, inquiry, Privacy, 404, loading, and error states.

## Working functionality

Primary navigation, mobile menu with focus restoration, responsive layouts, non-transmitting inquiry validation/loading/error/success, eleven individualized room routes, three distinct journal routes, recovery links, metadata, icon, sitemap, and robots output. The site sets no cookies or browser storage.

## Known failures

No known product failure. Full npm audit reports a high-severity development-only advisory in the Next.js ESLint toolchain (`braces` through `micromatch`/`fast-glob`) with no non-breaking fix offered; production dependency audit reports zero vulnerabilities.

## Locked decisions that matter most

D-001 technical baseline, D-002 House Register direction, D-003 release-candidate visual memory, and D-004 Conservation Mode. Ten golden screenshots under `tests/visual/golden/` are the accepted visual memory.

## Current anti-AI concerns

Concept imagery is coherent and honestly captioned but remains generated study material rather than real documentary photography. Mobile captions and footer legal copy are intentionally secondary and should not shrink further.

## Current drift status

GREEN — the ten current captures are byte-identical to the explicitly accepted goldens. The locked direction remains intact.

## Highest-priority next actions

1. Preserve the release candidate; accept only evidenced bugs, accessibility, performance, responsive, copy, or factual fixes.
2. Reopen design only under the conditions in D-004 and the governing brief.
3. Collect real human responses with `ops/HUMAN_TEST_PACKET.md` when available; do not prefill them.

## Files to read before continuing

1. `ops/PROJECT_CONSTITUTION.md`
2. `design/DESIGN_DIRECTION.md`
3. `ops/DECISIONS.md`
4. `ops/CURRENT_STATE.md`
5. `ops/CHANGE_QUEUE.md`
