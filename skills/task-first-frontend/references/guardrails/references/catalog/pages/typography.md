Candidate catalog - evidence only; not executable requirements.

# Typography: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/typography
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 636bd7ba7134fbf734b24fe78260d133cad79228bb4854d14e0a94fbbaeed475
Input words: 9037. Candidate rule records: 31. Exclusion blocks: 17.
Original note: 04-foundations-c-1/typography.md.
Adopted source-linked rules: F-11, F-12, F-13, F-14

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Typography

URL: https://developer.apple.com/design/human-interface-guidelines/typography

Universal rules:

MUST use font sizes most people can read easily, at or above the minimum text size recommended for each target platform, for both custom and system fonts. | topic: minimum text size | source: Ensuring legibility | why: people read at varied viewing distances and under varied conditions | check: desktop 1440px and mobile 390px screenshot proof that no text falls below the project's per-platform minimum.

MUST start from the recommended default text size for each target platform, for both custom and system fonts. | topic: default text size | source: Ensuring legibility | why: the default is the baseline the legibility guidance is built on | check: desktop 1440px and mobile 390px screenshot proof that body text renders at the platform default before any user scaling.

MUST test text legibility in different contexts, including on each platform the product runs on. | topic: legibility testing | source: Ensuring legibility | why: text that reads well in one context can fail in another; the page's example is game text on each platform | check: not screenshot-checkable: requires exercising the product on each target platform and in each context, not one layout capture.

MUST choose a remedy when testing shows text is hard to read: a larger type size, higher contrast between text and background, or a typeface designed for legibility. | topic: legibility remedy | source: Ensuring legibility | why: the page lists these three remedies (its wording is "consider") | check: not screenshot-checkable: the remedy is a design decision taken after a test result.

MUST NOT use ultralight, thin, or light font weights for small text. | topic: font weight | source: Ensuring legibility | why: light weights are difficult to see when text is small; the page prefers regular, medium, semibold, or bold | check: desktop 1440px and mobile 390px screenshot proof that small text uses regular-to-bold weights.

MUST set a custom font with a thin weight above the recommended size for its style. | topic: thin custom weight | source: Ensuring legibility | why: thin strokes lose legibility, so extra size compensates | check: desktop 1440px and mobile 390px screenshot proof that thin-weight custom text is larger than the regular-weight minimum for that style.

MUST use font weight, size, and color to emphasize important information and show information hierarchy. | topic: hierarchy | source: Conveying hierarchy | why: emphasis tells people what matters first | check: desktop 1440px and mobile 390px screenshot proof that the primary text level is visually distinct from secondary levels.

MUST keep the relative hierarchy and visual distinction of text elements when people change text size. | topic: hierarchy under scaling | source: Conveying hierarchy | why: the hierarchy has to survive text-size changes | check: desktop 1440px and mobile 390px screenshots at default and largest size: heading, body, and caption levels keep their order and distinction.

MUST minimize the number of typefaces, even in a highly customized interface. | topic: typeface count | source: Conveying hierarchy | why: mixed typefaces obscure hierarchy, hinder readability, and make the interface look inconsistent | check: desktop 1440px and mobile 390px screenshot proof that the screen uses one family or a minimal set.

MUST prioritize important content when people increase text size. | topic: scaling priority | source: Conveying hierarchy | why: people who enlarge text want the content they care about easier to read, and in a game they care more about dialog than transient hit-damage values | check: desktop 1440px and mobile 390px screenshots at largest size: primary content grows and secondary elements stay compact.

MUST NOT increase the size of every word on the screen by the same amount when text size changes. | topic: uniform scaling | source: Conveying hierarchy | why: people do not always want every element enlarged; tab titles, for example, should not grow with the content | check: desktop 1440px and mobile 390px screenshots at largest size: chrome such as tab titles does not scale in step with body content.

MUST make text look good at full scale, then test its legibility at other scales. | topic: scale testing | source: Platform considerations, visionOS (untitled paragraphs after it) | why: scaling can change how text reads | check: desktop 1440px and mobile 390px screenshots at full scale and at a reduced and enlarged scale: text stays legible at each.

MUST maximize the contrast between text and the background of its container. | topic: text contrast | source: Platform considerations, visionOS (untitled paragraphs after it) | why: strong contrast keeps text readable on any background | check: desktop 1440px and mobile 390px screenshot proof that text-to-background contrast meets the project's contrast requirement.

MUST test any text color other than the default in a variety of contexts. | topic: text color testing | source: Platform considerations, visionOS (untitled paragraphs after it) | why: a non-default color may lose contrast in some contexts | check: desktop 1440px and mobile 390px screenshots of the custom color over each background it appears on.

MUST consider bold weight for text that is not placed on a background, to improve legibility. | topic: unbacked text | source: Platform considerations, visionOS (untitled paragraphs after it) | why: text without a container has no contrast support from a surface (the page's wording is "consider") | check: desktop 1440px and mobile 390px screenshot proof that unbacked text uses the bold weight where it is used.

MUST NOT add shadows to text to increase its contrast. | topic: text shadows | source: Platform considerations, visionOS (untitled paragraphs after it) | why: the surface behind the text is not predictable, so a shadow cannot be placed accurately | check: desktop 1440px and mobile 390px screenshot proof that no text carries a drop shadow.

MUST prefer text with little or no visual depth when people need to read and understand the content. | topic: text depth | source: Platform considerations, visionOS | why: the more visual depth a character has, the harder it is to read | check: desktop 1440px and mobile 390px screenshot proof that content text is flat, with any depth limited to decorative text.

MUST keep custom fonts legible at various viewing distances and under various conditions, sized to the minimum-size guidance for their style and weight. | topic: custom font legibility | source: Using custom fonts | why: custom fonts do not carry system legibility tuning | check: desktop 1440px and mobile 390px screenshot proof that each custom-font style meets its minimum size.

MUST make custom fonts implement the same accessibility behaviors as system fonts, including text-size scaling and the Bold Text setting. | topic: custom font accessibility | source: Using custom fonts | why: custom fonts that ignore user settings break the accessibility promise of the product | check: desktop 1440px and mobile 390px screenshots with the largest text size and bold text enabled: custom-font text scales and bolds.

MUST let people adjust text size in another way when a text-scaling plug-in or approach is not appropriate for the product. | topic: fallback text sizing | source: Using custom fonts | why: players and users otherwise lose text-size control | check: not screenshot-checkable: the requirement is a user-facing control or code path, not a visual layout state.

MUST make the layout adapt to all font sizes, and verify that text and glyphs stay legible and the app stays comfortably readable at the largest size. | topic: layout adaptation | source: Supporting Dynamic Type | why: the largest accessibility size is where layouts usually break | check: desktop 1440px and mobile 390px screenshots at the largest accessibility size: no clipped, overlapping, or unreadable text.

MUST increase the size of meaningful interface icons as font size increases. | topic: icon scaling | source: Supporting Dynamic Type | why: icons that carry information must stay easy to view at large text sizes | check: desktop 1440px and mobile 390px screenshots at largest size: informative icons grow with the text and remain visible.

MUST keep text truncation to a minimum as font size increases, showing as much useful text at the largest accessibility size as at the largest standard size. | topic: truncation at large sizes | source: Supporting Dynamic Type | why: truncated text hides content from the people who most need it | check: desktop 1440px and mobile 390px screenshots comparing the largest standard size with the largest accessibility size: comparable amount of visible text.

MUST NOT truncate text in a scrollable region unless people can open a separate view that shows the rest of the content. | topic: truncation in scroll regions | source: Supporting Dynamic Type | why: a truncated item in a scroll region is a dead end unless the full text is reachable | check: desktop 1440px and mobile 390px screenshot at largest size: every truncated item has a visible route to its full text.

MUST allow a label to use as many lines as needed to show a useful amount of text. | topic: label line count | source: Supporting Dynamic Type | why: a fixed line count truncates at large sizes (the page's wording is "can prevent") | check: desktop 1440px and mobile 390px screenshot at largest size: labels wrap onto additional lines without cutting useful text.

MUST reduce the number of columns in multicolumn text as font size increases. | topic: column count | source: Supporting Dynamic Type | why: horizontal space limits cause truncation and overlap, and multicolumn text reads worse at large sizes | check: desktop 1440px and mobile 390px screenshots at largest size: column count drops and no text overlaps.

MUST consider a stacked layout, with text above secondary items, when a horizontally constrained context makes inline items crowd or truncate text. | topic: stacked layout | source: Supporting Dynamic Type | why: inline glyphs and timestamps crowd text at large sizes (the page's wording is "consider") | check: desktop 1440px and mobile 390px screenshots at largest size: no inline item crowds, overlaps, or truncates text.

MUST keep the information hierarchy consistent at any font size, with primary elements toward the top of the view. | topic: hierarchy order | source: Supporting Dynamic Type | why: people must not lose track of primary elements when text is very large | check: desktop 1440px and mobile 390px screenshots at smallest and largest sizes: primary elements keep their top-of-view position and order.

MUST NOT use tight leading for text of three or more lines, even where height is limited. | topic: leading for multi-line text | source: Using system fonts | why: tight line spacing makes multi-line text harder to read | check: desktop 1440px and mobile 390px screenshot proof that every block of three or more lines has open line spacing.

MUST consider loose leading for wide columns and long passages, so people can keep their place while moving from line to line. | topic: loose leading | source: Using system fonts | why: extra line space helps the eye track across long lines (the page's wording is "consider") | check: desktop 1440px screenshot of a wide text column: line spacing is visibly open; mobile 390px screenshot of the narrow version is also checked.

MUST consider tighter leading only where height is constrained, such as a list row, and only for text of fewer than three lines. | topic: tight leading | source: Using system fonts | why: tighter leading lets text fit constrained areas (the page's wording is "can help") | check: desktop 1440px and mobile 390px screenshots of list rows: two-line text fits without clipping.

Apple-specific (excluded):
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

COVERAGE: typography: read, ~6000 words (estimated, not counted), 31 universal rules, 17 excluded
