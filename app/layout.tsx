import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === "production"
      ? new URL("https://tcaweb.fr")
      : new URL("http://localhost:3000"),
  title: "Agence web création site internet et e-commerce | TCA Web",
  description:
    "TCA Web, l'agence web qui vous accompagne dans votre stratégie web et e-commerce, création ou refonte de site Internet, design et maquettes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
