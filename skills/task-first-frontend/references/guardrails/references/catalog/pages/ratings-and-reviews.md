Candidate catalog - evidence only; not executable requirements.

# Ratings and reviews: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: f224298b69b76e587df5cc003b80fbefde09723225413aee54d4589cfed5ae8c
Input words: 507. Candidate rule records: 10. Exclusion blocks: 6.
Original note: p015-ratings-and-reviews/ratings-and-reviews.md.
Adopted source-linked rules: P-36

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Ratings and reviews

URL: https://developer.apple.com/design/human-interface-guidelines/ratings-and-reviews

Universal rules:
- MUST ask for a rating only after people have demonstrated engagement with the app, for example after they complete a game level or a significant task. | topic: rating prompt timing | source: HIG Ratings and reviews, Best practices | why: people need time to gain a clear understanding of the app's value before they can form an opinion | check: the rating prompt trigger fires only after a completed meaningful task or engagement milestone.
- MUST NOT ask for a rating on first launch. | topic: rating prompt timing | source: HIG Ratings and reviews, Best practices | why: people have not had enough time to use the app and may leave negative feedback because of the early request | check: no rating prompt is reachable on first launch.
- MUST NOT ask for a rating during onboarding. | topic: rating prompt timing | source: HIG Ratings and reviews, Best practices | why: people have not had enough time to use the app and may leave negative feedback because of the early request | check: no rating prompt is triggered from any onboarding screen or flow.
- MUST NOT interrupt people while they are performing a task or playing a game to ask for feedback. | topic: rating prompt interruption | source: HIG Ratings and reviews, Best practices | why: asking for feedback disrupts the user experience and feels like a burden | check: the rating prompt never appears during an active task or gameplay.
- MUST look for natural breaks or stopping points in the app before showing a rating request. | topic: rating prompt placement | source: HIG Ratings and reviews, Best practices | why: a rating request is less likely to be bothersome at a natural break | check: the rating request is shown only at a pause or completion point in the flow.
- MUST NOT pester people with repeated rating requests. | topic: rating prompt frequency | source: HIG Ratings and reviews, Best practices | why: repeated requests are irritating and may negatively influence people's opinion of the app | check: the app records prior requests and does not re-ask in a loop.
- MUST leave at least one to two weeks between rating requests (the HIG states at least a week or two). | topic: rating prompt frequency | source: HIG Ratings and reviews, Best practices (number from the HIG) | why: spacing requests prevents the irritation that comes from repeated prompts | check: the time since the last rating request is at least 7 to 14 days before another request.
- MUST prompt again only after people demonstrate additional engagement with the experience. | topic: rating prompt re-trigger | source: HIG Ratings and reviews, Best practices | why: a new request should follow new evidence that the person is still engaged | check: a repeat request is gated on a new engagement event since the last request.
- MUST choose the rating-request timing using engagement signals such as how many times or how often people launch the app, the number of features explored, or the number of tasks completed. | topic: rating prompt timing signals | source: HIG Ratings and reviews, Introduction | why: choosing the right time is crucial to getting useful feedback | check: the trigger condition reads at least one of these engagement counters.
- MUST treat delivering a great overall experience as the main way to encourage positive ratings and reviews. | topic: ratings as outcome of experience | source: HIG Ratings and reviews, Introduction | why: a good experience is the best driver of positive feedback | check: rating-request work is paired with the core experience quality, not used as a substitute for it.

Apple-specific (excluded):
- System-provided rating prompt via RequestReviewAction in StoreKit (Apple framework).
- System limit of three prompt occurrences per app within a 365-day period (Apple OS behavior).
- Users can opt out of rating prompts for all installed apps (Apple OS setting).
- Prompt shows an optional written review and accepts a single tap or click to dismiss (Apple system UI).
- Summary rating reset for a new version and its trade-off with fewer ratings (App Store feature).
- People can always rate the app within the App Store (Apple App Store).

Persona and journey notes:
- First-launch and onboarding users have not yet seen the app's value; they should not be asked for a rating.
- Engaged users who just completed a level or a significant task are the moment a rating request fits.
- Users mid-game or mid-task are in a flow they do not want interrupted; wait for a stopping point.
- Users who were already asked recently need new engagement before another request.

COVERAGE: ratings-and-reviews - read in one full pass; Best practices covered in full; Introduction covered in full; Platform considerations contains no guideline beyond Apple OS; Resources and change log contain no guidelines.
