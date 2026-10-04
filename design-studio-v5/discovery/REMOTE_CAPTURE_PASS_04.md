# Existing-pool remote capture pass 04 — 4 October 2026

GitHub Actions [run 37226517217](https://github.com/GeorgiMutafchiev/kamen-house-design-experiment/actions/runs/37226517217) used the corrected full-page width contract and captured `ACE`, `MOROSETA`, and `SOMBRE` at both standard viewports. The workflow completed, uploaded artifact `11312420379` (12,585,958 compressed bytes), and all six bundles were downloaded, SHA-256 checked and ingested without duplicates. Materialized manifest SHA-256: `97396a6219d0fcddfedd8c84625ae95fad1aef9e50044baf8ede9f6571505f47`.

| Candidate | Runner verdict | Independent visual audit |
| --- | --- | --- |
| `ACE` | Complete on desktop/mobile | Both initial hero screenshots contain a video/player error dialog; a privacy panel also overlays content. Both sessions were explicitly overruled as incomplete in the capture ledger. |
| `MOROSETA` | Incomplete on desktop/mobile | A large “Moroseta Kitchen Workshops ’26” promotional modal covers the page throughout the capture. A separate live DOM inspection identified its actual close control as `.spu-close-popup`; the queue now records that selector for one bounded, logged retry. |
| `SOMBRE` | Complete desktop, incomplete mobile | The `text=Accept` click was logged, but the consent banner still appears in desktop and mobile scroll screenshots. Desktop was explicitly overruled as incomplete. Mobile also has 378px of horizontal overflow in the document; this is source behavior, not a viewport screenshot error. The queue now targets the actual `[data-tid="banner-accept"]` control. |

This pass added no positive visual reference. A click log alone cannot prove a panel was dismissed; the shared capture logic now waits for the selected control to become hidden and marks the session incomplete if it remains visible at final capture. The V5 candidate pool has 22 entries after three separately verified search leads, with zero new role assignments, zero deep multi-page auditions, and no homepage synthesis.
