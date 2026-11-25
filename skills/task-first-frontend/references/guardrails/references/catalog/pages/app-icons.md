Candidate catalog - evidence only; not executable requirements.

# App icons: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/app-icons
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 4db08059c042a68514d836b35c6deae92a4d7abb664479e307cb3fe5d8518133
Input words: 2376. Candidate rule records: 22. Exclusion blocks: 7.
Original note: 01-foundations-a.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## App icons
URL: https://developer.apple.com/design/human-interface-guidelines/app-icons
Universal rules:
- MUST keep the icon's core visual features the same across all appearance variants. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: people still find the app after an appearance change | check: screenshots of each variant side by side at 390px and 1440px: core shapes match.
- MUST NOT create icon variants that swap elements in and out. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: people cannot find the app when elements move | check: side-by-side screenshots: the element set and positions match across variants.
- MUST keep the icon visually consistent across every platform the app supports. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: people recognize the app wherever it appears | check: side-by-side icons for each platform at 1440px and 390px.
- MUST express one core concept with a minimal number of shapes. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: simple icons read quickly at small sizes | check: screenshot at 390px: a reviewer names the concept and counts the shapes.
- MUST use a simple solid or gradient background so the primary design stands out. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: the design is the focus, not the backdrop | check: screenshot at 1440px and 390px: the background is plain and the design leads.
- MUST use filled, overlapping solid shapes to create depth where depth is wanted (HIG wording: "consider"). | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: overlapping solids read as depth | check: screenshot at 390px shows filled, overlapping shapes.
- MUST include text in an icon only when it is essential to the experience or brand. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: in-icon text is neither accessible nor localized and clutters the icon | check: screenshot at 390px: any text in the icon is essential.
- MUST NOT put nonessential words in an icon, such as calls to action ("Play") or context terms ("New"). | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: the icon stays clean and does not go stale | check: screenshot at 390px: text audit finds no such words.
- MUST NOT repeat the app name inside the icon when the name already appears next to it. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: the duplicate adds clutter | check: screenshots at 390px of each context where the name shows (search, notification, share sheet).
- MUST prefer a graphic illustration over a photo in the icon. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: photos lose detail at small sizes and across appearances | check: screenshot at 390px: the icon is an illustration, not a photo.
- MUST NOT use extremely thin line weights or sharp corners that lose detail at small sizes. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: the icon stays crisp at small sizes | check: screenshot with the icon scaled to 40 px: fine lines and corners still read.
- MUST NOT copy standard UI components or app screenshots into the icon. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: the icon identifies the app, not one screen | check: screenshot of the icon beside the app UI: no copied controls or screens.
- MUST NOT add bevels, glows, blurs, drop shadows or highlights to icon layers when the platform already applies those effects. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: custom effects clash with system effects and go stale | check: screenshot on the platform at 1440px and 390px: no doubled shadows or highlights.
- MUST keep the icon visible, legible and recognizable on both light and dark backgrounds. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: the app is findable in any theme | check: screenshots on light and dark backgrounds at 390px.
- MUST derive the dark icon from the light icon, using complementary colors and avoiding excessively bright imagery. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: a glaring dark icon looks out of place | check: side-by-side light and dark screenshots at 390px.
- MUST keep any alternate icon closely related to the app's content so it is not mistaken for another app (HIG wording on offering alternates: "consider"). | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: people do not confuse the app with another | check: screenshot of the alternate icon beside the default icon at 390px: a reviewer confirms it is the same app.
- MUST keep primary icon content centered so corner rounding or masking does not truncate it. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: the key mark is always whole | check: screenshot at 390px with a rounded-corner mask applied: no content is cut.
- MUST keep key content inside a safe zone that scaling and motion effects cannot crop. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: the key content stays visible under effects | check: screenshots at 1440px and 390px with the largest crop applied: key content visible.
- MUST keep the icon distinct from the display background it sits on, and lighten a near-black background so the icon does not blend in. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: the icon's edge stays visible | check: screenshot on the target background at 390px: the icon edge is distinct.
- MUST prefer vector source artwork with outlined text so the icon stays crisp at any size. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: vector art scales without blur | check: render at 16 px, 32 px and 1024 px: edges are crisp.
- MUST export raster or mesh-gradient icon artwork as lossless PNG. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: no quality loss from compression | check: not screenshot-checkable: file format is metadata.
- MUST use the sRGB, Gray Gamma 2.2 or Display P3 color space for icon artwork. | topic: App icons | source: https://developer.apple.com/design/human-interface-guidelines/app-icons | why: colors display as intended | check: not screenshot-checkable: color space is file metadata.
Apple-specific (excluded):
- Icon Composer layered files, Liquid Glass effects (specular highlights, refraction, translucency) and layer groupings.
- Platform icon shapes and masks (rounded square on iOS, iPadOS and macOS; rectangle on tvOS; circle on visionOS and watchOS) and the rule to supply unmasked square layers.
- Platform icon sizes (1024x1024 px on iOS, iPadOS, macOS and visionOS; 800x480 px on tvOS; 1088x1088 px on watchOS).
- Home Screen appearance options (default, dark, clear, tinted) and the variants the system generates on iOS, iPadOS and macOS.
- Alternate app icon picker in system settings (iOS, iPadOS, tvOS) and its review rules.
- tvOS parallax layers and focus behavior, text placement above layers, and the visionOS concave-shape rule.
- Replicas of Apple hardware (Apple copyright), and Parallax Previewer and Xcode image-stack setup.
Persona and journey notes:
- People see the icon on the Home Screen, in search results, notifications, settings and share sheets, and recognize the app at a glance.
- Journey: the icon is the first sight of the app on the Home Screen and in store listings; some people choose alternate icons in settings.
