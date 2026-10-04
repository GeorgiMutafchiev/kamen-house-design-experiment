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
Status: SUPERSEDED — HUMAN_REJECTED_VISUAL_DIRECTION
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
Status: SUPERSEDED — human visual acceptance withdrawn
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
Status: SUPERSEDED — exited by human owner override
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

## D-005 — Activate Champion/Challenger governance
Status: SUSPENDED — retained only for post-human-approval use
Date/Checkpoint: 2026-10-04 / Phase 8 addendum activation

Decision:
Adopt `KAMEN_CHAMPION_CHALLENGER_PROTOCOL.md` as a non-disruptive addendum and register the existing accepted product at commit `86de868be640a8560a7680d8716b7c1829d324b7` as protected incumbent `CHAMPION_000`.

Reason:
The direction was already locked, the product had entered Conservation Mode, all baseline gates passed, and ten regenerated screenshots remained byte-identical to the accepted goldens. Evolutionary experiments can therefore be isolated and judged without reopening or overwriting the accepted state.

Allowed:
Narrow, evidence-backed Challengers in isolated branches/worktrees, followed by objective gates, randomized blind pairwise evaluation, Pareto protection, drift checks, and explicit orchestrator resolution.

Not allowed:
Changing CHAMPION_000 during baseline capture; silently replacing it; merging effort without evidence; updating goldens without explicit acceptance; mass redesign; treating a tie or ambiguous result as a win; or leaving Conservation Mode merely because a Challenger exists.

## D-006 — Promote CHALLENGER_001 as CHAMPION_001
Status: SUPERSEDED AS VISUAL-QUALITY EVIDENCE — historical technical result preserved
Date/Checkpoint: 2026-10-04 / first evolution tournament

Decision:
Promote the isolated mobile secondary-text mutation. Checkpoint `75589e05a0ea9ce3deba17a9ab02dfd749316579` preserves the accepted product and visuals; protected tag `champion-001` preserves that product together with the completed promotion governance.

Reason:
The Challenger passed every objective gate, preserved GREEN drift, stayed within its one-variable budget, and won all four blind pairwise perspectives with no unacceptable regression. The improvement is concrete: captions, facts, and the honest footer disclosure are easier to read without weakening hierarchy or materially extending the pages.

Evidence:
- `evolution/TOURNAMENT_LEDGER.md`
- `tests/visual/golden/home-390.png`
- `tests/visual/golden/room-detail-390.png`

Allowed:
Preserve the `.88rem` / 1.35 mobile secondary-text rule and use CHAMPION_001 as the incumbent in future evidence-based tournaments.

Not allowed:
Generalizing this local result into a typography redesign, changing desktop type, discarding CHAMPION_000 recovery evidence, or replacing CHAMPION_001 without the full protocol.

Effect on prior decisions:
D-002 and D-004 remain unchanged. D-003 still governs the ten-reference visual memory; D-006 explicitly supersedes only the Home and Room-detail mobile image contents recorded for CHAMPION_000.

## D-007 — Human owner rejects the visual direction and imposes an absolute human gate
Status: LOCKED — HUMAN OWNER OVERRIDE
Date/Checkpoint: 2026-10-04 / `HUMAN_REJECTED_BASELINE_001`

Decision:
The House Register and every prior AI-only visual PASS, GREEN status, Champion promotion, design lock, Conservation Mode declaration, anti-AI pass, blind-jury approval, and numerical design-quality claim are invalid as proof of visual quality. The current implementation is preserved as `HUMAN_REJECTED_BASELINE_001`, while design work moves to an isolated homepage-only Design Lab.

Reason:
The human owner personally reviewed the rendered site and found it generic, visibly AI-generated, aesthetically weak, and not comparable with a professionally art-directed commercial website. The AI evaluation loop approved a result that failed the immediate human design gate; this is recorded as `AI_SELF_EVALUATION_FAILURE_001`.

Required next process:
Ground discovery in browser-inspected websites of real operating organizations; maintain positive, negative, and validation sets; produce at least six genuinely different homepage concepts in isolation; benchmark them against real professional work; render desktop and mobile finalists; then stop for explicit human choice.

Allowed:
Preserving and reusing sound engineering, accessibility, content, and functionality; isolated homepage experiments; factual research records; diagnostic AI filtering that never substitutes for human approval.

Not allowed:
Defending or incrementally optimizing the rejected family; expanding a new design across secondary pages; declaring a direction accepted or locked; entering Conservation Mode; treating an AI score or review as final approval; or resuming Champion/Challenger evolution before explicit human approval.

Supersession note:
D-008 later changes only the rule that successful live-browser inspection is mandatory before any Design Lab research. The human visual gate and prohibition on unsupported synthesis remain in force.

## D-008 — Use resilient Design Intelligence research sources
Status: LOCKED — HUMAN OWNER INSTRUCTION
Date/Checkpoint: 2026-10-04 / Design Intelligence infrastructure

Decision:
Live browser availability is no longer a mandatory prerequisite for all Design Lab research. The Design Intelligence layer accepts independently proven live, curated, structured, human-supplied, and local evidence. Completed work is appended durably; each source can fail independently. Isolated design synthesis still requires sufficient accumulated evidence and human approval remains the absolute visual gate.

Reason:
The shared HTTPS tunnel failed globally after initial successful live access. The owner explicitly superseded the earlier browser-only stop rule and requested resilient research infrastructure.

Allowed:
Persisting partial successful inspections, extracting cited atomic principles, using alternative permitted source adapters, calculating coverage and exact gaps, and preparing independent rendered evaluation with a holdout set.

Not allowed:
Fabricating live inspections; counting HTTP 200 or metadata as a researched visual reference; treating AI scores as owner preference; designing from an insufficient corpus; copying external sites; or modifying the protected production UI during infrastructure work.

## D-009 — Qualify live research only after render-complete sessions
Status: LOCKED — OWNER CAPTURE CORRECTION
Date/Checkpoint: 2026-10-04 / current-run live evidence quarantine

Decision:
The owner found the prior Ace Hotel full-page capture visually incomplete. All 15 current-run live captures are preserved but quarantined. Desktop and mobile browser evidence must pass real viewport traversal, asset and reveal diagnostics, and explicit `VISUAL_CAPTURE_COMPLETE` session status before contributing to positive research, calibration, holdout review, or synthesis.

Reason:
Modern scroll-triggered sites can return HTTP 200 and generate a full-page image while important visual sections remain unloaded or hidden. Treating those blanks as design would corrupt the research model.

Allowed:
Storing raw and corrected sessions side by side; retrying incomplete pages; using other valid source categories during a tunnel outage; reporting precise coverage gaps.

Not allowed:
Promoting old screenshots on apparent completeness alone, inferring intentional whitespace from a failed render, forcing animations off to manufacture a canonical reference, or modifying production UI during this correction.

## D-010 — Adopt autonomous studio mode
Status: LOCKED — EXPLICIT HUMAN OWNER INSTRUCTION
Date/Checkpoint: 2026-10-04 / pre-studio checkout `4c12769`

Decision:
`KAMEN_HOUSE_AUTONOMOUS_DESIGN_STUDIO_MODE.md` supersedes D-007's owner taste-calibration and intermediate design-approval gate. Four fundamentally different isolated systems must be rendered, critiqued and compared before one working champion is expanded across the full site. Human review is reserved for the finished result. The former human-rejected direction remains rejected and recoverable; the newest pre-studio checkout is tagged `protected-pre-autonomous-studio-4c12769`.

Reason:
The owner explicitly delegated routine design decisions and requested a complete, working, distinctive website. An unreliable research tunnel is no longer allowed to block the separate creative lane. D-009 capture integrity and all factual, accessibility and conservation rules remain in force.

Allowed:
Honest Lane B creative prototypes using product truth, local assets and design reasoning; autonomous working-champion selection; full-site integration after four comparable renders; continued Lane A research whenever verified access works.

Not allowed:
Promoting unqualified screenshots as research, fabricating provenance, counting prototypes toward research coverage, reviving the rejected visual family, claiming human approval from AI reviews, or touching any other repository or production infrastructure.

## D-011 — Select Spatial as working champion
Status: WORKING CANDIDATE — NOT HUMAN APPROVED
Date/Checkpoint: 2026-10-04 / autonomous studio first pass

Decision:
Select the Spatial system from four isolated, independently renderable prototypes for the site-wide implementation. It organizes the visitor journey around the house section, positions the fire kitchen as the shared heart, uses measured rules and varied images, and gives rooms, food, directions and editorial content a coherent grammar.

Evidence:
`design-lab/AUTONOMOUS_STUDIO_REVIEW.md`, anonymous candidate captures, three viewport sizes, mobile and desktop axe checks, and the preserved human-rejected baseline. A later verified research checkpoint from St. JOHN, David Chipperfield and Casa Bonay challenged the champion's uniform image rhythm; the final homepage varied room-image widths and added a smaller path image. These references were not the original source of Lane B.

Limit:
The review is internal and procedurally blinded only. The prior AI self-evaluation failure prohibits treating it as human design acceptance. The Design Intelligence Lane A synthesis gate is still false.
