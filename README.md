# Agentic Website

Marketing site for Agentic Website — AI-built websites for local businesses
without a web presence. Danish-language landing page covering the offer
(first month free, then ~500 kr/month, no setup fee), the build process, and
a contact form for leads.

Live site: https://agentic-website.vercel.app (once deployed)

## Stack

- **Next.js** (App Router, TypeScript, Tailwind CSS v4)
- **Vercel** — hosting

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/page.tsx` — the landing page (hero, value props, process, pricing,
  contact)
- `src/app/layout.tsx` — root layout, renders `Header` and `Footer`
- `src/components/ui/` — design-system components (`Button`, `Card`,
  `Container`, `Section`, `Heading`, `Header`, `Footer`, `ContactForm`)
- `src/app/globals.css` — brand color tokens (`--primary`, `--secondary`,
  `--accent`, `--background`, `--foreground`)

This repo started from the `client-template` used for client builds, with the
Supabase wiring removed since this site has no auth/database needs. The
contact form currently just shows a confirmation message client-side — wire
it up to a backend or form service when lead volume warrants it.

## Deploying

Connect the repo to Vercel and deploy. No environment variables required.
