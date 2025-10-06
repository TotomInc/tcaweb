export interface SearchRequest {
  intent: string;
  slug: string;
  title: string;
  forCity?: boolean;
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
  },
  {
    intent: "Création site vitrine près",
    slug: "creation-site-vitrine-pres",
    title: "Création de site vitrine près",
    forCity: true,
  },
];
