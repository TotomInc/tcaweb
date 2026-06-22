"use client";

import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";

import { AuroraBackground } from "@/components/ui/21st/AuroraBackground";
import { Badge } from "@/components/ui/Badge";
import { HeroCta } from "@/components/ui/HeroCta";
import { WavesSeparator } from "@/components/ui/WavesSeparator";

interface Props {
  badge?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  items: string[];
}

export function HeroCentered({ badge, title, description, items }: Props) {
  const moveToSection = (section: string) => {
    const sectionElement = document.getElementById(section);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-linear-to-br from-blue-900 via-blue-700 to-blue-500 text-blue-50">
      <AuroraBackground />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 pt-24 pb-32 lg:gap-12 xl:pt-32">
        {badge ? (
          <motion.span
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-0">{badge}</Badge>
          </motion.span>
        ) : null}

        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-fit text-center font-heading text-3xl font-bold lg:text-5xl 2xl:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl text-center text-lg text-balance lg:text-xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>

        <motion.ul
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {items.map((item, index) => (
            <motion.li
              key={item}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-1.5 text-center text-base leading-6 font-medium lg:text-lg"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
            >
              <CheckBadgeIcon className="size-6 shrink-0 fill-blue-600 text-blue-200" /> {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <HeroCta initialDelay={1} onClick={() => moveToSection("contact")}>
            Un projet ?
          </HeroCta>
        </motion.div>
      </div>

      <WavesSeparator />
    </section>
  );
}
