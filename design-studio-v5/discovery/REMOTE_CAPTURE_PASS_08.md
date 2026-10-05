# Expanded-pool remote capture pass 08 — 5 October 2026

GitHub Actions [run 37263506502](https://github.com/GeorgiMutafchiev/kamen-house-design-experiment/actions/runs/37263506502) processed `MTN_HOME_FOOD`, `MOUNTAIN_HOUSE`, and `WEST_MOUNTAIN_INN`. The six bundles returned HTTP 200 and were hash-validated and ingested. Independent screenshot review then applied the stricter visual-quality gate.

| Candidate | Worker result | Independent visual result | Disposition |
| --- | --- | --- | --- |
| `MTN_HOME_FOOD` | incomplete desktop/mobile | Reveal-state residue remained in both viewports | Keep incomplete; do not use as positive evidence. |
| `MOUNTAIN_HOUSE` | complete desktop/mobile | Menu image and navigation are populated and readable; mobile is a scaled menu image. The route is a restaurant menu and does not establish a lodging product or a multi-page stay journey. | Retain as narrow food-interface evidence only; no V5 role and no deep-audition credit. |
| `WEST_MOUNTAIN_INN` | nominally complete desktop/mobile | Full-page renders expose raw `[trx_sc_layouts]` shortcode fragments and large blank sections on both viewports. | Manual review overrules the nominal result; mark incomplete and exclude from positive evidence. |

This pass adds no completed deep audition. It demonstrates why render diagnostics and screenshot review are separate gates: transport success and document-bottom traversal did not catch West Mountain Inn's visible template defects. No role is assigned and no visual synthesis begins.
