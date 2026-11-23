Candidate catalog - evidence only; not executable requirements.

# Color wells: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/color-wells
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 0e20d3c830b8fb2a5a84704eaf8ffee48eb0ac851348284fa07e3b8c61a1a55b
Input words: 212. Candidate rule records: 4. Exclusion blocks: 4.
Original note: p075-color-wells/color-wells.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Color wells
URL: https://developer.apple.com/design/human-interface-guidelines/color-wells

Universal rules:
- MUST open a color picker when people tap or click a color well. | topic: Color wells | source: https://developer.apple.com/design/human-interface-guidelines/color-wells | why: The color well is the entry point for changing a color, so activating it must lead straight to choosing one. | check: 1440px and 390px reviewer proof: screenshot the color well before and after activation and show the picker open.
- MUST update the color well to show the newly selected color after people make a selection. | topic: Color wells | source: https://developer.apple.com/design/human-interface-guidelines/color-wells | why: People need immediate visual confirmation that their choice was applied. | check: 1440px and 390px reviewer proof: screenshot the well before and after picking a color and show the swatch changed.
- MUST give a color well a visible highlight while it is active. | topic: Color wells | source: https://developer.apple.com/design/human-interface-guidelines/color-wells | why: A visible active state confirms which control is currently being edited. | check: 1440px and 390px reviewer proof: screenshot the well in its idle and active states and show the difference.
- MUST offer a color picker that lets people choose the color of the element, either the system-provided picker or a custom interface. | topic: Color wells | source: https://developer.apple.com/design/human-interface-guidelines/color-wells | why: The guideline allows either picker, but the chosen picker must still let people adjust the element's color. | check: not screenshot-checkable: the requirement is about picker function, which needs a manual interaction check rather than a static capture.

Apple-specific (excluded):
- Platform scope: no additional considerations for iOS, iPadOS, or visionOS, and color wells are not supported on tvOS or watchOS. Excluded because it names Apple platforms.
- macOS drag and drop, moving colors between color wells and from the color picker to a color well. Excluded because it is described as a macOS consideration.
- Built-in picker saves a set of colors reachable from any app. Excluded because it depends on the Apple system picker.
- Developer references: UIColorWell (UIKit), UIColorPickerViewController (UIKit), NSColorWell (AppKit). Excluded as Apple API names.

Persona and journey notes:
- Journey: a person sees a color value on an element, activates its color well, picks a color in the picker, then sees the well and element update. The rules above cover each step of that path.
- A person editing color in a design or content tool expects the change to be visible at once, so the well's swatch and active state must respond on the same interaction.

COVERAGE: Read the full file (one page, color-wells.md) from its title through its Resources section. Extracted 4 universal rules. Excluded 4 Apple-specific groups as listed above. No other sections exist in the file.
