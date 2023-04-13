"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import cx from "classnames";

import { Logo } from "../ui/Logo";

const links = [
  { href: "/", label: "Accueil" },
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
        "fixed left-0 right-0 top-0 z-50 bg-white px-8 py-6 ",
        hasScrolled || isOpen ? "bg-opacity-100" : "bg-opacity-0"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex">
          <Logo
            textColorVariant={hasScrolled || isOpen ? "blue-gradient" : "white"}
          />
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
          "absolute left-0 right-0 top-0 mt-16 flex flex-col space-y-2 border-b border-b-gray-200 bg-white px-8 py-4 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        {links.map(({ href, label }) => (
          <Link
            key={`mobile-${href}`}
            href={href}
            className={cx(
              "font-spline text-base font-medium text-blue-950 ease-out"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
