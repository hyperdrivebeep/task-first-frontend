Candidate catalog - evidence only; not executable requirements.

# Multitasking: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/multitasking
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: daf2b824d99e3ffb6018901222be2316f227c1d2d7a36d269e965c8cdf5d741e
Input words: 1082. Candidate rule records: 14. Exclusion blocks: 8.
Original note: p008-multitasking/multitasking.md.
Adopted source-linked rules: P-13

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Multitasking
URL: https://developer.apple.com/design/human-interface-guidelines/multitasking
Universal rules:
- MUST keep the app working correctly when the user switches to another app and then returns. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user can leave at any moment and come back to a working app | check: not screenshot-checkable: requires a live switch-away and return sequence; a reviewer confirms the screen is intact after return at 1440px and 390px.
- MUST be prepared to save the user's context at any moment, because a switch away can happen at any time. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user does not lose work or position when the app is suspended | check: not screenshot-checkable: depends on app state at suspension time; a reviewer forces a navigation or reload and confirms the saved state is restored at 1440px and 390px.
- MUST restore the user's context when they return, so they continue as if they never left. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user resumes the task without re-finding their place | check: not screenshot-checkable: requires a before-and-after state comparison across a suspend; a reviewer compares the screen before leaving and after returning at 1440px and 390px.
- MUST pause activities that need the user's attention or active participation when the user switches away. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user is not hit with progress or actions they cannot see | check: not screenshot-checkable: a timing and state behavior; a reviewer switches away during an active activity and checks it has paused at 1440px and 390px.
- MUST NOT let the user miss important events, such as game or media moments, while the app is paused in the background. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user returns to a clear state instead of a silent loss | check: not screenshot-checkable: depends on event timing during a background interval; a reviewer checks the event is shown on return at 1440px and 390px.
- MUST pause audio indefinitely for primary audio interruptions, such as music, podcasts, or audiobooks. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user is not left with audio playing over another task | check: not screenshot-checkable: audio playback state is not visible in a screenshot; a reviewer confirms playback state through the player control at 1440px and 390px.
- MUST temporarily lower the volume or pause audio for short interruptions, such as directional prompts. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user hears the interruption clearly without losing the media | check: not screenshot-checkable: audio level is not visible in a screenshot; a reviewer checks the volume or playback control changes during the interruption at 1440px and 390px.
- MUST restore the original volume or playback when a short audio interruption ends. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user is not left with quiet or paused audio after the interruption | check: not screenshot-checkable: audio state change after an interruption is not visible in a screenshot; a reviewer checks the volume or playback control returns to its prior value at 1440px and 390px.
- MUST finish a user-started task that needs no further input, such as a download or video processing, in the background before suspending. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user's started work completes even after they switch away | check: not screenshot-checkable: background completion is a runtime behavior; a reviewer starts a download or processing job, switches away, and confirms it completes at 1440px and 390px.
- MUST send a completion notification only for an important or time-sensitive task the user started before switching away. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user is told when it matters, so they can switch back and take the next step | check: not screenshot-checkable: notification delivery depends on runtime state; a reviewer checks the notification appears only for an important task at 1440px and 390px.
- MUST NOT send a notification when a routine or secondary task completes; let the user check its result when they return to the app. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user is not interrupted by low-value alerts | check: not screenshot-checkable: absence of a notification is a runtime event; a reviewer completes a routine task and confirms no notification fires at 1440px and 390px.
- MUST adapt the layout gracefully to different window and screen sizes, because users resize and arrange windows. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user can use the app at any window size without clipped or broken content | check: screenshot at 1440px and 390px, plus at least one intermediate width between them: no clipped text, no overlapping controls, and all primary actions reachable.
- MUST NOT assume a fixed window size or a fixed multitasking mode, because the app cannot know how the user arranged their windows. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user's chosen layout is respected instead of being overridden by a guessed one | check: screenshot at 1440px and 390px and at a narrow intermediate width: the same content and controls remain usable at each size without a fixed-size assumption.
- MUST NOT pause video or media playback the user started just because they switch to another window or app. | topic: Multitasking | source: https://developer.apple.com/design/human-interface-guidelines/multitasking | why: the user keeps watching or listening while working in another window | check: not screenshot-checkable: playback state across a focus change is a runtime behavior; a reviewer starts playback, switches focus to another window, and confirms playback continues at 1440px and 390px.
Apple-specific (excluded):
- Picture in Picture on iPhone for FaceTime and video while using another app.
- iPadOS windowing: multiple windows per app, system window controls, tiling, and full-screen app switching.
- iPadOS Picture in Picture overlay for video and FaceTime.
- macOS window drop shadows and window-state visual effects.
- tvOS Picture in Picture while browsing other content.
- visionOS Shared Space, single active window, gaze-based activation, and feathered edge masks.
- visionOS Now Playing pause on window close and audio ducking when people look away.
- watchOS: multitasking is not supported.
Persona and journey notes:
- The user starts a task in the app, switches to another app, and returns to continue; an important or time-sensitive task may complete while they are away.
- Users expect multitasking on their devices and may think something is wrong if the app does not allow it.
COVERAGE:
- multitasking: read, approx 1,100 words, 14 universal rules, 8 excluded
