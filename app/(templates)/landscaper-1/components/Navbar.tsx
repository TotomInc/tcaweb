"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Bars3Icon, PhoneIcon } from "@heroicons/react/20/solid";

import { Logo } from "./Logo";

const LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

function NavbarLink({ label, href }: { label: string; href: string }) {
  return (
    <Link href={href} className="w-full text-base font-semibold text-green-700 sm:w-auto">{label}</Link>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu overlay */}
      <span
        className={twMerge(
          "fixed inset-0 bg-black/50 transition-opacity duration-300 ease-out sm:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      />

      <header className="fixed inset-x-0 top-0 z-10 flex items-center bg-white">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <Logo />

          <div className="flex items-center gap-6">
            <ul className="hidden gap-4 sm:flex">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <NavbarLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>

            <a href="tel:+33612121212" className="flex items-center gap-2">
              <span className="font-landscaper-1-heading text-lg font-semibold text-gray-900">+33 6 12 12 12 12</span>
              <PhoneIcon className="size-5 text-gray-900" />
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="flex items-center justify-center rounded border border-gray-200 bg-white p-2 sm:hidden"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Bars3Icon className="size-5 text-gray-900" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={twMerge(
            "absolute inset-x-0 top-20 w-full bg-white transition-all duration-300 ease-out sm:hidden",
            isOpen && "opacity-100 translate-y-0",
            !isOpen && "opacity-0 -translate-y-3 pointer-events-none",
          )}
        >
          <ul className="flex flex-col gap-2 px-6 pb-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <NavbarLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
