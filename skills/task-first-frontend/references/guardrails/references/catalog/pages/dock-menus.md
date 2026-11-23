Candidate catalog - evidence only; not executable requirements.

# Dock menus: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/dock-menus
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 5bffd3833877b7d45666f46c25195e3f58cff072ca4e7569a99e5fc0f1de3e92
Input words: 278. Candidate rule records: 4. Exclusion blocks: 5.
Original note: p051-dock-menus/dock-menus.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Dock menus
URL: https://developer.apple.com/design/human-interface-guidelines/dock-menus
Universal rules:
- MUST label every shortcut-menu item succinctly and group the items in a logical order. | topic: Dock menus | source: https://developer.apple.com/design/human-interface-guidelines/dock-menus | why: people scan a short, ordered list and find the command at once instead of reading every entry | check: at 1440px open the shortcut menu and screenshot it; every label is one short phrase and related items sit together; at 390px open the same items in the app's menu and confirm the labels are complete, not truncated
- MUST offer every shortcut-menu command also in the main menu or main interface, because not everyone opens shortcut menus. | topic: Dock menus | source: https://developer.apple.com/design/human-interface-guidelines/dock-menus | why: people who never use a secondary-click or long-press menu still reach every command | check: at 1440px screenshot the shortcut menu and the main menu bar and confirm each shortcut command also appears in the main menu; at 390px confirm each command is reachable from the main screen navigation without a secondary gesture
- MUST put the highest-value items in a shortcut menu, such as a list of all currently open or recently used windows or items, so people can jump straight to the one they want. | topic: Dock menus | source: https://developer.apple.com/design/human-interface-guidelines/dock-menus | why: a person returns to the window or item they were working on in one action | check: at 1440px with three open items screenshot the shortcut menu and confirm all three are listed; at 390px confirm the same items appear in the app's open or recent list
- MUST list a few of the actions most likely to help when the app is not frontmost or has no open windows, not an empty shortcut menu. | topic: Dock menus | source: https://developer.apple.com/design/human-interface-guidelines/dock-menus | why: the menu still gives a useful next step when nothing is open, as with getting new mail or composing a message | check: at 1440px with the app running and no windows open, open the shortcut menu and screenshot it; it shows listed actions, not an empty menu; at 390px confirm those same actions are on the app's start screen
Apple-specific (excluded):
- Revealing the Dock menu by secondary-clicking an app icon in the macOS Dock.
- The Safari and Mail examples of system-provided Dock menu items.
- Home Screen quick actions revealed by long-pressing an app icon on iOS and iPadOS.
- The platform note stating Dock menus are not supported on iOS, iPadOS, tvOS, visionOS or watchOS.
- The applicationDockMenu(_:) AppKit developer reference.
Persona and journey notes:
- People secondary-click an app's icon to jump to an open window or start a common action, often when the app is not frontmost or has no open windows.
- Some people never use a shortcut menu, so the same commands must be reachable elsewhere.
COVERAGE:
- dock-menus: read, ~290 words, 4 universal rules, 5 excluded
