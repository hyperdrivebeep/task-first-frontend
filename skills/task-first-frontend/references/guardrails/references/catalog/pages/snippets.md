Candidate catalog - evidence only; not executable requirements.

# Snippets: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/snippets
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 1e5f58889ff82f1f45dd471f58e4035e0ad6fcc84400569e5c397bc3e0d6aacb
Input words: 570. Candidate rule records: 5. Exclusion blocks: 2.
Original note: p097-snippets/snippets.md.
Adopted source-linked rules: T-02

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Snippets
URL: https://developer.apple.com/design/human-interface-guidelines/snippets
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST distinguish action confirmation from the resulting completed state. | topic: Snippets | source: https://developer.apple.com/design/human-interface-guidelines/snippets | why: People know whether an action still needs approval. | check: At 1440px and 390px, capture confirmation, cancellation and result states.
- MUST keep compact result content legible in supported themes and text sizes. | topic: Snippets | source: https://developer.apple.com/design/human-interface-guidelines/snippets | why: People can understand a brief result. | check: At 1440px and 390px, capture both themes and enlarged text with consistent margins.
- MUST keep compact results concise and link to detail when more information is needed. | topic: Snippets | source: https://developer.apple.com/design/human-interface-guidelines/snippets | why: People can finish a lightweight interaction without crowding. | check: At 1440px and 390px, inspect the longest result and exact detail destination.
- MUST label confirmation actions by their actual outcome. | topic: Snippets | source: https://developer.apple.com/design/human-interface-guidelines/snippets | why: People know what approval does. | check: At 1440px and 390px, read the primary action next to its consequence.
- MUST communicate compact results visually as well as through spoken dialogue when both channels exist. | topic: Snippets | source: https://developer.apple.com/design/human-interface-guidelines/snippets | why: People can understand whether looking or listening. | check: Not screenshot-checkable for audio: compare speech transcript with visual content; capture both widths.
Apple-specific (excluded):
- Siri/App Intents integration, system button anatomy and platform availability.
- The 400-point custom-view height limit and ConfirmationActionName API.
Persona and journey notes:
- People invoke a lightweight task outside the main app, confirm if needed, then inspect the result.
COVERAGE:
- snippets: read, 571 words, 5 universal rules, 2 excluded
