# Remote research evidence worker for V5

This is a transport layer only. It uses the same `captureVisualSession` traversal and completeness classifier as local Chromium. It never selects a reference role or changes the V5 synthesis gate. The existing 19 candidates are mapped in [`research-queue.json`](../../design-studio-v5/discovery/research-queue.json); the separate [`proof-queue.json`](proof-queue.json) has three transport probes that do not become V5 references.

## Flow

`queue → GitHub Actions ubuntu-latest + Playwright Chromium → render-complete sessions → EvidenceBundle v1 → workflow artifact → fetch/validate/materialize → Design Intelligence events → V5 audition`

The [workflow](../../.github/workflows/remote-research.yml) uses read-only repository permission, does not pass secrets to the browser, and uploads `kamen-research-evidence` even if a page is incomplete. It runs only by manual `workflow_dispatch` on the isolated V5 branch; the saved [`run-request.json`](run-request.json) is a bounded default if dispatch inputs are omitted. Select `proof` or `research` and at most three queue IDs. No commit or queue-status update launches a surprise capture job. Do not run broad research until the remote proof has been ingested.

The runner installs dependencies from the lockfile, installs Playwright Chromium, captures up to three candidates per job, and has a 45-minute job limit. Queue entries allow at most three routes and two fixed viewports. Navigation has a 30-second timeout; each visual session makes at most two bounded traversals. A failed page retains its diagnostic bundle. Artifacts expire after 14 days; ingest selected evidence promptly and curate long-lived references before expiry. `references/remote-evidence/` is deliberately gitignored to avoid committing unreviewed bulk images. The manifest retains SHA-256 hashes and remote run provenance.

## Queue and EvidenceBundle

Queue v1 validates candidate ID, public HTTPS URL, category, reason, priority 1–5, desktop/mobile request, up to three named same-host routes, discovery provenance, status, attempt count and last error. The 19 historical leads remain explicitly unverified until new remote sessions succeed. `AUDIT_READY` means captured and awaiting V5 audition; it is not an approved reference.

The artifact root contains `research-evidence-manifest.json` and one directory per candidate/route/viewport. Each directory holds the original `session.json`, `diagnostics.json`, and selected initial, scroll, bottom and final full-page screenshots. An EvidenceBundle records requested/resolved URL, IDs, route, timestamp, adapter, runner, browser version/user agent, exact viewport, navigation/redirect/resource/console information, readiness and traversal diagnostics, retry count, completeness result, artifact paths and SHA-256 hashes. Exact screenshot filenames follow the existing `.jpg` capture routine.

`validateManifestFiles` checks every path is inside the artifact root, every file hash, session/manifest identity, desktop/mobile dimensions, and recomputed `assessSamples` completeness before ingestion. `VISUAL_CAPTURE_INCOMPLETE` is preserved but cannot qualify as positive evidence. No forced visibility is used. The importer records complete and incomplete sessions separately, and the existing Design Intelligence ledger still requires an inspected atomic observation before a reference counts as researched. Duplicate bundle IDs are ignored on rerun; an interrupted import can resume.

## Proof and ingestion commands

Dispatch the proof queue on the isolated branch with `gh workflow run remote-research.yml --ref design/autonomous-human-cro-v5-20261004 -f mode=proof`. After the run completes, inspect its status and download/ingest with:

```bash
node design-intelligence/remote/fetch.mjs --proof --run-id <numeric-github-run-id>
```

This downloads the GitHub artifact via `gh`, validates every file and ingests into `/tmp/kamen-v5-remote-proof-runs/<run-id>`, leaving the 19-candidate V5 corpus untouched and allowing independent proof retries. Inspect the manifest and screenshots to establish one simple static site, one image-heavy site, one lazy/growing page, at least one mobile session, and real external connectivity. A green workflow alone is not proof. The local-only probe in the Codex environment produced incomplete sessions because the HTTPS tunnel still returned 503; it is a failure-handling test, not external proof.

After proof, dispatch `research` with up to three existing queued IDs; for example `gh workflow run remote-research.yml --ref design/autonomous-human-cro-v5-20261004 -f mode=research -f candidate_ids=VILLALENA,SOMBRE`. Then:

```bash
node design-intelligence/remote/fetch.mjs --run-id <numeric-github-run-id>
```

`fetch.mjs` can find the latest completed run if the ID is omitted, but an explicit ID is safer. It downloads to a temporary directory, checks that the manifest run ID matches the selected run, validates and copies the evidence to `design-intelligence/references/remote-evidence/<run-id>`, appends reference/capture/source events, refreshes derived research truth, and updates queue status. It does not add a pattern, reference role or design direction. Preserve the artifact/run URL alongside any later V5 audition. Do not commit the bulk download without a curated storage decision.

For local diagnostics without GitHub:

```bash
node design-intelligence/remote/worker.mjs --queue design-intelligence/remote/proof-queue.json --ids PROOF_STATIC --limit 1 --browser /usr/bin/chromium --out /tmp/kamen-remote-probe
node design-intelligence/remote/ingest.mjs --artifact-root /tmp/kamen-remote-probe --intelligence-root /tmp/kamen-remote-proof-ledger --queue design-intelligence/remote/proof-queue.json --no-queue-update
```

These commands test the adapter and ingestion code but cannot substitute for the GitHub-hosted connectivity and artifact-upload proof.

## Failure and trust boundary

The worker blocks literal IP, localhost and non-HTTPS requests, never interpolates candidate URLs into shell commands, and does not receive GitHub credentials in page context. Redirects, failed resources and browser errors remain visible. A source with incomplete DOM/media/scroll evidence remains `VISUAL_CAPTURE_INCOMPLETE`; repeated source-specific failures should be marked `BLOCKED` in the queue after inspection. If the GitHub runner itself cannot reach representative public sites, record `REMOTE_RESEARCH_WORKER_BLOCKED` with run URL, runner type, DNS/TLS/HTTP failures and affected domains. Do not promote old screenshots or relax V5 targets.
