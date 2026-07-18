/** Sveltia/Decap GitHub OAuth — step 2: exchange the code and hand the token to the CMS. */
async function requestToken(code) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: process.env.OAUTH_GITHUB_CLIENT_ID,
      client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  return response.json();
}

function resultPage(status, payload) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html><html><body><script>
    (function () {
      function send(event) {
        window.opener.postMessage(${JSON.stringify(message)}, event.origin);
      }
      window.addEventListener("message", send, false);
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script></body></html>`;
}

export async function GET(request) {
  const code = new URL(request.url).searchParams.get("code");
  const data = await requestToken(code);
  const success = Boolean(data.access_token);
  const page = resultPage(
    success ? "success" : "error",
    success
      ? { token: data.access_token, provider: "github" }
      : { message: data.error_description ?? "Authentication failed" },
  );
  return new Response(page, { headers: { "Content-Type": "text/html" } });
}
