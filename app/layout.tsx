import "./globals.css";

import { Inter, Spline_Sans, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://lelaboweb.fr"),
  title: "LeLaboWeb — l'agence web des petites entreprises",
  description:
    "LeLaboWeb est une agence web spécialisée dans le développement numérique de votre activité. Estimez votre projet en ligne gratuitement, en 5 minutes et sans engagement.",
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
      </body>
    </html>
  );
}
