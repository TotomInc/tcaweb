import type { MetadataRoute } from "next";

import { cities, slugify } from "@/lib/geo";

const BASE_URL = "https://tcaweb.fr";

type SitemapItem = MetadataRoute.Sitemap[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "sites-ecommerces",
    "sites-internet",
    "contact",
  ].map(
    (route) =>
      ({
        url: `${BASE_URL}/${route}`,
        changeFrequency: "weekly",
        priority: 1,
      }) satisfies SitemapItem,
  );

  const citiesRoutes = cities.map(
    (city) =>
      ({
        url: `${BASE_URL}/creation-site-internet/${slugify(city)}`,
        changeFrequency: "monthly",
        priority: 1,
      }) satisfies SitemapItem,
  );

  return [...staticRoutes, ...citiesRoutes];
}
