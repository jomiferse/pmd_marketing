import type { APIRoute } from "astro";
import { SITE_URL } from "../lib/site";

export const GET: APIRoute = () => {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Allow: /pricing",
    "Allow: /faq",
    "Allow: /learn",
    "Allow: /docs",
    "Allow: /blog",
    "Disallow: /app",
    "Disallow: /app/",
    `Sitemap: ${SITE_URL}/sitemap.xml`
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
};
