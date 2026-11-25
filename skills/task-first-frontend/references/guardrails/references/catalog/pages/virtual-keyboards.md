Candidate catalog - evidence only; not executable requirements.

# Virtual keyboards: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 623d88291a7215e160a6a564f588e3370df7de6ff6a694fff1c56bf42319a3f2
Input words: 1282. Candidate rule records: 8. Exclusion blocks: 3.
Original note: p085-virtual-keyboards/virtual-keyboards.md.
Adopted source-linked rules: I-12, I-13

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Virtual keyboards
URL: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST match keyboard and field semantics to the requested data. | topic: Virtual keyboards | source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards | why: Relevant keys reduce entry effort. | check: Not screenshot-checkable from desktop alone: focus data types on mobile; capture keyboards and the 1440px form state.
- MUST label the submit key for its task when that clarifies the result. | topic: Virtual keyboards | source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards | why: People know what Return does. | check: At 1440px and 390px, inspect the action label and exercise its result.
- MUST justify custom input with a clear benefit for the task. | topic: Virtual keyboards | source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards | why: People understand the unfamiliar input view. | check: At 1440px and 390px, compare custom controls with the entry task.
- MUST provide an obvious way to leave a custom keyboard. | topic: Virtual keyboards | source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards | why: People can regain familiar input. | check: Not screenshot-checkable: switch away and back; capture supported mobile and desktop equivalents.
- MUST avoid repeating keyboard functions already supplied by the system. | topic: Virtual keyboards | source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards | why: People avoid confusing duplicates. | check: At 1440px and 390px, inspect custom and system controls together.
- MUST place unfamiliar keyboard setup and usage help outside the typing surface. | topic: Virtual keyboards | source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards | why: Help does not crowd input. | check: At 1440px and 390px, capture setup, use and switch-back instructions.
- MUST keep important task content visible while the keyboard is open. | topic: Virtual keyboards | source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards | why: People can see their input and next action. | check: At 1440px and 390px, capture focused fields with the keyboard open.
- MUST keep keyboard accessory actions relevant to the current entry task. | topic: Virtual keyboards | source: https://developer.apple.com/design/human-interface-guidelines/virtual-keyboards | why: People see useful controls. | check: At 1440px and 390px, compare accessory controls with active input.
Apple-specific (excluded):
- Apple extension restrictions, secure-field exceptions and Globe/Dictation locations.
- System click sound APIs and Liquid Glass accessory styling.
- tvOS keyboard modes, visionOS window behavior, watchOS/Scribble and paired iPhone entry.
Persona and journey notes:
- People enter specialized values and may need to switch input methods.
COVERAGE:
- virtual-keyboards: read, 1283 words, 8 universal rules, 3 excluded
