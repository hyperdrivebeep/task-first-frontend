Candidate catalog - evidence only; not executable requirements.

# VoiceOver: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/voiceover
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra child.
Snapshot SHA-256: 33c7a40eed07454ae5d71f13f4dc0c2f20c52d62d4f4593b8cad38e2ad96f747
Input words: 736. Candidate rule records: 15. Exclusion blocks: 6.
Original note: p110-voiceover/voiceover.md.
Adopted source-linked rules: I-10, I-11

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## VoiceOver
URL: https://developer.apple.com/design/human-interface-guidelines/voiceover
Reader: Astra child, 2026-11-04 KST

Universal rules:
- MUST provide accessible alternative labels for all key interface elements, including custom elements. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people who cannot see the display can identify the interface's important elements | check: not screenshot-checkable: screen-reader label-coverage probe navigating every key standard and custom element and recording the label announced for each.
- MUST make accessible labels describe the element's app-specific function rather than rely on an uninformative generic control label. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people hear what a control does in this interface instead of only learning its generic type | check: not screenshot-checkable: spoken-label meaning probe comparing each announcement with the control's actual function and distinguishing similar controls.
- MUST keep accessible descriptions current as interface elements and their content change. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: spoken information remains consistent with the experience being presented | check: not screenshot-checkable: changing-content label probe updating a labeled element and checking that the subsequent screen-reader description matches its new content.
- MUST describe meaningful images that convey information needed to experience the content. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people using a screen reader can access information otherwise available only through the image | check: not screenshot-checkable: meaningful-image comprehension probe navigating each key image with the screen hidden and checking that its informative content is conveyed.
- MUST limit an image description to information conveyed by the image itself rather than repeat surrounding context already available to the screen reader. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: image descriptions add useful information without duplicating nearby captions or interface text | check: not screenshot-checkable: image-and-caption narration probe listening to the image with its surrounding content and checking for unnecessary repetition or invented image information.
- MUST provide a concise description explaining what each chart or infographic conveys. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people can understand the graphic's message without seeing it | check: not screenshot-checkable: infographic-summary probe listening to each graphic's description and checking that it conveys the intended information concisely.
- MUST make interactions that reveal more or different infographic information available to screen-reader users. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: nonvisual access includes the interactive information, not just a static summary | check: not screenshot-checkable: interactive-infographic parity probe using the screen reader to reach and operate each information-revealing interaction and comparing the available information.
- MUST exclude purely decorative images that convey no useful or actionable information from screen-reader navigation. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people do not spend time navigating meaningless images or carrying unnecessary cognitive load | check: not screenshot-checkable: decorative-image traversal probe reading the interface sequentially and verifying that decorative images are skipped while meaningful images remain available.
- MUST provide a unique, succinct page or screen title that describes its content and purpose to assistive technology on arrival. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people can immediately orient themselves after navigation | check: not screenshot-checkable: screen-arrival title probe navigating between pages and checking that the initial title information identifies the new page uniquely and accurately.
- MUST use accurate section headings to communicate the information hierarchy. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people can form a mental model of the content's organization | check: not screenshot-checkable: heading-outline navigation probe traversing exposed headings with the screen reader and comparing the resulting outline with the intended hierarchy.
- MUST expose grouping, ordering, and linking relationships that would otherwise be communicated only through proximity, alignment, or other visual cues. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: nonvisual users can understand how related elements belong together | check: not screenshot-checkable: semantic-relationship probe navigating visual groups through the screen reader and checking that relationships such as an image with its caption are conveyed together.
- MUST preserve a reading sequence appropriate to the active language and locale when exposing content to a screen reader. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people encounter information in an understandable sequence rather than a visual-layout accident | check: not screenshot-checkable: localized reading-order probe traversing content in each supported direction and locale and comparing the spoken sequence with the intended reading sequence.
- MUST notify assistive technologies when visible content or layout changes affect the presented interface. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people can update their mental map after a change instead of navigating an outdated understanding | check: not screenshot-checkable: dynamic-interface notification probe causing a content or layout change and checking that the screen reader receives and conveys the relevant change.
- MUST identify headings, links, and other content types for type-based screen-reader navigation when the reader supports that facility. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: people can move efficiently through a document instead of visiting every element in sequence | check: not screenshot-checkable: content-type navigation probe selecting each supported navigation category and checking that the expected elements are reachable.
- MUST account for assistive technology taking over custom gesture input where the host provides that behavior rather than assume app gestures remain available. | topic: VoiceOver | source: https://developer.apple.com/design/human-interface-guidelines/voiceover | why: a gesture-dependent experience is evaluated in the input mode a screen-reader user actually has | check: not screenshot-checkable: screen-reader gesture-availability probe enabling the reader, testing custom input, and comparing behavior under any explicitly supported direct-input mode.

Apple-specific (excluded):
- VoiceOver branding and availability on Apple platforms, Unity support through unityplugins, and the linked Apple accessibility framework integration.
- View-Accessibility, accessibilityHidden(_:), accessibilityElement, isAccessibilityElement, and shouldGroupAccessibilityChildren API choices.
- AccessibilityNotification and Apple's specific content/layout notification mechanism.
- The VoiceOver rotor interface, its braille-keyboard access, and AccessibilityRotorEntry, UIAccessibilityCustomRotor, and NSAccessibilityCustomRotor.
- visionOS suppression of app hand input while VoiceOver is active by default; Direct Gesture mode opting into app hand input while disabling standard VoiceOver gestures.
- No additional iOS, iPadOS, macOS, tvOS, or watchOS considerations and the linked platform implementation resources.

Persona and journey notes:
- A blind or low-vision person needs to understand the interface and its content without seeing the display, not merely hear generic control names.
- On arriving at a page, the person uses its title and headings to orient themselves, then relies on grouping and reading order to understand relationships.
- Meaningful image descriptions supplement nearby captions; decorative images should not interrupt traversal.
- A person exploring a chart needs both its concise overall meaning and access to the details exposed by interaction.
- After content or layout changes, the person needs updated descriptions and a notification sufficient to rebuild their mental map.
- A person navigating a long document benefits from headings, links, and other typed navigation targets when their screen reader offers that capability.
- A spatial screen-reader user may encounter intercepted hand input. The source describes a direct-input mode that changes gesture handling; it does not establish that every custom gesture becomes accessible or prescribe that people must enable that mode.
- The US English top-to-bottom, left-to-right example is locale-specific, not a universal reading-order rule.
- Word-count convention: COVERAGE preserves the supplied batch count of 737. Untrimmed whitespace splitting includes one trailing empty entry; trimmed whitespace counting gives 736 words.
- Every check is a named behavior probe because static 1440px and 390px screenshots cannot establish labels, semantics, narration order, notifications, or assistive interaction. No probes or screenshots were executed.

COVERAGE:
- voiceover: read, 737 words, 15 universal rules, 6 excluded

Source headings covered (exact text, in source order):
- VoiceOver
- Descriptions
- Navigation
- Platform considerations
- visionOS
- Resources
- Related
- Developer documentation
- Videos
- Change log
