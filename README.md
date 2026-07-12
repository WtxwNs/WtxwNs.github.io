# Tongxi Wang Academic Homepage

Personal academic homepage for Tongxi Wang / 王童曦, built with Astro, TypeScript, Tailwind CSS, MDX, and Astro Content Collections.

The information architecture balances academic research with systems work:

- Research: learning dynamics, adaptive computation, and reliable learning
- Publications: complete research archive
- Systems: medical robotics, agent workflows, and embedded/FPGA work
- Writing: research notes and essays
- CV: education, publications, projects, coursework, and honors

The public site is configured for:

```text
https://wtxwns.github.io
```

Chinese is the default language. English remains available under `/en`.

## Local Development

Use pnpm through Corepack if the short `pnpm` command is not on PATH:

```powershell
corepack pnpm install
corepack pnpm dev
```

Open:

```text
http://localhost:4321/zh
http://localhost:4321/en
```

## Scripts

```powershell
corepack pnpm check
corepack pnpm build
corepack pnpm preview
corepack pnpm format
```

## Repository and Deployment

The `source` branch is the single source of truth. Push source changes there; GitHub Actions builds the site and publishes the generated `dist` artifact to GitHub Pages. Do not manually copy individual generated HTML files into `main`.

In repository settings, configure Pages to use **GitHub Actions** as the deployment source.

## Repository Hygiene

Do not commit generated or installed files:

```text
node_modules
dist
.astro
.vercel
.DS_Store
*.log
```

These are already covered by `.gitignore`.

## Content

- Publications: `src/content/publications/*.md`
- Projects: `src/content/projects/*.md`
- Blog posts: `src/content/blog/*.mdx`
- Profile data: `src/data/profile.ts`
- Monogram: `src/components/Monogram.astro`
- Social preview: `public/og-card.svg` and `public/og-card.png`

Only add publication links when they are real. Empty, missing, or `#todo` links are intentionally hidden by the UI.

## Public CV

The website uses the web CV pages at `/zh/cv` and `/en/cv`.

Add `public/cv.pdf` only when a redacted public CV is ready. The public CV must not include a phone number, future PhD information, or other private academic details. Until a redacted PDF is ready, keep `hasPublicPdfCv: false` in `src/data/profile.ts`.

Do not expose a phone number anywhere in data, pages, generated content, README examples, or JSON-LD.

## Deployment

### GitHub Pages

The workflow in `.github/workflows/deploy.yml` runs on pushes to `source`, builds the static site, and deploys `dist` to GitHub Pages.

### Vercel

Use:

- Install command: `pnpm install`
- Build command: `pnpm build`
- Output directory: `dist`
