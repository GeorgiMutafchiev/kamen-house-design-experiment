# Current-run capture audit — 4 October 2026

The owner observed that Ace Hotel's first capture has large blank regions and instructed quarantine of the current live corpus. All 15 live-site references captured before the render-complete procedure received explicit `CAPTURE_AUDIT_REQUIRED` events for desktop and mobile. The raw screenshots were preserved. No positive patterns had been added, so no pattern confidence had to be revoked. The 4 designated holdouts remain excluded.

The following is an audit of the stored desktop and mobile images. An apparently populated old full-page image is **not** a render-complete session, so it remains quarantined. These descriptions do not approve a source as a positive design reference.

| Reference | Old-capture observation | Current qualification |
| --- | --- | --- |
| ACE | Large blank regions after the hero in the desktop capture; owner specifically identified this failure. Mobile shows content, confirming inconsistent capture states. | New desktop and mobile attempts: HTTP 503; `VISUAL_CAPTURE_INCOMPLETE`. |
| FOGO | Many sections and images appear in desktop and mobile, but the old capture lacks timed viewport traversal. | New desktop and mobile attempts: HTTP 503; `VISUAL_CAPTURE_INCOMPLETE`. |
| STJOHN | Short homepage shows restaurant image, navigation and footer on both sizes. No traversal diagnostics. | `CAPTURE_AUDIT_REQUIRED`. |
| APARTAMENTO | Editorial and shop modules appear; the mobile full page has conspicuous empty image/product regions. No traversal diagnostics. | `CAPTURE_AUDIT_REQUIRED`. |
| HECKFIELD | Image and text sequence appears, but a consent panel obstructs mobile content and initial desktop capture. | `CAPTURE_AUDIT_REQUIRED`. |
| CORAZON | Color, room images and video state are visible; video timing and scroll behavior were not verified. **Holdout.** | `CAPTURE_AUDIT_REQUIRED`. |
| DAVIDCHIPPERFIELD | Long asymmetric project feed appears populated on both sizes; reveal behavior was not checked. | `CAPTURE_AUDIT_REQUIRED`. |
| NOMA | Food and editorial sections appear; cookie panel obscures part of the entry state. | `CAPTURE_AUDIT_REQUIRED`. |
| FRAMA | Product and story sections appear, but shipping-destination modal blocks the entry composition. **Holdout.** | `CAPTURE_AUDIT_REQUIRED`. |
| CASABONAY | Image mosaic appears, with a very large empty lower region in old mobile capture. | `CAPTURE_AUDIT_REQUIRED`. |
| MOROSETA | Content appears, but a kitchen-workshop popup obscures the entry state. | `CAPTURE_AUDIT_REQUIRED`. |
| AESOP | Content appears, but old mobile full-page screenshot expands to 1325px despite a 390px viewport, making responsive interpretation unsafe. | `CAPTURE_AUDIT_REQUIRED`. |
| OMA | Long, dynamic project feed appears; old static output cannot verify animated and blank sections. **Holdout.** | `CAPTURE_AUDIT_REQUIRED`. |
| KINFOLK | Editorial sections appear; old capture has no real scroll-state evidence. | `CAPTURE_AUDIT_REQUIRED`. |
| BALTIC | Gallery, event and footer content appear, but a large cookie modal covers the entry state. **Holdout.** | `CAPTURE_AUDIT_REQUIRED`. |

Current corpus qualification after the two failed recapture attempts: **0 valid positive**, **13 audit-required**, **2 incomplete**, **0 valid holdouts**, **1 human-rejected local baseline**. No calibration item may be selected from these images yet. Fresh HEAD probes for `example.com`, Heckfield Place and ArchDaily all returned HTTP 503; direct no-proxy HTTPS failed to connect. This is a source outage, separate from the evidence gate.

## Later same-day recapture checkpoint

The global HTTPS route briefly recovered. Fresh render-complete desktop and mobile sessions passed for **STJOHN**, **DAVIDCHIPPERFIELD**, and **CASABONAY**. Their completed viewport files were manually inspected and each received a researched-at annotation plus provenance-backed atomic patterns. Earlier raw files remain preserved and quarantined; the latest passing sessions, not the old files, establish qualification. No interior page or interaction claim is made for these three homepage inspections.

**NOMA** returned HTTP 200 but both new sessions remained `VISUAL_CAPTURE_INCOMPLETE`, so no positive pattern or coverage was added for it. ACE and FOGO remain incomplete; all other legacy captures still await new sessions. The current counts are generated from `research/events.jsonl` into `research/research-coverage.json`, not from the historical snapshot above.
