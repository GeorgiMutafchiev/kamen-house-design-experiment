# CRO / UX research inventory — V5

Status: **bounded evidence, 4 October 2026**. This is behavioral input for later task-flow work, not a booking benchmark, design reference, or claim of improved conversion. The property and enquiry are conceptual; see `../PRODUCT_TRUTH.md`.

## Questions derived from the product

1. Can a visitor tell that KAMEN HOUSE is a small Rhodope mountain stay and predict where Rooms, food, directions, and an enquiry path lead?
2. Can someone compare eleven different rooms without losing the traits that matter to their party, mobility, or sleep?
3. How much information and effort should a truthful stay enquiry ask for when rates, availability, and an actual reservation service are absent?
4. Can a mobile visitor reach the same decision information and action without waiting for heavy media or losing place in the journey?

The discovery targets from these questions were independent lodging booking journeys, hospitality booking research with disclosed methods, general information-finding and form usability research, and field performance guidance. No source was accepted because an older brief named its publisher.

## Access and verification record

- At this session's check, direct read-only requests to the three article URLs below each returned **HTTP 503** via remote `172.31.10.93` (`curl -L`, 5-second connect and 12-second total limit). This repeated the previously reported systemic tunnel failure. No live hospitality site or booking engine was inspected.
- Saved same-session HTML and extracted text in `/tmp/kamen-cro-sources/` were inspected. Canonical URLs and article metadata were read from HTML. Key quoted passages were checked in parsed HTML text, not assumed from the `.txt` derivative alone. Hashes below identify the saved HTML snapshots; they do not establish current live content.
- A saved `triptease.html` resolves to a vendor **resources index** (`https://www.triptease.com/resources`), not a disclosed study or complete booking flow. It is excluded from positive findings. Its commercial interest in direct bookings also requires caution for any later specific report.

| ID | Source and provenance | Evidence type / sample / recency | What the saved article supports | Relevance and confidence |
| --- | --- | --- | --- | --- |
| S1 | Raluca Budiu, Nielsen Norman Group, [“Information Scent: How Users Decide Where to Go Next”](https://www.nngroup.com/articles/information-scent/), 2 Feb 2020. Saved `nng.html` SHA-256 `e9ddaabae0bd1d5fd4d35c186a2b6af465d03c166725633e74e94ea8a3c83b5c`; corroborating `nng.txt`, especially lines 79–90 and 177–218. | Expert synthesis / explanatory article; no study sample disclosed on this page; general web navigation, not hospitality. NN/g sells UX training and research services. | Link wording, surrounding context, and prior knowledge influence a person's expectation that a destination will answer their question. The article says labels should be clear and self-explanatory; a vague label can be missed even when the destination has relevant content. | **Moderate** for a task-flow principle: match Rooms, directions, and enquiry labels with the actual next page. **Low** for any predicted conversion effect at KAMEN. |
| S2 | Edward Scott, Baymard Institute, [“Checkout Optimization: Minimize Form Fields”](https://baymard.com/research-articles/checkout-flow-average-form-fields), 26 Jun 2024. Saved `baymard.html` SHA-256 `09dfbc721f10978e775d9e637ef00a51288c9d4fceee44e3b4d03808d4c5d2f0`; corroborating `baymard.txt`, especially lines 305–389, 400–473 and 668–707. | Publisher reports repeated checkout usability testing plus an ecommerce site benchmark. This article does not disclose the full participant count or benchmark site count for its cited results. Ecommerce checkout, not lodging enquiry. Baymard sells UX research and audits. | The article reports average 2024 checkout flows of 5.1 steps and 11.3 fields, and argues that fields users must consider matter more to perceived effort than step count alone. It reports 42% of participants in its testing typed a full name in “First Name” at least once; its examples also stress error recovery. These figures describe its tested checkout contexts only. | **Moderate** for reviewing unnecessary form questions and error recovery; **low** for transferring the numeric benchmarks or abandonment rates to KAMEN's non-transmitting enquiry. No evidence here that removing a particular KAMEN field would lift conversion. |
| S3 | Philip Walton, Google web.dev, [“Web Vitals”](https://web.dev/articles/vitals), published 4 May 2020, updated 31 Oct 2024. Saved `webdev.html` SHA-256 `e7bb3e56d05391816537ac1e3a438475c6f99f74f4221c25ebad24f22109c23a`; corroborating `webdev.txt`, especially lines 222–289 and 369–464. | Platform guidance defining field experience metrics; no hospitality sample or KAMEN performance data. Google develops related tools and metrics. | LCP, INP, and CLS cover loading, interaction, and visual stability; the article's “good” targets are LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 at the 75th percentile, separately for mobile and desktop. It distinguishes field and lab measurement. | **High** for naming performance measurements and thresholds; **none** for a conversion lift estimate or a claim that this site currently meets them. |

## Behavioral constraints to test later

- Make each route or action label accurately predict the next state, especially the difference between exploring rooms and opening an enquiry **preview** (S1; local truth).
- Review whether every enquiry field is necessary for the concept task. Check date logic, required-field feedback, recovery, and final-state wording with people performing a realistic task (S2 as a transferable usability prompt, not as a hotel benchmark).
- Measure the actual mobile and desktop journey, including image-led opening and form interaction, before claiming a fast experience or any conversion effect (S3).

## Evidence that was sought but not obtained

No verified independent-hospitality booking study, disclosed hotel-specific sample, full first-party hotel funnel, real visitor task session, analytics baseline, or conversion experiment was available through the failed tunnel. The sources above support narrow UX questions; they do **not** validate the eventual homepage, pricing path, reservation path, or business outcome. See `MISSING_FUNNEL_EVIDENCE.md`.
