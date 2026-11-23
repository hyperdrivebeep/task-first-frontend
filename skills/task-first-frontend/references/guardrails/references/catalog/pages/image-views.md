Candidate catalog - evidence only; not executable requirements.

# Image views: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/image-views
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: 1a05451c9fba486d0b78c751370b227f4cf1d4f71dbdebbbcac9dbdca80fd4fb
Input words: 555. Candidate rule records: 13. Exclusion blocks: 7.
Original note: p032-image-views/image-views.md.
Adopted source-linked rules: C-27

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Image views

URL: https://developer.apple.com/design/human-interface-guidelines/image-views

Universal rules:
- Use an image view only when the primary purpose of the view is to display an image.
- Use a symbol or interface icon instead of an image view when you want to display an icon in the interface.
- Keep image views non-interactive, since image views are typically not interactive.
- When an image must be interactive, configure a system-provided button to display the image instead of adding button behaviors to an image view.
- Let symbols and interface icons use the accent colors people choose.
- Treat an icon (also called a glyph or template image) as a bitmap whose nontransparent pixels can receive color.
- Supply rich image data in formats such as PNG, JPEG, and PDF.
- Take care when overlaying text on images, because compositing text on images can decrease image clarity and text legibility.
- Ensure overlaid text contrasts well with the image it sits on.
- Consider a text shadow or a background layer to make overlaid text stand out.
- Aim to use a consistent size for all images in an animated sequence.
- Prescale images to fit the view so the system does not have to perform any scaling.
- When the system must scale images, keep all images in the sequence the same size and shape for better performance.

Apple-specific (excluded):
- On macOS, use an image well when the image view must be editable (copy, paste, drag, Delete to clear).
- On macOS, use an image button instead of an image view to make a clickable image.
- On tvOS, combine multiple layers with transparency to create a feeling of depth in images.
- On visionOS, use image views for 2D, stereoscopic, and spatial photos in windows.
- On visionOS with RealityKit, display images outside image views next to 3D content, or generate a spatial scene from a 2D image.
- On watchOS, use SwiftUI to create animations when possible.
- On watchOS, use WatchKit to animate a sequence of images within an image element if necessary.

Persona and journey notes:
- A developer or designer who needs to show a picture chooses between an image view, a symbol, an interface icon, and a button.
- The journey starts at "does this only display an image?" and branches to icon, interactive image, or overlaid text cases.
- Overlaying text on a photo is the point where legibility and contrast checks apply.
- Animated image sequences are the point where image size consistency affects performance.

COVERAGE:
- Read the full page: intro, Best practices, Content, Platform considerations (iOS/iPadOS, macOS, tvOS, visionOS, watchOS), Resources, Change log.
- Universal rules extracted: 13.
- Apple-specific items recorded and excluded: 7.
- Resources and change log contain no guideline rules; the visionOS change-log entry is noted only as a date.
