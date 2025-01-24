import "./tailwind.css";

import type { Metadata } from "next";
import { Inter, Spline_Sans } from "next/font/google";

import { Header } from "@/components/sections/Header";

export const metadata: Metadata = {
  title: "TCA Web | L'Agence Web des PME",
  description: "",
};

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const heading = Spline_Sans({ subsets: ["latin"], variable: "--font-heading" });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`text-primary font-sans antialiased ${sans.variable} ${heading.variable}`}>
        <Header />

        {children}
      </body>
    </html>
  );
}
