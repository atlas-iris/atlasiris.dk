# atlasiris.dk — Rebuild Brief (READ FIRST)

**Mission:** replace this repo's old green "Agentic Website" page entirely with the Atlas Iris funnel. Deploy to Vercel, domain **atlasiris.dk** (registered ✔). **Nothing from the current site survives** — not the palette, not the components' look, not the emoji cards. Jonas's words: scrap everything.

## The two sources of truth — nothing else

| Source | Governs | Where |
|---|---|---|
| **NTC mockup** | Layout, structure, section rhythm, feel | `design-reference/ntc-reference.png` |
| **Atlas Iris Brand Book v2** | Colors, type, logo use, voice — LAW | OneDrive `01 Brand & Identity/Visual Identity/brandbook-slides/` (12 slides) + copies below |

These two agree with each other: the NTC mockup is light-background, navy-text, blue-accent, serif-display-with-one-italic-word — which is precisely the brand book's system. Build the NTC structure wearing Atlas Iris skin.

## Brand law (from the book — do not deviate)

**Color** (tokens: OneDrive `01 Brand & Identity/Colors/atlas-iris-tokens.css`, created from slide 05):
- Navy `#0E2A4E` leads · Ink `#1A2433` body · Mist `#F4F7FC` light sections · Line `#E7EDF6` hairlines
- **Blue `#1F5FD8` is for the ONE thing we want clicked** — buttons, links, the IRIS. Don't spray it.
  (2026-07-13 rework: accent blues re-aligned to the A·I monogram gradient — `#2F6BFF`→`#1F5FD8`,
  `#6E9CFF`→`#4F8DFF`. Navy family + neutrals unchanged.)
- Faint `#8595AB` captions only, never body copy. Hero gradient (`#081B33→#13355F`) for heroes/bands only — the page itself stays light like the NTC mockup.

**Typography** (slide 06, fonts in `design-reference/fonts/`, self-host — no Google Fonts):
- Display: **Fraunces 400 at light optical sizes — NEVER bold.** Leading 1.04–1.1.
- *Italic is reserved:* the wordmark's IRIS, pull quotes, and **one emphasized word per headline** (blue) — exactly the NTC headline pattern.
- Body/UI: **Inter 400**, 13–16px, line-height 1.55–1.65. Emphasis = weight 600, never italics in running text.
- Eyebrows/pills: Inter 600, tracked wide — the NTC section-pill pattern.

**Logo** (slide 04, since 2026-07-13): the **A·I monogram** is the logo (`design-reference/logo/` — masters + spec). File names describe the logo's own color: `-dark` = navy logo → light backgrounds, `-light` = white logo → navy backgrounds; below ~48px use the icon version. The ATLASIRIS lockup is live text (wordmark component). The concentric-ring iris mark, the wordmark images and the old "AW" mark are ALL retired — never render them.

**Voice** (slides 02+): Danish, direct, zero tech jargon (never "AI", "Astro", "deploy" client-facing), zero hype/superlatives. Lead with the result: found on Google → booked calendar.

## Page structure (mirror NTC top-to-bottom, swap content)

1. **Hero** — pill · Fraunces headline, one italic blue word · sub · navy pill CTA ("Book et opkald") · trust bullets (gratis demo · klar på få dage · ingen binding)
2. **Pain card** — white rounded card: the four owner situations (DIY-opgivet · bureau for dyrt · kun Facebook · vidste ikke det kunne gøres)
3. **Results strip** — photo row: flagship screenshots (Klinik BeautyLab; Princess Beauty at go-live)
4. **Bento grid** — "Sådan føles det, når det virker": booking 24/7 · ét-tryks-ring · synlige priser · hurtig på mobilen · GDPR · findes på Google
5. **Meet the founders** — Jonas & Fran + stat chips (dage, ikke måneder · bygget i Aarhus · dansk-first)
6. **Two paths** — muted "gør det selv" card vs. blue-tinted "lad Atlas Iris klare det" card + CTA
7. **FAQ accordion** — pris? binding? hvor hurtigt? booking? GDPR? hvad hvis jeg ikke kan lide den?
8. **Final CTA** — Fraunces headline with italic accents + navy pill button

Copy: write fresh Danish following voice law; the retired funnel HTML (`design-reference/atlas-iris-funnel.html`) may be quarried for phrasing ONLY — zero design reuse.

## Practical facts

- **Domain:** atlasiris.dk active until Jun 2027. DNS currently parked on GoDaddy WebsiteBuilder → at go-live: `A @ → 76.76.21.21`, `www → cname.vercel-dns.com`.
- **Email:** M365 DNS wired on the domain (MX/SPF/autodiscover). Confirm exact addresses with Jonas; never ship old `@agenticwebsites.dk`. Fallback: phone **+45 52 77 44 19** + form.
- `package.json` name is still `agentic-website` → rename to `atlasiris-dk`.
- SEO: Danish title/meta, `ProfessionalService` JSON-LD (Aarhus), favicons from `design-reference/` (regenerate og-image to match the new light design).
- No analytics at launch = no cookie banner. If added later: cookieless only.

## Definition of done

- [ ] Matches NTC structure + brand-book tokens on mobile AND desktop
- [ ] Fraunces never bold · italic only 1 word/headline · blue only on click targets
- [ ] Fonts self-hosted, Lighthouse perf ≥ 90 mobile
- [ ] `grep -ri "agentic" src/ package.json` → nothing user-facing
- [ ] Deployed on Vercel; DNS switch at go-live
- [ ] Session logged in OneDrive hub `06 Website Projects/atlasiris-dk-website/README.md` + `git push`

## Working rules (same as princess-beauty)

Push at end of every session. Log every session in the OneDrive hub. Jonas is on vacation Jul 6–28 — default to shipping; flag only irreversible decisions.
