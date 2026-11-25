Candidate catalog - evidence only; not executable requirements.

# App Shortcuts: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra child.
Snapshot SHA-256: 3987047c246f73e9e25b2f1048502e14be1d116acdf38026089706b7b443cb28
Input words: 1212. Candidate rule records: 19. Exclusion blocks: 7.
Original note: p093-app-shortcuts/app-shortcuts.md.
Adopted source-linked rules: T-01

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## App Shortcuts
URL: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts
Reader: Astra child, 2026-11-04 KST

Universal rules:
- MUST prioritize the most common and important tasks when offering shortcuts to app functionality. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: people can reach the tasks that save them the most effort | check: not screenshot-checkable: task-priority probe comparing the shortcut inventory with established frequent and important user tasks.
- MUST favor straightforward shortcut tasks that people can finish in their current context. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: quick actions do not unnecessarily interrupt the activity already underway | check: not screenshot-checkable: in-context completion probe invoking each simple shortcut and recording whether completing it requires switching into the app.
- MUST allow a shortcut to open the app when doing so makes a multistep task easier to complete. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: complex tasks retain enough interaction space and guidance | check: not screenshot-checkable: multistep completion probe comparing the shortcut handoff with the task's required inputs and steps.
- MUST consider selectable options when they meaningfully adapt a shortcut to different user needs. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: one shortcut can serve useful variations of the same task | check: not screenshot-checkable: option-coverage probe running applicable task variants and confirming that the selected option changes the result appropriately.
- MUST use predictable, familiar values for options people may need to remember without seeing a list. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: spoken choices remain discoverable and easy to recall | check: not screenshot-checkable: unseen-options voice probe asking representative users to request supported variants without displaying the option list.
- MUST ask for clarification when a shortcut request omits optional information needed to choose the intended variant. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: an incomplete request can still lead to the intended outcome | check: not screenshot-checkable: missing-option dialogue probe invoking the shortcut without the optional value and observing the clarification.
- MUST consider recent use or current context when suggesting an answer to a shortcut clarification. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: relevant suggestions reduce the effort of completing an underspecified request | check: not screenshot-checkable: contextual-suggestion probe varying recent choices and time of day and examining the proposed answer.
- MUST consider presenting a likely option as the default when one choice clearly fits the request. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: people can accept a useful choice with less effort | check: not screenshot-checkable: likely-default probe supplying a context with a clearly preferred option and inspecting the clarification flow.
- MUST offer a short list of alternatives when a person does not want a suggested default. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: a convenient default does not prevent choosing a different outcome | check: not screenshot-checkable: default-rejection probe rejecting the suggestion and selecting an alternative from the resulting short list.
- MUST keep spoken shortcut interactions simple enough to remember and say correctly. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: voice access remains usable without rehearsing a complicated command | check: not screenshot-checkable: spoken-phrase recall probe reading candidate phrases aloud and testing whether users can repeat and invoke them without confusing apparent parameters.
- MUST request additional indispensable information in a subsequent step rather than overload the initial spoken phrase. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: required detail can be collected without making activation difficult | check: not screenshot-checkable: required-follow-up probe starting with the simple activation phrase and verifying that remaining necessary information is collected before completion.
- MUST make available shortcuts discoverable inside the app, considering occasional tips when people perform the corresponding common action. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: people learn a shortcut when its usefulness is evident | check: not screenshot-checkable: contextual-discovery probe performing the common action across repeated visits and checking that shortcut guidance appears in context without appearing on every repetition.
- MUST choose a static response view when the shortcut needs to show a snapshot of information or present dialogue choices. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: people can read a result or choose the next step in a suitable presentation | check: 1440px and 390px screenshots of the same static-result and choice states show the required information and choices without clipping.
- MUST consider a persistent, updating response when shortcut information remains relevant and changes over a period, such as a timer or countdown. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: people can follow ongoing information until the event finishes | check: not screenshot-checkable: ongoing-response lifecycle probe starting a timed event, observing updated information during it, and checking the response at completion.
- MUST include all critical information in spoken responses when a shortcut can be used without a visible screen. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: audio-only users can understand and complete the interaction | check: not screenshot-checkable: screen-hidden dialogue probe completing the task through audio alone and checking that no critical result or choice depends on visuals.
- MUST keep voice activation phrases brief and memorable. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: people can remember how to start a useful task | check: not screenshot-checkable: activation-recall probe asking users to invoke the shortcut after learning its phrase without displaying it again.
- MUST provide natural phrasing variants for voice activation. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: people can express the same intent in familiar ways | check: not screenshot-checkable: phrase-variant probe invoking the task through each documented natural variant and comparing the resulting intent.
- MUST represent a visually listed shortcut with a symbol that describes its function or a preview of the item it opens. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: people can recognize the intended action or destination while scanning | check: 1440px and 390px screenshots of the shortcut list show each function with a meaningful symbol or each direct item link with a recognizable preview.
- MUST initially order shortcuts by importance, placing the most generally useful ones first. | topic: App Shortcuts | source: https://developer.apple.com/design/human-interface-guidelines/app-shortcuts | why: first-time users encounter broadly useful actions before less important ones | check: 1440px and 390px screenshots of the initial shortcut list show the documented importance order before usage personalization.

Apple-specific (excluded):
- Siri, Spotlight, Shortcuts, Action button, and Apple Pencil squeeze entry points; immediate availability after installation and the system's personalization behavior.
- App Intents action definitions, custom cross-app workflows in Shortcuts, the limit of 10 App Shortcuts per app, and the single optional parameter limit.
- Prefer app schemas for supported common domains; Apple Intelligence and Siri integration, supported-device conditions, and individual App Shortcuts for features outside schema coverage.
- SiriTipUIView, snippets, Live Activities, AppShortcutPhrase, dialogue initializers, and other linked implementation APIs.
- Include the app name in activation phrases; title case and pluralize App Shortcuts and Shortcuts, and use lowercase for individual shortcuts.
- Spotlight Top Hit and Shortcuts placements, SF Symbols selection, and the system's automatic frequency-based reordering.
- No additional visionOS or watchOS considerations; no tvOS support; macOS lacks App Shortcuts but supports App Intents actions and custom Shortcuts workflows.

Persona and journey notes:
- A new installer may encounter shortcuts before opening the app; an established user may encounter options reflecting prior choices.
- Frequent-task users need quick access while staying in context; multistep-task users may benefit from entering the full app.
- Voice users may not see the option list; an omitted option leads to clarification, a contextual suggestion, or a default with alternatives.
- Audio-only users need complete spoken information; users tracking an ongoing event benefit from a response that remains available as the information changes.
- Extraction boundary: "consider" guidance remains a required consideration, not an unconditional feature mandate. No fixed number of alternatives or limit on phrase length is inferred.
- Word-count convention: COVERAGE preserves the supplied batch count of 1213. Splitting the source on whitespace without trimming produces 1213 entries, including a trailing empty entry; trimming first gives 1212 words.
- Checks above specify evidence to collect; no screenshots or behavior probes were executed for this note.

COVERAGE:
- app-shortcuts: read, 1213 words, 19 universal rules, 7 excluded

Source headings covered (exact text, in source order):
- App Shortcuts
- Best practices
- Responding to App Shortcuts
- Editorial guidelines
- Platform considerations
- iOS, iPadOS
- macOS
- Resources
- Related
- Developer documentation
- Videos
- Change log
