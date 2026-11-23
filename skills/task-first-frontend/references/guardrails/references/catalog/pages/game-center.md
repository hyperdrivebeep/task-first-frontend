Candidate catalog - evidence only; not executable requirements.

# Game Center: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/game-center
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 5551efd28ff863809681e64b444ec56e79180e615032a2925ccc8b8c3cc0e95c
Input words: 2612. Candidate rule records: 16. Exclusion blocks: 4.
Original note: p126-game-center/game-center.md.
Adopted source-linked rules: T-41

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Game Center
URL: https://developer.apple.com/design/human-interface-guidelines/game-center
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST place social/progress access outside active gameplay where it would distract. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People can play without intrusive overlays. | check: At 1440px and 390px, compare menus, tutorials and active play.
- MUST reserve space for collapsed and expanded social overlays. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: Expanded controls do not cover essential UI. | check: At 1440px and 390px, capture both overlay sizes.
- MUST pause active play while a blocking progress overlay is open when the game permits pausing. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People do not lose progress while inspecting results. | check: Not screenshot-checkable: open and close the overlay during play.
- MUST distinguish locked, in-progress, hidden and completed achievements when those states exist. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: Players understand progress. | check: At 1440px and 390px, capture each applicable achievement state.
- MUST order achievements to support the intended progression. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People can find their next goal. | check: At 1440px and 390px, compare achievement order with the common game path.
- MUST describe achievements concisely and show meaningful progress. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People know what remains to do. | check: At 1440px and 390px, inspect long localized titles and partial completion.
- MUST use distinct relevant artwork for distinct achievements or ranking activities. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People can recognize their accomplishment. | check: At 1440px and 390px, compare images across achievements and boards.
- MUST distinguish all-time rankings from recurring time-bounded rankings. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People understand the scoring period. | check: At 1440px and 390px, inspect period labels and reset state.
- MUST group multiple leaderboards by meaningful task or difficulty categories. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People can find a relevant comparison. | check: At 1440px and 390px, inspect leaderboard navigation.
- MUST keep essential artwork visible through cropping and overlays. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: Preview imagery retains its meaning. | check: At 1440px and 390px, capture all crop and overlay variants.
- MUST define short competitive challenges with clear comparable attempt-level outcomes. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: New and frequent players compete on the same task. | check: At 1440px and 390px, inspect challenge scoring and duration; source 1-5 minutes is a game recommendation.
- MUST avoid scoring a short challenge by accumulated lifetime progress when that unfairly rewards prior play. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: Participants have a comparable opportunity. | check: Not screenshot-checkable: compare scoring with recent attempt data and historical totals.
- MUST deep-link invitations to the exact activity and return beginners there after needed onboarding. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People join the promised challenge. | check: At 1440px and 390px, capture new-player and returning-player entry paths.
- MUST let participants view and manually enter a session code when codes are used. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People can join across sharing contexts. | check: At 1440px and 390px, inspect code display and entry.
- MUST support late joining, early leaving and returning where a multiplayer activity permits it. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People can participate flexibly. | check: Not screenshot-checkable: join, leave and rejoin an active session.
- MUST keep multiplayer discovery available from the game itself. | topic: Game Center | source: https://developer.apple.com/design/human-interface-guidelines/game-center | why: People need not leave to find a session. | check: At 1440px and 390px, inspect in-game invitations and join controls.
Apple-specific (excluded):
- Game Center system sign-in, access point positions, Game Overlay/dashboard and GameKit APIs.
- Official artwork/terminology, title casing, exact line limits and asset dimensions.
- Eight-character party-code examples and Apple Games/App Store distribution.
- tvOS dashboard artwork and watchOS system-UI limitations.
Persona and journey notes:
- Players inspect progress, invite friends, join challenges as beginners and return to ongoing multiplayer sessions.
COVERAGE:
- game-center: read, 2613 words, 16 universal rules, 4 excluded
