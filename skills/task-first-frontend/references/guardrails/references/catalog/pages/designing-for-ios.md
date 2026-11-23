Candidate catalog - evidence only; not executable requirements.

# Designing for iOS: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ios
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 06574cacc05eea33594fa80b1dc44fb0ed890075cba6c93dd909c0b3283e8c6b
Input words: 460. Candidate rule records: 11. Exclusion blocks: 5.
Original note: p021-designing-for-ios/designing-for-ios.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Designing for iOS
URL: https://developer.apple.com/design/human-interface-guidelines/designing-for-ios
Universal rules:
- MUST limit onscreen controls so people can concentrate on primary tasks and content | topic: control density | source: Best practices, bullet 1 | why: fewer visible controls keep attention on primary tasks and content | check at 1440px and 390px: count visible controls beside the primary content and confirm the primary content is the most prominent element at both widths
- MUST make secondary details and actions discoverable with minimal interaction | topic: secondary disclosure | source: Best practices, bullet 1 | why: secondary content stays reachable without crowding the primary view | check at 1440px and 390px: confirm each secondary detail or action is reachable within minimal interaction from the primary view at both widths
- MUST adapt the layout to device orientation changes | topic: orientation | source: Best practices, bullet 2; Ergonomics paragraph | why: people switch between landscape and portrait orientations as they use the device | check at 1440px and 390px: rotate or resize the viewport in both orientations and confirm content reflows without clipping at both widths
- MUST adapt the appearance to Dark Mode | topic: color appearance | source: Best practices, bullet 2 | why: people choose light or dark appearance and expect the interface to follow | check at 1440px and 390px: switch to dark appearance and confirm text and control contrast stay legible at both widths
- MUST adapt text to the text-size setting people choose | topic: text scaling | source: Best practices, bullet 2 | why: people choose the text size that works best for them | check at 1440px and 390px: set the largest text size and confirm no text is truncated or overlapping at both widths
- MUST let people choose the appearance and text configurations that work best for them | topic: user choice of configuration | source: Best practices, bullet 2 | why: people know which configuration suits them | check at 1440px and 390px: confirm each configuration option is reachable and applies at both widths
- MUST place controls people need to reach in the middle or bottom area of the display | topic: reach and hold ergonomics | source: Best practices, bullet 3; Ergonomics paragraph | why: controls in the middle or bottom area are easier to reach when the device is held in one or both hands | check at 1440px and 390px: confirm frequently used controls sit in the middle or bottom band at 390px and keep the same placement logic at 1440px
- MUST support swipe gestures to navigate back | topic: back navigation gesture | source: Best practices, bullet 3 | why: a swipe is easier to perform than reaching for a back control | check at 1440px and 390px: confirm a swipe from the edge returns to the previous screen at 390px and a visible back control exists at 1440px
- MUST support swipe gestures to initiate actions in a list row | topic: list row actions | source: Best practices, bullet 3 | why: row actions are reachable without a separate control | check at 1440px and 390px: confirm a swipe on a list row reveals actions at 390px and the same actions have a visible affordance at 1440px
- MUST use information from platform capabilities only with people's permission | topic: permission for platform data | source: Best practices, bullet 4 | why: people control access to location, payments, and biometric data | check at 1440px and 390px: confirm a permission request appears before platform data is read at both widths
- MUST NOT ask people to enter data that platform capabilities can provide | topic: data entry avoidance | source: Best practices, bullet 4 | why: entering data the device already has adds friction | check at 1440px and 390px: confirm no form field duplicates data the platform provides at both widths
Apple-specific (excluded):
- iPhone form factor and medium-size high-resolution display
- Gyro and accelerometer input and spatial interactions
- Widgets, home-screen quick actions, searching, Siri Shortcuts and suggestions, and activity views
- Named Apple terms Dynamic Type and Dark Mode (concepts kept as universal rules)
- Multi-Touch gesture and virtual keyboard specifics
Persona and journey notes:
- Short sessions: people spend a minute or two checking updates, tracking data, or sending messages.
- Long sessions: people may spend an hour or more browsing, playing games, or enjoying media.
- Multitasking: people keep several apps open and switch among them frequently.
- Mobile context: people use the device on the go, usually in one or both hands, at a viewing distance of a foot or two.
COVERAGE: 11 universal rules extracted from Best practices bullets 1-4 and the Ergonomics paragraph; device characteristics and app interactions paragraphs used for persona notes; system features list and Resources section had no universal guideline text beyond the Apple-specific exclusions.
