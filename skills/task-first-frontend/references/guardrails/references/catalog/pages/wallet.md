Candidate catalog - evidence only; not executable requirements.

# Wallet: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/wallet
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-04 KST. Reader: Astra lead.
Snapshot SHA-256: f735c85e49654b1acc7ca390df99c816e65554c021cf26d270d4cd73de4fd169
Input words: 4998. Candidate rule records: 31. Exclusion blocks: 5.
Original note: p144-wallet/wallet.md.
Adopted source-linked rules: T-40

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Wallet
URL: https://developer.apple.com/design/human-interface-guidelines/wallet
Reader: Astra lead, 2026-11-04 KST
Extraction: Conditional recommendations are candidates for product-specific adoption, not universal numeric mandates.
Universal rules:
- MUST offer saving a newly created pass at the moment it becomes useful. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can retrieve the ticket or credential later. | check: At 1440px and 390px, capture creation and save action.
- MUST respect a declined save suggestion while keeping an explicit later save action available. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People retain choice without repeated prompting. | check: At 1440px and 390px, capture first decline and a later visit.
- MUST let people save related passes together. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People do not miss a connection or ticket. | check: At 1440px and 390px, inspect a multi-pass purchase and grouped save.
- MUST provide direct access to an already saved pass from related information. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can retrieve the needed credential. | check: At 1440px and 390px, capture the direct pass link and destination.
- MUST keep pass validity and expiration status accurate. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: Old credentials do not crowd or mislead. | check: At 1440px and 390px, capture valid, expired and voided states.
- MUST obtain permission before deleting a saved pass. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People do not lose access unexpectedly. | check: At 1440px and 390px, capture deletion preference or confirmation.
- MUST surface passes at relevant times and places when people consent to that behavior. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can retrieve them when needed. | check: Not screenshot-checkable: test relevant and irrelevant time/location scenarios.
- MUST keep changing pass information current and interrupt only for time-critical updates. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People receive gate changes without irrelevant alerts. | check: Not screenshot-checkable: change critical and noncritical fields and inspect update/notification behavior.
- MUST keep essential pass information visible in compact and supported device layouts. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: A smaller device still supports entry or travel. | check: At 1440px and 390px, capture collapsed and smallest supported pass views.
- MUST keep pass fronts focused on essential facts and make secondary detail accessible. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can find the needed information quickly. | check: At 1440px and 390px, inspect header, primary facts and detail entry.
- MUST make passes recognizable while preserving text contrast over their artwork. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People choose the correct credential. | check: At 1440px and 390px, compare similar passes and measure text contrast.
- MUST use device-independent instructions for cross-device passes. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: Instructions remain meaningful everywhere. | check: At 1440px and 390px, inspect interaction wording across variants.
- MUST keep essential pass text and machine-readable codes out of decorative images. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: Information remains accessible and reliably rendered. | check: At 1440px and 390px, inspect text/graphic separation; test scanning and accessibility separately.
- MUST keep pass downloads lightweight without sacrificing necessary clarity. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can retrieve credentials on weak networks. | check: Not screenshot-checkable: measure payload and download on a fixed constrained connection.
- MUST keep essential image content inside the actual crop and overlay-safe areas. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: Artwork is not cut off by barcode or footer regions. | check: At 1440px and 390px, capture all supported crops and overlays.
- MUST confirm an order immediately even when processing and fulfillment details are pending. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People know their request was received. | check: At 1440px and 390px, capture the first confirmation with honest pending details.
- MUST provide fulfillment information promptly and keep statuses synchronized with known facts. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can track the actual order. | check: Not screenshot-checkable: replay status changes and compare displayed state with source events.
- MUST use recognizable product imagery that remains clear at small sizes. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can verify what they bought. | check: At 1440px and 390px, inspect distinct product thumbnails at rendered size.
- MUST use concise localized order text and the final confirmed price. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can verify the transaction. | check: At 1440px and 390px, compare receipt price with checkout confirmation and supported locales.
- MUST provide an order-management destination usable without requiring an installed app. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People retain access from any supported context. | check: Not screenshot-checkable: open the management link without the app installed.
- MUST identify every ordered item and distinguish which items belong to each fulfillment. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can track split shipments or pickup separately. | check: At 1440px and 390px, inspect a mixed shipping/pickup order.
- MUST avoid duplicate order notifications across tracking channels. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People are not interrupted twice for one event. | check: Not screenshot-checkable: trace a status event across channels.
- MUST make merchant contact methods easy to find. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can resolve order problems. | check: At 1440px and 390px, inspect available support methods.
- MUST provide useful tracking links, pickup credentials and clear receipt instructions when needed. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can receive the order. | check: At 1440px and 390px, inspect shipping and pickup detail with required barcode; test links/scans separately.
- MUST keep fulfillment screens focused on tracking rather than unrelated promotion. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can see where their order is. | check: At 1440px and 390px, inspect information priority.
- MUST report only shipping detail actually known and identify uncertainty. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People are not misled by invented precision. | check: At 1440px and 390px, compare vague and detailed carrier data with displayed status.
- MUST explain issue and cancellation states with a reason and next step. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can recover from a problem. | check: At 1440px and 390px, capture issue and canceled orders.
- MUST offer an alternative identity-verification method when the preferred capability is unavailable. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can complete verification on their device. | check: At 1440px and 390px, capture supported and unsupported states.
- MUST request identity information at the exact task moment that needs it and explain the purpose. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People can judge a relevant request. | check: At 1440px and 390px, capture the request in its transaction context.
- MUST request only necessary identity facts and state whether and how long they are retained. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People understand disclosure and retention. | check: At 1440px and 390px, inspect requested fields and retention explanation.
- MUST label verification controls to indicate whether they complete verification or lead to more steps. | topic: Wallet | source: https://developer.apple.com/design/human-interface-guidelines/wallet | why: People know what the action accomplishes. | check: At 1440px and 390px, compare action label with the subsequent flow.
Apple-specific (excluded):
- Wallet pass APIs, semantic tags, Pass Designer and system save/suggestion mechanisms.
- Exact pass styles, field layouts, filenames, PNG scales and all point/pixel image specifications.
- WalletOrders schema, Apple Pay automatic additions and app priority lists.
- PassKit identity encryption, official verification button titles/colors and platform support.
- watchOS carousel, strip cropping and device-specific pass structure.
Persona and journey notes:
- People retrieve tickets under time pressure, follow split orders, resolve failed fulfillment or disclose a minimal identity fact.
COVERAGE:
- wallet: read, 4999 words, 31 universal rules, 5 excluded
