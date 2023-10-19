import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title:
    "Contactez-nous pour parler de votre projet web, création site Internet ou refonte | TCA Web",
  description:
    "Confiez votre projet web à un expert afin d'en guarantir le succès tout en étant accompagné. Demandez un devis gratuit pour votre projet web.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title={
          <>
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              Travaillons ensemble
            </span>{" "}
            sur votre nouveau projet web.
          </>
        }
        description={
          <>
            Boostez votre présence digitale grâce à notre expertise en{" "}
            <span className="font-medium text-blue-200">développement web</span>
            . Demandez un{" "}
            <span className="font-medium text-blue-200">devis gratuit</span>{" "}
            pour votre projet.
          </>
        }
        image={{
          width: 500,
          height: 300,
          alt: "",
          src: "/_static/images/web-development.svg",
          className: "w-64 lg:max-w-xl",
        }}
      />

      <ContactForm />
    </>
  );
}
