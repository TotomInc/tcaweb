"use client";

import type { Container, Engine, ISourceOptions } from "@tsparticles/engine";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "motion/react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

async function initParticlesEngine(engine: Engine) {
  await loadSlim(engine);
}

function createSparklesOptions({
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: Pick<
  Props,
  "background" | "minSize" | "maxSize" | "speed" | "particleColor" | "particleDensity"
>): ISourceOptions {
  return {
    background: { color: { value: background || "#0d47a1" } },
    fullScreen: { enable: false, zIndex: 1 },
    fpsLimit: 144,
    detectRetina: true,
    interactivity: { events: { resize: { delay: 0, enable: true } } },
    particles: {
      move: {
        enable: true,
        speed: { min: 0.1, max: 1 },
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        value: particleDensity || 120,
        density: { enable: true, width: 400, height: 400 },
      },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
          enable: true,
          speed: speed || 4,
          sync: false,
          mode: "auto",
          startValue: "random",
        },
      },
      shape: { type: "circle" },
      size: {
        value: { min: minSize || 1, max: maxSize || 3 },
      },
      paint: {
        fill: {
          enable: true,
          color: { value: particleColor || "#ffffff" },
        },
        stroke: {
          width: 0,
        },
      },
    },
  };
}

function SparklesParticlesCanvas({
  id,
  className,
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: Props) {
  const controls = useAnimation();
  const generatedId = useId();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      await controls.start({ opacity: 1, transition: { duration: 1 } });
    }
  };

  return (
    <motion.div animate={controls} className={twMerge("opacity-0", className)}>
      <Particles
        className={twMerge("h-full w-full")}
        id={id || generatedId}
        particlesLoaded={particlesLoaded}
        options={createSparklesOptions({
          background,
          minSize,
          maxSize,
          speed,
          particleColor,
          particleDensity,
        })}
      />
    </motion.div>
  );
}

export function SparklesParticles(props: Props) {
  return (
    <ParticlesProvider init={initParticlesEngine}>
      <SparklesParticlesCanvas {...props} />
    </ParticlesProvider>
  );
}
