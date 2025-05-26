import type { MetadataRoute } from "next";

import { cities } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const citiesUrls: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `https://tcaweb.fr/sites-vitrines/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
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
  ];
}
