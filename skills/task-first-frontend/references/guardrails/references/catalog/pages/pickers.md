Candidate catalog - evidence only; not executable requirements.

# Pickers: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/pickers
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 5c9315364d7a08feb54f5fbc7c32ea79f70e852bf0c0ee9f4dfd7f129ed31563
Input words: 887. Candidate rule records: 6. Exclusion blocks: 3.
Original note: p079-pickers/pickers.md.
Adopted source-linked rules: C-40

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Pickers
URL: https://developer.apple.com/design/human-interface-guidelines/pickers
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST choose a selection control appropriate to the number of options. | topic: Pickers | source: https://developer.apple.com/design/human-interface-guidelines/pickers | why: Short lists avoid excess weight and very long lists remain navigable. | check: At 1440px and 390px, compare the option count with the chosen compact menu, picker or searchable/indexed list.
- MUST order picker values logically and predictably. | topic: Pickers | source: https://developer.apple.com/design/human-interface-guidelines/pickers | why: People can anticipate hidden values. | check: At 1440px and 390px, inspect the start, middle and end of the expanded values.
- MUST keep a picker near the field it edits when context can be preserved. | topic: Pickers | source: https://developer.apple.com/design/human-interface-guidelines/pickers | why: People do not lose the task while selecting. | check: At 1440px and 390px, capture the editing field with the open picker.
- MUST use time increments appropriate to the task; minute intervals must divide sixty evenly. | topic: Pickers | source: https://developer.apple.com/design/human-interface-guidelines/pickers | why: People choose useful values without unnecessary scrolling. | check: At 1440px and 390px, inspect the minute choices and verify the interval divides 60.
- MUST present dates and times in the relevant locale order. | topic: Pickers | source: https://developer.apple.com/design/human-interface-guidelines/pickers | why: People interpret the selected date correctly. | check: At 1440px and 390px, capture two supported locale formats with an unambiguous test date.
- MUST choose compact date entry for constrained space and calendar entry when browsing dates or ranges matters. | topic: Pickers | source: https://developer.apple.com/design/human-interface-guidelines/pickers | why: The entry method fits the available space and intention. | check: At 1440px and 390px, inspect the compact and calendar variants against the journey.
Apple-specific (excluded):
- Named system picker styles, supported modes and the 23-hour-59-minute countdown limit.
- SwiftUI, UIKit and AppKit APIs and platform availability.
- Digital Crown navigation, outlines and watchOS navigation-link behavior.
Persona and journey notes:
- Some people know an exact date; others browse dates or choose a range.
COVERAGE:
- pickers: read, 888 words, 6 universal rules, 3 excluded
