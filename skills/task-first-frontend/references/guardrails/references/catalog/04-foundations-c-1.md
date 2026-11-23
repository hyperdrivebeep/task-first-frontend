Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: 04-foundations-c-1

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Typography (31 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/typography

- [TYP-01] MUST use font sizes most people can read easily, at or above the minimum text size recommended for each target platform, for both custom and system fonts.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: people read at varied viewing distances and under varied conditions
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that no text falls below the project's per-platform minimum.
- [TYP-02] MUST start from the recommended default text size for each target platform, for both custom and system fonts.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: the default is the baseline the legibility guidance is built on
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that body text renders at the platform default before any user scaling.
- [TYP-03] MUST test text legibility in different contexts, including on each platform the product runs on.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: text that reads well in one context can fail in another; the page's example is game text on each platform
  Check@1440/390: not screenshot-checkable: requires exercising the product on each target platform and in each context, not one layout capture.
- [TYP-04] MUST choose a remedy when testing shows text is hard to read: a larger type size, higher contrast between text and background, or a typeface designed for legibility.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: the page lists these three remedies (its wording is "consider")
  Check@1440/390: not screenshot-checkable: the remedy is a design decision taken after a test result.
- [TYP-05] MUST NOT use ultralight, thin, or light font weights for small text.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: light weights are difficult to see when text is small; the page prefers regular, medium, semibold, or bold
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that small text uses regular-to-bold weights.
- [TYP-06] MUST set a custom font with a thin weight above the recommended size for its style.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: thin strokes lose legibility, so extra size compensates
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that thin-weight custom text is larger than the regular-weight minimum for that style.
- [TYP-07] MUST use font weight, size, and color to emphasize important information and show information hierarchy.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: emphasis tells people what matters first
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that the primary text level is visually distinct from secondary levels.
- [TYP-08] MUST keep the relative hierarchy and visual distinction of text elements when people change text size.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: the hierarchy has to survive text-size changes
  Check@1440/390: desktop 1440px and mobile 390px screenshots at default and largest size: heading, body, and caption levels keep their order and distinction.
- [TYP-09] MUST minimize the number of typefaces, even in a highly customized interface.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: mixed typefaces obscure hierarchy, hinder readability, and make the interface look inconsistent
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that the screen uses one family or a minimal set.
- [TYP-10] MUST prioritize important content when people increase text size.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: people who enlarge text want the content they care about easier to read, and in a game they care more about dialog than transient hit-damage values
  Check@1440/390: desktop 1440px and mobile 390px screenshots at largest size: primary content grows and secondary elements stay compact.
- [TYP-11] MUST NOT increase the size of every word on the screen by the same amount when text size changes.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: people do not always want every element enlarged; tab titles, for example, should not grow with the content
  Check@1440/390: desktop 1440px and mobile 390px screenshots at largest size: chrome such as tab titles does not scale in step with body content.
- [TYP-12] MUST make text look good at full scale, then test its legibility at other scales.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: scaling can change how text reads
  Check@1440/390: desktop 1440px and mobile 390px screenshots at full scale and at a reduced and enlarged scale: text stays legible at each.
- [TYP-13] MUST maximize the contrast between text and the background of its container.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: strong contrast keeps text readable on any background
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that text-to-background contrast meets the project's contrast requirement.
- [TYP-14] MUST test any text color other than the default in a variety of contexts.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: a non-default color may lose contrast in some contexts
  Check@1440/390: desktop 1440px and mobile 390px screenshots of the custom color over each background it appears on.
- [TYP-15] MUST consider bold weight for text that is not placed on a background, to improve legibility.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: text without a container has no contrast support from a surface (the page's wording is "consider")
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that unbacked text uses the bold weight where it is used.
- [TYP-16] MUST NOT add shadows to text to increase its contrast.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: the surface behind the text is not predictable, so a shadow cannot be placed accurately
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that no text carries a drop shadow.
- [TYP-17] MUST prefer text with little or no visual depth when people need to read and understand the content.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: the more visual depth a character has, the harder it is to read
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that content text is flat, with any depth limited to decorative text.
- [TYP-18] MUST keep custom fonts legible at various viewing distances and under various conditions, sized to the minimum-size guidance for their style and weight.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: custom fonts do not carry system legibility tuning
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that each custom-font style meets its minimum size.
- [TYP-19] MUST make custom fonts implement the same accessibility behaviors as system fonts, including text-size scaling and the Bold Text setting.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: custom fonts that ignore user settings break the accessibility promise of the product
  Check@1440/390: desktop 1440px and mobile 390px screenshots with the largest text size and bold text enabled: custom-font text scales and bolds.
- [TYP-20] MUST let people adjust text size in another way when a text-scaling plug-in or approach is not appropriate for the product.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: players and users otherwise lose text-size control
  Check@1440/390: not screenshot-checkable: the requirement is a user-facing control or code path, not a visual layout state.
- [TYP-21] MUST make the layout adapt to all font sizes, and verify that text and glyphs stay legible and the app stays comfortably readable at the largest size.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: the largest accessibility size is where layouts usually break
  Check@1440/390: desktop 1440px and mobile 390px screenshots at the largest accessibility size: no clipped, overlapping, or unreadable text.
- [TYP-22] MUST increase the size of meaningful interface icons as font size increases.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: icons that carry information must stay easy to view at large text sizes
  Check@1440/390: desktop 1440px and mobile 390px screenshots at largest size: informative icons grow with the text and remain visible.
- [TYP-23] MUST keep text truncation to a minimum as font size increases, showing as much useful text at the largest accessibility size as at the largest standard size.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: truncated text hides content from the people who most need it
  Check@1440/390: desktop 1440px and mobile 390px screenshots comparing the largest standard size with the largest accessibility size: comparable amount of visible text.
- [TYP-24] MUST NOT truncate text in a scrollable region unless people can open a separate view that shows the rest of the content.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: a truncated item in a scroll region is a dead end unless the full text is reachable
  Check@1440/390: desktop 1440px and mobile 390px screenshot at largest size: every truncated item has a visible route to its full text.
- [TYP-25] MUST allow a label to use as many lines as needed to show a useful amount of text.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: a fixed line count truncates at large sizes (the page's wording is "can prevent")
  Check@1440/390: desktop 1440px and mobile 390px screenshot at largest size: labels wrap onto additional lines without cutting useful text.
- [TYP-26] MUST reduce the number of columns in multicolumn text as font size increases.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: horizontal space limits cause truncation and overlap, and multicolumn text reads worse at large sizes
  Check@1440/390: desktop 1440px and mobile 390px screenshots at largest size: column count drops and no text overlaps.
- [TYP-27] MUST consider a stacked layout, with text above secondary items, when a horizontally constrained context makes inline items crowd or truncate text.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: inline glyphs and timestamps crowd text at large sizes (the page's wording is "consider")
  Check@1440/390: desktop 1440px and mobile 390px screenshots at largest size: no inline item crowds, overlaps, or truncates text.
- [TYP-28] MUST keep the information hierarchy consistent at any font size, with primary elements toward the top of the view.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: people must not lose track of primary elements when text is very large
  Check@1440/390: desktop 1440px and mobile 390px screenshots at smallest and largest sizes: primary elements keep their top-of-view position and order.
- [TYP-29] MUST NOT use tight leading for text of three or more lines, even where height is limited.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: tight line spacing makes multi-line text harder to read
  Check@1440/390: desktop 1440px and mobile 390px screenshot proof that every block of three or more lines has open line spacing.
- [TYP-30] MUST consider loose leading for wide columns and long passages, so people can keep their place while moving from line to line.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: extra line space helps the eye track across long lines (the page's wording is "consider")
  Check@1440/390: desktop 1440px screenshot of a wide text column: line spacing is visibly open; mobile 390px screenshot of the narrow version is also checked.
- [TYP-31] MUST consider tighter leading only where height is constrained, such as a list row, and only for text of fewer than three lines.
  HIG: Typography <https://developer.apple.com/design/human-interface-guidelines/typography> | Why: tighter leading lets text fit constrained areas (the page's wording is "can help")
  Check@1440/390: desktop 1440px and mobile 390px screenshots of list rows: two-line text fits without clipping.

# Exclusions and persona notes

### Typography
Apple-specific, excluded:
- Platform default and minimum point-size table (iOS 17/11, macOS 13/10, tvOS 29/23, visionOS 17/12, watchOS 16/12). Principle kept in rules 1 and 2.
- SF Pro, SF Compact, SF Arabic, SF Armenian, SF Georgian, SF Hebrew, SF Mono, and rounded variants; New York (NY); and the variable-font and dynamic optical size notes.
- Built-in text styles and their weight, size, and leading values, and the advice to prefer them.
- Symbolic traits used to modify text styles (the bold trait, leading through traits).
- Developer note: use the system font constants and do not embed system fonts.
- Tracking tables for SF Pro, SF Pro Rounded, New York, macOS, tvOS, SF Compact, and SF Compact Rounded, and the mockup tracking advice.
- Dynamic Type size tables for iOS, iPadOS, watchOS, and tvOS, including the accessibility sizes AX1 to AX5.
- Font assignment per platform (iOS and iPadOS SF Pro with NY; macOS SF Pro with NY in Mac Catalyst; tvOS; visionOS; watchOS SF Compact and SF Compact Rounded in complications).
- macOS dynamic system font variants table (controlContentFont, labelFont, menuFont, and the rest).
- macOS does not support Dynamic Type.
- visionOS bolder body and title styles and the Extra Large Title 1 and 2 styles.
- visionOS billboarding of text anchored to 3D objects.
- Emphasized weight per style (medium, semibold, bold, heavy) in the specification tables.
- Unity plug-ins for Dynamic Type in Unity-based games.
- SF Symbols used alongside text.
- Apple developer API references (numberOfLines, isAccessibilityCategory, leading(_:), UIFontDescriptor, and the SwiftUI, UIKit, and AppKit guides).
- Larger accessibility text setting path in iOS and iPadOS Settings (principle kept in rule 21).
Persona and journey notes:
- Readers at varied viewing distances and under varied conditions, which is why legibility is tested in each context (rules 1 to 3).
- People who turn on larger accessibility text and need the layout to keep working at the largest size (rules 21 to 28).
- People who enlarge text for one part of a screen and expect the chrome around it to stay still (rule 11).
- Game players who care more about dialog than transient values, so dialog is the content to prioritize (rule 10).
- Developers of custom fonts and games whose text must still honor system text-size and bold settings (rules 18 to 20).
