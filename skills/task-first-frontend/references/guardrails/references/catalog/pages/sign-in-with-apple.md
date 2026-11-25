Candidate catalog - evidence only; not executable requirements.

# Sign in with Apple: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: a03905d4ddc6243a6f75c566f376a4fc22ff349f3f4fe570841e60a7594b9181
Input words: 2892. Candidate rule records: 13. Exclusion blocks: 4.
Original note: p141-sign-in-with-apple/sign-in-with-apple.md.
Adopted source-linked rules: T-37

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Sign in with Apple
URL: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST explain the value of signing in and defer it until that value is needed. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People can explore before committing. | check: At 1440px and 390px, capture the useful guest path and sign-in explanation.
- MUST explain required account setup before presenting dependent authentication choices. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People understand the required sequence. | check: At 1440px and 390px, inspect account creation and sign-in steps.
- MUST support linking an existing account when adding a new sign-in method would otherwise split a person’s data. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People keep their previous content. | check: Not screenshot-checkable: link a known existing account and verify retained access.
- MUST defer optional commerce account creation until after guest purchase and reuse already supplied information. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People finish checkout without redundant forms. | check: At 1440px and 390px, capture guest checkout and post-purchase account creation.
- MUST let people use a successfully authenticated account without nonessential follow-up questions. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: Successful sign-in leads to value. | check: At 1440px and 390px, capture authentication return and first usable state.
- MUST show current sign-in status and method in an appropriate account view. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People can identify their account access. | check: At 1440px and 390px, inspect account/settings state.
- MUST distinguish required additional account data from optional recommendations. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People know what can be declined. | check: At 1440px and 390px, inspect labels, explanations and skip choices.
- MUST NOT require a separate password while a passwordless federated sign-in method remains active. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People retain the promised convenience. | check: Not screenshot-checkable: exercise setup, reentry and account recovery for the active method.
- MUST respect a private relay contact address rather than forcing disclosure of a personal address. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People retain their privacy choice. | check: At 1440px and 390px, inspect relay-address account setup and support identification.
- MUST make the provided account identifier visible or offer another appropriate identifier for support. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People can identify their account later. | check: At 1440px and 390px, inspect account details and support prompts.
- MUST defer optional personal-data requests and preserve account access when they are declined. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People can use the core service without extra disclosure. | check: Not screenshot-checkable: decline each optional request and complete the main task.
- MUST explain and visibly account for data collected during setup. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People understand how information is used. | check: At 1440px and 390px, compare requested fields with their stated use and displayed account data.
- MUST keep authentication controls recognizable and legible across background and locale changes. | topic: Sign in with Apple | source: https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple | why: People can confidently choose a sign-in method. | check: At 1440px and 390px, capture supported themes and longest localized button labels.
Apple-specific (excluded):
- Sign in with Apple service behavior, biometrics, relay implementation and AuthenticationServices APIs.
- Apple button prominence relative to alternatives and official title variants.
- Apple logo artwork, color/shape/font proportions, 140x30-point minimum, 44-point raster guidance and margins.
- Apple Account settings paths, trademarks and platform-specific button styling.
Persona and journey notes:
- People explore as guests, authenticate for a benefit, link an existing identity and may choose a private relay address.
COVERAGE:
- sign-in-with-apple: read, 2893 words, 13 universal rules, 4 excluded
