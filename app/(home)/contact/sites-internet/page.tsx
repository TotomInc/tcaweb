import type { Metadata } from "next";
import {
  ArrowTrendingUpIcon,
  BeakerIcon,
  EyeSlashIcon,
  KeyIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Portfolio } from "@/components/sections/Portfolio";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Création de site Internet | TCA Web",
  description:
    "Boostez la visibilité de votre entreprise et gagnez de nouveaux clients grâce à une portée augmentée. TCA Web vous accompagne dans la conception de votre site Internet.",
};

export default function Page() {
  return (
    <>
      <Hero
        title={(
          <>
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              Création de site web
            </span>
            {" "}
            professionnel pour votre activité.
          </>
        )}
        description={(
          <>
            Concevoir un site internet est facile. Mais concevoir un site
            internet efficace demande
            {" "}
            <span className="font-semibold">de l&apos;expérience</span>
            . Notre
            objectif,
            {" "}
            <span className="font-semibold">
              transformer vos visiteurs en clients
            </span>
            .
          </>
        )}
        checks={[
          "Un design unique, adapté à l'identité de votre entreprise",
          "Nous travaillerons sur une structure efficace et un message clair",
        ]}
        image={{
          width: 768,
          height: 414,
          alt: "Portfolio de sites vitrines",
          src: "/_static/images/landing/vitrine-mockup.png",
          className: "w-72",
        }}
      />

      <Features
        className="mt-24 pb-24"
        title="Les avantages de travailler avec TCA Web"
        description="En travaillant avec des pros, vous avez tout à gagner."
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
            title: "Référencement Google",
            description:
              "Votre entreprise sera référencée sur Google, afin de vous trouvez plus facilement.",
            icon: MagnifyingGlassIcon,
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

      <Portfolio className="mb-24" titleClassName="!text-center" />

      <ContactForm title="Demander un devis gratuit" />
    </>
  );
}
