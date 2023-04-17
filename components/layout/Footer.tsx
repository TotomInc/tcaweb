import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

import { Logo } from "../ui/Logo";

const CONTACT_LINKS = [
  {
    label: "thomas@lelaboweb.fr",
    href: "mailto:thomas@lelaboweb.fr",
    icon: EnvelopeIcon,
  },
];

export function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-blue-900 to-blue-800 px-8 py-8">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex">
            <Logo textColorVariant="white" />
          </Link>

          <p className="mt-2 max-w-lg text-sm font-medium text-blue-200">
            <Balancer>
              <span className="bg-gradient-to-br from-blue-50 via-amber-200 to-red-300 bg-clip-text font-heading font-bold text-transparent">
                LeLaboWeb
              </span>
              , l&apos;agence web pensée sur-mesure pour les petites & moyennes
              entreprises.
            </Balancer>
          </p>

          <ul className="mt-6">
            {CONTACT_LINKS.map((link) => (
              <li
                key={link.href}
                className="flex items-center text-sm font-medium text-blue-50"
              >
                <link.icon className="mr-1.5 h-auto w-5 text-blue-200" />

                <Link href={link.href} className="underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      <div className="bg-blue-950 px-8 py-4">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs text-blue-200/75">
            Copyright © 2023-Present —{" "}
            <span className="font-heading text-sm font-bold">LeLaboWeb</span>
          </p>
        </div>
      </div>
    </>
  );
}
