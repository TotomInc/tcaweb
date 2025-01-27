"use client";

import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Drawer } from "vaul";

import { Logo } from "@/components/ui/Logo";

const links = [{ href: "/contact", label: "Contact" }];

export function Header() {
  const headerRef = useRef<HTMLHeadElement | null>(null);

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <header
        ref={headerRef}
        className={twMerge(
          "fixed inset-x-0 top-0 z-10 flex h-16 items-stretch bg-white transition duration-150 ease-out",
          hasScrolled ? "bg-white/100" : "border-transparent bg-white/0",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          <Link href="/" title="Accueil" onClick={() => setIsOpen(false)}>
            {hasScrolled ? <Logo variant="blue" /> : <Logo variant="white" />}
          </Link>

          <nav className="hidden space-x-4 sm:flex">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                title={label}
                className={twMerge(
                  "font-heading text-base font-medium hover:underline",
                  hasScrolled
                    ? "text-gray-900 hover:text-gray-800"
                    : "text-white hover:text-blue-200",
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Drawer.Trigger asChild>
            <button
              type="button"
              className="flex size-8 items-center justify-center rounded-md bg-white sm:hidden"
              title="Ouvrir le menu de navigation"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Bars3Icon className="text-primary h-auto w-4" />
            </button>
          </Drawer.Trigger>

          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 z-50 bg-gray-100/25 backdrop-blur-md" />

            <Drawer.Content className="border-default fixed right-0 bottom-0 left-0 z-50 h-fit rounded-t-xl border-t border-gray-200 bg-white p-4 outline-none">
              <div aria-hidden className="mb-6 flex w-full items-center justify-center">
                <span className="block h-1 w-24 rounded-full bg-gray-200" />
              </div>

              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  title={label}
                  className="font-heading text-primary text-base font-medium hover:underline"
                >
                  {label}
                </Link>
              ))}
            </Drawer.Content>
          </Drawer.Portal>
        </div>
      </header>
    </Drawer.Root>
  );
}
