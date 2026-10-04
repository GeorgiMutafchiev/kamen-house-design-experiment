# Source policy

This Design Intelligence layer accepts five source categories: real production websites, curated galleries, structured design databases or MCP exports, human-supplied material, and local evidence. Each uses the same reference ledger and provenance model. A channel may fail without changing previously stored records.

## Evidence levels

1. **Candidate:** a real URL, external ID, or owner suggestion. No visual claim is made.
2. **Captured:** a stored screen or human attachment with date and viewport. Browser captures begin in `CAPTURE_AUDIT_REQUIRED`; HTTP success and a full-page screenshot do not establish visual completeness. Partial inspections remain durable but unqualified.
3. **Researched:** valid visual evidence, a `researched_at` date, and at least one atomic `pattern.add` entry with a concrete observation and reference ID. Live or gallery browser evidence requires complete desktop and mobile home sessions under `render-complete-capture.md`. Only qualified records contribute to positive coverage. Human-rejected and holdout records are excluded from synthesis coverage.
4. **Owner assessed:** an explicit `feedback.add` event. No AI inference may set owner taste.

HTTP 200, metadata, a gallery listing, or a model recollection never establishes visual research. Structured sources may supply licensed screen metadata or image evidence. Human attachments may supply desktop/mobile screenshots. Local artifacts must retain their original source and rights status.

## Copyright and access

Store internal research captures only when permitted. Do not bulk mirror paid datasets, copy protected images into the KAMEN product, or reconstruct distinctive pages. If retention is restricted, store metadata, IDs, project notes, and abstract observations, with a source URL or external ID. The `references/local-evidence/` directory is for deliberate, small project research captures.

## Stage policy and stopping rule

Stage 1 targets 20–30 diverse, high-signal references. Stage 2 researches the specific dimensions and categories still weak in `research/research-coverage.json`. Broad accumulation stops once the synthesis gate is satisfied. The operational gate requires 20 researched non-holdout references, three independent source types, four categories, at least 70% operating commercial examples, eight references with mobile evidence, four inspected holdouts, and medium or high confidence in every required dimension. Each dimension reaches medium at two evidence-backed references from two source types. These thresholds are conservative workflow safeguards, not a quality score or human approval.

When any source fails, record `source.status = unavailable` with the error and continue using successful records and other adapters. If coverage is insufficient, report the exact gaps. No unverified reference may be promoted to fill them.

Existing current-run live screenshots are quarantined under `capture-audit-2026-10-04.md`. Their provenance remains intact, but they do not count toward coverage, calibration, or holdout evaluation until render-complete recapture succeeds.

## Holdout policy

Mark an inspected reference `holdout: true`. Holdout records do not contribute to inspiration coverage. `export-concept-brief` removes their identities and any patterns citing them. A concept producer should receive only that filtered brief. In a shared filesystem, this is procedural isolation, not cryptographic secrecy; true isolation requires a separate workspace or restricted context. The holdout jury may see the full ledger later.
