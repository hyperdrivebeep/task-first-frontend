Candidate catalog - evidence only; not executable requirements.

# Camera Control: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/camera-control
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 66bd28d31abc404b3fbb4f29b99f9920e332d9d08fb1a709a87196e256bcd3db
Input words: 653. Candidate rule records: 6. Exclusion blocks: 3.
Original note: p112-camera-control/camera-control.md.
Adopted source-linked rules: none (I-17 removed in the 2026-11-07 review: Apple hardware-specific)

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Camera Control
URL: https://developer.apple.com/design/human-interface-guidelines/camera-control
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST keep capture-control names short enough to preserve the viewfinder. | topic: Camera Control | source: https://developer.apple.com/design/human-interface-guidelines/camera-control | why: People can see the subject. | check: At 1440px and 390px, capture the longest labels with enlarged text.
- MUST include units or symbols with numeric camera adjustments. | topic: Camera Control | source: https://developer.apple.com/design/human-interface-guidelines/camera-control | why: People understand the value. | check: At 1440px and 390px, inspect each slider value and unit.
- MUST make frequently chosen or meaningful slider values easy to reach. | topic: Camera Control | source: https://developer.apple.com/design/human-interface-guidelines/camera-control | why: People adjust capture settings precisely. | check: Not screenshot-checkable: operate sliders through prominent values and inspect feedback.
- MUST keep capture UI clear of temporary overlays in each supported orientation. | topic: Camera Control | source: https://developer.apple.com/design/human-interface-guidelines/camera-control | why: Controls do not overlap. | check: At 1440px and 390px, capture portrait and landscape overlays.
- MUST avoid duplicating active overlay controls in the viewfinder. | topic: Camera Control | source: https://developer.apple.com/design/human-interface-guidelines/camera-control | why: People retain an uncluttered preview. | check: At 1440px and 390px, compare overlay-open and overlay-closed states.
- MUST disable camera controls that do not apply to the current capture mode. | topic: Camera Control | source: https://developer.apple.com/design/human-interface-guidelines/camera-control | why: People avoid ineffective actions. | check: At 1440px and 390px, compare photo and video controls.
Apple-specific (excluded):
- Camera Control hardware presses/slides and system SF Symbols-only requirement.
- Fixed runtime control set, center-first ordering and remembered selection in the device overlay.
- Locked camera extensions, AVFoundation and supported iPhone models.
Persona and journey notes:
- People want to adjust settings quickly while retaining a large unobstructed subject preview.
COVERAGE:
- camera-control: read, 654 words, 6 universal rules, 3 excluded
