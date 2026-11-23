Candidate catalog - evidence only; not executable requirements.

# Images: extraction record

Source: https://developer.apple.com/design/human-interface-guidelines/images
Snapshot fetched: 2026-11-03 KST. Recorded reading: 2026-11-03 KST. Reader: Earlier reader; inherited note.
Snapshot SHA-256: ec57c7d7466f648b33f636933ef4e230d7404d8282318ceea7055b1bf583496b
Input words: 2092. Candidate rule records: 12. Exclusion blocks: 4.
Original note: 01-foundations-a.md.
Adopted source-linked rules: F-24

Candidate MUST wording may overstate source advice or include native assumptions. The curated rules and standards-and-scope.md take precedence after approval. Coverage counts describe extraction records, not conformance or independently verified defects. The original note is preserved below without silently rewriting historical evidence.

---

## Images
URL: https://developer.apple.com/design/human-interface-guidelines/images
Universal rules:
- MUST size artwork in points (device-independent units), not fixed pixels, so it keeps its size across displays. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: layouts match on every screen | check: screenshots at 1440px and 390px: the same asset renders at the same point size on both (reading pt as CSS px).
- MUST provide high-resolution bitmap assets, at least 2x, for every device size you support. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: images stay sharp on high-density screens | check: screenshots at 390px and 1440px: no pixelation at 2x.
- MUST design bitmaps at the lowest resolution and scale them up to make the high-resolution versions. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: one master produces every size | check: not screenshot-checkable: an export workflow fact; check the source file's pixel dimensions.
- MUST position vector control points on whole values so they stay aligned to the pixel grid at higher densities. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: edges stay crisp at 2x | check: render at 1x and 2x: edges are crisp, with no half-pixel blur.
- MUST save raster graphics as de-interlaced PNG. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: a standard, lossless, fast-loading format | check: not screenshot-checkable: file format metadata.
- MUST save PNG graphics that do not need full 24-bit color as 8-bit palette PNG. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: smaller files with no visible loss | check: not screenshot-checkable: file format metadata.
- MUST save photos as optimized JPEG or HEIC. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: photos load fast at good quality | check: not screenshot-checkable: file format metadata.
- MUST save flat icons, interface icons and other flat artwork that must scale as PDF or SVG. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: one file scales to every density | check: not screenshot-checkable for format; render at two sizes to confirm crispness.
- MUST include a color profile with every image. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: colors display as intended | check: not screenshot-checkable: file metadata.
- MUST test images on real devices, not only in the design tool, for pixelation, stretching and compression. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: design-tool previews can look fine on a device that does not | check: not fully screenshot-checkable: needs physical devices; screenshots at 390px and 1440px at 1x and 2x are a partial proxy.
- MUST prefer vector artwork for 2D images that must scale to many sizes. | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: vector art does not blur when scaled up | check: render at a small and a large size: no blur at either.
- MUST NOT keep transparency in an image that always sits on one solid background; bake the background into the file (HIG wording: "in general"). | topic: Images | source: https://developer.apple.com/design/human-interface-guidelines/images | why: smaller files and no edge halo | check: screenshot on the target background at 390px: no halo or fringe; compare file sizes.
Apple-specific (excluded):
- Scale-factor filename suffixes (@1x, @2x, @3x), the asset-catalog workflow, and the per-platform scale-factor table.
- tvOS layered images: parallax effect, two to five layers, opaque background layer, runtime .lcr files, layerutil, Parallax Previewer and Parallax Exporter.
- visionOS images: layered app icons, spatial photos and scenes, stereo HEIC, the feathered glass background for text, and resolutions above @2x.
- watchOS autoscaling PDF screen-size table (38mm to 49mm).
Persona and journey notes:
- Viewers on displays of many densities and sizes, from phones to TVs, see the same asset.
- Journey: none beyond the screen-size changes covered above.

COVERAGE:
- ROOT: read, ~90 words, 0 universal rules, 0 excluded
- getting-started: read, ~50 words, 0 universal rules, 0 excluded
- foundations: read, ~70 words, 0 universal rules, 0 excluded
- accessibility: read, ~2000 words, 61 universal rules, 7 excluded
- app-icons: read, ~1600 words, 22 universal rules, 7 excluded
- branding: read, ~650 words, 11 universal rules, 3 excluded
- color: read, ~2300 words, 33 universal rules, 7 excluded
- dark-mode: read, ~800 words, 18 universal rules, 3 excluded
- icons: read, ~1300 words, 28 universal rules, 3 excluded
- images: read, ~1000 words, 12 universal rules, 4 excluded
