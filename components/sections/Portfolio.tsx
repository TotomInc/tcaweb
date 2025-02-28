"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

import { BentoCard } from "@/components/ui/BentoCard";
import { Section } from "@/components/ui/Section";

export function Portfolio() {
  const items = [
    {
      companyName: "Inyda",
      description: "Inyda, entreprise spécialisée dans la Data Science.",
      tags: ["CMS", "Blog", "Multi-langue"],
      image: {
        src: "/_static/images/portfolio/inyda.png",
        width: 2048,
        height: 1148,
      },
    },
    {
      companyName: "H.G.M. France",
      description: "H.G.M. France, entreprise spécialisée dans le domaine de la machinerie.",
      tags: ["CMS", "Devis en ligne", "Catalogue"],
      image: {
        src: "/_static/images/portfolio/hgmfrance.png",
        width: 2046,
        height: 1454,
      },
    },
    {
      companyName: "Delta",
      description: "Delta, marque de vêtements urban streetwear.",
      tags: ["E-commerce", "Shopify", "Blog"],
      image: {
        src: "/_static/images/portfolio/delta.png",
        width: 2126,
        height: 1368,
      },
    },
  ];

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section.Root>
      <Section.Heading
        badge="Portfolio"
        label="Nos clients nous recommandent."
        description="Découvrez notre portfolio de clients satisfaits par les services de notre agence."
      />

      <div ref={ref} className="grid gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <BentoCard
            key={item.companyName}
            image={{
              src: item.image.src,
              alt: item.companyName,
              height: item.image.height,
              width: item.image.width,
              className: "relative mx-auto mt-auto block max-w-sm h-[164px] w-auto object-contain",
            }}
          >
            <div className="relative flex h-fit flex-col gap-2.5">
              <h3 className="font-heading text-xl font-medium tracking-tight">
                {item.companyName}
              </h3>

              <p className="text-secondary text-base/relaxed text-balance">{item.description}</p>

              <ul className="flex flex-wrap items-center gap-2.5">
                {item.tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    className="block w-fit rounded-full bg-gradient-to-b from-gray-300 to-gray-200 px-3 py-1.5 font-mono text-sm font-semibold tracking-tight inset-shadow-sm inset-shadow-gray-900/20"
                    transition={{
                      duration: 0.5,
                      delay: i * 0.25 + 0.5,
                      ease: "easeOut",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </ul>
            </div>
          </BentoCard>
        ))}
      </div>
    </Section.Root>
  );
}
