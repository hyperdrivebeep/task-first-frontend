Candidate catalog - evidence only; not executable requirements.

# SharePlay: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/shareplay
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 1f0d43bde612bec736766f401b623ff65a3782cdd8298388cbfc8fa440386d5d
Input words: 2348. Candidate rule records: 19. Exclusion blocks: 4.
Original note: p139-shareplay/shareplay.md.
Adopted source-linked rules: P-23

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## SharePlay
URL: https://developer.apple.com/design/human-interface-guidelines/shareplay
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST distinguish real-time shared activity from asynchronous collaboration and provide a continuation route when both are supported. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: People know how to continue after a session. | check: At 1440px and 390px, inspect active-session and saved/shared continuation paths.
- MUST choose a shared view or role-specific view according to the collaborative task. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: Each participant sees useful information. | check: At 1440px and 390px, compare participant views for the same state.
- MUST adapt shared activities to supported devices and communication contexts. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: Participants can join from different environments. | check: Not screenshot-checkable: join the same session from each supported device type.
- MUST provide a recognizable start action and concise invitation description. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: People know what they will join. | check: At 1440px and 390px, inspect initiation and invitation content.
- MUST take joining participants to shared content quickly and return them there after necessary prerequisites. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: Sign-in or setup does not lose the invitation. | check: At 1440px and 390px, capture fresh and returning join paths.
- MUST defer optional profile or setup steps until a natural pause. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: People can join others without delay. | check: At 1440px and 390px, inspect the minimal joining sequence.
- MUST identify who caused a change that affects all participants. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: People understand shared state changes. | check: At 1440px and 390px, capture another participant’s edit or playback change.
- MUST preserve shared media continuation while people use other tasks where supported. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: Multitasking does not end the shared experience. | check: Not screenshot-checkable: leave the main view and verify continued shared playback.
- MUST keep shared spatial content aligned across participants when common location matters. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: People can point to the same object. | check: Not screenshot-checkable: compare synchronized content from multiple participant viewpoints.
- MUST make simultaneous editing or tool ownership predictable. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: People do not unknowingly fight over control. | check: Not screenshot-checkable: attempt conflicting actions and inspect ownership/resolution feedback.
- MUST show when a participant steps into a separate view or away from shared context. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: Others understand their presence. | check: At 1440px and 390px, compare active and away indicators.
- MUST let participants opt into disruptive shared context changes when they are mid-task. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: One person does not unexpectedly interrupt another. | check: At 1440px and 390px, capture join-now/later choices during an active secondary task.
- MUST keep personal comfort and accessibility settings local to each participant. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: One person’s volume or captions do not override another’s. | check: Not screenshot-checkable: change settings for one participant and inspect the others.
- MUST make leaving and rejoining a shared activity straightforward. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: People can attend to their surroundings without losing access. | check: At 1440px and 390px, capture leave and rejoin controls and exercise them.
- MUST provide alternatives for participants without spatial avatars or gesture representation. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: Everyone can participate in the core task. | check: Not screenshot-checkable: complete the activity from a nonspatial device.
- MUST use stage-appropriate participant arrangements and tie disruptive rearrangement to explicit action. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: People understand role and position changes. | check: Not screenshot-checkable: transition activity stages and inspect reorientation cues.
- MUST keep participant roles independent of physical or virtual seating unless a role truly requires a position. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: Participants without seats retain their role. | check: Not screenshot-checkable: join with spatial and nonspatial participants and change roles.
- MUST preserve stable available positions and balanced arrangement as participants join or leave. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: People are not unnecessarily moved. | check: Not screenshot-checkable: add and remove participants in several orders.
- MUST account for people physically sharing a room instead of assuming software can relocate them. | topic: SharePlay | source: https://developer.apple.com/design/human-interface-guidelines/shareplay | why: The activity works in actual space. | check: Not screenshot-checkable: test co-located participants with position guidance.
Apple-specific (excluded):
- SharePlay/FaceTime/GroupActivities APIs and platform access/subscription prerequisites.
- Official SharePlay symbol and naming rules.
- visionOS templates, spatial Persona replacement and system sharing controls.
- Five spatial seats and one-meter separation guidance.
Persona and journey notes:
- People join from different devices, share changes, step away and return while keeping personal accessibility settings.
COVERAGE:
- shareplay: read, 2349 words, 19 universal rules, 4 excluded
