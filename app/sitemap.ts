import type { MetadataRoute } from "next";
import { SITE_URL, pairs } from "./shared/data/pairs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pairs.map((pair) => ({
      url: `${SITE_URL}/${pair.slug}`,
      lastModified: new Date(),
      changeFrequency: "always" as const,
      priority: pair.priority,
    })),
  ];
}
