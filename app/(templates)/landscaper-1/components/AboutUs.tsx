import Image from "next/image";

import { LeafOakSolidIcon } from "./icons/LeafOakSolidIcon";

export function AboutUs() {
  return (
    <section className="container flex flex-col px-4 py-6">
      <div className="flex flex-col">
        <h2 className="mb-4 flex items-center gap-1 text-xl font-bold tracking-tighter text-green-800">
          <LeafOakSolidIcon /> Qui sommes nous ?
        </h2>

        <p className="mb-4 font-landscaper-1-heading text-3xl font-bold tracking-tighter">
          L&apos;excellence en{" "}
          <span className="text-green-800">entretien paysager</span>
        </p>

        <p className="text-balance text-neutral-700">
          Confiez vos travaux <b>d&apos;aménagement</b> et{" "}
          <b>d&apos;entretien de jardin</b> à un spécialiste. L&apos;entreprise
          Garland, située près de Fontainebleau en <b>Seine-et-Marne</b>,
          intervient auprès <b>des particuliers et des professionnels</b> pour
          aménager et entretenir tous types d&apos;espaces verts.
        </p>

        <div className="relative mt-8 aspect-square h-64 w-full">
          <Image
            fill
            quality={75}
            src="/_static/landscaper-1/images/slider-1.jpg"
            alt=""
            className="rounded-lg object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}
