# Deploying geoglows.org

Astro (static) + Sveltia CMS (Git-based), served from **S3 behind CloudFront**. Editors
manage content through a form-based admin at `/admin`; every save is a commit to this
repo, which triggers a rebuild. No third-party CMS service is used — GitHub OAuth is
handled by the Lambda in `infra/oauth-lambda/`.

There is currently **no production environment** — staging is the only deployment, and
`main` does not build or deploy. The intent is two environments later, with `main`
serving production and `staging` continuing to serve staging.

## 1. How a deploy happens

`.github/workflows/deploy-staging.yml` runs on every push to `staging`, and can be run by
hand with **workflow_dispatch**. It:

1. `npm ci` and `npm run build` on Node 22.
2. Assumes an AWS role via GitHub OIDC (no long-lived keys) in `us-east-1`.
3. `aws s3 sync dist/` twice, so the cache headers differ by asset type:
   - everything except `*.html` -> `public,max-age=3600`
   - `*.html` -> `no-cache`, so a content edit is visible on the next request
4. Invalidates the CloudFront distribution at `/*`.

Repository **variables** it needs (Settings -> Secrets and variables -> Actions ->
Variables), under the `staging` environment:

| Variable | What it is |
|---|---|
| `AWS_DEPLOY_ROLE_ARN` | role GitHub OIDC assumes to write the bucket and invalidate |
| `S3_BUCKET` | bucket the built site syncs into |
| `CLOUDFRONT_DISTRIBUTION_ID` | distribution to invalidate |
| `CLOUDFRONT_FUNCTION_NAME` | optional; set it to publish the router on each deploy (see below) |

## 2. Routing

`infra/cloudfront/staging-router.js` is a **CloudFront Function** on viewer-request. It
is the only router: there is no framework routing at the edge. It handles

- `/apps` and `/apps/*` -> 302 to `apps.geoglows.org`
- directory-index rewriting, so `/tools` and `/tools/` both serve `/tools/index.html`

Anything that needs a redirect has to be added here.

A CloudFront Function lives on the distribution, not in the bucket, so syncing the site
does not update it. Set the `CLOUDFRONT_FUNCTION_NAME` variable and the deploy publishes
it on every run; leave it unset and the step is skipped, in which case the file has to be
published by hand and the repo can drift from what is actually routing traffic. Publishing
also needs `cloudfront:DescribeFunction`, `cloudfront:UpdateFunction` and
`cloudfront:PublishFunction` on the deploy role.

## 3. Editor login (GitHub OAuth)

The relay is `infra/oauth-lambda/index.js`, reachable at `/api/*` through CloudFront. It
needs `OAUTH_GITHUB_CLIENT_ID`, `OAUTH_GITHUB_CLIENT_SECRET`, and `PUBLIC_ORIGIN` in its
environment, and it answers `/api/auth` and `/api/callback`.

The GitHub OAuth App (in the `geoglows` org, Settings -> Developer settings -> OAuth Apps)
needs its **Authorization callback URL** set to `<PUBLIC_ORIGIN>/api/callback`.

`public/admin/config.yml` must agree with all of that: `base_url` is the deployment
origin, `auth_endpoint` is `api/auth`, and `branch` is the branch saves commit to
(currently `staging`). Editors need write access to the repo.

## 4. Local development

```bash
nvm use 22
npm install
npm run dev                     # site at http://localhost:4321
npx @sveltia/cms-proxy-server   # in a second terminal, enables /admin against local files
```

`local_backend: true` in `config.yml` makes the admin edit local files during development,
with no GitHub login. It is ignored by the hosted admin.

## 5. Backfilling publications from a DOI

```bash
node scripts/fetch-doi.mjs 10.3390/hydrology9070113 "Bias correction"
```

Fetches metadata from the open Crossref API and writes a publication entry.

## 6. Refreshing the baked river geometry

```bash
node scripts/fetch-pipeline-network.mjs
```

Re-queries the GEOGLOWS ArcGIS service and rewrites `src/data/pipeline-network.json`,
which the Tools page watermark is drawn from. Run it from the repo root. It refuses to
overwrite the snapshot with fewer than 200 reaches, so a degraded response fails loudly
instead of shipping a blank figure.
