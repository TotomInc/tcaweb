"use client";

import {
  BookOpenIcon,
  ChevronDownIcon,
  CurrencyEuroIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  PaintBrushIcon,
  SparklesIcon,
  StarIcon,
  TrophyIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { motion, useInView } from "motion/react";
import { Accordion } from "radix-ui";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

import { Badge } from "@/components/ui/Badge";

export function WhyUs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const numbers = [
    { icon: TrophyIcon, value: "+10", label: "années d'expérience" },
    { icon: SparklesIcon, value: "4 domaines", label: "d'expertise" },
    { icon: UserIcon, value: "Interlocuteur", label: "unique" },
    { icon: StarIcon, value: "Spécialiste", label: "des PMEs" },
  ];

  const accordionItems = [
    {
      id: "budget",
      icon: CurrencyEuroIcon,
      name: "Optimisez votre budget",
      description:
        "Notre expertise vous permet de définir un budget réaliste et adapté pour votre projet web. Nous analysons vos besoins spécifiques et vous proposons des solutions qui respectent scrupuleusement vos contraintes financières, sans compromettre la qualité du résultat final.",
    },
    {
      id: "interlocuteur",
      icon: UserIcon,
      name: "Interlocteur unique",
      description:
        "Bénéficiez d'un interlocuteur unique pour l'ensemble de votre projet web. Cette approche simplifie considérablement la communication et vous permet de gagner un temps précieux. Vous aurez toujours la même personne qui connaît parfaitement votre dossier et vos objectifs.",
    },
    {
      id: "sur-mesure",
      icon: PaintBrushIcon,
      name: "Sites internet sur-mesure",
      description:
        "Parce que chaque entreprise possède son identité propre et ses objectifs spécifiques, notre approche sur-mesure garantit que votre présence en ligne reflète fidèlement les valeurs et l'essence de votre entreprise, tout en maximisant son impact auprès de votre clientèle cible.",
    },
    {
      id: "referencement",
      icon: MagnifyingGlassIcon,
      name: "Référencement web Google (SEO)",
      description:
        "Notre expertise en SEO nous permet d'optimiser méticuleusement votre site web pour le référencement naturel, améliorant ainsi significativement votre visibilité sur Google et les autres moteurs de recherche.",
    },
    {
      id: "service-local",
      icon: MapPinIcon,
      name: "Service local (89)",
      description:
        "Basé à proximité de Sens (89100) dans l'Yonne, nous nous engageons à accompagner les petites et moyennes entreprises dans leur développement numérique. Notre ancrage local nous permet de comprendre les spécificités du territoire et d'offrir un service personnalisé et réactif pour votre présence en ligne.",
    },
    {
      id: "maintenance",
      icon: WrenchScrewdriverIcon,
      name: "Maintenance et suivi",
      description:
        "Notre équipe prend en charge la maintenance complète et régulière de votre site web, gérant les mises à jour techniques, la sécurité et les optimisations nécessaires, vous permettant ainsi de vous consacrer pleinement à votre cœur de métier sans vous soucier des aspects techniques de votre présence en ligne.",
    },
    {
      id: "formation-support",
      icon: BookOpenIcon,
      name: "Formation et support",
      description:
        "Nous vous proposons une formation personnalisée afin de maîtriser parfaitement l'utilisation de votre site web, et restons à votre disposition pour vous apporter un support technique réactif et efficace à chaque fois que vous en avez besoin.",
    },
    {
      id: "transparence",
      icon: EyeIcon,
      name: "Transparence",
      description:
        "Nous nous engageons à maintenir une transparence totale tout au long de notre collaboration, en vous communiquant clairement chaque action entreprise et en vous proposant des tarifs détaillés sans frais cachés. Cette approche honnête et directe vous permet de suivre l'évolution de votre projet en toute confiance.",
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
            {accordionItems.map(({ id, icon: Icon, name, description }, i) => (
              <Accordion.Item key={id} value={id} className="group flex w-full flex-col">
                <Accordion.Trigger
                  className={twMerge(
                    "font-heading flex w-full cursor-pointer items-center justify-between p-4 text-lg font-medium tracking-tight",
                    i > 0 && "border-t border-gray-200",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-7 text-blue-700" />
                    {name}
                  </div>
                  <ChevronDownIcon className="size-5 transition-transform duration-300 ease-out group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>

                <Accordion.Content className="data-[state=closed]:animate-accordion-slide-up data-[state=open]:animate-accordion-slide-down overflow-hidden">
                  <div className="border-t border-gray-200 px-4 py-5">
                    <p className="text-secondary text-base">{description}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
