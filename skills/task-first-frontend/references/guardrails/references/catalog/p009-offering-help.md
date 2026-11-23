Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: p009-offering-help

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Offering help (36 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/offering-help

- [OH-01] MUST tie each help item to the exact action or task the person is doing right now.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: help arrives when it can be used, not as a detour from the task
  Check@1440/390: 1440px and 390px screenshots of the help next to the control it describes; the help text must name that control's action
- [OH-02] MUST make contextual help easy to dismiss or skip.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: a person who does not need the help keeps their flow
  Check@1440/390: 1440px and 390px screenshots each show a visible dismiss or skip control on the help view
- [OH-03] MUST match the help format to the task: a short inline view for a one- or two-step task, a tutorial for a complex multistep goal.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person gets the depth the task needs and no more
  Check@1440/390: not screenshot-checkable: depends on the step count of the task flow, which a reviewer confirms in the app
- [OH-04] MUST keep help content appropriate to the current context and state.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person never reads advice that does not apply to their screen
  Check@1440/390: 1440px and 390px screenshots of the same help in two app states; the copy and images change to fit each state
- [OH-05] MUST use images and terms that match the input the person is using now.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person sees the input method they actually have
  Check@1440/390: 1440px and 390px screenshots; any illustration shows the input the app expects at that width
- [OH-06] MUST NOT tell people to use a gesture or control the current device does not offer.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person is not sent looking for a control that is not there
  Check@1440/390: 1440px and 390px screenshots; the help copy names only inputs that fit that width (no "click" copy on a 390px touch view)
- [OH-07] MUST NOT explain how a standard component or pattern works inside help content.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person reads only what is new to them in this app
  Check@1440/390: 1440px and 390px screenshots; the help text describes only what this app's element does
- [OH-08] MUST orient people to a unique control or a nonstandard input with an animation or graphic before any long text.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person understands the control faster than from a paragraph
  Check@1440/390: 1440px and 390px screenshots; a graphic or diagram for the unique control appears above any body text block
- [OH-09] MUST keep all help content inclusive.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: every person can use the help, not only some
  Check@1440/390: not screenshot-checkable: a wording and imagery review against the inclusion guidance the page links to
- [OH-10] MUST present a tip as a small, transient view that briefly describes how to use one feature.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person learns one feature and returns to work
  Check@1440/390: 1440px and 390px screenshots show the tip as one small overlay or inline element that describes one feature
- [OH-11] MUST use a popover tip when the content flow must stay unchanged.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person keeps their place in the content
  Check@1440/390: 1440px and 390px screenshots; the tip floats over the content and does not push it down
- [OH-12] MUST use an inline tip when the surrounding information must stay visible.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person can read nearby information while learning
  Check@1440/390: 1440px and 390px screenshots; the tip sits in the layout and the surrounding content stays on screen
- [OH-13] MUST use an annotation-style inline tip when the tip points at one specific UI element.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person can see which element the tip means
  Check@1440/390: 1440px and 390px screenshots; the tip has a visible connection to the element it names
- [OH-14] MUST use a hint-style tip when the tip is not tied to one UI element.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: general guidance does not pretend to point at a control
  Check@1440/390: 1440px and 390px screenshots; the tip points at no element and reads as general guidance
- [OH-15] MUST NOT show a tip for a feature that needs more than three actions.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: a feature too complex for a tip is not wasted on a short hint
  Check@1440/390: not screenshot-checkable: depends on the step count of the feature's flow, which a reviewer confirms in the app
- [OH-16] MUST limit a tip to one or two sentences.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person reads the tip in a glance
  Check@1440/390: 1440px and 390px screenshots; the tip body is one or two sentences
- [OH-17] MUST write tip copy that is short, direct, and action-oriented.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person knows what to do next
  Check@1440/390: not screenshot-checkable: a copy review of wording, which the screenshot text supports
- [OH-18] MUST NOT put promotional content in a tip: anything that advertises, sells, or does not fit what the person is doing.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person is not sold to in the middle of a task
  Check@1440/390: 1440px and 390px screenshots; the tip text has no advertising, sales or off-context offers
- [OH-19] MUST NOT put content about a different feature or user flow in a tip.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person learns about the feature they are using
  Check@1440/390: 1440px and 390px screenshots; the tip text covers one feature only
- [OH-20] MUST set eligibility rules so a tip shows only to people who might benefit from it.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: people who do not need the tip are not interrupted
  Check@1440/390: not screenshot-checkable: depends on user parameters and history; a reviewer checks the rule in code
- [OH-21] MUST NOT show a tip for a feature the person has already used.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: an experienced person is not shown what they already know
  Check@1440/390: not screenshot-checkable: depends on usage history; a reviewer checks with an account that has used the feature
- [OH-22] MUST base tip eligibility on parameters or events.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the tip appears at the moment it is relevant
  Check@1440/390: not screenshot-checkable: depends on the event or parameter the code reads
- [OH-23] MUST set a display frequency when the app has more than one tip, such as once every 24 hours (HIG example).
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person is not flooded with tips
  Check@1440/390: not screenshot-checkable: depends on elapsed time between sessions
- [OH-24] MUST NOT repeat the same image in a tip and in the UI when the tip connects directly to that image.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the screen stays uncluttered and the link stays clear
  Check@1440/390: 1440px and 390px screenshots; the image appears once, either in the tip or in the UI
- [OH-25] MUST use a button in a tip to lead to the settings or more information when the feature has settings or more to learn.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person can act on the tip without searching
  Check@1440/390: 1440px and 390px screenshots; the button is visible in the tip and its label names the destination
- [OH-26] MUST describe only the control the person points at in a tooltip, not nearby controls or the larger task.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person gets the answer to the question they asked
  Check@1440/390: 1440px screenshot taken while hovering the control; the tooltip names only that control; 390px: not screenshot-checkable: tooltips need pointer hover, which touch width does not have
- [OH-27] MUST state the action or task the control starts in its tooltip.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person knows what will happen before they click
  Check@1440/390: 1440px hover screenshot; the tooltip says what the control does when used
- [OH-28] MUST NOT repeat the control's name in its tooltip.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the tooltip space carries new information
  Check@1440/390: 1440px hover screenshot; the tooltip text does not repeat the control's visible label
- [OH-29] MUST keep a tooltip to a maximum of 60 to 75 characters (HIG figure; localization changes length).
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the tooltip is read at a glance and is not clipped
  Check@1440/390: 1440px hover screenshot; count the tooltip characters against the limit; 390px: not screenshot-checkable: tooltips need pointer hover
- [OH-30] MUST use sentence case in tooltips.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the tooltip reads as casual and approachable
  Check@1440/390: 1440px hover screenshot; only the first word and proper nouns are capitalized
- [OH-31] MUST omit ending punctuation on a tooltip fragment unless the app's style requires it.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the tooltip stays consistent and compact
  Check@1440/390: 1440px hover screenshot; no trailing period on a fragment
- [OH-32] MUST keep tooltips brief, preferably as a sentence fragment without articles (HIG: consider).
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person reads the point in one glance
  Check@1440/390: 1440px hover screenshot; the tooltip reads as a fragment with no articles
- [OH-33] MUST simplify the control's design, not lengthen its tooltip, when a control needs a lot of explanation.
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the control becomes understandable without reading
  Check@1440/390: not screenshot-checkable: a design decision; a reviewer checks that tooltip length stays within the limit above
- [OH-34] MUST show tooltip text that matches the current state when a control's action changes with its state (HIG: consider).
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the tooltip describes what the control does now
  Check@1440/390: 1440px hover screenshots in two states; the tooltip text differs to match each state
- [OH-35] MUST begin an action tooltip with a verb (HIG: often works well).
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the action is clear at once
  Check@1440/390: 1440px hover screenshot; the first word of an action tooltip is a verb
- [OH-36] MUST include the image or symbol people already link to the feature in its tip when one exists (HIG: consider).
  HIG: Offering help <https://developer.apple.com/design/human-interface-guidelines/offering-help> | Why: the person connects the tip to the feature they know
  Check@1440/390: 1440px and 390px screenshots; the tip shows the feature's known image or symbol

# Exclusions and persona notes

### Offering help
Apple-specific, excluded:
- Siri Remote, tvOS and game-controller examples, including the rotated-remote orientation example.
- iPhone "tap" and Mac "click" wording examples.
- TipKit, NSHelpManager and help(_:) developer APIs.
- macOS help-tag naming and visionOS look-to-reveal tooltip behavior.
- Filled-variant symbol style (Apple symbol set), and the Mac Help menu cross-reference.
Persona and journey notes:
- A person new to a feature, or looking for a faster way to finish a task, is the audience for tips.
- A person who has already used a feature should not be shown its tip.
- A person doing a simple one- or two-step task gets an inline view; a person doing a complex multistep goal gets a tutorial.
- A person using a nonstandard input or a rotated remote needs quick orientation through graphics.
- A person who points at one control asks how that control works, not how nearby controls or the larger task works.
- Any person may not need the help at all and must be able to avoid it.
