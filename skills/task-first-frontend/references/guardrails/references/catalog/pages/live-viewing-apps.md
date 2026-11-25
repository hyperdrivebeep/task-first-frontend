Candidate catalog - evidence only; not executable requirements.

# Live-viewing apps: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 544ce2a6341b85bde059751caedc9d3c9a1c32d26ba619e3fdd59890a4b82dd7
Input words: 1015. Candidate rule records: 30. Exclusion blocks: 2.
Original note: p002-live-viewing-apps/live-viewing-apps.md.
Adopted source-linked rules: None directly attributed; retained as reviewed candidate evidence, not silently skipped.

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Live-viewing apps

URL: https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps

Universal rules:
- MUST keep live content as the primary focus on every screen. | topic: live-content prominence | source: Introduction / Best practices | why: people open a live-viewing app to watch live content | check: each screen gives live content the most visual weight.
- MUST make live content distinguishable from VOD content at a glance on every screen. | topic: live vs VOD distinction | source: Introduction | why: viewers must know what is live without reading | check: live and VOD items look different in every list.
- MUST feature live content prominently and keep it easy to reach. | topic: live content placement | source: Best practices | why: minimizes the time from app start to playback | check: live content sits in the first tab or a featured position.
- MUST keep the path from app start to playback to one tap when live content is in the first tab. | topic: start-to-playback steps | source: Best practices | why: fewer taps before viewing | check: count taps from launch to playing live content (max 1).
- MUST let people start playback with one tap, or with none, for example a Watch Now button on featured or recently viewed live content. | topic: one-tap playback start | source: Best practices | why: reduces friction | check: a start control exists on featured or recent live content and works in one tap.
- MUST hide the start control and begin playback on tap, replacing the app UI with a full-screen immersive view. | topic: playback start behavior | source: Best practices | why: immediate feedback and immersion | check: after tap, the control disappears and playback fills the screen.
- MUST mark each live item with a visual indicator, such as a badge, symbol, or sash, that identifies it as live. | topic: live item marking | source: Best practices | why: makes live content look live | check: every live tile shows the indicator; no VOD tile shows it.
- MUST title a collection row that holds live channels to name the live content, for example "Live" (advisory: source says "you might"). | topic: live collection row | source: Best practices (advisory) | why: groups live channels for quick scanning | check: the row title says Live and holds only live items.
- MUST show progress of currently playing live content, for example with a progress bar (advisory: source says "consider"). | topic: live progress indicator | source: Best practices (advisory) | why: people want to know where they will land | check: an in-progress live item shows how much content remains.
- MUST keep playback as the primary action on content. | topic: action hierarchy | source: Best practices | why: playback is the main purpose | check: playback is the most prominent control on the content view.
- MUST show other supported actions (record, restart, download, favorite) in the same order throughout the app. | topic: consistent action order | source: Best practices | why: predictable controls | check: the action order matches on every content view.
- MUST, when content airs again at other times, show those times so people can schedule viewing. | topic: rebroadcast schedule info | source: Best practices | why: lets people plan viewing | check: repeat airing times appear on the content view.
- MUST (if a content footer is used) give it a subtle treatment, such as darkening, so text stays legible and items stay distinct from the content behind it. | topic: footer legibility | source: Best practices | why: keeps footer readable over video | check: footer text contrast passes against the darkest video frame.
- MUST (if a content footer is used) make the thumbnail of the currently playing content easy to identify, for example with a badge or a tinted progress bar. | topic: footer current-item marking | source: Best practices | why: orients the viewer while browsing | check: the current item has a distinct badge or tint in the footer.
- MUST (if a content footer is used) use the same categories in the footer as in the EPG. | topic: footer and EPG category consistency | source: Best practices | why: consistent browsing model | check: footer category names match EPG category names.
- MUST (if a content footer is used) give it a simple, predictable invoke and dismiss gesture pair, where the dismiss gesture is the reverse of the invoke gesture. | topic: footer invoke and dismiss | source: Best practices | why: predictable navigation | check: invoke and dismiss gestures are opposite and both work.
- MUST give instant visual feedback when people change channels. | topic: channel-change feedback | source: Best practices | why: confirms arrival and covers load time | check: a visual change appears immediately on channel switch, before the stream loads.
- MUST keep audio matched to the current context: while live content plays, audio continues when the user browses in the same app. | topic: audio continuity during browsing | source: Best practices | why: viewers expect the audio to match the playing content | check: switching to browsing keeps the live audio playing.
- MUST NOT keep live audio playing after the user navigates away from the live tab or live-viewing context. | topic: audio stop on context exit | source: Best practices | why: leaving the live context ends playback audio | check: leaving the live tab stops the audio.
- MUST show the current program, channel, and time prominently when the EPG opens, and make it easy to return to the current channel. | topic: EPG current-state visibility | source: EPG experience | why: lets people return to playback at once | check: current program, channel, and time are visible on EPG open, with a one-step return action.
- MUST make EPG paging, scrolling, and jumping easy. | topic: EPG navigation | source: EPG experience | why: EPGs hold a lot of information | check: the user can page, scroll, and jump to a time or day.
- MUST provide a My Channels or Favorites group for quick access to the content people view most (advisory: source says "consider"). | topic: EPG favorites group | source: EPG experience (advisory) | why: shortens repeat navigation | check: a favorites or my-channels group exists and reflects viewing habits or user choice.
- MUST group EPG content into familiar categories, for example Movies, TV Shows, Kids, Sports, and Popular. | topic: EPG categories | source: EPG experience | why: easier discovery | check: content is grouped into named categories.
- MUST let people browse the EPG without leaving current content, for example by continuing playback in picture-in-picture or background mode. | topic: browsing during playback | source: EPG experience | why: browsing should not stop viewing | check: playback continues while the EPG is open.
- MUST (if cloud DVR is supported) let people start and stop recording from the info panel during a live stream. | topic: recording controls during live | source: Cloud DVR | why: recording is immediate while watching | check: start and stop recording work from the info panel during live playback.
- MUST (if cloud DVR is supported) let people record a future program from a content details view, with an option to record only that program or all future episodes. | topic: future program recording | source: Cloud DVR | why: scheduling from the details view | check: the details view offers both options and each records the expected items.
- MUST (if cloud DVR is supported) let people set recording scope precisely, such as only the current episode, only new episodes, or only games that involve specific teams. | topic: recording scope | source: Cloud DVR | why: people need precise control over what is kept | check: each listed scope option can be selected and is honored.
- MUST (if cloud DVR is supported) allow playback and content-specific actions within the DVR area, such as play, delete, and adjusting recording settings. | topic: DVR area actions | source: Cloud DVR | why: manage recordings where they are listed | check: play, delete, and settings actions work from the DVR content details view.
- MUST (if offered) provide a DVR management control to delete watched recordings or recordings older than a set number of days (advisory: source says "consider offering"). | topic: DVR storage management | source: Cloud DVR (advisory) | why: keeps storage under control | check: the control deletes watched items and items older than the set age.
- MUST (if offered) provide automatic storage management that overwrites the oldest or already viewed content, so people avoid running out of space (advisory: source says "ideally"). | topic: DVR automatic storage | source: Cloud DVR (advisory) | why: prevents full storage | check: when storage is full, the oldest or viewed items are replaced by new recordings.

Apple-specific (excluded):
- Platform considerations section: names iOS, iPadOS, macOS, tvOS, visionOS, and watchOS; contains no rule content.
- Related links "remotes" and "playing-video": cross-references to other Apple HIG pages; no rule content.

Persona and journey notes:
- Viewer who wants to start live content fast: one tap or none from launch to playback.
- Channel browser: uses the content footer or EPG during playback and expects instant feedback on each channel change.
- Viewer who schedules and manages recordings: needs to record from the info panel, the details view, and the DVR area, and to manage storage.

COVERAGE:
- Read in full: live-viewing-apps.md (one page, no offset or limit).
- Sections covered: Introduction, Best practices, EPG experience, Cloud DVR, Platform considerations, Resources.
- Universal rules extracted: 30 (MUST: 29, MUST NOT: 1).
- Apple-specific excluded lines: 2.
- Conditional rules (marked "if ..." or "if offered") are kept as universal because the page frames them as applying when the feature exists.
- Items marked "advisory" use soft wording in the page ("consider", "you might", "ideally"); they are kept and labeled so a reader can downgrade them.
- Picture-in-picture is named in one rule as an example of background browsing; the rule is kept because the requirement (playback continues while browsing) is product-neutral.
