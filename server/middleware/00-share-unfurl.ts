/**
 * iMessage / crawlers need og:image. The Grok injector skips it on *.vercel.app.
 * This wraps the HTML response and adds the share tags if they are missing.
 */
const IMAGE = "https://denver-van-shops.vercel.app/og.jpg?v=laura";
const TITLE = "Laura McGinley";
const DESC = "Denver Van Shops";

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

export default async function shareUnfurl(
  event: { url: URL; req: { method: string; headers: Headers } },
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  const result = await next();
  if (!(result instanceof Response)) return result;
  const type = result.headers.get("content-type") ?? "";
  if (!type.includes("text/html") || !result.body) return result;

  const html = await result.text();
  if (html.includes('property="og:image"') && html.includes("Laura McGinley")) {
    return new Response(html, { status: result.status, headers: result.headers });
  }

  const nextHtml = html.includes("</head>")
    ? html.replace("</head>", `${TAGS}</head>`)
    : TAGS + html;
  const headers = new Headers(result.headers);
  headers.delete("content-length");
  return new Response(nextHtml, { status: result.status, statusText: result.statusText, headers });
}
