"use client";

import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { SparklesParticles } from "@/components/ui/21st/SparklesParticles";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const headerRef = useRef<HTMLHeadElement | null>(null);

  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const headerHeight = headerRef.current?.clientHeight ?? 64;
    setHasScrolled(window.scrollY > headerHeight);
  }, [headerRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

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

        <nav className="flex items-center gap-6 lg:gap-8">
          <a
            href="https://cal.com/tcaweb/rdv-decouverte"
            className={twMerge(
              "hidden rounded-sm text-sm font-semibold tracking-tight text-white hover:underline lg:flex",
              hasScrolled ? "text-blue-700" : "text-white",
            )}
          >
            Réservez votre RDV
          </a>

          <Link
            className="group relative flex cursor-pointer items-center justify-center gap-1.5 rounded-sm bg-blue-600 px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-md ring inset-shadow-sm inset-ring ring-blue-600 inset-shadow-white/30 inset-ring-white/25 transition-colors duration-150 ease-out hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
            href="/devis-site-internet-gratuit"
          >
            Recevez votre devis
            <ArrowRightCircleIcon className="size-5 transition-transform duration-300 ease-out group-hover:rotate-90" />
            <SparklesParticles
              background="transparent"
              className="pointer-events-none absolute inset-0 h-full w-full"
              maxSize={1.25}
              minSize={0.75}
              particleColor="#9dbbfd"
              particleDensity={256}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
