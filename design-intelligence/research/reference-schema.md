# Reference and principle schema

The append-only event log is authoritative. Derived ledgers are caches. All IDs must be stable. A reference ID cannot change source type, external identity, or holdout assignment. Upserting merges evidence and keeps earlier research dates, annotations, provenance, and explicit human status; a later sparse source record cannot erase completed research.

## Reference fields

`id`, `source`, `source_type`, `url_or_external_id`, `title`, `category`, `operating_commercial`, `holdout`, `researched_at`, `evidence[]`, `usable_patterns[]`, `problematic_patterns[]`, `why_selected`, `notes`, and `provenance`. Evidence entries require `kind`, `location`, `observed_at`, and `viewport`; page and URL may be added. `source_type` is one of `live_website`, `curated_gallery`, `structured_database`, `human_supplied`, or `local_evidence`.

An import may not assert owner approval or rejection. Only an explicit `feedback.add` event from `human_owner` changes `human_status`.

## Atomic pattern fields

`id`, `dimension`, `polarity` (`usable` or `avoid`), `principle`, `observation`, `reference_ids[]`, `confidence`, and `do_not_copy`. The observation must describe a visible state or human verdict. Each pattern cites existing references. The principle should state a transferable relation, not “use the style of X.”

## Direction decision provenance

Every direction requires a hypothesis, a `visual_grammar` with composition, typography, density, navigation, imagery, rhythm, and mobile behavior, and `decision_provenance[]`. Each decision identifies a key, chosen rule, and pattern IDs. Direction B must differ from A on at least four grammar axes. The synthesis gate blocks creation while evidence is insufficient.

## Evaluation

Every independent evaluation cites a direction, creator, different reviewer, reviewer role, desktop/laptop/mobile rendered screenshots, verdict, and concrete evidence. `filter_pass` remains an AI or expert diagnostic; it does not grant human approval. The human owner records `approved`, `partially_approved`, or `rejected` feedback separately.
