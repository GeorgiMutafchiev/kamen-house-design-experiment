# Iteration Ledger

## Iteration 0 — Bootstrap

Starting checkpoint:
Repository containing only the governing brief.

Accepted problems:
1. No runnable application or operating files.

Changes:
Created the Next.js/TypeScript baseline, governance system, research atlas, three-direction comparison, and locked House Register direction.

Rendered evidence:
Bootstrap page checked in Chromium.

Tests:
Unit test, lint, production build, npm audit, and Playwright smoke test passed.

Drift status: GREEN

Outcome: ACCEPT

Why:
The project is runnable, the baseline is verified, and visual implementation did not begin before direction lock.

Remaining highest-impact issues:
Prove the locked direction on Home and Rooms.

## Iteration 1 — Representative product and anti-AI refinement

Starting checkpoint:
Phase 3 direction lock (`2e4bb2a`).

Accepted problems:
1. Build the complete required product without diluting The House Register.
2. Correct repeated page rhythm and slogan cadence.
3. Make concept imagery and disclosure function as evidence.

Changes:
Built 27 static routes, six generated concept studies, shared navigation/footer/cookie handling, room and journal data, inquiry states, metadata, sitemap, and error/empty recovery. Applied C-003 through C-005 after the first review.

Rendered evidence:
Home desktop/mobile, Rooms desktop, room detail mobile, and Food desktop under `tests/visual/current/` and accepted copies under `tests/visual/golden/`.

Tests:
Production build, route navigation, mobile overflow, inquiry states, 404, keyboard menu, and initial accessibility checks.

Drift status: GREEN

Outcome: ACCEPT

Why:
Second blind and adversarial reviews found no remaining high-impact art-direction issue and accepted the visual state for goldens.

Remaining highest-impact issues:
Functional hardening findings from browser QA.

## Iteration 2 — Functional hardening

Starting checkpoint:
Accepted Phase 4 visual goldens.

Accepted problems:
1. Inquiry accepted past dates and retained stale feedback.
2. Mobile menu did not close on Escape or the stay action.
3. Several mobile link targets fell below 44px.

Changes:
Implemented C-006 through C-008 and added regression coverage plus serious/critical Axe checks.

Rendered evidence:
Current captures remain byte-identical to accepted goldens after functional changes.

Tests:
Unit and lint passed. Production build passed. Fourteen Playwright checks passed, including three Axe scans. Production dependency audit found zero vulnerabilities.

Drift status: GREEN

Outcome: ACCEPT

Why:
All QA findings are covered by passing browser checks without visual deviation.

Remaining highest-impact issues:
Complete conservation reviews and final release documentation.

## Iteration 3 — Copy and truthfulness hardening

Starting checkpoint:
Accepted Phase 4 visual goldens.

Accepted problems:
1. Inquiry language implied sending despite a local-only interaction.
2. Journal article routes reused one mismatched body.
3. An “accessible room” claim exceeded the available facts.

Changes:
Implemented C-009 through C-011: honest inquiry-preview language, three subject-specific journal articles, and a narrow no-internal-steps claim paired with the uneven approach disclosure.

Rendered evidence:
Live Stay, Journal, article, Rooms, and Find Us routes.

Tests:
Network inspection, form-state browser tests, route/content hashing, and copy/truthfulness review.

Drift status: GREEN

Outcome: ACCEPT

Why:
The final copy describes only behavior and access facts the experiment demonstrates.

Remaining highest-impact issues:
Adversarial review of repeated room and page structures.

## Iteration 4 — Adversarial completion and release-candidate memory

Starting checkpoint:
Phase 7 copy-hardened product.

Accepted problems:
1. Eleven room routes shared one body and image.
2. Four task pages repeated the narrative opening.
3. Cookie consent, keyboard residue, and a missing site icon weakened functional honesty and finish.

Changes:
Implemented C-012 through C-016. Added eleven individualized room records and corresponding studies, task-specific openings, zero-storage privacy behavior, exact mobile targets, Escape focus restoration, and a declared app icon. Explicitly accepted the final visual deltas and expanded the golden set from five to ten captures.

Rendered evidence:
Ten current and golden captures covering Home desktop/mobile, Rooms, room detail mobile, Food, Around, House, Journal, Find Us, and Stay.

Tests:
Unit and lint pass; production build emits 28 static routes; all 23 Playwright checks pass; production dependency audit reports zero vulnerabilities. Browser QA also covered six viewport widths and twelve Axe routes.

Drift status: GREEN

Outcome: ACCEPT

Why:
The changes resolve the final adversarial findings, preserve the locked grammar, and produce a coherent release candidate with accepted visual memory.

Remaining highest-impact issues:
Complete three consecutive clean reviews against this accepted checkpoint, then enter Conservation Mode.

## Iteration 5 — Conservation gate

Starting checkpoint:
D-003 release-candidate visual memory with ten accepted goldens.

Accepted problems:
1. Establish checkpoint integrity after the earlier golden-memory mismatch.
2. Satisfy the governing brief’s three-consecutive-clean-review requirement without changing the accepted product.

Changes:
Reconciled governance with the accepted visual memory, prepared the human test packet, and held the implementation unchanged during the final review sequence.

Rendered evidence:
Ten byte-identical current/golden screenshot pairs; live representative desktop and mobile routes.

Tests:
Cycle C reran all 23 Playwright checks. Cycles A, B, and C independently returned PASS with GREEN drift and no meaningful high-impact issue.

Drift status: GREEN

Outcome: ACCEPT — ENTER CONSERVATION MODE

Why:
All seven Conservation Mode conditions are satisfied. D-004 locks the transition and limits future work to evidenced maintenance.

Remaining highest-impact issues:
None established. Await real human feedback or a qualifying maintenance defect.

## Iteration 6 — Champion baseline registration

Starting checkpoint:
Conservation Mode checkpoint `86de868` with a clean worktree.

Accepted problems:
1. Activate the new evolution protocol without changing or weakening the accepted product.
2. Make the incumbent recoverable and every future replacement evidence-dependent.

Changes:
Copied the addendum into the repository, registered the unchanged product as `CHAMPION_000`, created the required evolution ledgers and convergence directory, defined the blind judging and promotion rules, and queued one narrow evidence-backed validation Challenger. No application or visual file changed.

Rendered evidence:
Ten regenerated current captures remained byte-identical to the accepted goldens; their hashes are recorded in `evolution/CHAMPION.md`.

Tests:
Unit, lint, production build, 23 Playwright checks, and production dependency audit passed. The build emitted 28 static routes.

Drift status: GREEN

Outcome: ACCEPT — PROTOCOL ACTIVE, CHAMPION_000 PROTECTED

Why:
The design was already locked and mature. Baseline capture therefore preserves the incumbent and adds only recoverable experimental governance.

Remaining highest-impact issues:
Run CHALLENGER_001 alone in isolation as a protocol validation, then promote only on complete evidence or record its rejection.
