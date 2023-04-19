import {
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { Portfolio } from "@/components/sections/Portfolio";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { SideFeaturesChecks } from "@/components/sections/SideFeaturesChecks";
import { LinkBanner } from "@/components/sections/LinkBanner";

export default function Home() {
  return (
    <>
      <Hero
        title={
          <>
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              Le Labo Web
            </span>
            , l&apos;agence web pensée pour les petites & moyennes entreprises.
          </>
        }
        description={
          <>
            Confiez votre présence digitale à un{" "}
            <span className="font-medium">professionnel</span>. Votre solution
            tout-en-un afin de maitriser la{" "}
            <span className="font-medium">présence numérique</span> de votre
            entreprise.
          </>
        }
        cta={{ href: "/contact", label: "Estimer mon devis en ligne" }}
        image={{
          width: 768,
          height: 650,
          alt: "",
          src: "/_static/images/landing/landing-mockup.png",
        }}
        checks={[
          "Estimation gratuite en ligne en 5 min.",
          "Premier contact facile (email, téléphone)",
        ]}
      />

      <Features
        className="mt-24 pb-24"
        title="Votre solution digitale sur-mesure, tout-en-un"
        description="Un site web permet d'activer votre présence numérique. C'est la première étape de votre visibilité en ligne."
        features={[
          {
            title: "Site Responsive",
            description:
              "Le site s'adapte automatiquement à toutes les tailles d'écrans, afin d'accéder au contenu n'importe où.",
            icon: DevicePhoneMobileIcon,
          },
          {
            title: "Service SEO",
            description:
              "Le SEO (Search Engine Optimization) est un élément clé dans la réussite de votre présence numérique.",
            icon: MagnifyingGlassIcon,
          },
          {
            title: "Design sur-mesure",
            description:
              "Un design développé sur-mesure afin de correspondre aux besoins et à l'activité de votre entreprise.",
            icon: PaintBrushIcon,
          },
          {
            title: "Intégration de formulaires",
            description:
              "Laissez vos (futurs) clients vous contacter facilement grâce à l'intégration de formulaires sur votre site web.",
            icon: PaperAirplaneIcon,
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
        image={{
          src: "/_static/images/web-development.svg",
          alt: "Développement web",
          height: 182,
          width: 347,
          className: "max-w-md mx-auto lg:max-w-lg",
        }}
        title="Un site web de qualité professionnelle"
        description="Optez pour un site web unique et performant, conçu avec soin et expertise par LeLaboWeb. Un site sur-mesure, vous permettra de vous démarquer de vos concurrents."
        features={[
          {
            title: "Des sites web performants",
            description:
              "Nous n'utilisons ni WordPress, ni des page-builder comme Wix, afin de garantir une performance maximale de votre site web. Ces solutions sont des pièges, elles sont lentes et très peu sécurisées.",
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
        link="/sites-ecommerce"
      />

      <SideFeaturesChecks
        className="pb-24"
        invert
        image={{
          src: "/_static/images/services.svg",
          alt: "Accompagnement personnalisé",
          height: 182,
          width: 347,
          className: "max-w-md mx-auto lg:max-w-lg",
        }}
        title="Un accompagnement personnalisé"
        description="Nous vous accompagnons de bout-en-bout dans la réalisation de votre projet web."
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
        link="/sites-vitrines"
      />

      <Portfolio className="mb-24" />
    </>
  );
}
