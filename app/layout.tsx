import "./tailwind.css";

import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Inter, Spline_Sans } from "next/font/google";

import { PostHogProvider } from "@/components/PostHogProvider";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "Création de Sites Web pour les entreprises | Agence TCA Web",
  description:
    "L'Agence TCA Web est spécialisée dans la création de sites internet, e-commerce et le marketing digital à Sens.",
};

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const heading = Spline_Sans({ subsets: ["latin"], variable: "--font-heading" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tcaweb.fr/",
    name: "TCA Web",
    description:
      "L'Agence TCA Web est spécialisée dans la création de sites internet, e-commerce et le marketing digital à Sens.",
    url: "https://tcaweb.fr",
    logo: "https://tcaweb.fr/_static/images/logo-blue.png",
    priceRange: "€€",
    telephone: "+33642871966",
    openingHours: "Mo-Fr 09:00-18:00",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33642871966",
      contactType: "customer service",
      areaServed: "FR",
      availableLanguage: "fr",
      email: "thomas@tcaweb.fr",
    },
    service: [
      {
        "@type": "Service",
        serviceType: "Web design & Development",
        name: "Création de sites internet",
        description:
          "Conception des maquettes, développement et suivi post-lancement de votre site internet.",
      },
      {
        "@type": "Service",
        serviceType: "E-commerce",
        name: "Création de boutique en ligne",
        description:
          "Conception et développement de votre boutique en ligne, gestion des stocks et des commandes.",
      },
      {
        "@type": "Service",
        name: "SEO & Référencement web",
        description:
          "Optimisation de votre site internet pour que vous apparaissez en 1ère page de Google.",
      },
    ],
  };

  return (
    <html lang="fr" className="scroll-smooth">
      <PostHogProvider>
        <body
          className={`text-primary font-sans antialiased ${sans.variable} ${heading.variable} ${GeistMono.variable}`}
        >
          <Header />

          {children}

          <Analytics />

          <Footer />

          <script
            // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            type="application/ld+json"
          />
        </body>
      </PostHogProvider>
    </html>
  );
}
