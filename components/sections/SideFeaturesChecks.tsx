import Image from "next/image";
import Balancer from "react-wrap-balancer";
import cx from "classnames";
import { CheckIcon } from "@heroicons/react/20/solid";

export type SideFeaturesChecksProps = {
  className?: string;
  invert?: boolean;
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
    className?: string;
  };
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
  }[];
};

export function SideFeaturesChecks({
  className,
  invert,
  image,
  title,
  description,
  features,
}: SideFeaturesChecksProps) {
  return (
    <section className={cx("relative w-full", className)}>
      <div className="mx-auto max-w-7xl px-8 lg:flex lg:items-center lg:justify-between">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={cx(
            "block h-auto w-full",
            invert ? "order-2" : "",
            image.className
          )}
        />

        <div
          className={cx(
            "mt-12 flex w-full flex-col",
            invert ? "order-1" : "lg:pl-16"
          )}
        >
          <h2 className="text-3xl font-bold text-gray-950">
            <Balancer>{title}</Balancer>
          </h2>

          <p className="mt-8 max-w-xl text-base leading-snug text-gray-800">
            <Balancer>{description}</Balancer>
          </p>

          <dl className="mt-8 flex max-w-xl flex-col space-y-6">
            {features.map((feature) => (
              <div key={feature.title}>
                <dt className="flex items-center">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-600">
                    <CheckIcon className="block h-auto w-4 text-white" />
                  </div>

                  <h3 className="ml-3 font-spline text-xl font-medium text-gray-950">
                    {feature.title}
                  </h3>
                </dt>

                <dd className="mt-2 pl-9 text-sm text-gray-600">
                  <Balancer>{feature.description}</Balancer>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
