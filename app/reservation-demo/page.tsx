import type { Metadata } from "next";

import { CalcomEmbed } from "@/components/sections/CalcomEmbed";
import { Hero } from "@/components/sections/Hero";
import { AuroraText } from "@/components/ui/21st/AuroraText";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Réservez votre RDV découverte | TCA Web",
  description:
    "Réservez un RDV téléphonique de 15 minutes avec un expert afin de faire un bilan gratuit de votre projet. TCA Web vous accompagne dans la création de votre site internet.",
};

export default function Page() {
  return (
    <main className="bg-gray-100">
      <Hero
        cta="Réservez votre RDV"
        ctaSection="reservation-demo"
        description={
          <>
            Réservez un <span className="font-heading font-bold">RDV téléphonique</span> de 15
            minutes avec un expert afin de faire{" "}
            <span className="font-heading font-bold">un bilan gratuit</span> de votre projet.
          </>
        }
        items={[
          "Sans engagement",
          "Recevez un devis personnalisé",
          "Bénéficiez des conseils d'un expert",
        ]}
        title={
          <>
            Réservez votre
            <br />
            <AuroraText className="text-primary rotate-[-2deg] rounded-lg bg-white px-3 py-2 shadow-xl">
              RDV découverte
            </AuroraText>
          </>
        }
      />

      <Section.Root id="reservation-demo">
        <Section.Heading
          description="Réservez un RDV téléphonique de 15 minutes avec un expert afin de faire un bilan gratuit de votre projet."
          label="Réservez votre RDV découverte"
        />

        <Section.Container>
          <CalcomEmbed eventType="rdv-decouverte" />
        </Section.Container>
      </Section.Root>
    </main>
  );
}
