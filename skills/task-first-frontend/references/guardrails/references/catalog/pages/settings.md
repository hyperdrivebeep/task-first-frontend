Candidate catalog - evidence only; not executable requirements.

# Settings: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/settings
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: d03ebf725ab9b1f2d7baed5bb2faefe4803ca8aae3ae9ab1d0f1e0d94b05d739
Input words: 1028. Candidate rule records: 18. Exclusion blocks: 9.
Original note: p017-settings/settings.md.
Adopted source-linked rules: P-19

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Settings
URL: https://developer.apple.com/design/human-interface-guidelines/settings
Universal rules:
- MUST set default settings that give the best experience to the largest number of people, so people can start using the app without changing any setting. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people start using the product at once and do not stop to configure it | check: first launch with no changes at 1440px and 390px shows the main content, with no settings prompt blocking it
- MUST choose device-dependent settings automatically, such as performance for the current device, instead of asking people to choose after launch. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people are not burdened with a technical choice they cannot judge | check: not screenshot-checkable: needs a runtime device-profile check; reviewer confirms no device-tuning question appears at 1440px or 390px on first run
- MUST NOT ask people for setup information the app can detect itself, such as a connected controller or accessory, or the current appearance preference. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people avoid answering questions the product could answer for them | check: at 1440px and 390px the settings screen contains no question whose answer the app can read from the device or system
- MUST keep the number of settings small and limited to options people actually need. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people face a shorter, more approachable list | check: count the entries on the settings screen at 1440px and 390px; a reviewer lists each entry and justifies it
- MUST NOT offer so many settings that a particular one is hard to find. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people locate the option they want without scanning a long list | check: at 1440px and 390px every settings section is visible or reachable within one visible list, with no entry buried under a long scroll
- MUST make settings reachable through the entry point people expect on that platform, such as a standard keyboard shortcut when a physical keyboard is connected. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people open settings the way they already know | check: not screenshot-checkable: needs a key press on a connected keyboard; reviewer triggers the expected entry point and captures the settings screen at 1440px
- MUST NOT include custom versions of global options, such as accessibility accommodations, scrolling behavior, or authentication methods, in the app's own settings area. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people do not wonder whether a system-wide choice still applies to the app | check: at 1440px and 390px the settings screen has no entry named or styled as an accessibility, scrolling, or authentication option
- MUST follow the systemwide choices people made for accessibility, scrolling behavior, and authentication, and never override them inside the app. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people trust that their global choices hold in every app | check: not screenshot-checkable: needs the OS setting changed on the test device; reviewer captures the app at 1440px and 390px before and after the change and confirms the app follows it
- MUST place only general, infrequently changed options in the app's own settings area. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people reach the rare options without wading through frequent ones | check: the settings screen at 1440px and 390px lists only options such as window configuration, saving behavior, keyboard mapping, or account details
- MUST NOT put options that people change during a task into the settings area. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people do not have to leave their work to adjust it | check: at 1440px and 390px the settings screen contains no option that also appears as a control on a task screen
- MUST place task-specific options, such as showing or hiding parts of a view, reordering a collection, or filtering a list, on the screen they affect. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people find the control where they need it and keep their place | check: at 1440px and 390px the filter, sort, or show/hide control appears on the list or view it changes
- MUST NOT hide the result of a task-specific option until people leave the task and return. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people see the effect of their change immediately | check: toggle or filter a list option at 1440px and 390px; the visible content updates on the same screen without navigating away
- MUST keep the settings navigation stable and visible while people move between sections. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people rely on a settings layout that does not shift under them | check: at 1440px and 390px the navigation for sections is in the same place and remains visible after selecting each section
- MUST mark the active settings section clearly in the navigation. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people always know which area they are in | check: at 1440px and 390px the highlighted navigation item matches the section currently shown
- MUST update the settings title to name the section currently visible, and use the title "App Name Settings" when the settings have only one section. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people keep their bearings when they switch sections | check: at 1440px and 390px the title text changes with each section, and a single-section settings screen shows "App Name Settings"
- MUST reopen the settings area on the section people viewed last. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people do not repeat navigation when they adjust related settings more than once | check: navigate to a section, close settings, reopen; the 1440px and 390px captures show the same section
- MUST NOT place a settings button in the primary toolbar when it takes space from frequently used commands. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people keep their essential commands visible | check: at 1440px the primary toolbar shows every frequent command fully, and at 390px no settings control takes a slot from them
- MUST size the settings window or panel to fit the current section, so people do not have to resize it to see its contents. | topic: Settings | source: https://developer.apple.com/design/human-interface-guidelines/settings | why: people see the whole section at once | check: at 1440px and 390px each section's contents are fully visible without resizing, or scroll only within the panel
Apple-specific (excluded):
- The system-provided Settings app and its content, such as appearance, network connections, account details, accessibility, and language and region settings.
- Adding app or game settings into the system-provided Settings app, and the button that opens it directly.
- The Command-Comma keyboard shortcut, an Apple keyboard convention.
- The Settings item in the macOS App menu and document-level options in the File menu.
- macOS settings window details: dimming the minimize and maximize buttons and keeping the window in the Dock.
- The macOS settings window layout of a noncustomizable toolbar with pane buttons.
- watchOS: no custom settings in the system Settings app, and watch More menu guidance.
- Detecting Dark Mode, an Apple OS feature.
- Apple developer resources: SwiftUI Settings, UserDefaults, and PreferencePanes.
Persona and journey notes:
- People must suspend what they are doing to open an app's settings, so only options they rarely need belong there.
- People expect the system Settings app to govern global options, and they expect every app to follow those choices.
- People often adjust related settings more than once, so the settings area should remember the last section they used.
- In games, players adjust their approach to a task as part of gameplay rather than through a settings option.
- People want to start enjoying the app without making adjustments first.
COVERAGE:
- settings: read, ~950 words, 18 universal rules, 9 excluded
