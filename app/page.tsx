import {
  DevicePhoneMobileIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  PaperAirplaneIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { Hero } from "../components/sections/Hero";
import { Features } from "../components/sections/Features";

export default function Home() {
  return (
    <>
      <Hero />

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
    </>
  );
}
