# Current Design Truth

Generated from `research/events.jsonl`. This file reports evidence, not design approval.

## Protected baseline and design status

- Preserved baseline: `HUMAN_REJECTED_BASELINE_001`, tag `human-rejected-baseline-001`, commit `98715a99bf60070cb21b26941fe72c504496ee0c`.
- Protected baseline visual direction: HUMAN_REJECTED. Production UI is unchanged by this research layer.
- Human-approved new directions: none. A direction lock is a separate governance decision.
- Human owner remains the final design gate.

## Research channels

Supported: live websites, curated galleries, structured database exports, human-supplied references, and local evidence. Each channel can fail independently. Availability is recorded below.
- cloud_https_tunnel: unavailable (2026-10-04T17:53:00Z) — EXTERNAL_RESEARCH_BLOCKED_BY_ENVIRONMENT: One Google search HEAD returned HTTP 200 at 17:50 UTC, but subsequent Google and Bing search GETs, one hospitality research GET, and HEADs for three distinct candidate first-party sites returned HTTP 503 from the cloud HTTPS tunnel. No search result, candidate URL, or complete funnel was verified from those requests. Earlier same-day completed visual sessions remain available from persisted artifacts.
- example.com: unavailable (2026-10-04T12:46:05.639Z) — HTTP 503
- acehotel.com: unavailable (2026-10-04T14:27:36.312Z) — HTTP no response; VISUAL_CAPTURE_INCOMPLETE
- fogoislandinn.ca: unavailable (2026-10-04T14:27:37.515Z) — HTTP no response; VISUAL_CAPTURE_INCOMPLETE
- stjohnrestaurant.com: available (2026-10-04T13:59:22.720Z) — HTTP 200
- www.apartamentomagazine.com: available (2026-10-04T13:59:30.822Z) — HTTP 200
- www.heckfieldplace.com: available (2026-10-04T14:01:59.858Z) — HTTP 200
- hotelcorazon.com: available (2026-10-04T14:02:08.245Z) — HTTP 200
- www.davidchipperfield.com: available (2026-10-04T14:02:18.674Z) — HTTP 200
- noma.dk: available (2026-10-04T14:02:27.285Z) — HTTP 200
- framacph.com: available (2026-10-04T14:02:38.028Z) — HTTP 200
- casabonay.com: available (2026-10-04T14:04:20.984Z) — HTTP 200
- www.masseriamoroseta.it: available (2026-10-04T14:04:36.492Z) — HTTP 200
- www.aesop.com: available (2026-10-04T14:04:59.664Z) — HTTP 200
- www.oma.com: available (2026-10-04T14:05:08.834Z) — HTTP 200
- www.kinfolk.com: available (2026-10-04T14:05:19.217Z) — HTTP 200
- baltic.art: available (2026-10-04T14:05:27.969Z) — HTTP 200

## Evidence and coverage

Browser captures are qualified only by the latest render-complete desktop and mobile sessions. The current-run audit is in research/capture-audit-2026-10-04.md. Raw images without a passing session remain in the ledger but are excluded from positive research, calibration, holdouts, and synthesis.

- Researched non-holdout references: 0.
- Partial or candidate references: 13.
- Human-rejected or forbidden references: 2.
- Researched holdouts: 0.
- Browser captures awaiting audit: 10.
- Incomplete browser captures: 2.
- Render-complete browser references: 5.
- References with mobile evidence: 0.
- Operating commercial references: 0.
- Source types represented: none.
- Categories represented: none.
- Research stage: high_signal_exploration.

| Dimension | Confidence | References | Source types |
| --- | --- | ---: | --- |
| typography | insufficient | 0 | none |
| navigation | insufficient | 0 | none |
| hero | insufficient | 0 | none |
| photography | insufficient | 0 | none |
| layout_rhythm | insufficient | 0 | none |
| grid | insufficient | 0 | none |
| content_density | insufficient | 0 | none |
| cta_hierarchy | insufficient | 0 | none |
| interaction_motion | insufficient | 0 | none |
| mobile_responsive | insufficient | 0 | none |
| footer | insufficient | 0 | none |
| hospitality_credibility | insufficient | 0 | none |
| originality_differentiation | insufficient | 0 | none |

## Human taste evidence

- HUMAN_REJECTED_BASELINE_001: rejected — The rendered website was perceived as generic, visibly AI-generated, aesthetically weak, and below professionally art-directed commercial work. (HUMAN_OWNER_OVERRIDE_VISUAL_RESET.md)
- HUMAN_REJECTED_VISUAL_DIRECTION_002: rejected — The owner explicitly rejected the Spatial direction and instructed that it be preserved only for anti-reference comparison, regression detection and failed-assumption documentation. (Owner message adopting KAMEN_HOUSE_AUTONOMOUS_HUMAN_DESIGN_CRO_STUDIO_V5.md on 2026-10-04)

Owner-approved positive references: 0. Unreviewed reference records are not owner preferences.

## Synthesis gate

Status: INSUFFICIENT EVIDENCE — NO DESIGN SYNTHESIS.
- need 20 more researched references
- need 3 more independent source types
- need 4 more design categories
- need 8 more mobile reference captures
- need 4 more researched holdouts
- under-covered dimensions: typography, navigation, hero, photography, layout_rhythm, grid, content_density, cta_hierarchy, interaction_motion, mobile_responsive, footer, hospitality_credibility, originality_differentiation

## Candidate directions and evaluation

- No new candidate direction exists.

Independent screen review and holdout comparison are diagnostic filters. Only explicit human-owner feedback can approve a rendered direction.

## Next research action

- Stage 1: collect diverse, evidence-rich references across operating commercial categories
- need 20 more researched references
- need 3 more independent source types
- need 4 more design categories
- need 8 more mobile reference captures
- need 4 more researched holdouts
- under-covered dimensions: typography, navigation, hero, photography, layout_rhythm, grid, content_density, cta_hierarchy, interaction_motion, mobile_responsive, footer, hospitality_credibility, originality_differentiation
