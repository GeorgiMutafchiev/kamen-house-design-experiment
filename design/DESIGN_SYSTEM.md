# Design System

Status: ACCEPTED BASELINE — Phase 4

## Type

- Display and narrative: Newsreader Variable, weights 430–460. Large titles use tight leading and negative tracking selectively.
- Navigation, facts, forms, captions: IBM Plex Sans Condensed, weights 400 and 600.
- Sentence case is standard. Labels remain functional and should never become decorative microcopy.

## Color

- Paper `#e9e5d8`; light paper `#f3f0e7`; ink `#17201c`.
- Moss `#34483d` for practical or grounding bands.
- Ember `#ad4e2f` for focus, selection, and small seasonal accents.
- Ochre `#c19543` for one information-led seasonal surface.

## Grid and width

Desktop uses 12 equal columns with fluid gutters and edge padding. Narrative/image spans pair with 2–4 column factual margins. Tablet preserves 12 logical columns but simplifies spans. Mobile recomposes to one reading flow while retaining the 12-column CSS grid for controlled insets.

## Spacing and rhythm

Page openings use generous space; room facts, menus, and directions become compact. Section depth is intentionally varied. There is no universal section height or card padding.

## Surfaces and controls

Surfaces are square and mostly flat. Rules express grouping. Links use visible underlines or baseline rules. Buttons are rectangular and typographic. Pills, glass surfaces, soft card fields, and icon-only primary actions are prohibited.

## Images

Four distances: approach, room whole, kitchen activity, and path detail. Current assets are generated concept studies and are labeled honestly. Images use decisive full-width or portrait crops; they do not form generic thumbnail grids.

## Forms

Labels stay visible. Native date/select controls remain usable. Required fields use HTML validation. The development inquiry also checks date order and explicitly states that it transmits nothing. Loading, error, and success states use live regions.

## Motion and focus

Image hover scale is limited to 1.012. No entrance choreography or scroll hijacking. `prefers-reduced-motion` collapses animations. Keyboard focus uses a 3px ember outline with 4px offset.

## Responsive rules

- Desktop: exposed primary navigation and factual margin columns.
- At 900px: sticky masthead, text-labeled menu, simplified spans.
- At 650px: single reading flow, facts before long prose, full-width images, 44px minimum controls, no essential horizontal scrolling.
- Room neighbour navigation becomes a clear two-column previous/next row with the inquiry action above.

## Shared behavior

The masthead, footer, page intro, concept image, register rows, factual definition lists, and text actions form the shared system. New pages should combine them according to content instead of duplicating one page silhouette.
