import type { MetadataRoute } from "next";
import { SITE_URL, pairs } from "./shared/data/pairs";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", ...pairs.map((pair) => `/${pair.slug}`)],
      disallow: [],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
