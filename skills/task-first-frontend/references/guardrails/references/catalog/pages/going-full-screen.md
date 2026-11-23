Candidate catalog - evidence only; not executable requirements.

# Going full screen: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 64f64f24eabc34cacc9e982cc05e877d824f82c23dfa519e2635f2d2dd60268b
Input words: 860. Candidate rule records: 19. Exclusion blocks: 9.
Original note: 08-generative-ai/going-full-screen.md.
Adopted source-linked rules: P-38

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Going full screen
URL: https://developer.apple.com/design/human-interface-guidelines/going-full-screen

Universal rules:
- MUST offer a full-screen mode for a game, media viewing (video or photo slideshow), or an in-depth task that needs a distraction-free environment. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People who want to focus or be immersed can do so without leaving the app. | check: At 1440px and 390px, screenshot the game, media or task screen; a full-screen entry control is visible at both widths.
- MUST NOT programmatically resize the window when full-screen mode starts. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: The window keeps the size people chose, so nothing shifts under them. | check: not screenshot-checkable: requires observing window size changes at runtime, not a static screen state.
- MUST keep essential content prominent when the full-screen window is larger than the windowed one. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People still see what matters most when the extra space appears. | check: At 1440px, screenshot the windowed and full-screen layouts; the primary content is the most prominent element in both.
- MUST keep the same items in full-screen mode and change only the interface proportions. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People find the same things where they expect them. | check: At 1440px, screenshot the windowed and full-screen layouts; the same labelled items appear in both.
- MUST keep full-screen layout adjustments subtle enough that the interface stays consistent. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: The app still looks like itself after going full screen. | check: At 1440px and 390px, screenshot windowed and full-screen; font, colour and component styles match.
- MUST NOT cause visually jarring transitions when switching between full-screen and windowed modes. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People are not startled by a sudden jump in layout. | check: not screenshot-checkable: requires capturing the transition frames, not a single static state.
- MUST keep essential features and controls available so people can finish the task without leaving full-screen mode. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People complete their task without a detour out of full screen. | check: At 1440px and 390px, screenshot the task screen in full-screen mode; every essential control is visible or one action away.
- MUST keep playback controls persistently available or easy to reveal in a full-screen media experience. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People can pause, seek or adjust without hunting for controls. | check: At 1440px and 390px, screenshot the full-screen player with controls shown and hidden; controls are visible or revealed by one action.
- MUST let people resume where they left off when they return to the experience after switching away. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People do not lose their place when they come back. | check: not screenshot-checkable: requires a before-and-after navigation sequence, not one screen.
- MUST pause a game or slideshow automatically when people leave the full-screen experience. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People do not miss anything while they are away. | check: not screenshot-checkable: requires observing playback state after switching away.
- MUST let people choose when to exit full-screen mode. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People stay in control of their own view. | check: At 1440px and 390px, screenshot full-screen mode; a visible exit control is present at both widths.
- MUST NOT end full-screen mode automatically when people switch to another experience or finish an absorbing activity. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People are not thrown out of their focus mid-activity. | check: not screenshot-checkable: requires observing mode state after a switch or completion event.
- MUST hide toolbars and navigation controls only temporarily, and only when the content is the primary focus. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People get a distraction-free view without losing their controls for good. | check: At 1440px and 390px, screenshot the content view with toolbars hidden and then shown; the bars are present in the shown state.
- MUST let people restore hidden toolbars and navigation controls with a familiar gesture or action, such as tapping, swiping down, or moving the cursor to the top of the screen. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People get their controls back without searching for them. | check: At 1440px and 390px, screenshot the hidden state and the state after the reveal action; the controls are back after the action.
- MUST keep toolbars and navigation controls visible when they are essential for navigation or performing tasks. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People can always move through the app and finish their tasks. | check: At 1440px and 390px, screenshot a navigation-dependent screen in full-screen mode; the navigation controls are visible.
- MUST guard a full-screen game or app against accidental exits. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People do not drop out of play because of an accidental touch or click. | check: not screenshot-checkable: exit prevention is input-handling behaviour, not a visual state.
- MUST let people choose when to enter full-screen mode. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People decide when the window fills the screen. | check: At 1440px, screenshot the windowed state; a user-visible enter control is present and the window is not already full screen.
- MUST NOT offer a custom menu of window modes. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People find one familiar way to change the window size. | check: At 1440px, screenshot the app's View and window menus; no custom window-mode menu appears.
- MUST NOT change the display mode automatically when a game goes full screen. | topic: Going full screen | source: https://developer.apple.com/design/human-interface-guidelines/going-full-screen | why: People stay in control of their own display mode. | check: not screenshot-checkable: requires reading the display configuration before and after entering full screen.

Apple-specific (excluded):
- Revealing the Dock in iPadOS and macOS full-screen apps, and ignoring an initial bottom-edge swipe (Apple OS feature).
- Hiding the Dock entirely in macOS (Apple OS feature).
- Home Screen indicator auto-hide and the one-swipe exit on iOS and iPadOS (Apple OS feature).
- Two-swipe exit option through preferredScreenEdgesDeferringSystemGestures (Apple framework).
- System-provided macOS full-screen support, including the camera housing accommodation (Apple OS feature).
- Enter Full Screen button, View menu item and Control-Command-F shortcut (Apple's own components and shortcut).
- Full-screen not supported on tvOS, visionOS or watchOS (Apple platforms).
- visionOS window toolbar hiding, Apple Vision Pro immersive expectations and Digital Crown passthrough (Apple hardware).
- Developer references: fullScreenCover, NSScreen, CollectionBehavior, toggleFullScreen, hideDock, managing-your-game-window-for-metal-in-macos (Apple frameworks).

Persona and journey notes:
- Persona: a player, a viewer of photos or video, or a person doing a focused, in-depth task.
- Journey: enter full screen, keep the controls they need, switch away and return to find their place, then exit when they choose.

COVERAGE: 19 universal rules recorded (the page's "consider", "might" and "should" guidance is recorded as MUST per the template); 9 Apple-specific lines excluded; the optional custom game toggle is not recorded as a rule because the page only allows it; the change log and related links state no rules.
