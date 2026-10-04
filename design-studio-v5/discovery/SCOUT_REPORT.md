# V5 reference discovery — source-limited scout pass

Date: 2026-10-04. Scope: candidate discovery only. This file assigns no reference roles and makes no positive visual assessment.

## Basis and result

Product basis: `design-studio-v5/PRODUCT_TRUTH.md`. Audition gate: `design-studio-v5/EVALUATION_CRITERIA.md`. The property is an imagined eleven-room Rhodopes mountain house with a shared fire kitchen and a stay-enquiry preview. Research therefore needs small-property room selection, credible food and place storytelling, practical visit information, and honest low-friction enquiry paths. The site cannot claim a live booking or operating details.

The V5 target is **40–80 first-party URL candidates**. The scout initially found **18 distinct locally documented first-party URL leads**. After that scout pass, five same-day render-complete desktop/mobile **home-only** sessions were imported without V4 role assignments; one supplied an additional distinct URL lead. The current pool is **19** candidates, leaving a **21–61 candidate shortfall**. Fifteen initial leads came from a prior browser ledger, three from a prior reachability-only list, and one from the same-day import. No new external search result was obtained. Current live URL verification: **0/19** because the tunnel is blocked. Reused render-complete **home-only** visual evidence: **5/19**, documented in `../REUSED_EVIDENCE.md`. Every candidate remains `UNASSESSED` for V5 role selection; none is a quality bar, holdout, or design direction.

The initial representative HTTPS connectivity check was a small GET request for `https://www.google.com/search?q=independent+mountain+hotel+architecture+official+site`. It returned HTTP **503**, 215 bytes, with `upstream connect error ... envoy://cloudflare_https_tunnel/`. After a separate Google **HEAD** check reportedly returned HTTP 200 at about 17:50 UTC, discovery resumed with two product-derived search GETs: `https://www.google.com/search?q=independent+mountain+guesthouse+rooms+restaurant+official+site&num=20` and `https://www.bing.com/search?q=fire+restaurant+hotel+rooms+official+site&count=20`. Both returned the same 215-byte HTTP **503** tunnel error. Network attempts stopped after this repeated failure. A HEAD success did not yield usable search results, and no candidate-site URL was checked. The observed error does not prove that any candidate site is down.

## Provenance and fields

The pool is in [`candidates.csv`](candidates.csv). Source paths are exact repository files:

- `design-intelligence/research/reference-ledger.json`: fifteen historical live-website records with URL, page title, and old desktop/mobile captures. Their captures are either `CAPTURE_AUDIT_REQUIRED` or `VISUAL_CAPTURE_INCOMPLETE`, per `design-intelligence/research/capture-audit-2026-10-04.md`. Old HTTP 200 responses do not count as present reachability or visual evidence.
- `design-intelligence/research/candidate-references.json`: three further first-party-looking URLs in a historical reachability-only list. They have no qualifying visual capture.
- `design-studio-v5/REUSED_EVIDENCE.md`: one additional URL lead from same-day render-complete home sessions, imported by the separate evidence review. No source role or style claim is inherited.

`first_party_status` in the CSV means the record points to an apparent organization's own domain. Present URL resolution and current operations remain unverified. `cro_research_question` is a question for later inspection, not an observation. `style_cluster` is `UNASSESSED` on every row pending V5 audition. Five entries now have same-day render-complete home captures on desktop and mobile, imported by original session provenance; they do **not** prove interior routes, a booking flow or cross-page coherence. The remaining old mobile artifacts are unqualified.

## Product-derived search plan

The initial mountain-hotel query and the two resumed search GETs above were attempted, but all returned proxy errors without results. The queries below are a plan; wording overlaps the attempted searches, but no result was received. Search results must lead to the actual first-party site before joining this pool.

| Gap | Queries for search once HTTPS works | What to seek |
| --- | --- | --- |
| Small destination hospitality | `independent mountain guesthouse official site rooms food trails`, `small design hotel 10 rooms official website mountain`, `rural guesthouse Rhodope mountains official rooms dining` | A compact property whose rooms, table, and surroundings can be understood together. |
| Room comparison | `boutique hotel official rooms compare room types mobile`, `independent lodge official room details availability enquiry` | Clear differences across rooms and a truthful next action. |
| Fire kitchen / food | `wood fire restaurant official website menu story`, `farm kitchen hotel official dining site`, `seasonal restaurant official site reservations menu` | Food as lived hospitality, with actionable meal information. |
| Place / architecture | `mountain house architecture practice official project site`, `vernacular stone timber architecture studio official projects`, `adaptive reuse rural hospitality architect official site` | Material, geography, and local context without resort cues. |
| Editorial / culture | `independent travel journal official website place stories`, `regional culture magazine official website editorial photography`, `contemporary craft publication official site` | Dense but legible content and sense of place. |
| Interaction / lifestyle | `independent digital studio official site editorial interaction mobile`, `design studio official site restrained motion navigation`, `lifestyle brand official site material storytelling mobile` | Purposeful motion and mobile transformation. |
| Booking / transactions | `independent hotel official booking flow room selection mobile`, `small hotel direct booking official site cancellation policy`, `hospitality enquiry form official website mobile` | Context retention, clear final state, policies, and form behavior. |
| Premium hospitality | `destination hotel official website rooms dining experiences book`, `contemporary country hotel official site rooms food location` | Strong end-to-end visitor journey, with caution about resort scale. |

Suggested next search channels: general web search; local hotel/restaurant/architecture directories as **discovery paths only**; project credits that link to first-party sites; regional travel and culture articles that name operating properties; first-party partner links. Record each result URL, discovery page or query, date, and redirect target. Avoid filling the quota from memory, copied historical lists, or gallery screenshots alone.

## Diversity and evidence gaps

The current **sector** mix is ten hospitality, two food, two architecture, two editorial, two physical-product/lifestyle, and one cultural site. It contains no specifically discovered independent digital studio and no specifically discovered direct booking or enquiry-flow source. Geographic and scale diversity are also unassessed. **Visual style clusters cannot be assigned until first audition**; candidate categories must not be mistaken for visual grammars. Future audition should deliberately sample minimalist editorial, image-led, architectural/material, expressive typography, dense cultural/editorial, vernacular, experimental interaction, and practical commercial hospitality, then revise cluster labels only from completed captures.

Before any candidate becomes positive visual evidence, obtain render-complete desktop and mobile sessions and inspect representative routes. Multi-page evidence and the separate criteria scorecard are needed for a broad role. The present scout pass does not satisfy the V5 discovery target or unlock visual synthesis.
