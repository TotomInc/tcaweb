"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import cx from "classnames";

import { Logo } from "../ui/Logo";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent px-8 py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex">
          <Logo />
        </Link>

        <nav className="hidden space-x-4 lg:flex">
          {links.map(({ href, label }) => (
            <Link
              key={`desktop-${href}`}
              href={href}
              className="font-spline text-base font-medium text-blue-950"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-8 w-8 items-center justify-center rounded-md bg-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3Icon className="h-auto w-6 text-black" />
        </button>
      </div>

      <nav
        className={cx(
          "absolute left-0 right-0 top-0 mt-16 flex flex-col space-y-2 border-b border-b-gray-200 px-8 py-4 transition duration-300 ease-out lg:hidden",
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        {links.map(({ href, label }, index) => (
          <Link
            key={`mobile-${href}`}
            href={href}
            className={cx(
              "font-spline text-base font-medium text-blue-950 transition-all duration-150 ease-out",
              isOpen ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
            )}
            style={
              {
                "--i": index + 1,
                transitionDelay: "calc(0.175s + 0.055s * var(--i))",
              } as React.CSSProperties
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
