import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  CodeBracketIcon,
  Cog8ToothIcon,
  FlagIcon,
  MagnifyingGlassIcon,
  ServerStackIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

import { cities, slugify } from "@/lib/geo";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ContactForm } from "@/components/sections/ContactForm";
import * as TwoSidedContent from "@/components/sections/TwoSidedContent";

interface Props {
  params: { city: string };
}

export async function generateStaticParams() {
  return cities.map(city => ({ city: slugify(city) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = cities.find(c => slugify(c) === params.city);

  if (!city) {
    redirect("/");
  }

  return {
    title: `Référencement site internet à ${city}`,
    description: `Notre agence web experte en référencement naturel de site internet, vous accompagne dans votre projet web à ${city}. Tarifs évolutifs et adaptés à vos besoins.`,
  };
}

export default function Page({ params }: Props) {
  const city = cities.find(c => slugify(c) === params.city);

  if (!city) {
    redirect("/");
  }

  return (
    <>
      <Hero
        title={(
          <>
            Référencement de site internet à
            {" "}
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              {city}
            </span>
            .
          </>
        )}
        description={(
          <>
            Nous vous accompagnons de A à Z dans votre projet web. Notre
            objectif,
            {" "}
            <span className="font-semibold">
              vous positionner en première page des moteurs de recherche
            </span>
            {" "}
            et améliorer votre visibilité en ligne.
          </>
        )}
        checks={[
          "Un référencement naturel optimisé pour les moteurs de recherche",
          "Un audit technique pour améliorer la performance de votre site",
          "Des résultats mesurables et un suivi régulier de votre positionnement",
        ]}
        image={{
          width: 768,
          height: 650,
          alt: "Portfolio de sites web réalisés par TCA Web",
          src: "/_static/images/landing/landing-mockup.png",
        }}
      />

      <Features
        className="mt-24 pb-24"
        title="Bénéficiez d'un audit technique et d'un suivi régulier de votre site internet"
        description="Nous avons pour objectif de vous proposer une solution juste et efficace, à un prix respectable afin de vous accompagner dans la réussite de votre projet web."
        features={[
          {
            title: "Made in France",
            description:
              "Nous sommes basés en France (en Seine-et-Marne) et sommes des professionnels du web depuis plus de 10 ans.",
            icon: FlagIcon,
          },
          {
            title: "Audit technique",
            description:
              "Nous démarrons par un audit technique afin d'identifier les points à améliorer sur votre site web.",
            icon: Cog8ToothIcon,
          },
          {
            title: "Développement",
            description:
              "Nous mettons en place les actions nécessaires pour améliorer la performance de votre site web.",
            icon: CodeBracketIcon,
          },
          {
            title: "Optimisations SEO",
            description:
              "Notre audit SEO nous permet de vous proposer des optimisations pour améliorer votre positionnement.",
            icon: MagnifyingGlassIcon,
          },
          {
            title: "1ère place sur Google",
            description:
              "Grâce aux actions mises en place, nous essayons de vous positioner en première page des moteurs de recherche.",
            icon: TrophyIcon,
          },
          {
            title: "Hébergement pro",
            description:
              "Nous pouvons vous proposer un hébergement alternatif plus performant pour votre site web.",
            icon: ServerStackIcon,
          },
        ]}
      />

      <TwoSidedContent.Container
        title="Notre agence web basée en Seine-et-Marne est spécialisée dans l'optimisation de site internet"
        image={{
          src: "/_static/images/illustrations/web-development.jpg",
          alt: "Développement web, outils de développement",
          quality: 50,
        }}
      >
        <TwoSidedContent.Paragraph>
          Que vous soyez
          {" "}
          <span className="font-medium">
            un individu, une petite entreprise (TPE/PME), une startup, un
            organisateur d&apos;événements ou même une administration locale
          </span>
          , bien référencer son site internet est un enjeu majeur pour augmenter
          sa visibilité et attirer de nouveaux clients. Près de
          {" "}
          <span className="font-medium">91% des internautes</span>
          {" "}
          ne vont
          au-delà de la première page de résultats sur Google. C&apos;est
          pourquoi il est important de bien positionner son site internet sur
          les moteurs de recherche.
        </TwoSidedContent.Paragraph>

        <TwoSidedContent.Paragraph>
          L&apos;algorithme de référencement de Google est en constante
          évolution, il contient
          {" "}
          <span className="font-medium">de nombreux critères et facteurs</span>
          {" "}
          à respecter afin d&apos;être bien positionné sur certains mots clés.
        </TwoSidedContent.Paragraph>

        <TwoSidedContent.Heading>
          Un accompagnement personnalisé pour optimiser votre site internet
        </TwoSidedContent.Heading>

        <TwoSidedContent.Paragraph>
          TCA Web est une petite agence web indépendante, à taille humaine
          située en Seine et Marne. Design, développement, référencement,
          hébergement, maintenance, nous vous accompagnons et conseillons à
          chaque étape de votre projet de création de site internet. Tout est
          étudié en fonction de vos objectifs et besoins pour attirer de
          nouveaux contacts et clients.
        </TwoSidedContent.Paragraph>

        <TwoSidedContent.Paragraph>
          A chaque étape de votre projet de création de site internet, un
          interlocuteur unique est à votre disposition pour vous proposer les
          solutions les plus adaptées à vos exigences !
        </TwoSidedContent.Paragraph>
      </TwoSidedContent.Container>

      <ContactForm title="Contactez-nous et nous reviendrons vers vous pour établir un devis personnalisé adapté à vos besoins" />
    </>
  );
}
