# geoglows.org

Redesigned GEOGLOWS website — Astro (static) + Sveltia CMS (Git-based), GEO-branded.

Content editors manage everything through a form-based admin at `/admin`; developers add
new blocks and components that editors then compose into pages. See [DEPLOY.md](./DEPLOY.md)
for deployment and editor login setup.

## Develop

```bash
nvm use 22        # Astro requires Node >= 22.12
npm install
npm run dev       # http://localhost:4321
npm run build     # static output to dist/
```

## Structure

```
src/
  content/            Editable content (settings, pages, news, publications)
  content.config.ts   Collection schemas
  schemas/            Reusable Zod schemas (blocks, shared fields)
  components/
    blocks/           One component per page block + BlockRenderer
    cards/            NewsCard, PublicationRow
    site/             Nav, Footer, EventsTicker, GeoGlyph
    ui/               Button, SectionHeader, Icon
  layouts/            BaseLayout
  pages/              index (home), [slug] (other pages), publications, news
  styles/             tokens (GEO brand), fonts, global
public/
  admin/              Sveltia CMS (index.html + config.yml)
  fonts/ images/      Brand fonts, GEO logo, photography
api/                  GitHub OAuth relay for Sveltia (auth, callback)
scripts/              fetch-doi.mjs — create publications from a DOI
```

## Content model

- **Pages** are composed of typed **blocks** (hero, statBand, coverage, impactStories,
  valueProps, useCases, testimonials, partners, howItWorks, newsletter, closingCta,
  newsGrid). Add a block: create its schema in `src/schemas/blocks.ts`, its component in
  `src/components/blocks/`, register it in `BlockRenderer.astro`, and add its form to
  `public/admin/config.yml`.
- **News** and **Publications** are folder collections editors add to directly.

