import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Spline_Sans, Space_Grotesk } from "next/font/google";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://tcaweb.fr"),
  title: "Agence web création site internet et e-commerce | TCA Web",
  description:
    "TCA Web est une agence web qui vous accompagne dans votre stratégie web et e-commerce, création ou refonte de site Internet, design et maquettes digitales.",
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
        <Analytics />
      </body>
    </html>
  );
}
