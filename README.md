# Rafi Al — Portfolio

A personal portfolio site built with Next.js 14 (App Router), TypeScript, Tailwind CSS,
and Framer Motion. Bilingual (Indonesian/English), light/dark theme, and a fully typed
data layer for projects, skills, and experience.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + CSS custom properties for the design system
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: `next/font` — Bebas Neue (display) + Plus Jakarta Sans (body)
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes (dark/light)
- **Linting**: ESLint + Prettier (with `prettier-plugin-tailwindcss`)

## Getting Started

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
npm run format  # Prettier --write
```

## Project Structure

```
app/                   Root layout, home page, global styles
components/
  layout/               Navbar, Footer
  sections/             Hero, About, Skills, Projects, Timeline, Contact
  ui/                    Button, Badge, ProjectCard, SkillCard, TimelineItem, SectionHeading
  providers.tsx          Wraps ThemeProvider + LanguageProvider
lib/                    i18n dictionary, cn() class-merge helper
data/                   projects.ts, skills.ts, timeline.ts (typed content)
hooks/                  useLanguage (i18n context), useScrollSpy (active nav section)
types/                  Shared TypeScript interfaces
public/assets/          CV PDF, OG image
```

## Content You Should Replace

A few things are placeholders and should be swapped before shipping:

- `public/assets/cv.pdf` — replace with your real CV.
- `public/assets/og-image.png` — replace with a real 1200×630 Open Graph image.
- Social links in `components/sections/Contact.tsx` (`socialLinks`) — currently point to
  `github.com/yourusername`, `linkedin.com/in/yourusername`, and a placeholder email.
- `data/projects.ts` — GitHub/live URLs are placeholders.
- `data/timeline.ts` — company/university names are placeholders; swap in your real history.
- `app/layout.tsx` — `siteUrl` is set to a placeholder domain; update once you have one.

## Design System

Colors are defined as CSS custom properties in `app/globals.css` and mapped into Tailwind
via `tailwind.config.ts` (e.g. `bg-bg-primary`, `text-accent-gold`). Dark is the default
theme; `next-themes` toggles a `.light` class on `<html>` that overrides the variables.

## i18n

`hooks/useLanguage.tsx` provides a `useLang()` hook (`{ lang, toggleLang, t, tList }`)
backed by the dictionary in `lib/i18n.ts`. Language choice persists to `localStorage`.
Add new strings to both the `id` and `en` blocks in `lib/i18n.ts`.

## Known Tradeoffs

- Pinned to **Next.js 14.2.35** / React 18 / Tailwind v3 to match the requested stack.
  `npm audit` will report several high-severity advisories that only have fixes in the
  Next.js 15/16 line — these are inherent to staying on Next 14 and not vulnerabilities
  introduced by this codebase. Upgrade the major version if that tradeoff isn't acceptable.
- `next.config.ts` isn't supported until Next 15, so config lives in `next.config.mjs`.

## Deploying to Vercel

1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset auto-detects as Next.js — no config changes needed.
4. Deploy. Every push to the default branch redeploys automatically; PRs get preview
   deployments.

Or via the CLI:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

Before your first production deploy, update `siteUrl` in `app/layout.tsx` to your real
domain so Open Graph/Twitter card metadata resolves correctly.
# self-portofolio
