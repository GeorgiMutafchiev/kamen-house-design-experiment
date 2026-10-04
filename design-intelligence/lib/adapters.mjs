import { sourceTypes, validateReference } from "./core.mjs";

// A source adapter maps one inspected or candidate item to the common ledger.
// It does not certify visual quality or turn metadata into visual evidence.
export function adaptRecord(manifest, item) {
  if (!sourceTypes.includes(manifest.source_type)) throw new Error("adapter source_type is unsupported");
  if (!manifest.source || !manifest.provenance) throw new Error("adapter requires source and provenance");
  if (!item.id || !item.title || !item.category || !item.url_or_external_id) throw new Error("adapter item needs id, title, category, url_or_external_id");
  const evidence = item.evidence ?? [];
  if (!Array.isArray(evidence)) throw new Error("adapter evidence must be an array");
  const r = {
    id: item.id, title: item.title, category: item.category,
    source: manifest.source, source_type: manifest.source_type,
    url_or_external_id: item.url_or_external_id,
    operating_commercial: item.operating_commercial ?? false,
    holdout: item.holdout ?? false, human_status: "unreviewed",
    evidence, researched_at: item.researched_at ?? null,
    usable_patterns: item.usable_patterns ?? [], problematic_patterns: item.problematic_patterns ?? [],
    why_selected: item.why_selected ?? "",
    notes: item.notes ?? "",
    provenance: { adapter: manifest.source_type, source_record: manifest.provenance, item_record: item.provenance ?? null },
  };
  return validateReference(r);
}
