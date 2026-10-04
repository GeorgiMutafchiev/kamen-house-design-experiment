# Autonomous studio review — 2026-10-04

Status: `UNVERIFIED_CREATIVE_PROTOTYPE`. These directions use local product material and generated concept imagery. They are not verified external design references and raise no research-coverage score.

## Comparable first pass

Four independent static homepages are available at `/design-lab/editorial/index.html`, `/design-lab/spatial/index.html`, `/design-lab/cinema/index.html`, and `/design-lab/vernacular/index.html`. Full-page 1440 × 900, 1024 × 768, and 390 × 844 captures are in `design-lab/renders/`. The four have different hierarchy, navigation framing, image logic, room representation, food representation and mobile sequence. The CSS is scoped by direction. The working production routes were untouched during this comparison.

All twelve pages returned HTTP 200, loaded all images, and had no mobile horizontal overflow. The cinematic study has a 1 px overflow at 1024 px and is penalized. Axe's automated checks reported no violations on each direction at 1440 and 390 px. These checks do not establish visual quality or complete accessibility.

The review uses anonymous render panels in `design-lab/renders/blind/` for the comparison record. Because the same implementer also inspected and mapped the candidates, the identity separation is **procedural, not independent or cryptographically hidden**. The earlier human rejection of an AI-approved design remains the strongest negative evidence. No self-rating here is human approval.

## Review panel findings

| Direction | Art direction | Anti-AI / specificity | Typography | Hospitality UX | Mobile | Front end, performance, accessibility |
| --- | --- | --- | --- | --- | --- | --- |
| Editorial | Good reading sequence, but its register/list composition resembles the rejected family. | Repeated pale paper, elegant serif, and numbered chapters risk familiar boutique editorial language. | Strong large/small contrast; body has character. | Rooms, kitchen, and paths legible. | Clear sequence, but mostly stacked desktop. | Sound static implementation and axe pass. |
| Spatial | House section and tiered spatial logic create a reason for the grid. Strongest system for scaling to practical pages. | Generic architecture-studio headline and cool palette remain risks; fire red must become a structural signal, not decoration. | Wide grotesk display is distinct from the rejected serif direction; utility text needs a more purposeful scale. | Location of kitchen, rooms, routes and stay is quickly intelligible. | House section and room sequence work; navigation needs a real small-screen solution in production. | Sound static implementation and axe pass. |
| Cinema | Intense atmosphere and visual pacing. | The full-bleed dusk hero and short poetic lines could fit many boutique hotels. Too dependent on imagery. | Type loses much of its identity with images removed. | Room comparison and practical details are weak. | Distinct mood, but long dark passages and cropped photographs reduce utility. | 1 px laptop overflow; axe pass does not resolve image contrast variability. |
| Vernacular | Fire and table are prominent; material color holds the narrative. | Beige paper, red accent and large serif are closer to familiar boutique styling and the rejected baseline than intended. | Effective scale but still relies on a fashionable serif/rust combination. | Practical information is clear. | Best uninterrupted reading rhythm of the four, although it collapses several desktop compositions. | Sound static implementation and axe pass. |

### Severe-failure screen

Cinema is rejected for practical room weakness and image dependence. Editorial and Vernacular are rejected as champion choices because they remain too close to the human-rejected visual family. Spatial has no severe usability or mobile failure at first pass, but it is **not accepted without an adversarial second pass**.

### Selection

The **Spatial** grammar is the autonomous working champion for further implementation, not `DESIGN_ACCEPTED` by a human. It wins on the total site system: a house section explains the actual product and can support routes, room detail, food, arrival and utility content without cards or decorative novelty. No losing direction will be imported wholesale.

## Adversarial second-pass brief

1. Replace the vaguely architecture-branded first message with a sharper mountain-house and kitchen proposition.
2. Make the fire kitchen a structural focal point across the site, especially mobile, without repeating a generic image/text split.
3. Give each route a task-specific spatial opening; no repeated giant title shell.
4. Preserve differentiated factual room data and honest fictional-property disclosures.
5. Build a real mobile navigation and booking entry point, then validate every route and interaction.
6. Keep the capture/research ledgers separate. A design prototype cannot be cited as professional reference evidence.

## Research state

Representative HTTPS check to Heckfield Place returned HTTP 503 through the environment tunnel at the start of this phase. Later in the same session, the tunnel recovered. STJOHN, DAVIDCHIPPERFIELD and CASABONAY passed new render-complete desktop/mobile sessions and were annotated after visual inspection. NOMA returned HTTP 200 but failed visual-completeness checks and remains excluded. The previous raw captures remain in the ledger with their own qualification status. The human-rejected baseline remains negative design evidence. The conservative Lane A synthesis gate is still false: three qualified references and one source type cannot stand in for a broad professional corpus.

## Adversarial second pass on the working champion

The first integrated homepage repeated equal-width room images and ended with a large text-only band. The verified David Chipperfield feed provided a concrete challenge to that even rhythm; Casa Bonay showed that multiple place subjects can carry a more credible property narrative. The revised homepage uses unequal room-image widths and a smaller path image that changes the scale of the final section. It does not copy their grids, photographs, typography or arrangement. St. JOHN's task-oriented restaurant navigation reinforced keeping the fire kitchen visible in the main navigation and treating the food page as a core destination.

| Review role | Final candidate finding | Remaining risk |
| --- | --- | --- |
| Art director | A clear spatial idea persists from home through room, food, route and journal pages. The house section and kitchen color establish two identifiable moments. | Exterior/room/fire photos are still generated studies; true art direction will be judged differently with real property photography. |
| Anti-AI critic | Removed the old pale-serif register as the dominant family, repeated giant editorial openings on House and Food, and the meaningless House statistics. No rounded card or glowing-gradient vocabulary remains. | Some large sans headlines and the home image/text kitchen split remain familiar patterns. Their justification is the house-section hierarchy and the actual fire-kitchen role; owner may still find them too safe. |
| Typography critic | Large compressed headline spacing, compact utilities and table-style facts have a consistent purpose. The image-free page sections remain legible. | Arial-based display voice is restrained rather than strongly proprietary; small captions require real-device judgment beyond automated checks. |
| Hospitality UX critic | Rooms, food, location constraints, navigation and inquiry preview are clear. Eleven room details remain differentiated. | No live availability, payment or real address exist for this fictional property. |
| Mobile critic | Navigation, room register, House and Food use explicit narrow-screen compositions; scroll order remains coherent. | Long editorial headings at 320px require ongoing optical care. |
| Front-end/performance critic | Static routes, local fonts/assets, no decorative animation or third-party front-end dependencies; image dimensions and Next optimization are retained. | Generated study images and first-time optimized image responses can load after the scroll reaches them. Capture/QA waits for completion. |
| Accessibility critic | Semantic landmarks, keyboard menu with Escape focus return, visible focus and reduced-motion support remain. Expanded axe and browser checks are recorded in the final state. | Automated checks do not replace manual assistive-technology testing. |

The panel is internal diagnostic review, not independent human approval. No numerical score or claim of perfection is recorded.
