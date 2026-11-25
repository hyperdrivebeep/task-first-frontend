Candidate catalog - evidence only; not executable requirements.

# Game controls: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/game-controls
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 370704b36bc8ddca319f7a67c6cedaff3c168d2ce1bfe014df66b7af7d8e5772
Input words: 1698. Candidate rule records: 15. Exclusion blocks: 3.
Original note: p114-game-controls/game-controls.md.
Adopted source-linked rules: I-19

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Game controls
URL: https://developer.apple.com/design/human-interface-guidelines/game-controls
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST support a default device input path when optional controllers are supported and the game permits it. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People without an accessory can play. | check: Not screenshot-checkable: play the same task with default and accessory input.
- MUST disclose required controllers and guide connection when one is absent. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People understand a blocked start. | check: At 1440px and 390px, capture missing-controller entry and recovery.
- MUST detect connected controllers without unnecessary manual setup. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People can start playing quickly. | check: Not screenshot-checkable: connect, disconnect and reconnect a controller.
- MUST display labels or symbols matching the controller currently in use. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People can locate the indicated button. | check: Not screenshot-checkable: switch controller types and players; capture corresponding prompts.
- MUST map menu navigation to familiar controller behavior and reserve system controls. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People can navigate outside gameplay. | check: Not screenshot-checkable: test activate, cancel, pause and navigation using supported controllers.
- MUST choose direct object interaction when overlays would add unnecessary virtual controls. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: Gameplay remains visible. | check: At 1440px and 390px, compare action needs with the controls overlay.
- MUST place frequent touch controls within comfortable thumb reach and clear of system areas. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People can act without accidental system gestures. | check: At 1440px and 390px, inspect safe areas and intended hand posture.
- MUST provide touch controls large enough for their importance and actual finger use. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People can activate reliably. | check: At 1440px and 390px, measure hit regions; HIG game-specific examples are 44x44 pt frequent and 28x28 pt secondary, not general web minima.
- MUST show press feedback visible beyond a finger and supplement it with appropriate tactile or sound feedback. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People know a press registered. | check: Not screenshot-checkable: press with a finger covering the control; inspect feedback and test enabled modalities.
- MUST use action-representative artwork for virtual game controls. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People understand the action without memorizing controller letters. | check: At 1440px and 390px, inspect icons against their actions.
- MUST show only controls relevant to the current gameplay state. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People focus on available actions. | check: At 1440px and 390px, compare gameplay states and available controls.
- MUST simplify simultaneous or sequential touch commands when one intuitive control can express the action. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People avoid awkward input combinations. | check: Not screenshot-checkable: execute common movement and action combinations.
- MUST keep movement and camera mappings predictable for the supported input context. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People can navigate without fighting the controls. | check: Not screenshot-checkable: exercise movement and camera independently and together.
- MUST prefer accessible single-key game commands and comfortable nearby bindings for related actions. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People can act while using another hand on a pointer. | check: Not screenshot-checkable: test key reach and simultaneous gameplay with supported keyboards.
- MUST let players customize key bindings. | topic: Game controls | source: https://developer.apple.com/design/human-interface-guidelines/game-controls | why: People can adapt controls to comfort and ability. | check: Not screenshot-checkable: rebind, persist and use the changed mapping.
Apple-specific (excluded):
- Apple TouchController/GameController APIs, platform badge and SF Symbols.
- Exact A/B/shoulder/home mappings and Apple keyboard Command-versus-Control guidance.
- visionOS spatial-controller trigger mappings and Apple platform availability.
Persona and journey notes:
- Players may lack a controller, switch accessories or need customized controls for comfort.
COVERAGE:
- game-controls: read, 1699 words, 15 universal rules, 3 excluded
