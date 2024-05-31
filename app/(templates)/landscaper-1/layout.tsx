import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";

import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "Paysagiste 1 | Accueil",
  description: "",
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`scroll-smooth font-landscaper-1 antialiased ${poppins.variable} ${nunito.variable}`}
    >
      <body className="min-h-screen bg-white">
        <Navbar />

        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
