# Judge Protocol

## Authority

The project constitution, locked decisions, locked House Register direction, CHAMPION_000, and accepted goldens remain authoritative. Judging may compare candidates; it may not reopen those authorities.

## Isolation and evidence preparation

1. Build each Challenger on its own `experiment/challenger-NNN-*` branch and isolated worktree.
2. Record the precise incumbent and Challenger commits.
3. Run objective gates before subjective judging.
4. Capture the same routes, viewports, loading state, and scroll position for both candidates.
5. Randomly map candidates to A and B where practical.
6. Store the assignment separately from the images and do not disclose it to judges.
7. Do not expose code, implementation history, effort, rationale, or preferred outcome to blind judges.

## Objective gate

Record PASS/FAIL with concrete output for:

- build and scoped tests;
- runtime and console errors;
- primary navigation;
- overflow and mobile usability;
- keyboard behavior where relevant;
- accessibility regression;
- performance or output-size regression relevant to scope;
- locked-decision compliance;
- drift color.

A critical failure is an automatic loss unless repaired before any subjective evaluation. Repairs must remain inside the declared mutation budget.

## Blind pairwise prompt

> Review Candidate A and Candidate B only from the supplied rendered evidence. Which is stronger for KAMEN HOUSE, and why? You may answer A, B, or tie. Cite concrete differences. Identify any unacceptable regression. Do not infer which is newer or reward visible effort.

## Independent panel

- Art Direction: composition, typography, visual authorship, pacing, coherence.
- Brand Specificity: KAMEN HOUSE specificity versus generic boutique-hotel language.
- Anti-AI: template resemblance, builder clichés, component genericity, copy cadence.
- UX: comprehension, navigation, task clarity, mobile behavior.
- Technical Gate: regressions, accessibility, performance, runtime stability.

Do not collapse these perspectives into one arbitrary numeric score. Keep each rationale intact.

## Decision rule

Promotion requires every condition in section 10 of the addendum. For the first protocol-validation Challenger, the additional declared bar in `CHALLENGER_QUEUE.md` also applies. A close vote, split evidence, merely detectable novelty, or unclear Pareto outcome is ambiguous and therefore preserves the Champion.

The orchestrator alone resolves the evidence and records PROMOTED or REJECTED. Reviewers do not edit or merge.

## Human evidence

Prepare anonymized material when a mature candidate warrants it. Never fabricate human preference data. Record sample, audience, randomization, counts, comments, and limitations exactly as supplied.
