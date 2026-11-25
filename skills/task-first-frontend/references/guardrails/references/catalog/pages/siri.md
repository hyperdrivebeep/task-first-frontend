Candidate catalog - evidence only; not executable requirements.

# Siri: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/siri
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 9b72e479728399f2b7206650c5a8e13b25ed4375926b1001b409e35b5ff65695
Input words: 1956. Candidate rule records: 13. Exclusion blocks: 3.
Original note: p142-siri/siri.md.
Adopted source-linked rules: T-38

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Siri
URL: https://developer.apple.com/design/human-interface-guidelines/siri
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST prioritize voice actions by how often and where people need them. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: Hands-free entry exposes useful tasks. | check: At 1440px and 390px, compare exposed actions with documented journeys.
- MUST use familiar user terms for voice actions and content. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: People can ask naturally. | check: At 1440px and 390px, inspect action/entity labels and sample requests.
- MUST expose contextually relevant content rather than indiscriminately surfacing everything. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: Results fit the person’s current task. | check: Not screenshot-checkable: run known recent/favorite and unrelated-content queries.
- MUST NOT insert advertising or sales pitches into task responses. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: People receive the information they requested. | check: At 1440px and 390px, inspect response text and audio transcripts.
- MUST explain what an action did and make follow-up questions specific. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: People know the result and missing information. | check: At 1440px and 390px, inspect success, disambiguation and confirmation dialogue.
- MUST keep repeated spoken responses concise and free of unnecessary humor or filler. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: People can finish without listening to redundant text. | check: Not screenshot-checkable: listen through repeated interactions and errors.
- MUST make spoken responses understandable without visual context and provide a visual equivalent when available. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: People can act while not looking at a screen. | check: Not screenshot-checkable: complete the request audio-only and compare the visual result.
- MUST use inclusive language without unnecessary assumptions about identity or relationships. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: People receive appropriate dialogue. | check: At 1440px and 390px, review person-related prompts and responses.
- MUST narrow long option lists with a useful follow-up question. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: People need not listen to an excessive list. | check: Not screenshot-checkable: request a large choice set and inspect narrowing behavior.
- MUST keep response wording device-independent unless a specific device reference is accurate and necessary. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: Cross-device actions are not misleading. | check: Not screenshot-checkable: initiate on one device and complete on another.
- MUST avoid repeating source attribution already supplied by the host. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: The response stays concise. | check: At 1440px and 390px, inspect combined host and app response.
- MUST respect content restrictions and consider that spoken replies may be heard by bystanders. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: Responses suit the listening context. | check: Not screenshot-checkable: exercise restricted-content and shared-audio contexts.
- MUST explain failure with the specific task reason and useful next step. | topic: Siri | source: https://developer.apple.com/design/human-interface-guidelines/siri | why: People can understand what prevented completion. | check: At 1440px and 390px, inspect unavailable-item and invalid-request responses.
Apple-specific (excluded):
- Siri AI/Apple Intelligence, App Intents schemas, entity donation and Spotlight APIs.
- Built-in-versus-custom Siri response mechanisms.
- Reserved Siri phrases, impersonation restrictions, trademarks and approved wake-phrase translations.
Persona and journey notes:
- People issue quick requests hands-free, refer to onscreen content and may start on a different device from the result.
COVERAGE:
- siri: read, 1957 words, 13 universal rules, 3 excluded
