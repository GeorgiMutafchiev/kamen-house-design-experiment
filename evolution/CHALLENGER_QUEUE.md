# Challenger Queue

## CHALLENGER_001 — Mobile secondary-text legibility

Status: PROMOTED — first protocol-validation experiment complete

Hypothesis:
Can a small increase to the mobile secondary-text token improve caption, factual-label, and footer-note legibility without weakening hierarchy, changing page composition, causing overflow, or increasing representative page height by more than 1%?

Evidence:
A blind visual review accepted the product but identified image captions, footer legal copy, and some utility text at 390px as the remaining minor legibility edge. No reviewer classified it as a release blocker.

Mutation budget:
One tightly related variable: mobile secondary text size and matching line height at the existing `max-width: 650px` breakpoint.

In scope:
- `figcaption`
- register/fact labels already sharing the secondary text role
- `.footer-note`
- mobile-only font size and line height

Out of scope:
- fonts or font roles
- colors
- grid or page structure
- navigation
- copy
- desktop typography
- image crops
- spacing except unavoidable text reflow
- accepted golden references

Objective success gates:
- unit, lint, and production build pass;
- relevant Playwright checks pass;
- no horizontal overflow at 320, 375, or 390px;
- Axe serious/critical findings do not regress;
- representative page height increase is at most 1%;
- no locked decision conflict and drift is not RED.

Pairwise evidence:
Use anonymized 390px Home and Stone Room screenshots plus focused caption/footer crops. Randomize A/B assignment and keep the key from judges until all responses are recorded.

Promotion bar:
At least three of four independent perspective judges must prefer the Challenger overall, no judge may identify an unacceptable regression, the technical gate must pass, and the rendered evidence must show a meaningful rather than merely detectable gain. Ambiguity preserves CHAMPION_000.

Result:
All objective gates passed. Blind assignment was A = CHAMPION_000 and B = CHALLENGER_001. Art Direction, Brand Specificity, Anti-AI, and UX judges all selected B with no unacceptable regression. The orchestrator promoted the one-line mutation and explicitly accepted the two changed mobile goldens. The accepted state is CHAMPION_001.

## Deferred hypotheses

None. New hypotheses require new evidence and may not be invented merely to fill the queue.
