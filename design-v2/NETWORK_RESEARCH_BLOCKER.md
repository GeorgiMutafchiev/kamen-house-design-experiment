# Real-Web Research Blocker

Status: HISTORICAL LIVE-WEB CHANNEL FAILURE — architecture superseded
Date: 2026-10-04

## What was fixed

After the owner enabled Internet access, direct HTTPS requests began reaching the environment proxy. Chromium initially rejected the proxy certificate with `net::ERR_CERT_AUTHORITY_INVALID`. The environment-provided certificate at `/usr/local/share/ca-certificates/environment-proxy-ca.crt` was verified, and Chromium was launched with a scoped SPKI trust pin for that exact CA:

`n9jEr2dCP1tg9exQzr7xEpZ4TjG2QWO02LUFhmAzII4=`

This did not disable TLS globally. With the scoped pin, real Chromium navigations returned HTTP 200 for Ace Hotel and Aesop and exposed rendered page content.

## Initial reachability only

The hospitality research process also confirmed HTTP 200 and rendered operating-navigation text for these homepages before the tunnel failed:

- `https://www.heckfieldplace.com/`
- `https://fogoislandinn.ca/`
- `https://hotelcorazon.com/`
- `https://www.masseriamoroseta.it/`
- `https://www.villa-lena.it/`
- `https://casabonay.com/`
- `https://www.hotelsinnombre.com/`
- `https://thecalilehotel.com/`

These checks establish only that real sites initially loaded. They are not counted as completed reference inspections because desktop/mobile comparison, interior pages, navigation behavior, scrolling rhythm, and visual analysis were not completed.

## Global failure

During deeper inspection the shared HTTPS tunnel began returning HTTP 503 for every destination, including `https://example.com/`:

```text
upstream connect error or disconnect/reset before headers.
reset reason: remote connection failure,
transport failure reason: immediate connect error: Invalid argument
remote address: envoy://cloudflare_https_tunnel/
```

The failure was reproduced independently by:

- system `curl` with the system CA bundle: HTTP 503;
- a new system Chromium process with the scoped CA pin: HTTP 503;
- a single serialized research agent after every other browser agent was paused;
- persistent and fresh Chromium contexts;
- sandboxed and escalated runs;
- short and extended cooldowns.

## Consequence

The earlier owner rule made this outage a stop for all research. A later explicit owner instruction superseded that prerequisite and authorized `design-intelligence/`: live browsing now degrades independently, while structured sources, curated galleries when available, human-supplied references, and local evidence may continue. No memory-based reference claim is permitted. Design synthesis is still blocked unless the combined coverage gate is met.
