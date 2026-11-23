Legacy candidates - not requirements; use pages/ and the curated rule files.

# HIG extraction catalog: 03-foundations-b-2

Raw extraction by a note-taking child (claude-haiku-5-5, subscription) on 2026-11-03 KST from the locally saved HIG pages. Curated guardrails in ../rules-*.md are chosen from here.

## Motion (20 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/motion

- [MOT-01] MUST NOT add motion for its own sake; motion must support the experience without overshadowing it.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: gratuitous or excessive animation distracts people and can make them feel disconnected or physically uncomfortable
  Check@1440/390: every animation can name the information or feedback it conveys.
- [MOT-02] MUST make motion optional.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: not everyone can or wants to experience motion
  Check@1440/390: a person can avoid or reduce the custom motion.
- [MOT-03] MUST NOT use motion as the only way to communicate important information.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: people who cannot or do not want motion would miss important information
  Check@1440/390: every important state change is also conveyed without motion.
- [MOT-04] MUST supplement visual feedback with alternative channels, such as audio and haptics, where the platform supports them.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: keeps feedback available to people who do not experience the motion
  Check@1440/390: each motion-only cue has a non-visual counterpart.
- [MOT-05] MUST make feedback motion follow people's gestures and expectations, and MUST NOT use feedback motion that contradicts them.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: feedback that does not make sense disorients people (example: a view revealed by sliding down must not be dismissed by sliding it to the side)
  Check@1440/390: the motion direction and path match the triggering gesture and its reverse.
- [MOT-06] MUST keep feedback animations brief and precise, tied to the specific action.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: brief, precise animation feels lightweight and conveys information without distraction
  Check@1440/390: each feedback animation is short and plays only on its triggering action.
- [MOT-07] MUST NOT add custom motion to UI interactions that occur frequently (the page says "generally avoid").
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: people spend extra time attending to unnecessary motion on every interaction
  Check@1440/390: custom elements used in frequent interactions add no motion beyond the normal system behavior.
- [MOT-08] MUST let people cancel motion.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: people need control over animations they see repeatedly
  Check@1440/390: a running animation can be cancelled by the person.
- [MOT-09] MUST NOT make people wait for an animation to complete before they can do anything, especially when they must experience it more than once.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: waiting for animations wastes time and frustrates repeated use
  Check@1440/390: input is accepted while the animation plays.
- [MOT-10] MUST make game motion look great by default on each platform supported.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: people should enjoy the game without first changing settings
  Check@1440/390: default settings on each target platform give acceptable motion with no user changes.
- [MOT-11] MUST use each device's graphics capabilities to enable default settings for each supported platform.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: defaults should match what each device can render
  Check@1440/390: defaults are set per platform from its graphics capability and need no manual setup.
- [MOT-12] MUST aim for a consistent frame rate, typically 30 to 60 fps, in games.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: a consistent frame rate typically produces a smooth, visually appealing experience
  Check@1440/390: measured frame rate stays steady within the 30 to 60 fps range on each platform.
- [MOT-13] MUST let people customize the visual experience of a game to optimize performance or battery life.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: people have different performance and battery needs (example given: switching power modes when an external power source is detected)
  Check@1440/390: settings exist that trade visual quality for performance or battery life.
- [MOT-14] MUST NOT show motion at the edges of a person's field of view in immersive or spatial interfaces.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: peripheral motion distracts and can cause discomfort by making people feel they or their surroundings are moving
  Check@1440/390: moving content stays out of the peripheral area of immersive views.
- [MOT-15] MUST match the brightness of a peripherally moving object to the rest of the visible content when such motion is needed.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: mismatched brightness draws attention and adds discomfort
  Check@1440/390: peripheral moving objects have brightness similar to the visible content.
- [MOT-16] MUST help people perceive the movement of large virtual objects without making them think they or their surroundings are moving; for example, increase translucency or lower contrast.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: a large object that fills the view is perceived as part of the surroundings
  Check@1440/390: large moving objects use reduced contrast or increased translucency.
- [MOT-17] MUST NOT show movement that communicates nothing useful when relocating an object; fade it out before moving and fade it back in after it reaches the new location.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: people naturally watch movement, so movement that carries no information is distracting
  Check@1440/390: relocations without informational movement use a fade-out and fade-in.
- [MOT-18] MUST NOT let people rotate a virtual world (the page says "in general").
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: rotating the world upsets the sense of stability, even when the person controls the rotation
  Check@1440/390: no user-controlled rotation of the whole virtual environment.
- [MOT-19] MUST NOT show objects that oscillate in a sustained way, particularly at a frequency of about 0.2 Hz.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: people can be very sensitive to this frequency
  Check@1440/390: no sustained oscillating object runs near 0.2 Hz.
- [MOT-20] MUST keep the amplitude low when an object has to oscillate.
  HIG: Motion <https://developer.apple.com/design/human-interface-guidelines/motion> | Why: low amplitude reduces discomfort when oscillation is required
  Check@1440/390: the rendered oscillation amplitude is low.

## Privacy (40 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/privacy

- [PRI-01] MUST request access only to data the app actually needs.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: asking for more data than a feature needs makes it hard for people to trust the app
  Check@1440/390: every requested data type is used by a feature that needs it.
- [PRI-02] MUST NOT ask for data before a person shows interest in the feature that uses it.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: premature requests make people distrust the app
  Check@1440/390: each request appears when the related feature is first used or requested.
- [PRI-03] MUST make permission requests as specific as possible so people have precise control over their data.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: precise control lets people decide with confidence
  Check@1440/390: each request names one specific data type or resource.
- [PRI-04] MUST be transparent about the privacy-related data and resources the app requires.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: people are less comfortable sharing data when they do not know what is needed
  Check@1440/390: the app states which privacy-related data and resources it requires.
- [PRI-05] MUST be transparent about how the app collects and uses people's data.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: people are less likely to share data they do not understand
  Check@1440/390: the app explains the purpose of each data collection.
- [PRI-06] MUST disclose privacy practices and privacy-relevant data collection to people before they download or commit to the app.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: people use these details to make an informed decision before they download
  Check@1440/390: privacy details are visible before download or first use.
- [PRI-07] MUST respect people's choices to use system-level privacy protections, such as relay addresses that hide a person's real email address.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: people may deliberately limit what the app can see
  Check@1440/390: the app works correctly and honors data handling when a privacy protection is enabled.
- [PRI-08] MUST understand and meet every obligation that applies to tracking people across apps and services.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: tracking is a sensitive issue
  Check@1440/390: tracking obligations are identified and implemented before tracking starts.
- [PRI-09] MUST process data on the device where possible instead of sending it to a remote server.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: avoids lengthy and potentially risky round trips to a remote server
  Check@1440/390: each data-processing step is evaluated for on-device feasibility.
- [PRI-10] MUST use platform-provided encryption and key management for stored data where the platform offers them.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: system-provided protections are maintained by the platform and reduce risk
  Check@1440/390: sensitive stored data uses platform encryption and key management where available.
- [PRI-11] MUST use platform-provided security technologies to store information locally, authorize people for specific operations, and transport information across a network.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: people's information must stay protected in storage, authorization, and transit
  Check@1440/390: local storage, authorization, and network transport each use a platform-provided security technology.
- [PRI-12] MUST request permission before accessing personal data, including location, health, financial, contact, and other personally identifying information.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: personal data requires the person's permission
  Check@1440/390: each access to personal data is gated by a permission request.
- [PRI-13] MUST request permission before accessing user-generated content, such as emails, messages, calendar data, contacts, gameplay information, media activity, smart-home data, and audio, video, and photo content.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: user-generated content requires the person's permission
  Check@1440/390: each access to user-generated content is gated by a permission request.
- [PRI-14] MUST request permission before accessing protected resources, such as nearby wireless peripherals, home automation features, network connections, and local networks.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: protected resources require the person's permission
  Check@1440/390: each access to a protected resource is gated by a permission request.
- [PRI-15] MUST request permission before using device capabilities such as the camera and microphone.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: device capabilities require the person's permission
  Check@1440/390: each use of the camera or microphone is gated by a permission request.
- [PRI-16] MUST request permission only when the app clearly needs the data or resource.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: people are suspicious of requests for personal information or device access without an obvious need
  Check@1440/390: each request has an obvious, stated need in the current context.
- [PRI-17] MUST NOT request permission at launch unless the data or resource is required for the app to function.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: launch-time requests are only welcome when their purpose is obvious
  Check@1440/390: every launch-time request is required for core function.
- [PRI-18] MUST write permission explanations that clearly describe how the app uses the requested ability, data, or resource, and why.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: the explanation is what people read when deciding
  Check@1440/390: each explanation states how and why the app uses the requested item.
- [PRI-19] MUST write each permission explanation as one brief, complete, active sentence that is specific and easy to understand, in sentence case, ending with a period.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: the example "The app records during the night to detect snoring sounds." is active and specific
  Check@1440/390: each explanation is one complete active sentence with sentence case and a final period.
- [PRI-20] MUST NOT write permission explanations that are vague, passive, or bare commands without a justification.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: "Microphone access is needed for a better experience." is vague and "Turn on microphone access." gives no reason
  Check@1440/390: each explanation gives a concrete reason and is not a bare command or a vague passive phrase.
- [PRI-21] MUST include only one button on a custom screen shown before a permission request, and that button must clearly open the request.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: extra buttons can divert people from making their own choice
  Check@1440/390: the pre-permission screen has exactly one button and it opens the request.
- [PRI-22] MUST NOT include additional actions on a custom screen shown before a permission request, unless needed to obtain legal consent.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: options such as close or cancel can keep people from ever seeing the request
  Check@1440/390: the only action on the screen opens the request, unless legal consent requires more.
- [PRI-23] MUST NOT title a custom pre-permission button with "Allow" or a similar term; MUST use a term such as "Continue" or "Next" that says the button opens the request.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: a custom button that looks like the allow choice can lead people to accept without meaning to
  Check@1440/390: the custom button label clarifies that it opens the request.
- [PRI-24] MUST NOT show a custom screen before a tracking or permission request that could confuse or mislead people.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: people sometimes tap quickly to dismiss alerts without reading them
  Check@1440/390: the screen is clear about what happens next and does not mislead.
- [PRI-25] MUST NOT offer incentives to influence a tracking request.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: incentives are a prohibited manipulation in tracking requests
  Check@1440/390: no reward, benefit, or inducement is attached to accepting tracking.
- [PRI-26] MUST NOT design a custom screen that imitates a permission request.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: a screen that looks like a request confuses people about who is asking
  Check@1440/390: custom screens are visibly distinct from system permission requests.
- [PRI-27] MUST NOT show an image of a permission alert in a custom screen.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: an image of an alert is a prohibited design that mimics the real request
  Check@1440/390: no custom screen contains a picture of a permission alert.
- [PRI-28] MUST NOT annotate the screen behind a system permission alert.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: annotations on the screen behind the alert steer the person's choice
  Check@1440/390: nothing is drawn over or next to the content behind an alert.
- [PRI-29] MUST NOT design custom screens that take advantage of people's quick dismissal of alerts to influence their choices.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: such designs use hasty taps to produce choices people did not intend
  Check@1440/390: custom messaging before a request does not rely on hasty dismissal to succeed.
- [PRI-30] MUST let people review and change their permission choices later.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: people need to be able to change a choice after they have made it
  Check@1440/390: there is a way for people to see and change each permission choice.
- [PRI-31] MUST keep custom permission controls legible, with no low-contrast color combinations and no excessive translucency.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: a control people must trust has to be readable
  Check@1440/390: custom control colors meet contrast needs and translucency stays limited.
- [PRI-32] MUST make text in custom permission controls fit without truncation at all accessibility text sizes and in every translated language.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: truncated text makes a control's purpose unclear
  Check@1440/390: the label fits at the largest accessibility size and in each supported language.
- [PRI-33] MUST use passwordless authentication where possible instead of relying solely on passwords.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: passwords alone are weaker protection
  Check@1440/390: each authentication flow offers passwordless sign-in where the platform supports it.
- [PRI-34] MUST require two-factor authentication whenever passwords must still be used for authentication.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: passwords alone are not enough when they must be kept
  Check@1440/390: every password-based sign-in requires a second factor.
- [PRI-35] MUST use biometric identification to protect access to apps that people keep logged in, where the device supports it.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: logged-in apps need a further layer of protection on the device
  Check@1440/390: access to a kept-logged-in app is gated by biometrics where available.
- [PRI-36] MUST store sensitive information in the platform's secure credential store.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: a secure store gives a predictable and safer experience for private information
  Check@1440/390: sensitive information is never kept in ordinary storage.
- [PRI-37] MUST NOT store passwords or other secure content in plain-text files, even when file permissions restrict access.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: encrypted secure storage is much safer than file permissions
  Check@1440/390: no plain-text file holds passwords or secure content.
- [PRI-38] MUST NOT invent custom authentication schemes when the app requires authentication.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: custom schemes are less tested and less predictable
  Check@1440/390: authentication uses established schemes only.
- [PRI-39] MUST prefer established, system-provided sign-in features, such as password autofill, over custom sign-in.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: system-provided features are maintained and familiar to people
  Check@1440/390: sign-in uses system-provided features where the platform offers them.
- [PRI-40] MUST NOT assume that only one person uses the app or is signed in on the device, because several people may be active on the same system.
  HIG: Privacy <https://developer.apple.com/design/human-interface-guidelines/privacy> | Why: fast user switching lets several people be active on one system
  Check@1440/390: no logic assumes a single signed-in person per device.

## Right to left (27 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/right-to-left

- [RTL-01] MUST adjust text alignment to match the interface direction when the layout does not do so automatically.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: text must sit at the mirrored position in the right-to-left context
  Check@1440/390: each left-aligned text item in LTR has a right-aligned counterpart in RTL when the layout does not mirror it.
- [RTL-02] MUST align a paragraph (three or more lines of text) based on its language, not on the current context.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: right-aligning left-to-right text makes the beginning of each line hard to see
  Check@1440/390: each paragraph of three or more lines aligns according to its own language.
- [RTL-03] MUST continue aligning one- and two-line text blocks to match the reading direction of the current context.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: short text reads better when it follows the surrounding direction
  Check@1440/390: one- and two-line text blocks follow the current context's reading direction.
- [RTL-04] MUST use a consistent alignment for all text items in a list, including items displayed in a different script, by reversing all of them together.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: consistent alignment supports comfortable reading and scanning
  Check@1440/390: every item in a list shares one alignment, including items in another script.
- [RTL-05] MUST NOT reverse the order of digits within a specific number, such as a phone number, a credit card number, or "541".
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: the digits of a specific number always appear in the same order
  Check@1440/390: numbers such as phone and card numbers render with digits in their original order in RTL.
- [RTL-06] MUST reverse the order of numerals that show progress or counting direction when the control they belong to is flipped, and MUST NOT flip the numerals themselves.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: numerals on progress controls must match the flipped direction of the control
  Check@1440/390: progress, slider, and rating numerals run in the same direction as the flipped control, with each numeral's glyph unchanged.
- [RTL-07] MUST reverse a sequence of numerals when the sequence communicates a specific order.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: a reversed sequence keeps its intended meaning in RTL
  Check@1440/390: any numeral sequence used for order is shown in the RTL direction.
- [RTL-08] MUST identify the appropriate way to display number-centric information for each supported locale when the app covers mathematical or other number-centric topics.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: RTL languages use different number systems, and the source calls this a good idea for number-centric apps
  Check@1440/390: each supported RTL locale has a chosen numeral system for number-centric content.
- [RTL-09] MUST flip controls that show progress from one value to another, such as sliders and progress indicators, in the RTL context.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: people read forward progress in the same direction as their language
  Check@1440/390: each progress-type control runs right to left in RTL.
- [RTL-10] MUST reverse the positions of the glyphs or images that depict the beginning and ending values of a flipped control.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: endpoint depictions must match the flipped control
  Check@1440/390: start and end glyphs or images of each flipped control swap sides in RTL.
- [RTL-11] MUST flip controls that help people navigate or access items in a fixed order, such as back, next, and previous buttons.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: the flow of screens and items must match the reading order of the language
  Check@1440/390: back, next, and previous controls point in the RTL reading direction.
- [RTL-12] MUST NOT flip a control that refers to an actual direction or points to an onscreen area.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: a control meaning "to the right" must always point right
  Check@1440/390: directional controls keep their absolute direction in both contexts.
- [RTL-13] MUST visually balance adjacent Latin and RTL scripts when necessary, such as increasing the RTL font size by about 2 points next to all-capital Latin text in buttons, labels, and titles.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: Arabic and Hebrew have no uppercase letters and can look too small beside all-capital Latin text
  Check@1440/390: RTL text next to all-caps Latin in buttons, labels, and titles appears visually balanced.
- [RTL-14] MUST NOT flip photographs, illustrations, or general artwork.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: flipping an image often changes its meaning, and flipping a copyrighted image could be a violation
  Check@1440/390: no photograph, illustration, or general artwork is mirrored for RTL.
- [RTL-15] MUST create a new version of an image instead of flipping the original when the image's content is strongly connected to reading direction.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: a mirrored original can change meaning or infringe rights
  Check@1440/390: direction-bound images have a separately created RTL version.
- [RTL-16] MUST reverse the positions of images when their order is meaningful, such as chronological, alphabetical, or favorite order.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: reversing keeps the order's meaning in RTL
  Check@1440/390: ordered image sets run right to left in RTL.
- [RTL-17] MUST flip interface icons that represent text or reading direction, such as left-aligned bars that stand for text.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: such icons must match the RTL reading direction
  Check@1440/390: text-representing and reading-direction icons are mirrored in RTL.
- [RTL-18] MUST consider creating a localized version of an interface icon that displays text or letters for a script-related concept.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: icon text must match the script the person reads
  Check@1440/390: each icon with script-specific text has a version for each supported script, or the decision is recorded.
- [RTL-19] MUST consider designing an alternative image without text for an interface icon that uses letters or words to convey a concept unrelated to reading or writing.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: text-based icons for unrelated concepts are hard to localize
  Check@1440/390: such icons are reviewed for a text-free alternative.
- [RTL-20] MUST flip an interface icon that shows forward or backward motion so that the motion matches the RTL reading direction.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: people read motion that moves with the reading direction as forward
  Check@1440/390: an icon showing a speaker's sound waves, or any other motion, points in the RTL forward direction.
- [RTL-21] MUST NOT flip logos or universal signs and marks, such as the checkmark, even when a logo includes text.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: a flipped logo confuses people and can have legal consequences, and universal marks must look consistent
  Check@1440/390: logos and universal marks render in their original form in every direction.
- [RTL-22] MUST NOT flip interface icons that depict real-world objects unless the object itself indicates directionality.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: familiar objects such as clocks work the same in every language
  Check@1440/390: object icons such as clocks look identical in LTR and RTL unless the object shows direction.
- [RTL-23] MUST consider the individual components and overall visual balance of a complex custom interface icon before flipping it.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: some components must not flip, and flipping can unbalance the icon
  Check@1440/390: complex custom icons are reviewed component by component for flip safety and balance.
- [RTL-24] MUST flip a badge that represents actual UI when that UI flips.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: the badge must match the flipped interface it depicts
  Check@1440/390: badges that stand for on-screen UI move with that UI in RTL.
- [RTL-25] MUST consider whether flipping a badge that modifies an icon's meaning still preserves the modified meaning and the icon's visual balance.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: a badge in the wrong corner can unbalance the icon
  Check@1440/390: each modifying badge is checked for meaning and balance in both directions.
- [RTL-26] MUST preserve the orientation of a tool component that implies handedness while flipping the base image when necessary.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: flipping a right-handed tool is unnecessary and may confuse people
  Check@1440/390: tool components keep their orientation while the base image flips when needed.
- [RTL-27] MUST keep a component that must follow a visual design language regardless of localization, such as a slash, badge, or magnifying glass, consistent across directions.
  HIG: Right to left <https://developer.apple.com/design/human-interface-guidelines/right-to-left> | Why: such components signal the same meaning in every language
  Check@1440/390: fixed-language components are not mirrored with the rest of the icon.

## Spatial layout (23 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/spatial-layout

- [SL-01] MUST center important content within the person's field of view.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: people can only take in content that sits within the space they see without moving their head
  Check@1440/390: primary content is centered within the default viewing area and is visible without head movement.
- [SL-02] MUST keep primary content generally within the field of view.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: content outside the field of view is hard to find and use
  Check@1440/390: the main content of each view stays within the typical field of view.
- [SL-03] MUST keep distracting motion and bright, high-contrast objects out of the periphery of an immersive experience.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: peripheral distractions pull attention away from important content
  Check@1440/390: immersive scenes place calm, low-contrast content at the edges and keep important content centered.
- [SL-04] MUST NOT anchor content statically to the person's head.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: content fixed in front of someone can make them feel stuck, confined, and uncomfortable, especially when it obscures their surroundings
  Check@1440/390: content does not stay in a fixed position relative to the person's head when they turn or move.
- [SL-05] MUST anchor content in the person's space so they can look around naturally and view different objects in different locations.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: spatial anchoring lets people explore freely and keeps their surroundings stable
  Check@1440/390: content is placed at fixed locations in the surrounding space rather than moving with the head.
- [SL-06] MUST provide visual cues that accurately communicate the depth of content.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: people perceive depth from cues such as distance, occlusion, and shadow, and inaccurate cues can cause visual discomfort
  Check@1440/390: each element's apparent depth matches its layering, occlusion, and shadow.
- [SL-07] MUST NOT leave depth cues missing or let them conflict with the person's real-world experience of depth.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: missing or conflicting cues make people uncomfortable and reduce the sense that content belongs in their space
  Check@1440/390: depth cues are present for every layered element and do not contradict how the same depth looks in the physical world.
- [SL-08] MUST use depth to communicate hierarchy so that important objects stand out from surrounding content.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: people notice changes in depth, so depth can make the most important content more noticeable
  Check@1440/390: higher-priority elements sit at a visibly different depth from the content around them.
- [SL-09] MUST use depth to visually separate large, important elements from the content around them, such as a tab bar or toolbar from its window.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: depth separates large, important elements clearly from their background
  Check@1440/390: large navigation or primary elements are separated in depth from the content behind them.
- [SL-10] MUST NOT use depth on small objects where it makes controls less legible or harder to use, such as a button's symbol against its background.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: depth on small elements can reduce legibility and make the control harder to use
  Check@1440/390: small controls and their symbols stay legible and easy to target without added depth.
- [SL-11] MUST NOT add depth to text that appears to hover above its background.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: floating text is difficult to read and can slow people down or cause discomfort
  Check@1440/390: text is presented on the same plane as its background, with no floating depth effect.
- [SL-12] MUST add depth only where it adds value by clarifying the interface or delighting people, considering the size and relative importance of each object.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: depth used everywhere loses its meaning and adds clutter
  Check@1440/390: each use of depth has a clear purpose tied to size or importance.
- [SL-13] MUST limit how many different depth levels the app uses, because people must refocus their eyes for each difference in depth and frequent changes are tiring.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: rapid or frequent refocusing causes fatigue
  Check@1440/390: the number of distinct depth levels in each view is small and changes are not rapid or frequent.
- [SL-14] MUST consider adding small amounts of depth throughout the interface, including in standard windows, so that it looks natural from any angle.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: people can view content from any angle, and flat-only interfaces can look less natural
  Check@1440/390: standard windows include subtle depth effects where they support the layout.
- [SL-15] MUST scale interactive content dynamically so that it stays comfortably legible and interactive at any distance, appearing to keep the same size as it moves closer or farther away.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: interactive content must remain usable as its distance from the person changes
  Check@1440/390: interactive windows and controls keep a comfortable apparent size across distances.
- [SL-16] MUST NOT apply fixed scale to interactive content.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: interactive elements that shrink with distance become hard to see and select
  Check@1440/390: no interactive element uses a fixed scale that makes it shrink as it moves away.
- [SL-17] MUST reserve fixed scale for noninteractive objects that need to keep a true real-world size, such as a life-size product model.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: fixed scale makes an object look like its physical counterpart, which helps realism for objects people only view
  Check@1440/390: fixed-scale objects are noninteractive and are used only where true size matters.
- [SL-18] MUST NOT display so many windows that they obscure people's surroundings, overwhelm or constrict them, or make it cumbersome to relocate the app.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: too many windows make people feel constricted and make moving the app tedious
  Check@1440/390: the number of open windows per app is kept low and does not block the surroundings.
- [SL-19] MUST reserve direct interaction, where people touch a virtual object with a finger, for nearby objects that invite close inspection or manipulation, and for short periods.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: reaching toward objects at or above eye level is tiring over time
  Check@1440/390: direct touch-style manipulation is limited to nearby objects and short tasks.
- [SL-20] MUST include enough space around interactive components so that people can look at them easily and any hover feedback does not crowd other content.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: a clear target is easy to look at and select, and feedback needs room
  Check@1440/390: interactive components have clear spacing from one another and from other content, including their hover feedback area.
- [SL-21] MUST NOT let controls overlap other interactive elements or views.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: overlapping elements make it difficult to select a single element
  Check@1440/390: no two interactive elements or views overlap in their selectable areas.
- [SL-22] MUST let people use the app with minimal or no physical movement, unless some physical movement is essential to the experience.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: people with different mobility should be able to enjoy the app while stationary
  Check@1440/390: all core actions can be completed without moving the body, except for essential movement.
- [SL-23] MUST place immersive content that extends up from the floor on a flat horizontal plane aligned with the floor.
  HIG: Spatial layout <https://developer.apple.com/design/human-interface-guidelines/spatial-layout> | Why: aligning with the floor helps content blend with surroundings and feel intuitive
  Check@1440/390: floor-based immersive content sits on a flat horizontal plane matching the floor.

## Writing (54 rules)
Source page: https://developer.apple.com/design/human-interface-guidelines/writing

- [WRI-01] MUST determine the app's voice by considering who the app is talking to.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: the vocabulary and feeling of the text should fit the audience and the app's values
  Check@1440/390: the app has a written voice description tied to its intended audience.
- [WRI-02] MUST keep a shared list of common terms and reference it so language stays consistent.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: consistent terms make the app feel cohesive
  Check@1440/390: the same concept uses the same term across screens and flows.
- [WRI-03] MUST vary tone to match the situation the person is in.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: a serious situation and a celebratory one need different language
  Check@1440/390: tone for success, routine, and error states differs appropriately.
- [WRI-04] MUST choose words that are easily understood and convey the intended meaning.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: unclear words slow people down
  Check@1440/390: each label and message can be understood on first reading.
- [WRI-05] MUST check that each word is needed.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: extra words add noise and reading time
  Check@1440/390: removing any word leaves the meaning intact or clearer.
- [WRI-06] MUST use fewer words when fewer can convey the same meaning.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: shorter text is easier to scan and understand
  Check@1440/390: each message is as short as possible without losing meaning.
- [WRI-07] MUST read the writing aloud when unsure whether it is clear.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: spoken reading exposes awkward or unclear phrasing
  Check@1440/390: the text sounds natural and clear when read aloud.
- [WRI-08] MUST use simple, plain language.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: plain language is understood by the most people
  Check@1440/390: text avoids complex vocabulary where a simple word works.
- [WRI-09] MUST avoid jargon.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: jargon excludes people who do not share the specialist vocabulary
  Check@1440/390: technical terms are replaced with everyday words or explained.
- [WRI-10] MUST avoid gendered terminology.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: the app should speak to as many people as possible
  Check@1440/390: text uses neutral terms for people and roles.
- [WRI-11] MUST write with accessibility in mind.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: text must work for people using assistive technology
  Check@1440/390: labels and messages make sense when read by a screen reader.
- [WRI-12] MUST write with localization in mind.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: text that is hard to translate or adapt limits who can use the app
  Check@1440/390: text avoids idioms, puns, and wording that breaks in other languages.
- [WRI-13] MUST place the most important information first on each screen.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: people scan from the top and need the key point first
  Check@1440/390: the primary message is the first text a person reads on each screen.
- [WRI-14] MUST format text so it is easy to read.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: well-formatted text is faster to read and understand
  Check@1440/390: text is grouped, spaced, and structured for quick scanning.
- [WRI-15] MUST break text across multiple screens when it conveys more than one idea.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: packing several ideas into one screen overloads people
  Check@1440/390: each screen carries a limited set of ideas and the flow between screens is clear.
- [WRI-16] MUST use active voice.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: active voice makes the actor and next action clear
  Check@1440/390: labels and instructions name who acts and what to do.
- [WRI-17] MUST use a verb in button and link labels.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: verbs tell people what the control does
  Check@1440/390: each button or link label starts with or is an action verb.
- [WRI-18] MUST NOT make labels too cute or clever.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: clever labels can hide the action and confuse people
  Check@1440/390: labels state the action directly rather than using playful phrasing.
- [WRI-19] MUST NOT use "Click here" as link text.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: vague link text is unhelpful, especially with screen readers
  Check@1440/390: link text describes its destination or result.
- [WRI-20] MUST use descriptive link text that makes sense out of context.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: screen reader users often navigate by link lists
  Check@1440/390: each link reads clearly on its own, such as "Learn more about the topic".
- [WRI-21] MUST use consistent language patterns across the app.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: repeated patterns build familiarity and make writing easier
  Check@1440/390: similar actions and messages follow the same wording structure.
- [WRI-22] MUST choose one capitalization style for each UI element type and apply it consistently.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: a consistent style reflects the app's voice and looks deliberate
  Check@1440/390: all alerts, headlines, and other element types each follow a single style.
- [WRI-23] MUST use consistent labels for actions across the steps of a multi-step flow.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: changing labels between steps makes people unsure what comes next
  Check@1440/390: the same action uses the same label on every step of the flow.
- [WRI-24] MUST begin a multi-step flow with a clear start label, such as "Get Started".
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: a clear start signals that a process is beginning
  Check@1440/390: the first control of a flow names the start of the process.
- [WRI-25] MUST make the end of a flow clear with completion language, such as "Done".
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: people need to know when a process is finished
  Check@1440/390: the final step of a flow uses explicit completion wording.
- [WRI-26] MUST use possessive pronouns sparingly.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: possessives are often unnecessary and make text longer
  Check@1440/390: labels like "Favorites" are used where context already implies ownership.
- [WRI-27] MUST use possessive pronouns consistently and without switching perspective when they are used.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: mixing perspectives confuses who is being addressed
  Check@1440/390: a screen or app uses one pronoun perspective throughout.
- [WRI-28] MUST NOT use "we" in app text.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: it is often unclear who "we" refers to
  Check@1440/390: no label or message uses "we" to refer to the company or the app.
- [WRI-29] MUST keep language consistent across all devices the app runs on.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: the same product should use the same terms everywhere
  Check@1440/390: shared terms and labels match between device versions.
- [WRI-30] MUST describe gestures correctly for each device, such as "tap" on touch devices instead of "click".
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: wrong gesture words mislead people about how to interact
  Check@1440/390: instructions name the input method that the device actually uses.
- [WRI-31] MUST keep text brief on small screens.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: small screens have little room for text
  Check@1440/390: text on compact screens is limited to what is necessary.
- [WRI-32] MUST keep text brief on large screens.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: text must be large to be read from a distance
  Check@1440/390: text on large displays is short enough to read from the expected viewing distance.
- [WRI-33] MUST consider who will see the text on shared screens and address that audience.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: several people may read a shared screen at once
  Check@1440/390: text on shared displays suits the group that will see it.
- [WRI-34] MUST provide clear next steps on any blank screen.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: an empty screen with no guidance can feel daunting
  Check@1440/390: each empty state tells people what they can do next.
- [WRI-35] MUST keep empty-state content useful and relevant to the context.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: empty states can welcome people but must still help them
  Check@1440/390: empty-state text gives relevant guidance rather than filler.
- [WRI-36] MUST give a button or link for the next action on a blank screen when possible.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: a direct control removes the need to figure out the next step
  Check@1440/390: an empty state includes a control that starts the suggested action when one is possible.
- [WRI-37] MUST NOT show crucial information on an empty state that could disappear later.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: empty states are usually temporary, so important information would vanish
  Check@1440/390: critical content is not shown only in an empty state.
- [WRI-38] MUST help people avoid errors before they happen.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: preventing an error is better than reporting one
  Check@1440/390: the interface guides input to valid values before a failure occurs.
- [WRI-39] MUST display an error message as close to the problem as possible.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: people need to see which element caused the problem
  Check@1440/390: each error message sits next to the element that failed.
- [WRI-40] MUST NOT blame people in error messages.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: blaming language increases frustration
  Check@1440/390: error text describes the problem without accusing the person.
- [WRI-41] MUST state what the person can do to fix an error.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: an error without a fix leaves people stuck
  Check@1440/390: each error message names a concrete corrective action.
- [WRI-42] MUST NOT use interjections such as "oops" or "uh-oh" in error messages.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: such words can sound insincere and make errors feel trivial or unclear
  Check@1440/390: error messages use direct, plain wording without playful exclamations.
- [WRI-43] MUST rethink the interaction when language alone cannot resolve an error that is likely to affect many people.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: a recurring error often signals a design problem, not a wording problem
  Check@1440/390: frequent errors trigger a review of the interaction itself.
- [WRI-44] MUST choose the delivery method based on the urgency and importance of the message.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: the same message needs different channels depending on how urgent it is
  Check@1440/390: each message's channel matches its urgency and whether immediate action is needed.
- [WRI-45] MUST use a tone appropriate to the situation in each message.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: tone must fit the context in which someone sees the message
  Check@1440/390: each message's tone matches its urgency and the person's likely state.
- [WRI-46] MUST label settings as practically as possible.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: clear labels help people find the setting they need
  Check@1440/390: each setting label states what the setting controls in plain words.
- [WRI-47] MUST add an explanation to a setting when its label alone is not enough.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: some settings need context to be understood
  Check@1440/390: settings whose labels are ambiguous include a short description.
- [WRI-48] MUST describe what a setting does when it is turned on, not when it is turned off.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: people can infer the opposite state, so describing both is unnecessary
  Check@1440/390: setting descriptions explain the enabled behavior only.
- [WRI-49] MUST provide a direct link or button to a setting instead of describing where it is located.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: directions to a setting's location are easy to get wrong and tedious to follow
  Check@1440/390: references to a setting include a control that opens it.
- [WRI-50] MUST label every text field clearly.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: people must know what each field asks for
  Check@1440/390: every input field has a visible or accessible label.
- [WRI-51] MUST use hint or placeholder text that shows the expected format of the input.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: an example or description shows how to enter the information correctly
  Check@1440/390: each field whose format matters shows an example or a format description.
- [WRI-52] MUST show field errors right next to the field they concern.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: people need to connect the error with the input that caused it
  Check@1440/390: each field error appears adjacent to its field.
- [WRI-53] MUST tell people how to enter the information correctly instead of scolding them for breaking rules.
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: instructions help people succeed, while scolding discourages them
  Check@1440/390: field error text states the correct input rather than criticizing the entry.
- [WRI-54] MUST NOT use robotic error messages that give no helpful information, such as "Invalid name".
  HIG: Writing <https://developer.apple.com/design/human-interface-guidelines/writing> | Why: vague messages leave people unable to fix the problem
  Check@1440/390: each error message explains what is wrong and what a valid entry looks like.

# Exclusions and persona notes

### Motion
Apple-specific, excluded:
- SF Symbols support and the SF Symbols animations link (sf-symbols#Animations); "SF Symbols 5 or later".
- Liquid Glass material response to direct touch versus trackpad input; the Liquid Glass change-log entry.
- System components that adjust motion for accessibility settings and input methods.
- visionOS mechanics: the spatial-layout#Depth and spatial-layout#Field-of-view links, immersive-experiences#Immersion-and-passthrough, and the Photos panorama example.
- watchOS: SwiftUI, WatchKit, WKInterfaceImage, and the built-in easing at the start and end of animations that cannot be turned off or customized.
- Developer documentation: animating-views-and-transitions (SwiftUI).
- Related links: feedback, spatial-layout, immersive-experiences.
- Platform note: no additional considerations for iOS, iPadOS, macOS, or tvOS.
- Change log dates and entries.
Persona and journey notes:
- Consider animated icons or symbols where they make sense; the page ties this advice to SF Symbols, so only the general idea is kept here.
- For oscillating objects, consider making the content translucent to reduce how noticeable the motion is.
- When people move a large object or window themselves, discomfort can still happen; consider keeping the window fairly small.
- Instead of rotating a virtual world, consider an instantaneous directional change during a quick fade-out.
- Consider giving people a stationary frame of reference: motion contained in a fixed area is easier to handle, while automatic movement that makes the whole surrounding area appear to move can make people feel unwell (example: a game that automatically moves the player through space).
- Game players should get feedback that is succinct and tied to a successful action, so they receive the message without losing focus on gameplay.

### Privacy
Apple-specific, excluded:
- Store disclosure: the App Store product page privacy details and the instruction to manage them in App Store Connect.
- Named Apple features and products: Hide My Email, Mail Privacy Protection, iCloud Keychain verification codes, passkeys, Sign in with Apple, Face ID, Optic ID, Touch ID, Keychain, Settings > Privacy, LocalAuthentication, CloudKit, Apple Neural Engine, CreateML.
- Location button: the Core Location button (LocationButton, CLLocationButton), the one-time authorization model, the location indicator, the system-controlled warnings and the consequence that a button with consistent problems gets no location access, and the rule that only the title, glyph, background color, and corner radius may be customized.
- The standard system alert, its purpose-string mechanics, and the three example alert images.
- The advertising identifier that supports app tracking, and the AppTrackingTransparency alert. The rule that a consent screen before or after that alert is allowed is kept in persona notes only.
- macOS: Developer ID signing, App Sandbox, and the Mac App Store sandboxing requirement.
- visionOS: ARKit data access rules (Full Space, Shared Space, plane estimation, scene reconstruction, image anchoring, hand tracking), hover effects tied to eye gaze, the back and front camera behavior, and the rule to replace iOS camera features with content import.
- Platform consideration note: "No additional considerations for iOS, iPadOS, tvOS, or watchOS."
- Framework and developer references: LocationButton, CLLocationButton, requesting-access-to-protected-resources, UIKit, CoreLocation, AppTrackingTransparency, setting-up-access-to-arkit-data, making-your-app-compatible-with-visionos, configuring-the-macos-app-sandbox, keychain-services, securing-logins-with-icloud-keychain-verification-codes.
- Related links (entering-data, onboarding), the Videos section, and the change log entry dated June 21, 2023.
Persona and journey notes:
- Show the current context first so people understand why access is requested, and place the request where the feature is used.
- For a navigation app, people already understand the need for location, so the request fits the first use of navigation.
- For a game that needs information about the surroundings, ask for permission before the game starts, so the request is expected.
- For a feature people use only occasionally, consider a single-action, one-time permission option so they can benefit without repeated prompts.
- A consent screen shown before or after a permission request is allowed when local privacy law requires it.
- Customize custom controls to match the app's UI, within the legibility limits above.
- Keep any custom screen before a request to a single clear action that opens the request.
- Where people may share a device, design sign-in and data views so one person's data is not shown to another.

### Right to left
Apple-specific, excluded:
- System-provided UI frameworks flipping components by default, and the statement that standard layouts need no changes.
- SF Symbols: RTL variants, localized Arabic and Hebrew symbols, the signature, rich-text, and I-beam symbols, and the backslash example.
- Custom SF Symbols directionality and the custom-sf-symbols developer reference.
- Preparing-views-for-localization (SwiftUI developer reference), the Related links (layout, inclusion, sf-symbols), and the Videos section.
- Platform considerations note: "No additional considerations for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS."
Persona and journey notes:
- People who read right-to-left scripts expect screen flow, back and next controls, and ordered content to follow their reading order.
- Users who choose an RTL language for the device or app expect the interface to adapt in several ways, so adaptation should cover alignment, controls, icons, and numbers together.

### Spatial layout
Apple-specific, excluded:
- Apple Vision Pro, visionOS, the Light Seal, and the Upright and Angled viewing illustrations.
- The statement that the system does not provide information about a person's field of view.
- visionOS windows and volumes, RealityKit, SwiftUI depth effects, and the developer documentation on 3D content.
- The definition of a point as an angle on visionOS, in contrast to pixel-based points on other platforms.
- The visionOS hover effect numbers (buttons at least 60 points apart with 16 points of space); only the general spacing rule is kept.
- The Digital Crown recentering behavior.
- The instruction to prioritize standard indirect gestures in visionOS.
- Platform considerations: "Not supported in iOS, iPadOS, macOS, or tvOS, or watchOS."
- Related links, developer documentation links, the empty Videos section, and the change log entries.
Persona and journey notes:
- People wearing a headset expect content to stay in their surroundings and to remain stable as they look around.
- People have different peripheral vision and comfort levels, so important content should be central and calm.
- People may be stationary or have limited mobility and need to complete actions without moving.
- People who switch between several views expect depth changes to be few and clear rather than constant.

### Writing
Apple-specific, excluded:
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
