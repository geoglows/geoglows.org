---
title: GEOGLOWS site IA restructure - Plan
type: feat
date: 2026-08-20
artifact_contract: ce-unified-plan/v1
artifact_readiness: implementation-ready
product_contract_source: ce-plan-bootstrap
execution: code
---

# GEOGLOWS site IA restructure - Plan

## Goal Capsule

**Objective.** Reorganize the GEOGLOWS marketing site around the stakeholder-approved
information architecture: a 5-group top nav (What We Do · Impact · Community ·
Tools & Data · About), a tightened landing page, and content consolidated from
today's scattered pages into those five destinations. Everything stays editable
in the Sveltia `/admin` CMS and keeps the current GEO brand styling.

**Means.** Reuse the existing Astro block system (`src/content/pages/*.md` +
`src/components/blocks/*` + `public/admin/config.yml`) and content collections.
Add new block types only where an existing one cannot express the layout.
Re-path routes cleanly (no redirects; nothing links to the old URLs yet) and
update every internal link.

**Authority.** Stakeholder feedback (this task) is the product source of truth.
Where it is silent on layout, the current site's patterns and GEO brand win.

**Stop conditions.** Done when the five pages exist with the specified sections,
the landing page matches the spec, the nav reflects the new IA, `npm run build`
passes, `/admin` loads with no config error, and no internal link points at a
removed route.

## Product Contract

**Summary.** The site currently exposes many standalone pages (`/service`,
`/getting-started`, `/resources`, `/publications`, `/news`, `/videos`, `/tools`,
`/about`, plus the mission-led home). Stakeholders want these folded into five
canonical pages with a clearer story, plus specific landing-page cleanups.

### Problem Frame
The present nav and page set grew organically and no longer match how GEOGLOWS
wants to tell its story (what we do → impact → community → tools/data → about).
Content is spread thin, some sections are mislabeled ("Partnerships"), and the
landing page carries elements stakeholders no longer want ("In active use by",
USAID logo, un-sized social thumbnails). Because the site is pre-launch with no
inbound links, routes can change freely.

### Requirements

Landing page (route `/`):
- **R1.** Section order is: Mission (hero) → social cards (right) → **Project
  highlights** → stat band (7.2M …) → **Funded by**. Nothing after Funded by.
- **R2.** Social-card post thumbnails are reduced to ~half their current size.
- **R3.** Add a **"Project highlights"** titled section featuring one or two
  strong SERVIR videos (Nepal, West Africa) as social proof, ending with an
  **"Explore all resources →"** link to Tools & Data → Resources.
- **R4.** Remove the **"In active use by"** row entirely.
- **R5.** In **Funded by**, remove **USAID**; keep the remaining logos at a
  consistent, uniform size.

Navigation:
- **R6.** Top nav is exactly: **What We Do · Impact · Community · Tools & Data ·
  About** (plus the existing "Open Hydroviewer" CTA). Old top items (Get
  Started, Partnerships, Investment, Get involved) are demoted to sections.

What We Do (route `/what-we-do`):
- **R7.** Keep the "what we work on" pillars but **remove the "Explore the tools
  & data hub" link**. This page is the theory + how-the-architecture-fits story.
- **R8.** Migrate the current **GEOGLOWS Service** content here, starting with
  "Getting started", including the **"What's new in GEOGLOWS V2"** wording.

Impact (route `/impact`):
- **R9.** Keep "Beyond forecasts…" and "Impact around the world", and structure
  the page around: **Impact stories · Countries/projects · Results · Case
  studies**.

Community (route `/community`):
- **R10.** Sections: **Partners** (renamed from "Partnerships"; heading "Our
  Partners", "Meet our partners →"), **Researchers & students** (BYU Capstone
  Program), **News, Events & Webinars** (news shown on the right, like the
  landing), **Investment** (the funding case), **Get involved** (Ways to work
  with us, "Partner with us on funding →").
- **R11.** Add **WMO, SERVIR, AWS, Google.org** to the GEOGLOWS community/partner
  set.

Tools & Data (route `/tools`):
- **R12.** Sections: **Getting started · Tools (apps.geoglows.org) · Access the
  data · Resources**. Resources presents four groupings: **Publications · Videos
  · Webinars · Tutorials**.
- **R13.** **Tutorials** links out to the existing **training.geoglows.org**
  (no new content model).
- **R14.** Document-filing convention is wired into the IA: scientific/technical
  paper → Tools & Data → Publications; impact report/case study → Impact;
  annual/organizational report → About. New CMS collections for case studies and
  annual reports are **deferred** until real documents exist (convention only now).

About (route `/about`):
- **R15.** Start with **Mission** (same content as the landing mission), then
  **Who we are**, then keep **Leadership**, **Steering Committee**, and
  **Collaborators**. **Remove the four working groups.**

Cross-cutting:
- **R16.** Old routes `/service`, `/getting-started`, `/resources`, `/news` are
  removed; `/publications` and `/videos` remain (surfaced as Resources tabs).
  Every internal link (nav, footer, cross-links, CTAs) is updated to the new IA.
- **R17.** All new/changed sections remain editable in Sveltia `/admin`
  (`public/admin/config.yml` updated; `/admin` loads with no config error).

### Scope Boundaries
- **In scope:** page content/structure, nav, landing cleanups, CMS config, the
  logo/community additions, internal links, brand-consistent new blocks.
- **Out of scope (deferred):** new CMS collections for case studies / annual
  reports (convention only); any brand/visual redesign; the Hydroviewer app;
  external redirects (unnecessary pre-launch); a Tutorials content model.

### Open Questions
None blocking. (Routes, Tutorials source, report collections, and build scope
were resolved with the stakeholder before planning.)

### Sources
- Stakeholder feedback (this task).
- Current implementation: `src/content/pages/*.md`, `src/components/blocks/*`,
  `src/pages/*.astro`, `public/admin/config.yml`, `src/content/settings/site.json`.

## Planning Contract

### Key Technical Decisions (KTDs)
- **KTD-1 — Reuse the block/collection system.** Each of the 5 pages is a
  `src/content/pages/<slug>.md` composed of block types rendered by
  `src/components/blocks/BlockRenderer.astro`. New block types are added to
  `src/schemas/blocks.ts` + a component + the renderer registry + `config.yml`.
  Rationale: keeps everything CMS-editable and on-brand; matches existing design.
- **KTD-2 — Clean re-paths, no redirects.** Rename page markdown files / routes
  to the new slugs and delete the retired ones; update all internal links.
  Rationale: pre-launch, nothing references old URLs (confirmed with stakeholder).
- **KTD-3 — Keep deep lists as their own routes.** `/publications` and `/videos`
  stay standalone (searchable/full lists) and are linked as Resources tabs from
  Tools & Data, rather than inlined. Rationale: preserves the working
  filter/search UIs; avoids duplicating large lists.
- **KTD-4 — Minimize new block types.** Prefer existing blocks (richText,
  pillars, impactCycle, impactStories, partners, investment, audienceCards,
  timeline, statBand, trustStrip, missionHero, toolsGrid, peopleGrid, newsGrid,
  closingCta). Introduce at most: a **featuredMedia** block (Project highlights /
  SERVIR videos) and a **resourceTabs** block (Tools & Data → Resources).
- **KTD-5 — Community "news on the right".** Reuse the mission-hero social-panel
  pattern (a two-column block with content left, a news/updates rail right) for
  the Community News/Events section rather than a full-width grid.

### High-Level Technical Design
- Pages: rename `home.md` stays; create `what-we-do.md`, `community.md`,
  `impact.md`; rewrite `tools.md`; rewrite `about.md`; delete `service.md`,
  `getting-started.md`, `resources.md`. (`/news` route + `news.astro` retired;
  news content moves into Community.)
- Nav data in `src/content/settings/site.json` → 5 groups.
- New blocks: `featuredMedia`, `resourceTabs` (schemas + components + renderer +
  admin config). Extend `partners`/`trustStrip` logo lists for R11/R5.
- SEO for the 5 pages comes from each page markdown's own `title`/`description`
  (via `BaseLayout` + `[slug].astro`); the `page-sections` singletons only back
  the custom `.astro` routes, so only the retired `news` singleton is removed.

### Assumptions
- SERVIR Nepal / West Africa "videos" are YouTube (reuse `VideoCard`/embed);
  if a specific video ID isn't supplied, seed a placeholder ID the CMS can edit.
- BYU Capstone content is short prose GEOGLOWS can refine in the CMS.
- Community logo additions (WMO, SERVIR, AWS, Google.org) reuse existing logo
  assets where present (`public/images/partners/`); Google.org may need a logo
  file — flagged in U6.

### Sequencing
Phases run top-down; each is independently buildable and reviewable on
`site-restructure`. Nav (U1) and shared blocks (U2 helpers) land first so pages
can link correctly; cross-cutting cleanup (U9) lands last.

## Implementation Units

### Unit Index
- **U1** — New navigation IA (5 groups) + internal-link audit scaffolding
- **U2** — New blocks: `featuredMedia` + `resourceTabs` (schema/component/renderer/admin)
- **U3** — Landing page edits (R1–R5)
- **U4** — What We Do page (R7–R8)
- **U5** — Tools & Data page + Resources tabs (R12–R14)
- **U6** — Community page (R10–R11)
- **U7** — Impact page (R9)
- **U8** — About page (R15)
- **U9** — Retire old routes + internal-link/SEO cleanup (R16–R17)

### U1 — Navigation IA
- **Files:** `src/content/settings/site.json`, `public/admin/config.yml` (nav already editable).
- **Approach:** Replace `nav` with the 5 groups (R6). Each group's `href` points
  at its page (`/what-we-do`, `/impact`, `/community`, `/tools`, `/about`); add
  dropdown `children` mirroring each page's sections (anchors). Keep the
  "Open Hydroviewer" CTA.
- **Test scenarios:** nav renders 5 top items + CTA; dropdowns list the sections;
  desktop + mobile menus work (Playwright); no link points to a removed route.

### U2 — New blocks (featuredMedia, resourceTabs)
- **Files:** `src/schemas/blocks.ts`, `src/components/blocks/FeaturedMediaBlock.astro`,
  `src/components/blocks/ResourceTabsBlock.astro`, `src/components/blocks/BlockRenderer.astro`,
  `public/admin/config.yml`.
- **Approach:** `featuredMedia` = eyebrow/heading/intro + 1–2 large media cards
  (image/thumbnail, title, location, video/link URL) + optional CTA link
  (used for Project highlights and reusable elsewhere). `resourceTabs` =
  heading/intro + labelled groups each pointing to a route or external URL
  (Publications/Videos/Webinars/Tutorials). **Both schemas declare an optional
  `anchor: z.string()` field** — `BlockRenderer` renders `id={anchor}` generically
  but Astro's Zod parse strips keys not in the schema, so without it the
  `#resources` anchor (R3's landing CTA target) would silently never render.
  Add both to the discriminated union, the renderer registry, and admin block
  `types` (including the `anchor` field).
- **Test scenarios:** both blocks render from a sample page; build passes;
  fields appear in `/admin`; a block with `anchor: resources` emits
  `id="resources"`; reduced-motion safe hover; images use `bgImage()`.

### U3 — Landing page (`src/content/pages/home.md`)
- **Files:** `src/content/pages/home.md`, `src/components/blocks/MissionHeroBlock.astro`
  (its `.thumb` sizing drives the landing social rail — `SocialFeed.astro` is only
  used by the retired `news.astro`, so editing it would not affect the landing),
  `src/content/settings/site.json` (funder logos),
  `src/components/blocks/TrustStripBlock.astro` if needed.
- **Approach:** Reorder blocks to the exact R1 sequence: **mission hero (with its
  right-side social panel) → Project highlights (featuredMedia, SERVIR Nepal/West
  Africa + "Explore all resources →" → `/tools#resources`) → stat band → Funded
  by**. Halve the `MissionHeroBlock` social `.thumb` size (R2). Remove the "In
  active use by" trust-strip group (R4). Remove USAID from the funders group and
  equalize logo sizing (R5). Move now-unused landing sections (the `partners`
  logo wall, `pillars`, `impactCycle`, etc.) to their new pages.
- **Test scenarios:** landing shows exactly the R1 sequence and ends at Funded
  by; no "In active use by"; no USAID; social thumbnails visibly smaller;
  "Explore all resources →" resolves; build + Playwright pass.

### U4 — What We Do (`src/content/pages/what-we-do.md`)
- **Files:** `src/content/pages/what-we-do.md`; delete `src/content/pages/service.md`,
  `src/content/pages/getting-started.md` after migration.
- **Approach:** pillars block **without** the intro link (R7); migrate
  `service.md` richText (incl. "What's new in GEOGLOWS V2") + getting-started
  content into ordered sections starting with Getting started (R8); close with a
  relevant CTA. This is the theory/architecture page.
- **Test scenarios:** page renders migrated Service + V2 content; no "Explore the
  tools & data hub" link; nav "What We Do" resolves here.

### U5 — Tools & Data (`src/content/pages/tools.md`)
- **Files:** `src/content/pages/tools.md`, `src/components/blocks/ResourceTabsBlock.astro`,
  `src/pages/videos.astro` (add `id="webinars"` to the webinar `<section>`).
- **Approach:** sections Getting started → Tools (link apps.geoglows.org) →
  Access the data (migrate the data-access richText) → Resources (`resourceTabs`,
  `anchor: resources`) with Publications→`/publications`, Videos→`/videos`,
  **Webinars→`/videos#webinars`** (requires adding `id="webinars"` to the webinar
  section in `src/pages/videos.astro`, which currently has no id),
  Tutorials→`https://training.geoglows.org` (R12–R14).
- **Test scenarios:** all four Resource tabs link correctly; Tutorials opens the
  training portal; `/tools#resources` scrolls to Resources (R3 landing link);
  `/videos#webinars` scrolls to the webinar section.

### U6 — Community (`src/content/pages/community.md`)
- **Files:** `src/content/pages/community.md`, `partners` logo list,
  `public/images/partners/` (add Google.org if missing).
- **Approach:** Partners (rename to "Our Partners", partners block + "Meet our
  partners →") → Researchers & students (BYU Capstone richText) → News, Events &
  Webinars (news-on-right block, KTD-5) → Investment (existing investment block)
  → Get involved (audienceCards + "Partner with us on funding →"). Add WMO,
  SERVIR, AWS, Google.org to the community/partner logos (R11); reuse existing
  logo assets, flag Google.org if a file is needed.
- **Test scenarios:** all five sections render; "Partnerships" no longer appears
  anywhere; four new logos show; news rail renders on the right.

### U7 — Impact (`src/content/pages/impact.md`)
- **Files:** `src/content/pages/impact.md`.
- **Approach:** "Beyond forecasts…" (impactCycle) + "Impact around the world"
  (impactStories), organized to cover Impact stories · Countries/projects ·
  Results · Case studies (R9). Case studies section is a labelled placeholder per
  the deferred-collection convention (R14).
- **Test scenarios:** both existing sections render on `/impact`; the four
  sub-themes are present as sections/anchors.

### U8 — About (`src/content/pages/about.md`)
- **Files:** `src/content/pages/about.md`.
- **Approach:** Mission (reuse landing mission copy) → Who we are (richText) →
  Leadership (peopleGrid) → Steering Committee (peopleGrid) → Collaborators
  (peopleGrid). Remove the `workingGroups` block (R15).
- **Test scenarios:** no "Four working groups" section; Leadership/Steering/
  Collaborators intact with photos; Mission present.

### U9 — Retire old routes + link/SEO cleanup
- **Files:** delete `src/content/pages/resources.md` (U4 already deletes
  `service.md` + `getting-started.md` after migration); retire `src/pages/news.astro`
  and its SEO singleton (`src/content/page-sections/news.json` + its `config.yml`
  files entry); audit `src/content/settings/site.json` footer, all
  `closingCta`/cross-links, and `public/admin/config.yml`.
- **Approach:** grep for `/service`, `/getting-started`, `/resources`, `/news`
  across `src/` and `src/content/`; repoint each to the new IA. The 5 new pages
  get SEO from their own `title`/`description` frontmatter, so no page-section
  singletons are created for them — only the stale `news` singleton is removed.
  Verify admin config still validates and `/admin` loads.
- **Test scenarios:** `grep -r` finds no references to removed routes; `/admin`
  loads with no config error; `npm run build` builds all pages; Playwright smoke
  over the 5 pages + landing in light/dark shows no console errors or broken
  images.

## Verification Contract
- **Build:** `nvm use 22 && npm run build` completes with 0 errors.
- **CMS config:** `python3 -c "import yaml; yaml.safe_load(open('public/admin/config.yml'))"`
  is valid; headless load of `/admin` shows the sign-in screen (no "error in the
  CMS configuration").
- **Functional (Playwright, chromium `--no-sandbox`):** each of `/`, `/what-we-do`,
  `/impact`, `/community`, `/tools`, `/about` loads with no console errors, no
  failed image requests, exactly one `<h1>`, no horizontal overflow at 390px, in
  light and dark.
- **Link integrity:** `grep -rniE "/service|/getting-started|/resources|/news"
  src/ | grep -v "legal\|node_modules"` returns nothing meaningful (only intended
  external/News-as-Community references remain, if any).
- **Spec checks:** landing has no "In active use by" and no USAID; "Partnerships"
  string absent site-wide; Tutorials tab points to training.geoglows.org.

## Definition of Done
- All R1–R17 satisfied and verified per the Verification Contract.
- The 5 pages exist at their new routes with the specified sections; landing
  matches R1–R5; nav matches R6.
- Old routes removed; no internal link targets them.
- Everything editable in `/admin`; config validates and the panel loads.
- Branch `site-restructure` builds clean; changes committed in reviewable phases
  (one commit per implementation unit or per phase).
- Per unit: its Test Scenarios pass before moving on.
