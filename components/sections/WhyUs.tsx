"use client";

import {
  ChevronDownIcon,
  SparklesIcon,
  StarIcon,
  TrophyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { motion, useInView } from "motion/react";
import { Accordion } from "radix-ui";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

import { Badge } from "@/components/ui/Badge";

export function WhyUs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const numbers = [
    { icon: TrophyIcon, value: "+10", label: "années d'expérience" },
    { icon: SparklesIcon, value: "4 domaines", label: "d'expertise" },
    { icon: UserIcon, value: "Interlocuteur", label: "unique" },
    { icon: StarIcon, value: "Spécialiste", label: "des PMEs" },
  ];

  const accordionItems = [
    {
      id: "budget",
      name: "Optimisez votre budget",
      description:
        "Nous vous aidons à définir un budget réaliste pour votre projet web tout en respectant vos contraintes.",
    },
    {
      id: "interlocuteur",
      name: "Interlocteur unique",
      description:
        "Un seul interlocuteur pour votre projet web, c'est plus simple et plus efficace pour vous.",
    },
    {
      id: "sur-mesure",
      name: "Sites internet sur-mesure",
      description:
        "Parce que chaque entreprise est unique, nous créeons des sites web sur-mesure pour répondre à vos besoins et qui mettent en valeur votre entreprise.",
    },
    {
      id: "referencement",
      name: "Référencement web Google",
      description:
        "Nous optimisons votre site web pour le référencement naturel afin d'augmenter votre visibilité sur Google et autres moteurs de recherche.",
    },
    {
      id: "service-local",
      name: "Service local (89)",
      description:
        "Basé près de Sens (89100), nous aidons les PMEs locales à se développer sur internet.",
    },
    {
      id: "maintenance",
      name: "Maintenance et suivi",
      description:
        "Nous assurons la maintenance de votre site web pour vous permettre de vous concentrer sur votre activité.",
    },
    {
      id: "formation-support",
      name: "Formation et support",
      description:
        "Nous vous formons à l'utilisation de votre site web et vous apportons un support technique en cas de besoin.",
    },
  ];

  return (
    <section className="relative text-black">
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-16">
        <div className="mx-auto mb-16 flex max-w-lg flex-col items-center">
          <Badge>Spécialiste</Badge>

          <h2 className="font-heading text-primary text-center text-3xl font-semibold tracking-tight text-balance">
            Pourquoi confier votre projet web à TCA Web ?
          </h2>
        </div>

        <div ref={ref} className="flex flex-col items-start gap-8 sm:flex-row">
          <ul className="grid w-full grid-cols-1 gap-6 rounded-lg bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 p-8 text-blue-50 shadow-lg sm:w-1/2 lg:w-1/3">
            {numbers.map(({ icon: Icon, label, value }, index) => (
              <motion.li
                key={label}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-white to-blue-100 shadow-lg">
                  <Icon className="size-8 text-blue-800" />
                </span>

                <p aria-label={`${value} ${label}`} className="flex flex-col text-blue-50">
                  <span className="font-heading text-2xl font-bold">{value}</span>
                  <span className="text-lg font-medium">{label}</span>
                </p>
              </motion.li>
            ))}
          </ul>

          <Accordion.Root
            collapsible
            type="single"
            className="w-full rounded-lg border border-gray-200 bg-white shadow-xl shadow-gray-900/5 sm:w-1/2 lg:w-2/3"
          >
            {accordionItems.map(({ id, name, description }, i) => (
              <Accordion.Item key={id} value={id} className="group flex w-full flex-col">
                <Accordion.Trigger
                  className={twMerge(
                    "font-heading flex w-full cursor-pointer items-center justify-between p-4 text-lg font-medium tracking-tight",
                    i > 0 && "border-t border-gray-200",
                  )}
                >
                  {name}
                  <ChevronDownIcon className="size-5 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>

                <Accordion.Content className="border-t border-gray-200 px-4 py-5">
                  <p className="text-secondary text-base">{description}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
