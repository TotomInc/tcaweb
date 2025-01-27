import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { AuroraText } from "@/components/ui/AuroraText";
import { ContactCta } from "@/components/ui/ContactCta";

interface Props {
  className?: string;
}

function Waves() {
  return (
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="absolute inset-x-0 bottom-0 -mb-px -scale-100"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill="currentColor"
        fillOpacity="1"
      />
    </svg>
  );
}

export function Hero({ className }: Props) {
  const items = [
    "Spécialiste des petites entreprises",
    "+10 années d'expérience dans le web",
    "Moins cher qu'une agence web traditionnelle",
  ];

  return (
    <section
      className={twMerge(
        "relative bg-linear-to-br from-blue-900 via-blue-700 to-blue-500 text-blue-50",
        className,
      )}
    >
      <div className="relative mx-auto max-w-7xl pt-24 pb-48 xl:pt-32 xl:pb-56">
        <div className="flex flex-col items-start gap-6 px-6 sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:gap-8">
          <h1 className="font-heading text-3xl font-bold text-balance lg:text-5xl 2xl:text-6xl">
            Développez votre{" "}
            <AuroraText
              as="span"
              className="text-primary rotate-[-2deg] rounded-lg bg-white px-3 py-2 shadow-xl"
            >
              présence digitale
            </AuroraText>
          </h1>

          <p className="text-base text-balance lg:text-xl">
            <span className="font-heading font-bold">TCA Web</span>, votre agence web spécialiste{" "}
            <span className="font-heading font-bold">des PME</span>. Des sites web de qualité
            professionnelle, qui vous démarquent de la concurrence à{" "}
            <span className="font-heading font-bold">un prix abordable</span>.
          </p>

          <ContactCta />

          <ul className="flex flex-col gap-2">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 font-medium sm:text-sm lg:text-base"
              >
                <CheckBadgeIcon className="size-6 fill-blue-600 text-blue-200" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <Image
          priority
          src="/_static/images/multi-device-mockup-alt.png"
          alt="Site web réalisé pour notre client Inyda (Data Science)"
          width={2972}
          height={2319}
          className="pointer-events-none absolute bottom-0 left-1/2 z-1 -mb-10 block h-auto w-68 translate-x-[-50%] sm:hidden"
          quality={90}
        />

        <Image
          priority
          src="/_static/images/multi-device-mockup.png"
          alt="Site web réalisé pour notre client Inyda (Data Science)"
          width={2218}
          height={1854}
          className="pointer-events-none absolute right-0 bottom-0 z-1 hidden h-auto sm:block sm:w-80 md:w-full md:max-w-md lg:block lg:max-w-xl xl:max-w-2xl"
          quality={90}
        />
      </div>

      <Waves />
    </section>
  );
}
