Candidate catalog - evidence only; not executable requirements.

# Labels: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/labels
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: b667de9698fc8a60778e0080b08b9964151ac72032970a6b3c79c18b6902350b
Input words: 592. Candidate rule records: 13. Exclusion blocks: 5.
Original note: p040-labels/labels.md.
Adopted source-linked rules: C-26

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Labels
URL: https://developer.apple.com/design/human-interface-guidelines/labels
Universal rules:
- MUST use a label only for a small amount of text that people do not need to edit. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: people can tell at a glance which text is fixed information and which they can change | check: at 1440px and 390px the label text shows no input border, caret or field styling
- MUST use a single-line input field, not a label, when people need to edit a small amount of text. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: people see right away that the text can be changed and where to type it | check: at 1440px and 390px the editable value sits inside a visible input field with an edit affordance
- MUST NOT display a large amount of text in a label; use a text view that can hold and scroll it. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: long text stays readable and does not overflow or get cut off | check: at 1440px and 390px a long paragraph in the text view wraps or scrolls and no text is clipped
- MUST keep label text legible when its font is customized or its text style is adjusted. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: people can read the text without squinting or guessing | check: at 1440px and 390px the customized text is fully readable against its background with no overlap or truncation
- MUST use the platform's default system font for label text unless a custom font keeps the text legible. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: text looks familiar and matches the rest of the interface | check: at 1440px and 390px label text uses the same font family as other system text on the page
- MUST show primary information in the strongest text color so it stands out from supplemental text. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: people find the main information first | check: at 1440px and 390px the primary text is visibly darker or brighter than secondary text on the same screen
- MUST show subheadings and supplemental text in a secondary text color that is visibly weaker than primary text. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: supporting detail is available without competing with the main content | check: at 1440px and 390px subheadings and captions are visibly lighter than the primary text beside them
- MUST show text that describes an unavailable item or behavior in the tertiary text color, the dimmest level used for readable text. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: people see at once that something cannot be used right now | check: at 1440px and 390px disabled item descriptions are visibly dimmer than available item text
- MUST reserve the faintest text color for watermark text. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: decorative text does not get mistaken for content people need | check: at 1440px and 390px the faintest text appears only as watermark-style decoration and carries no required information
- MUST let people select and copy label text that holds useful information, such as an error message, a location or an IP address. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: people can paste the information into another app or a support request | check: not screenshot-checkable: needs a text selection action; select the error text at 1440px and 390px and confirm it highlights and copies
- MUST write a button label that says what the button does, such as Edit, Cancel or Send. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: people know the result of a tap before they press it | check: at 1440px and 390px every button shows a verb or action phrase that names its outcome
- MUST give each list item a text label that describes the item, even when a symbol or image is shown beside it. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: people can tell items apart without relying only on icons | check: at 1440px and 390px every list row shows a readable text label next to its icon or image
- MUST show label text that tells people what they can do next in the current view. | topic: Labels | source: https://developer.apple.com/design/human-interface-guidelines/labels | why: people understand where they are and what to do without guessing | check: at 1440px and 390px each view has visible label text that introduces its controls or names its main task
Apple-specific (excluded):
- watchOS date and timer text components that auto-format, auto-fit and self-update the displayed time.
- watchOS complications guidance for placing date and timer components.
- Developer notes naming SwiftUI Label and Text, UIKit UILabel, and AppKit NSTextField isEditable.
- Apple's named system label colors (label, secondaryLabel, tertiaryLabel, quaternaryLabel) and their platform API names.
- Dynamic Type support on Apple platforms enabled by default for labels.
Persona and journey notes:
- People read labels to understand the current context and what they can do next, so label text should answer those two questions in place.
- People copy useful label content such as error messages, locations and IP addresses to paste elsewhere.
COVERAGE:
- labels: read, approx 800 words, 13 universal rules, 5 excluded
