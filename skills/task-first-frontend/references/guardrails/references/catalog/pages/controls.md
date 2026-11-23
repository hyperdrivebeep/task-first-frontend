Candidate catalog - evidence only; not executable requirements.

# Controls: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/controls
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra child.
Snapshot SHA-256: 2c48ee88a8b6012a4f4ca087e0b3791e819473f6b976973adfbe5d2f0b8a6081
Input words: 988. Candidate rule records: 22. Exclusion blocks: 8.
Original note: p095-controls/controls.md.
Adopted source-linked rules: T-03

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Controls
URL: https://developer.apple.com/design/human-interface-guidelines/controls
Reader: Astra child, 2026-11-04 KST

Universal rules:
- MUST use a button for an action or destination and a toggle for switching between two states when exposing quick controls. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: the interaction matches whether the user is initiating something or changing a binary state | check: not screenshot-checkable: control-semantics probe activating each button and toggle and confirming its action, destination, or two-state transition.
- MUST give a quick control a symbol for its function, a title describing its subject, and an optional value representing its state. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people can distinguish what is controlled from its current condition | check: 1440px and 390px screenshots of labeled controls show a meaningful symbol and subject title, with any value expressing the actual state rather than repeating the title.
- MUST prioritize quick-control actions that offer substantial benefit without launching the full app. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people can accomplish a useful task without navigating away from their current context | check: not screenshot-checkable: quick-action journey probe executing the selected actions and recording which useful outcomes can be reached without entering the app.
- MUST update control contents after interaction so they reflect the current state accurately. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people can tell what their input did | check: not screenshot-checkable: interaction-state probe activating the control and comparing its contents with the actual resulting state.
- MUST update control contents when the action completes. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people can distinguish an unfinished action from a completed one | check: not screenshot-checkable: completion-state probe finishing a delayed action and verifying that the control leaves its in-progress presentation.
- MUST update control contents when remote changes affect the represented state. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: the control remains accurate even when the local user did not cause the change | check: not screenshot-checkable: remote-state probe changing the underlying state remotely and verifying the control's updated contents.
- MUST show when a control action is still in progress. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people know that the requested work has started but has not finished | check: 1440px and 390px screenshots of a deliberately held in-progress action show a distinct pending presentation; these still frames establish the visible state only, not animation or update timing.
- MUST choose a descriptive symbol that communicates the control's behavior even when its title and value are absent. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: icon-only placements remain understandable | check: 1440px and 390px screenshots of the icon-only presentation show a symbol whose depicted action matches the control's documented behavior.
- MUST provide different symbol representations for both on and off toggle states. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: the control's current condition can be recognized visually | check: 1440px and 390px paired on-state and off-state screenshots show the corresponding symbol representation for each state.
- MUST use symbol animation to highlight control state changes, including transitions in both directions between a toggle's on and off states. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people can follow the change from the previous state to the new state | check: not screenshot-checkable: symbol-transition probe recording state changes, including both on-to-off and off-to-on toggle interactions, and checking the corresponding animation.
- MUST keep a duration-based button's progress animation running while its action performs and stop it when the action completes. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: motion accurately signals ongoing work rather than falsely implying completion or continued activity | check: not screenshot-checkable: duration-animation lifecycle probe holding the action open, observing continuing animation, then completing the action and confirming that animation stops.
- MUST choose a control tint that is consistent with the app's visual identity when the host supports a custom tint. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: the control remains recognizable as part of the app | check: 1440px and 390px screenshots of the tinted control beside an app identity reference show a consistent color treatment.
- MUST prompt for required configuration when a person first adds a control. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: the control has the target or other information needed to perform the desired action | check: not screenshot-checkable: first-add configuration probe adding an unconfigured control and verifying that the necessary target or options are requested.
- MUST let people reconfigure a control after its initial setup. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: a shortcut can continue to serve the person as their preferred target changes | check: not screenshot-checkable: reconfiguration probe changing an existing control's target and confirming that subsequent activation uses the new configuration.
- MUST provide a verb-based hint explaining the resulting action when an interaction offers a preview before a separate press-and-hold activation. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people understand what committing the gesture will do | check: not screenshot-checkable: preview-and-hold probe triggering the hint, checking that it uses a verb describing the action, then holding to compare the actual result.
- MUST provide meaningful placeholder title or value content when the real title or value varies with context. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people can understand the control before choosing or configuring it | check: 1440px and 390px screenshots of the control chooser before configuration show informative placeholders in place of unavailable situational content.
- MUST hide personal or security-related title and value information when a control is visible while the device is locked. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: quick access does not expose sensitive details to a bystander | check: not screenshot-checkable: locked-label privacy probe locking the device with sensitive control data present and checking that the title and value are concealed.
- MUST assess whether a control's symbol state also reveals sensitive information and conceal it in the locked state when necessary. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: an icon does not defeat privacy protection applied to text | check: not screenshot-checkable: locked-symbol privacy probe comparing sensitive on and off conditions while locked and verifying that protected state information is not revealed.
- MUST require authentication before performing security-affecting control actions. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: convenient access does not allow unauthorized changes to physical or other security | check: not screenshot-checkable: unauthenticated-security-action probe attempting the action without authentication and verifying that it cannot execute until authentication succeeds.
- MUST require authentication and unlocking before tasks beyond capture when a camera experience is available on a locked device. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: immediate capture does not grant access to broader app functions | check: not screenshot-checkable: locked-capture boundary probe capturing content while locked, then attempting editing or posting and verifying the authentication and unlock boundary.
- MUST use the same camera interface in a locked-device capture experience and the main app. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people can use familiar controls and continue smoothly into the app | check: 1440px and 390px paired screenshots of the capture-only and main-app camera views show matching camera controls and interaction layout.
- MUST provide instructions for adding the control that launches a separate camera experience. | topic: Controls | source: https://developer.apple.com/design/human-interface-guidelines/controls | why: people can discover and enable the direct capture entry point | check: 1440px and 390px screenshots of the setup guidance show understandable steps for adding the camera control.

Apple-specific (excluded):
- Control Center, Lock Screen, and Action button placements and their distinct installation or configuration gestures.
- Control Center size-dependent title/value visibility, Lock Screen symbol-only presentation, and Action button symbol/value display in Dynamic Island.
- SF Symbols, the garage-door symbol identifiers, Symbols and SymbolEffect APIs, and Live Activities as the platform's ongoing-progress presentation.
- System tint application to an on-state toggle symbol and to the Action button's Dynamic Island symbol and value.
- Push notifications as the remote-update mechanism, promptsForUserConfiguration(), controlWidgetActionHint(_:)-5yoyh, and IntentAuthenticationPolicy.
- The Action button's particular press-to-preview and press-and-hold-to-activate behavior; the system's off-state symbol substitution when redacting a control.
- iOS 18 locked-camera availability, LockedCameraCapture, WidgetKit, and the platform-specific launch and unlock integration.
- No additional iOS, iPadOS, or macOS considerations; no watchOS, tvOS, or visionOS support.

Persona and journey notes:
- A person acting outside the app needs a useful quick action, a recognizable icon, and state feedback that remains accurate after local, completed, and remote changes.
- A person adding a control may first need to choose a target; later they need to change it without replacing the whole interaction.
- An icon-only placement cannot rely on title or value text. A control chooser needs meaningful placeholders before situational values are known.
- A locked-device user needs sensitive labels and symbol states protected; security-affecting actions require authentication.
- A camera user can capture immediately, then crosses an authentication and unlock boundary for editing, posting, or other noncapture tasks.
- Conditional transfer: lock-state, camera, tint, and preview/hold guidance applies only to targets with those capabilities. This page concerns quick system-access controls, not every form control.
- Source ambiguity: the general platform paragraph lists macOS among platforms with no additional considerations, while the locked-camera capability is explicitly introduced for iOS 18. The note does not infer locked-camera availability on macOS.
- Word-count convention: COVERAGE preserves the supplied batch count of 989. Splitting the source on whitespace without trimming produces 989 entries, including a trailing empty entry; trimming first gives 988 words.
- Checks above specify future evidence. The requested 1440px and 390px captures assess equivalent interface presentations; native lock and hardware behavior requires the named probes. No screenshots or behavior probes were executed.

COVERAGE:
- controls: read, 989 words, 22 universal rules, 8 excluded

Source headings covered (exact text, in source order):
- Controls
- Anatomy
- Best practices
- Camera experiences on a locked device
- Platform considerations
- Resources
- Related
- Developer documentation
- Change log
