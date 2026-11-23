Candidate catalog - evidence only; not executable requirements.

# Menus: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/menus
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 5bb859cd2e9b04600f337aa8f091e77a087471f2e586482263bb3dedcaf7b44d
Input words: 2312. Candidate rule records: 29. Exclusion blocks: 8.
Original note: p053-menus/menus.md.
Adopted source-linked rules: C-05, C-06

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Menus

URL: https://developer.apple.com/design/human-interface-guidelines/menus

Universal rules:
- MUST write a menu item label that clearly and succinctly describes what the item does. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: People scan labels to find a command, so unclear labels cause wrong picks. | check: desktop 1440px and mobile 390px screenshot check
- MUST label a menu item that starts an action with a verb or verb phrase describing the action, such as View, Close, or Select. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: A verb tells people what selecting the item will do. | check: desktop 1440px and mobile 390px screenshot check
- MUST use title-style capitalization for menu item labels, capitalizing every word except articles, coordinating conjunctions, and short prepositions, and always capitalizing the last word. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Consistent capitalization keeps menus matching platform conventions. | check: desktop 1440px and mobile 390px screenshot check
- MUST NOT include articles such as a, an, or the in menu item labels. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Articles lengthen labels without adding clarity and waste space. | check: desktop 1440px and mobile 390px screenshot check
- MUST write menu item labels in the tone set by the app's or game's communication style guide. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Menu labels are product copy and should sound like the rest of the product. | check: not screenshot-checkable: tone consistency needs a review against the style guide
- MUST show a menu item as unavailable when it cannot be used, typically dimmed and not responding to interaction. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: People need to see which commands are currently not possible. | check: desktop 1440px and mobile 390px screenshot check
- MUST keep a menu openable when all of its items are unavailable. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: People need to open the menu to learn what commands it contains. | check: desktop 1440px and mobile 390px screenshot check
- MUST append an ellipsis (…) to a menu item label when the action needs more information before it can complete. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: The ellipsis warns people that another view or input step follows. | check: desktop 1440px and mobile 390px screenshot check
- MUST represent common actions with the same icon every time they appear. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Consistent icons make actions familiar and easy to recognize. | check: desktop 1440px and mobile 390px screenshot check
- MUST use menu item icons sparingly and only where they help people find an item or clarify what selecting it does. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Too many icons add noise and dilute the ones that matter. | check: desktop 1440px and mobile 390px screenshot check
- MUST reserve menu item icons for the most common actions and key features, file system locations, connected devices, visual concepts such as rotating or flipping, and user-generated content such as folders and documents. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: These are the cases where an icon adds meaning beyond the label. | check: desktop 1440px and mobile 390px screenshot check
- MUST NOT display an icon on a menu item when no icon clearly represents that item. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: A misleading icon is worse than no icon. | check: desktop 1440px and mobile 390px screenshot check
- MUST give every menu item in a group an icon, or give none of them, so the group has a uniform visual treatment. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Mixed icons within a group look unbalanced and inconsistent. | check: desktop 1440px and mobile 390px screenshot check
- MUST group logically related menu items together. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Grouping helps people remember where a command lives. | check: desktop 1440px and mobile 390px screenshot check
- MUST keep all logically related commands in the same group even when their importance differs. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Splitting related commands across groups breaks the mental model people build. | check: desktop 1440px and mobile 390px screenshot check
- MUST separate groups of menu items with a separator. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Separators let people see group boundaries at a glance. | check: desktop 1440px and mobile 390px screenshot check
- MUST keep menu length in check, dividing a long menu into separate menus or using a submenu. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: People need more time and attention to read a long menu and may miss the command they want. | check: desktop 1440px and mobile 390px screenshot check
- MUST allow a long, scrollable menu when it holds user-defined or dynamically generated content. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: People expect such menus to hold every item they added, so scrolling is the expected behavior. | check: desktop 1440px and mobile 390px screenshot check
- MUST use submenus sparingly. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Each submenu adds complexity and hides the items it contains. | check: desktop 1440px and mobile 390px screenshot check
- MUST limit submenus to a single level of depth. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: People find it difficult to reveal multiple levels of nested submenus. | check: desktop 1440px and mobile 390px screenshot check
- MUST show a submenu indicator, such as a chevron, after the label of a menu item that opens a submenu. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: The indicator tells people the item reveals more items instead of running an action. | check: desktop 1440px and mobile 390px screenshot check
- MUST keep a submenu available when all of its nested items are unavailable. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: People need to open the submenu to learn what commands it contains. | check: desktop 1440px and mobile 390px screenshot check
- MUST NOT use indentation to show hierarchy between menu items; use a submenu instead. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Indentation does not clearly express the relationship between items. | check: desktop 1440px and mobile 390px screenshot check
- MUST include a verb in a changeable menu label when the label alone does not make clear whether it is an action or a state. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Labels such as HDR On and HDR Off can be read as either a state or an action. | check: desktop 1440px and mobile 390px screenshot check
- MUST display both menu items instead of one toggled item when people need to see both actions or states at the same time. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: A single toggled item hides the other state from view. | check: desktop 1440px and mobile 390px screenshot check
- MUST let players navigate in-game menus with the platform's default interaction method. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: People expect the same interactions they use for other menus on the device. | check: not screenshot-checkable: requires exercising real input on each supported platform
- MUST keep in-game menus easy to open and read on every platform the game supports. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Scaling game content to a smaller screen can make menus unreadable. | check: desktop 1440px and mobile 390px screenshot check
- MUST enlarge the tap targets of an in-game menu when scaling the game content makes its items too small to read or interact with. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Small targets are hard to hit, especially on touch screens. | check: mobile 390px screenshot check
- MUST size in-game menu fonts and interaction targets to the sizes each supported platform defines as best. | topic: Menus | source: https://developer.apple.com/design/human-interface-guidelines/menus | why: Each platform has its own sizes that work best for readability and tapping. | check: desktop 1440px and mobile 390px screenshot check

Apple-specific (excluded):
- Platform considerations for iOS and iPadOS, including the small, medium, and large menu layouts and their item counts: needs an Apple OS feature.
- visionOS guidance, including presenting menus from 3D content and the breakthrough effect (subtle, prominent, none): needs an Apple OS feature and Apple hardware.
- The statement that the system provides standard icons, and the link to Apple's standard icon list: needs an Apple OS feature and Apple's icon set.
- References to Apple's own components by name (pop-up buttons, pull-down buttons, context menus, the menu bar): Apple components by name.
- Developer documentation links (SwiftUI, UIKit, AppKit) and the related-component list: Apple frameworks.
- Examples that name Apple apps (Safari History and Bookmarks menus, Notes Scan, Lock, and Pin actions) and Apple commands (Format > Font, Look Up): Apple brand and Apple OS features.
- Statement that macOS, tvOS, and watchOS have no additional considerations: Apple OS specific.
- Change log entries: Apple document history, not guidance.

Persona and journey notes:
- People start scanning a menu from the top, so the first items they see carry the most weight.
- People learn a menu through repeated use, so stable group order and labels help them build memory of where a command lives.
- Players expect game menus to behave like the menus they already use on their device.
- People on smaller screens may miss items when game content is scaled down, so menu readability is a journey-stage risk for mobile players.
- A person who sees a dimmed item needs to be able to open the menu to learn what it holds.

COVERAGE: Read 1 of 1 listed files completely (/Volumes/toshiba/work/ui-guardrails-1103/hig-text/menus.md, all sections through the change log). Wrote 29 universal rules and 1 notes file. Apple-specific items were excluded and listed above.
