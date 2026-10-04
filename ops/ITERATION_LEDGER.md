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

## Iteration 7 — First isolated tournament

Starting checkpoint:
Protected CHAMPION_000 plus protocol activation checkpoint `1f18e3d`.

Accepted problems:
1. Test whether the protocol can improve one known minor weakness without exposing the incumbent to churn.
2. Resolve mobile secondary text that a blind reviewer found near the edge of comfortable legibility.

Changes:
Created one isolated branch/worktree, changed one mobile secondary-text rule, ran objective gates, randomized the blind pair as A = Champion and B = Challenger, collected four independent perspective judgments, integrated only the winning line, and explicitly updated only two mobile goldens.

Rendered evidence:
Matching 390px Home and Stone Room full-page screenshots plus focused caption/footer crops. Desktop captures remained byte-identical.

Tests:
Unit, lint, production build, production audit, and all 23 Playwright checks passed in isolation and after integration. Twelve 320/375/390 probes had zero overflow/errors. Height deltas were 0.46% and 0.30%.

Drift status: GREEN

Outcome: ACCEPT — PROMOTE CHALLENGER_001 AS CHAMPION_001

Why:
Art Direction, Brand Specificity, Anti-AI, and UX judges unanimously selected the anonymous Challenger. The improvement is legible and specific, while all Pareto-protected dimensions remain intact.

Remaining highest-impact issues:
None established. Preserve CHAMPION_001 and await new evidence rather than manufacturing another mutation.

## Iteration 8 — Human visual reset

Starting checkpoint:
Former `CHAMPION_001` closeout at `98715a9`.

Authoritative finding:
The human owner rejected the rendered visual direction as generic, visibly AI-generated, aesthetically weak, and below professionally art-directed commercial work.

Actions:
Stopped Champion/Challenger visual evolution; validated and tagged the unchanged product as `human-rejected-baseline-001`; preserved screenshot hashes; invalidated AI-only visual approvals as quality gates; reopened design only inside an isolated homepage Design Lab.

Tests before reset documentation:
Unit 1/1, lint pass, production build pass with 28 routes, Playwright 23/23.

Drift status:
HUMAN_REJECTED. The previous GREEN judgment is retained only as evidence of `AI_SELF_EVALUATION_FAILURE_001`.

Outcome:
ACCEPT HUMAN OVERRIDE — BEGIN DESIGN QUALITY DISCOVERY

Next:
Verify actual browser access, inspect real operating websites, create the reference atlases and holdout set, then build six isolated homepage concepts. Stop for explicit human approval after finalist renders.

Research-gate result:
BLOCKED. System Chromium returned `net::ERR_TUNNEL_CONNECTION_FAILED` for both `https://www.acehotel.com/` and `https://www.aesop.com/`. No page content was inspected, no reference was fabricated, and no concept generation began.

Internet retry:
After the owner enabled access, scoped trust of the exact environment proxy CA allowed real Chromium HTTP 200 responses for Ace Hotel, Aesop, and eight hospitality homepages. The shared `cloudflare_https_tunnel` then degraded to a global HTTP 503 for every destination, reproduced by both `curl` and fresh Chromium against `example.com` after all concurrent researchers were paused. Initial reachability was not promoted into incomplete design claims; the corpus and concepts remain unstarted.

## Iteration 9 — Resilient Design Intelligence infrastructure

Starting checkpoint:
`4052280`, with `HUMAN_REJECTED_BASELINE_001` protected at `98715a9`.

Owner instruction:
Replace the browser-only prerequisite with an evidence-based multi-source research layer. Keep the human visual gate and protected product intact.

Changes:
Added an append-only source/reference/pattern/feedback event log, five source adapters, immediate live-capture persistence, derived ledgers, coverage and staged gate, holdout-filtered concept brief, direction provenance and difference validation, independent rendered evaluation records, current design truth, and focused tests.

Evidence status:
The rejected baseline is recorded as negative human evidence. Earlier HTTP 200 checks remain candidate reachability only. The live HTTPS channel still returns HTTP 503. No positive external reference or new direction is claimed.

Outcome:
INFRASTRUCTURE ACCEPTED; DESIGN SYNTHESIS STILL BLOCKED BY SPECIFIC COVERAGE GAPS, not network state alone.

Validation:
10/10 unit tests passed, including a sufficient mixed corpus remaining eligible after a source outage, offline adapter ingest during a browser outage, rejected feedback persistence, holdout filtering, provenance, independent reviewer checks, and concurrent writes. Lint passed. Production build passed with the same 28 routes. A real `capture-live` attempt against `example.com` returned HTTP 503 and recorded only source health, without creating a false reference.

## Iteration 10 — Research capture integrity correction

Starting checkpoint:
Design Intelligence infrastructure at `8609a55c5c9ac15e3ba9be13b38dc7d4c021452b`.

Owner finding:
Ace Hotel's first full-page screenshot contained large blank regions and was not reliable evidence of the actual design. The owner supplied a render-complete capture protocol and required quarantine before further broad research.

Actions:
Captured 15 first-party homepages before the correction, then stopped. All 15 were explicitly quarantined with raw files intact. Added session capture, real progressive scrolling, dynamic-height and asset diagnostics, retry/incomplete states, and gates that exclude questionable evidence from coverage, calibration, holdout review, and concept briefs. Reviewed the old desktop and mobile files; Ace and Fogo recapture attempts returned HTTP 503 on both sizes. The shared tunnel again returned HTTP 503 for unrelated probe domains.

Evidence status:
0 valid positive references, 13 audit-required references, 2 incomplete recapture references, 0 valid holdouts, and no extracted positive atomic principles. The rejected KAMEN baseline remains negative human evidence. No new design direction exists.

Validation:
Deterministic local Chromium fixtures and ledger tests passed. Lint and unchanged 28-route production build passed. The production UI was not changed.

Next:
Use valid alternative visual exports if available, or recapture first-party sites when external access returns. Inspect the complete viewport sessions before promoting any source, then resume gap-directed research and prepare owner taste calibration.

## Iteration 11 — Autonomous studio and working champion

Starting checkpoint:
Clean `work` checkout `4c127692a088758b1bb9e7cb1c1669c030568589`, protected with tag `protected-pre-autonomous-studio-4c12769`. The human-rejected `98715a9` baseline remains separately tagged.

Owner instruction:
The new autonomous studio directive supersedes the old owner taste-calibration and intermediate approval flow. Four independent design systems and a complete working site are required; verified browser research remains separate from creative prototyping.

First-pass directions:
Editorial (text-led reading), Spatial (architectural house section), Cinema (image-led sequence), and Vernacular (material register). Each has its own hierarchy, page rhythm, image treatment, food treatment and mobile sequence. Static routes and three-size renders are under `public/design-lab/` and `design-lab/renders/`.

Review:
The seven-role critique rejected Cinema for image dependence and weak room utility. Editorial and Vernacular were too close to the human-rejected serif/paper family. Spatial was selected provisionally for a coherent full-site grammar. Anonymous render panels were used, but implementer/reviewer identity was not independent; no human-quality verdict is claimed.

Adversarial revision and implementation:
The homepage now leads with the eleven-room/fire relationship, an illustrative building section, differentiated room imagery, a strong food section and a path note. Fire kitchen and House received distinctive route compositions. Existing room detail, journal, arrival, inquiry, legal and recovery routes remain in the same spatial system. The generated concept imagery and non-transmitting booking preview remain explicit.

Verified research return:
HTTPS resumed briefly. STJOHN, DAVIDCHIPPERFIELD and CASABONAY passed render-complete desktop/mobile sessions, were visually inspected and yielded five provenance-backed atomic patterns. NOMA sessions remained incomplete and were excluded. The new references challenged the champion's uniform image rhythm, prompting varied room widths and a smaller path image. Lane A still fails the broader research synthesis gate and the Lane B work was not retroactively labelled research-backed.

Functional validation:
13/13 unit/integration tests; lint pass; production build of 28 static routes; Playwright 32/32 pass. Static export under the GitHub Pages repository subpath passed local HTTP route, image and client navigation checks. Representative route scans at 320, 375, 390, 650, 768, 1024 and 1440 px found no document overflow. Full-page desktop/laptop/mobile captures of the finished routes were preserved.

Publication checkpoint:
The source candidate was committed as `455574881ac94c316569f3a98f18ce48e9077d5d` on `work` and pushed to the same isolated experiment repository. The previous `gh-pages` preview commit was tagged `preview-86de868-archive` before the new static export was committed as `25b2b9f070c39992d71aac5bf8a64fb8858a379a` and published. GitHub Pages reported `built`. A fresh HTTPS Chromium visit returned HTTP 200 on Home, Rooms, Food and Stay, loaded their first images, followed the Stay link, and produced no console or page errors. No other repository or production infrastructure was used.

Drift status:
Working candidate, with original human-rejected visual family preserved rather than promoted. Human judgment of the finished result remains pending.
