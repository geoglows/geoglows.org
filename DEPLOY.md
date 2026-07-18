# Deploying geoglows.org

Astro (static) + Sveltia CMS (Git-based) on Vercel. Editors manage content through a
form-based admin at `/admin`; every save is a commit to this repo, which triggers a
Vercel rebuild. No third-party CMS service is used — GitHub OAuth is handled by the
serverless functions in `api/`.

## 1. Deploy the site

1. Push this repo to `github.com/geoglows/geoglows.org`.
2. In Vercel, import the repo (framework preset **Astro** is auto-detected; static build,
   no adapter needed). The functions in `api/` deploy automatically.
3. Note the production domain (e.g. `https://geoglows-org.vercel.app`).

## 2. Wire up editor login (GitHub OAuth)

1. Create a GitHub OAuth App (Settings → Developer settings → OAuth Apps) in the
   `geoglows` org:
   - **Homepage URL:** the production domain
   - **Authorization callback URL:** `https://<domain>/api/callback`
2. In Vercel → Project → Settings → Environment Variables, add:
   - `OAUTH_GITHUB_CLIENT_ID`
   - `OAUTH_GITHUB_CLIENT_SECRET`
3. Set `base_url` in `public/admin/config.yml` to the final production domain, commit,
   and redeploy.

Editors then open `https://<domain>/admin`, sign in with GitHub (they need write access
to the repo), and edit content. Saves commit to `main` and redeploy the site.

## 3. Local development

```bash
nvm use 22
npm install
npm run dev                     # site at http://localhost:4321
npx @sveltia/cms-proxy-server   # in a second terminal, enables /admin against local files
```

`local_backend: true` in `config.yml` makes the admin edit local files during development
(no GitHub login required). Remove or ignore it in production.

## 4. Backfilling publications from a DOI

```bash
node scripts/fetch-doi.mjs 10.3390/hydrology9070113 "Bias correction"
```

Fetches metadata from the open Crossref API and writes a publication entry. Run it for
each missing DOI, or loop it over a list to seed the publications section.
