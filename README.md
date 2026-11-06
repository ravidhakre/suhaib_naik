# Suheb Naik — Founder, Memaar Developers

A five-page, editorial personal-brand website for **Suheb Naik**, founder of
**Memaar Developers**. It is a standalone static site, separate from the main
Memaar project, with no build framework or runtime dependency.

> Position: _Before you buy, sell, invest or develop property in Goa, talk to
> Suheb Naik._

## Pages

| Page | URL | Purpose |
| --- | --- | --- |
| Home | `/` | Positioning, point of view, services, selected work, Memaar, notes |
| Story | `/story/` | Biography, timeline, ventures, values, leadership |
| Expertise | `/expertise/` | Buy / Sell / Invest / Develop, evaluation approach, FAQ |
| Developments | `/developments/` | Selected portfolio, filters, current Memaar portfolio |
| Contact | `/contact/` | Enquiry form (WhatsApp), direct details, map, next steps |

## Run locally

```bash
npm run build   # generates the 5 pages + assets into public/
npm run dev     # builds, then serves public/ at http://localhost:4173
```

`serve.mjs` is a small dependency-free static server that serves `public/` and
resolves clean URLs (`/story/` → `story/index.html`). The site uses
root-relative asset paths, so preview it through the server rather than opening
the HTML files directly.

## Structure

```
suheb-naik/
├─ build.mjs                  # page + CSS + sitemap generator
├─ serve.mjs                  # local preview server (port 4173)
├─ src/
│  ├─ site.mjs                # all content, projects, milestones, FAQs
│  ├─ layout.mjs              # SEO head, header, footer, hero, CTA
│  ├─ pages/*.mjs             # one renderer per page
│  └─ styles/*.css            # stylesheet partials, concatenated on build
├─ assets/
│  ├─ css/site.css            # generated — do not edit directly
│  ├─ js/site.js              # interactions
│  └─ img/*.webp              # local imagery + og.jpg
├─ public/                    # generated deploy output (gitignored)
│  ├─ index.html
│  ├─ story/index.html
│  ├─ expertise/index.html
│  ├─ developments/index.html
│  ├─ contact/index.html
│  ├─ assets/
│  ├─ favicon.svg
│  ├─ site.webmanifest
│  ├─ robots.txt
│  └─ sitemap.xml
├─ favicon.svg
├─ site.webmanifest
└─ vercel.json
```

Edit content in `src/site.mjs` or the relevant `src/pages/*.mjs` file, then run
`npm run build`. Edit styles in `src/styles/*.css` — `assets/css/site.css` is
overwritten every build.

## Deploy

The site is fully static. `vercel.json` sets the build command (`node build.mjs`)
and output directory (`public`), so on Vercel just import the repository with
the **root directory** set to `suheb-naik` — no manual build settings needed.
The same `public/` folder can be deployed to Netlify, Cloudflare Pages, or any
static host.

Before going live, update the canonical domain in `src/site.mjs`
(`site.domain`). It currently uses `https://suhebnaik.com` for canonical URLs,
Open Graph URLs, `sitemap.xml`, and `robots.txt`.

## Replace before launch

These are sensible placeholders and must be replaced with verified details:

- **Phone / WhatsApp** — `+91 98220 12345` / `919822012345`
- **Email** — `suheb@memaar.in`
- **Office** — Memaar House, 2nd Floor, Patto Plaza, Panjim, Goa 403001
- **Domain** — `https://suhebnaik.com`
- **Social profiles** — Instagram / LinkedIn / YouTube in `src/site.mjs`
- **Portrait** — the site currently uses architectural and project imagery; add
  a real portrait of Suheb for the manifesto / story sections when available.
- **Project details** — names, years, roles, and current development stages are
  indicative; verify before publishing.

The contact form has no backend. It validates the required fields and opens
WhatsApp with a pre-filled enquiry. The intent chips are pre-selected from
`?intent=buy|sell|invest|develop`, and `?project=<slug>` adds a starting note.

## SEO

- Unique title, description, canonical, Open Graph and Twitter tags per page.
- `Person` schema with `jobTitle: "Founder"`, `worksFor` and `founderOf`
  Memaar Developers, plus `Organization`, `WebSite`, `ProfilePage`,
  `CollectionPage`, `ContactPage`, `BreadcrumbList`, and `FAQPage`.
- Semantic headings, clean folder URLs, local WebP imagery, lazy loading below
  the fold, and a sitemap.

## Accessibility & performance

- Skip-free but keyboard-complete: focus styles, visible accordion states,
  `aria-expanded`, native `<dialog>` with Escape support, menu focus return.
- `prefers-reduced-motion` disables reveals, parallax, marquee, cursor and hero
  line animations.
- Images are local WebP; only Google Fonts and the contact-page map iframe are
  external requests.
- All interactions are progressive enhancements; content remains readable with
  JavaScript disabled.
