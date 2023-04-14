import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import cx from "classnames";

import {
  AnimatedStarsIcon,
  styles as animatedStarsIconStyles,
} from "../icons/AnimatedStarsIcon";

const checks = [
  "Estimation gratuite en ligne en 5 min.",
  "Premier contact facile (email, téléphone)",
];

export function Hero() {
  return (
    <main className="relative mb-12 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <div className="relative mx-auto max-w-7xl pb-32 pt-24 lg:pb-56 lg:pt-32">
        <div className="flex flex-col items-start px-8 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
          <h1 className="font-spline text-3xl font-bold text-white lg:text-5xl 2xl:text-6xl">
            <Balancer>
              <span className="bg-gradient-to-br from-blue-50 via-amber-300 to-red-400 bg-clip-text font-heading font-bold text-transparent">
                Le Labo Web
              </span>
              , l&apos;agence web pensée pour les petites entreprises.
            </Balancer>
          </h1>

          <p className="mt-8 text-lg text-white lg:text-xl">
            <Balancer>
              Confiez votre présence digitale à un{" "}
              <span className="font-medium">professionnel</span>. Votre solution
              tout-en-un afin de maitriser la{" "}
              <span className="font-medium">présence numérique</span> de votre
              entreprise.
            </Balancer>
          </p>

          <Link
            href="/contact"
            className={cx(
              "group mt-6 inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-spline font-medium transition-shadow duration-300 ease-out hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-800",
              animatedStarsIconStyles["button-hover-animate-stars"]
            )}
          >
            <span className="flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Estimer mon devis en ligne{" "}
              <AnimatedStarsIcon className="ml-2 h-auto w-6 text-blue-700" />
            </span>
          </Link>

          <div className="my-6 flex flex-col space-y-2">
            {checks.map((check) => (
              <div className="flex items-center justify-start">
                <CheckBadgeIcon className="mr-1.5 h-auto w-5 fill-blue-600 text-blue-200" />
                <p className="text-sm font-medium text-blue-100">{check}</p>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/_static/images/landing-mockup.png"
          alt=""
          width={384}
          height={328}
          className="absolute bottom-0 right-0 z-10 -mb-8 mr-4 block h-auto w-48 sm:w-72 md:w-full md:max-w-md lg:max-w-2xl 2xl:max-w-3xl"
        />
      </div>

      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="left-O absolute bottom-0 right-0 -mb-px -scale-100"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          className="shape-fill"
          fill="#FFFFFF"
          fillOpacity="1"
        />
      </svg>
    </main>
  );
}
