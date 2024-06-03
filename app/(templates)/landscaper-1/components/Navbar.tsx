"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Bars3Icon, PhoneIcon } from "@heroicons/react/20/solid";

import { Logo } from "./Logo";
import { LeafIcon } from "./icons/LeafIcon";

const PHONE = "+33 6 12 23 34 45";
const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "#prestations", label: "Prestations" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between text-base font-bold"
    >
      {label}
      <LeafIcon />
    </Link>
  );
}

function DesktopLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-base font-medium hover:underline">
      {label}
    </Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-10 flex h-16 w-full bg-white">
        <div className="container mx-auto flex size-full items-center justify-between px-4">
          <button
            type="button"
            className="relative flex items-center justify-center p-2 sm:hidden"
            aria-label={!isOpen ? "Ouvrir le menu" : "Fermer le menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bars3Icon className="size-6" />
          </button>

          <Logo />

          <div className="flex items-center gap-6">
            <ul className="hidden gap-4 sm:flex">
              {LINKS.map(({ href, label }) => (
                <li key={href}>
                  <DesktopLink href={href} label={label} />
                </li>
              ))}
            </ul>

            <Link
              href={`tel:${PHONE}`}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-2 p-2 sm:p-0"
            >
              <span className="hidden text-base font-bold hover:underline sm:flex">
                {PHONE}
              </span>
              <PhoneIcon className="size-6" />
            </Link>
          </div>
        </div>
      </header>

      <div
        className={twMerge(
          "fixed bottom-0 top-16 z-10 w-screen bg-white transition-all duration-300 ease-out sm:hidden",
          !isOpen ? "pointer-events-none -translate-x-full" : "translate-x-0",
        )}
      >
        <div className="container mx-auto flex flex-col gap-3 px-6 py-4 font-landscaper-1-heading">
          {LINKS.map(({ href, label }) => (
            <MobileLink key={href} href={href} label={label} />
          ))}
        </div>
      </div>
    </>
  );
}
