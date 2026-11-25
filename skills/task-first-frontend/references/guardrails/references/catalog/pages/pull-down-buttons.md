Candidate catalog - evidence only; not executable requirements.

# Pull-down buttons: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 1cc62277fc5f8d193b6b133f3e03c1214faf08f70179d268d1ef556c454bcbb3
Input words: 660. Candidate rule records: 14. Exclusion blocks: 6.
Original note: p055-pull-down-buttons/pull-down-buttons.md.
Adopted source-linked rules: C-07

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Pull-down buttons
URL: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons
Universal rules:
- MUST show in a pull-down button's menu only items or commands that directly relate to that button's action. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: people find the right option right where they act, with no hunting | check: at 1440px and 390px open the menu; every item visibly relates to the button's label or action
- MUST use a pull-down menu to let people clarify a button's target or customize its behavior, instead of adding extra buttons beside it. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: the interface stays uncluttered and the choice stays attached to the action | check: at 1440px and 390px count the buttons next to the control; the target or behavior choice appears in one menu, not as extra buttons
- MUST use a pop-up button instead of a pull-down button when the choices are mutually exclusive options rather than commands. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: people see the current selection as a value, not as an action they might trigger by mistake | check: not screenshot-checkable: the difference between an option and a command depends on the action's behavior, not on pixels
- MUST NOT put all of a view's actions inside one pull-down button. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: primary actions stay visible and people do not have to open a menu before they can do anything | check: at 1440px and 390px the view's primary actions are visible as controls without opening any menu
- MUST list at least three items in a pull-down menu, and use buttons, toggles or switches for one or two items instead. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: opening a menu feels worthwhile, and a one- or two-item choice is faster as a direct control | check: at 1440px and 390px open each pull-down; it shows three or more items, or the one or two choices appear as direct controls
- MUST NOT list so many items in a pull-down menu that people must scan a long list to find one. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: people reach the item they want without slowing down | check: not screenshot-checkable: a good menu length depends on how often people search for items and on the task, not on a fixed pixel size
- MUST NOT add a menu title unless it adds meaning beyond the button and its items. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: the button and its descriptive items already give the context, so the menu is shorter to read | check: at 1440px and 390px open the menu; a title appears only where it names something the button label and items do not
- MUST mark a potentially destructive menu item with red text. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: people can see which item may delete or lose data before they choose it | check: at 1440px and 390px open the menu of a destructive action; that item's text is red and the safe items are not
- MUST ask people to confirm their intent before a potentially destructive menu item runs, with a clear choice to confirm or cancel. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: people avoid losing data by a mistaken click | check: at 1440px and 390px choose the red item; a confirmation with confirm and cancel choices appears before anything changes
- MUST show the destructive confirmation as a separate step that needs a deliberate choice to dismiss, not as another item inside the menu that just closed. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: the confirmation appears somewhere else and cannot be dismissed by a stray tap, so a mistake is harder to make | check: at 1440px and 390px choose the red item; the menu is closed and the confirmation is a distinct layer that stays until a choice is made
- MUST close the menu after people choose an item, and then perform the chosen action. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: people see the result of their choice right away and the menu does not stay in their way | check: at 1440px and 390px choose an item; the menu is gone and the action's visible result appears
- MUST include an icon with a menu item only when the icon clarifies that item's meaning. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: icons that add meaning speed up scanning, and icons that add none are just noise | check: at 1440px and 390px open the menu; each icon sits beside a label it helps explain and no decorative icon appears
- MUST place only items that do not need a prominent position inside a More pull-down button. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: secondary items stay reachable where space is tight and important items stay easy to find | check: at 1440px and 390px open the More menu; it holds only secondary items and the primary controls stay visible outside it
- MUST NOT rely on an ellipsis icon alone to tell people what a More button contains. | topic: Pull-down buttons | source: https://developer.apple.com/design/human-interface-guidelines/pull-down-buttons | why: people can guess what the button offers before they open it and are not surprised by its contents | check: at 1440px and 390px the More button shows a visible text label or nearby hint that names its contents, not the ellipsis alone
Apple-specific (excluded):
- The guideline states no extra macOS or visionOS considerations and that pull-down buttons are not supported in tvOS or watchOS.
- On iOS and iPadOS, a touch-and-hold gesture on a button can reveal its menu, with Safari's Tabs button as the example.
- The destructive confirmation appears as an action sheet on iOS or a popover on iPadOS.
- Menu item icons should use SF Symbols so they stay aligned with text at every scale.
- Developer APIs are named for SwiftUI (MenuPickerStyle), UIKit (showsMenuAsPrimaryAction) and AppKit (pullsDown).
- The pull-down button, pop-up button and menu components are Apple's own named components; the rules above are written about the pattern, not the component.
Persona and journey notes:
- People open a pull-down to pick a target or behavior for the button's action, and they must interact with the button before they can see its menu.
- People scan a menu for one item, so a long menu slows them down.
- People can lose data by a mistaken choice of a destructive item, so they need a red warning and a confirmation step.
- Journey: tap the button, see the menu, choose an item, the menu closes, then the action runs or a confirmation appears first for a destructive item.
COVERAGE:
- pull-down-buttons: read, approx 650 words, 14 universal rules, 6 excluded
