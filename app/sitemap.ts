import type { MetadataRoute } from "next";

const BASE_URL = "https://tcaweb.fr";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "sites-ecommerces", "sites-internet", "contact"];

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}/${route}`,
    changeFrequency: "weekly",
    priority: 1,
  }));
}
