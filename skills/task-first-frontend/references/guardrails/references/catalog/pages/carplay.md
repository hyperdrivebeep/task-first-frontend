Candidate catalog - evidence only; not executable requirements.

# CarPlay: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/carplay
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 63992a112029b3a26ced9420c15c0ff4a7383eb744a027a66d9389f461dc5973
Input words: 1300. Candidate rule records: 11. Exclusion blocks: 3.
Original note: p125-carplay/carplay.md.
Adopted source-linked rules: T-23

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## CarPlay
URL: https://developer.apple.com/design/human-interface-guidelines/carplay
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST minimize interaction and prioritize quick tasks in driving contexts. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: People can stay focused on the road. | check: At 1440px and 390px, inspect the complete driving task and number of required actions.
- MUST complete setup before driving and avoid requiring the companion phone while in motion. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: People do not need to handle a second device. | check: Not screenshot-checkable: use the driving surface with the phone inaccessible and locked.
- MUST keep the driving experience usable when a companion device requests input. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: An unrelated prompt does not block essential use. | check: Not screenshot-checkable: trigger companion-device prompts while the driving surface is active.
- MUST let people choose audio playback except an appropriate continuation of previous playback. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: Incidental audio does not displace their chosen source. | check: Not screenshot-checkable: launch and navigate without requesting playback.
- MUST begin audio once enough media is available without waiting for descriptive metadata. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: People receive the requested playback promptly. | check: Not screenshot-checkable: delay metadata independently from audio and observe startup.
- MUST preserve the distinction between temporary and permanent audio interruptions. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: Only expected playback resumes. | check: Not screenshot-checkable: test temporary interruption and explicit replacement by another source.
- MUST leave overall output volume under user control. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: Automatic mixing does not override their choice. | check: Not screenshot-checkable: inspect volume during independent audio mixing changes.
- MUST use a clean consistent layout with prominent actionable primary content for driving. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: People can scan quickly from their seat. | check: At 1440px and 390px, inspect priorities and repeated controls from intended viewing position.
- MUST distinguish actionable elements clearly from static information. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: People know where interaction is available. | check: At 1440px and 390px, inspect visual and semantic action cues.
- MUST verify driving UI in daylight, night and supported light/dark appearances on the intended display. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: Sunlight and darkness do not defeat legibility. | check: Not screenshot-checkable from a desktop alone: inspect real vehicle lighting; attach representative captures.
- MUST report necessary driving-task errors on the current surface without directing people to a phone. | topic: CarPlay | source: https://developer.apple.com/design/human-interface-guidelines/carplay | why: People can understand problems without unsafe device switching. | check: At 1440px and 390px, capture error states and permitted recovery.
Apple-specific (excluded):
- CarPlay system templates, supported categories, HomeView reuse and iPhone connection model.
- Specific resolution tables, upper-half placement guidance and 2x/3x artwork requirements.
- Apple icon matching, exact icon sizes and background rules.
Persona and journey notes:
- A driver has limited attention and may have a locked phone in a bag or trunk.
COVERAGE:
- carplay: read, 1301 words, 11 universal rules, 3 excluded
