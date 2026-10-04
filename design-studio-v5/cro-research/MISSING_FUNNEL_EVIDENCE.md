# Missing funnel evidence and blocker classification

## Blocker observed

On 4 October 2026, one representative batch of read-only requests to NN/g, Baymard, and web.dev returned **HTTP 503** from the same cloud tunnel address. A prior attempt had the same systemic symptom. After an intermittent successful Google HEAD reported by the team, one product-derived hotel-usability search GET again returned **HTTP 503**; probing stopped. This is a **network/source-access blocker**, not evidence that any particular website or booking flow is broken. Saved article HTML from the same session was revalidated for the narrow findings in `RESEARCH_INVENTORY.md`.

## What could not be verified

| Evidence needed for V5 | Current state | Why it matters / next valid observation |
| --- | --- | --- |
| Several complete independent-hospitality journeys from landing → rooms → detail → dates → booking/enquiry → pre-confirmation | **UNOBSERVED**. No live first-party funnel session or mobile/desktop capture passed the V5 render-complete gate. | Later inspect a diverse, independently discovered set of live first-party properties when source access works. Record pages, viewports, decisions, retained choices, policies, error states, and final state. Do not borrow their UI wholesale. |
| Hospitality booking studies with disclosed method and sample | **UNVERIFIED**. No article passing this standard was available in the saved source set. | Search anew from room comparison, booking transparency, mobile lodging, and enquiry questions; record publisher interests, sample, timing, and direct applicability. |
| Real KAMEN availability, rates, deposit/cancellation rules, enquiry channel, response time, accessible arrival, and verified location | **ABSENT BY CONCEPT TRUTH**. | These require actual operations, not CRO inference. Until then, a preview must remain explicitly non-transmitting and non-reserving. |
| KAMEN user behavior and commercial baseline | **ABSENT**. No audience study, analytics, lead delivery, booking denominator, or conversion events were inspected. | After an operating service exists, define privacy-respecting events for room entry, detail, enquiry start/error/completion, and outcome, segmented by device and source. Establish a baseline before experiments. |
| Task success with representative visitors | **UNTESTED**. Local code and existing tests show intended mechanics only. | Run the six task studies listed in `LOCAL_TASK_FLOW_AUDIT.md`; observe comprehension, hesitation, errors, and whether people correctly understand the preview. |
| Performance and accessibility through the full decision path | **UNMEASURED IN THIS AUDIT**. | Measure relevant pages on mobile and desktop; run keyboard/screen reader checks and field Web Vitals when traffic exists. Static source inspection cannot establish field performance. |

No external professional funnel was silently substituted with KAMEN's own route audit. No hospitality conversion rate, uplift, “best CTA,” or winning homepage sequence can be concluded from the present sources.
