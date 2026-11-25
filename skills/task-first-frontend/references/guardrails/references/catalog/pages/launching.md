Candidate catalog - evidence only; not executable requirements.

# Launching: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/launching
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 33f80ef10270694b6ddf5a6ef2950962afd21adec944b5f6459613f364132a07
Input words: 750. Candidate rule records: 14. Exclusion blocks: 8.
Original note: p001-launching/launching.md.
Adopted source-linked rules: P-01

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Launching
URL: https://developer.apple.com/design/human-interface-guidelines/launching

Universal rules:
1. MUST: Launch the app or game instantly so people can interact right away.
   topic: launch speed
   source: Best practices, "Launch instantly"
   why: People want to start interacting immediately and sometimes will not wait more than a couple of seconds.
   check: Time from open to first usable screen is under a couple of seconds on the target device.
2. MUST: Provide a launch screen wherever the platform requires one.
   topic: launch screen presence
   source: Best practices, "If the platform requires it, provide a launch screen"
   why: A required launch screen is part of the platform contract and sets the perception of a fast start.
   check: On each platform that requires a launch screen, one is present at startup.
3. MUST: Restore the previous state when the app restarts so people can continue where they left off.
   topic: state restoration
   source: Best practices, "Restore the previous state when your app restarts"
   why: Resuming work is the expectation after a restart; losing it forces people to start over.
   check: Quit and relaunch mid-task; the app returns to the same task or content.
4. MUST: Restore granular details of the previous state as far as possible, such as scroll position and view arrangement.
   topic: granular state restoration
   source: Best practices, "Restore granular details of the previous state"
   why: Coarse restoration still makes people redo small steps to get back to their place.
   check: After relaunch, scroll position and open views match what they were before quitting.
5. MUST NOT: Make people retrace steps to reach their previous location in the app or game.
   topic: navigation after restart
   source: Best practices, "Avoid making people retrace steps"
   why: Re-navigating to the prior location wastes time and breaks the sense of continuity.
   check: After relaunch, the previous location is reachable with no extra navigation steps.
6. MUST NOT: Treat the launch screen as an onboarding experience or a splash screen.
   topic: launch screen purpose
   source: Launch screens, "Downplay the launch experience"
   why: A launch screen only bridges to the first screen; mixing in other roles adds delay and noise.
   check: The launch screen contains nothing beyond what the first screen shows.
7. MUST NOT: Use the launch screen for artistic expression; its sole function is to make the experience feel quick and ready.
   topic: launch screen function
   source: Launch screens, "Downplay the launch experience"
   why: Decorative content makes the launch feel slower and draws attention away from the task.
   check: The launch screen has no decorative or illustrative content beyond what the first screen needs.
8. MUST: Design the launch screen to be nearly identical to the first screen.
   topic: launch-to-first-screen match
   source: Launch screens, "Design a launch screen that's nearly identical"
   why: Elements that change at transition cause a visible flash that breaks the impression of speed.
   check: Side-by-side comparison shows no layout or element shift at transition.
9. MUST: If the app shows a solid color before the first screen, make the launch screen display only that solid color.
   topic: solid color launch
   source: Launch screens, "If your app or game displays a solid color"
   why: Any extra element makes the transition look like a change instead of a continuation.
   check: The launch screen is a single fill matching the color shown before the first screen.
10. MUST: Match the launch screen to the device's current orientation and appearance mode.
   topic: orientation and appearance match
   source: Launch screens, "make sure that your launch screen matches the device's current orientation and appearance mode"
   why: A mismatch produces a visible flash or wrong-looking start.
   check: Launch in each supported orientation and in light and dark appearance; the launch screen matches the state of the first screen.
11. MUST NOT: Put text on the launch screen.
   topic: text on launch screen
   source: Launch screens, "Avoid including text on your launch screen"
   why: The launch screen content is fixed, so any text cannot be localized and may not match the first screen.
   check: The launch screen contains no text characters.
12. MUST NOT: Advertise on the launch screen.
   topic: advertising on launch screen
   source: Launch screens, "Don't advertise"
   why: A launch screen is a speed cue, not a marketing surface.
   check: The launch screen contains no promotional message or call to action.
13. MUST NOT: Include logos or other branding elements on the launch screen unless they are a fixed part of the first screen.
   topic: branding on launch screen
   source: Launch screens, "don't include logos or other branding elements unless they're a fixed part of your app's first screen"
   why: Branding that is absent from the first screen causes a mismatch at transition.
   check: Every logo or brand mark on the launch screen also appears in the same place on the first screen.
14. MUST NOT: Make the launch screen look like a splash screen or an "About" window.
   topic: launch screen appearance
   source: Launch screens, "Avoid creating a screen that looks like a splash screen or an 'About' window"
   why: A splash or About look signals a separate screen and delays the first usable view.
   check: The launch screen does not resemble a splash or About layout.

Apple-specific (excluded):
- iOS, iPadOS, tvOS: the system displays the launch screen at app start and replaces it with the first screen.
- iOS, iPadOS: launch in the device's current orientation, and make landscape-only interfaces respond to rotation in either direction.
- tvOS: the launch screen is static, unlike layered images used elsewhere in the app.
- tvOS: live-viewing apps may automatically start playback after a few seconds of inactivity.
- visionOS: launch in the Shared Space even when the app is fully immersive.
- visionOS: let people choose when to transition to a Full Space.
- macOS, visionOS, watchOS: launch screens are not applicable or not required.
- Developer documentation: Xcode launch screen specification and UIKit launch response (developer references, not rules).

Persona and journey notes:
- Launching starts when someone opens the app, includes any initial download, and ends when the first screen is ready.
- After launching, an onboarding experience may give people a high-level view of the app.
- A splash screen (branding and needed information) is best shown at the start of onboarding; without onboarding, show it as soon as launching completes (guidance, not a rule).
- Launch Experience matters most to people who return often: restored state is what they feel first.
- Related pages not read here: onboarding, loading.

COVERAGE: Read 1 of 1 file in full (Best practices, Launch screens, Platform considerations, Resources, Change log). Universal rules: 14. Apple-specific excluded: 8. Persona and journey notes: 5 items. Change log entries (June 2024 splash screen guidance, June 2023 visionOS update) carry no rules.
