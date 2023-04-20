import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import cx from "classnames";

import {
  AnimatedStarsIcon,
  styles as animatedStarsIconStyles,
} from "../icons/AnimatedStarsIcon";
import { ShapeDivider } from "../icons/ShapeDivider";

export type HeroProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  cta: { href: string; label: string };
  image?: {
    width: number;
    height: number;
    alt: string;
    src: string;
    className?: string;
  };
  checks: string[];
};

export function Hero({ title, description, cta, checks, image }: HeroProps) {
  return (
    <main className="relative mb-12 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <div className="relative mx-auto max-w-7xl pb-32 pt-24 lg:pb-56 lg:pt-32">
        <div className="flex flex-col items-start px-8 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <h1 className="font-spline text-3xl font-bold text-white lg:text-5xl 2xl:text-6xl">
            <Balancer>{title}</Balancer>
          </h1>

          <p className="mt-8 text-lg text-white lg:text-xl">
            <Balancer>{description}</Balancer>
          </p>

          <Link
            href={cta.href}
            className={cx(
              "group mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-spline font-medium transition-shadow duration-300 ease-out hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-800",
              animatedStarsIconStyles["button-hover-animate-stars"]
            )}
          >
            <span className="flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              {cta.label}{" "}
              <AnimatedStarsIcon className="ml-2 h-auto w-6 text-blue-700" />
            </span>
          </Link>

          <div className="my-6 flex flex-col space-y-2">
            {checks.map((check) => (
              <div key={check} className="flex items-center justify-start">
                <CheckBadgeIcon className="mr-1.5 h-auto w-5 shrink-0 fill-blue-600 text-blue-200" />
                <p className="text-sm font-medium text-blue-100">{check}</p>
              </div>
            ))}
          </div>
        </div>

        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className={cx(
              "absolute bottom-0 right-0 z-10 -mb-8 mr-4 block h-auto w-48 sm:w-72 md:w-full md:max-w-md lg:max-w-2xl 2xl:max-w-3xl",
              image.className
            )}
          />
        ) : null}
      </div>

      <ShapeDivider />
    </main>
  );
}
