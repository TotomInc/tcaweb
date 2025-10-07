"use client";

import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { AuroraBackground } from "@/components/ui/21st/AuroraBackground";
import { AuroraText } from "@/components/ui/21st/AuroraText";
import { HeroCta } from "@/components/ui/HeroCta";
import { WavesSeparator } from "@/components/ui/WavesSeparator";

interface Props {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  items?: string[];
}

export function Hero({ className, title, description, items }: Props) {
  const defaultItems = items?.length
    ? items
    : [
        "Spécialiste des petites entreprises",
        "+10 années d'expérience dans le web",
        "Moins cher qu'une agence web traditionnelle",
      ];

  const moveToSection = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={twMerge(
        "relative bg-linear-to-br from-blue-900 via-blue-700 to-blue-500 text-blue-50",
        className,
      )}
    >
      <AuroraBackground />

      <div className="relative mx-auto max-w-7xl pt-24 pb-48 xl:pt-32 xl:pb-56">
        <div className="flex flex-col items-start gap-6 px-6 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:gap-8">
          <motion.h1
            className="font-heading text-3xl font-bold lg:text-5xl 2xl:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title || (
              <>
                Développez votre{" "}
                <AuroraText
                  as="span"
                  className="text-primary rotate-[-2deg] rounded-lg bg-white px-3 py-2 shadow-xl"
                >
                  présence digitale
                </AuroraText>
              </>
            )}
          </motion.h1>

          <motion.p
            className="text-base text-balance lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description || (
              <>
                <span className="font-heading font-bold">TCA Web</span>, votre agence web
                spécialiste <span className="font-heading font-bold">des PME</span>. Des sites web
                de qualité professionnelle, qui vous démarquent de la concurrence à{" "}
                <span className="font-heading font-bold">un prix abordable</span>.
              </>
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <HeroCta
              initialDelay={0.4}
              data-fast-goal="hero-cta-contact"
              onClick={() => moveToSection("contact")}
            >
              Un projet ?
            </HeroCta>
          </motion.div>

          <motion.ul
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {defaultItems.map((item, index) => (
              <motion.li
                key={item}
                className="flex gap-1.5 leading-6 font-medium sm:text-sm lg:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <CheckBadgeIcon className="size-6 shrink-0 fill-blue-600 text-blue-200" /> {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Image
          priority
          src="/_static/images/hero/hero-mobile.png"
          alt="Site web réalisé pour nos clients"
          width={2048}
          height={1598}
          className="pointer-events-none absolute bottom-0 left-1/2 z-1 -mb-10 block h-auto w-68 translate-x-[-50%] sm:hidden"
          quality={90}
        />

        <Image
          priority
          src="/_static/images/hero/hero-desktop.png"
          alt="Site web réalisé pour nos clients"
          width={2396}
          height={1925}
          className="pointer-events-none absolute right-0 bottom-0 z-1 hidden h-auto sm:block sm:w-80 md:w-full md:max-w-md lg:block lg:max-w-xl xl:max-w-2xl"
          quality={90}
        />
      </div>

      <WavesSeparator />
    </section>
  );
}
