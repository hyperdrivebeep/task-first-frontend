Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: 05-foundations-c-2

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## SF Symbols (33 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/sf-symbols

- [SS-01] MUST match an icon's stroke weight to the weight of the text beside it
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: icons read as part of the sentence instead of a mismatched mark
  Check@1440/390: screenshot an icon beside body text and beside a heading at 1440px and 390px; stroke thickness visibly matches the text weight
- [SS-02] MUST size an icon relative to the adjacent text's cap height, not in fixed pixels
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: icon and text stay aligned when text size changes
  Check@1440/390: screenshot icon and text at 1440px and 390px; icon height matches cap height and the baselines align
- [SS-03] MUST offer small, default and large icon sizes when emphasis must change without breaking weight match with text
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: people see emphasis change without the icon looking off next to its text
  Check@1440/390: screenshot the three sizes beside the same text at 1440px and 390px; weight still matches at each size
- [SS-04] MUST check each icon's rendering mode in every context where it appears
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: a detail lost at small size or on a busy background does not cost the person meaning
  Check@1440/390: screenshot each icon on every background it appears on at 1440px and 390px; all parts of the icon are distinguishable
- [SS-05] MUST try a second rendering mode wherever the default mode hurts legibility
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the default setting does not silently hide icon detail
  Check@1440/390: screenshot default and alternative modes side by side at 390px; the chosen mode is the more legible one
- [SS-06] MUST color icons with semantic or system color tokens, not fixed hex values
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: icons follow accessibility settings and light or dark appearance, so they stay visible for everyone
  Check@1440/390: screenshot in light and dark appearance at 1440px and 390px; icon contrast holds in both
- [SS-07] MUST use several opacities of one accent color to show depth and emphasis within an icon
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the icon gains hierarchy while staying one coherent color family
  Check@1440/390: screenshot the icon; every layer tint comes from the single accent color at different opacities
- [SS-08] MUST use intrinsic icon color only where it matches the meaning it signals, such as red for data loss
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the person reads the color as the intended state, not a decoration
  Check@1440/390: screenshot each multicolor icon; its color matches the state its label describes
- [SS-09] MUST use color change in an icon only to show a value that changes over time, never to show depth
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the person can read the color as a level, such as capacity or strength
  Check@1440/390: screenshot the icon at two different values; each color change maps to the changing value
- [SS-10] MUST exclude layers that do not represent the changing value from a value-driven color change
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: static parts keep their meaning, so the change is not misread
  Check@1440/390: screenshot the icon at two values; static layers keep one color in both
- [SS-11] MUST use layer elevation, not color change, to separate foreground from background parts of an icon
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: depth reads as depth and does not get confused with a state change
  Check@1440/390: screenshot the icon; foreground layers look raised against background layers without a value-driven color shift
- [SS-12] MUST check a gradient-filled icon at small sizes before use, since gradients look best at larger sizes
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the gradient reads clearly instead of disappearing at small size
  Check@1440/390: screenshot the gradient icon at 1440px and at 390px; the gradient is clearly visible at the size used
- [SS-13] MUST use the outline variant for icons beside text, such as in toolbars and lists, and the fill variant only for emphasis such as selection
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the outline matches text and the fill signals the chosen item
  Check@1440/390: screenshot a toolbar and a list at 1440px and 390px; outline icons sit beside text, fill appears only on the selected state
- [SS-14] MUST show an unavailable item or action with the slash variant of its icon
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the person sees at once that the action cannot be taken
  Check@1440/390: screenshot a disabled item at 1440px and 390px; the slash is visible on the icon
- [SS-15] MUST use an enclosed variant, with the icon inside a circle or square, for small icons whose details are hard to identify
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the enclosing shape keeps small icons identifiable
  Check@1440/390: screenshot the plain and enclosed versions at 390px; the enclosed version is easier to identify
- [SS-16] MUST use language and script icon variants that match the user's active language and writing direction
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the icon's meaning fits the language the person reads
  Check@1440/390: screenshot the same screen in an English locale and a right-to-left locale at 1440px and 390px; icon variants match each locale
- [SS-17] MUST check each icon's availability against the lowest OS version the product supports
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: people on older systems do not see a blank or missing icon
  Check@1440/390: not screenshot-checkable: availability is a version lookup against the icon list and the supported-version list
- [SS-18] MUST use animations only where they communicate a state change, action feedback or ongoing activity
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: motion carries information instead of distracting the person
  Check@1440/390: not screenshot-checkable: motion; a screen recording at 1440px and 390px shows each animation tied to one of those three purposes
- [SS-19] MUST NOT stack so many animations on an icon or screen that they distract from the content
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the person can keep focus on the task
  Check@1440/390: not screenshot-checkable: motion; a screen recording at 390px shows a limited number of animated icons at once
- [SS-20] MUST play one-shot feedback animations, such as bounce, once and loop only ongoing-activity animations
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: a single confirmation does not keep moving, and ongoing work stays visibly ongoing
  Check@1440/390: not screenshot-checkable: motion; a screen recording shows bounce plays once and pulse or breathe repeats only while activity continues
- [SS-21] MUST give every looping icon animation a stop condition tied to the activity it signals
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the person is never left with motion that outlives the activity
  Check@1440/390: not screenshot-checkable: motion; a screen recording shows the loop ends when the activity ends
- [SS-22] MUST use a transition that reads as a state change when one icon replaces another
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the person understands the new icon is the next state, not a separate element
  Check@1440/390: not screenshot-checkable: motion; a screen recording at 390px shows the outgoing icon leaving and the incoming icon entering as one change
- [SS-23] MUST use attention motion, such as wiggle, only for a change or call to action the person might overlook
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: attention motion stays rare enough to still get noticed
  Check@1440/390: not screenshot-checkable: motion; a screen recording shows attention motion only on the overlooked change or the call to action
- [SS-24] MUST move an icon along the direction it represents when it animates, such as an arrow moving the way it points
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the motion reinforces the icon's meaning
  Check@1440/390: not screenshot-checkable: motion; a screen recording shows an arrow icon moving in the direction it points
- [SS-25] MUST use a closed-loop icon design for a looping circular progress icon
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the repeat is seamless and does not show a visible jump
  Check@1440/390: not screenshot-checkable: motion; a screen recording shows no visible seam where the loop restarts
- [SS-26] MUST match animation tone to the product's brand and visual style
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: motion feels like part of the product, not a foreign effect
  Check@1440/390: not screenshot-checkable: a human judgment of brand tone against the product's style guide, shown in a recording
- [SS-27] MUST design a custom icon with the same level of detail, optical weight, alignment, position and perspective as the icons around it
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the custom icon does not look like a different style in the same toolbar
  Check@1440/390: screenshot the custom icon beside system or existing icons at 1440px and 390px; detail, weight and alignment match
- [SS-28] MUST make a custom icon simple, recognizable, inclusive and directly related to the action or content it represents
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the person understands the action without guessing
  Check@1440/390: screenshot the icon in place at 390px; a reviewer names the action it represents without reading the label
- [SS-29] MUST build enclosure and badge variants of a custom icon from one shared component, not from hand-drawn copies
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: variants stay consistent with each other and with the set
  Check@1440/390: not screenshot-checkable: the construction method is visible only in the design source; a screenshot of the variants side by side confirms visual match
- [SS-30] MUST apply negative side margins to a custom icon when a badge widens it, so stacked icons align optically
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: a stack of icons with badges lines up on its visual edge
  Check@1440/390: screenshot a stack of badged icons at 1440px and 390px; left edges align optically
- [SS-31] MUST give every custom icon an accessible text label
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: people using a screen reader hear what the visible icon means
  Check@1440/390: not screenshot-checkable: the label is in the accessibility tree or code; a reviewer confirms each custom icon has one
- [SS-32] MUST test each custom icon in every animation it uses, because shapes can look different in motion
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the icon stays readable while it moves
  Check@1440/390: not screenshot-checkable: motion; a screen recording at 1440px and 390px of each animation shows the icon's shape stays clear
- [SS-33] MUST NOT use a licensed icon set's symbols in app icons, logos or trademarked marks, or anything confusingly similar
  HIG: SF Symbols <https://developer.apple.com/design/human-interface-guidelines/sf-symbols> | Why: the product avoids a license breach and a brand confusion
  Check@1440/390: screenshot the app icon and logo at 1440px and 390px; no symbol from the icon set appears in either

# Exclusions and persona notes

### SF Symbols
Apple-specific, excluded:
- SF Symbols app, its symbol library, the inspector pane, and the Info badge for noncustomizable copyrighted symbols
- San Francisco system font and its nine weights, named as the matching reference
- Named Apple symbols (cloud.sun.rain.fill, speaker.wave.3, leaf, trash.slash, person.2.fill) and the SF Symbols 6 and 7 release years
- Symbols, SymbolEffect, renderingmode, SwiftUI imageScale, UIKit SymbolScale and AppKit SymbolConfiguration APIs
- Apple product depictions: copyright, no replicas, and no customizing symbols that represent an Apple feature
- VoiceOver as the named screen reader (the alt-text label rule itself is universal)
- Apple appearance modes (vibrancy, Dark Mode), iOS tab bar and iOS swipe actions, and Apple branding and right-to-left guidance links
Persona and journey notes:
- People look at the interface as readers who must make out symbol details, especially at small sizes, and who see feedback after they act; the page defines no persona or journey steps.
