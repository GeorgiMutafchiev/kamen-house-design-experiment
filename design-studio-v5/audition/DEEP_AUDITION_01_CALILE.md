# Deep audition 01 — The Calile Hotel

Status: **complete for first-party home, rooms index and one room detail; external booking engine incomplete**. This is 1 of the required 12–20 deep auditions. It assigns no reference role before the set reaches threshold.

## Provenance and route coverage

- First-party source: `https://thecalilehotel.com/`, discovered before V5 role assignment and preserved in the candidate ledger.
- Remote runs: `37224667588` (home) and `37227743950` (home, rooms index, Essential detail), GitHub-hosted Playwright Chromium on `ubuntu-latest`.
- Viewports: 1440×1000 and 390×844 for every inspected route.
- Evidence integrity: all latest six route/viewport sessions are `VISUAL_CAPTURE_COMPLETE`; manifest SHA-256 `bde4248ff75330c3ef9a719344d383696e3e56e02e69b11f1b03425f39231793`; independent screenshot review found populated final frames.
- Booking boundary: `BOOK ROOM` leaves the first-party host for `be.synxis.com` with room code `EK`. A local browser attempt on 5 October did not reach a stable rendered state within 30 seconds. No date, rate, policy, error or completion claim is made.

Evidence: [home desktop](../../design-intelligence/references/remote-evidence/37227743950/CALILE/home-desktop/attempt-01/99-full-page-after-traversal.jpg) · [home mobile](../../design-intelligence/references/remote-evidence/37227743950/CALILE/home-mobile/attempt-01/99-full-page-after-traversal.jpg) · [rooms desktop](../../design-intelligence/references/remote-evidence/37227743950/CALILE/rooms-desktop/attempt-01/99-full-page-after-traversal.jpg) · [rooms mobile](../../design-intelligence/references/remote-evidence/37227743950/CALILE/rooms-mobile/attempt-01/99-full-page-after-traversal.jpg) · [Essential desktop](../../design-intelligence/references/remote-evidence/37227743950/CALILE/essential-desktop/attempt-01/99-full-page-after-traversal.jpg) · [Essential mobile](../../design-intelligence/references/remote-evidence/37227743950/CALILE/essential-mobile/attempt-01/99-full-page-after-traversal.jpg).

## Predeclared-dimension scorecard

Scores are 0–4 and remain separate; `U` means the available evidence cannot support a judgment.

| Dimension | Score | Evidence-based judgment |
| --- | ---: | --- |
| Authorship and visual confidence | 3 | Warm stone/pink/blue palette, fine letterspacing, illustrations and hotel photography form a recognizable system across all three pages. |
| Distinctiveness without mannerism | 3 | The Brisbane resort identity is specific, although the pale luxury palette is less unique than its image world. |
| Cross-page coherence | 4 | Header, wordmark, booking utility, type, color and image handling survive from home to index to detail. |
| Typography | 2 | Display and utility hierarchy is consistent; small body and caption copy becomes faint and demanding, particularly in full mobile sequences. |
| Image direction | 4 | Room crops, material details, pool and social scenes share light, color and tactile restraint. |
| Layout intelligence | 3 | The index grid makes nine types scannable; the room detail alternates factual and atmospheric evidence. Long low-density passages weaken rhythm. |
| Interaction and motion | 2 | Slider cues and persistent booking action are visible; still captures cannot validate motion quality and no interaction path was exercised. |
| Mobile transformation | 2 | Content becomes legible one-column sequences and keeps `BOOKINGS`; it is mostly careful stacking, with very long pages and small supporting text. |
| Distance from generic AI-builder patterns | 3 | Specific art, product photography and unusual negative space resist a default card template, though repeated image/text sequencing is familiar. |
| Desire to stay | 3 | Rooms, material finishes, pool and social atmosphere are coherent and appealing. |
| Property comprehension | 2 | The urban resort character is apparent, but location and core distinction are less explicit in the opening than the visual mood. |
| Room discovery and comparison | 2 | Nine types are visible with distinct images and prose, but there is no compact capacity, size, bed, view or price comparison on the index. |
| Food/experience depth | 2 | Home imagery and navigation imply a broader stay; inspected routes do not supply a deep food or experience narrative. |
| Sense of place | 3 | Material palette, pool, city references and James Street language create a consistent warm-climate urban context. |
| Trust and practical information | 2 | Essential states 27sqm, king bed, living area/day bed and finishes; rates, policies, accessibility and availability remain outside inspected evidence. |
| High-intent path | 4 | `BOOKINGS` persists at the top and room detail adds `BOOK ROOM`; the route is always available. |
| CTA scent | 3 | `ROOMS & SUITES`, room names and `BOOK ROOM` predict the next step. The generic top-level `BOOKINGS` says less about whether users will compare first. |
| Friction and decision count | U | The first-party pages feel direct, but the transaction engine did not render within the bounded attempt. |
| Room decision support | 2 | Visual/prose differentiation is present; critical comparable facts are dispersed or absent. |
| Mobile conversion | 2 | The booking control remains visible and room pages are legible; the external form and keyboard/error behavior are untested. |
| Form/booking quality | U | External SynXis states were not captured. |
| Performance awareness | 2 | Routes rendered completely on the remote runner; long image-led pages and the hostile external engine limit confidence. |

## Role-fit strengths

- Strong cross-page visual coherence without making each page identical.
- A room index that creates desire through distinct material crops before the detail page supplies factual support.
- Persistent high-intent access that coexists with editorial imagery.
- A mobile sequence that preserves the room taxonomy and action, despite becoming long.

## Weaknesses and rejection case

- The rooms index asks prose and imagery to do comparison work that compact facts could do faster.
- Pale low-contrast utility copy and long pages create avoidable reading effort.
- The visual world is an urban Australian resort and cannot establish KAMEN's mountain material identity.
- The transaction step is an evidence gap. A visible booking button is not proof of a usable booking flow.
- The scale, app promotion and loyalty ecosystem would be disproportionate for an imagined eleven-room house.

## Transferable questions, not assigned principles

The later role-selection stage may test whether KAMEN should combine an image-led room index with a concise comparable fact line, keep one high-intent action continuously available, and let room detail move from desire to concrete suitability. These are questions until the full 12–20 set is compared.

## DO_NOT_COPY

Do not copy the Calile palette, letterspaced wordmark, illustration style, resort imagery, loyalty/app layer, room names, grid proportions or exact sticky booking treatment. Do not reproduce its weak contrast, long mobile scroll or missing index-level comparison facts.
