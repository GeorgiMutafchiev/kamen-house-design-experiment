# Tournament Ledger

## Baseline registration

Incumbent: `CHAMPION_000`
Product commit: `86de868be640a8560a7680d8716b7c1829d324b7`
Recovery tag: `champion-000`
Registered: 2026-10-04
Drift: GREEN
Challengers attempted: 0
Challengers promoted: 0

The incumbent was registered without application or visual changes. Baseline gates passed and all ten current/golden screenshot pairs were byte-identical.

## CHALLENGER_001 — Mobile secondary-text legibility

Status: PROMOTED
Hypothesis: A small mobile-only increase to secondary text can improve caption, factual-label, and footer-note legibility without weakening hierarchy, changing composition, causing overflow, or increasing representative page height by more than 1%.
Incumbent product commit: `86de868be640a8560a7680d8716b7c1829d324b7`
Challenger commit: `6d3fd06f1e85c7f999ea4ceee01fe1b81df20677`
Integrated implementation commit: `d9174c5ed58170a45051313f2d144418f50bc8c9`
Accepted product/visual checkpoint: `75589e05a0ea9ce3deba17a9ab02dfd749316579`
Recovery tags: `champion-000`, `champion-001-product`, and complete closeout tag `champion-001`
Isolation: `experiment/challenger-001-mobile-microtype` in `/tmp/kamen-challenger-001`
Mutation budget: one mobile secondary-text rule; `.84rem` became `.88rem` with 1.35 line height and `.footer-note` joined the same role.

Objective gates:
- Unit, lint, and production build passed.
- All 23 Playwright checks passed in isolation and again after integration.
- Build emitted the same 28 static routes.
- Twelve route/viewport probes at 320px, 375px, and 390px reported status 200, zero overflow, and zero console/page errors.
- Axe serious/critical coverage did not regress.
- Desktop screenshots remained byte-identical.
- Home mobile grew 26px (`0.46%`); room detail grew 8px (`0.30%`), both below the declared 1% cap.
- CSS/output impact was one local rule; no material performance regression was established.
- Production dependency audit remained at zero vulnerabilities.
- Drift remained GREEN; no constitution or LOCKED-decision conflict occurred.

Environment note:
The first isolated build rejected a `node_modules` symlink because it pointed outside the Turbopack root. A normal `npm ci` inside the worktree resolved the setup issue before judging. No product code was changed to obtain the pass.

Blind pair assignment:
`shuf` assigned Candidate A = CHAMPION_000 and Candidate B = CHALLENGER_001. The key was withheld until all four judgments were recorded.

Panel evidence:
- Art Direction: B. Clearer caption/disclosure, hierarchy intact, no pacing regression.
- Brand Specificity: B. Marginally stronger; useful secondary copy feels intentional rather than production annotation.
- Anti-AI: B. Removes decorative luxury-editorial microtype without introducing a new cliché.
- UX: B. Easier mobile reading; task order, scan hierarchy, and links remain intact.
- Unacceptable regressions: none identified by any judge.

Pareto check:
Legibility, truthfulness, and anti-AI distinctiveness improved. Brand specificity, aesthetics, hierarchy, usability, mobile quality, accessibility, performance, and functional correctness were preserved.

Drift: GREEN

Decision:
PROMOTE unanimously. The evidence clears both the addendum's seven promotion gates and the experiment-specific three-of-four bar.

Why:
The change repairs a concrete, previously observed weakness with a measurable and visually confirmed gain. It is narrow, reversible, and causes no meaningful regression.

Golden update:
The orchestrator explicitly accepted and replaced only `home-390.png` and `room-detail-390.png`. The other eight references remain byte-identical.

Reusable non-controversial fixes:
None separate from the winning mutation.

Next permitted action:
CHAMPION_001 is protected. No further Challenger is queued without new evidence.

## Tournament entry template

### CHALLENGER_NNN — Title

Status: ACTIVE | PROMOTED | REJECTED | REPAIRED BEFORE JUDGING
Hypothesis:
Incumbent commit:
Challenger commit:
Isolation:
Mutation budget:
Objective gates:
Blind pair assignment:
Panel evidence:
Pareto check:
Drift:
Decision:
Why:
Reusable non-controversial fixes:
Next permitted action:

No judge preference or human result may be invented. Ties and ambiguous evidence preserve the incumbent.
