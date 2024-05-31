import {
  ArrowTrendingUpIcon,
  ChartBarIcon,
  KeyIcon,
  PaintBrushIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Portfolio } from "@/components/sections/Portfolio";
import { LinkBanner } from "@/components/sections/LinkBanner";
import { SideFeaturesChecks } from "@/components/sections/SideFeaturesChecks";

export default function Home() {
  return (
    <>
      <Hero
        cta={{ href: "/contact", label: "Contactez-nous" }}
        title={(
          <>
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              TCA Web
            </span>
            , création & refonte de sites Internet.
          </>
        )}
        description={(
          <>
            Notre équipe d’expert est
            {" "}
            <span className="font-semibold">à votre écoute</span>
            {" "}
            pour vous
            proposer la meilleure solution
            {" "}
            <span className="font-semibold">à vos besoins</span>
            .
          </>
        )}
        image={{
          width: 768,
          height: 650,
          alt: "Portfolio de sites web réalisés par TCA Web",
          src: "/_static/images/landing/landing-mockup.png",
        }}
        checks={[
          "Sites vitrines & e-commerces",
          "Référencement web SEO",
          "Projets sur-mesure avec éditeur de contenu",
        ]}
      />

      <Features
        className="mt-24 pb-24"
        title="Pourquoi travailler avec TCA Web ?"
        description="Nous avons pour objectif de vous proposer une solution juste et efficace, à un prix respectable afin de vous accompagner dans la réussite de votre projet web."
        features={[
          {
            title: "Site clé en main",
            description:
              "Votre site sera livré beau, dynamique et prêt à l'emploi, adapté sur mobiles & ordinateurs.",
            icon: KeyIcon,
          },
          {
            title: "Site évolutif",
            description:
              "Votre site est vivant, il évolue avec votre entreprise selon vos besoins et les fonctionnalités nécessaires.",
            icon: ArrowTrendingUpIcon,
          },
          {
            title: "Interlocuteur unique",
            description:
              "Vous travaillerez avec un interlocuteur unique, afin de faciliter les échanges et la communication.",
            icon: UserIcon,
          },
          {
            title: "Design sur-mesure",
            description:
              "Un design développé sur-mesure afin de correspondre aux besoins et à l'activité de votre entreprise.",
            icon: PaintBrushIcon,
          },
          {
            title: "Statistiques de performance",
            description:
              "Intégration d'une solution de statistiques web afin de monitorer les performances de votre site web.",
            icon: ChartBarIcon,
          },
          {
            title: "Maintenance & sécurité",
            description:
              "Forfait de maintenance de votre site web inclus pour l'hébergement, la sécurité et l'édition de contenu.",
            icon: WrenchScrewdriverIcon,
          },
        ]}
      />

      <SideFeaturesChecks
        className="pb-24"
        title="Un site web de qualité professionnelle"
        description="Optez pour un site web unique et performant, conçu avec soin et expertise. Un site sur-mesure permettra de vous démarquer de vos concurrents."
        image={{
          src: "/_static/images/web-development.svg",
          alt: "Développement web",
          height: 182,
          width: 347,
          className: "max-w-md mx-auto lg:max-w-lg",
        }}
        features={[
          {
            title: "Des sites web performants",
            description:
              "Nous utilisons des technologies modernes afin de garantir une performance maximale de votre site web. Les solutions comme Wix, WordPress et autres sont des pièges, votre site ne sera jamais unique.",
          },
          {
            title: "Un design sur-mesure",
            description:
              "Nous pouvons créer un design sur-mesure qui conviendra parfaitement à l'identité et à l'activité de votre entreprise.",
          },
          {
            title: "Stratégie de SEO optimisée",
            description:
              "Grâce au SEO naturel (organique) généré via votre site web performant, vos clients vous trouveront plus facilement. Nous pouvons aussi booster votre SEO via une campagne publicitaire Google AdWords.",
          },
          {
            title: "Respect des normes RGPD",
            description:
              "Nous protégons la confidentialité de vos utilisateurs grâce à un site web sécurisé et grâce à des solutions de statistiques anonymes, respectant la vie privée des utilisateurs.",
          },
        ]}
      />

      <LinkBanner
        className="mb-24"
        title="Découvrez la création de sites e-commerces"
        description="Développez votre activité grâce à la vente en ligne. Gestion des produits et commandes via une interface simple."
        ctaTitle="En savoir plus"
        link="/sites-ecommerces"
        coverImage={{
          src: "/_static/images/landing/ecommerce-grid-mockup.png",
          alt: "Portfolio de sites e-commerces",
        }}
      />

      <SideFeaturesChecks
        invert
        className="pb-24"
        title="Un accompagnement personnalisé"
        description="Nous vous accompagnons de bout-en-bout dans la réalisation de votre projet web."
        image={{
          src: "/_static/images/services.svg",
          alt: "Accompagnement personnalisé",
          height: 182,
          width: 347,
          className: "max-w-md mx-auto lg:max-w-lg",
        }}
        features={[
          {
            title: "Tarif annoncé",
            description:
              "Vous pouvez nous demander une estimation budgétaire plus précise pour votre projet web, lors du premier contact.",
          },
          {
            title: "Expertise du web",
            description:
              "Notre expertise du web permet de vous accompagner tout au long de la réalisation de votre projet web.",
          },
          {
            title: "Un projet flexible",
            description:
              "Nous adaptons le projet selon vos besoins : intégration d'un CMS, gestion noms de domaine, hébergement, ...",
          },
        ]}
      />

      <LinkBanner
        className="mb-24"
        title="Découvrez la création de sites vitrines"
        description="Grâce à un site vitrine, démarrez votre présence numérique. Cela vous donne l'opportunité d'être visible sur le web et de renforcer votre image de marque, auprès de vos (futurs) clients."
        ctaTitle="En savoir plus"
        link="/sites-internet"
        coverImage={{
          src: "/_static/images/landing/vitrine-grid-mockup.png",
          alt: "Portfolio de sites vitrines",
        }}
      />

      <Portfolio className="mb-24" />

      <LinkBanner
        className="mb-24"
        title="Confiez votre projet web à un professionnel"
        description="Contactez-nous afin de nous faire part de votre projet web. Nous vous répondrons dans les plus brefs délais."
        ctaTitle="Contact"
        link="/contact"
      />
    </>
  );
}
