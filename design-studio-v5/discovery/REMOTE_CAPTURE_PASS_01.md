# Existing-pool remote capture pass 01 — 4 October 2026

GitHub Actions [run 37224667588](https://github.com/GeorgiMutafchiev/kamen-house-design-experiment/actions/runs/37224667588) on `ubuntu-latest` processed three existing queue IDs. Artifact `11312095266` (`kamen-research-evidence`, 12,071,366 compressed bytes) was downloaded and ingested. The materialized manifest SHA-256 is `43d2228976725b99cc1f62d34275adf6b02d4d62035c422cf95e1cdc333af1fa`. Session/diagnostic paths, screenshots and per-file hashes are in the manifest under the ignored local `design-intelligence/references/remote-evidence/37224667588/` directory; the GitHub artifact has a 14-day retention window.

| Candidate | Desktop | Mobile | Capture-only finding / next action |
| --- | --- | --- | --- |
| `VILLALENA` | `VISUAL_CAPTURE_INCOMPLETE`; HTTP 200; 10 positions | `VISUAL_CAPTURE_INCOMPLETE`; HTTP 200; 12 positions | The actual page was reached, but `.upcc-mandatory-overlay` obscured every sampled position. The initial screenshot shows an `Accept` control and `Options`. A future capture may log a real click on `.upcc-cookie-advert .upcc-cookie-accept`; no hidden content was forced visible. |
| `SOMBRE` | `VISUAL_CAPTURE_INCOMPLETE`; HTTP 200; 14 positions | `VISUAL_CAPTURE_INCOMPLETE`; HTTP 200; 18 positions | The actual page was reached, but `layout-drawer-overlay`/`dmPopup` obscured the page. The initial screenshot shows `Preferences`, `Decline` and `Accept`; a logged `Decline` click is queued for retry. |
| `CALILE` | `VISUAL_CAPTURE_COMPLETE`; HTTP 200; 10 positions | `VISUAL_CAPTURE_COMPLETE`; HTTP 200; 10 positions | Real traversal captured initial, scroll, bottom and final full-page states. Document height grew from 5,199 to 6,165 px desktop and 4,052 to 5,208 px mobile. This is capture qualification only; no room, booking, multi-page or reference-role claim follows. |

All six sessions were preserved in the append-only Design Intelligence ledger; the two incomplete candidates remain excluded from positive visual coverage. The queue still contains the original 19 leads. Deep V5 auditions and role assignments remain at zero.
