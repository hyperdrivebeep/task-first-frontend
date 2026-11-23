Candidate catalog - evidence only; not executable requirements.

# Writing: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/writing
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: fea86e910a57e79d5757382be21263bc1cb96f918259e21fe674168981e7641f
Input words: 1511. Candidate rule records: 54. Exclusion blocks: 6.
Original note: 03-foundations-b-2/writing.md.
Adopted source-linked rules: F-36, F-37, F-38, F-39, F-40, F-41

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Writing
URL: https://developer.apple.com/design/human-interface-guidelines/writing

Universal rules:
- MUST determine the app's voice by considering who the app is talking to. | topic: app voice | source: Getting started | why: the vocabulary and feeling of the text should fit the audience and the app's values | check: the app has a written voice description tied to its intended audience.
- MUST keep a shared list of common terms and reference it so language stays consistent. | topic: common terms list | source: Getting started | why: consistent terms make the app feel cohesive | check: the same concept uses the same term across screens and flows.
- MUST vary tone to match the situation the person is in. | topic: tone by context | source: Getting started | why: a serious situation and a celebratory one need different language | check: tone for success, routine, and error states differs appropriately.
- MUST choose words that are easily understood and convey the intended meaning. | topic: clear word choice | source: Getting started | why: unclear words slow people down | check: each label and message can be understood on first reading.
- MUST check that each word is needed. | topic: no unnecessary words | source: Getting started | why: extra words add noise and reading time | check: removing any word leaves the meaning intact or clearer.
- MUST use fewer words when fewer can convey the same meaning. | topic: brevity | source: Getting started | why: shorter text is easier to scan and understand | check: each message is as short as possible without losing meaning.
- MUST read the writing aloud when unsure whether it is clear. | topic: read aloud check | source: Getting started | why: spoken reading exposes awkward or unclear phrasing | check: the text sounds natural and clear when read aloud.
- MUST use simple, plain language. | topic: plain language | source: Getting started | why: plain language is understood by the most people | check: text avoids complex vocabulary where a simple word works.
- MUST avoid jargon. | topic: no jargon | source: Getting started | why: jargon excludes people who do not share the specialist vocabulary | check: technical terms are replaced with everyday words or explained.
- MUST avoid gendered terminology. | topic: inclusive terms | source: Getting started | why: the app should speak to as many people as possible | check: text uses neutral terms for people and roles.
- MUST write with accessibility in mind. | topic: accessible writing | source: Getting started | why: text must work for people using assistive technology | check: labels and messages make sense when read by a screen reader.
- MUST write with localization in mind. | topic: localization-ready text | source: Getting started | why: text that is hard to translate or adapt limits who can use the app | check: text avoids idioms, puns, and wording that breaks in other languages.
- MUST place the most important information first on each screen. | topic: information order | source: Best practices | why: people scan from the top and need the key point first | check: the primary message is the first text a person reads on each screen.
- MUST format text so it is easy to read. | topic: readable formatting | source: Best practices | why: well-formatted text is faster to read and understand | check: text is grouped, spaced, and structured for quick scanning.
- MUST break text across multiple screens when it conveys more than one idea. | topic: one idea per screen | source: Best practices | why: packing several ideas into one screen overloads people | check: each screen carries a limited set of ideas and the flow between screens is clear.
- MUST use active voice. | topic: active voice | source: Best practices | why: active voice makes the actor and next action clear | check: labels and instructions name who acts and what to do.
- MUST use a verb in button and link labels. | topic: verb labels | source: Best practices | why: verbs tell people what the control does | check: each button or link label starts with or is an action verb.
- MUST NOT make labels too cute or clever. | topic: plain labels | source: Best practices | why: clever labels can hide the action and confuse people | check: labels state the action directly rather than using playful phrasing.
- MUST NOT use "Click here" as link text. | topic: descriptive links | source: Best practices | why: vague link text is unhelpful, especially with screen readers | check: link text describes its destination or result.
- MUST use descriptive link text that makes sense out of context. | topic: descriptive link text | source: Best practices | why: screen reader users often navigate by link lists | check: each link reads clearly on its own, such as "Learn more about the topic".
- MUST use consistent language patterns across the app. | topic: language patterns | source: Best practices | why: repeated patterns build familiarity and make writing easier | check: similar actions and messages follow the same wording structure.
- MUST choose one capitalization style for each UI element type and apply it consistently. | topic: capitalization consistency | source: Best practices | why: a consistent style reflects the app's voice and looks deliberate | check: all alerts, headlines, and other element types each follow a single style.
- MUST use consistent labels for actions across the steps of a multi-step flow. | topic: flow action labels | source: Best practices | why: changing labels between steps makes people unsure what comes next | check: the same action uses the same label on every step of the flow.
- MUST begin a multi-step flow with a clear start label, such as "Get Started". | topic: flow start label | source: Best practices | why: a clear start signals that a process is beginning | check: the first control of a flow names the start of the process.
- MUST make the end of a flow clear with completion language, such as "Done". | topic: flow completion label | source: Best practices | why: people need to know when a process is finished | check: the final step of a flow uses explicit completion wording.
- MUST use possessive pronouns sparingly. | topic: sparing possessives | source: Best practices | why: possessives are often unnecessary and make text longer | check: labels like "Favorites" are used where context already implies ownership.
- MUST use possessive pronouns consistently and without switching perspective when they are used. | topic: consistent pronoun perspective | source: Best practices | why: mixing perspectives confuses who is being addressed | check: a screen or app uses one pronoun perspective throughout.
- MUST NOT use "we" in app text. | topic: no "we" | source: Best practices | why: it is often unclear who "we" refers to | check: no label or message uses "we" to refer to the company or the app.
- MUST keep language consistent across all devices the app runs on. | topic: cross-device consistency | source: Best practices | why: the same product should use the same terms everywhere | check: shared terms and labels match between device versions.
- MUST describe gestures correctly for each device, such as "tap" on touch devices instead of "click". | topic: device-correct gestures | source: Best practices | why: wrong gesture words mislead people about how to interact | check: instructions name the input method that the device actually uses.
- MUST keep text brief on small screens. | topic: brevity on small screens | source: Best practices | why: small screens have little room for text | check: text on compact screens is limited to what is necessary.
- MUST keep text brief on large screens. | topic: brevity on large screens | source: Best practices | why: text must be large to be read from a distance | check: text on large displays is short enough to read from the expected viewing distance.
- MUST consider who will see the text on shared screens and address that audience. | topic: shared-screen audience | source: Best practices | why: several people may read a shared screen at once | check: text on shared displays suits the group that will see it.
- MUST provide clear next steps on any blank screen. | topic: empty-state next steps | source: Best practices | why: an empty screen with no guidance can feel daunting | check: each empty state tells people what they can do next.
- MUST keep empty-state content useful and relevant to the context. | topic: useful empty states | source: Best practices | why: empty states can welcome people but must still help them | check: empty-state text gives relevant guidance rather than filler.
- MUST give a button or link for the next action on a blank screen when possible. | topic: empty-state action control | source: Best practices | why: a direct control removes the need to figure out the next step | check: an empty state includes a control that starts the suggested action when one is possible.
- MUST NOT show crucial information on an empty state that could disappear later. | topic: no critical info in empty states | source: Best practices | why: empty states are usually temporary, so important information would vanish | check: critical content is not shown only in an empty state.
- MUST help people avoid errors before they happen. | topic: error prevention | source: Best practices | why: preventing an error is better than reporting one | check: the interface guides input to valid values before a failure occurs.
- MUST display an error message as close to the problem as possible. | topic: error placement | source: Best practices | why: people need to see which element caused the problem | check: each error message sits next to the element that failed.
- MUST NOT blame people in error messages. | topic: no blame | source: Best practices | why: blaming language increases frustration | check: error text describes the problem without accusing the person.
- MUST state what the person can do to fix an error. | topic: actionable errors | source: Best practices | why: an error without a fix leaves people stuck | check: each error message names a concrete corrective action.
- MUST NOT use interjections such as "oops" or "uh-oh" in error messages. | topic: no interjections | source: Best practices | why: such words can sound insincere and make errors feel trivial or unclear | check: error messages use direct, plain wording without playful exclamations.
- MUST rethink the interaction when language alone cannot resolve an error that is likely to affect many people. | topic: rethink recurring errors | source: Best practices | why: a recurring error often signals a design problem, not a wording problem | check: frequent errors trigger a review of the interaction itself.
- MUST choose the delivery method based on the urgency and importance of the message. | topic: delivery method | source: Best practices | why: the same message needs different channels depending on how urgent it is | check: each message's channel matches its urgency and whether immediate action is needed.
- MUST use a tone appropriate to the situation in each message. | topic: message tone | source: Best practices | why: tone must fit the context in which someone sees the message | check: each message's tone matches its urgency and the person's likely state.
- MUST label settings as practically as possible. | topic: practical setting labels | source: Best practices | why: clear labels help people find the setting they need | check: each setting label states what the setting controls in plain words.
- MUST add an explanation to a setting when its label alone is not enough. | topic: setting explanations | source: Best practices | why: some settings need context to be understood | check: settings whose labels are ambiguous include a short description.
- MUST describe what a setting does when it is turned on, not when it is turned off. | topic: describe the on state | source: Best practices | why: people can infer the opposite state, so describing both is unnecessary | check: setting descriptions explain the enabled behavior only.
- MUST provide a direct link or button to a setting instead of describing where it is located. | topic: direct setting links | source: Best practices | why: directions to a setting's location are easy to get wrong and tedious to follow | check: references to a setting include a control that opens it.
- MUST label every text field clearly. | topic: field labels | source: Best practices | why: people must know what each field asks for | check: every input field has a visible or accessible label.
- MUST use hint or placeholder text that shows the expected format of the input. | topic: field format hints | source: Best practices | why: an example or description shows how to enter the information correctly | check: each field whose format matters shows an example or a format description.
- MUST show field errors right next to the field they concern. | topic: inline field errors | source: Best practices | why: people need to connect the error with the input that caused it | check: each field error appears adjacent to its field.
- MUST tell people how to enter the information correctly instead of scolding them for breaking rules. | topic: instructive field errors | source: Best practices | why: instructions help people succeed, while scolding discourages them | check: field error text states the correct input rather than criticizing the entry.
- MUST NOT use robotic error messages that give no helpful information, such as "Invalid name". | topic: no robotic errors | source: Best practices | why: vague messages leave people unable to fix the problem | check: each error message explains what is wrong and what a valid entry looks like.

Apple-specific (excluded):
- The Apple Watch examples of straightforward and congratulatory tone.
- VoiceOver references and the links to the Apple Watch, iPhone, iPad, and TV pages.
- The Apple Watch Handwashing Timer setting example.
- Named Apple components and destinations, including buttons, notifications, alerts, action sheets, settings, and text fields pages.
- The "Platform considerations" statement that no additional considerations apply to Apple platforms.
- Related links, the Videos section, the developer localization link, and the change log entries.

Persona and journey notes:
- People in a serious situation, such as a failed payment, need direct and calm language, while people who reach a goal can receive light, congratulatory language.
- People with a screen reader rely on link and button labels to navigate, so each label must stand alone.
- People who are new to an app benefit from clear start and finish labels in each process.
- People who share a screen with others need text that the whole group can understand at a glance.

COVERAGE: Full page read, including Getting started, Best practices, Platform considerations, Resources, Videos, and Change log. 54 universal rules extracted.
