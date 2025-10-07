import type { MetadataRoute } from "next";

import { buildSearchRequests } from "@/lib/pseo/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const searchRequestsUrls: MetadataRoute.Sitemap = buildSearchRequests().map((searchRequest) => ({
    url: `https://tcaweb.fr/${searchRequest.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    {
      url: "https://tcaweb.fr",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://tcaweb.fr/sites-vitrines",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...searchRequestsUrls,
  ];
}
