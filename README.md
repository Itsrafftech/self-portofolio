# Rafi Al Arifi — Portfolio

A personal portfolio site built with Next.js 16 (App Router), TypeScript, and Tailwind
CSS v4. Bilingual (Indonesian/English), light/dark theme, and a fully typed data layer
for projects, skills, and experience.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 (CSS-first config) + CSS custom properties for the design system
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: `next/font` — Bebas Neue (display) + Plus Jakarta Sans (body)
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes (dark/light, dark by default)
- **Linting**: ESLint (flat config) + Prettier (with `prettier-plugin-tailwindcss`)

## Getting Started

Requires Node.js 20.9+ (Next.js 16's minimum).

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

A few things are still placeholders and should be swapped before shipping:

- `public/assets/cv.pdf` — replace with your real CV.
- `public/assets/og-image.png` — replace with a real 1200×630 Open Graph image.
- `data/projects.ts` — GitHub/live URLs on individual project cards are placeholders.
- `data/timeline.ts` — company/university names are placeholders; swap in your real history.

GitHub, LinkedIn, and contact email in `components/sections/Contact.tsx` (`socialLinks`)
are already filled in.

## Design System

Colors are defined as CSS custom properties in `app/globals.css` (`:root` = dark, `.light`
overrides) and mapped into Tailwind's theme namespace via the `@theme inline` block in the
same file — there's no `tailwind.config.ts`; Tailwind v4 is CSS-first, and content
scanning is automatic. Dark is the default theme; `next-themes` toggles a `.light` class
on `<html>` to swap the variables.

## i18n

`hooks/useLanguage.tsx` provides a `useLang()` hook (`{ lang, toggleLang, t, tList }`)
backed by the dictionary in `lib/i18n.ts`. Language choice persists to `localStorage`.
Add new strings to both the `id` and `en` blocks in `lib/i18n.ts`.

## Known Tradeoffs

- `lucide-react` is pinned to `^0.499.0` instead of the current `1.x` line — Lucide
  dropped brand/logo icons (GitHub, LinkedIn) in its 1.0 release, and this site's Contact
  section needs them. `0.499.0` is the last release that still ships them.
- A couple of hooks (`useLanguage.tsx`) have a `// eslint-disable-next-line
  react-hooks/set-state-in-effect` on the localStorage read on mount — this is a
  deliberate exception: reading `localStorage` must happen post-hydration to avoid a
  server/client mismatch, which is exactly what that effect does.

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

Before your first production deploy, confirm `siteUrl` in `app/layout.tsx` matches your
real domain so Open Graph/Twitter card metadata resolves correctly.
