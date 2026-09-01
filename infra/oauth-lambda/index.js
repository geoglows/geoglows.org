const CLIENT_ID = process.env.OAUTH_GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_GITHUB_CLIENT_SECRET;
const PUBLIC_ORIGIN = process.env.PUBLIC_ORIGIN;

async function requestToken(code) {
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ client_id: CLIENT_ID, client_secret: CLIENT_SECRET, code }),
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

exports.handler = async (event) => {
  const path = event.rawPath || "";
  const method = event.requestContext?.http?.method || "GET";
  if (method !== "GET") return { statusCode: 405, body: "Method Not Allowed" };

  if (path.endsWith("/api/auth")) {
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: `${PUBLIC_ORIGIN}/api/callback`,
      scope: "repo,user",
      allow_signup: "false",
    });
    return {
      statusCode: 302,
      headers: { Location: `https://github.com/login/oauth/authorize?${params}` },
    };
  }

  if (path.endsWith("/api/callback")) {
    const code = event.queryStringParameters?.code;
    const data = await requestToken(code);
    const success = Boolean(data.access_token);
    const page = resultPage(
      success ? "success" : "error",
      success
        ? { token: data.access_token, provider: "github" }
        : { message: data.error_description ?? "Authentication failed" },
    );
    return { statusCode: 200, headers: { "Content-Type": "text/html" }, body: page };
  }

  return { statusCode: 404, body: "Not Found" };
};
