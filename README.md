# atlasiris.dk

Atlas Iris' own marketing site — professional websites for local Danish
businesses, built in days. Danish-language funnel: hero, pain card, results
strip, bento grid, founders, two paths, FAQ, final CTA. Design follows the
NTC reference layout wearing the Atlas Iris Brand Book v2 skin (see
`REBUILD-BRIEF.md` and `design-reference/`).

Domain: **atlasiris.dk** (DNS switch happens at go-live — manager session).

## Stack

- **Next.js** (App Router, TypeScript, Tailwind CSS v4)
- **Vercel** — hosting
- Self-hosted fonts: Fraunces + Inter variable woff2 in `src/fonts/`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/page.tsx` — the entire landing page, section by section
- `src/app/layout.tsx` — fonts, Danish metadata, JSON-LD, `Header`/`Footer`
- `src/components/` — `Wordmark`, `Header`, `Footer`
- `src/lib/site.ts` — contact channel + site constants (phone is the only
  confirmed channel; add mailto links only once Jonas confirms addresses)
- `src/app/globals.css` — Atlas Iris color tokens and display-type rules

## Brand law (do not deviate)

Fraunces never bold · one italic blue word per headline · blue `#1F5FD8`
only on click targets · Danish copy, no tech jargon. The logo is the A·I
monogram (since 2026-07-13, masters in `design-reference/logo/`) — anything
with rings or an eye is the retired mark, never render it. Full rules in
`REBUILD-BRIEF.md`.

## Deploying

Vercel, no environment variables. Do not switch DNS from this repo — go-live
is handled by the manager session.
