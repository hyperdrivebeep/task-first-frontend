Candidate catalog - evidence only; not executable requirements.

# Sliders: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/sliders
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 63f68d02aa71095e661eebe565ef8f3e1f946fb6912211a1c74137a2e5dee756
Input words: 831. Candidate rule records: 8. Exclusion blocks: 3.
Original note: p081-sliders/sliders.md.
Adopted source-linked rules: C-42

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Sliders
URL: https://developer.apple.com/design/human-interface-guidelines/sliders
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST use slider decoration only when it communicates purpose or range. | topic: Sliders | source: https://developer.apple.com/design/human-interface-guidelines/sliders | why: Endpoints make the control understandable. | check: At 1440px and 390px, check icons or custom treatment against the value meaning.
- MUST place horizontal minimum at the leading end and maximum at the trailing end, with vertical minimum below maximum. | topic: Sliders | source: https://developer.apple.com/design/human-interface-guidelines/sliders | why: The value direction matches expectations. | check: At 1440px and 390px, capture endpoints including supported right-to-left layouts.
- MUST offer precise entry when a broad slider range makes an exact value difficult to select. | topic: Sliders | source: https://developer.apple.com/design/human-interface-guidelines/sliders | why: People can reach an intended exact value. | check: At 1440px and 390px, capture corresponding value field or step control; test exact entry.
- MUST provide live result feedback when slider changes can be previewed. | topic: Sliders | source: https://developer.apple.com/design/human-interface-guidelines/sliders | why: People can judge an adjustment as they make it. | check: Not screenshot-checkable: record a drag and its changing result; capture intermediate and settled values at 1440px and 390px.
- MUST match slider form to a bounded range or repeating/circular value. | topic: Sliders | source: https://developer.apple.com/design/human-interface-guidelines/sliders | why: The shape explains whether values stop or repeat. | check: At 1440px and 390px, inspect min/max semantics and finite or circular form.
- MUST label a slider when its meaning is not self-evident. | topic: Sliders | source: https://developer.apple.com/design/human-interface-guidelines/sliders | why: People know which property changes. | check: At 1440px and 390px, read its label and endpoint symbols.
- MUST use tick marks when locating particular values is important. | topic: Sliders | source: https://developer.apple.com/design/human-interface-guidelines/sliders | why: People can select values accurately. | check: At 1440px and 390px, capture the scale and target value.
- MUST label endpoints or intermediate ticks when the scale needs explanation, especially on nonlinear scales. | topic: Sliders | source: https://developer.apple.com/design/human-interface-guidelines/sliders | why: People do not infer a false linear relationship. | check: At 1440px and 390px, compare labels with actual scale values.
Apple-specific (excluded):
- System volume view requirement for iOS and iPadOS.
- macOS slider thumb shapes, platform availability and visionOS horizontal preference.
- watchOS side buttons and platform-specific glyph defaults.
Persona and journey notes:
- A person adjusts a property, previews its effect and may need an exact numeric value.
COVERAGE:
- sliders: read, 832 words, 8 universal rules, 3 excluded
