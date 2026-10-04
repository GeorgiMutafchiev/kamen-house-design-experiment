# KAMEN HOUSE — AUTONOMOUS DESIGN STUDIO MODE
## Owner directive: stop asking for design decisions; deliver a finished, non-AI-looking website

### Authority

This document changes the operating mode of the KAMEN HOUSE design experiment.

The owner does **not** want to participate in reference selection, taste calibration, component decisions, typography choices, layout choices, or iterative design review.

The owner has given one outcome requirement:

> Deliver an exceptional, fully working website that does not look like a generic AI-generated website.

Do not return to the owner for routine design decisions.

Do not ask the owner to choose between references or concepts.

Do not stop at research infrastructure.

Do not stop at a moodboard.

Do not stop at a homepage mockup.

Operate as an autonomous design studio until there is a production-ready website worth reviewing.

The existing render-complete capture integrity rules remain valid and must not be weakened.

---

# 1. PRIMARY OBJECTIVE

Build KAMEN HOUSE into a complete, coherent, production-quality hospitality website with a distinctive human-designed visual identity.

The target quality bar is not:

- "good for AI";
- "clean";
- "modern";
- "better than the rejected baseline";
- "similar to a premium template."

The target is:

> A site that could plausibly have been designed by an excellent independent art-direction / digital-design studio and implemented by a strong front-end team.

The site must feel specific to KAMEN HOUSE.

It must not feel like a generic boutique hotel theme with the logo replaced.

---

# 2. PRODUCT TRUTH

Preserve the established KAMEN HOUSE product truth.

At minimum, the visual and interaction system must communicate:

- an independent 11-room mountain house;
- a serious fire-kitchen / food identity;
- place, landscape and materiality;
- quiet confidence rather than generic "luxury";
- cultural specificity rather than international-hotel sameness;
- editorial intelligence;
- strong photography treatment;
- a sense that the house has a real point of view.

Do not invent false operating facts.

Use existing repository content and assets as the source of truth for factual details.

Where content is incomplete, design the system so missing content can be filled later without breaking the visual grammar.

---

# 3. TWO-LANE OPERATING MODEL

The external HTTPS environment is currently unreliable.

Do not allow that infrastructure problem to freeze the entire design effort.

Run two completely separated lanes.

## LANE A — VERIFIED DESIGN RESEARCH

This remains evidence-strict.

Only render-complete, provenance-backed references may enter the verified research corpus.

All existing capture-quality rules remain hard requirements.

Do not contaminate this lane with guesses, memory, broken screenshots, or unverified visual assumptions.

When external access works, continue the approved research plan.

When it does not work, leave this lane honestly incomplete.

## LANE B — AUTONOMOUS DESIGN STUDIO

This lane may continue even when Lane A is blocked.

It may use:

- the product truth;
- existing KAMEN HOUSE content;
- existing local assets;
- general design knowledge;
- typography and layout reasoning;
- isolated experimentation;
- local browser rendering;
- deterministic visual QA;
- adversarial critique.

Artifacts from this lane are **not research evidence**.

Label early work as:

`UNVERIFIED_CREATIVE_PROTOTYPE`

Do not use prototype output to raise research coverage.

The purpose of Lane B is to keep creating and testing genuinely different design systems while verified external research is unavailable.

When Lane A becomes available again, use real professional references to challenge and improve Lane B — not to retroactively pretend that Lane B was evidence-backed.

---

# 4. NO MORE OWNER TASTE CALIBRATION GATE

The previous taste-calibration checkpoint is no longer a prerequisite for creative work.

Do not prepare a 12–20 item owner calibration set.

Do not ask the owner to score fonts, heroes, navigation, whitespace, photography, colors, or layouts.

The owner has delegated those decisions.

Instead, build an internal multi-critic design process.

Human review is reserved for the final production-ready result, not routine design steering.

---

# 5. CREATE MULTIPLE FUNDAMENTALLY DIFFERENT DESIGN SYSTEMS

Do not iterate one layout until it looks cleaner.

Create at least **four genuinely independent visual grammars** in isolated design-lab directories.

They must differ structurally, not cosmetically.

A change of font, color, or hero image does not constitute a new direction.

Each direction must define its own:

- information hierarchy;
- typography system;
- navigation behavior;
- grid;
- page rhythm;
- image logic;
- section transitions;
- room presentation;
- food presentation;
- booking treatment;
- mobile grammar;
- interaction philosophy.

Do not let later directions simply become refinements of the first one.

Keep the first-pass directions isolated until they have each reached a renderable state.

At least:

- one direction should be strongly editorial;
- one should be strongly architectural / spatial;
- one should be strongly image-led and cinematic;
- one should explore a more culturally specific, material, or vernacular-modern identity without folkloric kitsch.

These are starting constraints, not templates.

---

# 6. HUMAN-DESIGN ANTI-PATTERN BLACKLIST

Treat the following as suspicious by default because they are heavily overrepresented in generic AI website output.

Do not use them unless the specific design concept strongly justifies them.

### Common AI fingerprints

- giant centered marketing headline over generic background;
- centered eyebrow + headline + paragraph + two CTA buttons;
- endless rounded cards;
- identical 3-column feature grids;
- pill badges everywhere;
- glowing gradients;
- decorative blurred blobs;
- glassmorphism without product meaning;
- floating icon circles;
- generic Lucide-icon decoration;
- arbitrary 20–32 px border radii across the entire UI;
- repeated image-left / text-right alternating sections;
- every section constrained to the same centered max-width container;
- "premium" beige-on-beige used as a substitute for art direction;
- generic serif + geometric sans pairing with no typographic concept;
- fake editorial labels that do not correspond to real editorial structure;
- generic luxury copy rhythms;
- "Discover / Explore / Experience" repeated as empty CTA language;
- meaningless statistics;
- excessive card shadows;
- token "grain" or "noise" added only to appear designed;
- decorative scroll effects that do not reinforce content;
- every section vertically centered;
- every image given the same aspect ratio;
- mobile layouts that are merely desktop stacked into one column.

Whenever one of these appears, the Anti-AI Critic must explicitly justify why it belongs.

If it cannot be justified, remove it.

---

# 7. SPECIFICITY TEST

Every major visual decision must pass:

> Could this exact component/layout comfortably be dropped into a random luxury hotel, AI startup, skincare brand, or SaaS landing page without significant change?

If YES, it is probably too generic.

Rework it.

The strongest parts of the site should make sense specifically because this is:

> KAMEN HOUSE — a small mountain house with an important fire-kitchen identity.

---

# 8. ART DIRECTION BEFORE COMPONENTS

Do not begin by assembling a component library.

Begin with:

- visual tension;
- page pacing;
- type scale relationships;
- image behavior;
- whitespace strategy;
- density;
- editorial sequencing;
- material / spatial feeling.

Only then extract reusable components from the successful direction.

The design system should be a consequence of the art direction.

The art direction must not be a consequence of whichever components are easiest to code.

---

# 9. TYPOGRAPHY STANDARD

Typography must carry real authorship.

Avoid simply selecting one fashionable serif and one neutral sans.

For each direction define:

- display voice;
- reading voice;
- utility voice;
- size contrast;
- line length;
- tracking;
- casing rules;
- punctuation behavior;
- caption system;
- metadata system;
- numeric treatment;
- mobile scaling behavior.

Typography must remain excellent when photography is temporarily removed.

If the page becomes generic as soon as images disappear, the design is too dependent on assets.

Use only legally available fonts already licensed/available to the project or appropriate web-safe/open alternatives.

---

# 10. IMAGE SYSTEM

Do not treat images as content blocks placed inside containers.

Define a deliberate photography grammar.

Possible variables include:

- full-bleed vs contained;
- interrupted crops;
- editorial sequences;
- paired images;
- contact-sheet behavior;
- extreme close-up vs landscape;
- aspect-ratio variation;
- intentional negative space;
- captions and provenance;
- slow reveal;
- image-to-text tension.

Avoid turning every image into a rounded rectangle.

If existing project photography is insufficient, build layouts that remain coherent and clearly mark asset gaps rather than replacing them with generic stock imagery.

---

# 11. FOOD MUST NOT FEEL LIKE A SECONDARY HOTEL FEATURE

The fire kitchen is a core identity, not a generic "Dining" section.

Its visual treatment should have its own intensity and character while remaining part of the same design system.

Avoid:

- generic restaurant menu cards;
- stock food iconography;
- generic "farm-to-table" styling;
- fake rustic decoration.

Food should feel physical, specific and important.

---

# 12. MOBILE IS A DISTINCT DESIGN PROBLEM

Do not create desktop and then collapse it.

Every direction must define a deliberate mobile grammar.

On mobile, evaluate:

- navigation;
- type scale;
- image crop;
- section order;
- scroll rhythm;
- interactive states;
- booking access;
- touch targets;
- readability;
- motion;
- performance.

A direction cannot win unless its mobile version is excellent.

---

# 13. MOTION RULE

Motion must reveal structure, place, rhythm, or hierarchy.

Do not add movement simply to look expensive.

Prefer a small number of memorable interactions over constant animation.

Every meaningful animation must answer:

> What does this motion communicate that a static transition would not?

If there is no good answer, remove it.

Respect reduced-motion preferences.

Do not make core information inaccessible before animation completion.

---

# 14. INTERNAL DESIGN REVIEW PANEL

Evaluate each direction independently through at least these roles:

## A. ART DIRECTOR
Questions:
- Does it have a point of view?
- Is the composition authored?
- Is there surprise without gimmickry?
- Does the whole system feel coherent?

## B. ANTI-AI CRITIC
Questions:
- What immediately looks generated?
- What resembles common Lovable/v0/Framer/AI-builder defaults?
- Which sections are predictable?
- Which visual choices feel statistically likely rather than intentional?

This critic should be adversarial.

## C. TYPOGRAPHY CRITIC
Questions:
- Is the hierarchy memorable?
- Is long-form reading comfortable?
- Does typography survive without imagery?
- Are small text, captions and utility states as considered as headlines?

## D. HOSPITALITY UX CRITIC
Questions:
- Can a real guest understand the property?
- Can they find rooms, food, location and booking?
- Is beauty obstructing practical decisions?

## E. MOBILE CRITIC
Questions:
- Does it feel designed specifically for the phone?
- Does it remain distinctive?
- Are interactions comfortable?

## F. FRONT-END / PERFORMANCE CRITIC
Questions:
- Is the implementation robust?
- Are layout shifts controlled?
- Are image/video choices sane?
- Is motion performant?
- Does it degrade gracefully?

## G. ACCESSIBILITY CRITIC
Questions:
- Is the site keyboard usable?
- Is text legible?
- Are semantics correct?
- Is contrast sufficient?
- Does reduced motion work?

Record critiques.

Do not allow a direction to "win" merely because it has the highest average score.

Any severe failure in specificity, usability, mobile quality, implementation quality, or obvious AI appearance is a rejection condition.

---

# 15. BLIND CHAMPION SELECTION

Once the four directions are implemented to a comparable first-pass fidelity:

1. render all four on desktop, laptop and mobile;
2. remove their internal direction names from evaluation artifacts;
3. run the review panel;
4. identify each one's strongest and weakest principles;
5. select a champion based on the total system;
6. keep useful principles from losing directions only if they can be integrated without turning the champion into a collage.

Do not create a "best of all four" Frankenstein by default.

The winning direction must retain a coherent authorship.

---

# 16. SECOND PASS — DESTROY THE CHAMPION

After selection, assume the champion is still not good enough.

Run an adversarial redesign pass.

Ask:

- Which sections still look templated?
- Which decisions are too safe?
- Where is spacing mechanically regular?
- Where does the site become repetitive?
- Which moments have no visual tension?
- Which sections could belong to any hotel?
- Which transitions are predictable?
- Which pieces rely on fashionable design clichés?
- Where has implementation convenience weakened art direction?

Correct these flaws.

This pass should remove mediocrity rather than add decoration.

---

# 17. VERIFIED RESEARCH RETURNS LATER

When external HTTPS access becomes available again:

- resume Lane A;
- capture high-quality real professional references;
- extract atomic principles;
- compare them against the champion;
- identify where the champion is weaker than actual professional work;
- improve it.

Do not mechanically import reference styling.

Do not pause all work while waiting for the network.

Do not lower evidence standards.

---

# 18. REAL SITE, NOT A SHOWCASE HOMEPAGE

The final goal is the complete website represented by the repository, not merely one photogenic homepage.

Inspect the existing routes and content model.

Bring the full visitor journey into the same art direction.

At minimum, where applicable to the existing site:

- home;
- rooms / accommodation;
- room detail;
- fire kitchen / food;
- story / house;
- location / getting there;
- journal / news / editorial content;
- contact;
- booking path;
- utility/legal pages.

Do not redesign only the first viewport and leave secondary pages generic.

The visual system must remain coherent across the entire product.

---

# 19. FUNCTIONAL QUALITY

The finished site must be fully functional.

Verify:

- navigation;
- internal links;
- booking CTAs;
- responsive behavior;
- keyboard interaction;
- focus states;
- forms where present;
- image loading;
- route transitions;
- error states;
- 404;
- metadata;
- basic SEO structure;
- performance sanity;
- reduced motion;
- no console errors;
- no broken assets.

A visually beautiful broken site is a failure.

---

# 20. PRODUCTION STRATEGY

Protect the existing production UI while directions are still experimental.

Use isolated Design Lab / candidate routes or branches.

Before promotion:

1. create a recoverable checkpoint/tag of the protected current site;
2. make sure the champion passes design, functional, responsive and build gates;
3. integrate the champion consistently across the site;
4. run final tests;
5. verify production build;
6. verify representative desktop/laptop/mobile renders.

The owner does not need to approve intermediate mockups.

Do not request approval until the site is genuinely production-ready.

---

# 21. EXTERNAL NETWORK RULE

Do not waste long periods retrying the broken HTTPS tunnel.

At the beginning of a meaningful research phase, perform a small representative connectivity check.

If systemic 503 / no-route behavior persists:

`EXTERNAL_RESEARCH_BLOCKED_BY_ENVIRONMENT`

Then continue Lane B.

Retry external research only occasionally at natural checkpoints.

Do not turn network recovery into the main task.

---

# 22. NO FALSE "PERFECT" CLAIMS

Do not call the result perfect because tests pass.

Do not call it non-AI-looking because the generating model says so.

Use the internal adversarial review, responsive renders, implementation tests and — when possible — comparison against verified professional references.

Report remaining known weaknesses honestly.

---

# 23. FINAL OWNER CHECKPOINT

Do not come back with:

- a list of references to choose;
- a moodboard;
- font choices;
- four concepts needing a vote;
- implementation questions;
- "which direction do you prefer?"

Come back only when there is one clear champion that has already survived the autonomous design process.

At that checkpoint provide:

### Finished result
- live preview / exact route;
- representative desktop and mobile captures;
- a concise explanation of the design idea.

### Anti-AI audit
- which common AI patterns were explicitly avoided or removed;
- any areas still at risk of generic appearance.

### Functional audit
- routes covered;
- tests;
- lint;
- build;
- responsive validation;
- accessibility checks;
- known issues.

### Research state
- whether verified external research became available;
- number of valid references if any;
- whether they caused material changes to the final direction.

### Repository
- branch;
- commit SHA;
- clean/dirty state;
- recovery checkpoint for the previous production UI.

The owner should need to do one thing:

> Open the finished site and judge the result.

---

# 24. DEFINITION OF DONE

This task is not done when:

- the research infrastructure works;
- the capture system works;
- four concepts exist;
- a homepage looks attractive;
- the build passes.

It is done when:

> KAMEN HOUSE exists as a coherent, working, responsive, production-ready website with a strong authored identity and no obvious generic AI-builder visual language.

Proceed autonomously from the current clean checkpoint.

Do not wait for routine owner design input.
