Candidate catalog - evidence only; not executable requirements.

# Toolbars: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/toolbars
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: f656fd13ced1eb675a75df1a3e38832bad07eaac0d53da999231fe9495d43e14
Input words: 2395. Candidate rule records: 42. Exclusion blocks: 14.
Original note: p056-toolbars/toolbars.md.
Adopted source-linked rules: C-09

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Toolbars

URL: https://developer.apple.com/design/human-interface-guidelines/toolbars

Universal rules:
- MUST keep the number of toolbar items low enough that each item can be told apart and activated. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: crowded items are hard to distinguish and tap. | check: at 390px every item shows its own symbol or label and tap target, with no overlap.
- MUST define which items move into an overflow or More menu as the toolbar gets narrower. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: the most important items stay visible at every width. | check: at 1440px and 390px lower-priority items collapse while higher-priority items stay visible.
- MUST put the commands people are most likely to need in the toolbar first. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: placement follows use, not menu order. | check: not screenshot-checkable: usage frequency needs analytics or user research.
- MUST NOT add a More menu when all actions fit in the toolbar. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: a More menu hides actions that could stay visible. | check: at 1440px the toolbar shows every action and no More control appears.
- MUST place less important actions in a More menu when the toolbar is full. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: the bar stays focused on the most used actions. | check: at 390px the More control holds the lower-priority items and the rest remain in the bar.
- MUST let people customize the toolbar when the app has many items or is used for long sessions. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: different people need different commands. | check: at 1440px a customize entry opens and items can be added and removed.
- MUST NOT place a custom toolbar background or tint that interferes with the toolbar item labels. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: custom colors can clash with the background effects the system provides. | check: at 1440px and 390px in light and dark appearance every label stays legible against the bar.
- MUST NOT give toolbar item labels a color similar to the content behind the bar. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: similar colors blend labels into content. | check: at 1440px sample the label and background colors; they must be clearly distinct.
- MUST keep the toolbar area visually distinct from the content area when the two would blend together. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: people need to see where the bar ends. | check: at 390px scroll content under the bar and confirm the bar edge stays visible.
- MUST use standard components in a toolbar when a standard component exists. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: standard components match the bar's shape and behavior. | check: not screenshot-checkable: requires checking the component types in source.
- MUST give custom toolbar components corner radii that match the bar's corners. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: mismatched corners look unfinished. | check: at 1440px and 390px zoom into a bar corner; the custom element's corner follows the same curve.
- MUST hide toolbars only contextually, when hiding fits the task, if the app hides them at all. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: hiding should reduce distraction, not remove needed controls. | check: not screenshot-checkable: fit with the task is a judgment.
- MUST offer a reliable way to restore a hidden toolbar. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: people must be able to get hidden controls back. | check: after hiding the toolbar at 1440px and 390px, a visible control brings it back.
- MUST give each window a useful title that states the purpose of its view. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: the title confirms location and tells open windows apart. | check: at 1440px the title names the current view and differs between two open windows.
- MUST NOT use the app name as a window title. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: the app name says nothing about the content. | check: at 1440px the window title text does not equal the app name.
- MUST keep each window title under 15 characters. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: short titles leave room for other controls. | check: at 390px count the title characters; 15 or fewer and not truncated.
- MUST include navigation controls in a toolbar at the top of the window when people move through a hierarchy of content. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: people need to retrace their steps. | check: at 390px a Back control is visible on each nested view.
- MUST use the standard Back symbol and the standard Close symbol instead of text labels that say Back or Close. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: people recognize the standard symbols at once. | check: at 1440px and 390px no control reads Back or Close as text and the standard symbol shows.
- MUST keep any custom Back or Close control looking and behaving the same way everywhere in the app. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: consistency lets people trust the control. | check: at 1440px compare Back or Close across screens; icon and position match.
- MUST keep the meaning of every toolbar control clear without trial and error. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: people should not have to guess what an item does. | check: not screenshot-checkable: comprehension needs a usability test; visually confirm each item has a symbol or label.
- MUST prefer simple, recognizable symbols over text for toolbar items, except for actions such as Edit that symbols do not represent well. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: symbols save space and read faster. | check: at 1440px each text-only item is an exception such as Edit.
- MUST NOT draw borders or outlines around toolbar symbols when the toolbar section already provides a visible container. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: the container already sets the item boundary. | check: at 1440px no outlined circle or box surrounds a symbol.
- MUST give at most one primary action an emphasized style. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: one emphasized action gives a clear focal point. | check: at 1440px and 390px count emphasized items; the count is at most one.
- MUST place the primary action on the trailing side of the toolbar. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: the trailing side is where people expect the completing action. | check: at 1440px and 390px the emphasized action sits at the right edge.
- MUST group toolbar items by function and by how often they are used. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: related items are easier to find. | check: at 1440px related items sit next to each other and are separated by visible space from other groups.
- MUST place navigation controls and critical actions such as Done, Close, or Save in their own visually distinct group. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: these actions are important and must be easy to find. | check: at 1440px each such control sits in its own group with space around it.
- MUST aim for three or fewer groups of controls in a toolbar. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: many groups make the toolbar cluttered. | check: at 1440px count the visible groups; three or fewer.
- MUST separate text-labeled actions from neighboring actions with fixed space. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: adjacent text labels run together and become indistinguishable. | check: at 390px each text-labeled button has a clear gap before the next item.
- MUST keep toolbar groupings and item placement consistent across platforms. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: familiarity carries over between devices. | check: compare the same screen at 1440px and 390px; group order and placement match.
- MUST keep items that must always stay available on the trailing edge. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: trailing-edge items must remain available at every window size. | check: at 390px these items remain visible and are not moved to overflow.
- MUST place the navigation control to the left of the view title on the leading edge. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: people expect return controls before the title. | check: at 1440px the Back control sits left of the title.
- MUST NOT let people remove the navigation controls that return them to the previous view. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: those controls must stay available. | check: in the customize sheet at 1440px the Back control cannot be removed.
- MUST make every toolbar command also available from another command surface, since the toolbar can be hidden or customized. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: the toolbar cannot be the only place a command appears. | check: with the toolbar hidden at 1440px the same command is reachable from another surface.
- MUST NOT give every menu command its own toolbar item. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: many commands are not important enough to take toolbar space. | check: not screenshot-checkable: which commands merit space is a frequency judgment.
- MUST keep toolbar items legible while content scrolls behind the bar. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: scrolling content must not obscure the controls. | check: at 390px scroll a long list under the bar; labels stay legible.
- MUST keep essential toolbar controls reachable at the smallest supported window width. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: essential controls must not disappear when the window shrinks. | check: at 390px every essential control is visible or reachable in the overflow menu.
- MUST reinstate the standard toolbar controls when a modal editing state ends. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: people need the usual controls back after a modal task. | check: after exiting the modal state at 1440px the standard controls are visible again.
- MUST NOT use a pull-down menu as the only way to reach extra actions for a toolbar item. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: pull-down menus are hard to discover and clutter the bar. | check: not screenshot-checkable: discoverability needs a usability test.
- MUST keep an important action visible above scrolling content. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: an action that scrolls away may never be found. | check: at 390px scroll the content; the action stays on screen.
- MUST NOT hide a toolbar action behind scrolling unless it is important but not the primary function of the view. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: scroll-revealed actions suit secondary functions. | check: not screenshot-checkable: importance and primary function are judgments.
- MUST place a toolbar action in a view whose purpose is closely related to that action. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: people find the action where it relates to their current task. | check: not screenshot-checkable: relatedness is an information-architecture judgment.
- MUST use a tab bar, not a toolbar, to switch between the main areas of an app. | topic: Toolbars | source: https://developer.apple.com/design/human-interface-guidelines/toolbars | why: a tab bar is built for moving between app areas. | check: not screenshot-checkable: requires reviewing the information architecture.

Apple-specific (excluded):
- Apple-specific: the system adds an overflow menu automatically in macOS and iPadOS.
- Apple-specific: Liquid Glass color guidance and the ScrollEdgeEffectStyle API.
- Apple-specific: the SwiftUI .prominent button style.
- Apple-specific: SF Symbols without borders.
- Apple-specific: iOS large title that shrinks on scroll (prefersLargeTitles).
- Apple-specific: iPadOS toolbar and tab bar sharing the same top space.
- Apple-specific: macOS toolbar placed in the window frame with no bezel on items.
- Apple-specific: visionOS bottom-edge placement, variable blur, and eye and hand input.
- Apple-specific: visionOS rule against vertical toolbars.
- Apple-specific: visionOS pull-down menus obscuring window controls.
- Apple-specific: watchOS toolbar button placement in top corners or bottom bar.
- Apple-specific: developer API names (topBarLeading, primaryAction, bottomBar, fixedSpace, UIToolbar, NSToolbar, SwiftUI Toolbars).
- Apple-specific: change log entries dated 2023 to 2025.
- Apple-specific: sample apps Notes, Keynote, and Mail.

Persona and journey notes:
- Persona: people who move through a hierarchy of content and need to retrace their steps with Back.
- Persona: people who work in long sessions and want to customize the toolbar to their own commands.
- Persona: people who focus on content and hide the toolbar, and need a reliable way to bring it back.
- Journey: open a window, read its title, use the navigation control and the primary action, narrow the window until items move to overflow, then hide and restore the toolbar.

COVERAGE: 1 of 1 pages read in full (toolbars.md, all sections including Best practices, Titles, Navigation, Actions, Item groupings, Platform considerations, Resources, and Change log). Universal rules: 42. Apple-specific lines: 14.
