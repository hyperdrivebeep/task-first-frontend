Candidate catalog - evidence only; not executable requirements.

# Designing for games: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/designing-for-games
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: da0ff90ee6db1daad859e61ad62896982313a66776d2b72db92bcd3cccf69e74
Input words: 1756. Candidate rule records: 30. Exclusion blocks: 1.
Original note: p027-designing-for-games/designing-for-games.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Designing for games
URL: https://developer.apple.com/design/human-interface-guidelines/designing-for-games

Universal rules:
- MUST let players start playing as soon as installation completes. | topic: first launch | source: Jump into gameplay | why: a player's first experience should not be a lengthy download | check: the first playable state is reachable right after install
- MUST keep the initial installation download at 30 minutes or less, with as much playable content included as possible. | topic: download size | source: Jump into gameplay | why: a long download blocks the first play session | check: measured initial download time is 30 minutes or less
- MUST download additional content in the background. | topic: content delivery | source: Jump into gameplay | why: extra content should not block play | check: extra content downloads while the player is already in the game
- MUST choose default settings from device information, including device resolution, paired accessories and game controllers, and the player's accessibility settings. | topic: defaults | source: Jump into gameplay | why: players can start without changing many settings | check: a fresh install on each device class starts with detected values applied
- MUST support the platform's most common interaction methods. | topic: input | source: Jump into gameplay | why: players arrive with their usual input method | check: core play works with the platform's most common input method
- MUST NOT bombard players with too many requests before they start playing. | topic: request timing | source: Jump into gameplay | why: too many requests before play frustrate players | check: count of prompts shown before first gameplay
- MUST get the player's permission before using device sensors or personalizing gameplay with data such as hand-tracking. | topic: permissions | source: Jump into gameplay | why: sensor and personal data access requires consent | check: no sensor or personal-data access happens before a grant
- MUST integrate each permission request into the scenario that needs the data. | topic: permission context | source: Jump into gameplay | why: players understand a request tied to a visible need | check: each prompt appears immediately before the feature that uses the data
- MUST make sure players spend quality time with the game before asking them for a rating or review. | topic: rating prompts | source: Jump into gameplay | why: early prompts get poor ratings and annoy players | check: the rating prompt is gated on a play-time or progress condition
- MUST keep game text contrasting well with its background. | topic: text legibility | source: Look stunning on every display | why: hard-to-read text breaks the narrative and instructions | check: text contrast is checked on each screen
- MUST use at least the recommended minimum text size for each platform. | topic: text size | source: Look stunning on every display | why: small text is hard to read on each device | check: the smallest rendered text is at or above the platform minimum
- MUST make buttons at least the recommended minimum button size for each platform. | topic: button size | source: Look stunning on every display | why: small or crowded buttons frustrate players | check: every button's hit area is at or above the platform minimum
- MUST match the game's resolution to the device resolution when resolution-independent assets are not possible. | topic: assets | source: Look stunning on every display | why: raster assets otherwise look blurred or wrong | check: raster output resolution equals the device resolution
- MUST accommodate device features such as rounded corners and camera housings during layout. | topic: layout | source: Look stunning on every display | why: these features can cover parts of the interface | check: no UI is clipped or covered by corners or housings on each device
- MUST rely on platform-provided safe areas when possible. | topic: safe areas | source: Look stunning on every display | why: safe areas keep content clear of device features | check: layout uses the platform safe-area guides
- MUST keep in-game menus legible and easy to use on every device. | topic: in-game menus | source: Look stunning on every display | why: menus must work across display shapes | check: menus are checked at each supported aspect ratio
- MUST NOT let in-game menus obscure other content. | topic: in-game menus | source: Look stunning on every display | why: obscured content breaks play | check: menus leave gameplay-relevant content visible
- MUST make the game look good and behave well at all supported aspect ratios, such as 16:10, 19.5:9, and 4:3. | topic: aspect ratio | source: Look stunning on every display | why: players use many display shapes | check: each supported aspect ratio renders and plays correctly
- MUST design the game for a distraction-free full-screen experience. | topic: full screen | source: Look stunning on every display | why: players often want full-screen immersion | check: the game runs full screen without stray system UI or broken layout
- MUST support each platform's default interaction method. | topic: input | source: Enable intuitive interactions | why: players expect the input the platform was built around | check: the default input method drives every core action
- MUST offer alternative ways to interact with the game besides physical game controllers. | topic: input alternatives | source: Enable intuitive interactions | why: not every player can use a physical game controller | check: a complete playable path exists without a controller
- MUST prioritize perceivability: players must be able to perceive the game's content by sight, hearing, or touch. | topic: perceivability | source: Welcome everyone | why: players differ in how they take in content | check: each piece of content has a route through at least one sense the player can use
- MUST NOT rely solely on color to convey an important detail. | topic: perceivability | source: Welcome everyone | why: some players cannot perceive color | check: every important detail also has a non-color cue
- MUST NOT provide a cutscene without descriptive subtitles or another way to read its content. | topic: perceivability | source: Welcome everyone | why: players who cannot hear or see the cutscene must still follow it | check: each cutscene has subtitles or an equivalent text route
- MUST let players customize type size, control mapping, motion intensity, and sound balance. | topic: personalization | source: Welcome everyone | why: players differ in preferences and abilities | check: each listed parameter has a player-facing setting
- MUST support the spectrum of self-identity in avatar, name, and description options, when the game lets players create them. | topic: self-representation | source: Welcome everyone | why: players represent themselves in many ways | check: avatar, name, and description options are not limited to a narrow set
- MUST provide options that represent as many human characteristics as possible when players create avatars or descriptions. | topic: self-representation | source: Welcome everyone | why: players need options that match them | check: the option set covers a broad range of human characteristics
- MUST NOT depict characters or scenarios in ways that perpetuate real-life stereotypes. | topic: stereotypes | source: Welcome everyone | why: stereotyped depictions harm players | check: enemies and characters are reviewed for race, gender, and cultural stereotypes
- MUST review the game to uncover and remove biases and stereotypes. | topic: stereotypes | source: Welcome everyone | why: biases can enter through story and character choices | check: a documented review pass covers story, characters, and scenarios
- MUST treat references to real-life cultures and languages respectfully. | topic: cultural references | source: Welcome everyone | why: careless references offend players | check: cultural and language references are reviewed for respect

Apple-specific (excluded): platform text size and button size tables; the platform interaction-method table; iOS and iPadOS touch-based game controls; vector art for visionOS; visionOS Full Space; full-screen mode on macOS, iOS, and iPadOS; Game Center; GameSave; Core Haptics; Spatial Audio; other Apple technologies such as augmented reality, machine learning, HealthKit, location, camera, and microphone.

Persona and journey notes:
- Persona: a casual player on a phone who wants to start at once with sensible defaults and little setup.
- Persona: a player who cannot use a physical game controller and needs another way to play.
- Persona: a player who relies on accessibility settings for type size, motion, and sound.
- Journey: install, then play without a long download, then defaults applied, then tutorial inside play, then permissions requested in context, then a rating prompt only after quality play time.

COVERAGE: read 1 of 1 pages in full in one read call; 30 universal rules; soft guidance ("prefer", "consider", "can work well", "avoid as much as possible") was not converted into rules; Apple-specific items excluded.
