Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: p008-multitasking

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Multitasking (14 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/multitasking

- [MUL-01] MUST keep the app working correctly when the user switches to another app and then returns.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user can leave at any moment and come back to a working app
  Check@1440/390: not screenshot-checkable: requires a live switch-away and return sequence; a reviewer confirms the screen is intact after return at 1440px and 390px.
- [MUL-02] MUST be prepared to save the user's context at any moment, because a switch away can happen at any time.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user does not lose work or position when the app is suspended
  Check@1440/390: not screenshot-checkable: depends on app state at suspension time; a reviewer forces a navigation or reload and confirms the saved state is restored at 1440px and 390px.
- [MUL-03] MUST restore the user's context when they return, so they continue as if they never left.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user resumes the task without re-finding their place
  Check@1440/390: not screenshot-checkable: requires a before-and-after state comparison across a suspend; a reviewer compares the screen before leaving and after returning at 1440px and 390px.
- [MUL-04] MUST pause activities that need the user's attention or active participation when the user switches away.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user is not hit with progress or actions they cannot see
  Check@1440/390: not screenshot-checkable: a timing and state behavior; a reviewer switches away during an active activity and checks it has paused at 1440px and 390px.
- [MUL-05] MUST NOT let the user miss important events, such as game or media moments, while the app is paused in the background.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user returns to a clear state instead of a silent loss
  Check@1440/390: not screenshot-checkable: depends on event timing during a background interval; a reviewer checks the event is shown on return at 1440px and 390px.
- [MUL-06] MUST pause audio indefinitely for primary audio interruptions, such as music, podcasts, or audiobooks.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user is not left with audio playing over another task
  Check@1440/390: not screenshot-checkable: audio playback state is not visible in a screenshot; a reviewer confirms playback state through the player control at 1440px and 390px.
- [MUL-07] MUST temporarily lower the volume or pause audio for short interruptions, such as directional prompts.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user hears the interruption clearly without losing the media
  Check@1440/390: not screenshot-checkable: audio level is not visible in a screenshot; a reviewer checks the volume or playback control changes during the interruption at 1440px and 390px.
- [MUL-08] MUST restore the original volume or playback when a short audio interruption ends.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user is not left with quiet or paused audio after the interruption
  Check@1440/390: not screenshot-checkable: audio state change after an interruption is not visible in a screenshot; a reviewer checks the volume or playback control returns to its prior value at 1440px and 390px.
- [MUL-09] MUST finish a user-started task that needs no further input, such as a download or video processing, in the background before suspending.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user's started work completes even after they switch away
  Check@1440/390: not screenshot-checkable: background completion is a runtime behavior; a reviewer starts a download or processing job, switches away, and confirms it completes at 1440px and 390px.
- [MUL-10] MUST send a completion notification only for an important or time-sensitive task the user started before switching away.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user is told when it matters, so they can switch back and take the next step
  Check@1440/390: not screenshot-checkable: notification delivery depends on runtime state; a reviewer checks the notification appears only for an important task at 1440px and 390px.
- [MUL-11] MUST NOT send a notification when a routine or secondary task completes; let the user check its result when they return to the app.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user is not interrupted by low-value alerts
  Check@1440/390: not screenshot-checkable: absence of a notification is a runtime event; a reviewer completes a routine task and confirms no notification fires at 1440px and 390px.
- [MUL-12] MUST adapt the layout gracefully to different window and screen sizes, because users resize and arrange windows.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user can use the app at any window size without clipped or broken content
  Check@1440/390: screenshot at 1440px and 390px, plus at least one intermediate width between them: no clipped text, no overlapping controls, and all primary actions reachable.
- [MUL-13] MUST NOT assume a fixed window size or a fixed multitasking mode, because the app cannot know how the user arranged their windows.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user's chosen layout is respected instead of being overridden by a guessed one
  Check@1440/390: screenshot at 1440px and 390px and at a narrow intermediate width: the same content and controls remain usable at each size without a fixed-size assumption.
- [MUL-14] MUST NOT pause video or media playback the user started just because they switch to another window or app.
  HIG: Multitasking <https://developer.apple.com/design/human-interface-guidelines/multitasking> | Why: the user keeps watching or listening while working in another window
  Check@1440/390: not screenshot-checkable: playback state across a focus change is a runtime behavior; a reviewer starts playback, switches focus to another window, and confirms playback continues at 1440px and 390px.

# Exclusions and persona notes

### Multitasking
Apple-specific, excluded:
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
