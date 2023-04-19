import type { Metadata } from "next";
import {
  ArrowTrendingUpIcon,
  TicketIcon,
  CursorArrowRaysIcon,
  PaperAirplaneIcon,
  LockClosedIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";

export const metadata: Metadata = {
  title:
    "Conception de sites e-commerces — LeLaboWeb, l'agence web sur-mesure des petites & moyennes entreprises",
  description:
    "LeLaboWeb vous accompagne dans la conception de votre site e-commerce. Estimez votre projet en ligne gratuitement, en 5 minutes et sans engagement.",
};

export default function Page() {
  return (
    <>
      <Hero
        title={
          <>
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              Les sites e-commerces
            </span>
            , vendez vos produits en ligne facilement.
          </>
        }
        description={
          <>
            Nous démocratisons l&apos;e-commerce en le rendant{" "}
            <span className="font-medium text-blue-200">simple</span>,{" "}
            <span className="font-medium text-blue-200">efficace</span> et{" "}
            <span className="font-medium text-blue-200">accessible</span>.
            Accédez à une interface de gestion simple et intuitive de vos
            produits & commandes.
          </>
        }
        cta={{ href: "/contact", label: "Estimer mon site e-commerce" }}
        checks={[
          "Démarrez la vente en ligne facilement et rapidement",
          "Interface de gestion simple et intuitive",
        ]}
        image={{
          width: 768,
          height: 414,
          alt: "",
          src: "/_static/images/landing/ecommerce-mockup.png",
          className: "w-72",
        }}
      />

      <Features
        className="mt-24 pb-24"
        title="La vente en ligne, un canal de vente supplémentaire"
        description="60% des Français ont acheté en ligne en 2022, soit 40 millions de personnes. C'est un canal de vente essentiel pour toute entreprise."
        features={[
          {
            title: "Augmentez vos ventes",
            description:
              "Touchez un public plus large et augmentez vos ventes en ligne.",
            icon: ArrowTrendingUpIcon,
          },
          {
            title: "Gestion des produits",
            description:
              "Ajoutez, modifiez, supprimez vos produits en quelques clics et en temps réel sur votre site.",
            icon: CursorArrowRaysIcon,
          },
          {
            title: "Promotions & offres spéciales",
            description:
              "Créez des promotions et offres spéciales d'évènements sur vos produits vendus en ligne.",
            icon: TicketIcon,
          },
          {
            title: "Gestion des commandes",
            description:
              "Gérez et suivez les commandes de vos clients en quelques clics, grâce à une interface intuitive.",
            icon: PaperAirplaneIcon,
          },
          {
            title: "Paiements sécurisés",
            description:
              "Les paiements sont sécurisés, aucune donnée bancaire n'est stockée sur votre site.",
            icon: LockClosedIcon,
          },
          {
            title: "Protection des données",
            description:
              "Avec la mise en place de la loi RGPD, nous respectons la confidentialité de vos utilisateurs.",
            icon: EyeSlashIcon,
          },
        ]}
      />
    </>
  );
}
