Candidate catalog - evidence only; not executable requirements.

# Maps: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/maps
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: eb315012566f225efcf0a4430ac16bfd7ed9f5d65d31f7d554e5d700907fd579
Input words: 2247. Candidate rule records: 18. Exclusion blocks: 3.
Original note: p135-maps/maps.md.
Adopted source-linked rules: T-32

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Maps
URL: https://developer.apple.com/design/human-interface-guidelines/maps
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST support familiar map navigation when the map is interactive. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People can pan and zoom as expected. | check: Not screenshot-checkable: test supported pan, zoom and rotation.
- MUST choose map emphasis so custom information remains distinguishable. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People can read the data they need. | check: At 1440px and 390px, inspect custom overlays against the map.
- MUST provide search and useful categories when people need to find places. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People avoid scanning every point. | check: At 1440px and 390px, capture query, filter and result states.
- MUST clearly identify the selected map feature. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People know which location details refer to. | check: At 1440px and 390px, capture selected and unselected neighbors.
- MUST cluster overlapping points and reveal individual locations as zoom permits. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: Dense maps remain legible. | check: Not screenshot-checkable: zoom through dense data and capture cluster expansion.
- MUST keep annotations recognizable and concise. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: Small map markers remain readable. | check: At 1440px and 390px, inspect markers at their actual size.
- MUST make selectable map features distinct from custom annotations when their information differs. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People understand which item they selected. | check: At 1440px and 390px, compare feature and custom-point selection.
- MUST choose overlay layering deliberately for whether underlying geographic context should remain visible. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People can interpret the highlighted area. | check: At 1440px and 390px, inspect routes, labels and covered regions.
- MUST maintain contrast between custom controls and varied map content. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: Controls do not disappear into imagery. | check: At 1440px and 390px, capture controls over representative light and dark regions.
- MUST fit place details to available space without hiding the selected location. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People retain geographic context. | check: At 1440px and 390px, capture place cards at narrow and wide sizes.
- MUST avoid repeating place information already displayed nearby. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: Details do not crowd the map. | check: At 1440px and 390px, compare adjacent place content and card fields.
- MUST provide location cues when a place-detail entry appears outside the map. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People recognize that more location information is available. | check: At 1440px and 390px, inspect names, addresses and detail actions.
- MUST reveal indoor-map detail progressively with zoom. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: Overview and close-up remain readable. | check: At 1440px and 390px, capture wide and close zoom levels.
- MUST distinguish indoor feature types with labels or icons as well as color. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People can find relevant facilities. | check: At 1440px and 390px, inspect categories in grayscale.
- MUST provide a clear floor selector for multilevel venues. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People know which floor they are viewing. | check: At 1440px and 390px, capture floor selection and changed content.
- MUST include useful surrounding context and routes to nearby entry or transit points. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People can get into and out of the venue. | check: At 1440px and 390px, inspect nearby streets, entrances and transit routes.
- MUST limit indoor panning so people do not accidentally lose the venue. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People remain oriented. | check: Not screenshot-checkable: pan aggressively at different zoom levels.
- MUST fit key locations within a static map that cannot pan or zoom. | topic: Maps | source: https://developer.apple.com/design/human-interface-guidelines/maps | why: People see all relevant places without impossible interaction. | check: At 1440px and 390px, capture the smallest region containing all key points.
Apple-specific (excluded):
- Apple logo/legal link placement, 7/10-point padding and small-map exceptions.
- MapKit/MapKitJS styles, overlays, annotation APIs and place-card requirements.
- watchOS static-map behavior and five-annotation limit.
Persona and journey notes:
- People search for a place, compare details, change floors and navigate between a venue and surrounding transport.
COVERAGE:
- maps: read, 2248 words, 18 universal rules, 3 excluded
