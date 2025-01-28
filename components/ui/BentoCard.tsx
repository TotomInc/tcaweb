"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children?: React.ReactNode;
  label?: React.ReactNode;
  title: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  gradientSide?: "left" | "right";
}

export function BentoCard({
  className,
  children,
  label,
  title,
  description,
  image,
  gradientSide,
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className={twMerge(
        "relative flex w-full flex-col flex-nowrap gap-8 overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 pb-0 shadow-xl shadow-gray-900/5 transition-all duration-300 ease-out hover:border-gray-300/75 hover:shadow-gray-900/10",
        className,
      )}
    >
      {gradientSide ? (
        <span
          className={twMerge(
            "pointer-events-none absolute inset-0 from-blue-400/10 to-white to-90%",
            gradientSide === "left" && "bg-radial-[at_1%_99%]",
            gradientSide === "right" && "bg-radial-[at_99%_1%]",
          )}
        />
      ) : null}

      <div className="relative flex h-fit flex-col gap-2.5">
        {label}

        <h3 className="font-heading text-xl font-medium tracking-tight">{title}</h3>

        <p className="text-secondary text-base/relaxed text-balance">{description}</p>
      </div>

      {image ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={imageLoaded && isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
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

      {children}
    </div>
  );
}
