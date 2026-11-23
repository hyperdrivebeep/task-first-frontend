Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: 01-foundations-a

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Accessibility (61 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/accessibility

- [ACC-01] MUST use familiar, consistent interactions so every task is straightforward.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people finish tasks without relearning controls
  Check@1440/390: not screenshot-checkable: consistency spans screens; compare the same control in two screenshots at 1440px and 390px.
- [ACC-02] MUST NOT rely on one channel (sight, hearing, speech or touch) alone to convey information.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people who cannot use one channel still get the message
  Check@1440/390: screenshots at 1440px and 390px: every message also appears as text, an icon or a shape.
- [ACC-03] MUST adapt to system accessibility settings or let people personalize settings.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people set the app once to suit them
  Check@1440/390: screenshots at 1440px and 390px with the setting on: layout holds and nothing clips.
- [ACC-04] MUST audit the interface's accessibility during design with an accessibility inspector or equivalent tool.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: problems are found before people hit them
  Check@1440/390: not screenshot-checkable: the audit is a tool report, not a visual.
- [ACC-05] MUST let people enlarge text to at least 200 percent of its default size (HIG wording: "ideally").
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: low-vision readers can read without strain
  Check@1440/390: screenshots at 1440px and 390px with text at 200 percent: no clipped or overlapping text.
- [ACC-06] MUST support text enlargement through custom UI or the system text-size setting.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people size text once and every screen follows
  Check@1440/390: screenshot at 390px after enlargement: text reflows without clipping.
- [ACC-07] MUST let people enlarge icons as well as text.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: small icons are hard to see and to tap
  Check@1440/390: screenshots at 390px and 1440px with enlarged icons: no clipping, layout reflows.
- [ACC-08] MUST NOT set custom text below the HIG minimum for the target platform: 11 pt (iOS, iPadOS), 10 pt (macOS), 23 pt (tvOS), 12 pt (visionOS, watchOS).
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: small text stays readable
  Check@1440/390: screenshots at 390px and 1440px: measure the smallest text, reading pt as CSS px.
- [ACC-09] MUST size custom thin-weight fonts above the recommended size (HIG wording: "aim for larger").
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: thin strokes are harder to read
  Check@1440/390: screenshot at 390px: thin-weight text is at least as large as regular text.
- [ACC-10] MUST keep text up to 17 pt at a contrast ratio of at least 4.5:1 (HIG value, based on WCAG Level AA).
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: text stays legible on its background
  Check@1440/390: screenshots at 1440px and 390px: sample text and background colors; ratio must be 4.5:1 or more.
- [ACC-11] MUST keep 18 pt text at a contrast ratio of at least 3:1 (HIG value).
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: large text still reads on its background
  Check@1440/390: screenshots at 1440px and 390px: sample 18 pt text; ratio must be 3:1 or more.
- [ACC-12] MUST keep all bold text at a contrast ratio of at least 3:1 (HIG value).
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: bold text still reads on its background
  Check@1440/390: screenshots at 1440px and 390px: sample bold text; ratio must be 3:1 or more.
- [ACC-13] MUST check contrast with a standard contrast calculator (WCAG or APCA) before release.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: eyeballing misses low contrast
  Check@1440/390: screenshot color pairs run through a calculator; every pair is reported with its ratio.
- [ACC-14] MUST provide a higher-contrast color scheme when the system increased-contrast setting is on and the default scheme fails minimum contrast.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people who need more contrast get it
  Check@1440/390: screenshots at 1440px and 390px with the setting on: every pair meets the minimum.
- [ACC-15] MUST check contrast in both light and dark appearances when the app supports dark mode.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: a pair that passes in light can fail in dark
  Check@1440/390: paired light and dark screenshots at 1440px and 390px; sample both.
- [ACC-16] MUST prefer the platform's built-in adaptive colors over custom colors where they fit (HIG wording: "prefer").
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: built-in colors come with accessible variants
  Check@1440/390: not screenshot-checkable: which token a color comes from is a code fact; the reviewer checks the token list.
- [ACC-17] MUST NOT convey information with color alone; add text labels, shapes or icons.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: color-blind people get the same information
  Check@1440/390: grayscale screenshots at 1440px and 390px: every state is still distinguishable.
- [ACC-18] MUST NOT use red-green or blue-orange color pairs alone to tell two states apart.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: these pairs are the hardest for color-blind people
  Check@1440/390: grayscale and color-blind simulation screenshots at 390px: states stay distinct.
- [ACC-19] MUST let people customize color schemes such as chart colors or game-character colors (HIG wording: "consider").
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people pick colors they can see
  Check@1440/390: screenshots of the color settings at 1440px and 390px show the controls.
- [ACC-20] MUST describe every interface element and piece of content with a text label for screen readers.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: blind people use the interface through speech
  Check@1440/390: not screenshot-checkable: labels live in the accessibility tree; the reviewer dumps and reads them.
- [ACC-21] MUST NOT carry dialogue or crucial information through audio alone.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: deaf and hard-of-hearing people get the same content
  Check@1440/390: not screenshot-checkable for the audio itself; a screenshot shows the text alternative beside the media.
- [ACC-22] MUST provide captions for audio and video where text syncs live with the media (for example cutscenes and clips).
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people follow sound through text
  Check@1440/390: screenshot during playback at 1440px and 390px: the caption matches the spoken line.
- [ACC-23] MUST provide subtitles of on-screen dialogue in the viewer's chosen language.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: viewers read dialogue in their language
  Check@1440/390: screenshot during playback shows subtitles in the chosen language.
- [ACC-24] MUST provide audio descriptions that narrate important visual-only information between natural pauses.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: blind viewers get what is shown on screen
  Check@1440/390: not screenshot-checkable: the audio track is what gets checked.
- [ACC-25] MUST provide a transcript covering all audible and visual content for long-form media.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people review or search the whole piece
  Check@1440/390: screenshots of the transcript panel at 1440px and 390px show full text.
- [ACC-26] MUST let people customize the visual presentation of caption and subtitle text.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: readable text differs from person to person
  Check@1440/390: screenshot after changing text size and background: text stays readable.
- [ACC-27] MUST pair audio cues (success, error, game feedback) with a non-audio cue such as haptics.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people who cannot hear the cue still get it
  Check@1440/390: not screenshot-checkable: vibration cannot be captured; the reviewer confirms the code fires both cues together.
- [ACC-28] MUST add visual indicators that point to where an audio-guided action or off-screen content is.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people without sound still find the target
  Check@1440/390: screenshots at 1440px and 390px: an on-screen indicator points to the target.
- [ACC-29] MUST make tap and click targets at least 28x28 pt on iOS, iPadOS, watchOS and visionOS, and at least 20x20 pt on macOS.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: small targets are hard to hit for people with limited dexterity
  Check@1440/390: screenshots at 390px and 1440px: measure each target box, reading pt as CSS px.
- [ACC-30] MUST size controls to the HIG default of 44x44 pt on iOS, iPadOS and watchOS.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: a comfortable default target avoids mis-taps
  Check@1440/390: screenshots at 390px: measure control boxes, reading pt as CSS px.
- [ACC-31] MUST treat spacing between controls as important as their size.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: enough space reduces taps on the wrong control
  Check@1440/390: screenshot at 390px: measure gaps between adjacent controls.
- [ACC-32] MUST keep about 12 pt of padding around elements that have a bezel.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: bezel controls stay separated
  Check@1440/390: screenshot at 390px: measure the padding around bezeled controls.
- [ACC-33] MUST keep about 24 pt of padding around elements without a bezel, measured from their visible edges.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: borderless controls stay separated
  Check@1440/390: screenshot at 390px: measure from the visible edge of borderless elements.
- [ACC-34] MUST use the simplest gesture for each frequent interaction.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: repeated actions stay comfortable
  Check@1440/390: not screenshot-checkable: the gesture is behavior, checked in a test run.
- [ACC-35] MUST NOT require custom multifinger or multihand gestures for any function.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: complex gestures exclude people with limited dexterity
  Check@1440/390: not screenshot-checkable: the gesture set is behavior, checked in a test run.
- [ACC-36] MUST give every action that a gesture performs an on-screen control as well.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people who cannot gesture still act
  Check@1440/390: screenshot at 390px: a visible control performs the same action as the swipe.
- [ACC-37] MUST label interface elements so voice-control users can name and target them.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: voice users need names to act on elements
  Check@1440/390: not screenshot-checkable: label names are in the accessibility tree.
- [ACC-38] MUST let people give commands and enter information by voice.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people can use the app hands-free
  Check@1440/390: not screenshot-checkable: needs a voice-input test run; labels are checked in the tree.
- [ACC-39] MUST verify that mobility assistive technologies (screen reader, switch input, pointer control, keyboard access) work with the app by testing with them.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: alternative input methods only help if they work
  Check@1440/390: not screenshot-checkable: needs live assistive-technology runs.
- [ACC-40] MUST let people use the keyboard alone to reach and operate all functions.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: keyboard users are not blocked
  Check@1440/390: not screenshot-checkable for operation; screenshot at 1440px shows a visible focus indicator on the focused control.
- [ACC-41] MUST NOT override keyboard shortcuts that the operating system or browser already defines.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people's shortcuts keep their meaning
  Check@1440/390: not screenshot-checkable: shortcut bindings are code.
- [ACC-42] MUST make every action operable through switch-style input that steps through controls (select, tap, type, draw).
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people with one-switch input can use the app
  Check@1440/390: not screenshot-checkable: needs a switch-scanning run.
- [ACC-43] MUST keep actions simple, intuitive and consistent so people can remember them.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people navigate without relearning
  Check@1440/390: not screenshot-checkable: judged across the whole flow.
- [ACC-44] MUST prefer standard system gestures and behaviors over custom gestures people must learn.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: familiar behavior needs no learning
  Check@1440/390: not screenshot-checkable: gesture behavior is checked in a test run.
- [ACC-45] MUST NOT auto-dismiss a view or control on a timer; dismiss only through an explicit action.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: slow readers and assistive-technology users keep the content
  Check@1440/390: not screenshot-checkable: behavior over time; the reviewer records 60 seconds with the view open.
- [ACC-46] MUST offer a comfortable experience for people with limited dexterity or mobility.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: the app stays usable with limited movement
  Check@1440/390: not screenshot-checkable: a composite of the target-size, spacing and gesture rules, reviewed with their screenshots.
- [ACC-47] MUST offer difficulty settings in games: reduce completion criteria, adjust reaction time, or enable control assistance.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: players of every ability can finish the game
  Check@1440/390: screenshots of the settings screen at 1440px and 390px show these options. Applies to games only.
- [ACC-48] MUST NOT autoplay audio or video without start and stop controls.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people control what plays and when
  Check@1440/390: screenshots at 390px show start and stop controls before and after playback; autoplay timing is not screenshot-checkable.
- [ACC-49] MUST offer a global setting that turns off autoplay of all audio and video (HIG wording: "consider").
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people stop unwanted playback once
  Check@1440/390: screenshot of the settings screen shows the toggle.
- [ACC-50] MUST make playback controls discoverable and easy to act on.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people find the controls without searching
  Check@1440/390: screenshot at 390px: controls are visible and at least 28x28 pt.
- [ACC-51] MUST let people avoid bright, frequent flashing light in video, and honor the system setting that asks for it.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: flashing light can trigger dizziness and seizures
  Check@1440/390: not screenshot-checkable: needs playback and flash analysis.
- [ACC-52] MUST avoid excessive fast-moving and blinking animation.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: distraction, dizziness and seizure risk
  Check@1440/390: not screenshot-checkable: motion needs a recording.
- [ACC-53] MUST reduce automatic and repetitive animation, including zoom, scale and peripheral motion, when the system reduce-motion setting is on.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: motion-sensitive people can use the app
  Check@1440/390: 5-second recordings at 390px and 1440px with the setting on: no looping zoom, scale or peripheral motion; screenshots cannot show motion.
- [ACC-54] MUST tighten animation springs to reduce bounce when reduce motion is on.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: less bounce means less motion
  Check@1440/390: not screenshot-checkable: spring stiffness is a code value.
- [ACC-55] MUST track animations directly with people's gestures when reduce motion is on.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: the screen follows the hand, not a separate motion
  Check@1440/390: not screenshot-checkable: behavior checked in a gesture test run.
- [ACC-56] MUST NOT animate depth changes along the z-axis when reduce motion is on.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: depth motion triggers motion sensitivity
  Check@1440/390: not screenshot-checkable: motion needs a recording.
- [ACC-57] MUST replace x-, y- and z-axis transitions with fades when reduce motion is on.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: fades avoid sliding and flying motion
  Check@1440/390: not screenshot-checkable: motion needs a recording.
- [ACC-58] MUST NOT animate into or out of blurs when reduce motion is on.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: blur transitions add motion
  Check@1440/390: not screenshot-checkable: motion needs a recording.
- [ACC-59] MUST identify core functionality in a simplified mode and remove noncritical workflows and UI elements.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: people with cognitive disabilities see only what they need (HIG frames this for Assistive Access)
  Check@1440/390: screenshot at 390px of the simplified screen shows only core controls.
- [ACC-60] MUST break multistep workflows into one interaction per screen in a simplified mode.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: one decision at a time reduces cognitive load
  Check@1440/390: screenshots at 390px show one interaction per screen.
- [ACC-61] MUST ask for confirmation twice before any action that is hard to recover from, such as deleting a file.
  HIG: Accessibility <https://developer.apple.com/design/human-interface-guidelines/accessibility> | Why: one slip cannot destroy data
  Check@1440/390: screenshots at 1440px and 390px of both confirmation dialogs.

## App icons (22 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/app-icons

- [AI-01] MUST keep the icon's core visual features the same across all appearance variants.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: people still find the app after an appearance change
  Check@1440/390: screenshots of each variant side by side at 390px and 1440px: core shapes match.
- [AI-02] MUST NOT create icon variants that swap elements in and out.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: people cannot find the app when elements move
  Check@1440/390: side-by-side screenshots: the element set and positions match across variants.
- [AI-03] MUST keep the icon visually consistent across every platform the app supports.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: people recognize the app wherever it appears
  Check@1440/390: side-by-side icons for each platform at 1440px and 390px.
- [AI-04] MUST express one core concept with a minimal number of shapes.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: simple icons read quickly at small sizes
  Check@1440/390: screenshot at 390px: a reviewer names the concept and counts the shapes.
- [AI-05] MUST use a simple solid or gradient background so the primary design stands out.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: the design is the focus, not the backdrop
  Check@1440/390: screenshot at 1440px and 390px: the background is plain and the design leads.
- [AI-06] MUST use filled, overlapping solid shapes to create depth where depth is wanted (HIG wording: "consider").
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: overlapping solids read as depth
  Check@1440/390: screenshot at 390px shows filled, overlapping shapes.
- [AI-07] MUST include text in an icon only when it is essential to the experience or brand.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: in-icon text is neither accessible nor localized and clutters the icon
  Check@1440/390: screenshot at 390px: any text in the icon is essential.
- [AI-08] MUST NOT put nonessential words in an icon, such as calls to action ("Play") or context terms ("New").
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: the icon stays clean and does not go stale
  Check@1440/390: screenshot at 390px: text audit finds no such words.
- [AI-09] MUST NOT repeat the app name inside the icon when the name already appears next to it.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: the duplicate adds clutter
  Check@1440/390: screenshots at 390px of each context where the name shows (search, notification, share sheet).
- [AI-10] MUST prefer a graphic illustration over a photo in the icon.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: photos lose detail at small sizes and across appearances
  Check@1440/390: screenshot at 390px: the icon is an illustration, not a photo.
- [AI-11] MUST NOT use extremely thin line weights or sharp corners that lose detail at small sizes.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: the icon stays crisp at small sizes
  Check@1440/390: screenshot with the icon scaled to 40 px: fine lines and corners still read.
- [AI-12] MUST NOT copy standard UI components or app screenshots into the icon.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: the icon identifies the app, not one screen
  Check@1440/390: screenshot of the icon beside the app UI: no copied controls or screens.
- [AI-13] MUST NOT add bevels, glows, blurs, drop shadows or highlights to icon layers when the platform already applies those effects.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: custom effects clash with system effects and go stale
  Check@1440/390: screenshot on the platform at 1440px and 390px: no doubled shadows or highlights.
- [AI-14] MUST keep the icon visible, legible and recognizable on both light and dark backgrounds.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: the app is findable in any theme
  Check@1440/390: screenshots on light and dark backgrounds at 390px.
- [AI-15] MUST derive the dark icon from the light icon, using complementary colors and avoiding excessively bright imagery.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: a glaring dark icon looks out of place
  Check@1440/390: side-by-side light and dark screenshots at 390px.
- [AI-16] MUST keep any alternate icon closely related to the app's content so it is not mistaken for another app (HIG wording on offering alternates: "consider").
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: people do not confuse the app with another
  Check@1440/390: screenshot of the alternate icon beside the default icon at 390px: a reviewer confirms it is the same app.
- [AI-17] MUST keep primary icon content centered so corner rounding or masking does not truncate it.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: the key mark is always whole
  Check@1440/390: screenshot at 390px with a rounded-corner mask applied: no content is cut.
- [AI-18] MUST keep key content inside a safe zone that scaling and motion effects cannot crop.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: the key content stays visible under effects
  Check@1440/390: screenshots at 1440px and 390px with the largest crop applied: key content visible.
- [AI-19] MUST keep the icon distinct from the display background it sits on, and lighten a near-black background so the icon does not blend in.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: the icon's edge stays visible
  Check@1440/390: screenshot on the target background at 390px: the icon edge is distinct.
- [AI-20] MUST prefer vector source artwork with outlined text so the icon stays crisp at any size.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: vector art scales without blur
  Check@1440/390: render at 16 px, 32 px and 1024 px: edges are crisp.
- [AI-21] MUST export raster or mesh-gradient icon artwork as lossless PNG.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: no quality loss from compression
  Check@1440/390: not screenshot-checkable: file format is metadata.
- [AI-22] MUST use the sRGB, Gray Gamma 2.2 or Display P3 color space for icon artwork.
  HIG: App icons <https://developer.apple.com/design/human-interface-guidelines/app-icons> | Why: colors display as intended
  Check@1440/390: not screenshot-checkable: color space is file metadata.

## Branding (11 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/branding

- [BRA-01] MUST write all visible text in one consistent brand voice and tone, using plain words.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: people hear one consistent voice across the app
  Check@1440/390: screenshots at 1440px and 390px: read the visible copy against the brand voice guide.
- [BRA-02] MUST use the accent color only for primary actions and status indicators (such as unread badges or the selected tab), not across many controls.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: a broad accent overwhelms the interface and dilutes its meaning
  Check@1440/390: screenshots at 1440px and 390px: the accent appears only in those roles.
- [BRA-03] MUST keep a custom brand font legible at all sizes and support bold text and text enlargement.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: brand type still reads for everyone
  Check@1440/390: screenshots at 390px at the largest size and in bold: text stays legible.
- [BRA-04] MUST use readable default system fonts for body copy and captions, reserving the brand font for headlines and subheadings (HIG wording: "can work well").
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: body copy stays legible at small sizes
  Check@1440/390: screenshots at 1440px and 390px: body and caption text uses the default font.
- [BRA-05] MUST use components people already know, and keep their sizing, placement and behavior when customizing them.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: the app feels reliable from the first tap
  Check@1440/390: screenshots at 390px: customized components keep familiar size, placement and layout.
- [BRA-06] MUST NOT spend screen space on an element whose only job is to display a brand asset.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: the space goes to the content people came for
  Check@1440/390: screenshots at 1440px and 390px: no area holds only a logo or brand graphic.
- [BRA-07] MUST place UI in the locations people expect.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: people find controls without searching
  Check@1440/390: screenshots at 1440px and 390px: navigation and primary actions sit where conventions put them.
- [BRA-08] MUST use standard symbols to represent common actions.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: common actions are recognized at once
  Check@1440/390: screenshots at 1440px and 390px: common actions use standard symbols.
- [BRA-09] MUST follow established conventions for navigation and modality.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: stylized screens still behave as expected
  Check@1440/390: screenshots at 1440px and 390px: navigation and sheet or modal patterns match the usual conventions.
- [BRA-10] MUST NOT show the logo throughout the app unless it is essential for context.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: people already know which app they use
  Check@1440/390: screenshots at 1440px and 390px: the logo appears only where context needs it.
- [BRA-11] MUST NOT use the launch screen as a branding moment; put brand content on a welcome or onboarding screen.
  HIG: Branding <https://developer.apple.com/design/human-interface-guidelines/branding> | Why: a launch screen vanishes too fast to communicate
  Check@1440/390: not screenshot-checkable for the launch screen (it lasts only during load); the onboarding screen is checked at 1440px and 390px.

## Color (33 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/color

- [COL-01] MUST NOT use the same color to mean different things; keep each color's meaning consistent for status and interactivity.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: people learn what a color means once
  Check@1440/390: screenshots at 1440px and 390px: each color keeps one role across screens.
- [COL-02] MUST make every app color work in light, dark and increased-contrast contexts.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: colors stay readable in every setting
  Check@1440/390: screenshots in all three contexts at 1440px and 390px.
- [COL-03] MUST define each custom color with a light and a dark variant.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: custom colors adapt with the appearance
  Check@1440/390: side-by-side light and dark screenshots; the token file lists both variants.
- [COL-04] MUST give each custom color an increased-contrast variant that adds significant differentiation.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: people who need more contrast get clear differences
  Check@1440/390: screenshots at 1440px and 390px with increased contrast on: the variant is visibly more distinct.
- [COL-05] MUST test the color scheme under bright outdoor light and dim indoor light.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: colors shift with the environment
  Check@1440/390: not screenshot-checkable: needs viewing in real lighting conditions.
- [COL-06] MUST test colors on more than one display type and color profile.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: colors look different on different screens
  Check@1440/390: not screenshot-checkable: needs physical displays.
- [COL-07] MUST adjust nearby UI colors when artwork or a translucent surface changes what sits behind them, to keep continuity and legibility.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: controls do not clash with artwork or get lost
  Check@1440/390: screenshots at 1440px and 390px over artwork and over translucent bars.
- [COL-08] MUST use the platform's built-in color picker when people choose colors, where one exists (HIG wording: "prefer").
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: people reuse saved colors across apps
  Check@1440/390: screenshot at 1440px shows the built-in picker opening.
- [COL-09] MUST NOT rely on color alone to differentiate objects, show interactivity or convey essential information.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: color-blind people get the same meaning
  Check@1440/390: grayscale screenshots at 1440px and 390px: every distinction still shows.
- [COL-10] MUST NOT use colors that make content hard to perceive, such as low-contrast pairs that blend icons or text into the background.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: content stays readable
  Check@1440/390: screenshots at 1440px and 390px: sampled pairs meet the contrast minimums.
- [COL-11] MUST consider how colors are perceived in other countries and cultures before fixing their meanings.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: a color does not send the wrong message abroad
  Check@1440/390: not screenshot-checkable: a cultural review of each color meaning.
- [COL-12] MUST NOT hard-code system color values; reference the platform's color tokens instead.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: values can change between releases
  Check@1440/390: not screenshot-checkable: a code review finds no hard-coded system values.
- [COL-13] MUST use each semantic color only for its stated role, such as never using a separator color as text or a secondary-label color as a background.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: the color keeps adapting correctly
  Check@1440/390: not screenshot-checkable: the role is a code fact; screenshots confirm no separator-colored text.
- [COL-14] MUST emphasize a primary action by coloring its background, not its symbol or text.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: the action stands out and its label stays readable
  Check@1440/390: screenshots at 1440px and 390px: the primary button has the colored background.
- [COL-15] MUST NOT add color to the background of multiple controls at once.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: emphasis only works when it is rare
  Check@1440/390: screenshots at 1440px and 390px: at most one control carries a colored background per group.
- [COL-16] MUST NOT use similar colors in control labels over a colorful background; use a monochrome bar or an accent with clear differentiation (HIG wording: "prefer").
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: labels stay easy to read
  Check@1440/390: screenshots at 390px over colorful content: label contrast meets the minimum.
- [COL-17] MUST avoid overlapping similar colors between content and controls.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: controls keep their outline against content
  Check@1440/390: screenshots at 1440px and 390px: no control blends into the content behind it.
- [COL-18] MUST keep the resting state of colorful scrollable content legible, such as the top of the screen before scrolling.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: people read the screen as it first appears
  Check@1440/390: screenshots at 1440px and 390px of the unscrolled screen: text and controls are legible.
- [COL-19] MUST apply the correct color profile to every image.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: images show the colors the designer chose
  Check@1440/390: not screenshot-checkable: file metadata.
- [COL-20] MUST treat sRGB as the baseline color space for images, since it renders accurately on most displays.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: images look right for most people
  Check@1440/390: not screenshot-checkable: file metadata.
- [COL-21] MUST export wide-color images in the Display P3 profile at 16 bits per channel, as PNG, when wide color is appropriate (HIG wording: "when appropriate").
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: richer color on wide-gamut screens
  Check@1440/390: not screenshot-checkable: file metadata.
- [COL-22] MUST provide sRGB variants of wide-color images and gradients that clip or merge on sRGB screens.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: wide-color assets still look right on sRGB screens
  Check@1440/390: not screenshot-checkable: needs side-by-side viewing on an sRGB and a wide-gamut display.
- [COL-23] MUST use background levels to show hierarchy: primary for the overall view, secondary for grouped content, tertiary for grouping inside secondary elements.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: people see structure without reading it
  Check@1440/390: screenshots at 1440px and 390px of grouped content: the three levels are distinct.
- [COL-24] MUST use text emphasis levels: primary for main content, then secondary, tertiary and quaternary for progressively less important text.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: people find the main content first
  Check@1440/390: screenshots at 1440px and 390px: text steps down in emphasis as importance drops.
- [COL-25] MUST use the link color only for text that functions as a link.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: people know what they can tap
  Check@1440/390: screenshots at 1440px and 390px: link color appears only on links.
- [COL-26] MUST use the placeholder color only for placeholder text in controls.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: placeholder text is not mistaken for entered text
  Check@1440/390: screenshots at 1440px and 390px: placeholder color appears only in empty fields.
- [COL-27] MUST use an opaque separator where content behind it must not show through.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: the divider stays clear over busy content
  Check@1440/390: screenshots at 1440px and 390px over busy content: the opaque separator blocks what is behind it.
- [COL-28] MUST use a translucent separator where some underlying content may show through.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: dividers feel light and integrated
  Check@1440/390: screenshots at 1440px and 390px: the translucent separator lets underlying content show.
- [COL-29] MUST prefer color emphasis on bold text and large areas, not on lightweight or small text.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: colored thin small text is hard to see
  Check@1440/390: screenshots at 390px: colored text is bold or large, or colored areas are large.
- [COL-30] MUST NOT place a very bright or flashing object on a very dark background.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: a bright object on dark surroundings causes visual discomfort
  Check@1440/390: not screenshot-checkable for flashing; a screenshot shows the bright-on-dark extreme to be removed.
- [COL-31] MUST NOT use a decorative full-screen background color on views that stay on screen for long periods.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: long-viewed full-screen color tires the eyes
  Check@1440/390: screenshot at 390px of a long-running view: no full-screen decorative color.
- [COL-32] MUST use background color only to carry information, not as a purely visual flourish.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: color means something when it appears
  Check@1440/390: screenshots at 1440px and 390px: each background color maps to content it supports.
- [COL-33] MUST NOT use color alone to show focus; add scale or animation as well.
  HIG: Color <https://developer.apple.com/design/human-interface-guidelines/color> | Why: focus is visible to color-blind people too
  Check@1440/390: screenshot at 1440px of a focused control: the focus cue is not color alone.

## Dark Mode (18 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/dark-mode

- [DM-01] MUST NOT add an app-only appearance setting that overrides the system light or dark choice.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: people change one setting, and the app does not look broken
  Check@1440/390: screenshot of the settings screen at 1440px and 390px: no appearance control.
- [DM-02] MUST make the app look good in both light and dark appearances, including when the system switches between them while the app runs.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: Auto switching happens during the day
  Check@1440/390: paired light and dark screenshots at 1440px and 390px; switching while running is not screenshot-checkable.
- [DM-03] MUST keep text comfortably legible in dark mode with Increase Contrast and Reduce Transparency on, separately and together.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: legibility holds for people with stronger settings
  Check@1440/390: four screenshots at 390px (dark; dark with contrast; dark with transparency reduced; both): text is readable in each.
- [DM-04] MUST use a permanently dark appearance only for immersive media viewing, where the interface should recede (HIG wording: "in rare cases").
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: the media stays the focus
  Check@1440/390: screenshot of the media view at 1440px and 390px: dark only there.
- [DM-05] MUST NOT derive dark colors by simply inverting light colors.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: inverted palettes lose hierarchy
  Check@1440/390: side-by-side palette screenshots at 1440px: each dark role is chosen on its own; a pure inversion fails.
- [DM-06] MUST use semantic colors that adapt automatically to the current appearance for text, backgrounds and separators.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: colors follow the mode without extra work
  Check@1440/390: light and dark screenshot pair at 390px: colors change with the mode.
- [DM-07] MUST NOT hard-code colors that fail to adapt to the appearance.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: a fixed color breaks in one mode
  Check@1440/390: light and dark screenshot pair at 390px: a hard-coded color stays the same in both, which fails.
- [DM-08] MUST keep the contrast ratio between foreground and background colors at least 4.5:1 in dark mode.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: text stays legible on dark surfaces
  Check@1440/390: screenshots at 1440px and 390px: sampled pairs are 4.5:1 or more.
- [DM-09] MUST aim for a 7:1 contrast ratio for custom foreground and background colors, especially for small text (HIG wording: "strive").
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: small custom text stands out clearly
  Check@1440/390: screenshots at 390px: sampled small custom text is 7:1 or more.
- [DM-10] MUST slightly darken a bright white background in a content image so it does not glow in dark mode (HIG wording: "consider").
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: a glowing white block pulls focus from the UI
  Check@1440/390: screenshot at 390px in dark mode: the image's white area does not glare beside the dark UI.
- [DM-11] MUST tint interface icons with adaptive colors or vibrancy so they follow the appearance.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: icons stay legible in both modes
  Check@1440/390: light and dark screenshot pair at 390px: icon tint changes with the mode.
- [DM-12] MUST supply separate light and dark interface icons when one icon loses contrast in the other mode (for example an outline only on light).
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: each icon reads in its own mode
  Check@1440/390: light and dark screenshot pair at 390px: each icon is legible in its mode.
- [DM-13] MUST make full-color images and icons look right in both light and dark appearances.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: artwork does not clash with either mode
  Check@1440/390: light and dark screenshot pair at 390px.
- [DM-14] MUST use separate light and dark assets when one asset looks right in only one appearance.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: each mode gets an asset that suits it
  Check@1440/390: light and dark screenshot pair at 390px: no asset looks wrong in either mode.
- [DM-15] MUST use the system label colors (primary, secondary, tertiary, quaternary) for text labels.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: text adapts to both modes
  Check@1440/390: light and dark screenshot pair at 390px: text steps down in emphasis in both modes.
- [DM-16] MUST use the platform's own text fields and text views instead of drawing text yourself, where possible.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: system views stay legible on any background
  Check@1440/390: not screenshot-checkable: an implementation choice; the reviewer checks the code.
- [DM-17] MUST make foreground surfaces such as popovers and modal sheets lighter than the background they sit on in dark mode.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: depth reads clearly
  Check@1440/390: light and dark screenshots at 1440px and 390px with a sheet open: the sheet is lighter than the background.
- [DM-18] MUST NOT replace system background colors with custom backgrounds that hide the depth and separation the system provides.
  HIG: Dark Mode <https://developer.apple.com/design/human-interface-guidelines/dark-mode> | Why: layered views keep their visual distinctions
  Check@1440/390: screenshot with a sheet open at 1440px and 390px: the layers remain distinct.

## Icons (28 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/icons

- [ICO-01] MUST express one concept per icon that people understand at a glance.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: people act on icons without reading labels
  Check@1440/390: screenshot at 390px: a reviewer names the icon's meaning without its label.
- [ICO-02] MUST simplify each icon to a recognizable, highly reduced design.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: too many details make an icon unreadable
  Check@1440/390: screenshot at 390px: the icon has no detail that a quick glance cannot read.
- [ICO-03] MUST use familiar visual metaphors directly related to the action or content.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: people guess the meaning from the metaphor
  Check@1440/390: screenshot at 390px: each icon's metaphor matches its action or content.
- [ICO-04] MUST keep all interface icons in one app at a consistent size.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: uneven icons look broken
  Check@1440/390: screenshots of a toolbar at 1440px and 390px: icon sizes match.
- [ICO-05] MUST keep the level of detail consistent across all interface icons.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: one visual language across the app
  Check@1440/390: screenshot of the icon set at 1440px: detail level matches.
- [ICO-06] MUST keep stroke thickness consistent across all interface icons.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: one visual weight across the app
  Check@1440/390: screenshot of the icon set at 1440px: strokes match.
- [ICO-07] MUST keep perspective consistent across all interface icons.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: icons look like one family
  Check@1440/390: screenshot of the icon set at 1440px: perspective matches.
- [ICO-08] MUST match an icon's weight to its adjacent text unless you deliberately emphasize one of them.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: icon and text read as one line
  Check@1440/390: screenshot at 390px: icon and label weights match.
- [ICO-09] MUST adjust icon dimensions so each icon looks as visually heavy as the others.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: heavy icons do not dominate the row
  Check@1440/390: screenshot grid at 1440px: visual weights look even.
- [ICO-10] MUST add padding to asymmetric custom icons so they look optically centered, not only geometrically centered.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: icons look balanced in their slot
  Check@1440/390: screenshot at 390px: icons look centered in their slots.
- [ICO-11] MUST provide a selected-state icon only when the component cannot show selection itself.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: no duplicate art to maintain
  Check@1440/390: screenshot of a selected toolbar item at 1440px: the component shows selection without a second icon.
- [ICO-12] MUST use gender-neutral human figures and avoid images that are hard to recognize across cultures or languages.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: icons welcome everyone and read in any language
  Check@1440/390: not screenshot-checkable: a cultural review of each figure.
- [ICO-13] MUST include text in an icon only when it is essential to the meaning.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: text inside icons is hard to localize and read
  Check@1440/390: screenshot at 390px: any text in an icon is essential.
- [ICO-14] MUST localize every character shown inside an icon.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: the icon reads correctly in every language
  Check@1440/390: screenshots at 390px in each shipped locale.
- [ICO-15] MUST show a passage of text in an icon as an abstract mark, not as real words.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: the mark suggests text without needing translation
  Check@1440/390: screenshot at 390px: the icon shows an abstract mark.
- [ICO-16] MUST provide a flipped version of a directional icon, such as the abstract text-passage icon, for right-to-left layouts.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: direction reads correctly for right-to-left readers
  Check@1440/390: screenshot at 390px in a right-to-left locale: the icon is flipped.
- [ICO-17] MUST supply custom interface icons as vector art (PDF or SVG) so they scale without extra sizes.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: icons stay crisp on every display
  Check@1440/390: render at two sizes: edges are crisp at both.
- [ICO-18] MUST give every custom interface icon an accessibility text label for screen readers.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: screen-reader users hear what the icon does
  Check@1440/390: not screenshot-checkable: the label is in the accessibility tree.
- [ICO-19] MUST use the standard icon for each editing action: cut, copy, paste, done, save, cancel, close, delete, undo, redo, compose, duplicate, rename, move to, folder, attach, add, more.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: people recognize standard actions at once
  Check@1440/390: screenshots of the editing toolbar at 1440px and 390px match the HIG icon reference for each action.
- [ICO-20] MUST use the standard icon for each selection action: select, deselect, close, delete.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: selection works as people expect
  Check@1440/390: screenshots of selection controls at 1440px and 390px match the HIG icon reference.
- [ICO-21] MUST use the standard icon for each text-formatting action: superscript, subscript, bold, italic, underline, align left, center, justified, align right.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: formatting is found at a glance
  Check@1440/390: screenshots of the formatting bar at 1440px and 390px match the HIG icon reference.
- [ICO-22] MUST use the standard icon for each search action: search, find, find and replace, find next, find previous, use selection for find, filter.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: search tools are recognized at once
  Check@1440/390: screenshots of search controls at 1440px and 390px match the HIG icon reference.
- [ICO-23] MUST use the standard icon for sharing and exporting: share, export, print.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: sharing is recognized at once
  Check@1440/390: screenshots of the share and export controls at 1440px and 390px match the HIG icon reference.
- [ICO-24] MUST use the standard icon for users and accounts: account, user, profile.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: account areas are found quickly
  Check@1440/390: screenshots of account controls at 1440px and 390px match the HIG icon reference.
- [ICO-25] MUST use the standard icon for ratings: dislike, like.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: ratings read clearly
  Check@1440/390: screenshots of rating controls at 1440px and 390px match the HIG icon reference.
- [ICO-26] MUST use the standard icon for layer ordering: bring to front, send to back, bring forward, send backward.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: stacking order is clear
  Check@1440/390: screenshots of ordering controls at 1440px and 390px match the HIG icon reference.
- [ICO-27] MUST use the standard icon for other common actions: alarm, archive, calendar.
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: common items are recognized at once
  Check@1440/390: screenshots at 1440px and 390px match the HIG icon reference.
- [ICO-28] MUST simplify small versions of an icon by removing or thickening detail that blurs at small sizes (HIG example: 16 px).
  HIG: Icons <https://developer.apple.com/design/human-interface-guidelines/icons> | Why: the icon stays recognizable at every size
  Check@1440/390: screenshot at the smallest size (16 px): the detail still reads.

## Images (12 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/images

- [IMA-01] MUST size artwork in points (device-independent units), not fixed pixels, so it keeps its size across displays.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: layouts match on every screen
  Check@1440/390: screenshots at 1440px and 390px: the same asset renders at the same point size on both (reading pt as CSS px).
- [IMA-02] MUST provide high-resolution bitmap assets, at least 2x, for every device size you support.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: images stay sharp on high-density screens
  Check@1440/390: screenshots at 390px and 1440px: no pixelation at 2x.
- [IMA-03] MUST design bitmaps at the lowest resolution and scale them up to make the high-resolution versions.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: one master produces every size
  Check@1440/390: not screenshot-checkable: an export workflow fact; check the source file's pixel dimensions.
- [IMA-04] MUST position vector control points on whole values so they stay aligned to the pixel grid at higher densities.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: edges stay crisp at 2x
  Check@1440/390: render at 1x and 2x: edges are crisp, with no half-pixel blur.
- [IMA-05] MUST save raster graphics as de-interlaced PNG.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: a standard, lossless, fast-loading format
  Check@1440/390: not screenshot-checkable: file format metadata.
- [IMA-06] MUST save PNG graphics that do not need full 24-bit color as 8-bit palette PNG.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: smaller files with no visible loss
  Check@1440/390: not screenshot-checkable: file format metadata.
- [IMA-07] MUST save photos as optimized JPEG or HEIC.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: photos load fast at good quality
  Check@1440/390: not screenshot-checkable: file format metadata.
- [IMA-08] MUST save flat icons, interface icons and other flat artwork that must scale as PDF or SVG.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: one file scales to every density
  Check@1440/390: not screenshot-checkable for format; render at two sizes to confirm crispness.
- [IMA-09] MUST include a color profile with every image.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: colors display as intended
  Check@1440/390: not screenshot-checkable: file metadata.
- [IMA-10] MUST test images on real devices, not only in the design tool, for pixelation, stretching and compression.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: design-tool previews can look fine on a device that does not
  Check@1440/390: not fully screenshot-checkable: needs physical devices; screenshots at 390px and 1440px at 1x and 2x are a partial proxy.
- [IMA-11] MUST prefer vector artwork for 2D images that must scale to many sizes.
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: vector art does not blur when scaled up
  Check@1440/390: render at a small and a large size: no blur at either.
- [IMA-12] MUST NOT keep transparency in an image that always sits on one solid background; bake the background into the file (HIG wording: "in general").
  HIG: Images <https://developer.apple.com/design/human-interface-guidelines/images> | Why: smaller files and no edge halo
  Check@1440/390: screenshot on the target background at 390px: no halo or fringe; compare file sizes.

# Exclusions and persona notes

### Accessibility
Apple-specific, excluded:
- Dynamic Type, the Typography cross-reference, and the 140 percent watchOS enlargement figure.
- Platform default type sizes (17, 13, 29, 17 and 16 pt) and the macOS, tvOS and visionOS default control sizes.
- Apple feature names: VoiceOver, Voice Control, Switch Control, AssistiveTouch, Full Keyboard Access, Pointer Control, Siri and Shortcuts, Assistive Access (including its Camera layout example).
- Accessibility Inspector and App Store Accessibility Nutrition Labels.
- Music Haptics and Audio Graphs (iOS and iPadOS).
- visionOS comfort guidance (field of view, horizontal layouts, camera motion, head-anchored content) and visionOS Zoom and pointer artwork.
- Developer links to Apple APIs (for example isVideoAutoplayEnabled, flashing-lights and assistive-access).
Persona and journey notes:
- People who are blind, color blind, low-vision or light-sensitive; deaf or hard of hearing, including in noisy or public places; with limited dexterity or mobility; with speech disabilities; with cognitive disabilities.
- Journey: a simplified mode for cognitive needs shows one interaction per screen; time-limited views block slow readers and assistive-technology users.

### App icons
Apple-specific, excluded:
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

### Branding
Apple-specific, excluded:
- Apple trademarks must not appear in app names or images (Apple trademark list and third-party guidelines).
- App Store opportunities to show the brand (App Store presence).
- Liquid Glass color placement in the content layer.
Persona and journey notes:
- First-time users meet the welcome or onboarding screen; returning users expect standard patterns; all users want content, not repeated branding.
- Journey: launch screen (brief load), then welcome or onboarding (where brand content belongs), then content.

### Color
Apple-specific, excluded:
- Named system color palettes (red through brown, and the gray scales) with their default and increased-contrast values.
- Dynamic system color roles for iOS, iPadOS and macOS (UIKit and AppKit names), including the full macOS list.
- macOS accent color, graphite and desktop tinting settings, and fixed-color sidebar icons.
- True Tone white-point adaptivity (UIWhitePointAdaptivityStyle) and macOS display-profile switching.
- Liquid Glass color behavior on toolbars, tab bars and sidebars (monochrome and opacity rules).
- visionOS glass material and physical-surroundings color effects; tvOS brand palette and TV testing.
- watchOS complication tinted mode and the Activity ring background example.
Persona and journey notes:
- People who are color blind (red-green, blue-orange); people viewing in bright sunlight or dim rooms; people in other countries and cultures; people using increased-contrast settings.
- Journey: none beyond the screen-by-screen states covered above.

### Dark Mode
Apple-specific, excluded:
- SF Symbols that adapt to Dark Mode automatically (Apple symbol set).
- macOS desktop tinting with the graphite accent, and the transparency rules for custom macOS components.
- Platform support notes: Dark Mode is not supported on visionOS or watchOS; no extra tvOS considerations.
Persona and journey notes:
- People who choose Dark Mode in low-light places; people who choose Auto, so the mode can change during the day while the app is open; people with Increase Contrast or Reduce Transparency on.
- Journey: the system can switch appearance while the app is open, and the app must follow without a restart.

### Icons
Apple-specific, excluded:
- SF Symbols names for every standard icon, and the choice to use or customize SF Symbols.
- macOS document icons: folded-corner shape, background and center-image sizes, the 10 percent margin and the extension term.
- Replicas of Apple hardware products in icons (Apple brand rule).
Persona and journey notes:
- People who use screen readers to hear icon labels; people in other languages and cultures; right-to-left readers.
- Journey: people choose items, actions and modes from icons in menus, toolbars and buttons.

### Images
Apple-specific, excluded:
- Scale-factor filename suffixes (@1x, @2x, @3x), the asset-catalog workflow, and the per-platform scale-factor table.
- tvOS layered images: parallax effect, two to five layers, opaque background layer, runtime .lcr files, layerutil, Parallax Previewer and Parallax Exporter.
- visionOS images: layered app icons, spatial photos and scenes, stereo HEIC, the feathered glass background for text, and resolutions above @2x.
- watchOS autoscaling PDF screen-size table (38mm to 49mm).
Persona and journey notes:
- Viewers on displays of many densities and sizes, from phones to TVs, see the same asset.
- Journey: none beyond the screen-size changes covered above.
