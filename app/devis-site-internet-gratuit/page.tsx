import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { Quote } from "@/components/sections/Quote";
import { AuroraText } from "@/components/ui/21st/AuroraText";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Devis Site Internet Gratuit et Instantané | TCA Web",
  description:
    "Recevez un devis personnalisé pour votre projet de création de site internet. Votre devis en 5 minutes dans votre boîte mail, sans prise de rendez-vous ni engagement.",
};

export default function Page() {
  return (
    <main className="bg-gray-100">
      <Hero
        cta="Recevoir mon devis"
        items={[
          "Devis ajusté à vos besoins",
          "Recevez votre devis en 5 minutes",
          "Sans prise de contact ni engagement",
        ]}
        title={
          <>
            Recevez votre
            <br />
            <AuroraText
              as="span"
              className="text-primary rotate-[-2deg] rounded-lg bg-white px-3 py-2 shadow-xl"
            >
              devis personnalisé
            </AuroraText>
          </>
        }
        description={
          <>
            Obtenez <span className="font-heading font-bold">rapidement</span> et{" "}
            <span className="font-heading font-bold">gratuitement</span> un devis pour
            <br />
            votre site internet ou e-commerce en{" "}
            <span className="font-heading font-bold">quelques clics</span>.
          </>
        }
      />

      <Section.Root id="devis">
        <Section.Heading
          label="Votre devis personnalisé instantané"
          description="Recevez en quelques clics dans votre boîte mail un devis sur-mesure adapté à vos besoins."
        />

        <Section.Container className="w-full px-0 sm:px-6">
          <Quote />
        </Section.Container>
      </Section.Root>
    </main>
  );
}
