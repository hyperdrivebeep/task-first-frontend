Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: p001-launching

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Launching (14 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/launching

- [LAU-01] MUST Launch the app or game instantly so people can interact right away.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: People want to start interacting immediately and sometimes will not wait more than a couple of seconds.
  Check@1440/390: Time from open to first usable screen is under a couple of seconds on the target device.
- [LAU-02] MUST Provide a launch screen wherever the platform requires one.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: A required launch screen is part of the platform contract and sets the perception of a fast start.
  Check@1440/390: On each platform that requires a launch screen, one is present at startup.
- [LAU-03] MUST Restore the previous state when the app restarts so people can continue where they left off.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: Resuming work is the expectation after a restart; losing it forces people to start over.
  Check@1440/390: Quit and relaunch mid-task; the app returns to the same task or content.
- [LAU-04] MUST Restore granular details of the previous state as far as possible, such as scroll position and view arrangement.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: Coarse restoration still makes people redo small steps to get back to their place.
  Check@1440/390: After relaunch, scroll position and open views match what they were before quitting.
- [LAU-05] MUST NOT Make people retrace steps to reach their previous location in the app or game.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: Re-navigating to the prior location wastes time and breaks the sense of continuity.
  Check@1440/390: After relaunch, the previous location is reachable with no extra navigation steps.
- [LAU-06] MUST NOT Treat the launch screen as an onboarding experience or a splash screen.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: A launch screen only bridges to the first screen; mixing in other roles adds delay and noise.
  Check@1440/390: The launch screen contains nothing beyond what the first screen shows.
- [LAU-07] MUST NOT Use the launch screen for artistic expression; its sole function is to make the experience feel quick and ready.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: Decorative content makes the launch feel slower and draws attention away from the task.
  Check@1440/390: The launch screen has no decorative or illustrative content beyond what the first screen needs.
- [LAU-08] MUST Design the launch screen to be nearly identical to the first screen.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: Elements that change at transition cause a visible flash that breaks the impression of speed.
  Check@1440/390: Side-by-side comparison shows no layout or element shift at transition.
- [LAU-09] MUST If the app shows a solid color before the first screen, make the launch screen display only that solid color.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: Any extra element makes the transition look like a change instead of a continuation.
  Check@1440/390: The launch screen is a single fill matching the color shown before the first screen.
- [LAU-10] MUST Match the launch screen to the device's current orientation and appearance mode.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: A mismatch produces a visible flash or wrong-looking start.
  Check@1440/390: Launch in each supported orientation and in light and dark appearance; the launch screen matches the state of the first screen.
- [LAU-11] MUST NOT Put text on the launch screen.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: The launch screen content is fixed, so any text cannot be localized and may not match the first screen.
  Check@1440/390: The launch screen contains no text characters.
- [LAU-12] MUST NOT Advertise on the launch screen.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: A launch screen is a speed cue, not a marketing surface.
  Check@1440/390: The launch screen contains no promotional message or call to action.
- [LAU-13] MUST NOT Include logos or other branding elements on the launch screen unless they are a fixed part of the first screen.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: Branding that is absent from the first screen causes a mismatch at transition.
  Check@1440/390: Every logo or brand mark on the launch screen also appears in the same place on the first screen.
- [LAU-14] MUST NOT Make the launch screen look like a splash screen or an "About" window.
  HIG: Launching <https://developer.apple.com/design/human-interface-guidelines/launching> | Why: A splash or About look signals a separate screen and delays the first usable view.
  Check@1440/390: The launch screen does not resemble a splash or About layout.

# Exclusions and persona notes

### Launching
Apple-specific, excluded:
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
