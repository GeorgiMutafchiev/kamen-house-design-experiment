# Source adapters and operating commands

Run commands from the repository root. The event log is `design-intelligence/research/events.jsonl`; each accepted event is appended and flushed before derived files are refreshed. Derived JSON and Markdown can always be rebuilt with:

```bash
node design-intelligence/cli.mjs refresh
```

## Live production website or curated gallery

`capture-live` opens real pages in Chromium and runs the render-complete visual session described in `render-complete-capture.md`. Each desktop/mobile session is persisted before moving to the next view. An interior URL adds two more sessions. A later failure marks only that source unavailable; earlier files and events remain. A screenshot alone does not make a reference researched. Inspect valid sessions, then add an observed pattern and date. Optional `--dismiss-selector 'button.example'` logs a real consent/modal click after the natural initial state is captured.

```bash
node design-intelligence/cli.mjs capture-live --id R-001 --url https://example.org/ --interior https://example.org/about/ --category hospitality --commercial
```

For a curated gallery, add `--source-type curated_gallery`. A gallery listing is evidence about the listing, not proof that its linked production site was inspected. `--proxy-spki` may be supplied only with the verified SPKI fingerprint of a trusted environment proxy CA; the command never disables certificate verification globally.

## Structured database or MCP source

Export the permitted IDs, screen metadata, and evidence references to a JSON manifest using `source_type: "structured_database"`; import via `adapter-ingest`. Nothing attempts to scrape or mirror the source. Screens count toward visual research only when `kind: "structured_screen"` names a permitted visual evidence location and a pattern with observation is added.

## Human supplied reference

Use `source_type: "human_supplied"`, the URL or attachment ID, and `kind: "human_attachment"` for supplied visual evidence. The reference starts `unreviewed`. Owner liking or rejection is recorded separately by `feedback`, with reason and provenance.

## Existing local evidence

Use `source_type: "local_evidence"` and a real local artifact path. The protected rejected baseline is already seeded in the ledger as negative owner evidence. Other local screenshots remain candidates until inspected and annotated.

## Adapter manifest

```json
{
  "source_type": "human_supplied",
  "source": "owner attachment 2026-10-04",
  "provenance": "uploaded-file-id-or-record-path",
  "items": [{
    "id": "R-OWNER-001",
    "title": "Reference title",
    "category": "hospitality",
    "url_or_external_id": "attachment-id-or-real-url",
    "operating_commercial": true,
    "evidence": [{
      "kind": "human_attachment",
      "location": "references/local-evidence/R-OWNER-001/home.png",
      "observed_at": "2026-10-04",
      "viewport": "desktop"
    }]
  }]
}
```

Save the manifest outside tracked research data if it includes restricted source metadata, then run:

```bash
node design-intelligence/cli.mjs adapter-ingest /path/to/manifest.json
```

`ingest` accepts already normalized ledger records. `pattern` accepts an atomic pattern JSON record. `feedback` accepts explicit human owner feedback. `source-status` records a channel's health. `gate` reports exact missing knowledge and returns exit code 2 while synthesis is blocked. `export-concept-brief` writes a holdout-filtered brief for an isolated concept producer.

`capture-audit` imports explicit session status events. `export-calibration` writes only researched, render-complete, non-holdout references and strips quarantined browser artifacts. Inspect the session's viewport images and diagnostics before asking the owner for taste feedback.

Use `--root /tmp/test-design-intelligence` for scratch runs or tests. The production UI is never a command target.
