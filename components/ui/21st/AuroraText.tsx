"use client";

import type { MotionProps } from "motion/react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

type Props = Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> & {
  className?: string;
  children: React.ReactNode;
};

export function AuroraText({ className, children, ...props }: Props) {
  return (
    <motion.span className={twMerge("relative inline-flex overflow-hidden", className)} {...props}>
      {children}

      <span aria-hidden className="pointer-events-none absolute inset-0 mix-blend-lighten">
        <span className="pointer-events-none absolute -top-1/2 size-[35vw] animate-aurora-1 bg-aurora-1 mix-blend-overlay blur-lg lg:size-[30vw]" />

        <span className="pointer-events-none absolute top-0 right-0 size-[35vw] animate-aurora-2 bg-aurora-2 mix-blend-overlay blur-lg lg:size-[30vw]" />

        <span className="pointer-events-none absolute bottom-0 left-0 size-[35vw] animate-aurora-3 bg-aurora-3 mix-blend-overlay blur-lg lg:size-[30vw]" />

        <span className="pointer-events-none absolute right-0 -bottom-1/2 size-[35vw] animate-aurora-4 bg-aurora-4 mix-blend-overlay blur-lg lg:size-[30vw]" />
      </span>
    </motion.span>
  );
}
