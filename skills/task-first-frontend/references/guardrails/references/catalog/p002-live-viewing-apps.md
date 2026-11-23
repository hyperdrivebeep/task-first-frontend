Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: p002-live-viewing-apps

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Live-viewing apps (30 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps

- [LA-01] MUST keep live content as the primary focus on every screen.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: people open a live-viewing app to watch live content
  Check@1440/390: each screen gives live content the most visual weight.
- [LA-02] MUST make live content distinguishable from VOD content at a glance on every screen.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: viewers must know what is live without reading
  Check@1440/390: live and VOD items look different in every list.
- [LA-03] MUST feature live content prominently and keep it easy to reach.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: minimizes the time from app start to playback
  Check@1440/390: live content sits in the first tab or a featured position.
- [LA-04] MUST keep the path from app start to playback to one tap when live content is in the first tab.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: fewer taps before viewing
  Check@1440/390: count taps from launch to playing live content (max 1).
- [LA-05] MUST let people start playback with one tap, or with none, for example a Watch Now button on featured or recently viewed live content.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: reduces friction
  Check@1440/390: a start control exists on featured or recent live content and works in one tap.
- [LA-06] MUST hide the start control and begin playback on tap, replacing the app UI with a full-screen immersive view.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: immediate feedback and immersion
  Check@1440/390: after tap, the control disappears and playback fills the screen.
- [LA-07] MUST mark each live item with a visual indicator, such as a badge, symbol, or sash, that identifies it as live.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: makes live content look live
  Check@1440/390: every live tile shows the indicator; no VOD tile shows it.
- [LA-08] MUST title a collection row that holds live channels to name the live content, for example "Live" (advisory: source says "you might").
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: groups live channels for quick scanning
  Check@1440/390: the row title says Live and holds only live items.
- [LA-09] MUST show progress of currently playing live content, for example with a progress bar (advisory: source says "consider").
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: people want to know where they will land
  Check@1440/390: an in-progress live item shows how much content remains.
- [LA-10] MUST keep playback as the primary action on content.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: playback is the main purpose
  Check@1440/390: playback is the most prominent control on the content view.
- [LA-11] MUST show other supported actions (record, restart, download, favorite) in the same order throughout the app.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: predictable controls
  Check@1440/390: the action order matches on every content view.
- [LA-12] MUST, when content airs again at other times, show those times so people can schedule viewing.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: lets people plan viewing
  Check@1440/390: repeat airing times appear on the content view.
- [LA-13] MUST (if a content footer is used) give it a subtle treatment, such as darkening, so text stays legible and items stay distinct from the content behind it.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: keeps footer readable over video
  Check@1440/390: footer text contrast passes against the darkest video frame.
- [LA-14] MUST (if a content footer is used) make the thumbnail of the currently playing content easy to identify, for example with a badge or a tinted progress bar.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: orients the viewer while browsing
  Check@1440/390: the current item has a distinct badge or tint in the footer.
- [LA-15] MUST (if a content footer is used) use the same categories in the footer as in the EPG.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: consistent browsing model
  Check@1440/390: footer category names match EPG category names.
- [LA-16] MUST (if a content footer is used) give it a simple, predictable invoke and dismiss gesture pair, where the dismiss gesture is the reverse of the invoke gesture.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: predictable navigation
  Check@1440/390: invoke and dismiss gestures are opposite and both work.
- [LA-17] MUST give instant visual feedback when people change channels.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: confirms arrival and covers load time
  Check@1440/390: a visual change appears immediately on channel switch, before the stream loads.
- [LA-18] MUST keep audio matched to the current context: while live content plays, audio continues when the user browses in the same app.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: viewers expect the audio to match the playing content
  Check@1440/390: switching to browsing keeps the live audio playing.
- [LA-19] MUST NOT keep live audio playing after the user navigates away from the live tab or live-viewing context.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: leaving the live context ends playback audio
  Check@1440/390: leaving the live tab stops the audio.
- [LA-20] MUST show the current program, channel, and time prominently when the EPG opens, and make it easy to return to the current channel.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: lets people return to playback at once
  Check@1440/390: current program, channel, and time are visible on EPG open, with a one-step return action.
- [LA-21] MUST make EPG paging, scrolling, and jumping easy.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: EPGs hold a lot of information
  Check@1440/390: the user can page, scroll, and jump to a time or day.
- [LA-22] MUST provide a My Channels or Favorites group for quick access to the content people view most (advisory: source says "consider").
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: shortens repeat navigation
  Check@1440/390: a favorites or my-channels group exists and reflects viewing habits or user choice.
- [LA-23] MUST group EPG content into familiar categories, for example Movies, TV Shows, Kids, Sports, and Popular.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: easier discovery
  Check@1440/390: content is grouped into named categories.
- [LA-24] MUST let people browse the EPG without leaving current content, for example by continuing playback in picture-in-picture or background mode.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: browsing should not stop viewing
  Check@1440/390: playback continues while the EPG is open.
- [LA-25] MUST (if cloud DVR is supported) let people start and stop recording from the info panel during a live stream.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: recording is immediate while watching
  Check@1440/390: start and stop recording work from the info panel during live playback.
- [LA-26] MUST (if cloud DVR is supported) let people record a future program from a content details view, with an option to record only that program or all future episodes.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: scheduling from the details view
  Check@1440/390: the details view offers both options and each records the expected items.
- [LA-27] MUST (if cloud DVR is supported) let people set recording scope precisely, such as only the current episode, only new episodes, or only games that involve specific teams.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: people need precise control over what is kept
  Check@1440/390: each listed scope option can be selected and is honored.
- [LA-28] MUST (if cloud DVR is supported) allow playback and content-specific actions within the DVR area, such as play, delete, and adjusting recording settings.
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: manage recordings where they are listed
  Check@1440/390: play, delete, and settings actions work from the DVR content details view.
- [LA-29] MUST (if offered) provide a DVR management control to delete watched recordings or recordings older than a set number of days (advisory: source says "consider offering").
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: keeps storage under control
  Check@1440/390: the control deletes watched items and items older than the set age.
- [LA-30] MUST (if offered) provide automatic storage management that overwrites the oldest or already viewed content, so people avoid running out of space (advisory: source says "ideally").
  HIG: Live-viewing apps <https://developer.apple.com/design/human-interface-guidelines/live-viewing-apps> | Why: prevents full storage
  Check@1440/390: when storage is full, the oldest or viewed items are replaced by new recordings.

# Exclusions and persona notes

### Live-viewing apps
Apple-specific, excluded:
- Platform considerations section: names iOS, iPadOS, macOS, tvOS, visionOS, and watchOS; contains no rule content.
- Related links "remotes" and "playing-video": cross-references to other Apple HIG pages; no rule content.
Persona and journey notes:
- Viewer who wants to start live content fast: one tap or none from launch to playback.
- Channel browser: uses the content footer or EPG during playback and expects instant feedback on each channel change.
- Viewer who schedules and manages recordings: needs to record from the info panel, the details view, and the DVR area, and to manage storage.
