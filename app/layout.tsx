import "./globals.css";

import type { Metadata } from "next";
import { Inter, Spline_Sans, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lelaboweb.fr"),
  title:
    "LeLaboWeb — l'agence web sur-mesure des petites & moyennes entreprises",
  description:
    "LeLaboWeb est une agence web spécialisée dans le développement numérique de votre activité. confiez votre projet web à un professionnel.",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const splineSans = Spline_Sans({
  variable: "--font-spline-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth font-sans antialiased ${inter.variable} ${splineSans.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-white">
        <Navbar />
        {children}
        <Footer />

        <Script
          src="https://hello.jsgarden.co/js/script.js"
          data-domain="lelaboweb.fr"
          defer
        />
      </body>
    </html>
  );
}
