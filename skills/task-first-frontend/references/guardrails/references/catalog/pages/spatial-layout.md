Candidate catalog - evidence only; not executable requirements.

# Spatial layout: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/spatial-layout
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: df024d665e714047969546510a8de68adaab6b73db5e138ba2a5ef7f6c51e0b8
Input words: 1390. Candidate rule records: 23. Exclusion blocks: 9.
Original note: 03-foundations-b-2/spatial-layout.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Spatial layout
URL: https://developer.apple.com/design/human-interface-guidelines/spatial-layout

Universal rules:
- MUST center important content within the person's field of view. | topic: field of view placement | source: Field of view | why: people can only take in content that sits within the space they see without moving their head | check: primary content is centered within the default viewing area and is visible without head movement.
- MUST keep primary content generally within the field of view. | topic: field of view containment | source: Field of view | why: content outside the field of view is hard to find and use | check: the main content of each view stays within the typical field of view.
- MUST keep distracting motion and bright, high-contrast objects out of the periphery of an immersive experience. | topic: peripheral distraction | source: Field of view | why: peripheral distractions pull attention away from important content | check: immersive scenes place calm, low-contrast content at the edges and keep important content centered.
- MUST NOT anchor content statically to the person's head. | topic: no head-anchored content | source: Field of view | why: content fixed in front of someone can make them feel stuck, confined, and uncomfortable, especially when it obscures their surroundings | check: content does not stay in a fixed position relative to the person's head when they turn or move.
- MUST anchor content in the person's space so they can look around naturally and view different objects in different locations. | topic: world-anchored content | source: Field of view | why: spatial anchoring lets people explore freely and keeps their surroundings stable | check: content is placed at fixed locations in the surrounding space rather than moving with the head.
- MUST provide visual cues that accurately communicate the depth of content. | topic: accurate depth cues | source: Depth | why: people perceive depth from cues such as distance, occlusion, and shadow, and inaccurate cues can cause visual discomfort | check: each element's apparent depth matches its layering, occlusion, and shadow.
- MUST NOT leave depth cues missing or let them conflict with the person's real-world experience of depth. | topic: no missing or conflicting depth cues | source: Depth | why: missing or conflicting cues make people uncomfortable and reduce the sense that content belongs in their space | check: depth cues are present for every layered element and do not contradict how the same depth looks in the physical world.
- MUST use depth to communicate hierarchy so that important objects stand out from surrounding content. | topic: depth for hierarchy | source: Depth | why: people notice changes in depth, so depth can make the most important content more noticeable | check: higher-priority elements sit at a visibly different depth from the content around them.
- MUST use depth to visually separate large, important elements from the content around them, such as a tab bar or toolbar from its window. | topic: depth for large element separation | source: Depth | why: depth separates large, important elements clearly from their background | check: large navigation or primary elements are separated in depth from the content behind them.
- MUST NOT use depth on small objects where it makes controls less legible or harder to use, such as a button's symbol against its background. | topic: no depth on small controls | source: Depth | why: depth on small elements can reduce legibility and make the control harder to use | check: small controls and their symbols stay legible and easy to target without added depth.
- MUST NOT add depth to text that appears to hover above its background. | topic: no depth on text | source: Depth | why: floating text is difficult to read and can slow people down or cause discomfort | check: text is presented on the same plane as its background, with no floating depth effect.
- MUST add depth only where it adds value by clarifying the interface or delighting people, considering the size and relative importance of each object. | topic: depth must add value | source: Depth | why: depth used everywhere loses its meaning and adds clutter | check: each use of depth has a clear purpose tied to size or importance.
- MUST limit how many different depth levels the app uses, because people must refocus their eyes for each difference in depth and frequent changes are tiring. | topic: limit depth levels | source: Depth | why: rapid or frequent refocusing causes fatigue | check: the number of distinct depth levels in each view is small and changes are not rapid or frequent.
- MUST consider adding small amounts of depth throughout the interface, including in standard windows, so that it looks natural from any angle. | topic: subtle depth in windows | source: Depth | why: people can view content from any angle, and flat-only interfaces can look less natural | check: standard windows include subtle depth effects where they support the layout.
- MUST scale interactive content dynamically so that it stays comfortably legible and interactive at any distance, appearing to keep the same size as it moves closer or farther away. | topic: dynamic scale for interactive content | source: Scale | why: interactive content must remain usable as its distance from the person changes | check: interactive windows and controls keep a comfortable apparent size across distances.
- MUST NOT apply fixed scale to interactive content. | topic: no fixed scale on interactive content | source: Scale | why: interactive elements that shrink with distance become hard to see and select | check: no interactive element uses a fixed scale that makes it shrink as it moves away.
- MUST reserve fixed scale for noninteractive objects that need to keep a true real-world size, such as a life-size product model. | topic: fixed scale for noninteractive objects | source: Scale | why: fixed scale makes an object look like its physical counterpart, which helps realism for objects people only view | check: fixed-scale objects are noninteractive and are used only where true size matters.
- MUST NOT display so many windows that they obscure people's surroundings, overwhelm or constrict them, or make it cumbersome to relocate the app. | topic: limit window count | source: Best practices | why: too many windows make people feel constricted and make moving the app tedious | check: the number of open windows per app is kept low and does not block the surroundings.
- MUST reserve direct interaction, where people touch a virtual object with a finger, for nearby objects that invite close inspection or manipulation, and for short periods. | topic: reserve direct interaction | source: Best practices | why: reaching toward objects at or above eye level is tiring over time | check: direct touch-style manipulation is limited to nearby objects and short tasks.
- MUST include enough space around interactive components so that people can look at them easily and any hover feedback does not crowd other content. | topic: space around interactive components | source: Best practices | why: a clear target is easy to look at and select, and feedback needs room | check: interactive components have clear spacing from one another and from other content, including their hover feedback area.
- MUST NOT let controls overlap other interactive elements or views. | topic: no overlapping controls | source: Best practices | why: overlapping elements make it difficult to select a single element | check: no two interactive elements or views overlap in their selectable areas.
- MUST let people use the app with minimal or no physical movement, unless some physical movement is essential to the experience. | topic: minimal physical movement | source: Best practices | why: people with different mobility should be able to enjoy the app while stationary | check: all core actions can be completed without moving the body, except for essential movement.
- MUST place immersive content that extends up from the floor on a flat horizontal plane aligned with the floor. | topic: floor-aligned placement | source: Best practices | why: aligning with the floor helps content blend with surroundings and feel intuitive | check: floor-based immersive content sits on a flat horizontal plane matching the floor.

Apple-specific (excluded):
- Apple Vision Pro, visionOS, the Light Seal, and the Upright and Angled viewing illustrations.
- The statement that the system does not provide information about a person's field of view.
- visionOS windows and volumes, RealityKit, SwiftUI depth effects, and the developer documentation on 3D content.
- The definition of a point as an angle on visionOS, in contrast to pixel-based points on other platforms.
- The visionOS hover effect numbers (buttons at least 60 points apart with 16 points of space); only the general spacing rule is kept.
- The Digital Crown recentering behavior.
- The instruction to prioritize standard indirect gestures in visionOS.
- Platform considerations: "Not supported in iOS, iPadOS, macOS, or tvOS, or watchOS."
- Related links, developer documentation links, the empty Videos section, and the change log entries.

Persona and journey notes:
- People wearing a headset expect content to stay in their surroundings and to remain stable as they look around.
- People have different peripheral vision and comfort levels, so important content should be central and calm.
- People may be stationary or have limited mobility and need to complete actions without moving.
- People who switch between several views expect depth changes to be few and clear rather than constant.

COVERAGE: Full page read, including Field of view, Depth, Scale, Best practices, Platform considerations, Resources, and Change log. 23 universal rules extracted.
