# Existing-pool remote capture pass 02 — 4 October 2026

GitHub Actions [run 37225083725](https://github.com/GeorgiMutafchiev/kamen-house-design-experiment/actions/runs/37225083725) processed a logged consent retry for `VILLALENA` and `SOMBRE`, plus the next existing candidate `HECKFIELD`. Artifact `11311931918` was downloaded, SHA-256 validated and ingested; materialized manifest SHA-256: `47c70f2712c7640f9ddb94d0d52c2ac467ecae667ff5487399a101523f73f364`. All six sessions remain `VISUAL_CAPTURE_INCOMPLETE`, so none enters positive V5 coverage.

| Candidate | Observed result | Next evidence action |
| --- | --- | --- |
| `VILLALENA` | Initial desktop/mobile cookie dialog remains. The queued `.upcc-cookie-advert .upcc-cookie-accept` selector did not match, so no click occurred; full diagnostics retained. | HTML inspection identified the actual link inside `.upcc-cookie-buttons`; retry `.upcc-cookie-buttons .upcc-cookie-accept` as a real logged click. |
| `SOMBRE` | `text=Decline` clicked successfully on desktop/mobile. Screenshots after the click show the consent panel gone, but the capture classifier still counted an invisible `layout-drawer-overlay`/`dmPopup` layer as obstructing every scroll position. | The shared capture diagnostic now checks computed visibility and opacity before classifying fixed overlays. Retest without forcing visibility or hiding DOM elements. |
| `HECKFIELD` | Desktop has unrevealed large elements at six sampled positions. Mobile also shows an actual cookie panel and an `An unknown error occurred` hero/media state in the initial screenshot. | Preserve as incomplete. Diagnose the live media/consent behavior separately; a cookie click alone would not prove the broken hero is complete. |

The retry is not a design judgment. `CALILE` from pass 01 remains the only newly complete two-viewport candidate in the V5 corpus; its limited fast audition is in [`FAST_AUDITION_REMOTE_01.md`](../audition/FAST_AUDITION_REMOTE_01.md).
