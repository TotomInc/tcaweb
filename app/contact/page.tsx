import type { Metadata } from "next";

import { Hero } from "@/components/sections/Hero";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact | TCA Web",
  description:
    "Confiez votre projet web à un expert afin d'en guarantir le succès tout en étant accompagné. Demandez un devis gratuit pour votre projet web.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title={(
          <>
            <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
              Travaillons ensemble
            </span>
            {" "}
            sur votre nouveau projet web.
          </>
        )}
        description={(
          <>
            Discutons de votre prochain projet web. Nous vous accompagnons dans
            la conception de votre site web afin d&apos;en
            {" "}
            <span className="font-semibold">garantir le succès</span>
            .
          </>
        )}
        image={{
          width: 500,
          height: 300,
          alt: "Développement web",
          src: "/_static/images/web-development.svg",
          className: "w-64 lg:max-w-xl",
        }}
      />

      <ContactForm />
    </>
  );
}
