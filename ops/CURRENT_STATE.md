# Current State

Project phase: autonomous Design Studio — complete working candidate ready for owner visual review.
Branch: `work`.
Current visual status: WORKING CHAMPION / HUMAN REVIEW PENDING. The earlier House Register remains `HUMAN_REJECTED_BASELINE_001`; no AI-only score converts either version into human approval.
Recovery tags: `human-rejected-baseline-001` (`98715a99bf60070cb21b26941fe72c504496ee0c`) and `protected-pre-autonomous-studio-4c12769` (`4c127692a088758b1bb9e7cb1c1669c030568589`).
Current technical implementation checkpoint: this studio closeout commit; exact SHA is in the final report.

## Working product

Next.js App Router, React, TypeScript and authored CSS. The Spatial candidate now covers Home, Rooms, eleven room details, Fire Kitchen, House, Around, Journal, three journal details, Find Us, Stay, Privacy, 404 and error/loading states. The working idea is a house section: private rooms above and around a shared fire kitchen. Its grid, measured rules and varied photographs continue through task-specific routes. The previous visual family was not reused as the parent of another Challenger.

The product is a fictional hospitality design experiment. Existing generated images are disclosed as concept studies. The Stay form validates details locally and transmits nothing; it neither reserves a room nor processes payment. There is no verified address or live availability. These are factual product limitations, not hidden integrations.

## Autonomous Design Lab

Four structurally different, renderable Lane B first passes are under `public/design-lab/{editorial,spatial,cinema,vernacular}/`. Desktop, laptop, mobile and anonymous comparison captures are under `design-lab/renders/`. `design-lab/AUTONOMOUS_STUDIO_REVIEW.md` records the seven-role critique, severe-failure screen, working selection, second pass and remaining risks. The comparisons were procedural and internal, not independent human taste evidence. The newer owner directive supersedes the old intermediate owner calibration/approval gate.

## Research truth

Lane A remains evidence strict. STJOHN, DAVIDCHIPPERFIELD and CASABONAY passed fresh render-complete desktop/mobile sessions and were visually inspected; five atomic patterns cite these sources. NOMA's new sessions failed visual completeness and remain excluded. The previously quarantined raw captures are preserved. The verified synthesis gate remains FALSE: three researched non-holdout references, one source type and zero valid holdouts do not meet its broad coverage rule. `design-intelligence/CURRENT_DESIGN_TRUTH.md` is generated from the event ledger. Lane B prototypes do not contribute to it.

## Validation at the working checkpoint

- Unit/integration: 13 passed, including capture integrity and Design Intelligence persistence/gating.
- ESLint: passed.
- Next production build: passed, 28 static routes.
- Playwright: 32 passed, covering ten route accessibility samples, navigation and internal destinations, all eleven differentiated room details, inquiry states, 404, no console errors, mobile overflow and target size, asset loading after scrolling, and ten visual captures.
- Static preview export: passed with `/kamen-house-design-experiment` base path; eleven representative routes and images returned HTTP 200 under a local static server, and the client-side Stay link opened its form.
- Responsive inspection: 320, 375, 390, 650, 768, 1024 and 1440 px checks found no horizontal document overflow on the representative route set. Full-page champion captures exist at desktop, laptop and mobile widths.

## Current limitations and next action

The final human visual judgment is pending. Generated concept imagery, absent verified property photography and address, and the non-transmitting inquiry preview prevent claims that this fictional site can operate as a real hotel. The internal panel identified some remaining risk that large sans headlines or one kitchen image/text split may feel familiar. Automated accessibility checks do not replace assistive-technology review. The next action is for the owner to open the finished preview and judge the visual result; routine design decisions need no owner input.

Run locally: `npm run dev` from this repository. Validate: `npm test && npm run lint && npm run test:e2e`. Static preview build: `KAMEN_STATIC_PREVIEW=1 NEXT_PUBLIC_KAMEN_BASE_PATH=/kamen-house-design-experiment npm run build`. This preview is only for the isolated experiment and does not interact with other repositories or production infrastructure.
