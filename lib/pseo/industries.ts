import type { Demonym } from "./demonym";

export interface Industry {
  name: string;
  slug: string;
  demonym: Demonym;
}

export const industries: Industry[] = [
  {
    name: "coiffeur",
    slug: "coiffeur",
    demonym: {
      masculine: "coiffeur",
      feminine: "coiffeuse",
      plural: "coiffeurs",
    },
  },
  {
    name: "barbier",
    slug: "barbier",
    demonym: {
      masculine: "barbier",
      feminine: "barbière",
      plural: "barbiers",
    },
  },
  {
    name: "esthéticienne",
    slug: "estheticienne",
    demonym: {
      masculine: "esthéticien",
      feminine: "esthéticienne",
      plural: "esthéticiens",
    },
  },
  {
    name: "photographe",
    slug: "photographe",
    demonym: {
      masculine: "photographe",
      feminine: "photographe",
      plural: "photographes",
    },
  },
  {
    name: "graphiste",
    slug: "graphiste",
    demonym: {
      masculine: "graphiste",
      feminine: "graphiste",
      plural: "graphistes",
    },
  },
  {
    name: "plombier",
    slug: "plombier",
    demonym: {
      masculine: "plombier",
      feminine: "plombière",
      plural: "plombiers",
    },
  },
  {
    name: "électricien",
    slug: "electricien",
    demonym: {
      masculine: "électricien",
      feminine: "électricienne",
      plural: "électriciens",
    },
  },
  {
    name: "maçon",
    slug: "macon",
    demonym: {
      masculine: "maçon",
      feminine: "maçonne",
      plural: "maçons",
    },
  },
  {
    name: "menuisier",
    slug: "menuisier",
    demonym: {
      masculine: "menuisier",
      feminine: "menuisière",
      plural: "menuisiers",
    },
  },
  {
    name: "paysagiste",
    slug: "paysagiste",
    demonym: {
      masculine: "paysagiste",
      feminine: "paysagiste",
      plural: "paysagistes",
    },
  },
  {
    name: "entreprise de nettoyage",
    slug: "entreprise-de-nettoyage",
    demonym: {
      masculine: "nettoyeur",
      feminine: "nettoyeuse",
      plural: "nettoyeurs",
    },
  },
  {
    name: "déménageur",
    slug: "demenageur",
    demonym: {
      masculine: "déménageur",
      feminine: "déménageuse",
      plural: "déménageurs",
    },
  },
  {
    name: "garagiste",
    slug: "garagiste",
    demonym: {
      masculine: "garagiste",
      feminine: "garagiste",
      plural: "garagistes",
    },
  },
  {
    name: "auto-école",
    slug: "auto-ecole",
    demonym: {
      masculine: "auto-école",
      feminine: "auto-école",
      plural: "auto-écoles",
    },
  },
  {
    name: "pizzeria",
    slug: "pizzeria",
    demonym: {
      masculine: "pizzeria",
      feminine: "pizzeria",
      plural: "pizzerias",
    },
  },
  {
    name: "restaurant",
    slug: "restaurant",
    demonym: {
      masculine: "restaurant",
      feminine: "restaurant",
      plural: "restaurants",
    },
  },
  {
    name: "boulangerie",
    slug: "boulangerie",
    demonym: {
      masculine: "boulanger",
      feminine: "boulangère",
      plural: "boulangers",
    },
  },
  {
    name: "café",
    slug: "cafe",
    demonym: {
      masculine: "café",
      feminine: "café",
      plural: "cafés",
    },
  },
  {
    name: "traiteur",
    slug: "traiteur",
    demonym: {
      masculine: "traiteur",
      feminine: "traiteuse",
      plural: "traiteurs",
    },
  },
  {
    name: "caviste",
    slug: "caviste",
    demonym: {
      masculine: "caviste",
      feminine: "caviste",
      plural: "cavistes",
    },
  },
  {
    name: "boutique de vêtements",
    slug: "boutique-de-vetements",
    demonym: {
      masculine: "boutique de vêtements",
      feminine: "boutique de vêtements",
      plural: "boutiques de vêtements",
    },
  },
  {
    name: "magasin de déco",
    slug: "magasin-de-deco",
    demonym: {
      masculine: "magasin de déco",
      feminine: "magasin de déco",
      plural: "magasins de déco",
    },
  },
  {
    name: "fleuriste",
    slug: "fleuriste",
    demonym: {
      masculine: "fleuriste",
      feminine: "fleuriste",
      plural: "fleuristes",
    },
  },
  {
    name: "bijoutier",
    slug: "bijoutier",
    demonym: {
      masculine: "bijoutier",
      feminine: "bijoutière",
      plural: "bijoutiers",
    },
  },
  {
    name: "agence immobilière",
    slug: "agence-immobiliere",
    demonym: {
      masculine: "agent immobilier",
      feminine: "agente immobilière",
      plural: "agents immobiliers",
    },
  },
  {
    name: "architecte",
    slug: "architecte",
    demonym: {
      masculine: "architecte",
      feminine: "architecte",
      plural: "architectes",
    },
  },
  {
    name: "coach sportif",
    slug: "coach-sportif",
    demonym: {
      masculine: "coach sportif",
      feminine: "coach sportive",
      plural: "coachs sportifs",
    },
  },
  {
    name: "kinésithérapeute",
    slug: "kinesitherapeute",
    demonym: {
      masculine: "kinésithérapeute",
      feminine: "kinésithérapeute",
      plural: "kinésithérapeutes",
    },
  },
  {
    name: "ostéopathe",
    slug: "osteopathe",
    demonym: {
      masculine: "ostéopathe",
      feminine: "ostéopathe",
      plural: "ostéopathes",
    },
  },
  {
    name: "vétérinaire",
    slug: "veterinaire",
    demonym: {
      masculine: "vétérinaire",
      feminine: "vétérinaire",
      plural: "vétérinaires",
    },
  },
  {
    name: "coach business",
    slug: "coach-business",
    demonym: {
      masculine: "coach business",
      feminine: "coach business",
      plural: "coachs business",
    },
  },
  {
    name: "avocat",
    slug: "avocat",
    demonym: {
      masculine: "avocat",
      feminine: "avocate",
      plural: "avocats",
    },
  },
  {
    name: "expert comptable",
    slug: "expert-comptable",
    demonym: {
      masculine: "expert comptable",
      feminine: "experte comptable",
      plural: "experts comptables",
    },
  },
  {
    name: "agence événementielle",
    slug: "agence-evenementielle",
    demonym: {
      masculine: "organisateur d'événements",
      feminine: "organisatrice d'événements",
      plural: "organisateurs d'événements",
    },
  },
  {
    name: "wedding planner",
    slug: "wedding-planner",
    demonym: {
      masculine: "wedding planner",
      feminine: "wedding planner",
      plural: "wedding planners",
    },
  },
  {
    name: "artisan créateur",
    slug: "artisan-createur",
    demonym: {
      masculine: "artisan créateur",
      feminine: "artisane créatrice",
      plural: "artisans créateurs",
    },
  },
  {
    name: "boutique e-commerce",
    slug: "boutique-e-commerce",
    demonym: {
      masculine: "e-commerçant",
      feminine: "e-commerçante",
      plural: "e-commerçants",
    },
  },
  {
    name: "association",
    slug: "association",
    demonym: {
      masculine: "association",
      feminine: "association",
      plural: "associations",
    },
  },
  {
    name: "club sportif",
    slug: "club-sportif",
    demonym: {
      masculine: "club sportif",
      feminine: "club sportif",
      plural: "clubs sportifs",
    },
  },
  {
    name: "gîte",
    slug: "gite",
    demonym: {
      masculine: "gîte",
      feminine: "gîte",
      plural: "gîtes",
    },
  },
  {
    name: "hôtel",
    slug: "hotel",
    demonym: {
      masculine: "hôtel",
      feminine: "hôtel",
      plural: "hôtels",
    },
  },
  {
    name: "agence de voyage",
    slug: "agence-de-voyage",
    demonym: {
      masculine: "agence de voyage",
      feminine: "agence de voyage",
      plural: "agences de voyage",
    },
  },
  {
    name: "tatoueur",
    slug: "tatoueur",
    demonym: {
      masculine: "tatoueur",
      feminine: "tatoueuse",
      plural: "tatoueurs",
    },
  },
  {
    name: "coach en nutrition",
    slug: "coach-en-nutrition",
    demonym: {
      masculine: "coach en nutrition",
      feminine: "coach en nutrition",
      plural: "coachs en nutrition",
    },
  },
  {
    name: "diététicien",
    slug: "dieteticien",
    demonym: {
      masculine: "diététicien",
      feminine: "diététicienne",
      plural: "diététiciens",
    },
  },
  {
    name: "psychologue",
    slug: "psychologue",
    demonym: {
      masculine: "psychologue",
      feminine: "psychologue",
      plural: "psychologues",
    },
  },
  {
    name: "hypnothérapeute",
    slug: "hypnotherapeute",
    demonym: {
      masculine: "hypnothérapeute",
      feminine: "hypnothérapeute",
      plural: "hypnothérapeutes",
    },
  },
  {
    name: "sophrologue",
    slug: "sophrologue",
    demonym: {
      masculine: "sophrologue",
      feminine: "sophrologue",
      plural: "sophrologues",
    },
  },
  {
    name: "naturopathe",
    slug: "naturopathe",
    demonym: {
      masculine: "naturopathe",
      feminine: "naturopathe",
      plural: "naturopathes",
    },
  },
  {
    name: "praticien reiki",
    slug: "praticien-reiki",
    demonym: {
      masculine: "praticien reiki",
      feminine: "praticienne reiki",
      plural: "praticiens reiki",
    },
  },
  {
    name: "acupuncteur",
    slug: "acupuncteur",
    demonym: {
      masculine: "acupuncteur",
      feminine: "acupunctrice",
      plural: "acupuncteurs",
    },
  },
  {
    name: "masseur bien-être",
    slug: "masseur-bien-etre",
    demonym: {
      masculine: "masseur bien-être",
      feminine: "masseuse bien-être",
      plural: "masseurs bien-être",
    },
  },
  {
    name: "professeur de yoga",
    slug: "professeur-de-yoga",
    demonym: {
      masculine: "professeur de yoga",
      feminine: "professeure de yoga",
      plural: "professeurs de yoga",
    },
  },
  {
    name: "professeur de danse",
    slug: "professeur-de-danse",
    demonym: {
      masculine: "professeur de danse",
      feminine: "professeure de danse",
      plural: "professeurs de danse",
    },
  },
  {
    name: "coach en développement personnel",
    slug: "coach-en-developpement-personnel",
    demonym: {
      masculine: "coach en développement personnel",
      feminine: "coach en développement personnel",
      plural: "coachs en développement personnel",
    },
  },
  {
    name: "agence de communication",
    slug: "agence-de-communication",
    demonym: {
      masculine: "agence de communication",
      feminine: "agence de communication",
      plural: "agences de communication",
    },
  },
  {
    name: "agence marketing digital",
    slug: "agence-marketing-digital",
    demonym: {
      masculine: "agence marketing digital",
      feminine: "agence marketing digital",
      plural: "agences marketing digital",
    },
  },
  {
    name: "community manager indépendant",
    slug: "community-manager-independant",
    demonym: {
      masculine: "community manager indépendant",
      feminine: "community manager indépendante",
      plural: "community managers indépendants",
    },
  },
  {
    name: "rédacteur web",
    slug: "redacteur-web",
    demonym: {
      masculine: "rédacteur web",
      feminine: "rédactrice web",
      plural: "rédacteurs web",
    },
  },
  {
    name: "traducteur freelance",
    slug: "traducteur-freelance",
    demonym: {
      masculine: "traducteur freelance",
      feminine: "traductrice freelance",
      plural: "traducteurs freelance",
    },
  },
  {
    name: "consultant SEO",
    slug: "consultant-seo",
    demonym: {
      masculine: "consultant SEO",
      feminine: "consultante SEO",
      plural: "consultants SEO",
    },
  },
  {
    name: "consultant en gestion",
    slug: "consultant-en-gestion",
    demonym: {
      masculine: "consultant en gestion",
      feminine: "consultante en gestion",
      plural: "consultants en gestion",
    },
  },
  {
    name: "auto-entrepreneur en informatique",
    slug: "auto-entrepreneur-en-informatique",
    demonym: {
      masculine: "auto-entrepreneur en informatique",
      feminine: "auto-entrepreneuse en informatique",
      plural: "auto-entrepreneurs en informatique",
    },
  },
  {
    name: "dépanneur informatique",
    slug: "depanneur-informatique",
    demonym: {
      masculine: "dépanneur informatique",
      feminine: "dépanneuse informatique",
      plural: "dépanneurs informatiques",
    },
  },
  {
    name: "formateur informatique",
    slug: "formateur-informatique",
    demonym: {
      masculine: "formateur informatique",
      feminine: "formatrice informatique",
      plural: "formateurs informatiques",
    },
  },
  {
    name: "imprimeur local",
    slug: "imprimeur-local",
    demonym: {
      masculine: "imprimeur local",
      feminine: "imprimeuse locale",
      plural: "imprimeurs locaux",
    },
  },
  {
    name: "studio d'enregistrement",
    slug: "studio-d-enregistrement",
    demonym: {
      masculine: "studio d'enregistrement",
      feminine: "studio d'enregistrement",
      plural: "studios d'enregistrement",
    },
  },
  {
    name: "musicien professionnel",
    slug: "musicien-professionnel",
    demonym: {
      masculine: "musicien professionnel",
      feminine: "musicienne professionnelle",
      plural: "musiciens professionnels",
    },
  },
  {
    name: "DJ événementiel",
    slug: "dj-evenementiel",
    demonym: {
      masculine: "DJ événementiel",
      feminine: "DJ événementielle",
      plural: "DJs événementiels",
    },
  },
  {
    name: "organisateur de concerts",
    slug: "organisateur-de-concerts",
    demonym: {
      masculine: "organisateur de concerts",
      feminine: "organisatrice de concerts",
      plural: "organisateurs de concerts",
    },
  },
  {
    name: "boulanger bio",
    slug: "boulanger-bio",
    demonym: {
      masculine: "boulanger bio",
      feminine: "boulangère bio",
      plural: "boulangers bio",
    },
  },
  {
    name: "fromager",
    slug: "fromager",
    demonym: {
      masculine: "fromager",
      feminine: "fromagère",
      plural: "fromagers",
    },
  },
  {
    name: "boucher artisan",
    slug: "boucher-artisan",
    demonym: {
      masculine: "boucher artisan",
      feminine: "bouchère artisane",
      plural: "bouchers artisans",
    },
  },
  {
    name: "poissonnier",
    slug: "poissonnier",
    demonym: {
      masculine: "poissonnier",
      feminine: "poissonnière",
      plural: "poissonniers",
    },
  },
  {
    name: "épicerie fine",
    slug: "epicerie-fine",
    demonym: {
      masculine: "épicerie fine",
      feminine: "épicerie fine",
      plural: "épiceries fines",
    },
  },
  {
    name: "magasin bio",
    slug: "magasin-bio",
    demonym: {
      masculine: "magasin bio",
      feminine: "magasin bio",
      plural: "magasins bio",
    },
  },
  {
    name: "cave à bière",
    slug: "cave-a-biere",
    demonym: {
      masculine: "cave à bière",
      feminine: "cave à bière",
      plural: "caves à bière",
    },
  },
  {
    name: "microbrasserie",
    slug: "microbrasserie",
    demonym: {
      masculine: "microbrasseur",
      feminine: "microbrasseuse",
      plural: "microbrasseurs",
    },
  },
  {
    name: "distillerie artisanale",
    slug: "distillerie-artisanale",
    demonym: {
      masculine: "distillateur artisan",
      feminine: "distillatrice artisane",
      plural: "distillateurs artisans",
    },
  },
  {
    name: "viticulteur indépendant",
    slug: "viticulteur-independant",
    demonym: {
      masculine: "viticulteur indépendant",
      feminine: "viticultrice indépendante",
      plural: "viticulteurs indépendants",
    },
  },
  {
    name: "apiculteur",
    slug: "apiculteur",
    demonym: {
      masculine: "apiculteur",
      feminine: "apicultrice",
      plural: "apiculteurs",
    },
  },
  {
    name: "éleveur local",
    slug: "eleveur-local",
    demonym: {
      masculine: "éleveur local",
      feminine: "éleveuse locale",
      plural: "éleveurs locaux",
    },
  },
  {
    name: "agriculteur bio",
    slug: "agriculteur-bio",
    demonym: {
      masculine: "agriculteur bio",
      feminine: "agricultrice bio",
      plural: "agriculteurs bio",
    },
  },
  {
    name: "menuisier aluminium",
    slug: "menuisier-aluminium",
    demonym: {
      masculine: "menuisier aluminium",
      feminine: "menuisière aluminium",
      plural: "menuisiers aluminium",
    },
  },
  {
    name: "couvreur zingueur",
    slug: "couvreur-zingueur",
    demonym: {
      masculine: "couvreur zingueur",
      feminine: "couvreuse zingueuse",
      plural: "couvreurs zingueurs",
    },
  },
  {
    name: "chauffagiste",
    slug: "chauffagiste",
    demonym: {
      masculine: "chauffagiste",
      feminine: "chauffagiste",
      plural: "chauffagistes",
    },
  },
  {
    name: "installateur de panneaux solaires",
    slug: "installateur-de-panneaux-solaires",
    demonym: {
      masculine: "installateur de panneaux solaires",
      feminine: "installatrice de panneaux solaires",
      plural: "installateurs de panneaux solaires",
    },
  },
  {
    name: "entreprise de rénovation énergétique",
    slug: "entreprise-de-renovation-energetique",
    demonym: {
      masculine: "entreprise de rénovation énergétique",
      feminine: "entreprise de rénovation énergétique",
      plural: "entreprises de rénovation énergétique",
    },
  },
  {
    name: "société de maintenance industrielle",
    slug: "societe-de-maintenance-industrielle",
    demonym: {
      masculine: "société de maintenance industrielle",
      feminine: "société de maintenance industrielle",
      plural: "sociétés de maintenance industrielle",
    },
  },
  {
    name: "immo locatif",
    slug: "immo-locatif",
    demonym: {
      masculine: "investisseur immobilier locatif",
      feminine: "investisseuse immobilière locative",
      plural: "investisseurs immobiliers locatifs",
    },
  },
  {
    name: "conciergerie immobilière",
    slug: "conciergerie-immobiliere",
    demonym: {
      masculine: "conciergerie immobilière",
      feminine: "conciergerie immobilière",
      plural: "conciergeries immobilières",
    },
  },
  {
    name: "service de ménage Airbnb",
    slug: "service-de-menage-airbnb",
    demonym: {
      masculine: "service de ménage Airbnb",
      feminine: "service de ménage Airbnb",
      plural: "services de ménage Airbnb",
    },
  },
  {
    name: "livreur de repas indépendant",
    slug: "livreur-de-repas-independant",
    demonym: {
      masculine: "livreur de repas indépendant",
      feminine: "livreuse de repas indépendante",
      plural: "livreurs de repas indépendants",
    },
  },
];
