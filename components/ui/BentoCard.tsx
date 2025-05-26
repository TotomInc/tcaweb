"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { GlowingEffect } from "@/components/ui/21st/GlowingEffect";
import { useIsDesktop } from "@/hooks/use-is-desktop";

interface Props {
  className?: string;
  children?: React.ReactNode;
  content?: {
    label?: React.ReactNode;
    title: string;
    description: string;
  };
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  hasGlowingEffect?: boolean;
}

export function BentoCard({ className, children, content, image, hasGlowingEffect = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  const [imageLoaded, setImageLoaded] = useState(false);

  const isInView = useInView(ref, { once: true, amount: 0.75 });

  const isDesktop = useIsDesktop();

  return (
    <div
      ref={ref}
      className="relative flex items-stretch rounded-2xl border border-gray-200 shadow-xl shadow-gray-900/5"
    >
      {hasGlowingEffect && isDesktop ? (
        <GlowingEffect
          glow
          blur={4}
          borderWidth={3}
          spread={64}
          disabled={false}
          proximity={64}
          inactiveZone={0.1}
        />
      ) : null}

      <div
        className={twMerge(
          "relative flex w-full flex-col flex-nowrap gap-8 overflow-hidden rounded-[14px] bg-white p-8 pb-0 transition-all duration-300 ease-out",
          image && "justify-between",
          className,
        )}
      >
        {content ? (
          <div className="relative flex h-fit flex-col gap-2.5">
            {content.label}

            <h3 className="font-heading text-xl font-medium tracking-tight text-balance">
              {content.title}
            </h3>

            <p className="text-secondary text-base/relaxed text-balance">{content.description}</p>
          </div>
        ) : null}

        {children}

        {image ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={imageLoaded && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={90}
                className={twMerge(
                  "relative mx-auto mt-auto block h-auto w-full max-w-sm",
                  image.className,
                )}
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>
          </AnimatePresence>
        ) : null}
      </div>
    </div>
  );
}
