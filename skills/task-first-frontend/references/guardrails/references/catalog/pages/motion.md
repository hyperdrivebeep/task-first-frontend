Candidate catalog - evidence only; not executable requirements.

# Motion: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/motion
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: d4b796f2f2afc14522d73868cb3a5c72a72be28c8e3bce186ae51307c2e3bdee
Input words: 1190. Candidate rule records: 20. Exclusion blocks: 9.
Original note: 03-foundations-b-2/motion.md.
Adopted source-linked rules: F-28, F-29, F-30

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Motion
URL: https://developer.apple.com/design/human-interface-guidelines/motion

Universal rules:
- MUST NOT add motion for its own sake; motion must support the experience without overshadowing it. | topic: purposeful motion | source: Best practices | why: gratuitous or excessive animation distracts people and can make them feel disconnected or physically uncomfortable | check: every animation can name the information or feedback it conveys.
- MUST make motion optional. | topic: optional motion | source: Best practices | why: not everyone can or wants to experience motion | check: a person can avoid or reduce the custom motion.
- MUST NOT use motion as the only way to communicate important information. | topic: motion is not the sole channel | source: Best practices | why: people who cannot or do not want motion would miss important information | check: every important state change is also conveyed without motion.
- MUST supplement visual feedback with alternative channels, such as audio and haptics, where the platform supports them. | topic: alternative feedback channels | source: Best practices | why: keeps feedback available to people who do not experience the motion | check: each motion-only cue has a non-visual counterpart.
- MUST make feedback motion follow people's gestures and expectations, and MUST NOT use feedback motion that contradicts them. | topic: gesture-consistent feedback | source: Providing feedback | why: feedback that does not make sense disorients people (example: a view revealed by sliding down must not be dismissed by sliding it to the side) | check: the motion direction and path match the triggering gesture and its reverse.
- MUST keep feedback animations brief and precise, tied to the specific action. | topic: brief feedback animation | source: Providing feedback | why: brief, precise animation feels lightweight and conveys information without distraction | check: each feedback animation is short and plays only on its triggering action.
- MUST NOT add custom motion to UI interactions that occur frequently (the page says "generally avoid"). | topic: frequent-interaction motion | source: Providing feedback | why: people spend extra time attending to unnecessary motion on every interaction | check: custom elements used in frequent interactions add no motion beyond the normal system behavior.
- MUST let people cancel motion. | topic: cancellable motion | source: Providing feedback | why: people need control over animations they see repeatedly | check: a running animation can be cancelled by the person.
- MUST NOT make people wait for an animation to complete before they can do anything, especially when they must experience it more than once. | topic: no blocking animation | source: Providing feedback | why: waiting for animations wastes time and frustrates repeated use | check: input is accepted while the animation plays.
- MUST make game motion look great by default on each platform supported. | topic: game default motion quality | source: Leveraging platform capabilities | why: people should enjoy the game without first changing settings | check: default settings on each target platform give acceptable motion with no user changes.
- MUST use each device's graphics capabilities to enable default settings for each supported platform. | topic: capability-based game defaults | source: Leveraging platform capabilities | why: defaults should match what each device can render | check: defaults are set per platform from its graphics capability and need no manual setup.
- MUST aim for a consistent frame rate, typically 30 to 60 fps, in games. | topic: game frame rate | source: Leveraging platform capabilities | why: a consistent frame rate typically produces a smooth, visually appealing experience | check: measured frame rate stays steady within the 30 to 60 fps range on each platform.
- MUST let people customize the visual experience of a game to optimize performance or battery life. | topic: performance and battery customization | source: Leveraging platform capabilities | why: people have different performance and battery needs (example given: switching power modes when an external power source is detected) | check: settings exist that trade visual quality for performance or battery life.
- MUST NOT show motion at the edges of a person's field of view in immersive or spatial interfaces. | topic: peripheral motion | source: Platform considerations, visionOS section | why: peripheral motion distracts and can cause discomfort by making people feel they or their surroundings are moving | check: moving content stays out of the peripheral area of immersive views.
- MUST match the brightness of a peripherally moving object to the rest of the visible content when such motion is needed. | topic: peripheral object brightness | source: Platform considerations, visionOS section | why: mismatched brightness draws attention and adds discomfort | check: peripheral moving objects have brightness similar to the visible content.
- MUST help people perceive the movement of large virtual objects without making them think they or their surroundings are moving; for example, increase translucency or lower contrast. | topic: large object movement | source: Platform considerations, visionOS section | why: a large object that fills the view is perceived as part of the surroundings | check: large moving objects use reduced contrast or increased translucency.
- MUST NOT show movement that communicates nothing useful when relocating an object; fade it out before moving and fade it back in after it reaches the new location. | topic: relocation fades | source: Platform considerations, visionOS section | why: people naturally watch movement, so movement that carries no information is distracting | check: relocations without informational movement use a fade-out and fade-in.
- MUST NOT let people rotate a virtual world (the page says "in general"). | topic: no world rotation | source: Platform considerations, visionOS section | why: rotating the world upsets the sense of stability, even when the person controls the rotation | check: no user-controlled rotation of the whole virtual environment.
- MUST NOT show objects that oscillate in a sustained way, particularly at a frequency of about 0.2 Hz. | topic: sustained oscillation | source: Platform considerations, visionOS section | why: people can be very sensitive to this frequency | check: no sustained oscillating object runs near 0.2 Hz.
- MUST keep the amplitude low when an object has to oscillate. | topic: oscillation amplitude | source: Platform considerations, visionOS section | why: low amplitude reduces discomfort when oscillation is required | check: the rendered oscillation amplitude is low.

Apple-specific (excluded):
- SF Symbols support and the SF Symbols animations link (sf-symbols#Animations); "SF Symbols 5 or later".
- Liquid Glass material response to direct touch versus trackpad input; the Liquid Glass change-log entry.
- System components that adjust motion for accessibility settings and input methods.
- visionOS mechanics: the spatial-layout#Depth and spatial-layout#Field-of-view links, immersive-experiences#Immersion-and-passthrough, and the Photos panorama example.
- watchOS: SwiftUI, WatchKit, WKInterfaceImage, and the built-in easing at the start and end of animations that cannot be turned off or customized.
- Developer documentation: animating-views-and-transitions (SwiftUI).
- Related links: feedback, spatial-layout, immersive-experiences.
- Platform note: no additional considerations for iOS, iPadOS, macOS, or tvOS.
- Change log dates and entries.

Persona and journey notes:
- Consider animated icons or symbols where they make sense; the page ties this advice to SF Symbols, so only the general idea is kept here.
- For oscillating objects, consider making the content translucent to reduce how noticeable the motion is.
- When people move a large object or window themselves, discomfort can still happen; consider keeping the window fairly small.
- Instead of rotating a virtual world, consider an instantaneous directional change during a quick fade-out.
- Consider giving people a stationary frame of reference: motion contained in a fixed area is easier to handle, while automatic movement that makes the whole surrounding area appear to move can make people feel unwell (example: a game that automatically moves the player through space).
- Game players should get feedback that is succinct and tied to a successful action, so they receive the message without losing focus on gameplay.

COVERAGE: Full page read, including Best practices, Providing feedback, Leveraging platform capabilities, Platform considerations (visionOS, watchOS, and the iOS/iPadOS/macOS/tvOS note), Resources, and Change log. 20 universal rules extracted.
