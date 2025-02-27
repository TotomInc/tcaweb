import { AtSymbolIcon, ChevronRightIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { Logo } from "@/components/ui/Logo";

const LINKS = [{ label: "Accueil", href: "/" }];

export function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-8 bg-gradient-to-br from-blue-900 to-blue-950 py-8 text-blue-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 flex-col gap-8 px-6 lg:grid-cols-5">
          <div className="flex flex-col items-start gap-4 lg:col-span-2">
            <Logo variant="white" />

            <p className="text-sm font-medium text-balance text-blue-50">
              TCA Web est une agence web basée près de Sens{" "}
              <span className="text-blue-50/80">(89100)</span>, spécialisée dans la création de
              sites internet pour les PMEs.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <PhoneIcon className="size-4" />

                <a
                  href="tel:+33642871966"
                  className="cursor-pointer text-sm font-medium hover:underline"
                >
                  +33 6 42 87 19 66
                </a>
              </div>

              <div className="flex items-center gap-2">
                <AtSymbolIcon className="size-4" />

                <a
                  href="mailto:thomas@tcaweb.fr"
                  className="cursor-pointer text-sm font-medium hover:underline"
                >
                  thomas@tcaweb.fr
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h3 className="text-xl font-semibold text-blue-50">Navigation</h3>

            <ul className="flex flex-col gap-1.5">
              {LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-1.5 text-base font-medium hover:underline"
                  >
                    <ChevronRightIcon className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>

      <div className="bg-gray-900 py-4">
        <div className="mx-auto w-full max-w-7xl px-6">
          <p className="text-sm font-medium text-gray-400">
            © {new Date().getFullYear()} TCA Web. Tous droits réservés.
          </p>
        </div>
      </div>
    </>
  );
}
