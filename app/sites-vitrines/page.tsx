import type { Metadata } from "next";
import {
  DevicePhoneMobileIcon,
  PencilSquareIcon,
  HandRaisedIcon,
  MagnifyingGlassIcon,
  EyeSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { LinkBanner } from "@/components/sections/LinkBanner";

export const metadata: Metadata = {
  title:
    "Conception de sites vitrines — LeLaboWeb, l'agence web sur-mesure des petites & moyennes entreprises",
  description:
    "LeLaboWeb vous accompagne dans la conception de votre site vitrine. Estimez votre projet en ligne gratuitement, en 5 minutes et sans engagement.",
};

export default function Page() {
  return (
    <>
      <Hero
        title={
          <>
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              Les sites vitrines
            </span>
            , le point de départ de votre présence digitale.
          </>
        }
        description={
          <>
            Chaque entreprise a des besoins différents en matière de présence en
            ligne, nous offrons des solutions sur mesure afin de répondre aux
            exigences de votre entreprise.
          </>
        }
        cta={{ href: "/contact", label: "Estimer mon site vitrine" }}
        checks={[
          "Rendez votre entreprise visible en ligne",
          "Site sur-mesure, adapté à l'identité de votre entreprise",
        ]}
        image={{
          width: 768,
          height: 414,
          alt: "",
          src: "/_static/images/landing/vitrine-mockup.png",
          className: "w-72",
        }}
      />

      <Features
        className="mt-24 pb-24"
        title="Un site vitrine, à l'image de votre entreprise"
        description="Entièrement personnalisable, votre site vitrine permet de mettre en avant votre entreprise vers de nouveaux clients."
        features={[
          {
            title: "Site Responsive",
            description:
              "Le site s'adapte automatiquement à toutes les tailles d'écrans, afin d'accéder au contenu n'importe où.",
            icon: DevicePhoneMobileIcon,
          },
          {
            title: "Contenu dynamique",
            description:
              "Votre site est vivant et dynamique, il évolue avec votre entreprise et vos besoins.",
            icon: PencilSquareIcon,
          },
          {
            title: "Expérience utilisateur",
            description:
              "Simple, intuitif et moderne, démarquez-vous de vos concurrents avec un site à la pointe de la technologie.",
            icon: HandRaisedIcon,
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
            title: "Site sécurisé",
            description:
              "Votre site est sécurisé (SSL/HTTPS), afin de protéger les données de vos utilisateurs.",
            icon: LockClosedIcon,
          },
        ]}
      />

      <LinkBanner
        className="mb-24"
        title="J'estime mon projet instantanément"
        description="Grâce à notre formulaire interactif, vous pouvez estimez rapidement le prix de votre projet web. Nous vous répondrons dans les plus brefs délais."
        ctaTitle="J'estime mon projet"
        link="/contact"
        coverImage={{
          src: "/_static/images/landing/vitrine-grid-mockup.png",
          alt: "",
        }}
      />
    </>
  );
}
