Candidate catalog - evidence only; not executable requirements.

# Designing for iPadOS: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: e2b7dc8763733c70649d4c0dcc5cc29961d4d575b67f26f94a02f8efb2f31d11
Input words: 405. Candidate rule records: 11. Exclusion blocks: 5.
Original note: p022-designing-for-ipados/designing-for-ipados.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Designing for iPadOS
URL: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados
Universal rules:
- MUST minimize modal interfaces and full-screen transitions when the layout has room to keep the content in place. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people keep their place in the content and do not lose the context they were reading | check: at 1440px the action opens in place without a full-screen cover; at 390px the source content stays reachable after the action
- MUST position onscreen controls where they are easy to reach and never where they cover the content people are working on. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people can act without stretching or hunting, and the content stays readable | check: at 1440px and 390px the primary controls sit in an easy-reach zone (bottom or edges at 390px) and overlap no content
- MUST make the primary content the visual focus of each screen, with secondary controls visually subordinate. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people look at what matters first and are not pulled toward chrome | check: at 1440px the main content occupies the largest area and controls are smaller or lighter; at 390px the content is the first thing read
- MUST size onscreen content and its density for the device's typical viewing distance, which the HIG gives as about 3 feet for iPad. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: text and targets are comfortable to read and tap at the distance people actually hold the device | check: not screenshot-checkable: viewing distance is a physical condition a static screenshot cannot show
- MUST let every core action work with touch, a physical keyboard, and a pointer, without requiring one specific input. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people can use whichever input is in their hands at the moment | check: not screenshot-checkable: requires driving each core action with each input type
- MUST keep an action completable when people switch input modes partway through a task. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people who start with touch and then pick up a keyboard do not have to start the task over | check: not screenshot-checkable: requires switching inputs mid-task on a running build
- MUST keep the layout intact when the device orientation changes. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people can turn the device without losing content or controls | check: rotate the device or switch between 1440px and 390px; nothing clips, overlaps, or scrolls sideways
- MUST keep the app fully usable at a reduced window width when it shares the screen with another app. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people can work alongside another app without either one becoming unusable | check: at 390px every control and text block stays reachable and nothing clips or needs horizontal scrolling
- MUST keep text, controls, and icons legible with sufficient contrast in both light and dark appearance. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people can use the app in whichever appearance they choose, day or night | check: capture light and dark at 1440px and 390px; no text or control is unreadable or missing
- MUST keep every action usable when the user enlarges text, with text wrapping or scrolling instead of truncating or hiding controls. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people with larger text settings can read and act without losing options | check: set the largest text size and capture at 1440px and 390px; no label is cut off and every action stays visible or reachable
- MUST keep interactions consistent with the platform's familiar patterns so common actions work the way people already expect. | topic: Designing for iPadOS | source: https://developer.apple.com/design/human-interface-guidelines/designing-for-ipados | why: people do not have to relearn common actions in every app | check: not screenshot-checkable: consistency of behavior is judged by using the interaction, not by one frame
Apple-specific (excluded):
- Multi-Touch gestures, Apple Pencil, Scribble, and Siri are Apple input features; rule 5 covers the generic input types.
- Multitasking, widgets, and drag-and-drop are iPadOS system features; the reduced-width rule keeps only the generic case.
- Dark Mode and Dynamic Type are Apple OS settings; the appearance and text-size rules keep the generic cases.
- Attached Apple keyboards and trackpads and the iPad display are Apple hardware.
- Running the app in macOS and the "feel at home in iPadOS" guidance are Apple platform rules.
Persona and journey notes:
- People hold the iPad or set it on a surface or stand, usually within about 3 feet, and often mix touch, keyboard, pointer, and stylus in one session.
- Some sessions are a few quick actions; others run for hours on games, media, content creation, or productivity.
- People often keep several apps open, expect to view more than one app at a time, and move content between apps.
COVERAGE:
- designing-for-ipados: read, approx 330 words, 11 universal rules, 5 excluded
