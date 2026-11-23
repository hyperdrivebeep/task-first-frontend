# Read-only HTTP evidence for the landing-page paper check

Date: 2026-11-04 KST.
Reader: Astra, single context, no children.
Live HTML captured: 2026-11-04 12:05:56 KST.
Relevant-asset reading completed: 2026-11-04 12:09:18 KST.

## Provenance and completeness

- Requested and final HTML URL: https://gounmaeum-landing.vercel.app/
- Live result: HTTP 200; `text/html; charset=utf-8`; 54,770 UTF-8 bytes; 46,260 characters; 678 newline-delimited lines; 3,414 trimmed whitespace-delimited words.
- ETag: `W/"a073e53f11e4eb436f8262fbcd0f78fe"`.
- SHA-256: `3a6a1227513c04db591815891dee419cb572d84a99d395cd9956d564c8d583f0`.
- The complete live HTML exactly matched `/Volumes/toshiba/work/ui-guardrails-1103/gounmaeum-landing.html`. This establishes equality at retrieval, not the earlier snapshot's collection date or the deployment's age.
- The first HTML webfetch returned HTTP 200 but truncated its tool output at about 50 KB. A separate read-only HTTP GET recovered the entire response, including the inquiry section and footer. No conclusion relies on the truncated tail.
- The supplied snapshot was consumed completely in line ranges 1-210, 211-450, and 451-678. The long SVG line 75 was reread in wrapped chunks. Complete-response equality makes those same source lines applicable to the live HTML.
- Source-reading batches stayed below 8,000 words. The main scripts were consumed as site/form together and motion separately; configuration/story/footer together; product CSS in ranges 1-380 and 381-755. Long output lines were wrapped rather than silently omitted.
- This file records metadata and selected evidence, not a full archive of downloaded assets. The untouched supplied HTML snapshot is the complete local equivalent of the retrieved HTML.

## Relevant HTTP assets

All entries below returned HTTP 200. No script was executed.

| URL | Why read | UTF-8 bytes | Lines | SHA-256 |
| --- | --- | ---: | ---: | --- |
| https://gounmaeum-landing.vercel.app/scripts/site.js | Config injection, navigation, and inquiry CTA routing | 8514 | 169 | `c7593f4a46eaea5d608eee46f3aff476256a18a0fe24b37f1a0218b377fcade5` |
| https://gounmaeum-landing.vercel.app/scripts/form.js | Determine whether a non-call inquiry flow is mounted | 8152 | 199 | `1784d01b3fe2386000b9b2814644bd4e8a7d76cd3357d4ea87b96850bfd199ca` |
| https://gounmaeum-landing.vercel.app/scripts/motion.js | Acknowledge reduced-motion, static, and manual-reading paths | 20740 | 454 | `b76d8d0017341df6b95daba6982af130d58a2030fea9b5fb7461138b521e4e74` |
| https://gounmaeum-landing.vercel.app/scripts/site-config.js | Public contact, policy, launch, and endpoint configuration | 2684 | 44 | `43d320078837ce202fef64e8a1066a9c30b37eacfb106bac656ba1e1abf75348` |
| https://gounmaeum-landing.vercel.app/styles/product.css | Inquiry, pricing, navigation, and reduced-motion source rules | 40330 | 755 | `a01678c83ee566784e09978b77e05587631489ed5b05eaf28591b5bfd2d0dce7` |
| https://gounmaeum-landing.vercel.app/styles/story.css | Static story presentation and reduced-motion backstop | 6389 | 135 | `6953fa582d84f26de4bcf64f88221ee0354f2c26af775a81fb44001bf7374cee` |
| https://gounmaeum-landing.vercel.app/styles/footer.css | Distinguish footer comments/styles from actual policy links | 2577 | 41 | `8cc676cbbdfff4e72c04efc244993129ffe8a45b7fc5db9174669b0d2e5f2b87` |

Fonts, images, the linked PDF, unrelated CSS, motion math modules, and the odometer dependency were not fetched. Their content or behavior is not part of the findings.

## E1: Availability and planning evidence

URL: https://gounmaeum-landing.vercel.app/

- HTML line 102, `.hero-status`: exact excerpt `오픈 예정`.
- HTML line 351, `#flow .story-footnote`: exact excerpt `결제대행사 심사를 마친 뒤부터`.
- HTML lines 147 and 400, `.mock-caption`: exact excerpt `화면 예시`.
- HTML lines 583-586, `#onboarding .steps`: the described sequence runs from inquiry through registration and setup to employee access.
- HTML line 611, `#faq .faq-item:nth-child(6)`: launch is being prepared; timing and adoption procedures are to be explained by phone.
- HTML lines 623 and 627-639, `#apply`: the inquiry promises information on launch timing and adoption.
- Config URL: https://gounmaeum-landing.vercel.app/scripts/site-config.js, line 7: `openLabel: null`.

These are explicit future-launch and example disclosures. The evidence does not show a hidden claim that the illustrated product is already live.

## E2: Urgent-help routing evidence

URL: https://gounmaeum-landing.vercel.app/

- HTML line 164, `#services .bento-tile-feature p`: exact excerpt `24시간 접수해요.`
- HTML lines 420-422, `#care .mechanic-step`: company adoption precedes the described round-the-clock reception and later payment.
- HTML line 608, `#faq .faq-item:nth-child(3)`: night/weekend reception is described, while company-supported items follow administrator approval.
- HTML line 435, `#care a[data-interest="care"]`: the care-related action points to the adoption inquiry section.
- HTML line 636, `#apply-contact .apply-contact-label`: exact excerpt `도입 문의 대표번호`.
- HTML lines 637 and 639 provide the same telephone destination; the footer repeats it at line 666.

This establishes an ambiguity in the published routing label, not that the number cannot handle urgent cases.

## E3: Non-call inquiry evidence

URL: https://gounmaeum-landing.vercel.app/

- HTML line 639, `#apply-contact a.button`: exact attribute `href="tel:15886764"`.
- HTML line 95, `#intro a[data-download]`: a PDF brochure is offered as an information download.
- HTML lines 627-632, `#apply .apply-steps`: inquiry starts with a call, then an operations-team contact, then consultation and company registration.
- Complete source inventory: 20 anchors; 11 distinct href values; 3 telephone links; 0 mailto links; 0 form elements; 0 elements bearing `data-apply-form`.
- All six adoption/care inquiry anchors at lines 60, 93, 435, 593, 656, and 674 point to the same inquiry section.

URL: https://gounmaeum-landing.vercel.app/scripts/form.js

- Lines 188-189 select `[data-apply-form]` and mount only if that element exists.
- Lines 147-150 describe a preview branch for an unset endpoint, but that branch is not evidence of a visible form on the current page.

URL: https://gounmaeum-landing.vercel.app/scripts/site-config.js

- Line 39: `formEndpoint: null`.

The accurate observation is absence of a mounted asynchronous inquiry path in the inspected page, not a broken backend or a failed submission.

## E4: Privacy evaluation evidence

URL: https://gounmaeum-landing.vercel.app/

- HTML lines 267 and 294, `#flow [data-story-panel]`: document-derived obituary information and recipient selection are described.
- HTML lines 404-406, `#console .feature-list`: roster import, roles, and accumulated records are described.
- HTML lines 566-569, `#operator .trust-item`: phone authentication, departing-employee access removal, recipient restriction, and a limited publication period are described.
- HTML line 569, `#operator .trust-item:nth-child(4) h3`: exact excerpt `공개 기간 제한`.
- HTML lines 654-657, `.footer-nav .footer-links`: the actual link list contains only the adoption inquiry.

URL: https://gounmaeum-landing.vercel.app/scripts/site-config.js

- Lines 33-35: `privacyPolicyUrl: null`, `termsUrl: null`, `privacyRetention: null`.

URL: https://gounmaeum-landing.vercel.app/styles/footer.css

- Lines 2-4 mention intended policy links in a comment. A comment and link styles do not create a policy link in the delivered HTML.

The evidence concerns missing decision-support detail on this landing page. It does not establish data exposure, actual retention behavior, or legal noncompliance.

## E5: Total-cost evaluation evidence

URL: https://gounmaeum-landing.vercel.app/

- HTML lines 89-90, `#intro .money-block`: the platform-fee claim has an adjacent explanation identifying who pays for care and company-funded items.
- HTML lines 454, 468, 482, and 496, `#products .plan-price`: the four published package prices are KRW 1.99 million, 2.99 million, 3.99 million, and 2.99 million.
- HTML line 463, the first plan's facility/cremation row: exact excerpt `별도`. Equivalent exclusions appear in the next two plans.
- HTML lines 505 and 512-514, `#products .plans-notes` and the no-wake plan: reimbursement coverage, excess costs, and detailed conditions are partly deferred to consultation.
- HTML lines 532-539, `#cost`: company platform fees, employee/family care costs, and company-funded payments are distinguished.
- HTML line 539, `#cost .cost-notes .section-note`: exact excerpt `송금 수수료`; detailed conditions are deferred to consultation.

The evidence supports an incomplete all-in estimate journey, not a claim that the page hides all charges or falsely says every service is free.

## Existing safeguards to preserve

- Source labels explicitly distinguish product examples and future launch; the payment-processor dependency is disclosed.
- Phone inquiry is an intentional published route, and a brochure download is offered.
- HTML lines 211-212 expose a story-skip route and a manual-reading control in the source.
- Motion JS lines 9, 45-47, 223-246, 274-279, and 289-295 implement reduced-motion/static conditions and the reader-mode toggle.
- Story CSS lines 31-40 and 124-132 provide static layout and a reduced-motion backstop. Product CSS lines 736-741 includes a reduced-motion guard.
- No runtime verification of these safeguards was performed. They must not be reported as missing, and their source presence is not a visual or accessibility PASS.
