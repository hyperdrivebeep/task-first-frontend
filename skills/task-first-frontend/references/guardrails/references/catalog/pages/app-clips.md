Candidate catalog - evidence only; not executable requirements.

# App Clips: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/app-clips
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: 20e5de90d06b600584174bb04665694e28f1c09ef2a786b65af1e1236056ffc2
Input words: 4835. Candidate rule records: 30. Exclusion blocks: 6.
Original note: p120-app-clips/app-clips.md.
Adopted source-linked rules: T-14, T-15

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## App Clips
URL: https://developer.apple.com/design/human-interface-guidelines/app-clips
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST let a lightweight entry experience complete its promised task or demo without forcing installation. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People receive the value they entered for. | check: Not screenshot-checkable: finish the advertised task without installing the full product.
- MUST limit lightweight experiences to essential task features. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People can finish with little time and attention. | check: At 1440px and 390px, inspect screens and controls against the promised task.
- MUST provide actual task value rather than a marketing-only entry surface. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People are not diverted into promotion. | check: At 1440px and 390px, trace entry to a useful completed outcome.
- MUST keep a lightweight flow linear, focused and short. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People avoid navigating a full application for one task. | check: At 1440px and 390px, inspect the complete screen sequence.
- MUST open at the context-relevant task step. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People do not repeat information supplied by the entry point. | check: Not screenshot-checkable: open distinct contextual links and verify their destinations.
- MUST make required entry content available promptly without a decorative splash. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People can act immediately. | check: At 1440px and 390px, capture initial load on a constrained network.
- MUST minimize unnecessary code, assets and follow-up downloads in time-sensitive entry flows. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People on weak connections can begin. | check: Not screenshot-checkable: measure payload and time-to-task on a fixed constrained network.
- MUST support sharing the relevant task context when the experience is shareable. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: Recipients start at the useful point. | check: Not screenshot-checkable: open a shared deep link in a fresh context.
- MUST simplify payment entry through an appropriate secure method. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People avoid long error-prone forms. | check: At 1440px and 390px, inspect checkout steps and required fields.
- MUST defer account creation until its benefit is required and minimize information when it is necessary. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People can finish a quick task. | check: At 1440px and 390px, inspect the account-free path or required-account explanation.
- MUST preserve task context and authentication when moving from lightweight to full experience. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People do not repeat work after upgrading. | check: Not screenshot-checkable: transition with a known task and account, then verify continuation.
- MUST minimize stored personal data and protect any data that must be retained. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: A temporary experience does not collect unnecessary information. | check: Not screenshot-checkable: inspect collection, storage and deletion behavior with synthetic data.
- MUST handle local data loss gracefully in an ephemeral experience. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: Returning people do not depend on state the system may remove. | check: Not screenshot-checkable: remove local state and reopen the same task.
- MUST recommend a full product only after task completion or a natural pause. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: Promotion does not block the immediate goal. | check: At 1440px and 390px, capture the offer timing through the journey.
- MUST avoid repeated or notification-based installation pressure. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People can decline without interruption. | check: Not screenshot-checkable: decline the offer and observe subsequent task and notification behavior.
- MUST explain the additional benefit of the full experience plainly. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People can decide whether an upgrade is worthwhile. | check: At 1440px and 390px, read the offer against actual additional features.
- MUST request extended notifications only when the task needs them. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People do not grant unnecessary ongoing access. | check: At 1440px and 390px, inspect the request against task duration and purpose.
- MUST send lightweight-flow notifications only for explicit task-related needs. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People receive useful follow-up rather than advertising. | check: Not screenshot-checkable: inspect all notifications from one completed task.
- MUST preserve the business identity and location represented by the entry point. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People know whom they are transacting with. | check: At 1440px and 390px, compare entry branding with the launched task.
- MUST handle people moving between multiple businesses or locations explicitly. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: One recent context does not silently replace another. | check: Not screenshot-checkable: open two business/location entry points and verify context switching.
- MUST make entry-card imagery and concise text explain the actual task. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People know what will open. | check: At 1440px and 390px, compare card promise with task outcome.
- MUST avoid essential localized copy embedded only in entry artwork. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: Text can remain readable and translated. | check: At 1440px and 390px, inspect artwork and supported-language text.
- MUST choose an action label that matches the entry result. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People know whether they will view, play or open. | check: At 1440px and 390px, compare label with the actual destination.
- MUST choose a scannable or touch-based entry code appropriate to physical reach. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People can use the code where it is displayed. | check: Not screenshot-checkable: test the entry point at its intended location and distance.
- MUST place machine-readable codes where lighting, angle, surface shape and material permit reliable scanning. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People can launch the task without repeated failed scans. | check: Not screenshot-checkable: scan physical samples under intended conditions.
- MUST keep machine-readable codes unobstructed, undistorted and separated from nearby codes. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: The intended destination scans reliably. | check: Not screenshot-checkable: test rendered and printed samples including adjacent codes.
- MUST explain what scanning or touching an entry code will accomplish. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People understand the action before using a code. | check: At 1440px and 390px, inspect the call to action beside the code.
- MUST test actual printed code samples before distribution. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: Print defects do not break the entry journey. | check: Not screenshot-checkable: scan physical output from the production process.
- MUST track code-to-destination mappings and versions when producing many entry codes. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: Printed codes lead to the correct business or task. | check: Not screenshot-checkable: compare production identifiers with decoded URLs.
- MUST retire displayed entry codes when their associated experience is inactive. | topic: App Clips | source: https://developer.apple.com/design/human-interface-guidelines/app-clips | why: People avoid broken task entry points. | check: Not screenshot-checkable: inspect active-code inventory against live destinations.
Apple-specific (excluded):
- Native-only App Clip delivery and web-view prohibition, App Store distribution and SKOverlay.
- Eight-hour notification scope, system removal/background restrictions and Sign in with Apple/Apple Pay recommendations.
- Exact card image dimensions and 30/56-character copy limits.
- Official App Clip logo/code designs, generated-only modification restrictions and legal/trademark terms.
- Exact code diameters, one-sixth cylinder limit, distance ratios, clear spaces and NFC Type 5 specifications.
- 600 ppi/300 dpi, CMYK profiles, Delta E tolerance, Apple calibration sheets and printing recommendations.
Persona and journey notes:
- People scan at a physical business, follow a shared link or try a demo with limited time and bandwidth.
- After completion they may install the full product or return later after temporary local state is gone.
COVERAGE:
- app-clips: read, 4836 words, 30 universal rules, 6 excluded
