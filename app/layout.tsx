import "./globals.css";

import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import { Inter, Spline_Sans, Space_Grotesk } from "next/font/google";

import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { PostHogProvider } from "../components/posthog/PostHogProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://tcaweb.fr"),
  title: "Agence web création site internet et e-commerce | TCA Web",
  description:
    "TCA Web, l'agence web qui vous accompagne dans votre stratégie web et e-commerce, création ou refonte de site Internet, design et maquettes digitales.",
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

const PostHogPageView = dynamic(
  () => import("../components/posthog/PostHogPageview"),
  { ssr: false },
);

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
      <PostHogProvider>
        <body className="min-h-screen bg-white">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <PostHogPageView />
        </body>
      </PostHogProvider>
    </html>
  );
}
