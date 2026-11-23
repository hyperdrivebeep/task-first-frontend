Candidate catalog - evidence only; not executable requirements.

# Apple Pencil and Scribble: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 4d7b26191042b330ac31658a58ca1a96cfc0e7ca4ce5966aefc687e1102f659e
Input words: 2142. Candidate rule records: 18. Exclusion blocks: 4.
Original note: p111-apple-pencil-and-scribble/apple-pencil-and-scribble.md.
Adopted source-linked rules: I-15, I-16

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Apple Pencil and Scribble
URL: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST support familiar marking-tool actions when pen input is offered. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People can write or annotate where the task suggests. | check: Not screenshot-checkable: try natural marking locations including document margins.
- MUST let a pen operate relevant controls without requiring a switch to finger input. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People do not mistake unsupported controls for failure. | check: Not screenshot-checkable: finish the marking task using the pen alone.
- MUST start a mark immediately when the pen contacts a drawing surface. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: Drawing feels direct. | check: Not screenshot-checkable: measure contact-to-mark behavior without extra mode selection.
- MUST map pressure and orientation to intuitive continuous marking properties when supported. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People can control expressive strokes. | check: Not screenshot-checkable: vary supported pressure, tilt and orientation and compare stroke results.
- MUST show immediate feedback at the point the pen manipulates. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: The action stays connected to its result. | check: Not screenshot-checkable: record contact and resulting content together.
- MUST keep controls usable for both left- and right-handed drawing. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: Hands do not obscure essential actions. | check: At 1440px and 390px, inspect both hand positions, allowing repositioning where needed.
- MUST make pen hover predict the next mark without unnecessary height-driven variation. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People can anticipate the result. | check: Not screenshot-checkable: compare hover at different heights with the actual mark.
- MUST NOT execute an action merely because the pen hovers near the display. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: Imprecise hover does not cause accidental edits. | check: Not screenshot-checkable: hover without contact over every action and confirm no mutation.
- MUST preview dynamic marks with a visible representative value rather than an unreadable extreme. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: The preview remains useful. | check: At 1440px and 390px, compare minimum, typical and maximum brush previews.
- MUST keep contextual marking tools near the current work when practical. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People avoid moving their hand away. | check: At 1440px and 390px, capture a contextual tool menu at different canvas positions.
- MUST respect configured pen shortcuts when their meanings apply. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People retain learned behavior. | check: Not screenshot-checkable: set supported shortcut preferences and exercise each.
- MUST make custom pen shortcuts discoverable and opt-in. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People know when behavior differs. | check: Not screenshot-checkable: inspect default and selected custom modes and their labels.
- MUST keep accidental pen shortcuts nondestructive and reversible. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: An unintended gesture does not lose work. | check: Not screenshot-checkable: trigger supported shortcuts and verify recovery.
- MUST keep handwriting input free of distracting autocomplete and overlapping placeholders. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People can see what they are writing. | check: Not screenshot-checkable: record handwriting with suggestion and placeholder states.
- MUST keep a handwriting field stationary and avoid autoscrolling while writing or selecting. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: Input remains under the pen. | check: Not screenshot-checkable: write and select long content while recording field geometry and scroll.
- MUST provide sufficient handwriting space before writing starts or during a pause. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People avoid cramped input and moving targets. | check: At 1440px and 390px, capture pre-entry and paused layouts; verify no resizing mid-stroke.
- MUST preserve annotation visibility over existing content across theme changes. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: Markup remains meaningful on photos and documents. | check: At 1440px and 390px, compare annotations over the same source in supported themes.
- MUST retain undo and redo access in compact drawing layouts. | topic: Apple Pencil and Scribble | source: https://developer.apple.com/design/human-interface-guidelines/apple-pencil-and-scribble | why: People can recover from mistakes. | check: At 1440px and 390px, capture compact and wide toolbars and exercise undo/redo.
Apple-specific (excluded):
- Apple Pencil hardware compatibility and hover, double-tap, squeeze and barrel-roll mappings.
- Pencil Pro squeeze as a single quick action and barrel roll for marking only.
- Scribble password exclusions, blank-space recognition and UIKit APIs.
- PencilKit/PaperKit automatic colors and the Apple three-finger undo gesture.
Persona and journey notes:
- People sketch, annotate and enter handwriting while keeping a hand over the screen.
COVERAGE:
- apple-pencil-and-scribble: read, 2143 words, 18 universal rules, 4 excluded
