Candidate catalog - evidence only; not executable requirements.

# Right to left: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/right-to-left
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 26cf6891b474397c71c3682e065174cf12b716cdf504a213a5535c41f69a6df2
Input words: 1510. Candidate rule records: 27. Exclusion blocks: 5.
Original note: 03-foundations-b-2/right-to-left.md.
Adopted source-linked rules: F-35

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Right to left
URL: https://developer.apple.com/design/human-interface-guidelines/right-to-left

Universal rules:
- MUST adjust text alignment to match the interface direction when the layout does not do so automatically. | topic: text alignment direction | source: Text alignment | why: text must sit at the mirrored position in the right-to-left context | check: each left-aligned text item in LTR has a right-aligned counterpart in RTL when the layout does not mirror it.
- MUST align a paragraph (three or more lines of text) based on its language, not on the current context. | topic: paragraph alignment by language | source: Text alignment | why: right-aligning left-to-right text makes the beginning of each line hard to see | check: each paragraph of three or more lines aligns according to its own language.
- MUST continue aligning one- and two-line text blocks to match the reading direction of the current context. | topic: short text alignment by context | source: Text alignment | why: short text reads better when it follows the surrounding direction | check: one- and two-line text blocks follow the current context's reading direction.
- MUST use a consistent alignment for all text items in a list, including items displayed in a different script, by reversing all of them together. | topic: list alignment consistency | source: Text alignment | why: consistent alignment supports comfortable reading and scanning | check: every item in a list shares one alignment, including items in another script.
- MUST NOT reverse the order of digits within a specific number, such as a phone number, a credit card number, or "541". | topic: digit order in numbers | source: Numbers and characters | why: the digits of a specific number always appear in the same order | check: numbers such as phone and card numbers render with digits in their original order in RTL.
- MUST reverse the order of numerals that show progress or counting direction when the control they belong to is flipped, and MUST NOT flip the numerals themselves. | topic: progress numeral order | source: Numbers and characters | why: numerals on progress controls must match the flipped direction of the control | check: progress, slider, and rating numerals run in the same direction as the flipped control, with each numeral's glyph unchanged.
- MUST reverse a sequence of numerals when the sequence communicates a specific order. | topic: ordered numeral sequence | source: Numbers and characters | why: a reversed sequence keeps its intended meaning in RTL | check: any numeral sequence used for order is shown in the RTL direction.
- MUST identify the appropriate way to display number-centric information for each supported locale when the app covers mathematical or other number-centric topics. | topic: locale-specific number display | source: Numbers and characters | why: RTL languages use different number systems, and the source calls this a good idea for number-centric apps | check: each supported RTL locale has a chosen numeral system for number-centric content.
- MUST flip controls that show progress from one value to another, such as sliders and progress indicators, in the RTL context. | topic: flip progress controls | source: Controls | why: people read forward progress in the same direction as their language | check: each progress-type control runs right to left in RTL.
- MUST reverse the positions of the glyphs or images that depict the beginning and ending values of a flipped control. | topic: flip control endpoint glyphs | source: Controls | why: endpoint depictions must match the flipped control | check: start and end glyphs or images of each flipped control swap sides in RTL.
- MUST flip controls that help people navigate or access items in a fixed order, such as back, next, and previous buttons. | topic: flip navigation controls | source: Controls | why: the flow of screens and items must match the reading order of the language | check: back, next, and previous controls point in the RTL reading direction.
- MUST NOT flip a control that refers to an actual direction or points to an onscreen area. | topic: keep directional controls | source: Controls | why: a control meaning "to the right" must always point right | check: directional controls keep their absolute direction in both contexts.
- MUST visually balance adjacent Latin and RTL scripts when necessary, such as increasing the RTL font size by about 2 points next to all-capital Latin text in buttons, labels, and titles. | topic: script balance | source: Controls | why: Arabic and Hebrew have no uppercase letters and can look too small beside all-capital Latin text | check: RTL text next to all-caps Latin in buttons, labels, and titles appears visually balanced.
- MUST NOT flip photographs, illustrations, or general artwork. | topic: no image flipping | source: Images | why: flipping an image often changes its meaning, and flipping a copyrighted image could be a violation | check: no photograph, illustration, or general artwork is mirrored for RTL.
- MUST create a new version of an image instead of flipping the original when the image's content is strongly connected to reading direction. | topic: new version for direction-bound images | source: Images | why: a mirrored original can change meaning or infringe rights | check: direction-bound images have a separately created RTL version.
- MUST reverse the positions of images when their order is meaningful, such as chronological, alphabetical, or favorite order. | topic: image order reversal | source: Images | why: reversing keeps the order's meaning in RTL | check: ordered image sets run right to left in RTL.
- MUST flip interface icons that represent text or reading direction, such as left-aligned bars that stand for text. | topic: flip text-direction icons | source: Interface icons | why: such icons must match the RTL reading direction | check: text-representing and reading-direction icons are mirrored in RTL.
- MUST consider creating a localized version of an interface icon that displays text or letters for a script-related concept. | topic: localized text icons | source: Interface icons | why: icon text must match the script the person reads | check: each icon with script-specific text has a version for each supported script, or the decision is recorded.
- MUST consider designing an alternative image without text for an interface icon that uses letters or words to convey a concept unrelated to reading or writing. | topic: text-free icon alternatives | source: Interface icons | why: text-based icons for unrelated concepts are hard to localize | check: such icons are reviewed for a text-free alternative.
- MUST flip an interface icon that shows forward or backward motion so that the motion matches the RTL reading direction. | topic: flip motion icons | source: Interface icons | why: people read motion that moves with the reading direction as forward | check: an icon showing a speaker's sound waves, or any other motion, points in the RTL forward direction.
- MUST NOT flip logos or universal signs and marks, such as the checkmark, even when a logo includes text. | topic: no flipping of logos and universal marks | source: Interface icons | why: a flipped logo confuses people and can have legal consequences, and universal marks must look consistent | check: logos and universal marks render in their original form in every direction.
- MUST NOT flip interface icons that depict real-world objects unless the object itself indicates directionality. | topic: keep object icons unflipped | source: Interface icons | why: familiar objects such as clocks work the same in every language | check: object icons such as clocks look identical in LTR and RTL unless the object shows direction.
- MUST consider the individual components and overall visual balance of a complex custom interface icon before flipping it. | topic: complex icon balance | source: Interface icons | why: some components must not flip, and flipping can unbalance the icon | check: complex custom icons are reviewed component by component for flip safety and balance.
- MUST flip a badge that represents actual UI when that UI flips. | topic: flip UI-representing badges | source: Interface icons | why: the badge must match the flipped interface it depicts | check: badges that stand for on-screen UI move with that UI in RTL.
- MUST consider whether flipping a badge that modifies an icon's meaning still preserves the modified meaning and the icon's visual balance. | topic: badge meaning and balance | source: Interface icons | why: a badge in the wrong corner can unbalance the icon | check: each modifying badge is checked for meaning and balance in both directions.
- MUST preserve the orientation of a tool component that implies handedness while flipping the base image when necessary. | topic: preserve tool orientation | source: Interface icons | why: flipping a right-handed tool is unnecessary and may confuse people | check: tool components keep their orientation while the base image flips when needed.
- MUST keep a component that must follow a visual design language regardless of localization, such as a slash, badge, or magnifying glass, consistent across directions. | topic: fixed-language components | source: Interface icons | why: such components signal the same meaning in every language | check: fixed-language components are not mirrored with the rest of the icon.

Apple-specific (excluded):
- System-provided UI frameworks flipping components by default, and the statement that standard layouts need no changes.
- SF Symbols: RTL variants, localized Arabic and Hebrew symbols, the signature, rich-text, and I-beam symbols, and the backslash example.
- Custom SF Symbols directionality and the custom-sf-symbols developer reference.
- Preparing-views-for-localization (SwiftUI developer reference), the Related links (layout, inclusion, sf-symbols), and the Videos section.
- Platform considerations note: "No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS."

Persona and journey notes:
- People who read right-to-left scripts expect screen flow, back and next controls, and ordered content to follow their reading order.
- Users who choose an RTL language for the device or app expect the interface to adapt in several ways, so adaptation should cover alignment, controls, icons, and numbers together.

COVERAGE: Full page read, including the introduction, Text alignment, Numbers and characters, Controls, Images, Interface icons, Platform considerations, and Resources. 27 universal rules extracted.
