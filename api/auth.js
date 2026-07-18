/** Sveltia/Decap GitHub OAuth — step 1: redirect the editor to GitHub. */
export function GET(request) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const origin = new URL(request.url).origin;
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${origin}/api/callback`,
    scope: "repo,user",
    allow_signup: "false",
  });
  return new Response(null, {
    status: 302,
    headers: { Location: `https://github.com/login/oauth/authorize?${params}` },
  });
}
