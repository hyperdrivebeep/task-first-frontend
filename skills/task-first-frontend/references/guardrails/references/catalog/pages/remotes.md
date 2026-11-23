Candidate catalog - evidence only; not executable requirements.

# Remotes: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/remotes
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 4c4b7a89174c9dba1746ce3e4692afb3cb0ca692dc9f67939e643fbd4dd133f9
Input words: 997. Candidate rule records: 8. Exclusion blocks: 3.
Original note: p117-remotes/remotes.md.
Adopted source-linked rules: I-22

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Remotes
URL: https://developer.apple.com/design/human-interface-guidelines/remotes
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST preserve standard remote gestures for standard actions. | topic: Remotes | source: https://developer.apple.com/design/human-interface-guidelines/remotes | why: People can navigate without relearning. | check: Not screenshot-checkable: test standard navigation, activation and playback gestures.
- MUST move directional focus consistently with the navigation gesture. | topic: Remotes | source: https://developer.apple.com/design/human-interface-guidelines/remotes | why: People can predict the next target. | check: Not screenshot-checkable: navigate every adjacent focus direction.
- MUST provide clear feedback for remote gestures. | topic: Remotes | source: https://developer.apple.com/design/human-interface-guidelines/remotes | why: People know where an action will occur. | check: At 1440px and 390px, capture focus and gesture feedback.
- MUST introduce custom remote gestures only when the task justifies learning them. | topic: Remotes | source: https://developer.apple.com/design/human-interface-guidelines/remotes | why: People avoid hidden interaction rules. | check: At 1440px and 390px, inspect the gesture purpose and discovery cues.
- MUST distinguish deliberate activation from incidental touch on a remote. | topic: Remotes | source: https://developer.apple.com/design/human-interface-guidelines/remotes | why: Handling the remote does not accidentally act. | check: Not screenshot-checkable: tap/rest/move the remote during playback and compare deliberate presses.
- MUST use positional taps only when their directional meaning is intuitive. | topic: Remotes | source: https://developer.apple.com/design/human-interface-guidelines/remotes | why: People understand tap location effects. | check: Not screenshot-checkable: test edge taps in their intended task.
- MUST make play and pause controls perform the corresponding media action. | topic: Remotes | source: https://developer.apple.com/design/human-interface-guidelines/remotes | why: People retain expected playback control. | check: Not screenshot-checkable: test playing, paused and resumed states.
- MUST match program-guide navigation and channel controls to the current viewing context. | topic: Remotes | source: https://developer.apple.com/design/human-interface-guidelines/remotes | why: People can browse a guide or change channels predictably. | check: Not screenshot-checkable: exercise guide and channel controls in both contexts.
Apple-specific (excluded):
- Siri Remote hardware, gesture inertia and exact button mapping.
- tvOS Back-to-parent versus game pause-menu behavior and Home Screen exit.
- Apple-specific EPG fallback routing and compatible remote conventions.
Persona and journey notes:
- People operate a distant screen and may accidentally touch the remote while picking it up or passing it.
COVERAGE:
- remotes: read, 998 words, 8 universal rules, 3 excluded
