import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactUs } from "@/components/sections/ContactUs";
import { HeroCentered } from "@/components/sections/HeroCentered";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { AuroraText } from "@/components/ui/21st/AuroraText";
import { BentoCard } from "@/components/ui/BentoCard";
import { Section } from "@/components/ui/Section";
import { cities, getPreposition } from "@/lib/cities";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;

  const cityData = cities.find((c) => c.slug === city);

  if (!cityData) {
    notFound();
  }

  return {
    title: `Création de site internet à ${cityData.name} | TCA Web`,
    description: `L'Agence TCA Web crée des sites internet pour les entreprises près ${getPreposition(cityData)}${cityData.name}. Attirez de nouveaux clients et renforcez votre image en ligne.`,
  };
}

export default async function Page({ params }: Props) {
  const { city } = await params;

  const cityData = cities.find((c) => c.slug === city);

  if (!cityData) {
    notFound();
  }

  return (
    <main className="bg-gray-100">
      <HeroCentered
        badge="Sites vitrines"
        items={[
          "Spécialiste des PME",
          "Tarifs adaptés à vos besoins",
          `Visibilité maximale près ${getPreposition(cityData)}${cityData.name}`,
        ]}
        title={
          <>
            Développez la visibilité
            <br />
            de votre entreprise
            <br />
            <AuroraText
              as="span"
              className="text-primary rotate-[-2deg] rounded-lg bg-white px-3 py-2 shadow-xl"
            >
              près {getPreposition(cityData)}
              {cityData.name}
            </AuroraText>
          </>
        }
        description={
          <>
            <span className="font-heading font-bold">Votre site vitrine</span> pensé pour{" "}
            <span className="font-heading font-bold">renforcer</span> votre image,{" "}
            <span className="font-heading font-bold">attirer</span> de nouveaux clients locaux et
            vous <span className="font-heading font-bold">distinguer</span> à {cityData.name} et ses
            environs.
          </>
        }
      />

      <Section.Root>
        <Section.Heading
          badge="Bénéfices"
          label={`Pourquoi un site vitrine est-il crucial pour votre entreprise ${cityData.demonym.feminine} ?`}
          description={`75% des clients près ${getPreposition(cityData)}${cityData.name} recherche une entreprise en ligne avant de la contacter.`}
        />

        <BentoCard
          image={{
            src: "/_static/images/creation-site-internet.png",
            alt: "Exemple de sites vitrines réalisés par TCA Web",
            height: 1239,
            width: 2304,
            className: "relative mx-auto mt-auto block max-w-sm h-[164px] w-auto object-contain",
          }}
        >
          <div className="relative flex h-fit flex-col gap-4">
            <h3 className="font-heading text-xl font-medium tracking-tight">
              Un site à l&apos;image de votre entreprise
            </h3>

            <p className="text-secondary max-w-md text-base/relaxed text-balance">
              Disponible 24h/24, votre site web permet de renforcer la crédibilité de votre
              entreprise et de vous démarquer de la concurrence.
            </p>

            <ul className="flex flex-col items-start gap-2.5">
              {[
                "Présence en ligne 24h/24",
                `Renforce la crédibilité à l'échelle locale (${cityData.department.name} et alentours)`,
                "Facilite la prise de contact",
                "Attire de nouveaux prospects via Google",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-base/relaxed">
                  <CheckBadgeIcon className="size-6 shrink-0 text-blue-600" />
                  <span className="text-base/relaxed leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </BentoCard>
      </Section.Root>

      <Section.Root>
        <Section.Heading
          badge="Services"
          label="Un développement rapide et efficace"
          description="Libérez-vous des contraintes du digital afin que vous puissiez vous concentrer sur votre activité."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <BentoCard
            content={{
              title: "Design responsive, ergonomique et moderne",
              description:
                "Une identité visuelle unique pour votre entreprise afin de proposer une expérience utilisateur optimale.",
            }}
            image={{
              src: "/_static/images/graphisme.png",
              alt: "Logiciel de création graphique",
              width: 2796,
              height: 1536,
            }}
          />

          <BentoCard
            content={{
              title: "Développement, suivi et lancement",
              description:
                "Nous vous accompagnons dans le développement, le suivi et le lancement de votre site vitrine afin que vous puissiez vous concentrer sur votre activité.",
            }}
            image={{
              src: "/_static/images/lancement-site-internet.png",
              alt: "Lancement du site internet d'un client",
              width: 1536,
              height: 1514,
              className: "h-[164px] w-auto object-contain",
            }}
          />

          <BentoCard
            content={{
              title: `Référencement web local à ${cityData.name}`,
              description: `Notre expertise en référencement web permet de positionner votre site vitrine en première page de Google sur les recherches locales près ${getPreposition(cityData)}${cityData.name}.`,
            }}
            image={{
              src: "/_static/images/referencement-web.png",
              alt: "Page d'accueil de Google",
              width: 2095,
              height: 1087,
            }}
          />
        </div>
      </Section.Root>

      <Portfolio />

      <WhyUs city={cityData} />

      <ContactUs />
    </main>
  );
}
