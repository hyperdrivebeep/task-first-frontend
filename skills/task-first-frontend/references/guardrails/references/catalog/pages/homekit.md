Candidate catalog - evidence only; not executable requirements.

# HomeKit: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/homekit
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 158506464a52e819a9a055c766ec9e638507568e459639f7b8981a88a0f4b229
Input words: 3496. Candidate rule records: 18. Exclusion blocks: 4.
Original note: p128-homekit/homekit.md.
Adopted source-linked rules: T-26

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## HomeKit
URL: https://developer.apple.com/design/human-interface-guidelines/homekit
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST preserve the familiar object hierarchy and terminology of an integrated control system. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People can transfer their understanding across interfaces. | check: At 1440px and 390px, compare object names and locations with the shared system.
- MUST make related location and grouping details easy to find beside a controlled object. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People know what and where they control. | check: At 1440px and 390px, inspect the object detail view.
- MUST account for multiple physical locations or accounts when displaying an object. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People do not control the wrong place. | check: At 1440px and 390px, capture two locations with similarly named devices.
- MUST reuse existing shared configuration rather than demanding duplicate setup. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People avoid contradictory settings. | check: Not screenshot-checkable: import an existing setup and inspect what is asked again.
- MUST use descriptive feature names instead of internal entity terms. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People understand controls. | check: At 1440px and 390px, inspect names for device functions and attributes.
- MUST explain why access to connected-environment data is needed. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People can decide in context. | check: At 1440px and 390px, capture the permission purpose.
- MUST avoid unnecessary account creation or unrelated platform setup before basic device functionality works. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People can start using their accessory. | check: At 1440px and 390px, walk the initial setup and optional-service boundary.
- MUST offer advanced customization after the basic setup succeeds. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People get value before complexity. | check: At 1440px and 390px, compare first-use and post-setup screens.
- MUST suggest useful user-facing names and explain invalid names with alternatives. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People can address devices predictably. | check: At 1440px and 390px, capture invalid and suggested-name states.
- MUST avoid names that duplicate location semantics when this makes voice control ambiguous. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People target the intended object. | check: Not screenshot-checkable: test similar device and room names through voice commands.
- MUST teach supported voice actions with examples using the person’s actual configured objects. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People can try commands immediately. | check: At 1440px and 390px, inspect examples after setup and in contextual detail.
- MUST suggest meaningful groups when people benefit from controlling several objects together. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People can act on a useful set. | check: At 1440px and 390px, inspect grouped controls and their membership.
- MUST avoid duplicate voice shortcuts for actions already supplied by an integration. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People do not learn competing routes. | check: Not screenshot-checkable: compare native and custom shortcut inventories.
- MUST explain the boundary between custom functionality and the shared control application. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People know where to complete a broader task. | check: At 1440px and 390px, inspect cross-application guidance.
- MUST reflect authoritative shared-state changes and make unresolved conflicts visually comparable. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People do not unknowingly act on stale settings. | check: Not screenshot-checkable: change state elsewhere, inspect synchronization and unresolved side-by-side values.
- MUST obtain clear intent before overwriting shared configuration. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: Changes do not surprise people across applications. | check: At 1440px and 390px, capture the proposed shared change and confirmation; inspect writes separately.
- MUST keep camera imagery unobstructed by unrelated interface content. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People can see the monitored scene. | check: At 1440px and 390px, inspect all overlays on the camera view.
- MUST show device actions only when the connected device supports them. | topic: HomeKit | source: https://developer.apple.com/design/human-interface-guidelines/homekit | why: People avoid controls that cannot work. | check: At 1440px and 390px, compare devices with and without the capability.
Apple-specific (excluded):
- HomeKit home/room/zone/service/characteristic terminology and object model.
- System-first HomeKit setup and exact alphanumeric naming restrictions.
- Siri/HomePod semantics, HomeKit-authoritative database and framework APIs.
- Official HomeKit/Home icons, trademark copy, legal credit and platform-specific rules.
Persona and journey notes:
- People set up connected devices across multiple homes, use voice control and expect shared configuration to stay consistent.
COVERAGE:
- homekit: read, 3497 words, 18 universal rules, 4 excluded
