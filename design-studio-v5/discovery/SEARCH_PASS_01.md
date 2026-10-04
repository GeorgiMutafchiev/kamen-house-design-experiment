# Product-derived search pass — raw leads, not reference selection

On 4 October 2026, after the remote worker had passed and the existing V5 pool had begun capture, a local HTTPS connection to Brave Search became available. Twelve product-derived queries were attempted across small hospitality, room booking, food, architecture, editorial, lifestyle and studio categories; their exact query strings, returned titles/URLs, UTC timestamp and HTTP status are preserved in [`search-results-brave-2026-10-04.json`](search-results-brave-2026-10-04.json). The first six queries returned HTTP 200 and 72 distinct result URLs in the first twelve results per query; the next six returned HTTP 429 and were stopped without further retries. No named site was supplied by an older design prompt as an authority for this pass.

These **72 are raw search leads**, not 72 V5 candidates. Results include collection sites, news, vendor services, unrelated retail/dictionary content and first-party-looking property/restaurant sites. Search title and URL alone do not establish current operations, first-party ownership, visual quality or role fit. The HTTP 429 response is a search-source limit, not a judgment about any target site.

Three first-party leads were subsequently checked by direct HTTPS GET on 4 October 2026. Each returned HTTP 200 at the search result URL and supplied matching product metadata. They were added to the **candidate queue only**, with both viewports requested. They have no accepted visual evidence or reference role. The pool is now **22**.

| Queue ID | Search provenance | First-party response evidence |
| --- | --- | --- |
| `DEER_MOUNTAIN` | “independent mountain guesthouse rooms dining official site”, result 9 | `deermountaininn.com` HTTP 200; description mentions rooms, rustic dining and wooded acres. |
| `STOOS_LODGE` | “small design hotel mountain rooms restaurant official site”, result 7 | `stoos-lodge.ch/en/` HTTP 200; title and description identify the mountain hotel. |
| `TRAILBORN` | Same query, result 2 | `trailborn.com` HTTP 200; title and description identify an outdoor boutique hotel group. |

Remaining raw leads require URL/content checks and manual source classification before entering the queue. Capturing and auditing these three candidates is still required before any design use.
