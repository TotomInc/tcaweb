import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

export interface LinkBannerProps {
  className?: string;
  title: string;
  description: string;
  link: string;
  ctaTitle: string;
  coverImage?: {
    src: string;
    alt: string;
  };
}

export function LinkBanner({
  className,
  title,
  description,
  link,
  ctaTitle,
  coverImage,
}: LinkBannerProps) {
  return (
    <section
      className={cx(
        "group relative w-full overflow-hidden bg-gradient-to-br from-blue-800 to-blue-600  lg:mx-auto lg:max-w-4xl lg:rounded-2xl lg:shadow-lg 2xl:max-w-7xl",
        className,
      )}
    >
      {coverImage
        ? (
          <Image
            fill
            src={coverImage.src}
            alt={coverImage.alt}
            sizes="(max-width: 1023px) 75vw, 33vw"
            quality={75}
            className="pointer-events-none absolute inset-0 object-cover opacity-[0.125] transition-transform duration-500 ease-out group-hover:scale-105"
          />
          )
        : null}

      <Link
        href={link}
        className="relative flex w-full flex-col items-start px-8 py-10"
      >
        <h3 className="font-spline text-2xl font-bold text-white lg:text-3xl">
          {title}
        </h3>

        <p className="mt-4 text-balance text-blue-50 lg:mt-6 lg:max-w-xl lg:text-lg">
          {description}
        </p>

        <span className="ml-auto mt-8 flex items-center justify-center rounded-lg bg-blue-50 px-6 py-3 font-spline font-medium text-blue-700">
          {ctaTitle}
        </span>
      </Link>
    </section>
  );
}
