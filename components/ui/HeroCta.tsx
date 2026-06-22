"use client";

import { ArrowRightIcon, EnvelopeOpenIcon } from "@heroicons/react/20/solid";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  initialDelay: number;
};

export function HeroCta({ children, className, initialDelay, ...props }: Props) {
  return (
    <button
      type="button"
      className={twMerge(
        "group relative flex cursor-pointer items-center gap-2.5 rounded-full border border-blue-700 bg-white px-7 py-3 font-heading text-base font-semibold tracking-tight text-primary shadow-md inset-shadow-sm inset-shadow-blue-800/60 transition-all duration-150 ease-out hover:ring-2 hover:ring-blue-500/75 focus:ring-2 focus:ring-blue-600/75 focus:outline-none",
        className,
      )}
      {...props}
    >
      <motion.span
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -16 }}
        transition={{ duration: 0.3, delay: initialDelay + 0.2 }}
      >
        {children}
      </motion.span>

      <motion.span
        aria-hidden
        animate={{ opacity: 1, x: 0 }}
        className="relative size-5"
        initial={{ opacity: 0, x: 16 }}
        transition={{ duration: 0.3, delay: initialDelay + 0.2 }}
      >
        <ArrowRightIcon className="absolute size-5 duration-150 ease-out group-hover:translate-x-1 group-hover:opacity-0" />
        <EnvelopeOpenIcon className="absolute size-5 -translate-x-1 opacity-0 duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:delay-150" />
      </motion.span>
    </button>
  );
}
