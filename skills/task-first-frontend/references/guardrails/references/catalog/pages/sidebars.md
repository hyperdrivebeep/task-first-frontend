Candidate catalog - evidence only; not executable requirements.

# Sidebars: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/sidebars
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: fbbd4e4c727e47075c9f22d40560e663d0cf8941a0042d8ee639ceefb2b61a6c
Input words: 1048. Candidate rule records: 18. Exclusion blocks: 8.
Original note: p062-sidebars/sidebars.md.
Adopted source-linked rules: C-13

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Sidebars
URL: https://developer.apple.com/design/human-interface-guidelines/sidebars
Universal rules:
- MUST use a more compact navigation control instead of a sidebar when the space is limited, because a sidebar needs a large amount of vertical and horizontal room. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people keep the content readable instead of squeezed | check: at 1440px the sidebar is visible; at 390px no sidebar is shown, a compact navigation control replaces it, and the content is fully readable
- MUST prefer a tab bar over a sidebar for main areas when the areas fit in a tab bar, because a tab bar leaves more room for content. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: the main areas stay one tap away and the content gets more space | check: at 390px the main areas appear in a tab bar; at 1440px a sidebar appears only when there are more areas than the tab bar holds
- MUST offer a visible control that switches between the sidebar layout and the tab bar layout when the app offers both. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people choose the layout that suits their task without relearning the app | check: at 1440px and 390px the switch control is visible, and activating it changes the layout in the next screenshot
- MUST adapt the navigation to the width of its view and update it when the window is resized or the device rotates. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: the navigation always fits the space people have | check: resize from 1440px to 390px; the layout changes between sidebar and compact form, and neither screenshot shows clipped items
- MUST collapse the sidebar automatically when its container becomes narrow, so the content gets the room. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people read content without manually closing panels | check: at 390px the sidebar is collapsed in the screenshot and the content fills the width
- MUST let people hide and show the sidebar with a visible control, because hiding it gives the content more room or less distraction. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people can focus on details when they need to | check: at 1440px a show/hide control is visible; after activating it the next screenshot shows no sidebar and the content fills the width
- MUST NOT hide the sidebar by default, so its destinations stay discoverable. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people can see where they can go on first use | check: the first-load screenshot at 1440px shows the sidebar expanded with its items visible
- MUST limit sidebar hierarchy to two levels. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people find destinations without digging through nested levels | check: at 1440px no sidebar item sits under a third level of indentation or disclosure
- MUST switch to a split layout with a content list between the sidebar and the detail view when the data hierarchy is deeper than two levels. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people move from category to item to detail without losing their place | check: at 1440px three columns are visible (sidebar, content list, detail); at 390px each step shows one column at a time
- MUST use short, descriptive group titles, with unnecessary words removed, when a sidebar has two levels. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people scan group names quickly | check: not screenshot-checkable: brevity is a judgment on wording; a reviewer reads the 1440px screenshot and flags filler words or truncated titles
- MUST group a sidebar with a lot of content using disclosure controls, so its vertical space stays manageable. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people see the groups they need without a long scroll | check: at 1440px with the full item set, groups show disclosure controls and the first group stays visible without scrolling
- MUST let people customize the contents and order of sidebar items when they can decide which areas matter most. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people put the areas they use most at the top | check: not screenshot-checkable: depends on whether the product exposes a customize control; if it does, the 1440px screenshot shows that control
- MUST use familiar, recognizable symbols to represent sidebar items. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people recognize an area before reading its label | check: at 1440px and 390px each sidebar item shows an icon a reviewer can name before reading its label
- MUST use a vector icon rather than a bitmap image for a custom sidebar icon. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: icons stay sharp at every size and display scale | check: not screenshot-checkable: the asset format is checked in the source files, not in the render
- MUST use a fixed color on a sidebar icon only where the color clarifies its meaning or draws attention to it. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: a color that stands out signals importance and is not noise | check: at 1440px most sidebar icons share one color, and any icon with a distinct fixed color has a stated purpose in the design notes
- MUST NOT put critical information or actions at the bottom edge of a sidebar, because people often move the window so its bottom edge is hidden. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people never lose an important action because of how they placed the window | check: at 1440px and 390px no critical item sits in the bottom row of the sidebar in the screenshot
- MUST keep a selection made in secondary navigation from changing which top-level tab is open. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: people stay in the context they chose and do not get jumped to another section | check: at 1440px select an item in a sidebar inside a tab; the next screenshot shows the same tab still active
- MUST extend visually rich content under a floating sidebar, by horizontal scrolling or a mirrored background, so the sidebar does not end at a hard edge of empty space. | topic: Sidebars | source: https://developer.apple.com/design/human-interface-guidelines/sidebars | why: the content feels continuous and the sidebar reads as layered over it | check: at 1440px the content color or image runs under the sidebar with no blank strip at its edge
Apple-specific (excluded):
- Liquid Glass materials layer and the backgroundExtensionEffect() developer API.
- SF Symbols and custom SF Symbols as the icon source.
- iPadOS edge-swipe gesture for showing and hiding the sidebar.
- macOS View menu Show Sidebar and Hide Sidebar commands.
- macOS system accent color applied to sidebar icons and the General settings sidebar icon size.
- Mail app VIP icon example.
- visionOS window expansion to accommodate a sidebar.
- Developer API notes: sidebarAdaptable, NavigationSplitView, UISplitViewController, UICollectionLayoutListConfiguration, NSSplitViewController.
Persona and journey notes:
- A person moves between areas of the app and top-level collections such as folders and playlists, and wants to decide which areas are most important and in what order.
- A person with deep content wants more room for details or less distraction, and may hide the sidebar to get it.
- A person may move the window so its bottom edge is out of view, and relies on the sidebar being visible on first use.
COVERAGE:
- sidebars: read, about 950 words, 18 universal rules, 8 excluded
