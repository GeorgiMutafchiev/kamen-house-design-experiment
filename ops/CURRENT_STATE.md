# Current State

Project phase: Phase 8 — Conservation Mode
Design status: LOCKED — The House Register
Last accepted checkpoint: CHAMPION_001 complete promotion closeout (`champion-001`); product/visual checkpoint `75589e0`
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

D-001 technical baseline, D-002 House Register direction, D-003 release-candidate visual memory, D-004 Conservation Mode, D-005 evolution protocol, and D-006 CHAMPION_001 promotion. Ten golden screenshots under `tests/visual/golden/` are the accepted visual memory.

## Current anti-AI concerns

Concept imagery is coherent and honestly captioned but remains generated study material rather than real documentary photography. Mobile captions and footer legal copy are intentionally secondary and should not shrink further.

## Current drift status

GREEN — the ten current captures are byte-identical to the explicitly accepted CHAMPION_001 goldens. The locked direction remains intact.

## Evolution status

Champion/Challenger protocol: ACTIVE under D-005.
Incumbent: `CHAMPION_001`, product/visual checkpoint `75589e05a0ea9ce3deba17a9ab02dfd749316579`, protected with its complete promotion record by tag `champion-001`.
Historical Champion: `CHAMPION_000` remains recoverable at tag `champion-000`.
Challengers attempted: 1.
Challengers promoted: 1.
Queue: empty pending new evidence.

## Highest-priority next actions

1. Preserve CHAMPION_001; do not invent another Challenger merely to continue activity.
2. If new evidence supports a hypothesis, isolate it and apply `evolution/JUDGE_PROTOCOL.md` in full.
3. Collect real human responses when available; never fabricate preference evidence.

## Files to read before continuing

1. `ops/PROJECT_CONSTITUTION.md`
2. `design/DESIGN_DIRECTION.md`
3. `ops/DECISIONS.md`
4. `ops/CURRENT_STATE.md`
5. `ops/CHANGE_QUEUE.md`
6. `KAMEN_CHAMPION_CHALLENGER_PROTOCOL.md`
7. `evolution/CHAMPION.md`
8. `evolution/TOURNAMENT_LEDGER.md`
9. `evolution/CHALLENGER_QUEUE.md`
10. `evolution/JUDGE_PROTOCOL.md`
