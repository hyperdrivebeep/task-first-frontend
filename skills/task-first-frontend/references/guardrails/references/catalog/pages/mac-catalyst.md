Candidate catalog - evidence only; not executable requirements.

# Mac Catalyst: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: ee851747a0dd1d9a82f99dc0c9341d1fc3719c679b406bc1b3282c75a4abf42d
Input words: 2030. Candidate rule records: 9. Exclusion blocks: 3.
Original note: p134-mac-catalyst/mac-catalyst.md.
Adopted source-linked rules: none (T-31 removed in the 2026-11-07 review: Apple platform-specific)

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Mac Catalyst
URL: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST evaluate whether a new platform supports the capabilities essential to the product. | topic: Mac Catalyst | source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst | why: People do not receive a port that cannot perform its main task. | check: Not screenshot-checkable: compare required capabilities with supported device behavior.
- MUST adapt navigation and input to the destination environment rather than copying a source layout unchanged. | topic: Mac Catalyst | source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst | why: People can use familiar local conventions. | check: At 1440px and 390px, compare destination navigation with its input tasks.
- MUST support expected keyboard navigation, shortcuts and pointer interactions on desktop. | topic: Mac Catalyst | source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst | why: People can work efficiently. | check: Not screenshot-checkable: complete key journeys using keyboard and pointer.
- MUST audit text, assets and layout after platform scaling changes. | topic: Mac Catalyst | source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst | why: New rendering metrics do not break clarity. | check: At 1440px and 390px, capture longest text, detailed assets and resized windows.
- MUST preserve access to important navigation items when changing navigation components. | topic: Mac Catalyst | source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst | why: People do not lose destinations in a port. | check: At 1440px and 390px, map every source destination to a destination control.
- MUST provide button or keyboard alternatives to gesture-only page navigation. | topic: Mac Catalyst | source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst | why: People without a matching gesture device can move through content. | check: Not screenshot-checkable: navigate pages using each supported method.
- MUST use available width and resizing to organize related content without losing its relationship. | topic: Mac Catalyst | source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst | why: People gain a useful desktop layout. | check: At 1440px and 390px, inspect narrow and wide layouts and side-by-side content.
- MUST place controls for the ergonomics of the destination input rather than the source device. | topic: Mac Catalyst | source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst | why: Actions remain easy to find and operate. | check: At 1440px and 390px, inspect the important controls and their intended reach/navigation.
- MUST expose relevant contextual actions through the destination environment’s expected mechanisms. | topic: Mac Catalyst | source: https://developer.apple.com/design/human-interface-guidelines/mac-catalyst | why: People can discover object-specific commands. | check: At 1440px and 390px, inspect context menus and their accessible alternatives.
Apple-specific (excluded):
- Mac Catalyst compatibility, automatic gesture conversion and UIKit APIs.
- iPad/Mac idioms, 77-percent scale and 17-to-13-point example.
- macOS menu bar, toolbar/top-down layout, app-icon style and specific tab/sidebar substitutions.
Persona and journey notes:
- People use the same product with a different display size, input mix and windowing model.
COVERAGE:
- mac-catalyst: read, 2031 words, 9 universal rules, 3 excluded
