import type { MetadataRoute } from "next";

import { cities } from "@/lib/pseo/cities";
import { buildSearchRequests } from "@/lib/pseo/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const citiesUrls: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://tcaweb.fr/sites-vitrines/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

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
    ...citiesUrls,
    ...searchRequestsUrls,
  ];
}
