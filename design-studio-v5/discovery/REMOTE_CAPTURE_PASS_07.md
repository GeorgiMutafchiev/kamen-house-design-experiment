# Expanded-pool remote capture pass 07 — 5 October 2026

GitHub Actions [run 37263496551](https://github.com/GeorgiMutafchiev/kamen-house-design-experiment/actions/runs/37263496551) processed the first three newly verified hospitality candidates: `DEER_MOUNTAIN`, `STOOS_LODGE`, and `TRAILBORN`. All six desktop/mobile bundles returned HTTP 200, were hash-validated and ingested with full diagnostics, but none reached `VISUAL_CAPTURE_COMPLETE`.

| Candidate | Result | Preserved diagnostic |
| --- | --- | --- |
| `DEER_MOUNTAIN` | incomplete desktop/mobile | Failed visible video at two sampled positions on each viewport. |
| `STOOS_LODGE` | incomplete desktop/mobile | Failed visible video at two desktop and one mobile sampled positions. |
| `TRAILBORN` | incomplete desktop/mobile | Large hidden/reveal elements remained across 12 desktop and 15 mobile samples; mobile also retained a large fixed overlay. |

These are source-specific render failures, not a remote-transport failure. The worker reached each source, traversed 7–23 sampled positions and preserved screenshots. No candidate enters positive evidence or deep audition. V5 continues with other bounded candidates rather than spending the full run on these three.
