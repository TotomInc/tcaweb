import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { WebsiteCalculator } from "@/components/marketing/WebsiteCalculator";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title:
    "Estimation simple & rapide, contact — LeLaboWeb, l'agence web sur-mesure des petites & moyennes entreprises",
  description:
    "LeLaboWeb vous accompagne dans la conception de votre site vitrine. Estimez votre projet en ligne gratuitement, en 5 minutes et sans engagement.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title={
          <>
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              Notre outil d&apos;estimation
            </span>{" "}
            permet de vous donner une idée du prix de votre site.
          </>
        }
        description={
          <>
            Répondez à quelques questions et{" "}
            <span className="font-medium text-blue-200">
              obtenez une estimation
            </span>{" "}
            du prix de votre site.{" "}
            <span className="font-medium text-blue-200">
              Pas d&apos;email requis
            </span>
            , anonyme et instantané.
          </>
        }
      />

      <WebsiteCalculator className="mb-8" />

      <ContactForm />
    </>
  );
}
