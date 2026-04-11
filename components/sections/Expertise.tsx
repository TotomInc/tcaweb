import { BentoCard } from "@/components/ui/BentoCard";
import { Section } from "@/components/ui/Section";

export function Expertise() {
  return (
    <Section.Root className="pt-24">
      <Section.Heading
        badge="Services"
        description="Attirez une nouvelle clientèle grâce à une présence web efficace et professionnelle pour votre entreprise."
        label="Notre expertise du web au service des PME."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <BentoCard
          content={{
            title: "Création site internet",
            description:
              "Un site web professionnel sur-mesure pour votre entreprise. Un unique point d'entrée pour tous vos clients afin de découvrir vos services.",
          }}
          image={{
            src: "/_static/images/creation-site-internet.png",
            alt: "Sites web réalisés pour nos clients",
            width: 2304,
            height: 1239,
          }}
        />

        <BentoCard
          content={{
            title: "Création site e-commerce",
            description:
              "Vendez vos produits en ligne grâce à une boutique en ligne performante et sécurisée. Un site e-commerce qui vous ressemble.",
          }}
          image={{
            src: "/_static/images/creation-site-ecommerce.png",
            alt: "Site e-commerce réalisé pour un client",
            width: 1599,
            height: 986,
          }}
        />

        <BentoCard
          content={{
            title: "Référencement web",
            description:
              "Améliorez votre visibilité sur les moteurs de recherche et augmentez votre trafic. Un site web optimisé pour le référencement naturel.",
          }}
          image={{
            src: "/_static/images/referencement-web.png",
            alt: "Page d'accueil de Google",
            width: 2095,
            height: 1087,
          }}
        />

        <BentoCard
          content={{
            title: "Graphisme & identité visuelle",
            description:
              "Une identité visuelle unique pour votre entreprise. Un logo, des couleurs et une typographie qui vous ressemblent.",
          }}
          image={{
            src: "/_static/images/graphisme.png",
            alt: "Logiciel de création graphique",
            width: 2796,
            height: 1536,
          }}
        />
      </div>
    </Section.Root>
  );
}
