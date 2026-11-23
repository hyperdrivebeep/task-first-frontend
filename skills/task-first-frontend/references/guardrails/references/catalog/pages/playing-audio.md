Candidate catalog - evidence only; not executable requirements.

# Playing audio: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/playing-audio
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 922b3f10c8c0515567a54047ca3c96bf4e2fe19cd4e9e887b5896c514a8cd2b5
Input words: 2008. Candidate rule records: 17. Exclusion blocks: 7.
Original note: p011-playing-audio/playing-audio.md.
Adopted source-linked rules: P-24, P-40

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Playing audio

URL: https://developer.apple.com/design/human-interface-guidelines/playing-audio

Universal rules
- MUST leave the overall system volume to the person and adjust only the app's relative, independent sound levels. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: The system volume always governs final output, so app-wide volume changes override the person's choice. | check: not screenshot-checkable: audio output level is not visible in a screenshot.
- MUST make the person's volume settings govern all app sound, including music and in-app sound effects. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: People expect one volume control to affect all sound in the system. | check: not screenshot-checkable: audio output level is not visible in a screenshot.
- MUST play only audio the person explicitly starts while the device is in silent mode. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: Silent mode exists to stop unexpected sounds such as alerts, clicks and game soundtracks. | check: not screenshot-checkable: playback behavior under silent mode is not visible in a screenshot.
- MUST reroute audio to newly connected headphones automatically and without interrupting playback. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: People expect sound to follow the connected output with no break. | check: not screenshot-checkable: rerouting is an audio behavior with no visual state to capture.
- MUST pause playback immediately when headphones are disconnected. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: People expect audio to stop at once when it would otherwise play out loud in public. | check: not screenshot-checkable: pause timing is an audio behavior, not a visual state.
- MUST support rerouting of audio output to another device unless there is a compelling reason not to. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: People often want to send audio to a stereo, car or TV. | check: not screenshot-checkable: output routing is a device-level behavior, not a screen state.
- MUST use the system-provided volume control for volume adjustment and output selection instead of a custom replacement. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: The system control gives people one familiar place for volume and routing. | check: at 1440px and 390px the screenshot shows the system volume control rather than a custom slider in the same place.
- MUST choose an audio category that matches how the app uses sound. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: The category decides mixing, background play and silent-switch behavior, so a wrong one breaks expectations. | check: not screenshot-checkable: audio category is a runtime audio-session setting.
- MUST NOT stop audio from another app when the app does not need to. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: People expect their music to keep playing when they open a game or other app. | check: not screenshot-checkable: mixing with other apps' audio is not visible in a screenshot.
- MUST NOT halt audio from another app when an audio control is pressed unless the app is playing audio, in a clear audio context, or connected to a Bluetooth or AirPlay device. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: Audio controls must not stop unrelated playback that the person is listening to. | check: not screenshot-checkable: control behavior across apps is not visible in a screenshot.
- MUST NOT redefine the meaning of a system audio control inside the app. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: Audio controls must behave the same in every app. | check: not screenshot-checkable: control meaning is runtime behavior, not a visual state.
- MUST NOT respond to an audio control the app does not support. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: Responding to unsupported controls gives people unexpected results. | check: not screenshot-checkable: control handling is runtime behavior, not a visual state.
- MUST flag the audio session so other apps know when they can resume after the app's temporary audio ends. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: Other apps stay silenced until the session signals that it has finished. | check: not screenshot-checkable: session signaling is not visible in a screenshot.
- MUST inspect an audio-session interruption before deciding how the app responds to it. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: The right response depends on the interruption, such as an incoming call or a recording that must not stop. | check: not screenshot-checkable: interruption handling is runtime behavior.
- MUST NOT unmute a microphone without the person's knowledge when an interruption ends. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: Restarting the session after the person closed the cover would expose their privacy. | check: not screenshot-checkable: microphone state changes are not visible in a screenshot.
- MUST check that an interruption is resumable before automatically resuming media playback. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: Non-resumable interruptions, such as a new playlist, mean the person chose something else. | check: not screenshot-checkable: resume decision is runtime behavior.
- MUST NOT communicate important information using sound alone. | topic: Playing audio | source: https://developer.apple.com/design/human-interface-guidelines/playing-audio | why: People who cannot hear the sound, or who have sound off, would miss the information. | check: at 1440px and 390px every sound-based alert in the screenshot has a visible text or icon equivalent.

Apple-specific (excluded)
- iOS, iPadOS: short sounds and vibrations use the system sound services.
- macOS: notification sounds mix with other audio by default.
- tvOS: the system plays audio only when people start it, and no sound accompanies alerts or notifications.
- visionOS: Spatial Audio, fixed and tracked sound, audio ducking when people look away, pausing Now Playing audio when the window closes, and the advice to prefer playing sound.
- watchOS: system-managed playback, the 64 kbps HE-AAC encoding recommendation, and the system Now Playing view.
- Apple audio category names (Solo ambient, Ambient, Playback, Record, Play and record) and developer references (AVAudioSession, MPVolumeView, notifyOthersOnDeactivation, shouldResume, MusicKit).
- Apple hardware controls (iPhone Ring/Silent switch, iPad Smart Folio, Control Center slider).

Persona and journey notes
- Listeners who want private audio on headphones: connecting reroutes sound without a break, and disconnecting pauses it at once.
- People who switch to silent before a meeting or in bed: only their own explicit playback should sound.
- People who play music while using a game: their music should keep playing unless the game truly needs the audio session.
- People on a call or recording who close a cover or the app: an interruption must not unmute their microphone without their knowledge.

COVERAGE
- Sections read: Intro, Best practices, Handling interruptions, Platform considerations (iOS, iPadOS, macOS, tvOS, visionOS, watchOS), Resources, Change log.
- Universal rules written: 17.
- Apple-specific items excluded: 6 groups.
