"use client";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { Logo } from "@/components/ui/Logo";

export function Header() {
  const headerRef = useRef<HTMLHeadElement | null>(null);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current?.clientHeight ?? 64;
      setHasScrolled(window.scrollY > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={twMerge(
        "fixed inset-x-0 top-0 z-10 flex h-16 items-stretch bg-white transition duration-150 ease-out",
        hasScrolled ? "bg-white/75 backdrop-blur-lg" : "border-transparent bg-white/0",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" title="Accueil">
          {hasScrolled ? <Logo variant="blue" /> : <Logo variant="white" />}
        </Link>

        <nav>
          <Link
            href="#contact"
            title="Contact"
            className="group flex items-center justify-center gap-1.5 rounded-sm bg-blue-600 px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-md ring inset-shadow-sm inset-ring ring-blue-600 inset-shadow-white/30 inset-ring-white/25 transition-colors duration-150 ease-out hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
          >
            Contactez-nous{" "}
            <ArrowRightCircleIcon className="size-5 transition-transform duration-300 ease-out group-hover:rotate-90" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
