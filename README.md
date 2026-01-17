# PMD Marketing (Astro)

SEO-first marketing site for PMD. The dashboard lives in `pmd_frontend/` and is intended to run on `app.pmd.com`.

## Requirements
- Node 24+

## Setup
1. Copy `.env.example` to `.env` and adjust values.
2. Install dependencies: `npm install`

## Commands
- `npm run dev` - local dev server at `http://localhost:4321`
- `npm run build` - production build in `dist/`
- `npm run preview` - preview the production build

## Environment
- `PUBLIC_SITE_URL` - canonical marketing site URL (for SEO, sitemap, robots)
- `PUBLIC_APP_URL` - dashboard URL used for CTA links
