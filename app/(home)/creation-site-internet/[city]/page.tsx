import Image from "next/image";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import {
  CheckBadgeIcon,
  DevicePhoneMobileIcon,
  DocumentCheckIcon,
  FlagIcon,
  MagnifyingGlassIcon,
  ServerStackIcon,
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
    title: `Agence web création de site internet à ${city}`,
    description: `Notre agence web experte en création de site internet, vous accompagne dans la conception de votre site à ${city}. Tarifs évolutifs et adaptés à vos besoins.`,
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
            Création de site internet sur-mesure à
            {" "}
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              {city}
            </span>
            .
          </>
        )}
        description={(
          <>
            Nous vous accompagnons de A à Z dans la création de votre site.
            Notre objectif,
            {" "}
            <span className="font-semibold">
              transformer vos visiteurs en clients
            </span>
            {" "}
            et augmenter votre présence en ligne.
          </>
        )}
        checks={[
          "Un design unique, adapté à l'identité de votre entreprise",
          "Un tarif évolutif et adapté à vos besoins",
          "Un site internet pensé pour attirer et convertir vos visiteurs",
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
        title="Bénéficiez de services sur-mesure pour la création de votre site internet"
        description="Nous avons pour objectif de vous proposer une solution juste et efficace, à un prix respectable afin de vous accompagner dans la réussite de votre projet web."
        features={[
          {
            title: "Made in France",
            description:
              "Votre site est réalisé en France (en Seine-et-Marne) par des passionés & professionnels du web.",
            icon: FlagIcon,
          },
          {
            title: "Conforme aux normes",
            description:
              "Votre site respecte les règlementations en vigueur et les normes du web, notamment le RGPD.",
            icon: DocumentCheckIcon,
          },
          {
            title: "Site premium",
            description:
              "Un design développé sur-mesure à l'image de votre entreprise, pour vous démarquer de la concurrence.",
            icon: CheckBadgeIcon,
          },
          {
            title: "Site responsive",
            description:
              "Un site compatible sur tous les supports comme les ordinateurs, tablettes et smartphones.",
            icon: DevicePhoneMobileIcon,
          },
          {
            title: "Optimisations SEO",
            description:
              "Notre expertise du web nous permet de vous proposer un site optimisé pour les moteurs de recherche.",
            icon: MagnifyingGlassIcon,
          },
          {
            title: "Hébergement pro",
            description:
              "Nous proposons un hébergement professionnel pour votre site web, rapide et sécurisé.",
            icon: ServerStackIcon,
          },
        ]}
      />

      <section className="relative mb-24 flex w-full items-start space-x-6 bg-gradient-to-br from-blue-800 to-blue-600 px-8 py-10 lg:mx-auto lg:max-w-3xl lg:rounded-2xl lg:shadow-lg">
        <div className="shrink-0 rounded bg-white p-2 shadow">
          <Image
            src="/_static/images/logos/ovh-logo.png"
            alt="OVH"
            height={64}
            width={64}
            quality={75}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="font-spline text-lg font-bold text-white">
            Vous n&apos;avez pas de nom de domaine ?
          </h3>

          <p className="text-white">
            Nous proposons la gestion de votre nom de domaine et de votre
            hébergement. Les noms de domaine sont enregistrés et gérés
            {" "}
            <span className="font-semibold">
              auprès d&apos;OVH (société française)
            </span>
            .
          </p>
        </div>
      </section>

      <TwoSidedContent.Container
        title="Notre agence web basée en Seine-et-Marne est spécialisée dans la création de site internet."
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
          , notre agence est prête à prendre en charge la conception de votre
          site web, que ce soit dans sa totalité ou seulement une partie ! Notre
          équipe d&apos;experts du web est là pour vous guider dans la création
          de votre présence en ligne.
        </TwoSidedContent.Paragraph>

        <TwoSidedContent.Paragraph>
          Vous vous demandez
          {" "}
          <span className="font-medium">
            quel type de site web choisir entre un site vitrine, un site
            e-commerce ou un forum
          </span>
          {" "}
          ? Pas de souci, nous sommes là pour vous aider. En se basant sur vos
          besoins et spécifications techniques, nous collaborons avec vous pour
          élaborer une stratégie adaptée, vous permettant de décider du type de
          site web, de sa structure, de son design et de son référencement.
        </TwoSidedContent.Paragraph>

        <TwoSidedContent.Heading>
          Un accompagnement personnalisé afin de mener à bien votre projet web
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
