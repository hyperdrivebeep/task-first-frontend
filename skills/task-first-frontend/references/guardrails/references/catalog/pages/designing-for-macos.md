Candidate catalog - evidence only; not executable requirements.

# Designing for macOS: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-macos
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 89405b4fd26a46320abbae78527e4426b245b2c0bd943ffd700793bad8f293a1
Input words: 523. Candidate rule records: 20. Exclusion blocks: 4.
Original note: p023-designing-for-macos/designing-for-macos.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Designing for macOS

URL: https://developer.apple.com/design/human-interface-guidelines/designing-for-macos

Universal rules:
- Design for people who use the product while stationary, often with the device on a desk or table.
- Treat the keyboard and pointing device as the primary input model.
- Use touch for brief, intentional interactions rather than sustained work on a touch display.
- Support standard gestures on trackpads and touch displays.
- Use larger tap targets and controls that expand on touch to make touch interaction easier.
- Keep control size and density the same so controls stay optimized for keyboard and pointing device input.
- Design for sessions that range from a few minutes of quick tasks to several hours of deep concentration.
- Expect people to have multiple apps open at once and make transitions between active and inactive states smooth.
- Let people resize, hide, show, and move windows to fit their work style and device configuration.
- Support full-screen mode to offer a distraction-free context.
- Give people easy access to all the commands they need to act in the app.
- Handle keyboard shortcuts to help people accelerate actions and work keyboard-only.
- Help people use high-precision input modes to make pixel-perfect selections and edits.
- Leverage large displays to present more content in fewer nested levels.
- Use the space of large displays to reduce the need for modality.
- Maintain a comfortable information density so people do not strain to view the content they want.
- Let people customize toolbars.
- Let people configure windows to display the views they use most.
- Let people choose the colors they want to see in the interface.
- Let people choose the fonts they want to see in the interface.

Apple-specific (excluded):
- Connecting an iPad as an additional display (Apple hardware).
- Siri and Voice Control as inputs (Apple OS features).
- Naming the menu bar, Dock menus, and file management as system features (Apple OS features).
- Naming the full-screen feature as an Apple OS feature; the general full-screen rule above is kept.

Persona and journey notes:
- People use the product for in-depth productivity tasks, viewing media or content, and playing games.
- People often use several apps at the same time.
- Mac users may use a touch display, reaching forward to touch the screen.
- Connected game controllers are a possible input the page mentions.

COVERAGE:
- Introduction (device characteristics): covered by the stationary, touch, input, and session rules above.
- Display: covered by the large-display rules; the iPad extra-display note is excluded.
- Ergonomics: covered by the stationary and touch rules.
- Inputs: covered by the keyboard, pointing device, gesture, and game-controller notes.
- App interactions: covered by the session and multi-app rules.
- System features (menu bar, file management, full-screen, Dock menus): full-screen and command-access rules kept; the rest excluded as Apple OS features.
- Best practices: all seven bullets are covered by the rules above.
- Resources, Developer documentation, Videos: no guidance stated; nothing extracted.
- Change log: the October 28, 2026 entry about touch input is covered by the touch rules.
