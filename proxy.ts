import type { ProxyConfig, NextRequest } from "next/server";
import { NextResponse } from "next/server";

const UNAUTHORIZED_EXTENSIONS = [
  ".php",
  ".php1",
  ".php2",
  ".php3",
  ".php5",
  ".php7",
  ".env",
  ".cgi",
  ".DS_Store",
  ".git",
];

const UNAUTHORIZED_PATH_SEGMENTS = [
  "/wp/",
  "/wp-admin/",
  "/actuator/",
  "/ecp/",
  "/META-INF/",
  "/telescope/",
  "/debug/default/",
  "/server-status",
  "/_all_dbs",
  "/.vscode",
  "/.git",
  "/v2/_catalog",
  "/about",
  "/sftp",
];

const redirects: Record<string, string> = {
  // Redirects from first version of the website.
  "/contact": "/",
  "/sites-vitrine": "/sites-vitrines",
  "/creation-site-internet/sens": "/creation-site-vitrine-pres-de-sens",
  "/creation-site-internet/pont-sur-yonne": "/creation-site-vitrine-pres-de-pont-sur-yonne",
  "/creation-site-internet/troyes": "/creation-site-vitrine-pres-de-troyes",
  "/creation-site-internet/combs-la-ville": "/sites-vitrines",
  "/creation-site-internet/chailly-en-biere": "/sites-vitrines",
  "/creation-site-internet/emerainville": "/sites-vitrines",
  "/creation-site-internet/torcy": "/sites-vitrines",
  "/creation-site-internet/moissy-cramayel": "/sites-vitrines",
  "/creation-site-internet/st-pierre-les-nemours": "/sites-vitrines",
  "/referencement-site-internet/moissy-cramayel": "/sites-vitrines",
  // Redirects from first version of pSEO cities pages."
  "/sites-vitrines/auxerre": "/creation-site-vitrine-pres-dauxerre",
  "/sites-vitrines/sens": "/creation-site-vitrine-pres-de-sens",
  "/sites-vitrines/pont-sur-yonne": "/creation-site-vitrine-pres-de-pont-sur-yonne",
  "/sites-vitrines/migennes": "/creation-site-vitrine-pres-de-migennes",
  "/sites-vitrines/troyes": "/creation-site-vitrine-pres-de-troyes",
  "/sites-vitrines/fontainebleau": "/creation-site-vitrine-pres-de-fontainebleau",
  "/sites-vitrines/moret-sur-loing": "/creation-site-vitrine-pres-de-moret-sur-loing",
  "/sites-vitrines/melun": "/creation-site-vitrine-pres-de-melun",
};

export const config: ProxyConfig = {
  /*
   * Match all paths except for:
   * 1. /api routes
   * 2. /_next (Next.js internals)
   * 3. /_static (inside /public)
   * 4. /com.chrome.devtools.json
   * 5. all root files inside /public (e.g. /favicon.ico)
   */
  matcher: ["/((?!api/|_next/|_static/|_vercel|com.chrome.devtools.json|[\\w-]+\\.\\w+).*)"],
};

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Check for paths that are used by bots scanning for vulnerabilities.
  // Instead of redirecting, return a JSON to avoid unnecessary serverless invocations.
  if (
    UNAUTHORIZED_EXTENSIONS.some((ext) => path.endsWith(ext)) ||
    UNAUTHORIZED_PATH_SEGMENTS.some((segment) => path.includes(segment))
  ) {
    return NextResponse.json({ error: "Bad Request" }, { status: 400 });
  }

  const redirectedPath = Object.entries(redirects).find(([key]) => path === key);

  if (redirectedPath) {
    return NextResponse.redirect(new URL(redirectedPath[1], req.url), 301);
  }

  return NextResponse.next();
}
