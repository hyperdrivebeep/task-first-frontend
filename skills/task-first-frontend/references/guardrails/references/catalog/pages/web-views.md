Candidate catalog - evidence only; not executable requirements.

# Web views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/web-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: a8d2ddddee24e5992a71492feed7ace174996e70fe2e27c0c8c6b270921f4d08
Input words: 171. Candidate rule records: 4. Exclusion blocks: 5.
Original note: p034-web-views/web-views.md.
Adopted source-linked rules: C-29

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Web views
URL: https://developer.apple.com/design/human-interface-guidelines/web-views
Universal rules:
- MUST support forward and back navigation in a web view when people are likely to visit multiple pages. | topic: Web views | source: https://developer.apple.com/design/human-interface-guidelines/web-views | why: web views do not provide forward and back navigation by default. | check: at 1440px and 390px, open a page with at least two linked pages inside the web view and confirm forward and back move between them.
- MUST provide visible controls that initiate forward and back navigation when a web view supports multiple pages. | topic: Web views | source: https://developer.apple.com/design/human-interface-guidelines/web-views | why: people need a way to reach the navigation the web view supports. | check: at 1440px and 390px, confirm forward and back controls are visible and enabled or disabled correctly after navigating.
- MUST NOT use a web view to rebuild the functionality of a web browser such as Safari. | topic: Web views | source: https://developer.apple.com/design/human-interface-guidelines/web-views | why: Safari is the primary way people browse the web, and replicating it is unnecessary. | check: not screenshot-checkable: whether the feature set amounts to a browser depends on product scope, not a single frame.
- MUST limit web view use to letting people briefly access a website without leaving the context of the app. | topic: Web views | source: https://developer.apple.com/design/human-interface-guidelines/web-views | why: brief in-app access to a website is an accepted use of a web view. | check: at 1440px and 390px, confirm the web view stays inside the app's own screen and navigation context.
Apple-specific (excluded):
- WKWebView is the developer documentation reference for web views.
- No additional platform considerations for iOS, iPadOS, macOS, or visionOS.
- Web views are not supported on tvOS or watchOS.
- Mail uses a web view to show HTML content in messages (example only).
- Safari is named as the primary way people browse the web.
Persona and journey notes:
- People reading HTML content inside an app, such as an email message, without leaving the app.
- People who briefly open a linked website from inside an app and expect to return to it.
- People who try to visit several linked pages in one web view and need to move back and forward.
COVERAGE:
- Best practices: two paragraphs read, yielding four universal rules (navigation support, navigation controls, no browser replication, brief in-app access).
- Platform considerations: read, no universal rules; platform support lines excluded as Apple-specific.
- Resources: read, no guideline content; developer reference and videos excluded.
