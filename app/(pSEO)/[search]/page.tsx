import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ContactUs } from "@/components/sections/ContactUs";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { AuroraText } from "@/components/ui/21st/AuroraText";
import { BentoCard } from "@/components/ui/BentoCard";
import { Section } from "@/components/ui/Section";
import { buildSearchRequests, getPreposition } from "@/lib/pseo/utils";

interface Props {
  params: Promise<{ search: string }>;
}

export async function generateStaticParams() {
  const searchRequests = buildSearchRequests();

  return searchRequests.map((searchRequest) => ({ search: searchRequest.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const searchRequests = buildSearchRequests();
  const { search } = await params;
  const searchRequest = searchRequests.find((searchRequest) => searchRequest.slug === search);

  if (!searchRequest) {
    notFound();
  }

  let title: string = `Création de site internet pour PMEs et auto-entrepreneurs`;

  let description: string = `Création de site internet pour les professionnels. Accompagnement complet, tarifs adaptés aux besoins des PMEs. Attirez de nouveaux clients et renforcez votre image en ligne.`;

  if (searchRequest.industry) {
    title = `${searchRequest.intent.title} ${searchRequest.industry.name}`;
    description = `${searchRequest.intent.title} ${searchRequest.industry.name}. Attirez de nouveaux clients et renforcez votre image en ligne. Tarifs adaptés à vos besoins.`;
  }

  if (searchRequest.city) {
    title = `${searchRequest.intent.title} ${getPreposition(searchRequest.city.name)}${searchRequest.city.name}`;
    description = `${searchRequest.intent.title} ${getPreposition(searchRequest.city.name)}${searchRequest.city.name}. Attirez de nouveaux clients et renforcez votre image en ligne. Tarifs adaptés à vos besoins.`;
  }

  return {
    title: `${title} | TCA Web`,
    description,
  };
}

export default async function Page({ params }: Props) {
  const searchRequests = buildSearchRequests();
  const { search } = await params;
  const searchRequest = searchRequests.find((searchRequest) => searchRequest.slug === search);

  if (!searchRequest) {
    notFound();
  }

  return (
    <main className="bg-gray-100">
      {searchRequest.city && searchRequest.intent.forCity ? (
        <Hero
          items={[
            "Tarifs adaptés à vos besoins",
            `Ciblez vos clients près ${getPreposition(searchRequest.city.name)}${searchRequest.city.name}`,
            `Spécialiste des PMEs et auto-entrepreneurs`,
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
                près {getPreposition(searchRequest.city.name)}
                {searchRequest.city.name}
              </AuroraText>
            </>
          }
          description={
            <>
              <span className="font-heading font-bold">Renforcez</span> votre image et{" "}
              <span className="font-heading font-bold">attirez</span> de nouveaux clients.
              <br />
              <span className="font-heading font-bold">Distinguez-vous</span> à{" "}
              {searchRequest.city.name} et ses alentours.
            </>
          }
        />
      ) : null}

      {!searchRequest.city && searchRequest.industry && !searchRequest.intent.forCity ? (
        <Hero
          items={[
            `Attirez de nouveaux clients`,
            "Tarifs adaptés à vos besoins",
            `Spécialiste des auto-entrepreneurs et PMEs`,
          ]}
          title={
            <>
              Développez la visibilité
              <br />
              de votre activité
              <br />
              <AuroraText
                as="span"
                className="text-primary rotate-[-2deg] rounded-lg bg-white px-3 py-2 shadow-xl"
              >
                {getPreposition(searchRequest.industry.name)}
                {searchRequest.industry.name}
              </AuroraText>
            </>
          }
          description={
            <>
              <span className="font-heading font-bold">Renforcez</span> votre image et{" "}
              <span className="font-heading font-bold">attirez</span> de nouveaux clients.
              <br />
              <span className="font-heading font-bold">Distinguez-vous</span> des autres{" "}
              {searchRequest.industry.demonym.plural}.
            </>
          }
        />
      ) : null}

      <Section.Root>
        {searchRequest.city && searchRequest.intent.forCity ? (
          <Section.Heading
            badge="Présence locale"
            label={`Pourquoi un site vitrine est-il crucial pour votre entreprise ${searchRequest.city?.demonym.feminine} ?`}
            description={`75% des clients près ${getPreposition(searchRequest.city.name)}${searchRequest.city.name} recherche une entreprise en ligne avant de la contacter.`}
          />
        ) : null}

        {!searchRequest.city && searchRequest.industry && !searchRequest.intent.forCity ? (
          <Section.Heading
            badge="Présence concurrentielle"
            label={`Pourquoi un site vitrine est-il crucial pour un ${searchRequest.industry.demonym.masculine} ?`}
            description={`75% des clients recherchent des ${searchRequest.industry.demonym.plural} en ligne avant de les contacter.`}
          />
        ) : null}

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
                `Renforce la crédibilité à l'échelle locale ${searchRequest.city ? `${searchRequest.city.department.name} et alentours` : ""}`,
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

          {searchRequest.city && searchRequest.intent.forCity ? (
            <BentoCard
              content={{
                title: `Référencement web local à ${searchRequest.city.name}`,
                description: `Notre expertise en référencement web permet de positionner votre site vitrine en première page de Google sur les recherches locales près ${getPreposition(searchRequest.city.name)}${searchRequest.city.name}.`,
              }}
              image={{
                src: "/_static/images/referencement-web.png",
                alt: "Page d'accueil de Google",
                width: 2095,
                height: 1087,
              }}
            />
          ) : null}

          {!searchRequest.city && searchRequest.industry && !searchRequest.intent.forCity ? (
            <BentoCard
              content={{
                title: `Référencement web pour les ${searchRequest.industry.demonym.plural}`,
                description: `Notre expertise en référencement web permet de positionner votre site en première page de Google sur les recherches pour les ${searchRequest.industry.demonym.plural}.`,
              }}
              image={{
                src: "/_static/images/referencement-web.png",
                alt: "Page d'accueil de Google",
                width: 2095,
                height: 1087,
              }}
            />
          ) : null}
        </div>
      </Section.Root>

      <Portfolio />

      <WhyUs city={searchRequest.city} />

      <ContactUs />
    </main>
  );
}
