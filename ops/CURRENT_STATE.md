# Current State

Project phase: Phase 4 — Design system and representative pages
Design status: LOCKED — The House Register
Last accepted checkpoint: Phase 3 direction lock
Current branch: work
Run command: `npm run dev`
Test command: `npm test && npm run lint && npm run build && npm run test:e2e`
Browser/screenshot command: `npm run screenshots`

## Architecture

Next.js App Router, React, TypeScript, authored CSS, Playwright browser tests.

## Implemented pages

Bootstrap placeholder only; representative implementation is next.

## Working functionality

Install, unit test, lint, production build, local start, and Playwright browser smoke test are working.

## Known failures

No product pages or flows exist yet.

## Locked decisions that matter most

D-001 technical baseline and D-002 House Register direction.

## Current anti-AI concerns

Prevent the register grammar from becoming faux-editorial decoration or generic cream-and-black boutique styling.

## Current drift status

GREEN — direction is locked before visual implementation.

## Highest-priority next actions

1. Implement Home and Rooms with the locked direction.
2. Render desktop and mobile evidence and run separated reviews.
3. Document the accepted design system and establish golden references.

## Files to read before continuing

1. `ops/PROJECT_CONSTITUTION.md`
2. `design/DESIGN_DIRECTION.md`
3. `ops/DECISIONS.md`
4. `ops/CURRENT_STATE.md`
5. `ops/CHANGE_QUEUE.md`
