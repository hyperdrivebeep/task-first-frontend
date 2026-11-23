Candidate catalog - evidence only; not executable requirements.

# Path controls: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/path-controls
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 3ff34d23b7f94943b1cfecbae73f07ff340748160596e423a5a281621ea598e0
Input words: 283. Candidate rule records: 14. Exclusion blocks: 5.
Original note: p060-path-controls/path-controls.md.
Adopted source-linked rules: C-15

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Path controls
URL: https://developer.apple.com/design/human-interface-guidelines/path-controls

Universal rules:
- MUST show the file system path of the selected file or folder in a path control. | Path display | "A path control shows the file system path of a selected file or folder." | Lets people see where the selected item lives. | 1440px: a screenshot with a selected file shows its path in the control. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST show the path of the selected item when an item is selected, and the path of the window's folder when nothing is selected. | Empty selection | "It shows the path of the selected item, or the path of the window's folder if nothing is selected." | The control always shows a location. | 1440px: one screenshot with a selection shows the item's path, and one with no selection shows the folder's path. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST place a path control in the window body. | Placement | "Use a path control in the window body, not the window frame." | Keeps the control with the content it describes. | 1440px: a screenshot shows the control inside the content area, not in the window frame. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST NOT place a path control in a toolbar. | Placement | "Path controls aren't intended for use in toolbars or status bars." | Stated usage limit. | 1440px: a screenshot of the toolbar shows no path control. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST NOT place a path control in a status bar. | Placement | "Path controls aren't intended for use in toolbars or status bars." | Stated usage limit. | 1440px: a screenshot of the bottom status strip shows no path control. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST use one of the two path-control styles, standard or pop up. | Style choice | "There are two styles of path control." | Keeps the control to a defined pattern. | 1440px: a screenshot shows either a linear list of path segments or a single item that opens a menu. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST show the standard style as a linear list of the root, each parent folder, and the selected item, in that order. | Standard style contents | "A linear list that includes the root disk, parent folders, and selected item." | Shows the full chain from the root to the item. | 1440px: a screenshot of a nested selection lists the root, each parent, and the selected item in order. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST show an icon and a name for each item in the standard style. | Standard style item | "Each item appears with an icon and a name." | Lets people recognize each level. | 1440px: a screenshot shows an icon and a name on every segment. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST hide the names between the first and last items when the standard-style list does not fit, and keep the first and last items visible. | Overflow | "If the list is too long to fit within the control, it hides names between the first and last items." | Keeps the start and the selected end readable. | 1440px: narrow the window until the list overflows, then a screenshot shows the first and last items with the middle names hidden. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST let people drag an item onto an editable standard-style control to select the item and display its path. | Drag to select | "If you make the control editable, people can drag an item onto the control to select the item and display its path in the control." | Lets people jump to a location from outside the control. | 1440px: not screenshot-checkable: the drag gesture is an interaction; a before and after screenshot pair shows only the result. 390px: not screenshot-checkable: the drag gesture is an interaction.
- MUST show the pop up style as a control that displays the icon and name of the selected item. | Pop up style display | "A control similar to a pop-up button that shows the icon and name of the selected item." | Shows the current location compactly. | 1440px: a screenshot shows one item with its icon and name. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST let people click the pop up style item to open a menu that lists the root, each parent folder, and the selected item. | Pop up menu | "People can click the item to open a menu containing the root disk, parent folders, and selected item." | Gives access to every ancestor in one step. | 1440px: a screenshot taken after a click shows the open menu with the root, each parent, and the selected item. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST add a Choose command to the pop up menu when the pop up control is editable, so people can select an item and display it in the control. | Editable pop up Choose | "If you make the control editable, the menu contains an additional Choose command that people can use to select an item and display it in the control." | Gives a way to pick any location. | 1440px: a screenshot of the open menu on an editable control shows a Choose entry. 390px: not screenshot-checkable: the page gives no narrow-width behavior for this rule.
- MUST let people drag an item onto an editable pop up control to select the item and display its path. | Editable pop up drag | "They can also drag an item onto the control to select it and display its path." | Same drop action as the standard style. | 1440px: not screenshot-checkable: the drag gesture is an interaction; a before and after screenshot pair shows only the result. 390px: not screenshot-checkable: the drag gesture is an interaction.

Apple-specific (excluded):
- Finder example and the View > Show Path Bar menu path (Apple OS feature).
- Note that the Finder path control appears at the bottom of the window body (Apple-named component).
- Platform note: not supported in iOS, iPadOS, tvOS, visionOS, or watchOS (Apple platform list).
- Related link to file-management (Apple cross-reference).
- NSPathControl in AppKit (Apple framework reference).

Persona and journey notes:
- People who browse folders in a window and need to see where the selected item lives. Journey: select an item, read its path, click a parent folder or menu entry to move up, or drag an item onto an editable control to jump to it.

COVERAGE:
- path-controls: read, 260 words, 14 universal rules, 5 excluded
