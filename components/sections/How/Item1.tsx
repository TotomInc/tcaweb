"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { motion, useAnimationControls, useInView } from "motion/react";
import { useEffect, useRef } from "react";

export function Item1() {
  const items = ["Formulaire de contact", "E-Commerce", "Multi-langue", "Blog & articles"];

  const ITEM_DURATION = 0.5;
  const ITEM_DELAY = 1;
  const TOTAL_DURATION = items.length * ITEM_DELAY;

  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.75 });
  const controls = useAnimationControls();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3, delay: 0 } },
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const animate = async () => {
      if (isInView) {
        await controls.start("visible");

        timeoutId = setTimeout(async () => {
          await controls.start("exit");

          timeoutId = setTimeout(async () => animate().catch(() => {}), 500);
        }, TOTAL_DURATION * 1000);
      }
    };

    animate().catch(() => {});

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isInView, controls, TOTAL_DURATION]);

  return (
    <div
      ref={ref}
      className="relative mx-auto flex max-h-[164px] w-full max-w-sm flex-col gap-2 overflow-y-hidden rounded-t-xl border border-b-0 border-gray-200 bg-gray-100 p-4"
    >
      {items.map((item, i) => (
        <motion.div
          key={item}
          animate={controls}
          className="flex items-center gap-2.5"
          initial="hidden"
          variants={itemVariants}
          transition={{
            duration: ITEM_DURATION,
            delay: i * ITEM_DELAY,
            ease: "easeOut",
          }}
        >
          <span className="flex size-5 items-center justify-center rounded-sm bg-gradient-to-br from-blue-700 to-blue-900 text-white">
            <CheckIcon className="size-4" />
          </span>

          <p className="bg-gradient-to-b from-blue-600 to-blue-900 bg-clip-text font-heading text-lg font-medium tracking-tight text-transparent">
            {item}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
