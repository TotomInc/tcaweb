import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import cx from "classnames";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";

const ITEMS = [
  {
    name: "H.G.M. France",
    subtitle: "Fontainebleau, Île-de-France",
    content:
      "Réalisation du site web responsive de la société H.G.M. France, spécialisée dans le domaine de la machinerie. Intégration de formulaire, implémentation d'une solution d'analyse d'audience.",
    image: "/_static/images/portfolio/hgmfrance-mockup.png",
    link: "https://www.hgmfrance.fr",
  },
];

export type PortfolioProps = {
  className?: string;
};

export function Portfolio({ className }: PortfolioProps) {
  return (
    <section className={cx("relative w-full", className)}>
      <div className="mx-auto max-w-7xl px-8">
        <h2 className="text-3xl font-bold text-gray-950">
          Portfolio <span className="h-px w-12" />
        </h2>

        <p className="mt-8 text-base leading-snug text-gray-800">
          Découvrez nos réalisations et notre portfolio de clients satisfaits
          par nos services.
        </p>

        <div className="mt-12 flex flex-col items-center space-y-12">
          {ITEMS.map((item) => (
            <div className="relative flex w-full shrink-0 snap-center flex-col justify-center rounded-lg border-l-4 border-l-blue-700 px-8 py-8 shadow-md sm:max-w-sm">
              <Image
                src={item.image}
                alt={item.name}
                width={224}
                height={122}
                className="mx-auto block h-auto w-56"
              />

              <p className="mt-4 font-spline text-xl font-medium text-blue-700">
                {item.name}
              </p>

              <p className="mt-1 text-sm font-medium text-gray-600">
                {item.subtitle}
              </p>

              <p className="mt-4 text-sm text-gray-900">
                <Balancer>{item.content}</Balancer>
              </p>

              <Link
                href={item.link}
                target="_blank"
                className="mx-auto mt-8 flex items-center justify-center rounded-lg bg-blue-50 px-6 py-3 font-spline font-medium text-blue-700 hover:bg-blue-100"
              >
                <ArrowTopRightOnSquareIcon className="mr-1.5 h-auto w-4 text-blue-500" />{" "}
                Visiter le site
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
