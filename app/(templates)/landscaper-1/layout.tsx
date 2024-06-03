import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";

import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Paysagiste 1 | Accueil",
  description: "",
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
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
      lang="fr"
      className={`scroll-smooth font-landscaper-1 antialiased ${dmSans.variable} ${inter.variable}`}
    >
      <body className="relative min-h-screen bg-white text-neutral-900">
        <Navbar />

        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
