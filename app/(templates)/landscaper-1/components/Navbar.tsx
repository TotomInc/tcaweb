"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Bars3Icon, PhoneIcon } from "@heroicons/react/20/solid";

import { Logo } from "./Logo";

const PHONE = "+33 6 12 23 34 45";
const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "#prestations", label: "Prestations" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="flex items-center justify-between text-base font-bold">
      {label}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="size-5">
        <defs />
        <path d="M511.986 165.404C511.986 293.264 441.934 400.756 336.693 435.559C316.651 443.497 294.874 448.002 272.008 448.002H271.994V448.029C203.725 448.029 144.664 409.081 115.478 352.253C158.107 310.137 224.875 272.017 327.992 272.017C341.242 272.017 351.992 261.266 351.992 248.015S341.242 224.014 327.992 224.014C222.177 224.014 149.088 260.227 98.975 303.55C97.117 293.303 96 282.799 96 272.017C96 174.807 174.796 96.005 271.994 96.005V95.731C285.838 95.731 299.292 97.325 312.188 100.396C368.186 113.721 430.428 92.985 461.513 39.157C467.177 29.328 481.53 29.641 486.169 39.985C502.657 76.761 511.986 121.897 511.986 165.404Z" className="fill-green-700 opacity-40" />
        <path d="M24.016 480C21.954 480 19.829 479.719 17.704 479.156C4.954 475.687 -2.608 462.561 0.829 449.779C1.454 447.529 64.671 224.014 328.006 224.014C341.256 224.014 352.005 234.764 352.005 248.015S341.256 272.017 328.006 272.017C102.232 272.017 49.328 454.561 47.172 462.343C44.234 473 34.578 480 24.016 480Z" className="fill-green-950" />
      </svg>
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
      <header className="flex h-16 w-full bg-white">
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
              <span className="hidden text-base font-bold hover:underline sm:flex">{PHONE}</span>
              <PhoneIcon className="size-6" />
            </Link>
          </div>
        </div>
      </header>

      <div
        className={twMerge(
          "fixed top-16 bottom-0 w-screen bg-white transition-all duration-300 ease-out sm:hidden",
          !isOpen ? "-translate-x-full pointer-events-none" : "translate-x-0",
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
