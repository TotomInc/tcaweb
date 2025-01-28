import { Badge } from "@/components/ui/Badge";
import { BentoCard } from "@/components/ui/BentoCard";

export function Expertise() {
  return (
    <section className="relative text-black">
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-16">
        <div className="mx-auto mb-16 flex max-w-lg flex-col items-center">
          <Badge>Services</Badge>

          <h2 className="font-heading text-primary mb-2.5 text-center text-3xl font-semibold tracking-tight text-balance">
            Notre expertise du web au service des PME.
          </h2>

          <p className="text-secondary text-center text-base/relaxed text-balance">
            Nous concevons des sites web qui vous ressemblent et qui répondent à vos besoins.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <BentoCard
            title="Création site internet"
            description="Un site web professionnel sur-mesure pour votre entreprise. Un unique point d'entrée pour tous vos clients afin de découvrir vos services."
            gradientSide="left"
            image={{
              src: "/_static/images/creation-site-internet.png",
              alt: "Sites web réalisés pour nos clients",
              width: 2304,
              height: 1239,
            }}
          />

          <BentoCard
            title="Création site e-commerce"
            description="Vendez vos produits en ligne grâce à une boutique en ligne performante et sécurisée. Un site e-commerce qui vous ressemble."
            gradientSide="right"
            image={{
              src: "/_static/images/creation-site-ecommerce.png",
              alt: "Site e-commerce réalisé pour un client",
              width: 1599,
              height: 986,
            }}
          />

          <BentoCard
            title="Référencement web"
            description="Améliorez votre visibilité sur les moteurs de recherche et augmentez votre trafic. Un site web optimisé pour le référencement naturel."
            gradientSide="left"
            image={{
              src: "/_static/images/referencement-web.png",
              alt: "Page d'accueil de Google",
              width: 2095,
              height: 1087,
            }}
          />

          <BentoCard
            title="Graphisme & branding"
            description="Une identité visuelle unique pour votre entreprise. Un logo, des couleurs et une typographie qui vous ressemblent."
            gradientSide="right"
            image={{
              src: "/_static/images/graphisme.png",
              alt: "Logiciel de création graphique",
              width: 2796,
              height: 1536,
            }}
          />
        </div>
      </div>
    </section>
  );
}
