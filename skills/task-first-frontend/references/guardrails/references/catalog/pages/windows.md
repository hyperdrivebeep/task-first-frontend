Candidate catalog - evidence only; not executable requirements.

# Windows: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/windows
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 7914970bf39f41a572b972ccf9b47f3dfbd17d85c77b1acd0ffdac82e2b81642
Input words: 2434. Candidate rule records: 14. Exclusion blocks: 1.
Original note: p073-windows/windows.md.
Adopted source-linked rules: C-38

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Windows

URL: https://developer.apple.com/design/human-interface-guidelines/windows

Universal rules:
- MUST keep app windows adaptive so content reflows fluidly across window sizes that support multitasking and multiwindow use. | topic: window resizing | source: Best practices | why: fixed layouts break when windows sit side by side | check: 1440px desktop: resize window narrow and wide, no overlap or clipped controls; 390px mobile: content reflows to one column without horizontal scroll.
- MUST NOT open a new window as the default behavior for a common action unless it helps people multitask or keep context. | topic: window opening | source: Best practices | why: excessive windows create clutter and confuse navigation | check: 1440px desktop: one primary action opens at most one new window; 390px mobile: the same action stays in the current view.
- MUST NOT make a gesture the only way to open content in a new window. | topic: window opening alternatives | source: iPadOS and Best practices | why: people need a discoverable path to multiple views | check: 1440px desktop: open-in-new-window command exists in the context menu or File menu; 390px mobile: a visible control exists without a gesture.
- MUST NOT build custom window frames or window controls that imitate the system window appearance. | topic: custom window chrome | source: Best practices | why: a near-match without exact system behavior makes the app feel broken | check: 1440px desktop: compare title bar, close, minimize, and zoom behavior against a system window; 390px mobile: use the system navigation container instead of a custom frame.
- MUST use the term "window" in user-facing copy and MUST NOT use the term "scene" in user-facing copy. | topic: terminology | source: Best practices | why: mixed terms confuse people about what a window is | check: 1440px desktop: search UI strings for scene and window usage; 390px mobile: same string audit on the mobile build.
- MUST keep system window controls from covering leading-edge toolbar buttons when the window is windowed. | topic: toolbar overlap | source: iPadOS | why: hidden buttons cannot be used | check: 1440px desktop: windowed mode shows every leading toolbar button fully visible; 390px mobile: full-screen layout shows the same buttons unobstructed.
- MUST NOT place critical information or critical actions in a bottom bar. | topic: bottom bar placement | source: macOS | why: people often move windows so the bottom edge is hidden | check: 1440px desktop: drag window so the bottom edge is off-screen and confirm critical controls remain reachable; 390px mobile: critical controls sit above the bottom safe edge.
- MUST keep any bottom bar limited to a small amount of information directly related to the window or selected item. | topic: bottom bar content | source: macOS | why: a bottom bar is small and easily hidden, so overflow content is lost | check: 1440px desktop: bottom bar text fits on one line at minimum window width; 390px mobile: bottom bar text fits without truncating key values.
- MUST use system-defined appearances for main, key, and inactive window states when a window is custom. | topic: window state appearance | source: macOS | why: people rely on the visual difference to find the foreground window and the input target | check: 1440px desktop: focused and unfocused windows show distinct title and control colors; 390px mobile: n/a unless multiple windows are supported, then verify the same distinction.
- MUST scope an auxiliary window to one task and MUST NOT let it navigate to other areas of the app. | topic: auxiliary window scope | source: Conceptual overview | why: a dedicated window that navigates away breaks the task boundary | check: 1440px desktop: auxiliary window has no app-wide navigation controls; 390px mobile: the equivalent sheet or modal has no app-wide navigation.
- MUST give an auxiliary window a visible close control. | topic: auxiliary window close | source: Conceptual overview | why: people need a clear way to end the task window | check: 1440px desktop: close control is visible without scrolling and closes the window; 390px mobile: dismiss control is visible and reachable with one thumb.
- MUST set a minimum and maximum size for each resizable window so the layout stays usable at both extremes. | topic: window size limits | source: visionOS windows | why: very small sizes overlap UI and very large sizes make the app unusable | check: 1440px desktop: resize to minimum and maximum; no overlapping elements and no unreachable controls.
- MUST choose an initial window size that minimizes empty areas inside the window. | topic: initial window size | source: visionOS windows | why: empty space makes the window look oversized and hides other content | check: 1440px desktop: on first open, measure the empty area ratio and confirm the content fills most of the window.
- MUST restore the size and placement the person chose when the window reopens. | topic: window state persistence | source: iPadOS | why: the system remembers size and placement even after the app closes, so people expect it | check: 1440px desktop: resize and move the window, close and reopen the app, confirm the same frame; 390px mobile: n/a.

Apple-specific (excluded): Windows are not supported on iOS, tvOS, or watchOS; the full-screen iPadOS app switcher; the Multitasking and Gestures setting; the pinch gesture that expands a Notes item; the Dock-icon key window behavior on macOS; the Metal game window guidance; the Color and Font panel behavior; visionOS glass background, plain window style, default 1280x720 pt size, two-meter placement, dynamic spatial scaling, volumes, baseplate glow, and ornaments; SwiftUI, UIKit, and AppKit API names and attachment anchors.

Persona and journey notes: Multitasking users who compare two items at once, such as a new message beside an existing email, benefit from a second window; users who move windows around a desktop may hide a bottom edge and lose its controls; users who switch between apps need inactive windows to look clearly subdued so they know which window takes input.

COVERAGE: read all sections of windows.md in one pass (intro, best practices, platform considerations for iPadOS, macOS, and visionOS, resources, change log); 1 of 1 page; 14 universal rules extracted, Apple-specific items excluded as listed above.
