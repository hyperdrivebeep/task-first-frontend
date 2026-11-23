Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: p003-loading

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Loading (12 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/loading

- [LOA-01] MUST show some content as soon as possible instead of holding the screen until all content has loaded.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: people do not read an empty screen as "still loading" and do not start to doubt the app.
  Check@1440/390: throttle the network, capture 1440px and 390px screenshots in the first moments of load; real or placeholder content is visible, not a blank screen.
- [LOA-02] MUST show placeholder text, graphics, or animations while content is still loading.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: people see the layout that is coming and know the app is working.
  Check@1440/390: capture a throttled loading state at 1440px and 390px; placeholder shapes, text, or animation occupy the content area.
- [LOA-03] MUST replace each placeholder with its real content as that content becomes available.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: people never keep looking at stale placeholders after the data has arrived.
  Check@1440/390: capture before and after load at 1440px and 390px; no placeholder remains where real content has arrived.
- [LOA-04] MUST keep other actions in the app usable while content loads in the background.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: people can keep working instead of waiting on a single blocked screen.
  Check@1440/390: capture a throttled load at 1440px and 390px; primary navigation and at least one other control are enabled and not covered by a full-screen blocker.
- [LOA-05] MUST load content that is not needed right away in the background, outside the path to the first usable screen.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: the screen the person came for stays responsive.
  Check@1440/390: not screenshot-checkable: requires a network or timing trace showing which request blocks first paint.
- [LOA-06] MUST schedule large asset downloads for nondisruptive times, such as right after installation or during updates, rather than before first launch.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: people can install and open the app without waiting on large files.
  Check@1440/390: not screenshot-checkable: requires install and launch timing traces.
- [LOA-07] MUST show something of interest, such as tips, hints, or feature introductions, when loading cannot be avoided for a long time.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: the wait feels shorter and people learn something useful while waiting.
  Check@1440/390: capture the long-load state at 1440px and 390px; the screen shows that content, not only a spinner.
- [LOA-08] MUST estimate the remaining loading time as accurately as possible so placeholder content neither ends too early nor has to repeat.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: people are not left with a tip that vanishes too soon or loops again and again.
  Check@1440/390: not screenshot-checkable: requires measuring the actual load duration against the timing the placeholder content uses.
- [LOA-09] MUST show a visible loading state when content takes more than a moment or two to appear.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: people know the app is working and not frozen.
  Check@1440/390: capture a throttled load at 1440px and 390px; a progress indicator or equivalent loading element is visible.
- [LOA-10] MUST use a determinate progress indicator when the total loading time is known.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: people see how much is left to wait.
  Check@1440/390: capture mid-load at 1440px and 390px; the indicator's fill matches the known progress value.
- [LOA-11] MUST use an indeterminate progress indicator when the total loading time is unknown.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: a bar that fills and then stalls does not mislead people about how long to wait.
  Check@1440/390: capture mid-load at 1440px and 390px; the indicator shows motion with no fill level or percentage.
- [LOA-12] MUST NOT show a loading indicator when content can display instantly or within a moment or two.
  HIG: Loading <https://developer.apple.com/design/human-interface-guidelines/loading> | Why: people are not distracted by a spinner flashing on fast loads.
  Check@1440/390: not screenshot-checkable: requires a fast-network timing trace showing that no indicator appears.

# Exclusions and persona notes

### Loading
Apple-specific, excluded:
- Progress indicators are Apple's system-provided components named in the HIG; the universal progress rules above cover the behavior without the component.
- BackgroundAssets is Apple's framework for scheduling downloads; only the principle of nondisruptive scheduling is kept above.
- watchOS guidance to avoid loading indicators on Apple Watch and to show content immediately is Apple-platform specific.
Persona and journey notes:
- The page is written for app and game developers and speaks of people who wait on loading, installs, and launches; it names game players and gives no persona or journey steps beyond waiting for content.
