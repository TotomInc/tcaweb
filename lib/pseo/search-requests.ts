export interface SearchRequest {
  intent: string;
  slug: string;
  title: string;
  forCity?: boolean;
  cityPrepositionType?: "de" | "a";
}

export const searchRequests: SearchRequest[] = [
  {
    intent: "création site internet",
    slug: "creation-site-internet",
    title: "Création de site internet",
    forCity: false,
  },
  {
    intent: "création site vitrine",
    slug: "creation-site-vitrine",
    title: "Création de site vitrine",
    forCity: false,
  },
  {
    intent: "site internet pour",
    slug: "site-internet-pour",
    title: "Site internet pour",
    forCity: false,
  },
  {
    intent: "site web",
    slug: "site-web",
    title: "Site web",
    forCity: false,
  },
  {
    intent: "développeur web",
    slug: "developpeur-web",
    title: "Développeur web",
    forCity: false,
  },
  {
    intent: "Création site internet près",
    slug: "creation-site-internet-pres",
    title: "Création de site internet près",
    forCity: true,
    cityPrepositionType: "de",
  },
  {
    intent: "Création site vitrine près",
    slug: "creation-site-vitrine-pres",
    title: "Création de site vitrine près",
    forCity: true,
    cityPrepositionType: "de",
  },
  {
    intent: "Agence web près",
    slug: "agence-web-pres",
    title: "Agence web près",
    forCity: true,
  },
  {
    intent: "Agence SEO près",
    slug: "agence-seo-pres",
    title: "Agence SEO près",
    forCity: true,
    cityPrepositionType: "de",
  },
  {
    intent: "Prix site internet",
    slug: "prix-site-internet",
    title: "Prix site internet",
    forCity: true,
    cityPrepositionType: "a",
  },
  {
    intent: "Prix refonte site",
    slug: "prix-refonte-site",
    title: "Prix refonte site",
    forCity: true,
    cityPrepositionType: "a",
  },
  {
    intent: "Devis site internet",
    slug: "devis-site-internet",
    title: "Devis site internet",
    forCity: true,
    cityPrepositionType: "a",
  },
];
