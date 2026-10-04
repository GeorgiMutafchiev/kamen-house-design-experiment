# Decision Ledger

## D-001 — Use the preferred technical baseline
Status: LOCKED
Date/Checkpoint: 2026-10-04 / Phase 0

Decision:
Use Next.js App Router, React, TypeScript, authored CSS, Node tests, and Playwright with system Chromium.

Reason:
The empty repository and governing brief identify this as the preferred production-capable baseline. It supports semantic pages, responsive rendering, browser checks, and screenshots without a visual component library.

Allowed:
Small supporting packages with a documented need.

Not allowed:
Changing stack or adopting a dominant component library without a Class C decision.

## D-002 — Lock The House Register direction
Status: LOCKED
Date/Checkpoint: 2026-10-04 / Phase 3

Decision:
Use the register, room number, marginal fact, documentary frame, and chapter band as the design grammar.

Reason:
It best scales across the complete product while grounding identity in house-specific information rather than template decoration.

Evidence:
- `design/REFERENCE_ATLAS.md`
- `design/DESIGN_DIRECTIONS.md`

Allowed:
Varied density, image scale, and page tempo within the locked grammar.

Not allowed:
Decorative metadata, card-heavy composition, luxury-template styling, or silent replacement of the direction.

## D-003 — Accept the release-candidate visual memory
Status: LOCKED
Date/Checkpoint: 2026-10-04 / Phase 7

Decision:
Accept all ten rendered captures in `tests/visual/golden/` as the release-candidate visual memory.

Reason:
The hardening deltas improve truthfulness, room individuality, task-specific page rhythm, keyboard behavior, and consent behavior without changing The House Register. The prior five captures were superseded deliberately after screenshot-only review; five additional task-page captures make future drift checks stronger.

Evidence:
- `tests/visual/current/`
- `tests/visual/golden/`
- `ops/DRIFT_REPORT.md`

Allowed:
Bug, accessibility, performance, responsive, copy, and factual fixes that preserve the accepted direction and are followed by evidence-based drift review.

Not allowed:
Silent golden replacement, cosmetic churn, or a new visual direction without a Class C decision.

## D-004 — Enter Conservation Mode
Status: LOCKED
Date/Checkpoint: 2026-10-04 / Phase 8

Decision:
Close active design iteration and enter Conservation Mode.

Reason:
All required pages and primary flows exist; browser, accessibility, build, audit, and screenshot checks pass; drift is GREEN; the anti-AI audit has no unresolved severe issue; and three consecutive independent reviews against the unchanged D-003 checkpoint found no meaningful high-impact problem.

Evidence:
- Cycle A: anti-AI and governance review — PASS / GREEN
- Cycle B: independent art-direction review — PASS / GREEN
- Cycle C: hostile final gate with full browser rerun — PASS / GREEN
- `ops/RELEASE_READINESS.md`
- `tests/visual/golden/`

Allowed:
Bugs, accessibility, performance, responsive edge cases, copy errors, functional defects, factual consistency, and minor polish supported by clear evidence.

Not allowed:
A new visual direction, homepage concept, decorative language, typography replacement, structural churn, or cosmetic work without explicit design reopening.

Reopen only for:
New human direction, severe human feedback, later RED drift, a fundamental usability failure, or strong evidence that the site still appears obviously AI-generated.
