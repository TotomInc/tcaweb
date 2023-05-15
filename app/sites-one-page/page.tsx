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
              Une seule page
            </span>
            , ce qu&apos;il vous suffit pour démarrer votre présence digitale.
          </>
        }
        description={
          <>
            Nous proposons un format 1-page afin de présenter votre activité. Ce
            type de format est adapté aux petites entreprises locales.
          </>
        }
        cta={{ href: "/contact", label: "Je prends contact" }}
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
        title="Un site 1-page à l'image de votre entreprise"
        description="Entièrement personnalisable, ce format de site permet d'exposer votre activité avec un formulaire de contact pour vos (futurs) clients."
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
        title="Je prends contact pour mon site 1-page"
        description="Contactez-nous via notre formulaire interactif en précisant le type de site voulu. Nous vous répondrons dans les plus brefs délais."
        ctaTitle="Vers le formulaire de contact"
        link="/contact"
        coverImage={{
          src: "/_static/images/landing/vitrine-grid-mockup.png",
          alt: "",
        }}
      />
    </>
  );
}
