Candidate catalog - evidence only; not executable requirements.

# Tab bars: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/tab-bars
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 7da0ddc32c9d22e9b77140fd162d15d31beccde2610ba98d76c13f6ccd4cc8c3
Input words: 1547. Candidate rule records: 22. Exclusion blocks: 1.
Original note: p063-tab-bars/tab-bars.md.
Adopted source-linked rules: C-11, C-12

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Tab bars
URL: https://developer.apple.com/design/human-interface-guidelines/tab-bars

Universal rules
- MUST NOT use the tab bar for actions; use it only to navigate among sections | Source: Best practices | Why: a tab bar represents the top-level sections of the app | Check: every tab switches to a section, and action controls live elsewhere
- MUST use a toolbar for controls that act on elements in the current view | Source: Best practices | Why: keeps the tab bar dedicated to navigation | Check: no view-level action controls sit in the tab bar
- MUST keep the tab bar visible when people navigate to different sections of the app | Source: Best practices | Why: a hidden tab bar makes people forget which area of the app they are in | Check: the tab bar is present on every section screen
- MUST NOT hide the tab bar, except when a modal view covers it | Source: Best practices | Why: a modal view is temporary and self-contained | Check: the tab bar is absent only under modal presentation
- MUST use the number of tabs the app hierarchy requires, weighing the complexity of each extra tab against how often people need that section | Source: Best practices | Why: tabs represent the app hierarchy | Check: each tab maps to a section people access frequently
- MUST prefer fewer tabs | Source: Best practices | Why: it is generally easier to navigate among fewer tabs | Check: tab count is no higher than the hierarchy needs
- MUST consider a sidebar, or a tab bar that adapts to a sidebar, for an app with a complex information structure, where the platform offers one | Source: Best practices | Why: a flat tab bar may not represent a complex hierarchy | Check: complex apps offer a sidebar option
- MUST limit the scenarios in which horizontal space pushes tabs into an overflow More tab | Source: Best practices | Why: hidden tabs are harder for people to reach and notice | Check: key sections are not hidden behind a More tab at common device sizes and orientations
- MUST NOT disable or hide tab bar buttons when their content is unavailable | Source: Best practices | Why: buttons that appear in some cases and not others make the interface look unstable and unpredictable | Check: every tab button stays visible in all states
- MUST explain why a section's content is unavailable when that section is empty | Source: Best practices | Why: an empty tab with no explanation leaves people without context | Check: an empty section shows a reason
- MUST include a text label on every tab bar item | Source: Best practices | Why: labels clarify the type of content or functionality each tab contains | Check: every tab shows a label beside or beneath its icon
- MUST use single words for tab labels whenever possible | Source: Best practices | Why: short labels aid navigation | Check: each label is one word, or the reason for a longer label is clear
- MUST use badges only to indicate critical information that warrants a person's attention | Source: Best practices | Why: reserving badges preserves their impact and meaning | Check: a badge appears only for new or updated critical information
- MUST NOT give tab labels or icons a color similar to the content-layer background | Source: Best practices | Why: similar colors reduce differentiation between navigation and content | Check: tab bar elements are clearly distinguishable from content
- MUST use a monochromatic tab bar, or an accent color with sufficient visual differentiation, when the content layer is bright and colorful | Source: Best practices | Why: keeps the tab bar distinct from colorful content | Check: tab bar colors are monochrome or clearly contrast with the content
- MUST use a tab bar for navigation to the sections people use most | Source: iPadOS | Why: the tab bar gives access to the most-used sections | Check: the most-used sections are tabs
- MUST let people customize the tab bar in apps with many sections people might want to reach | Source: iPadOS | Why: people use different sections frequently | Check: people can add frequently used items to the tab bar and remove less used ones
- MUST keep the default list of customizable tabs at five or fewer | Source: iPadOS | Why: preserves continuity between compact and regular view sizes | Check: the default tab list has no more than five items
- MUST supply an icon and a text label for each tab | Source: visionOS | Why: the icon is always visible and the label is revealed when people look at the tab bar | Check: every tab has both an icon and a label
- MUST keep tab labels short enough for people to read at a glance | Source: visionOS | Why: the tab bar expands, so labels must be quick to read | Check: labels are brief
- MUST NOT let selections in a sidebar inside a tab change which tab is currently open | Source: visionOS | Why: keeps the tab selection separate from secondary navigation | Check: selecting a sidebar item leaves the open tab unchanged
- MUST order tabs in a live-viewing app as live content first, then cloud DVR or other recorded content, then other content | Source: tvOS | Why: consistent organization for live-streaming apps | Check: tab order matches live, recorded, then other

Apple-specific (excluded)
Liquid Glass material background on iOS tab bars; iOS tab bar minimize behavior with an attached accessory such as the MiniPlayer in Music (TabBarMinimizeBehavior, MinimizeBehavior); iOS dedicated search tab at the trailing end (permissive and tied to iOS search); SF Symbols for tab bar icons and the filled-symbol preference for platform consistency; iPadOS tab bar placement near the top of the screen, fixed versus convertible-to-sidebar choice, tabBarOnly and sidebarAdaptable, and navigationsplitview for sidebars; tvOS tab bar customization options (tint, font, button icons), default translucency, 68 point height and 46 point top offset, focus drop shadow, remote focus and Menu button behavior, scrolling and fade truncation behavior, and split-view pinning; tvOS examples in the TV app (Watch Now, Movies, TV Show, Sports, Kids, Library); visionOS vertical tab bar fixed to the window's leading side, gaze-based expansion and tap selection, and temporary obscuring of content; Clock and Music app examples; developer API names (TabView, TabViewBottomAccessoryPlacement, TabViewCustomization, UITabBar, Placement); Apple cross-references to materials, search fields, sidebars, Liquid Glass color, notifications, and live-viewing-apps.

Persona and journey notes
Persona: people moving between the top-level sections of an app who expect each section to keep its own navigation state. Journey: people open the app, switch sections with the tab bar, leave a section, and return to find it where they left it; a modal view may briefly cover the tab bar and then return it.

COVERAGE
Read tab-bars.md in full with one read call. Covered the intro, Best practices, the iOS, iPadOS, tvOS, and visionOS sections, Resources, and the change log. Universal rules written: 22. Descriptive or permissive text not turned into rules: macOS and watchOS support note, iOS floating layout, custom icon dimensions (linked guidance not in this file), the badge appearance description, and the expanded visionOS description. Apple-specific items are listed in the excluded section above.
