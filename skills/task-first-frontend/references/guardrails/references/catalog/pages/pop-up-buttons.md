Candidate catalog - evidence only; not executable requirements.

# Pop-up buttons: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: bbebb804c2fff907fc12f98ea3af322465624b26031ad8fd6bd102278adc6250
Input words: 414. Candidate rule records: 13. Exclusion blocks: 3.
Original note: p054-pop-up-buttons/pop-up-buttons.md.
Adopted source-linked rules: C-08

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Pop-up buttons
URL: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons

Universal rules:
- MUST use a pop-up button only for a flat list of mutually exclusive options or states. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: a pop-up button displays a menu of mutually exclusive options. | check: at 1440px and 390px, open the control and confirm the menu is one flat list with no nested levels.
- MUST NOT use a pop-up button to offer a list of actions; use a pull-down button instead. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: the page directs action lists to pull-down buttons. | check: not screenshot-checkable: whether an item sets a state or runs an action needs a click-through test.
- MUST NOT let people select multiple items in a pop-up button; use a pull-down button instead. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: the page directs multi-select to pull-down buttons. | check: at 1440px and 390px, open the menu with an item chosen and confirm only one item carries a selection mark.
- MUST NOT include a submenu in a pop-up button; use a pull-down button instead. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: the page directs submenus to pull-down buttons. | check: at 1440px and 390px, open the menu and confirm no item shows a submenu indicator.
- MUST use a pop-up button for a choice that affects the content or the surrounding view. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: the page says pop-up buttons help people make a choice that affects content or the surrounding view. | check: not screenshot-checkable: whether a choice changes content is a behavior check verified by a click-through test.
- MUST show the default item as the current selection when people have not made a choice yet. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: the control shows the default item the designer specifies until a choice is made. | check: at 1440px and 390px, load the screen with no prior choice and confirm the closed control shows the default item.
- MUST choose a default selection that most people are likely to want, when possible. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: a likely default reduces the number of choices people must make. | check: not screenshot-checkable: likely user preference needs usage data or research.
- MUST let people predict the options without opening the menu, using an introductory label or a button label that describes the effect. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: the closed control should give context to the options. | check: at 1440px and 390px, view the closed control and confirm a visible label describes the kind of choice.
- MUST consider a pop-up button when space is limited and not all options need to be shown all the time. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: pop-up buttons present many choices in little space. | check: not screenshot-checkable: the trade-off between space and constant visibility is a design decision.
- MUST include a Custom option in the menu for additional items that people need only occasionally, when such items exist. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: a Custom option keeps occasional items from cluttering the interface. | check: at 1440px and 390px, open the menu and confirm a Custom item is present when occasional items exist.
- MUST consider explanatory text below the list when people need help understanding how the options work. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: explanatory text clarifies how the options behave. | check: at 1440px and 390px, open the menu and confirm explanatory text appears under the list when the options need explaining.
- MUST close the menu after people choose an item. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: the page states the menu closes after a choice. | check: at 1440px and 390px, pick an item and confirm the menu is closed in the next screenshot.
- MUST update the button content to show the chosen item after a choice is made. | topic: Pop-up buttons | source: https://developer.apple.com/design/human-interface-guidelines/pop-up-buttons | why: the button identifies the current selection. | check: at 1440px and 390px, pick an item and confirm the closed control shows that item's name.

Apple-specific (excluded):
- iPadOS: within a popover or modal view, use a pop-up button instead of a disclosure indicator to present multiple options for a list item.
- Platform support: no additional considerations for iOS, macOS, or visionOS, and not supported in tvOS or watchOS.
- Apple frameworks named in developer documentation: MenuPickerStyle (SwiftUI), changesSelectionAsPrimaryAction (UIKit), NSPopUpButton (AppKit).

Persona and journey notes:
- A person opens the menu, picks one item, the menu closes, and the closed control shows the new choice.
- A person scans a short list of mutually exclusive options before opening the menu, guided by the intro or button label.

COVERAGE: pop-up-buttons: read, approx 460 words, 13 universal rules, 3 excluded
