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
      "Réalisation du site web de la société H.G.M. France, spécialisée dans le domaine de la machinerie. Intégration d'un catalogue digital, d'un formulaire de contact et d'une solution d'analyse d'audience.",
    image: "/_static/images/portfolio/hgmfrance-mockup.png",
    link: "https://www.hgmfrance.fr",
  },
  {
    name: "Inyda",
    subtitle: "Fontainebleau, Île-de-France",
    content:
      "Refonte du site web d'Inyda, entreprise spécialisée dans la Data Science. Intégration d'un CMS pour la gestion des contenus et du multi-langue.",
    image: "/_static/images/portfolio/inyda-mockup.png",
    link: "https://www.inyda.com",
  },
];

export type PortfolioProps = {
  className?: string;
  titleClassName?: string;
};

export function Portfolio({ className, titleClassName }: PortfolioProps) {
  return (
    <section className={cx("relative w-full", className)}>
      <div className="mx-auto max-w-7xl px-8">
        <h2 className={cx("text-3xl font-bold text-gray-950", titleClassName)}>
          Portfolio <span className="h-px w-12" />
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center space-y-8 sm:flex-row sm:space-x-12 sm:space-y-0">
          {ITEMS.map((item) => (
            <div
              key={item.link}
              className="relative flex w-full shrink-0 snap-center flex-col justify-center rounded-lg border-l-4 border-l-blue-700 px-8 py-8 shadow-md sm:max-w-sm"
            >
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
