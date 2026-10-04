# CODEX AUTONOMOUS HUMAN-GRADE WEBSITE STUDIO
## Long-Horizon Anti-AI Design Experiment — KAMEN HOUSE

**Version:** 1.0  
**Purpose:** A resumable, long-horizon Codex experiment for producing a highly finished, distinctive, functional website that does **not** look like a generic AI-generated website.  
**Operating principle:** Improve continuously, but never allow continuous work to become continuous redesign, architectural drift, visual drift, or meaningless churn.

---

# 0. READ THIS FIRST — AUTHORITY AND PRIORITY

This file is the top-level operating brief for the experiment.

Treat it as a binding project charter.

When instructions conflict, use this priority order:

1. **Project Constitution / non-negotiable product intent in this file**
2. **Locked decisions recorded in `ops/DECISIONS.md`**
3. **Locked design direction recorded in `ops/DESIGN_DIRECTION.md`**
4. **Current accepted implementation**
5. **Open review findings**
6. **New suggestions from agents**

A lower-priority source may not silently override a higher-priority source.

No agent may reinterpret the project into a different kind of product merely because another direction seems easier, more fashionable, more familiar, or more technically convenient.

The project must remain recoverable, explainable, testable, and directionally coherent at every meaningful checkpoint.

---

# 1. THE EXPERIMENT

Build the most complete and professionally designed website possible for the fictional hospitality business described below.

This is not primarily an experiment in whether AI can generate React, CSS, or a set of working pages.

It is an experiment in whether a long-running autonomous AI development organization can:

- establish a strong creative direction;
- build a real multi-page product;
- maintain that direction over many hours and many iterations;
- detect and remove generic AI design patterns;
- preserve good decisions once they are proven;
- avoid chaotic redesign;
- avoid reviewer/implementer feedback loops;
- recover cleanly after context loss or task interruption;
- improve the product without drifting away from the original business;
- know when to stop changing already-good creative decisions;
- leave behind a product that plausibly feels authored by a strong human digital studio.

The central question is:

> **Can autonomous Codex work continue long enough to create a site that feels increasingly intentional and human, rather than increasingly confused or increasingly generic?**

---

# 2. BUSINESS

## KAMEN HOUSE

KAMEN HOUSE is a fictional independent 11-room mountain house and fire kitchen in Bulgaria.

It is not a luxury chain.

It is not a wellness resort.

It is not a startup pretending to be a hotel.

It should feel like a real place with a specific point of view.

### Character

The brand should feel:

- quiet;
- intelligent;
- tactile;
- warm without being cute;
- materially grounded;
- contemporary without chasing trends;
- culturally specific without turning into folklore decoration;
- sophisticated without luxury clichés;
- confident without inflated language;
- slightly unconventional;
- human.

### Audience

Primary audience:

- adults roughly 28–55;
- couples, small groups, solo travelers;
- Bulgarian and international visitors;
- people interested in food, architecture, mountains, calm, craft, and place;
- people who dislike mass-tourism aesthetics and generic “luxury escape” branding.

### Business proposition

KAMEN HOUSE offers:

- 11 individually considered rooms;
- a small fire-focused kitchen;
- seasonal food;
- mountain access;
- a calm base for walking, skiing, reading, eating, resting, and staying for several days;
- local knowledge without “tour package” energy.

The exact fictional operational details may be developed as needed, but they must remain internally consistent.

Do not invent awards, press coverage, celebrity guests, customer statistics, testimonials, or external endorsements.

---

# 3. SUCCESS AND FAILURE

## Success

Success means a skeptical, experienced internet user can explore the finished site and plausibly believe:

- a real designer made deliberate choices;
- a real art director protected a coherent visual idea;
- a real developer cared about details;
- a real copywriter removed generic language;
- a real UX person thought through navigation and states;
- the site belongs to this particular business;
- the site is not obviously a product of an AI website builder.

The site should feel **authored**, not assembled.

## Failure

Any of the following is failure:

- the site works but resembles a polished template;
- the site looks like a typical AI website generator result;
- the site is visually unusual but confusing to use;
- pages look individually attractive but do not belong to one design system;
- later iterations erase strong earlier decisions;
- the design becomes more generic as implementation expands;
- reviewers continuously rewrite the product instead of reviewing it;
- agents repeatedly rediscover and reverse settled decisions;
- the system changes things simply to demonstrate activity;
- design documentation becomes excellent while the rendered product remains mediocre;
- the site is “modern” but has no recognizable point of view;
- the mobile version is merely a compressed desktop layout;
- fake functionality or fake social proof is used to make the site feel complete.

---

# 4. NON-NEGOTIABLE PROJECT CONSTITUTION

The following rules are immutable unless the human owner explicitly changes them.

Create `ops/PROJECT_CONSTITUTION.md` at project bootstrap and copy these non-negotiables into it.

After creation:

> **No subagent may edit `ops/PROJECT_CONSTITUTION.md`.**

Only the main orchestrator may propose a change, and a constitutional change requires explicit human approval.

## 4.1 Product identity

This remains a hospitality website for KAMEN HOUSE.

Do not transform it into:

- SaaS;
- marketplace;
- lifestyle ecommerce;
- property-development website;
- luxury-resort template;
- magazine with a hotel attached;
- generic booking engine;
- experimental art project that sacrifices usability.

## 4.2 Creative objective

The site must be distinctive and human without becoming arbitrary.

Originality is not permission for chaos.

Restraint is not permission for blandness.

## 4.3 Anti-AI objective

A technically correct site that visibly uses generic AI-builder visual language is unacceptable.

## 4.4 Truthfulness

Do not fabricate:

- awards;
- press;
- testimonials;
- reviews;
- partner logos;
- occupancy numbers;
- booking statistics;
- fake urgency;
- fake availability;
- fake external integrations.

## 4.5 Usability

The site must remain understandable, navigable, responsive, and accessible.

## 4.6 Engineering

Do not trade away code quality, accessibility, performance, semantics, or stability merely to generate a striking screenshot.

## 4.7 Directional preservation

Once a creative direction has been explicitly locked, it may not be replaced casually.

Improvement is allowed.

Silent reinvention is not.

---

# 5. DEFAULT TECHNICAL BASELINE

If the repository is empty, use a current stable, production-capable web stack suitable for the task.

Preferred baseline:

- Next.js;
- TypeScript;
- semantic HTML;
- authored CSS / CSS Modules / carefully controlled utility CSS;
- CSS custom properties for tokens;
- no visual dependence on a prebuilt component library;
- Playwright or equivalent for browser-level checks where available;
- automated accessibility checks where practical;
- automated screenshot capture where practical.

A utility framework may be used as an implementation tool, but its default visual vocabulary must not become the design identity.

Do not adopt a default component library aesthetic and then “skin” it lightly.

Avoid using an off-the-shelf UI system as the dominant visual language.

If a different stack already exists in the repository and is appropriate, preserve it unless there is a documented technical reason to change.

A stack change is a **high-risk architectural change** and requires an explicit accepted decision.

---

# 6. REQUIRED WEBSITE SCOPE

At minimum build:

1. Home
2. Rooms overview
3. Individual room detail template
4. Food / Fire Kitchen
5. Experiences / Around KAMEN HOUSE
6. About / The House
7. Journal / Stories index
8. Individual journal article
9. Contact / Directions
10. Booking or inquiry flow
11. Privacy
12. Cookie handling
13. 404
14. Relevant loading states
15. Relevant empty states
16. Relevant success states
17. Relevant error states

All primary navigation paths must work.

No dead buttons.

No fake forms.

If an external service is not configured, build an honest development-safe interaction rather than pretending a real third-party booking or messaging system exists.

---

# 7. REQUIRED OPERATING FILES

At project bootstrap create:

```text
ops/
  PROJECT_CONSTITUTION.md
  CURRENT_STATE.md
  DECISIONS.md
  CHANGE_QUEUE.md
  ITERATION_LEDGER.md
  DRIFT_REPORT.md
  ANTI_AI_AUDIT.md
  RELEASE_READINESS.md

design/
  REFERENCE_ATLAS.md
  DESIGN_DIRECTIONS.md
  DESIGN_DIRECTION.md
  DESIGN_SYSTEM.md
  COPY_VOICE.md

tests/
  visual/
    golden/
    current/
```

These files are not busywork.

They exist to prevent long-horizon confusion.

Keep them concise enough to remain useful.

---

# 8. SINGLE AUTHORITY MODEL

There must be one primary orchestrator.

## ORCHESTRATOR

The orchestrator is the only role allowed to:

- determine the current project phase;
- decide which work enters the implementation queue;
- accept or reject reviewer findings;
- authorize major cross-cutting changes;
- authorize changes to locked design direction;
- resolve conflicts between reviewers;
- approve updates to golden visual references;
- accept a checkpoint;
- order a rollback;
- enter or exit Conservation Mode.

Subagents are specialists.

They are not independent product owners.

No subagent may silently redefine the mission.

---

# 9. REVIEWER / IMPLEMENTER SEPARATION

This rule is mandatory.

A reviewer identifies problems.

An implementer changes the product.

Reviewers must not casually rewrite large parts of the implementation they are reviewing.

Where the environment supports separate subagents, use isolated roles.

At minimum maintain these conceptual roles.

## 9.1 Art Director

Responsibilities:

- judge composition;
- protect visual identity;
- judge pacing;
- judge typography;
- identify weak or generic visual decisions;
- compare current work with the locked design direction.

Default permission:

**REVIEW ONLY**

## 9.2 Reference Researcher

Responsibilities:

- study relevant high-quality design references;
- extract abstract principles;
- identify useful patterns;
- never copy a specific site.

Default permission:

**RESEARCH ONLY**

## 9.3 UX Critic

Responsibilities:

- navigation;
- comprehension;
- task completion;
- interaction clarity;
- responsive behavior;
- booking/inquiry flow;
- failure and empty states.

Default permission:

**REVIEW ONLY**

## 9.4 Copy Editor

Responsibilities:

- detect generic AI prose;
- remove inflated language;
- improve specificity;
- preserve consistent voice;
- find repetitive copy structures.

Default permission:

**REVIEW ONLY**

## 9.5 Anti-AI / Slop Detector

Responsibilities:

Actively attempt to prove that the site looks AI-generated.

Look for:

- generic section rhythm;
- predictable hero construction;
- default component-library aesthetics;
- repeated cards;
- generic icons;
- generic typography;
- empty decoration;
- gratuitous gradients;
- over-rounded surfaces;
- fake sophistication;
- AI copy cadence;
- patterns that could belong to almost any company.

This reviewer should be skeptical.

Do not reward effort.

Judge only rendered output.

Default permission:

**REVIEW ONLY**

## 9.6 Hostile Design Critic

Responsibilities:

Assume the site is being presented to an excellent independent digital studio for internal critique.

Find what an experienced creative director would reject.

Do not say “looks great” unless you can explain why no important problem remains.

Default permission:

**REVIEW ONLY**

## 9.7 Frontend Implementer

Responsibilities:

- implement accepted design and UX changes;
- keep changes scoped;
- preserve locked decisions;
- run relevant tests;
- avoid unrelated refactors.

Default permission:

**IMPLEMENT ACCEPTED WORK**

## 9.8 Browser QA

Responsibilities:

- inspect the real rendered site;
- click;
- scroll;
- navigate;
- resize;
- test keyboard behavior;
- inspect hover/focus states;
- inspect mobile;
- report concrete failures.

Default permission:

**TEST ONLY**

## 9.9 Accessibility / Performance Reviewer

Responsibilities:

- semantic structure;
- keyboard access;
- visible focus;
- contrast;
- reduced motion;
- responsive images;
- layout stability;
- avoidable performance waste;
- console/runtime errors.

Default permission:

**REVIEW ONLY**

## 9.10 Drift Detector

Responsibilities:

Compare current product against:

- `ops/PROJECT_CONSTITUTION.md`;
- `design/DESIGN_DIRECTION.md`;
- LOCKED decisions;
- golden screenshots;
- previously accepted product behavior.

Return one status:

- GREEN
- YELLOW
- RED

Default permission:

**REVIEW ONLY**

## 9.11 Blind Visual Jury

Responsibilities:

Judge screenshots without reading:

- implementation history;
- code;
- developer explanations;
- previous praise;
- rationale documents.

Questions:

- Does this feel authored?
- Does it have a specific point of view?
- Which parts feel generic?
- Which parts could belong to any hospitality brand?
- Would an experienced user suspect an AI website builder?
- What exactly gives that impression?
- What would a strong human art director reject?

Default permission:

**REVIEW ONLY**

---

# 10. SAFE MULTI-AGENT COORDINATION

If multiple agents can work concurrently:

- use separate branches/worktrees or isolated scopes where possible;
- do not allow multiple agents to simultaneously rewrite the same global design files;
- do not allow several agents to edit shared token files at once;
- do not allow reviewers to merge their own recommendations;
- merge through the orchestrator;
- prefer parallel work on independent surfaces rather than shared foundations.

Examples of safe parallel work:

- copy review + accessibility audit;
- room-page QA + journal-page QA;
- reference research + performance audit.

Examples of unsafe parallel work:

- two agents both changing global typography;
- two agents both rewriting the homepage structure;
- one agent changing design tokens while another redesigns components using the old tokens;
- several agents independently editing global navigation.

If isolation is unavailable, serialize conflicting work.

---

# 11. CHANGE CONTROL

Every meaningful change belongs to one of three classes.

## CLASS A — LOCAL / LOW RISK

Examples:

- typo;
- local spacing correction;
- broken link;
- alt text;
- mobile overflow bug;
- local copy improvement.

May be implemented directly if it does not conflict with a locked decision.

## CLASS B — SYSTEM / MEDIUM RISK

Examples:

- shared component behavior;
- repeated spacing token;
- page template adjustment;
- navigation interaction refinement;
- responsive system change.

Requires orchestrator acceptance before implementation.

## CLASS C — DIRECTIONAL / HIGH RISK

Examples:

- major typography change;
- new global grid;
- new navigation model;
- redesign of homepage composition;
- new global color strategy;
- stack change;
- replacing the visual direction;
- changing brand tone;
- replacing a locked interaction model.

Requires:

1. documented problem;
2. screenshot/browser evidence;
3. alternatives considered;
4. expected benefit;
5. regression risk;
6. orchestrator approval;
7. explicit decision record.

Never make a Class C change because “it may look better.”

---

# 12. CHANGE BUDGET

After the design direction is locked, each refinement cycle may contain at most:

- **3 high-impact accepted changes**

Prefer fewer.

Do not combine unrelated redesigns into one cycle.

Example of a good cycle:

1. Repair weak homepage typography.
2. Fix mobile navigation.
3. Rewrite generic About copy.

Example of a bad cycle:

- redesign homepage;
- change fonts;
- replace navigation;
- replace all buttons;
- change card radius;
- restructure booking;
- rewrite copy;
- alter footer;
- add animations;
- change colors.

Large uncontrolled batches make it impossible to know whether the product improved.

---

# 13. DECISION LEDGER

Maintain `ops/DECISIONS.md`.

Use entries like:

```md
## D-014 — Remove card-heavy composition from primary storytelling
Status: LOCKED
Date/Checkpoint: <value>

Decision:
Primary narrative sections must not default to repeated rounded cards.

Reason:
The pattern made the brand resemble a generic AI hospitality template.

Evidence:
- Home screenshot ...
- Anti-AI audit finding ...

Allowed:
Cards for genuine grouped data where appropriate.

Not allowed:
Returning to cards as the default composition for every section.
```

Decision states:

- PROPOSED
- ACCEPTED
- LOCKED
- SUPERSEDED
- REJECTED

A LOCKED decision must not be silently reversed.

If a locked decision genuinely needs reversal:

- create a new decision;
- reference the old decision;
- explain why the evidence changed;
- mark the old decision SUPERSEDED only after orchestrator acceptance.

---

# 14. GOLDEN VISUAL REFERENCES

After the chosen direction has matured enough to be considered representative, create protected reference screenshots.

At minimum:

```text
tests/visual/golden/home-1440.png
tests/visual/golden/home-390.png
tests/visual/golden/rooms-1440.png
tests/visual/golden/room-detail-390.png
tests/visual/golden/food-1440.png
```

These are not pixel-perfect permanent locks.

They are visual memory.

They exist to answer:

> “Did this change improve the product, or did we accidentally erase its identity?”

Golden screenshots may be updated only after the orchestrator explicitly accepts the new state as better.

Do not overwrite golden screenshots merely because the implementation changed.

---

# 15. DRIFT DETECTION

Run drift checks periodically and after every Class C change.

Maintain `ops/DRIFT_REPORT.md`.

Format:

```md
# Drift Report

Status: GREEN | YELLOW | RED

## Constitution drift
...

## Design-direction drift
...

## Locked-decision conflicts
...

## Golden-reference deviation
...

## Recommendation
ACCEPT / INVESTIGATE / REVERT
```

## GREEN

Current implementation remains consistent with the constitution and locked direction.

## YELLOW

Local drift exists but does not yet threaten the overall identity.

Correct deliberately.

## RED

Current changes materially conflict with the project constitution, locked design direction, or important accepted visual behavior.

A RED drift report blocks the checkpoint.

Investigate, repair, or revert before proceeding.

---

# 16. ROLLBACK RULE

Never become emotionally attached to an iteration.

If an iteration creates major regressions:

- revert the harmful portion;
- preserve unrelated good work where safely separable;
- record why the change failed;
- restore a known-good checkpoint.

A failed experiment is useful information.

Do not keep a worse design merely because significant work was spent producing it.

---

# 17. PHASED DEVELOPMENT

The project operates in phases.

Do not continuously redesign forever.

---

## PHASE 0 — BOOTSTRAP

Goals:

- inspect repository;
- establish stack;
- establish run/test commands;
- create required operating files;
- create a clean initial checkpoint;
- document current state.

Create `ops/CURRENT_STATE.md`.

At minimum include:

- current phase;
- architecture;
- commands;
- pages present;
- working/non-working features;
- known issues;
- current design status;
- last accepted checkpoint;
- highest-priority next work.

---

## PHASE 1 — REFERENCE RESEARCH

Do not immediately build the final homepage.

Study a broad set of high-quality independently designed work across:

- hospitality;
- architecture;
- editorial;
- restaurants;
- cultural institutions;
- fashion;
- independent retail.

Where web access exists, use it responsibly.

Do not copy another site.

Extract abstract principles only.

Create `design/REFERENCE_ATLAS.md`.

Document:

- typography approaches;
- hierarchy;
- grids;
- navigation concepts;
- image treatment;
- editorial pacing;
- information density;
- interaction vocabulary;
- mobile transformations;
- use of whitespace;
- methods of creating brand specificity.

Also study common template / AI-builder patterns.

Add negative examples as abstract patterns, not copied websites.

---

## PHASE 2 — CREATIVE EXPLORATION

Develop multiple genuinely different creative directions.

Minimum: 3 credible directions.

They must differ in more than color.

Explore differences in:

- composition;
- typography;
- density;
- grid;
- navigation;
- image scale;
- editorial rhythm;
- interaction language;
- copy treatment;
- page pacing.

Record them in `design/DESIGN_DIRECTIONS.md`.

Do not build the whole product three times.

Create enough representative material to compare directions meaningfully.

---

## PHASE 3 — DIRECTION SELECTION AND LOCK

Critically compare the creative directions.

Select one.

Create `design/DESIGN_DIRECTION.md`.

It must state:

- brand feeling;
- compositional logic;
- typography;
- image behavior;
- spacing character;
- navigation behavior;
- interaction character;
- animation principles;
- mobile transformation principles;
- forbidden tendencies;
- what makes this direction specific to KAMEN HOUSE.

Then mark:

```text
DESIGN_STATUS = LOCKED
```

From this point forward:

> The default behavior is refinement, not reinvention.

A major redesign requires a Class C decision.

---

## PHASE 4 — DESIGN SYSTEM AND REPRESENTATIVE PAGE

Build one representative page to a high standard before expanding everywhere.

Prefer Home plus one secondary page.

Create `design/DESIGN_SYSTEM.md`.

Document:

- type scale;
- font roles;
- spacing system;
- layout/grid;
- colors;
- surface behavior;
- buttons;
- links;
- forms;
- image ratios/treatment;
- content width;
- motion;
- focus states;
- responsive rules;
- shared component behavior.

Do not create a huge component library preemptively.

Create only what the product actually needs.

Once representative pages are strong enough, capture initial golden screenshots.

---

## PHASE 5 — PRODUCT EXPANSION

Build the complete required page set.

Important:

Expansion must not dilute the identity.

Every new page should answer:

> “How does the locked design system express this content?”

Not:

> “What generic layout is easiest for this page?”

Periodically run drift checks during expansion.

---

## PHASE 6 — ANTI-AI REFINEMENT

After the site is substantially complete, begin deliberate anti-AI review.

Do not use anti-AI review as an excuse for arbitrary novelty.

Look for generic patterns that survived implementation.

Maintain `ops/ANTI_AI_AUDIT.md`.

For each issue:

```md
## Issue
Location:
Severity:
Observed pattern:
Why it feels generic:
Evidence:
Recommended action:
Decision:
Result after change:
```

---

## PHASE 7 — PRODUCT HARDENING

Focus on:

- responsive behavior;
- mobile composition;
- navigation;
- forms;
- keyboard access;
- focus;
- reduced motion;
- performance;
- image loading;
- metadata;
- SEO basics;
- broken links;
- console errors;
- edge states;
- copy consistency;
- content completeness;
- layout stability.

Large redesigns should now be rare.

---

## PHASE 8 — CONSERVATION MODE

Enter Conservation Mode when:

- design direction is coherent;
- major pages are complete;
- critical functionality works;
- no severe anti-AI issue remains;
- 3 consecutive review cycles fail to identify a meaningful high-impact design problem.

In Conservation Mode, allowed work is primarily:

- bugs;
- accessibility;
- performance;
- responsive edge cases;
- copy errors;
- functional defects;
- factual consistency;
- minor polish with clear evidence.

Not allowed without explicit reopening of design:

- new global visual direction;
- new homepage concept;
- unnecessary redesign;
- new decorative language;
- typography replacement;
- structural churn.

Purpose:

> Prevent the AI from damaging a good product simply because runtime remains.

---

# 18. ANTI-AI PATTERN WATCHLIST

Treat these as warning signs, not automatic bans.

A pattern may be used if it is genuinely appropriate and specifically justified.

Watch for:

- centered hero with tiny pill above huge H1;
- generic gradient blob backgrounds;
- uniform 24px rounded corners everywhere;
- excessive glassmorphism;
- repeated “three feature cards” sections;
- generic bento grids;
- alternating image-left/text-right templates repeated mechanically;
- fake logos;
- fake social proof;
- meaningless statistics;
- generic testimonials;
- FAQ added only to fill space;
- giant generic final CTA;
- icons used where typography or content would be stronger;
- the same icon family everywhere by default;
- default Inter-like typography;
- identical spacing rhythm in every section;
- everything placed in bordered cards;
- floating product screenshots with no reason;
- generic animated blobs;
- decorative motion without narrative purpose;
- tiny uppercase labels everywhere;
- generic cream-and-black “boutique” template aesthetics;
- generic luxury serif + sans pairing with no personality;
- overuse of “editorial” asymmetry that is merely random;
- overdesigned menus that slow down basic navigation.

Continuously add newly observed AI-like patterns to the audit.

---

# 19. COPY RULES

Generic AI copy is unacceptable.

Avoid phrases such as:

- “Elevate your experience”
- “Where X meets Y”
- “Designed for those who…”
- “Discover a new way to…”
- “Unforgettable moments”
- “Crafted with passion”
- “Experience the difference”
- “Nestled in the heart of…”
- “A sanctuary…”
- “Escape the ordinary…”

unless there is an unusually strong contextual reason.

Prefer:

- concrete nouns;
- specific details;
- short sentences where appropriate;
- actual information;
- controlled tone;
- restrained claims.

The copy should sound like someone who knows the property.

Create `design/COPY_VOICE.md`.

Do not make every heading clever.

Do not make every paragraph poetic.

Good human copy includes plain useful information.

---

# 20. IMAGERY

Imagery is part of design quality.

If real project photography is unavailable:

- use legally appropriate placeholder/reference imagery where permitted;
- keep visual direction consistent;
- avoid obvious generic stock-hotel cliché;
- do not use unrelated images simply because they are beautiful;
- do not pretend placeholder assets depict the actual fictional property unless clearly treated as concept imagery.

If generated imagery is available, inspect it critically.

Do not allow obvious AI artifacts to undermine the anti-AI objective.

Photography direction should feel documentary and specific, not synthetic luxury advertising.

---

# 21. RESPONSIVE DESIGN

Mobile is not desktop scaled down.

Continuously inspect, where tooling permits:

- 1440px;
- 1024px;
- 768px;
- 390px;
- 375px.

Inspect:

- typography wrapping;
- image crops;
- hierarchy;
- navigation;
- tap targets;
- vertical pacing;
- content order;
- sticky elements;
- viewport-height behavior;
- forms;
- modal/dialog behavior;
- horizontal overflow;
- overly long sections;
- controls that only make sense on hover.

A desktop success does not count as product success.

---

# 22. BROWSER-BASED ITERATION

Do not evaluate design from source code alone.

Run the site.

Use available browser tooling or an automated browser.

Interact with the rendered product.

For major checkpoints inspect:

- Home desktop;
- Home mobile;
- Rooms desktop;
- Room detail mobile;
- Food page;
- Booking/inquiry flow;
- navigation;
- representative form states;
- 404.

Capture screenshots into:

```text
tests/visual/current/
```

Use actual rendered evidence in reviews.

A review that cannot point to a rendered state is weaker than one that can.

---

# 23. BLIND VISUAL REVIEW

At important checkpoints, perform screenshot-only evaluation.

The blind visual reviewer must not rely on:

- source code;
- effort;
- technical complexity;
- design rationale;
- previous reviewer praise;
- implementation history.

Ask:

1. Does this feel authored?
2. What is the strongest visual decision?
3. What is the weakest?
4. What feels template-derived?
5. What feels AI-generated?
6. Which sections could belong to almost any brand?
7. Does the hierarchy feel deliberate?
8. Does the typography feel chosen or defaulted?
9. Does the mobile composition remain intentional?
10. What would an excellent human art director reject?

Do not turn the result into a meaningless score only.

Evidence matters more than numbers.

---

# 24. DIAGNOSTIC QUALITY TARGETS

These are diagnostic goals, not self-certification.

Target:

- Brand specificity >= 9/10
- Visual hierarchy >= 9/10
- Typography >= 9/10
- Mobile composition >= 9/10
- UX >= 9/10
- Copy specificity >= 9/10
- Visual coherence >= 9/10
- Functional completeness >= 9/10
- AI genericity <= 2/10
- Template resemblance <= 2/10
- Critical broken functionality = 0

A model writing “9.6/10” is not evidence.

Every weak or strong score must cite concrete rendered observations.

---

# 25. ITERATION LOOP

After the first coherent complete implementation, use this loop:

1. Confirm current phase.
2. Read constitution.
3. Read locked decisions.
4. Read design direction.
5. Read current state.
6. Render representative pages.
7. Run targeted reviewers.
8. Collect findings.
9. Remove duplicates and contradictions.
10. Orchestrator selects highest-impact accepted issues.
11. Add them to `ops/CHANGE_QUEUE.md`.
12. Keep the cycle within the change budget.
13. Implement.
14. Run tests.
15. Render again.
16. Compare with previous accepted state.
17. Run drift detection.
18. Accept, repair, or revert.
19. Update state and ledger.
20. Begin next cycle only if meaningful issues remain.

Never skip steps 15–18 after a meaningful visual change.

---

# 26. CHANGE QUEUE

Maintain `ops/CHANGE_QUEUE.md`.

Each accepted task should include:

```md
## C-027
Status: QUEUED | ACTIVE | ACCEPTED | REJECTED | REVERTED

Problem:
...

Evidence:
...

Scope:
...

Do not modify:
...

Expected improvement:
...

Risk:
A | B | C

Owner role:
...

Validation:
...
```

Implementers should work from accepted queue items.

Do not let every reviewer directly inject work into the codebase.

---

# 27. ITERATION LEDGER

Maintain `ops/ITERATION_LEDGER.md`.

Only record meaningful cycles.

Template:

```md
## Iteration 12

Starting checkpoint:
...

Accepted problems:
1.
2.
3.

Changes:
...

Rendered evidence:
...

Tests:
...

Drift status:
GREEN / YELLOW / RED

Outcome:
ACCEPT / PARTIAL / REVERT

Why:
...

Remaining highest-impact issues:
...
```

Do not fill the ledger with vague progress language.

---

# 28. CURRENT STATE / CONTEXT RECOVERY

`ops/CURRENT_STATE.md` is mandatory.

Update it after every accepted significant checkpoint and before task/runtime termination.

It must contain:

```md
# Current State

Project phase:
Design status:
Last accepted checkpoint:
Current branch:
Run command:
Test command:
Browser/screenshot command:

## Architecture
...

## Implemented pages
...

## Working functionality
...

## Known failures
...

## Locked decisions that matter most
...

## Current anti-AI concerns
...

## Current drift status
...

## Highest-priority next actions
1.
2.
3.

## Files to read before continuing
1. ops/PROJECT_CONSTITUTION.md
2. design/DESIGN_DIRECTION.md
3. ops/DECISIONS.md
4. ops/CURRENT_STATE.md
5. ops/CHANGE_QUEUE.md
```

After context compaction, interruption, agent replacement, or task resume:

> **Read these files before making new design decisions.**

Do not reconstruct project intent from memory if the repository contains the source of truth.

---

# 29. CHECKPOINT POLICY

Create meaningful checkpoints.

A checkpoint should represent a state worth returning to.

Good checkpoint examples:

- research complete;
- design direction selected;
- representative page accepted;
- design system accepted;
- major page expansion accepted;
- anti-AI pass accepted;
- hardening pass accepted;
- release candidate.

Do not checkpoint every trivial edit.

Before accepting a checkpoint:

- tests should pass to the appropriate level;
- major pages should render;
- drift must not be RED;
- no known critical regression should remain.

---

# 30. “DO NOT TOUCH” SCOPING

Every implementation task should explicitly state what is out of scope.

Example:

> Improve typography hierarchy on Rooms page. Do not change global navigation, booking logic, global color tokens, homepage composition, or unrelated pages.

This is required for medium/high-risk work.

Unrelated opportunistic edits are prohibited unless required to keep the system working.

If an unrelated problem is discovered, queue it separately.

---

# 31. ENGINEERING QUALITY GATES

Maintain:

- semantic markup;
- keyboard accessibility;
- visible focus;
- accessible forms;
- reasonable contrast;
- reduced-motion support;
- responsive images;
- no obvious console errors;
- no broken primary navigation;
- stable layouts;
- sensible metadata;
- SEO basics;
- clean runtime behavior.

Run appropriate tests after meaningful changes.

Never weaken tests simply to obtain a pass.

Never remove accessibility behavior because it complicates styling.

---

# 32. FUNCTIONAL HONESTY

A beautiful fake product is not acceptable.

For booking/inquiry:

- create a coherent interaction;
- validate inputs;
- handle loading;
- handle success;
- handle errors;
- do not claim a real reservation was made if no real booking service exists.

For maps/directions:

- do not fake live data.

For external links:

- do not fabricate destinations.

The experiment should look finished without lying.

---

# 33. NO CONTINUOUS REDESIGN

The experiment is long-running.

The design is not infinitely fluid.

Before DESIGN_STATUS = LOCKED:

- exploration is encouraged.

After DESIGN_STATUS = LOCKED:

- refinement dominates.

After Conservation Mode:

- preservation dominates.

If an agent proposes a major redesign after lock, require evidence that the current direction is fundamentally failing.

“Another idea might be cooler” is not sufficient.

---

# 34. NO ACTIVITY FOR ACTIVITY’S SAKE

If the product is already strong:

Do not:

- add sections because runtime remains;
- add animations because runtime remains;
- replace fonts because runtime remains;
- restructure navigation because runtime remains;
- create new components because runtime remains;
- write more documentation because runtime remains.

Work must be justified by a real remaining problem.

---

# 35. WHEN TO ENTER CONSERVATION MODE

Enter Conservation Mode when all are true:

1. required pages exist;
2. primary flows work;
3. no critical browser bug remains;
4. drift status is GREEN;
5. anti-AI audit has no unresolved severe issue;
6. visual identity is coherent;
7. three consecutive review cycles produce no new meaningful high-impact design issue.

Record the transition in `ops/DECISIONS.md`.

---

# 36. WHEN TO REOPEN DESIGN

Conservation Mode may be exited only if one of these occurs:

- new human direction;
- severe human feedback;
- RED drift caused by later technical changes;
- a newly discovered fundamental usability failure;
- strong evidence that the site still appears obviously AI-generated.

Reopening design must be explicit.

---

# 37. HUMAN TEST PACKET

Near release-candidate state, prepare a human evaluation package.

Create:

`ops/HUMAN_TEST_PACKET.md`

Include links/paths to representative screenshots and these questions:

1. Without being told how it was made, does this site look AI-generated?
   - Yes
   - No
   - Unsure

2. How professionally designed does it feel?
   - 1–10

3. How distinctive does the business feel?
   - 1–10

4. How much would you trust this business based on the website?
   - 1–10

5. Which element most strongly makes it feel human-designed?

6. Which element, if any, makes it feel template- or AI-generated?

7. What feels confusing?

8. What feels unnecessarily designed?

The AI must not fabricate human answers.

Prepare the packet only.

---

# 38. RELEASE READINESS

Maintain `ops/RELEASE_READINESS.md`.

Before calling the experiment a release candidate, verify:

## Design
- [ ] Direction remains coherent.
- [ ] No severe AI-template pattern remains.
- [ ] Key pages feel intentionally composed.
- [ ] Typography is consistent and deliberate.
- [ ] Images feel consistent with the brand.
- [ ] Mobile is intentionally designed.

## UX
- [ ] Navigation works.
- [ ] Booking/inquiry flow is understandable.
- [ ] Forms have proper states.
- [ ] Error states exist where needed.
- [ ] No dead-end primary flows.

## Engineering
- [ ] Project builds.
- [ ] Relevant tests pass.
- [ ] No critical console errors.
- [ ] No broken primary links.
- [ ] Accessibility basics pass.
- [ ] Reduced motion is respected.
- [ ] Performance is reasonable.

## Governance
- [ ] Drift is GREEN.
- [ ] No unresolved LOCKED-decision conflict.
- [ ] Current state is updated.
- [ ] Human test packet exists.
- [ ] Known limitations are documented honestly.

---

# 39. STARTUP PROCEDURE FOR EVERY NEW LONG-RUN TASK

At the beginning of every resumed long-running Codex task:

1. Read this master brief if present.
2. Read `ops/PROJECT_CONSTITUTION.md`.
3. Read `ops/CURRENT_STATE.md`.
4. Read `design/DESIGN_DIRECTION.md` if it exists.
5. Read `ops/DECISIONS.md`.
6. Read `ops/CHANGE_QUEUE.md`.
7. Inspect latest accepted checkpoint.
8. Run the site.
9. Confirm current reality matches documentation.
10. Continue from the highest-priority accepted work.

Do not restart conceptual exploration unless the current phase explicitly permits it.

---

# 40. SHUTDOWN PROCEDURE BEFORE RUNTIME / CONTEXT ENDS

Before the task is forced to stop:

1. Finish or safely revert any half-complete risky change.
2. Run relevant tests.
3. Ensure the repository is runnable.
4. Update `ops/CURRENT_STATE.md`.
5. Update `ops/ITERATION_LEDGER.md`.
6. Update `ops/CHANGE_QUEUE.md`.
7. Record drift status.
8. Create a meaningful checkpoint/commit if appropriate.
9. Record the next 1–3 highest-impact actions.

The next agent should be able to resume without guessing.

---

# 41. FIRST EXECUTION INSTRUCTIONS

Start now.

Do not jump directly to a final homepage.

Perform the work in this order:

### A. Repository inspection
Understand what exists.

### B. Bootstrap governance
Create the required `ops/` and `design/` files.

### C. Establish commands
Confirm run, build, test, and browser/screenshot workflows.

### D. Research
Create the reference atlas and anti-AI observations.

### E. Creative exploration
Develop multiple genuinely different directions.

### F. Select and lock
Choose one direction through critical comparison.

### G. Representative implementation
Bring the Home page and at least one secondary page to a convincing standard.

### H. Establish golden references
Only after the direction is strong enough.

### I. Expand product
Build required pages without diluting the identity.

### J. Anti-AI refinement
Run adversarial reviews.

### K. Hardening
Responsive, accessibility, performance, functionality, edge states.

### L. Conservation
Stop creative churn when meaningful design problems are exhausted.

---

# 42. FINAL OPERATING PRINCIPLE

The most important rule in this experiment is:

> **Longer runtime is valuable only if the organization remembers what it is trying to build.**

Do not optimize for amount of code.

Do not optimize for number of iterations.

Do not optimize for number of agents.

Optimize for a coherent final product.

A professional human team is not good because many people touched the work.

It is good because:

- somebody owned the direction;
- specialists had clear responsibilities;
- decisions were remembered;
- bad experiments were rejected;
- strong decisions were preserved;
- the product was repeatedly examined in reality;
- the team eventually stopped redesigning and finished the work.

Reproduce that behavior.

---

# 43. FINAL DEFINITION OF SUCCESS

Success is not:

> “The app builds.”

Success is not:

> “The tests pass.”

Success is not:

> “The design is modern.”

Success is not:

> “The website is polished.”

Success is not:

> “Several AI reviewers rated it highly.”

Success means:

> **A skeptical experienced web user can explore KAMEN HOUSE without immediately recognizing the visual language, copy cadence, information architecture, or component patterns of a generic AI website generator.**

The product should plausibly feel like the output of a strong human digital studio with:

- a creative director;
- a designer;
- a frontend engineer;
- a copywriter;
- a UX reviewer;
- QA;
- enough time to remove weak ideas rather than merely add more things.

Continue improving toward that standard while meaningful problems remain.

When meaningful problems are exhausted, preserve the good product instead of redesigning it again.
