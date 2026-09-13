# bilaal-portfolio

My personal portfolio — designed and built from scratch with React and Vite.

**Live site:** [bilaal-portfolio-wine.vercel.app](https://bilaal-portfolio-wine.vercel.app)

## What this is

I'm Bilaal Adenuga — technical founder, full-stack engineer, and co-founder of MOBO Digital. This site is where I keep my work, my story, and every way to reach me. I hand-wrote every part of it myself: the layout, the color system, the copy, the responsive behavior, and the SEO setup. No templates, no page builders — just the code you see in this repo.

## The design

I deliberately went for a bold editorial look instead of the usual safe portfolio style:

- **Monochrome base** — an obsidian (`#0d0d0d`) header and footer frame a paper-white page, with thin graphite hairlines doing the separating.
- **Blue accent (`#2563EB`)** — I cycled through violet, emerald, and amber before landing on blue. It's calm, trustworthy, and keeps the black-and-white base from feeling flat.
- **Typography** — Inter for everything (weights 300–900), JetBrains Mono for code-flavored touches.
- **Named color tokens** — every color lives as a CSS custom property (`--color-obsidian`, `--color-plasma-violet`, …), so re-theming the whole site means editing one block.
- **Hero photo** — offset border frame, rounded corners, grayscale-to-color on hover.

## Pages

| Route | What's on it |
|---|---|
| `/` | Typed.js hero headline, animated stats, skills, selected projects |
| `/work` | Filterable featured projects + a live grid of my GitHub repos |
| `/journey` | My timeline — how I got here |
| `/now` | What I'm currently working on |
| `/resume` | A web version of my CV |
| `/contact` | Contact details and a form |

## Features I built in

- **Live GitHub repos** — the Work page fetches all my public repos from the GitHub API, with localStorage caching (30-minute TTL), a search box, and language filter chips.
- **Category filters** on the Work page to sort projects by type.
- **Animated stats** — counters that count up when they scroll into view.
- **"Available for work" badge** — a pulsing status chip in the navbar that links to my contact page; it collapses to just the dot on small screens.
- **Full-screen mobile menu** (using `100dvh` so it plays nice with iOS Safari), plus a scroll progress bar, a splash screen, and scroll-to-top.
- **Responsive everywhere** — I fixed every overflow I could find down to 320px-wide phones.
- **Custom 404** with a way back.

## SEO

I set this up myself rather than outsourcing it to a plugin:

- Meta, Open Graph, and Twitter tags, with a custom 1200×630 social card (`og-card.jpg`) I designed and rendered.
- **JSON-LD Person structured data** — name, job title, email, and links to my GitHub, LinkedIn, and Instagram.
- `sitemap.xml` and `robots.txt`, plus canonical URLs on every page.

## Tech stack

- **React 19** + **Vite 7** — the core
- **React Router 7** — client-side routing
- **Tailwind CSS 4** (via PostCSS) alongside hand-written CSS for the design system
- **Framer Motion** — animations and micro-interactions
- **Typed.js** — the rotating hero headline
- **ScrollReveal** — scroll-triggered reveals
- **lucide-react** + **Unicons** — icons

Requires **Node ≥ 20.19** (pinned in `package.json` and `.nvmrc`).

## Run it locally

```bash
git clone https://github.com/Bilaaladenuga/bilaal-portfolio.git
cd bilaal-portfolio
npm install
npm run dev
```

Then open http://localhost:5173.

For a production build:

```bash
npm run build
npm run preview
```

## Deployment

The site deploys automatically to **Vercel** — every push to `main` triggers a fresh build, and the live URL updates once it's ready.

## What's next

Things I'm considering adding when I get the time: project case-study pages, a testimonials section, a dark mode toggle, and a custom domain.

## Reach me

- **Email:** adenugabilaal75@gmail.com
- **GitHub:** [Bilaaladenuga](https://github.com/Bilaaladenuga)
- **LinkedIn:** [adenuga-bilaal](https://ng.linkedin.com/in/adenuga-bilaal)
