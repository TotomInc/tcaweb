"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import cx from "classnames";

import { Logo } from "../ui/Logo";

const links = [
  { href: "/sites-internet", label: "Création de site" },
  { href: "/sites-ecommerces", label: "Création de site e-commerce" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setHasScrolled(offset > 40);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cx(
        "fixed left-0 right-0 top-0 z-50 border-b bg-white py-5 transition duration-300 ease-out",
        hasScrolled || isOpen
          ? "border-gray-200 bg-opacity-100"
          : "border-transparent bg-opacity-0",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <Link
          href="/"
          title="Retour vers l'accueil"
          className="flex"
          onClick={() => setIsOpen(false)}
        >
          <Logo
            variant="white"
            className={hasScrolled ? "hidden" : undefined}
          />

          <Logo
            variant="blue"
            className={!hasScrolled ? "hidden" : undefined}
          />
        </Link>

        <nav className="hidden space-x-4 lg:flex">
          {links.map(({ href, label }) => (
            <Link
              key={`desktop-${href}`}
              href={href}
              title={label}
              className={cx(
                "font-spline text-base font-medium hover:underline",
                hasScrolled
                  ? "text-gray-900 hover:text-gray-800"
                  : "text-white hover:text-blue-200",
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-md bg-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          title="Ouvrir le menu de navigation"
        >
          {!isOpen ? (
            <Bars3Icon className="h-auto w-6 text-black" />
          ) : (
            <XMarkIcon className="h-auto w-6 text-black" />
          )}
        </button>
      </div>

      <nav
        className={cx(
          "absolute left-0 right-0 top-0 flex flex-col space-y-2 border-b border-b-gray-200 bg-white px-8 py-4 transition duration-300 ease-out lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        style={{ marginTop: "calc(4.5rem + 1px)" }}
      >
        {links.map(({ href, label }) => (
          <Link
            key={`mobile-${href}`}
            href={href}
            title={label}
            className={cx(
              "font-spline text-base font-medium text-gray-900 ease-out",
            )}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
