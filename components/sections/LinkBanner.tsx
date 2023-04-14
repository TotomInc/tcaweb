import Link from "next/link";
import Balancer from "react-wrap-balancer";
import cx from "classnames";

export type LinkBannerProps = {
  className?: string;
  title: string;
  description: string;
  link: string;
  ctaTitle: string;
};

export function LinkBanner({
  className,
  title,
  description,
  link,
  ctaTitle,
}: LinkBannerProps) {
  return (
    <section
      className={cx(
        "relative w-full bg-gradient-to-br from-blue-800 to-blue-600 px-8 py-10 lg:mx-auto lg:max-w-4xl lg:rounded-2xl lg:shadow-lg 2xl:max-w-7xl",
        className
      )}
    >
      <Link href={link} className="flex flex-col items-start">
        <h3 className="font-spline text-2xl font-bold text-white lg:text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-blue-50 lg:mt-6 lg:max-w-xl lg:text-lg">
          <Balancer>{description}</Balancer>
        </p>

        <span className="ml-auto mt-8 flex items-center justify-center rounded-lg bg-blue-50 px-6 py-3 font-spline font-medium text-blue-700">
          {ctaTitle}
        </span>
      </Link>
    </section>
  );
}
