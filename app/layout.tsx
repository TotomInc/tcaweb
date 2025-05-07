import "./tailwind.css";

import { Analytics } from "@vercel/analytics/next";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Inter, Spline_Sans } from "next/font/google";

import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "TCA Web | L'Agence Web des PME",
  description:
    "TCA Web est une agence web spécialisée dans la création de sites internet pour les PMEs.",
};

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const heading = Spline_Sans({ subsets: ["latin"], variable: "--font-heading" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`text-primary font-sans antialiased ${sans.variable} ${heading.variable} ${GeistMono.variable}`}
      >
        <Header />

        {children}

        <Analytics />

        <Footer />
      </body>
    </html>
  );
}
