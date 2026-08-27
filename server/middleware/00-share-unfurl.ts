/**
 * iMessage / crawlers need og:image. The Grok injector skips it on *.vercel.app.
 * Force one title and one image so the preview is not duplicated.
 */
const IMAGE = "https://denver-van-shops.vercel.app/og.jpg?v=left";
const TITLE = "Denver Van Shops";
const DESC = "Laura McGinley · September 7–16";

const TAGS = [
  `<meta property="og:title" content="${TITLE}">`,
  `<meta property="og:description" content="${DESC}">`,
  `<meta property="og:image" content="${IMAGE}">`,
  `<meta property="og:image:width" content="1200">`,
  `<meta property="og:image:height" content="630">`,
  `<meta name="twitter:card" content="summary_large_image">`,
  `<meta name="twitter:title" content="${TITLE}">`,
  `<meta name="twitter:image" content="${IMAGE}">`,
].join("");

function stripShare(html: string) {
  return html.replace(
    /<meta\b[^>]*(?:property|name)=["'](?:og:title|og:description|og:image|og:image:width|og:image:height|twitter:card|twitter:title|twitter:image|twitter:description)["'][^>]*>/gi,
    "",
  );
}

export default async function shareUnfurl(
  event: { url: URL; req: { method: string; headers: Headers } },
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  if (!(result instanceof Response)) return result;
  const type = result.headers.get("content-type") ?? "";
  if (!type.includes("text/html") || !result.body) return result;

  let html = stripShare(await result.text());
  html = html.includes("</head>") ? html.replace("</head>", `${TAGS}</head>`) : TAGS + html;
  const headers = new Headers(result.headers);
  headers.delete("content-length");
  return new Response(html, { status: result.status, statusText: result.statusText, headers });
}
