Candidate catalog - evidence only; not executable requirements.

# Text fields: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/text-fields
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: c54a40ea4e405d47f84519813a95f88ed69cd17795b484cefe0a13c3730096c6
Input words: 825. Candidate rule records: 14. Exclusion blocks: 2.
Original note: p083-text-fields/text-fields.md.
Adopted source-linked rules: P-10, C-45

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Text fields
URL: https://developer.apple.com/design/human-interface-guidelines/text-fields
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST use a short text field for short values and a multiline control for longer passages. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: The input fits the amount of information. | check: At 1440px and 390px, inspect expected and long values in the chosen control.
- MUST provide a purpose hint and retain sufficient field context after typing hides the placeholder. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People can remember which value they are editing. | check: At 1440px and 390px, capture empty and populated fields with their purpose still evident.
- MUST mask private text such as passwords. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: Observers cannot read secrets. | check: At 1440px and 390px, enter synthetic sensitive text and inspect masking.
- MUST size fields to the expected amount of text where practical. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: Field size communicates expected input. | check: At 1440px and 390px, compare short and long expected values with visible field widths.
- MUST space and align related fields so each label clearly belongs to its input. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People do not enter data in the wrong field. | check: At 1440px and 390px, inspect stacked fields, consistent widths and label proximity.
- MUST move keyboard focus through fields in a logical sequence. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People can complete the form efficiently. | check: Not screenshot-checkable: Tab through the form, recording order and focus frames at 1440px and 390px.
- MUST validate input at a task-appropriate time and explain invalid values. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People can correct mistakes without premature interruption. | check: Not screenshot-checkable: enter invalid email and account values; test validation timing and capture resulting feedback at 1440px and 390px.
- MUST format numeric input for its value type and locale. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People can interpret quantities, currency and decimals. | check: At 1440px and 390px, capture two supported locales and verify resulting numeric values separately.
- MUST choose wrapping or truncation deliberately and provide access to the full value when it is hidden. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People can inspect longer input. | check: At 1440px and 390px, capture the longest expected input and its expanded or editable full value.
- MUST show an input keyboard suited to the requested data. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People can enter numbers, URLs and email with fewer errors. | check: Not screenshot-checkable from desktop alone: focus each field on a real or emulated mobile device; capture the relevant keyboard and the 1440px field state.
- MUST minimize typing on devices where text entry is slow. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People avoid unnecessary effort. | check: At 1440px and 390px, walk the constrained-input journey and compare choices with required text entry.
- MUST provide a clear action when repeated deletion would otherwise burden text entry. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People can replace a value quickly. | check: At 1440px and 390px, capture the clear control and its cleared result.
- MUST distinguish purpose indicators from supplementary field actions. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People understand the field and its extra controls. | check: At 1440px and 390px, inspect leading purpose indicators and trailing actions.
- MUST offer relevant predefined choices alongside text input when the task permits them. | topic: Text fields | source: https://developer.apple.com/design/human-interface-guidelines/text-fields | why: People can enter common values quickly. | check: At 1440px and 390px, capture the choice list and custom-entry path.
Apple-specific (excluded):
- SwiftUI, UIKit and AppKit secure-field/formatter implementation.
- Platform-specific system buttons and watchOS/tvOS availability conventions.
Persona and journey notes:
- A person enters a small value, moves between fields, corrects validation errors and may use a slow input device.
COVERAGE:
- text-fields: read, 826 words, 14 universal rules, 2 excluded
