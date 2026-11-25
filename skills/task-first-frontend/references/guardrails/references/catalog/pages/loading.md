Candidate catalog - evidence only; not executable requirements.

# Loading: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/loading
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 17145626f76be7f698479f92b0aae2865e24f32f388300ddbaafe32bd14eb051
Input words: 504. Candidate rule records: 12. Exclusion blocks: 3.
Original note: p003-loading/loading.md.
Adopted source-linked rules: P-05

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Loading
URL: https://developer.apple.com/design/human-interface-guidelines/loading
Universal rules:
- MUST show some content as soon as possible instead of holding the screen until all content has loaded. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: people do not read an empty screen as "still loading" and do not start to doubt the app. | check: throttle the network, capture 1440px and 390px screenshots in the first moments of load; real or placeholder content is visible, not a blank screen.
- MUST show placeholder text, graphics, or animations while content is still loading. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: people see the layout that is coming and know the app is working. | check: capture a throttled loading state at 1440px and 390px; placeholder shapes, text, or animation occupy the content area.
- MUST replace each placeholder with its real content as that content becomes available. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: people never keep looking at stale placeholders after the data has arrived. | check: capture before and after load at 1440px and 390px; no placeholder remains where real content has arrived.
- MUST keep other actions in the app usable while content loads in the background. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: people can keep working instead of waiting on a single blocked screen. | check: capture a throttled load at 1440px and 390px; primary navigation and at least one other control are enabled and not covered by a full-screen blocker.
- MUST load content that is not needed right away in the background, outside the path to the first usable screen. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: the screen the person came for stays responsive. | check: not screenshot-checkable: requires a network or timing trace showing which request blocks first paint.
- MUST schedule large asset downloads for nondisruptive times, such as right after installation or during updates, rather than before first launch. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: people can install and open the app without waiting on large files. | check: not screenshot-checkable: requires install and launch timing traces.
- MUST show something of interest, such as tips, hints, or feature introductions, when loading cannot be avoided for a long time. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: the wait feels shorter and people learn something useful while waiting. | check: capture the long-load state at 1440px and 390px; the screen shows that content, not only a spinner.
- MUST estimate the remaining loading time as accurately as possible so placeholder content neither ends too early nor has to repeat. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: people are not left with a tip that vanishes too soon or loops again and again. | check: not screenshot-checkable: requires measuring the actual load duration against the timing the placeholder content uses.
- MUST show a visible loading state when content takes more than a moment or two to appear. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: people know the app is working and not frozen. | check: capture a throttled load at 1440px and 390px; a progress indicator or equivalent loading element is visible.
- MUST use a determinate progress indicator when the total loading time is known. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: people see how much is left to wait. | check: capture mid-load at 1440px and 390px; the indicator's fill matches the known progress value.
- MUST use an indeterminate progress indicator when the total loading time is unknown. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: a bar that fills and then stalls does not mislead people about how long to wait. | check: capture mid-load at 1440px and 390px; the indicator shows motion with no fill level or percentage.
- MUST NOT show a loading indicator when content can display instantly or within a moment or two. | topic: Loading | source: https://developer.apple.com/design/human-interface-guidelines/loading | why: people are not distracted by a spinner flashing on fast loads. | check: not screenshot-checkable: requires a fast-network timing trace showing that no indicator appears.
Apple-specific (excluded):
- Progress indicators are Apple's system-provided components named in the HIG; the universal progress rules above cover the behavior without the component.
- BackgroundAssets is Apple's framework for scheduling downloads; only the principle of nondisruptive scheduling is kept above.
- watchOS guidance to avoid loading indicators on Apple Watch and to show content immediately is Apple-platform specific.
Persona and journey notes:
- The page is written for app and game developers and speaks of people who wait on loading, installs, and launches; it names game players and gives no persona or journey steps beyond waiting for content.
COVERAGE:
- loading: read, ~650 words, 12 universal rules, 3 excluded
