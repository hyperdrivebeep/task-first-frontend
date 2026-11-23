Candidate catalog - evidence only; not executable requirements.

# Always On: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/always-on
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: cd636061aabb4d5c58a3ecc913a5fbe87d042b615ef63c2a78886ab8eec0baf5
Input words: 553. Candidate rule records: 6. Exclusion blocks: 1.
Original note: p099-always-on/always-on.md.
Adopted source-linked rules: T-09

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Always On
URL: https://developer.apple.com/design/human-interface-guidelines/always-on
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST redact sensitive information from unattended ambient displays and their notifications. | topic: Always On | source: https://developer.apple.com/design/human-interface-guidelines/always-on | why: Bystanders cannot read private details. | check: At 1440px and 390px, capture unattended mode using synthetic private data.
- MUST keep only contextually useful information glanceable in ambient mode. | topic: Always On | source: https://developer.apple.com/design/human-interface-guidelines/always-on | why: People receive relevant updates with low attention. | check: At 1440px and 390px, compare visible information with the current activity.
- MUST preserve legibility of important content while reducing emphasis on secondary content in dimmed mode. | topic: Always On | source: https://developer.apple.com/design/human-interface-guidelines/always-on | why: People can read what matters. | check: At 1440px and 390px, capture bright and dim states and measure contrast separately.
- MUST preserve layout and mark unavailable controls rather than abruptly removing them on ambient-mode entry. | topic: Always On | source: https://developer.apple.com/design/human-interface-guidelines/always-on | why: The transition remains understandable. | check: At 1440px and 390px, compare active and ambient geometry.
- MUST keep ambient updates infrequent and subtle. | topic: Always On | source: https://developer.apple.com/design/human-interface-guidelines/always-on | why: A resting device does not distract. | check: Not screenshot-checkable: record ambient updates over time; attach both-width examples.
- MUST settle ongoing motion gracefully when entering ambient mode. | topic: Always On | source: https://developer.apple.com/design/human-interface-guidelines/always-on | why: People do not mistake the transition for a freeze. | check: Not screenshot-checkable: record the transition and inspect start, middle and settled frames.
Apple-specific (excluded):
- Supported iPhone/Apple Watch models, wrist states and Always On system behavior.
Persona and journey notes:
- A person stops interacting but still wants relevant low-power information without exposing private data.
COVERAGE:
- always-on: read, 554 words, 6 universal rules, 1 excluded
