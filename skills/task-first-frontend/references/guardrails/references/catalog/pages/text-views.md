Candidate catalog - evidence only; not executable requirements.

# Text views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/text-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 5f8d3924ebd29e2269d49713014ef9100f6adb1f24ea2daeef37f11eb724467d
Input words: 372. Candidate rule records: 12. Exclusion blocks: 5.
Original note: p033-text-views/text-views.md.
Adopted source-linked rules: C-28

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Text views
URL: https://developer.apple.com/design/human-interface-guidelines/text-views
Universal rules:
- MUST align multiline text to the leading edge by default. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: people start reading each line from the same predictable edge | check: at 1440px and 390px the first character of a multiline paragraph sits on the leading edge (left in LTR layouts)
- MUST render multiline body text in the default primary text color unless deliberate emphasis needs another color. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: body text stays easy to read and does not look like a link or a warning by accident | check: at 1440px and 390px the body text uses the primary text color, not an accent or status color
- MUST allow a multiline text area to be any height the layout needs. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: long content fits the space it is given instead of being squeezed into a fixed box | check: set the area to a short and a tall height; at 1440px and 390px the box renders at each height without clipping its frame
- MUST scroll the content inside a multiline text area when the text extends beyond its visible region. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: people can reach all of the text instead of losing the part that does not fit | check: fill the area with text about three times its height; at 1440px and 390px a scroll affordance is visible and scrolling reveals the hidden lines
- MUST use a multiline text view only for text that is long, editable, or in a special format. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: people get the simplest control that fits the content and avoid a heavy box for a short phrase | check: not screenshot-checkable: the choice of control depends on the content's intent and editability, not on pixels alone
- MUST show a short amount of non-editable text as a plain label without an input border or caret. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: people do not mistake read-only text for a field they can type into | check: at 1440px and 390px a short read-only string shows no input border, no caret, and no field background
- MUST show a short amount of editable text as a single-line text field. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: people can see at a glance that the value is editable and where to type it | check: at 1440px and 390px a short editable value shows an input border or field background and a visible caret when focused
- MUST keep text readable when it mixes multiple fonts, colors, and alignments. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: creative styling does not cost people the ability to read the content | check: at 1440px and 390px no text overlaps, blurs, or drops below its background contrast in a mixed-style sample
- MUST let text grow and shrink with the person's preferred text size setting. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: people who need larger text can read the content without the layout breaking | check: raise the text size setting to its largest value; at 1440px and 390px the text enlarges, wraps, and does not clip or overlap neighboring elements
- MUST test text content with bold text and other accessibility text settings turned on before release. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: people who use bold or larger text get a layout that still works | check: turn on bold text and the largest text size; capture at 1440px and 390px and confirm no text is clipped or overlapped
- MUST make useful reference text such as error messages, serial numbers, and IP addresses selectable so people can copy it. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: people can paste an error or identifier into a support request or another app without retyping it (the HIG phrases this as "consider", so treat it as a strong default) | check: at 1440px and 390px select an error message or ID in the screenshot state and confirm a selection highlight appears
- MUST offer the input method that fits the content type when a person is editing text, such as a numeric input for numbers. | topic: Text views | source: https://developer.apple.com/design/human-interface-guidelines/text-views | why: people enter data faster and with fewer mistakes when the input matches what they type | check: not screenshot-checkable: the input mode is set in code and shows only when the field is focused; verify by focusing the field in a 390px emulator and reading the input type
Apple-specific (excluded):
- iOS, iPadOS, and visionOS show the on-screen keyboard when a person selects an editable text view.
- iOS and iPadOS named keyboard types, covered in the virtual-keyboards guidance.
- tvOS uses text fields for editable text instead of text views.
- Dynamic Type is the Apple name for the text-size setting; the concept is kept in the text-size rule above.
- Apple components and frameworks named in resources: labels, text fields, combo boxes, SwiftUI Text, UITextView, NSTextView.
Persona and journey notes:
- none
COVERAGE:
- text-views: read, about 350 words, 12 universal rules, 5 excluded
