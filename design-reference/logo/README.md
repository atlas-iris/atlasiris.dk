# Atlas Iris — Logo files

**New logo as of 2026-07-13.** The logo is the **A·I monogram**: a sharp, open
geometric **A** (no crossbar, navy) crossed by a single rising diagonal stroke
that becomes a tall serif **I** in a vibrant blue gradient. It reads as one
abstract mark first and as "A + I" only on a second look — that delayed
recognition is intentional (FedEx-arrow style). Full design spec:
`atlas-iris-logo-spec.md`.

**How to tell new from old at a glance:** anything with concentric rings or an
eye/iris shape is the **old** logo — those files are deleted and must not be
used. The new logo is always the angular A with the diagonal swoosh, and the
new name labels always have the gradient IRIS (old wordmark images had flat
blue).

## Files — names describe the logo's own color, not the background

| File | What it is | Use on |
|------|------------|--------|
| `atlas-iris-logo-dark.png` | The **navy** logo (dark mark + blue I). 1024×1024 transparent master. | **White / light** backgrounds |
| `atlas-iris-logo-light.png` | The **white** logo (white A + blue I). 1024×1024 transparent master. | **Navy / dark** backgrounds |
| `atlas-iris-logo-icon-1024.png` | App icon — white monogram on the navy hero gradient, rounded square. | Favicon, avatars, WhatsApp/LinkedIn profile |
| `atlas-iris-label-dark.png` | **Name label** — ATLASIRIS lockup as transparent PNG, navy ATLAS + gradient IRIS. Slap it on documents, offer sheets, packaging, anything. | **White / light** surfaces |
| `atlas-iris-label-light.png` | Same name label with white ATLAS + gradient IRIS. | **Navy / dark** surfaces |
| `atlas-iris-logo-spec.md` | The full design specification (geometry, colors, what to avoid). | — |

Social exports (OG image, LinkedIn banner, Facebook cover) are deliberately
**not made yet** — they come later, once the brand refresh settles.

The name lockup exists in two forms: **live text** for the web (CSS spec in
`../Fonts/atlas-iris-fonts.md`) and the **label PNGs above** for print and
physical items. In the labels the IRIS carries the same vibrant blue gradient
as the monogram's I (`#4F8DFF → #1F5FD8`) — never re-set the name by hand.

## Rules

- Wrong-background use is the main failure mode: the navy logo disappears on navy, the white logo disappears on white. Match the table above.
- Never stretch, re-color, rotate, outline, or add effects — the spec bans shadows, glows and 3D.
- Clear space: at least the width of the I's stem on all sides.
- Below ~48px prefer the icon version (navy square) so it keeps contrast on any background.
- Colors are baked into the files (navy A in the `#0B2A52` family, I gradient `#4F8DFF → #1F5FD8`). Don't re-tint to match the UI palette.

## History

- **2026-07-13** — A·I monogram replaces the ATLASIRIS wordmark images, the
  concentric-ring iris mark, and the ring app icon (all deleted). Masters are
  ChatGPT transparent exports (real alpha). The brand book PPTX/slide PNGs in
  `../Visual Identity/` still show the old logo until rebuilt.
- The even older "AW" (Agentic Websites) mark was retired 2026-07-02.
