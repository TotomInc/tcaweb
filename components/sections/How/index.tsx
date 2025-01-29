import { Badge } from "@/components/ui/Badge";
import { BentoCard } from "@/components/ui/BentoCard";

import { Item1 } from "./Item1";
import { Item2 } from "./Item2";

function BentoCardLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-secondary inline-block w-fit rounded-sm bg-gradient-to-b from-gray-300 to-gray-200 px-2 py-1 font-mono text-sm font-bold inset-shadow-sm inset-shadow-gray-900/20">
      {children}
    </span>
  );
}

export function How() {
  return (
    <section className="relative text-black">
      <div className="relative mx-auto max-w-7xl px-6 pt-8 pb-16 lg:pt-16">
        <div className="mx-auto mb-16 flex max-w-lg flex-col items-center">
          <Badge>Processus</Badge>

          <h2 className="font-heading text-primary mb-2.5 text-center text-3xl font-semibold tracking-tight text-balance">
            Votre projet web en 3 étapes.
          </h2>

          <p className="text-secondary text-center text-base/relaxed text-balance">
            Un accompagnement entièrement personnalisé dès la prise de contact.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <BentoCard
            content={{
              title: "Analyse de vos besoins",
              description:
                "Nous définissons ensemble vos objectifs et vos besoins afin d'utiliser les outils et solutions les plus adaptés.",
              label: <BentoCardLabel>01</BentoCardLabel>,
            }}
          >
            <Item1 />
          </BentoCard>

          <BentoCard
            content={{
              title: "Conception du site web",
              description:
                "Nous créons un site web sur-mesure de A à Z en accord avec votre identité visuelle et vos attentes.",
              label: <BentoCardLabel>02</BentoCardLabel>,
            }}
          >
            <Item2 />
          </BentoCard>

          <BentoCard
            content={{
              title: "Lancement de votre site",
              description:
                "Nous assurons le suivi et la maintenance de votre site web pour garantir son bon fonctionnement.",
              label: <BentoCardLabel>03</BentoCardLabel>,
            }}
            image={{
              src: "/_static/images/lancement-site-internet.png",
              alt: "Lancement du site internet d'un client",
              width: 1536,
              height: 1514,
              className: "h-[164px] w-auto object-contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}
