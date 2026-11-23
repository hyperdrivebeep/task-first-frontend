Candidate catalog - evidence only; not executable requirements.

# Keyboards: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/keyboards
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra child.
Snapshot SHA-256: 6aa5d553e35537b1e8d3b9d8ee030b1ec6e63c0186189a88e4b4abd866e290f8
Input words: 2962. Candidate rule records: 14. Exclusion blocks: 9.
Original note: p106-keyboards/keyboards.md.
Adopted source-linked rules: I-03, I-04

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Keyboards
URL: https://developer.apple.com/design/human-interface-guidelines/keyboards
Reader: Astra child, 2026-11-04 KST

Universal rules:
- MUST support complete keyboard-only navigation and activation when possible through the host's available keyboard accessibility facilities. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: people can use the interface without needing a pointer or gesture input | check: not screenshot-checkable: keyboard-only accessibility journey probe navigating applicable windows, menus, controls, and custom views and activating required actions without another input device.
- MUST test keyboard accessibility with the host's full keyboard-access mode enabled when that mode is available. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: support is verified in the mode people actually depend on | check: not screenshot-checkable: enabled-keyboard-access probe turning on the host accessibility setting and exercising navigation, activation, and applicable gesture-equivalent tasks.
- MUST preserve standard keyboard shortcuts for their expected actions, considering reassignment only when the original action makes no sense in the experience. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: learned shortcuts remain reliable across apps and the system | check: not screenshot-checkable: standard-shortcut compatibility probe comparing supported commands with the host's conventions and checking that any reassignment has a genuinely inapplicable original action.
- MUST let players modify game key bindings to suit their play style while respecting applicable standard system shortcuts. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: players can adapt controls without losing familiar system access | check: not screenshot-checkable: game-binding customization probe changing a binding, exercising its new assignment, and checking applicable standard commands such as the host's quit action.
- MUST define custom keyboard shortcuts only for the most frequently used app-specific commands. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: useful acceleration does not become an excessive set of commands to learn | check: not screenshot-checkable: custom-shortcut task-frequency probe comparing each custom mapping with the established frequent task set and identifying unnecessary mappings.
- MUST use modifier keys in ways consistent with the target environment's established interaction expectations. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: modified actions such as grouped movement or constrained resizing behave predictably | check: not screenshot-checkable: modifier-interaction compatibility probe exercising applicable modified dragging and resizing actions and comparing them with the host's conventions.
- MUST move a selected item by the smallest app-defined distance unit while an arrow key is held, stopping when it is released, where arrow keys provide spatial item movement. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: people can make precise adjustments and control when movement stops | check: not screenshot-checkable: held-arrow movement probe measuring successive movement increments against the app's defined unit and checking that release ends movement.
- MUST account for localized keyboards that require modifiers to type characters, avoiding added modifiers with characters unavailable across the supported layouts and preferring alphabetic characters when an alternative modifier is necessary. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: custom shortcuts do not depend on character combinations people cannot readily enter | check: not screenshot-checkable: localized-keyboard character-entry probe testing candidate shortcuts and ordinary character entry on supported layouts that use modifiers for punctuation.
- MUST list multiple shortcut modifiers in the target environment's established display order. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: shortcut labels are familiar and easier to read consistently | check: 1440px and 390px screenshots of shortcut labels show modifier sequences matching the documented host order.
- MUST avoid redundantly displaying Shift when the shortcut already names the upper character of a two-character key in a notation where that character implies Shift. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: the shortcut label expresses the intended character without an unnecessarily confusing key sequence | check: 1440px and 390px screenshots of applicable shortcut labels show the upper character without a redundant Shift-plus-lower-character spelling.
- MUST let the host localize shortcut keys and modifiers to the connected keyboard when that facility is available. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: shortcut presentation and input adapt to the keyboard a person uses | check: not screenshot-checkable: keyboard-localization probe switching supported keyboard layouts and checking the host-localized shortcut labels and invocation.
- MUST let the host mirror keyboard shortcuts when switching to a right-to-left layout if the host provides this behavior. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: direction-dependent shortcut behavior remains consistent with the localized interface | check: not screenshot-checkable: right-to-left shortcut probe switching layout direction and verifying the host-defined mirrored shortcut behavior.
- MUST avoid adding a modifier to an existing shortcut to invoke an unrelated command. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: related key combinations retain a meaningful relationship rather than creating misleading associations | check: not screenshot-checkable: shortcut-family consistency probe enumerating base and modified shortcuts, invoking them, and checking that the commands are related.
- MUST give shortcut titles enough standalone context to describe their actions when displayed in a flat list without submenu titles. | topic: Keyboards | source: https://developer.apple.com/design/human-interface-guidelines/keyboards | why: people can understand a command even when its usual menu hierarchy is absent | check: 1440px and 390px screenshots of the flat shortcut listing show titles that identify each action without relying on a missing parent submenu.

Apple-specific (excluded):
- Physical-keyboard availability across Apple devices except Apple Watch; Full Keyboard Access availability in iOS, iPadOS, macOS, and visionOS, the Settings path, and isFullKeyboardAccessEnabled.
- iPadOS-specific keyboard navigation policy: support for text fields, text views, sidebars, collection/custom views, and reliance on Full Keyboard Access rather than app keyboard navigation for buttons, segmented controls, and switches.
- Every exact mapping in the Standard keyboard shortcuts table, including Spotlight, app switching, system focus, accessibility, screenshots, document editing, selection, window management, session commands, and the entries marked as varying.
- The separate localized-system and input-source shortcut table, including the listed Roman/system-script layout mappings.
- Apple modifier preferences: Command as primary, Shift as complementary, Option sparingly for less-common or power commands, and avoidance of Control as a custom modifier.
- The exact modifier display order Control, Option, Shift, Command; the Apple-specific Command shortcut examples and the French Option-5 character-generation example.
- Apple's automatic shortcut localization and right-to-left mirroring mechanisms; no claim that every non-Apple host provides these automatically.
- visionOS Command-held shortcut interface, its File/Edit/View categories and available-shortcut filtering, discoverabilityTitle, and the physical-keyboard virtual overlay with completion controls.
- No additional iOS, iPadOS, macOS, or tvOS considerations; no watchOS support; SwiftUI, UIKit, AppKit, and the linked keyboard implementation APIs.

Persona and journey notes:
- A keyboard-only user needs both navigation and activation; accessibility-mode testing is a separate check from merely confirming that text entry works.
- A frequent-command user benefits from a limited set of custom shortcuts while carrying familiar system shortcuts into a new app.
- A game player may use single-key bindings and needs to customize them; the app-shortcut definition involving modifiers is not imposed on every game binding.
- A person using a localized keyboard may need modifier combinations just to type punctuation. Shortcut choice and host localization must be evaluated with the actual supported layouts.
- A person moving a selected item needs small controlled steps; this guidance concerns spatial item movement, not all arrow-key uses such as focus navigation.
- A right-to-left user benefits from host-defined mirroring where supported; the note does not invent a universal manual remapping algorithm.
- A person reading a flat shortcut listing cannot recover context from a submenu title, so command names need to stand alone.
- Ambiguity: the source lists Command-I for both Italic and Info, and contains historical or environment-dependent system commands such as Dashboard and script-switching mappings. These are retained as excluded source facts rather than treated as verified current behavior for every host.
- The source has a missing developer-link label in the Full Keyboard Access paragraph and empty modifier-symbol cells. No missing link or symbol is reconstructed.
- Word-count convention: COVERAGE preserves the supplied batch count of 2963. Untrimmed whitespace splitting includes one trailing empty entry; trimmed whitespace counting gives 2962 words.
- All standard and localized shortcut table rows were read. Counts of excluded bullets represent grouped exclusions, not a count of individual shortcut table rows.
- Checks specify future evidence only. Static 1440px and 390px screenshots can establish shortcut-label presentation, not keyboard execution, focus traversal, remapping, or accessibility behavior.

COVERAGE:
- keyboards: read, 2963 words, 14 universal rules, 9 excluded

Source headings covered (exact text, in source order):
- Keyboards
- Best practices
- Standard keyboard shortcuts
- Custom keyboard shortcuts
- Platform considerations
- visionOS
- Resources
- Related
- Developer documentation
- Change log
