# Change Queue

## C-001 — Establish the project baseline
Status: ACCEPTED

Problem:
The repository contains a governing brief but no runnable application.

Evidence:
Repository inspection at Phase 0.

Scope:
Bootstrap Next.js, TypeScript, authored CSS, browser testing, and required governance files.

Do not modify:
The governing brief or any path outside this repository.

Expected improvement:
A runnable, testable baseline that supports the specified workflow.

Risk: B

Owner role: Orchestrator / Frontend Implementer

Validation:
Install, unit test, lint, production build, local start, and browser smoke check passed.

## C-002 — Build representative pages
Status: ACCEPTED

Problem:
The locked direction exists only as documentation and has no rendered evidence.

Evidence:
Phase 3 checkpoint.

Scope:
Implement Home and Rooms using The House Register at desktop and mobile.

Do not modify:
Project Constitution, technical stack, locked direction, or unrelated future page content.

Expected improvement:
Prove that the register grammar produces a usable, authored hospitality experience.

Risk: B

Owner role: Frontend Implementer

Validation:
Lint, build, browser interaction, 1440px and 390px screenshots, and reviewer findings.

## Refinement cycle one — visual / anti-AI

### C-003 — Make imagery function as evidence
Status: ACCEPTED

Problem: Repeated overlay disclaimers, duplicate overview images, decorative location metadata, and unsupported arrow glyphs weakened the authored illusion.

Evidence: Blind visual jury and anti-AI review of the first five captures.

Scope: Move honest disclosure into factual captions, add room/kitchen detail studies, correct location language, and use supported arrows.

Do not modify: Locked type, grid, navigation model, or page scope.

Risk: B · Owner role: Frontend Implementer

Validation: Revised captures; blind and adversarial re-review accepted the result.

### C-004 — Remove repeated manifesto cadence
Status: ACCEPTED

Problem: Multiple short polished fragments produced a machine-smooth voice.

Scope: Replace repeated slogan structures with stove time, path origin, house arrangement, and room facts.

Do not modify: Core business proposition or copy voice.

Risk: A · Owner role: Frontend Implementer

Validation: Copy visible in revised captures; anti-AI re-review marked resolved.

### C-005 — Vary internal page openings by task
Status: ACCEPTED

Problem: Home, Rooms, and Food repeated one oversized boutique-editorial template.

Scope: Preserve the register grid while making Rooms compact/factual and Food service-led.

Do not modify: Home composition, global typography, or navigation.

Risk: B · Owner role: Frontend Implementer

Validation: Revised desktop references; drift returned GREEN.

## Refinement cycle two — functional hardening

### C-006 — Complete inquiry date-state validation
Status: ACCEPTED

Problem: Past dates could succeed and success remained stale after edits.

Scope: Reject past/date-order errors and clear or cancel feedback when fields change.

Do not modify: Form fields, fictional booking model, or copy outside status messages.

Risk: B · Owner role: Frontend Implementer

Validation: Browser tests cover past, date-order, loading, success, and stale-state reset.

### C-007 — Close the mobile menu on every exit path
Status: ACCEPTED

Problem: Escape and the persistent stay link left the menu expanded.

Scope: Close on Escape, wordmark, stay action, and primary links.

Do not modify: Navigation destinations or visual model.

Risk: A · Owner role: Frontend Implementer

Validation: Keyboard and navigation browser test.

### C-008 — Restore 44px mobile action targets
Status: ACCEPTED

Problem: Header and inline links had visible boxes below the locked target minimum.

Scope: Increase interactive target boxes without changing visual hierarchy.

Do not modify: Type sizes, copy, or page composition.

Risk: B · Owner role: Frontend Implementer

Validation: Automated bounding-box checks at 375px and no horizontal overflow.

## Refinement cycle three — copy and functional truth

### C-009 — Make inquiry language match local behavior
Status: ACCEPTED

Problem: Upstream actions and form copy implied that a message might be sent despite no backend.

Scope: Name the interaction an inquiry preview and state that it transmits nothing and reserves no room.

Do not modify: Field set, visual form structure, or fictional project scope.

Risk: A · Owner role: Copy Editor / Frontend Implementer

Validation: Copy review and browser network inspection found no transmission or misleading success claim.

### C-010 — Give each journal article its own subject
Status: ACCEPTED

Problem: Three article routes initially repeated one mismatched body.

Scope: Write distinct snow, kitchen, and path entries with corresponding study images.

Do not modify: Journal index grammar or global voice.

Risk: B · Owner role: Copy Editor / Frontend Implementer

Validation: Route review found distinct titles, body hashes, subheads, and images.

### C-011 — Narrow the room-access claim
Status: ACCEPTED

Problem: “Accessible room” overstated what the experiment could substantiate.

Scope: State only that Room 06 has no internal steps and disclose the uneven final approach on foot.

Do not modify: Arrival route facts or room numbering.

Risk: A · Owner role: Copy Editor

Validation: Final truthfulness review accepted the revised wording.

## Refinement cycle four — adversarial completion

### C-012 — Individualize every room detail route
Status: ACCEPTED

Problem: Eleven room routes swapped headings into identical image, prose, bathroom, and sound content.

Scope: Supply eleven image paths and room-specific prose, floor, bathroom, sound, caption, and alt text records.

Do not modify: Room register, route slugs, navigation model, or global design system.

Risk: B · Owner role: Frontend Implementer

Validation: Browser test and hostile re-review confirm 11 unique images and detail bodies across 11 successful routes.

### C-013 — Differentiate remaining task-page openings
Status: ACCEPTED

Problem: House, Around, Journal, Stay, and Find Us repeated the same PageIntro silhouette.

Scope: Give Around, Journal, Stay, and Find Us task-specific openings; retain the narrative opening for House.

Do not modify: Global header, typography, color tokens, or locked register grammar.

Risk: B · Owner role: Frontend Implementer

Validation: Five additional desktop captures and mobile overflow checks; hostile review marked resolved.

### C-014 — Remove consent theater
Status: ACCEPTED

Problem: A cookie choice obstructed the first visit even though the site had no optional cookies or analytics.

Scope: Remove the notice and stored preference; state and test zero cookies and zero browser storage.

Do not modify: Privacy disclosure beyond factual correction.

Risk: A · Owner role: Frontend Implementer

Validation: Live inspection and regression test report zero cookies, localStorage, and sessionStorage.

## Refinement cycle five — localized browser residue

### C-015 — Complete keyboard and target behavior
Status: ACCEPTED

Problem: Expanded menu links and one home action fell below the literal 44px rule; Escape did not restore focus.

Scope: Enlarge hit areas and return focus to the Menu button when closing with Escape.

Do not modify: Header composition or navigation destinations.

Risk: A · Owner role: Frontend Implementer

Validation: Browser QA measured 44px menu links and confirmed focus restoration.

### C-016 — Remove the first-load icon 404
Status: ACCEPTED

Problem: A fresh browser requested a missing favicon and emitted a resource error.

Scope: Add an ink/paper KH SVG app icon and verify the declared asset returns 200.

Do not modify: Wordmark, header, or decorative language.

Risk: A · Owner role: Frontend Implementer

Validation: Build emits `/icon.svg`; focused test and full suite pass.

## Evolution cycle one — protocol validation

### C-017 — Improve mobile secondary-text legibility
Status: ACCEPTED — promoted as CHAMPION_001

Problem:
Mobile captions, factual labels, and footer disclosure sat at the lower edge of comfortable legibility and risked reading as decorative editorial microtype.

Evidence:
Prior blind review, objective mobile measurements, and the CHALLENGER_001 blind pairwise tournament.

Scope:
At 650px and below, change the existing secondary role from `.84rem` to `.88rem` with 1.35 line height and include `.footer-note` in that role.

Do not modify:
Font families or roles, desktop type, color, grid, navigation, copy, images, page structure, or unrelated spacing.

Risk: A · Owner role: Frontend Implementer through isolated Challenger

Validation:
Unit, lint, build, and 23 Playwright checks passed before and after integration. Twelve width probes showed zero overflow/errors. Page-height deltas stayed below 0.5%. All four blind judges preferred the Challenger and identified no unacceptable regression. Drift is GREEN.

## Human visual reset

### C-018 — Preserve the human-rejected baseline
Status: ACCEPTED

Problem:
The human owner rejected the visual direction, while its engineering and evaluation history still need a recoverable reference.

Scope:
Tag commit `98715a9` as `human-rejected-baseline-001`, preserve the ten screenshots and validation record, and mark former visual approvals as historical rather than authoritative.

Do not modify:
Application UI, content, routes, production functionality, or the preserved screenshots.

Risk: A · Owner role: Orchestrator

Validation:
Unit 1/1, lint, build with 28 routes, and Playwright 23/23 passed before reset documentation was introduced.

### C-019 — Establish real-world Design Quality Discovery
Status: ACTIVE — live-web channel unavailable; other evidence channels now supported

Problem:
The prior process allowed AI to generate, judge, approve, and lock a visual direction without a trustworthy external professional anchor.

Scope:
Create an isolated homepage Design Lab; inspect a substantial real-world corpus in a browser; document positive, negative, and validation sets; create six genuinely distinct homepage concepts; benchmark and render finalists for explicit human selection.

Do not modify:
The preserved baseline application, secondary pages, production integration, or the human gate.

Risk: C · Owner role: Orchestrator, research specialists, isolated concept implementers, and independent reviewers

Validation:
Real URLs and inspection evidence; independently inspectable concepts; desktop/mobile renders; concrete comparison records; no direction lock without explicit human approval.

Blocker evidence:
Internet reachability briefly succeeded after scoped trust of the exact environment proxy CA. During deeper inspection the shared `cloudflare_https_tunnel` began returning HTTP 503 for every destination, including `example.com`, through both Chromium and `curl`. Concurrency was removed and fresh serialized sessions still failed. Work stops before reference claims or concept generation, as required by the human override.

Owner update:
D-008 supersedes the live-browser prerequisite. The recorded 503 still blocks live inspection, but not structured, human-supplied, or local research. Concept generation remains blocked by actual evidence gaps in `design-intelligence/research/research-coverage.json`.

### C-020 — Build resilient Design Intelligence infrastructure
Status: ACCEPTED — infrastructure only

Problem:
The browser-only research gate could halt all discovery when one cloud tunnel failed, and prior successful research lacked a durable, queryable architecture.

Scope:
Add an append-only reference/provenance ledger, five source adapters, human taste feedback, atomic patterns, staged coverage and synthesis gate, holdout-filtered concept brief, independent rendered review records, network-failure isolation, and tests.

Do not modify:
Protected production UI, existing product assets, prior checkpoint tags, or the human design gate.

Risk: B · Owner role: Orchestrator

Validation:
Unit and CLI tests for persistence, source failure, coverage, provenance, holdout filtering, human feedback, synthesis gate, independent evaluation, and concurrency; lint and build; source tree comparison.

### C-021 — Correct live visual capture and quarantine unreliable evidence
Status: ACCEPTED — correction implemented; live revalidation limited by global HTTP 503

Problem:
The owner found large blank regions in the first Ace Hotel screenshot. HTTP success and a full-page capture were insufficient to establish visual completeness.

Scope:
Add render-complete visual sessions with progressive bidirectional scrolling, dynamic-height handling, asset/reveal/blank-region diagnostics, retries, explicit status, provenance, and tests. Quarantine and audit every current-run live capture. Keep all raw evidence.

Do not modify:
Protected product UI or design direction; do not promote incomplete or unaudited images to taste calibration or research coverage.

Risk: B · Owner role: Orchestrator

Validation:
Deterministic local Chromium fixtures test lazy media, reveal state, growing document height, retries, invalidation, and provenance. All 15 old live captures are quarantined; two new attempts failed with real HTTP 503 and remain incomplete. Coverage remains zero valid positive references.
