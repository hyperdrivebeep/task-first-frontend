Candidate catalog - evidence only; not executable requirements.

# Dark Mode: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/dark-mode
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 39878b9542f71bdf47919fdf38986e2ca0b8e85bdb0f9b0654facdd873c0cdb5
Input words: 1165. Candidate rule records: 18. Exclusion blocks: 3.
Original note: 01-foundations-a.md.
Adopted source-linked rules: F-21

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Dark Mode
URL: https://developer.apple.com/design/human-interface-guidelines/dark-mode
Universal rules:
- MUST NOT add an app-only appearance setting that overrides the system light or dark choice. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: people change one setting, and the app does not look broken | check: screenshot of the settings screen at 1440px and 390px: no appearance control.
- MUST make the app look good in both light and dark appearances, including when the system switches between them while the app runs. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: Auto switching happens during the day | check: paired light and dark screenshots at 1440px and 390px; switching while running is not screenshot-checkable.
- MUST keep text comfortably legible in dark mode with Increase Contrast and Reduce Transparency on, separately and together. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: legibility holds for people with stronger settings | check: four screenshots at 390px (dark; dark with contrast; dark with transparency reduced; both): text is readable in each.
- MUST use a permanently dark appearance only for immersive media viewing, where the interface should recede (HIG wording: "in rare cases"). | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: the media stays the focus | check: screenshot of the media view at 1440px and 390px: dark only there.
- MUST NOT derive dark colors by simply inverting light colors. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: inverted palettes lose hierarchy | check: side-by-side palette screenshots at 1440px: each dark role is chosen on its own; a pure inversion fails.
- MUST use semantic colors that adapt automatically to the current appearance for text, backgrounds and separators. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: colors follow the mode without extra work | check: light and dark screenshot pair at 390px: colors change with the mode.
- MUST NOT hard-code colors that fail to adapt to the appearance. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: a fixed color breaks in one mode | check: light and dark screenshot pair at 390px: a hard-coded color stays the same in both, which fails.
- MUST keep the contrast ratio between foreground and background colors at least 4.5:1 in dark mode. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: text stays legible on dark surfaces | check: screenshots at 1440px and 390px: sampled pairs are 4.5:1 or more.
- MUST aim for a 7:1 contrast ratio for custom foreground and background colors, especially for small text (HIG wording: "strive"). | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: small custom text stands out clearly | check: screenshots at 390px: sampled small custom text is 7:1 or more.
- MUST slightly darken a bright white background in a content image so it does not glow in dark mode (HIG wording: "consider"). | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: a glowing white block pulls focus from the UI | check: screenshot at 390px in dark mode: the image's white area does not glare beside the dark UI.
- MUST tint interface icons with adaptive colors or vibrancy so they follow the appearance. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: icons stay legible in both modes | check: light and dark screenshot pair at 390px: icon tint changes with the mode.
- MUST supply separate light and dark interface icons when one icon loses contrast in the other mode (for example an outline only on light). | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: each icon reads in its own mode | check: light and dark screenshot pair at 390px: each icon is legible in its mode.
- MUST make full-color images and icons look right in both light and dark appearances. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: artwork does not clash with either mode | check: light and dark screenshot pair at 390px.
- MUST use separate light and dark assets when one asset looks right in only one appearance. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: each mode gets an asset that suits it | check: light and dark screenshot pair at 390px: no asset looks wrong in either mode.
- MUST use the system label colors (primary, secondary, tertiary, quaternary) for text labels. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: text adapts to both modes | check: light and dark screenshot pair at 390px: text steps down in emphasis in both modes.
- MUST use the platform's own text fields and text views instead of drawing text yourself, where possible. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: system views stay legible on any background | check: not screenshot-checkable: an implementation choice; the reviewer checks the code.
- MUST make foreground surfaces such as popovers and modal sheets lighter than the background they sit on in dark mode. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: depth reads clearly | check: light and dark screenshots at 1440px and 390px with a sheet open: the sheet is lighter than the background.
- MUST NOT replace system background colors with custom backgrounds that hide the depth and separation the system provides. | topic: Dark Mode | source: https://developer.apple.com/design/human-interface-guidelines/dark-mode | why: layered views keep their visual distinctions | check: screenshot with a sheet open at 1440px and 390px: the layers remain distinct.
Apple-specific (excluded):
- SF Symbols that adapt to Dark Mode automatically (Apple symbol set).
- macOS desktop tinting with the graphite accent, and the transparency rules for custom macOS components.
- Platform support notes: Dark Mode is not supported on visionOS or watchOS; no extra tvOS considerations.
Persona and journey notes:
- People who choose Dark Mode in low-light places; people who choose Auto, so the mode can change during the day while the app is open; people with Increase Contrast or Reduce Transparency on.
- Journey: the system can switch appearance while the app is open, and the app must follow without a restart.
