# Atlas Iris — Typography

Two typefaces, both free on Google Fonts. Fraunces carries the brand's
personality; Inter does the reading work.

## The pair

| Role | Typeface | Weights | Use |
|------|----------|---------|-----|
| Display | **Fraunces** (variable, optical sizing on) | 300 · 400 · 500 · 600 (+ italics) | Wordmark, headlines, pull quotes, tier names |
| Body / UI | **Inter** | 400 · 500 · 600 · 700 | Paragraphs, buttons, labels, captions, tables |

**Fallback stacks**

- Display: `'Fraunces', Georgia, serif` (set `font-optical-sizing: auto`)
- Body: `'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`

**Google Fonts import**

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap');
```

**Local font files:** the variable TTFs (Fraunces roman + italic, Inter) live in
`files/` with their OFL licenses — no Google Fonts needed for print/offline work.

## The wordmark (typographic lockup — live text only)

Since 2026-07-13 the **logo** is the A·I monogram (files in `../Logo/`,
spec in `../Logo/atlas-iris-logo-spec.md`). The ATLASIRIS wordmark below is
the typographic lockup: set it as live text on the web (CSS below); for print
and physical items use the ready-made label PNGs
(`../Logo/atlas-iris-label-dark.png` / `…-light.png`, IRIS in the logo's blue
gradient) instead of re-rendering it yourself.

`ATLASIRIS` set as one word, uppercase Fraunces:

- **ATLAS** — weight 500, letter-spacing `.30em`
- **IRIS** — weight 300, *italic*, letter-spacing `.20em`
- Color: ATLAS in navy `#0E2A4E` (white on dark); IRIS in blue `#1F5FD8` (blue-soft `#4F8DFF` on dark) — in the label PNGs the IRIS carries the full logo gradient `#4F8DFF → #1F5FD8`

```html
<span class="wordmark">ATLAS<span class="i">IRIS</span></span>
```
```css
.wordmark{font-family:'Fraunces',serif;font-optical-sizing:auto;font-weight:500;
  letter-spacing:.30em;text-transform:uppercase;}
.wordmark .i{font-weight:300;font-style:italic;letter-spacing:.20em;}
```

## Setting rules

- Headlines: Fraunces 400 (not bold), tight leading (1.04–1.1), letter-spacing `-.01em`.
  The serif at light weight is the look — bolding it kills it.
- Eyebrows/labels: Inter 600, 10–11px, letter-spacing `.20em–.26em`, uppercase.
- Body: Inter 400, 13–16px, line-height 1.55–1.65. Emphasis with 600, not italic.
- Fraunces italic is reserved for the wordmark's IRIS, pull quotes, and one
  emphasized word in a headline — never for running text.

## Legacy note

Brand book **v2** (`Visual Identity/`, July 2026) uses Fraunces + Inter as
specified here. The old v1.0 PPTX used **Sora + Inter** (the old Agentic
Websites direction) and is kept for history only.
