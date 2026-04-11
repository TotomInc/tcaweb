import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";

import { ContactUs } from "@/components/sections/ContactUs";
import { HeroCentered } from "@/components/sections/HeroCentered";
import { Portfolio } from "@/components/sections/Portfolio";
import { WhyUs } from "@/components/sections/WhyUs";
import { AuroraText } from "@/components/ui/21st/AuroraText";
import { BentoCard } from "@/components/ui/BentoCard";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Création de site vitrine | TCA Web",
  description:
    "Fabriquons ensemble l'identité visuelle unique de votre entreprise, afin d'attirer de nouveaux clients et de renforcer votre image.",
};

export default function Page() {
  return (
    <main className="bg-gray-100">
      <HeroCentered
        badge="Sites vitrines"
        description={
          <>
            <span className="font-heading font-bold">Votre site vitrine</span> conçu pour{" "}
            <span className="font-heading font-bold">renforcer</span> votre image,{" "}
            <span className="font-heading font-bold">attirer</span> de nouveaux clients et vous{" "}
            <span className="font-heading font-bold">démarquer</span> de la concurrence.
          </>
        }
        items={[
          "Spécialiste des PME",
          "Passez en 1ère page Google",
          "Tarifs optimisés pour les PME",
        ]}
        title={
          <>
            Développez la visibilité
            <br />
            de{" "}
            <AuroraText className="text-primary rotate-[-2deg] rounded-lg bg-white px-3 py-2 shadow-xl">
              votre entreprise
            </AuroraText>
          </>
        }
      />

      <Section.Root>
        <Section.Heading
          badge="Bénéfices"
          description="75% des clients recherchent des entreprises en ligne avant de la contacter."
          label="Pourquoi un site vitrine est crucial pour votre entreprise ?"
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
              Un site vitrine est l&apos;assistant digital idéal afin de promouvoir votre
              entreprise. Disponible 24h/24, il permet de renforcer la crédibilité de votre
              entreprise.
            </p>

            <ul className="flex flex-col items-start gap-2.5">
              {[
                "Présence en ligne 24h/24",
                "Renforce la crédibilité de votre entreprise",
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
          description="Libérez-vous des contraintes du digital afin que vous puissiez vous concentrer sur votre activité."
          label="Un développement rapide et efficace"
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
              title: "Référencement web optimisé dès la conception",
              description:
                "Grâce à notre expertise en référencement web, nous optimisons votre site pour que vous apparaissez en 1ère page de Google.",
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

      <WhyUs />

      <ContactUs />
    </main>
  );
}
