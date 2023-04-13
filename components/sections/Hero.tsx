import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import cx from "classnames";

import {
  AnimatedStarsIcon,
  styles as animatedStarsIconStyles,
} from "../icons/AnimatedStarsIcon";

export function Hero() {
  return (
    <main className="relative">
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 pb-[calc(100vw/1.5)] pt-28">
        <div className="flex flex-col items-start px-8">
          <h1 className="font-spline text-3xl font-bold text-white">
            <Balancer>
              Une agence web pensée pour les petites entreprises.
            </Balancer>
          </h1>

          <p className="mt-8 text-lg text-white">
            <Balancer>
              Une solution tout-en-un afin de concevoir la présence numérique de
              votre entreprise, adaptée à votre activité.
            </Balancer>
          </p>

          <Link
            href="/contact"
            className={cx(
              "group mt-12 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-spline font-medium",
              animatedStarsIconStyles["button-hover-animate-stars"]
            )}
          >
            <span className="flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Estimer mon devis en ligne{" "}
              <AnimatedStarsIcon className="ml-2 h-auto w-6 text-blue-700" />
            </span>
          </Link>

          <Image
            src="/_static/images/landing-mockup.png"
            alt=""
            width={384}
            height={328}
            className="absolute bottom-0 right-0 z-10 mb-[calc(100vw/4.5)] mr-4 block h-auto w-48"
          />
        </div>
      </div>

      <img
        src="/_static/images/landing-separator.svg"
        alt=""
        role="presentation"
        className="left-O absolute -bottom-px right-0 h-auto w-full -scale-x-100"
        aria-hidden
      />
    </main>
  );
}
