Candidate catalog - evidence only; not executable requirements.

# Icons: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/icons
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 190bec6d79efd18d9081813efc156dda40012b71c46318a3e8077034120430cb
Input words: 1972. Candidate rule records: 28. Exclusion blocks: 3.
Original note: 01-foundations-a.md.
Adopted source-linked rules: F-22, F-23

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Icons
URL: https://developer.apple.com/design/human-interface-guidelines/icons
Universal rules:
- MUST express one concept per icon that people understand at a glance. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: people act on icons without reading labels | check: screenshot at 390px: a reviewer names the icon's meaning without its label.
- MUST simplify each icon to a recognizable, highly reduced design. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: too many details make an icon unreadable | check: screenshot at 390px: the icon has no detail that a quick glance cannot read.
- MUST use familiar visual metaphors directly related to the action or content. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: people guess the meaning from the metaphor | check: screenshot at 390px: each icon's metaphor matches its action or content.
- MUST keep all interface icons in one app at a consistent size. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: uneven icons look broken | check: screenshots of a toolbar at 1440px and 390px: icon sizes match.
- MUST keep the level of detail consistent across all interface icons. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: one visual language across the app | check: screenshot of the icon set at 1440px: detail level matches.
- MUST keep stroke thickness consistent across all interface icons. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: one visual weight across the app | check: screenshot of the icon set at 1440px: strokes match.
- MUST keep perspective consistent across all interface icons. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: icons look like one family | check: screenshot of the icon set at 1440px: perspective matches.
- MUST match an icon's weight to its adjacent text unless you deliberately emphasize one of them. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: icon and text read as one line | check: screenshot at 390px: icon and label weights match.
- MUST adjust icon dimensions so each icon looks as visually heavy as the others. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: heavy icons do not dominate the row | check: screenshot grid at 1440px: visual weights look even.
- MUST add padding to asymmetric custom icons so they look optically centered, not only geometrically centered. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: icons look balanced in their slot | check: screenshot at 390px: icons look centered in their slots.
- MUST provide a selected-state icon only when the component cannot show selection itself. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: no duplicate art to maintain | check: screenshot of a selected toolbar item at 1440px: the component shows selection without a second icon.
- MUST use gender-neutral human figures and avoid images that are hard to recognize across cultures or languages. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: icons welcome everyone and read in any language | check: not screenshot-checkable: a cultural review of each figure.
- MUST include text in an icon only when it is essential to the meaning. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: text inside icons is hard to localize and read | check: screenshot at 390px: any text in an icon is essential.
- MUST localize every character shown inside an icon. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: the icon reads correctly in every language | check: screenshots at 390px in each shipped locale.
- MUST show a passage of text in an icon as an abstract mark, not as real words. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: the mark suggests text without needing translation | check: screenshot at 390px: the icon shows an abstract mark.
- MUST provide a flipped version of a directional icon, such as the abstract text-passage icon, for right-to-left layouts. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: direction reads correctly for right-to-left readers | check: screenshot at 390px in a right-to-left locale: the icon is flipped.
- MUST supply custom interface icons as vector art (PDF or SVG) so they scale without extra sizes. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: icons stay crisp on every display | check: render at two sizes: edges are crisp at both.
- MUST give every custom interface icon an accessibility text label for screen readers. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: screen-reader users hear what the icon does | check: not screenshot-checkable: the label is in the accessibility tree.
- MUST use the standard icon for each editing action: cut, copy, paste, done, save, cancel, close, delete, undo, redo, compose, duplicate, rename, move to, folder, attach, add, more. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: people recognize standard actions at once | check: screenshots of the editing toolbar at 1440px and 390px match the HIG icon reference for each action.
- MUST use the standard icon for each selection action: select, deselect, close, delete. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: selection works as people expect | check: screenshots of selection controls at 1440px and 390px match the HIG icon reference.
- MUST use the standard icon for each text-formatting action: superscript, subscript, bold, italic, underline, align left, center, justified, align right. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: formatting is found at a glance | check: screenshots of the formatting bar at 1440px and 390px match the HIG icon reference.
- MUST use the standard icon for each search action: search, find, find and replace, find next, find previous, use selection for find, filter. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: search tools are recognized at once | check: screenshots of search controls at 1440px and 390px match the HIG icon reference.
- MUST use the standard icon for sharing and exporting: share, export, print. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: sharing is recognized at once | check: screenshots of the share and export controls at 1440px and 390px match the HIG icon reference.
- MUST use the standard icon for users and accounts: account, user, profile. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: account areas are found quickly | check: screenshots of account controls at 1440px and 390px match the HIG icon reference.
- MUST use the standard icon for ratings: dislike, like. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: ratings read clearly | check: screenshots of rating controls at 1440px and 390px match the HIG icon reference.
- MUST use the standard icon for layer ordering: bring to front, send to back, bring forward, send backward. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: stacking order is clear | check: screenshots of ordering controls at 1440px and 390px match the HIG icon reference.
- MUST use the standard icon for other common actions: alarm, archive, calendar. | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: common items are recognized at once | check: screenshots at 1440px and 390px match the HIG icon reference.
- MUST simplify small versions of an icon by removing or thickening detail that blurs at small sizes (HIG example: 16 px). | topic: Icons | source: https://developer.apple.com/design/human-interface-guidelines/icons | why: the icon stays recognizable at every size | check: screenshot at the smallest size (16 px): the detail still reads.
Apple-specific (excluded):
- SF Symbols names for every standard icon, and the choice to use or customize SF Symbols.
- macOS document icons: folded-corner shape, background and center-image sizes, the 10 percent margin and the extension term.
- Replicas of Apple hardware products in icons (Apple brand rule).
Persona and journey notes:
- People who use screen readers to hear icon labels; people in other languages and cultures; right-to-left readers.
- Journey: people choose items, actions and modes from icons in menus, toolbars and buttons.
