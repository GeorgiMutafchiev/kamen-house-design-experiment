# KAMEN HOUSE — CHAMPION / CHALLENGER EVOLUTION PROTOCOL
## Safe Addendum to the Existing Autonomous Website Studio Brief

**Purpose:** Add evidence-based evolutionary design optimization to the existing KAMEN HOUSE experiment **without restarting, invalidating, or casually redesigning work already completed**.

This file is an addendum.

It does **not** replace:
- `CODEX_AUTONOMOUS_HUMAN_GRADE_WEBSITE_STUDIO.md`
- `ops/PROJECT_CONSTITUTION.md`
- locked decisions
- the locked design direction
- accepted golden references

If this protocol conflicts with the project constitution or a locked decision, the existing higher-priority rule wins.

---

# 1. NON-DISRUPTION RULE

Do not restart the project.

Do not discard the current design.

Do not reinterpret the business.

Do not reopen already-settled design direction merely because this protocol was introduced.

Do not make any visual change simply to "initialize" this protocol.

First preserve the current reality.

---

# 2. ACTIVATION CONDITION

If `DESIGN_STATUS` is not yet `LOCKED`:

- continue the existing master workflow normally;
- finish the current creative exploration and direction-selection phase;
- do not run evolutionary challenger optimization yet.

Activate this protocol only after:

1. a design direction is locked; and
2. at least one representative page is accepted strongly enough to serve as a baseline.

If these conditions are already satisfied, activate after completing the baseline-capture procedure below.

---

# 3. BASELINE CAPTURE — NO DESIGN CHANGES ALLOWED

Before creating any challenger:

1. Finish the current in-progress atomic task safely.
2. Run relevant tests.
3. Render representative desktop and mobile states.
4. Update `ops/CURRENT_STATE.md`.
5. Update the iteration ledger.
6. Record drift status.
7. Create a recoverable git checkpoint.
8. Capture the current accepted visual state.

Create:

```text
evolution/
  CHAMPION.md
  TOURNAMENT_LEDGER.md
  CHALLENGER_QUEUE.md
  JUDGE_PROTOCOL.md
  convergence/
```

The current accepted product becomes:

`CHAMPION_000`

This does **not** mean it is perfect.

It means it is the incumbent that must be defeated by evidence.

Record:

- commit SHA;
- design-direction version;
- relevant screenshots;
- test status;
- known weaknesses;
- known strengths;
- current drift status.

Do not alter CHAMPION_000 during baseline capture.

---

# 4. INCUMBENT PROTECTION

The Champion is protected.

A new experiment is a Challenger.

A Challenger may not silently replace the Champion.

The default outcome of an experiment is:

> discard the Challenger unless it demonstrates a meaningful improvement.

Never merge a Challenger simply because effort was spent producing it.

---

# 5. CHALLENGER ISOLATION

Where tooling permits, create each Challenger in an isolated branch/worktree or otherwise isolated implementation scope.

Never allow a Challenger experiment to overwrite the current Champion before evaluation.

Recommended naming:

```text
experiment/challenger-001-typography
experiment/challenger-002-home-composition
experiment/challenger-003-mobile-navigation
```

Each Challenger must have a narrowly stated hypothesis.

Example:

> "Can the Rooms page achieve stronger editorial hierarchy and lower AI-template resemblance without reducing comprehension or mobile usability?"

Bad hypothesis:

> "Make the whole site better."

---

# 6. MUTATION BUDGET

A Challenger should normally change one major design variable or a tightly related group.

Examples:

- typography hierarchy;
- image sequencing;
- homepage pacing;
- navigation behavior;
- room-detail composition;
- mobile transformation;
- copy tone in one major surface.

Do not create a Challenger that simultaneously changes:

- typography;
- color;
- grid;
- navigation;
- page architecture;
- interaction language;
- copy voice.

If too many variables change, the result becomes impossible to interpret.

---

# 7. OBJECTIVE GATES

Before subjective judging, every Challenger must pass baseline engineering gates relevant to its scope.

At minimum where applicable:

- project builds;
- no new critical runtime error;
- no broken primary navigation;
- no obvious overflow;
- keyboard interaction remains functional;
- mobile state remains usable;
- accessibility does not materially regress;
- performance does not materially regress;
- no locked decision is violated;
- drift is not RED.

A Challenger that fails a critical gate loses automatically unless the failure is unrelated and repaired before evaluation.

---

# 8. BLIND PAIRWISE JUDGING

Do not ask:

> "Is the Challenger better?"

Ask:

> "Which of A and B is stronger for KAMEN HOUSE, and why?"

Randomize which candidate appears as A and B where practical.

Judges should not be told:

- which is the Champion;
- which is new;
- which took more work;
- which direction the implementer prefers.

Use rendered screenshots and, where relevant, interactive browser states.

The strongest evidence comes from pairwise preference, not self-assigned numerical scores.

---

# 9. MULTI-JUDGE PANEL

For meaningful visual Challengers, obtain independent judgments from multiple perspectives:

## Art Direction Judge
Evaluate:
- composition;
- typography;
- visual authorship;
- pacing;
- coherence.

## Brand Specificity Judge
Evaluate:
- does this feel specific to KAMEN HOUSE?
- could this belong to almost any boutique hotel?

## Anti-AI Judge
Evaluate:
- template resemblance;
- AI-builder clichés;
- generic component language;
- generic copy cadence.

## UX Judge
Evaluate:
- comprehension;
- navigation;
- task clarity;
- mobile behavior.

## Technical Gate
Evaluate:
- regressions;
- accessibility;
- performance;
- runtime stability.

Do not collapse all evaluation into a single arbitrary score.

---

# 10. PROMOTION RULE

A Challenger may replace the Champion only if all are true:

1. It passes relevant objective gates.
2. It does not conflict with the constitution.
3. It does not produce RED drift.
4. It does not violate LOCKED decisions unless a separate approved decision explicitly supersedes them.
5. Blind pairwise evaluation shows a meaningful overall advantage.
6. No major dimension suffers an unacceptable regression.
7. The improvement can be explained with concrete rendered evidence.

If the result is ambiguous:

> Champion retains the title.

Ties go to the incumbent.

This prevents churn.

---

# 11. PROMOTION PROCEDURE

If a Challenger wins:

1. Record the evidence in `evolution/TOURNAMENT_LEDGER.md`.
2. Record the losing and winning commit SHAs.
3. Merge only the accepted change.
4. Run the full relevant validation again after integration.
5. Run drift detection.
6. Update current screenshots.
7. Update golden references only if explicitly accepted.
8. Update `ops/CURRENT_STATE.md`.
9. The accepted state becomes the next Champion:

```text
CHAMPION_001
CHAMPION_002
...
```

A promotion is a project checkpoint.

---

# 12. REJECTION PROCEDURE

If a Challenger loses:

- do not merge it;
- preserve only reusable non-controversial technical fixes if independently justified;
- record why it lost;
- mark the hypothesis as tested;
- do not immediately repeat the same failed mutation under a different name.

A rejected Challenger is useful experimental evidence.

---

# 13. HUMAN PREFERENCE TESTING

AI judging is not proof of human preference.

When a sufficiently mature candidate exists, prepare anonymized A/B screenshots for real human evaluation.

Do not fabricate results.

If real human data is supplied later, record:

- sample size;
- audience description;
- randomized A/B order if known;
- preference counts;
- qualitative comments;
- obvious sampling limitations.

Human preference evidence should outweigh weak AI preference evidence when the human test is relevant and reasonably conducted.

---

# 14. PRODUCTION METRICS — FUTURE LAYER

Do not optimize for conversion before the site is real and measurable.

If the product is later deployed with legitimate analytics and sufficient traffic, business metrics may become an additional evidence layer.

Never allow a conversion metric to justify:
- deception;
- fake urgency;
- dark patterns;
- accessibility regression;
- destruction of brand trust.

---

# 15. PARETO PROTECTION

Do not optimize a single score.

A Challenger that greatly improves one dimension while materially damaging another important dimension is not automatically better.

Protect the multi-dimensional product:

- brand specificity;
- aesthetics;
- usability;
- trust;
- anti-AI distinctiveness;
- mobile quality;
- accessibility;
- performance;
- functional correctness.

The goal is a stronger product, not a higher artificial metric.

---

# 16. CONVERGENCE

Track:

- number of meaningful Challengers attempted;
- number promoted;
- repeated failure modes;
- dimensions with no remaining meaningful weakness.

The project may declare:

`CONVERGED_CHAMPION`

only when:

1. the product already satisfies release-readiness gates;
2. no severe anti-AI issue remains;
3. drift is GREEN;
4. multiple successive meaningful Challengers fail to outperform the Champion;
5. reviewers repeatedly fail to identify a high-impact unresolved problem;
6. the system is not merely out of ideas because evaluation became lazy.

Recommended initial convergence signal:

- at least 10 meaningful Challenger attempts after maturity;
- last 5 meaningful Challengers fail to produce a defensible promotion;
- no critical or severe unresolved issue remains.

This is not proof of universal perfection.

It means:

> "Within the current design space, evidence, constraints, and search budget, no tested Challenger has demonstrated a meaningful overall improvement over the incumbent."

---

# 17. IMPORTANT: DO NOT TURN THIS INTO ENDLESS CHURN

The Champion/Challenger system exists to make long runtime safer.

It does not authorize endless redesign.

After maturity:

- generate fewer, higher-quality hypotheses;
- prioritize known weaknesses;
- avoid random mutations;
- preserve strong authored decisions.

If the site is excellent and new experiments repeatedly lose, stop changing it.

---

# 18. FIRST SAFE ACTION AFTER THIS ADDENDUM IS RECEIVED

Do not immediately redesign anything.

Perform exactly this sequence:

1. Read the existing master brief.
2. Read the current state.
3. Determine the current phase.
4. Finish the currently active atomic work safely.
5. If design direction is not locked, continue the original workflow until it is.
6. Capture the accepted baseline without changing it.
7. Declare the accepted baseline `CHAMPION_000`.
8. Create the evolution tracking files.
9. Propose the first 1–3 narrowly scoped Challenger hypotheses.
10. Run only one Challenger first as a protocol validation.
11. Evaluate it blindly against the Champion.
12. Promote only if evidence supports promotion.

Do not perform a mass redesign while introducing this protocol.

---

# 19. GOVERNING PRINCIPLE

> **The current good product is innocent until a Challenger proves it can do better.**

Long runtime must increase evidence, not increase chaos.

Every major visual change must earn the right to survive.
