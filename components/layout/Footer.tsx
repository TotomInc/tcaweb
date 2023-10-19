import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

import { Logo } from "../ui/Logo";

const CONTACT_LINKS = [
  {
    label: "thomas@tcaweb.fr",
    href: "mailto:thomas@tcaweb.fr",
    icon: EnvelopeIcon,
  },
];

export function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-br from-blue-900 to-blue-800 py-8">
        <div className="mx-auto max-w-7xl px-8">
          <Link href="/" className="inline-flex">
            <Logo textColorVariant="white" />
          </Link>

          <p className="mt-2 max-w-lg text-sm font-medium text-blue-200">
            <Balancer>
              <span className="bg-gradient-to-br from-blue-50 via-amber-200 to-red-300 bg-clip-text font-heading font-bold text-transparent">
                TCA Web
              </span>
              , l&apos;agence web qui vous accompagne dans votre stratégie web
              et e-commerce, création ou refonte de site Internet, design et
              maquettes digitales.
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

      <div className="bg-blue-950 py-4">
        <div className="mx-auto max-w-7xl px-8">
          <p className="text-xs text-blue-200/75">
            Copyright © {new Date().getFullYear()} —{" "}
            <span className="font-heading text-sm font-bold">TCA Web</span> —
            Tous droits réservés
          </p>
        </div>
      </div>
    </>
  );
}
