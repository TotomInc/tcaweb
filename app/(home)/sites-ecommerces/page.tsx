import Image from "next/image";
import type { Metadata } from "next";
import {
  BeakerIcon,
  CursorArrowRaysIcon,
  EyeSlashIcon,
  LockClosedIcon,
  PaperAirplaneIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ContactForm } from "@/components/sections/ContactForm";
import { SideFeaturesChecks } from "@/components/sections/SideFeaturesChecks";

export const metadata: Metadata = {
  title: "Création de site e-commerce | TCA Web",
  description:
    "Créez un nouveau canal de vente pour votre activité et augmentez vos ventes. Nous vous accompagnons dans la conception de votre site e-commerce afin d'en garantir le succès.",
};

export default function Page() {
  return (
    <>
      <Hero
        title={
          <>
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              Création de site ecommerce
            </span>
            , vendez vos produits en ligne facilement.
          </>
        }
        description={
          <>
            Concevoir et gérer un site e-commerce{" "}
            <span className="font-semibold">est complexe</span>. Nous vous
            accompagnons dans la conception de votre site e-commerce afin
            d&apos;en
            <span className="font-semibold">garantir le succès</span>.
          </>
        }
        checks={[
          "Démarrez la vente en ligne facilement et rapidement.",
          "Un nouveau canal de vente pour votre entreprise.",
        ]}
        image={{
          width: 768,
          height: 414,
          alt: "Portfolio de sites e-commerces",
          src: "/_static/images/landing/ecommerce-mockup.png",
          className: "w-64",
        }}
      >
        <div className="flex items-center justify-center">
          <Image
            unoptimized
            src="/_static/images/shopify-partners.png"
            alt="Partenaire Shopify"
            width="192"
            height="32"
            className="block h-[24px] w-auto lg:h-[32px]"
          />

          <p className="ml-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-900 shadow-md lg:ml-4 lg:px-4 lg:text-sm">
            Partenaire Shopify
          </p>
        </div>
      </Hero>

      <Features
        className="mt-24 pb-24"
        title="Les avantages de travailler avec TCA Web"
        description="En travaillant avec des pros, vous avez tout à gagner afin de faire évoluer vos ventes."
        features={[
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
          {
            title: "Design unique",
            description:
              "Pas de thèmes préconçus réutilisés par toutes les agences web. Nous livrons un site web unique et sur-mesure.",
            icon: BeakerIcon,
          },
        ]}
      />

      <SideFeaturesChecks
        className="pb-24"
        title="Gérez votre site e-commerce facilement"
        description="Grâce à une interface de gestion simple et intuitive, vous pouvez ajouter, modifier et supprimer vos produits en quelques clics."
        image={{
          src: "/_static/images/ecommerce/shopify-product.png",
          alt: "Interface de gestion de produits, édition du nom, description, prix, image, et bien d'autres paramètres.",
          height: 400,
          width: 512,
          className:
            "max-w-md mx-auto lg:max-w-lg rounded-lg border border-gray-200",
        }}
        features={[
          {
            title: "Création et édition de produits intuitive",
            description:
              "L'interface de gestion est simple à utiliser, nous vous accompagnons dans la prise en main de cette interface.",
          },
          {
            title: "Gérez vos promotions",
            description:
              "Créez des promotions et offres spéciales sur vos produits vendus en ligne.",
          },
          {
            title: "Up-selling",
            description:
              "Proposez des produits populaires achetés fréquemment et ajoutez des produits recommandés lors de l'achat d'un produit.",
          },
          {
            title: "Statistiques de ventes",
            description:
              "Bénéficiez de statistiques de ventes sur les produits achetés par vos clients en ligne.",
          },
        ]}
      />

      <SideFeaturesChecks
        invert
        className="pb-24"
        title="Gestion des commandes, paiements & modes de livraison"
        description="Grâce à votre site e-commerce, acceptez les paiements en ligne et proposez différentes options de livraison à vos clients."
        image={{
          src: "/_static/images/ecommerce/shopify-order.png",
          alt: "Interface de gestion des commandes.",
          height: 400,
          width: 512,
          className:
            "max-w-md mx-auto lg:max-w-lg rounded-lg border border-gray-200",
        }}
        features={[
          {
            title: "Gestion des commandes et clients",
            description:
              "Gérez et suivez les commandes et vos profils clients en quelques clics, grâce à une interface intuitive.",
          },
          {
            title: "Paiement en ligne simple & sécurisé",
            description:
              "Nous travaillons avec un partenaire spécialisé dans l'e-commerce afin de gérer les paiements en ligne de vos clients.",
          },
          {
            title: "Différents modes de retrait",
            description:
              "Proposez à vos clients de venir retirer leurs commande en boutique, ou proposez leur la livraison à domicile.",
          },
        ]}
      />

      <ContactForm title="Demander un devis gratuit" />
    </>
  );
}
