"use client";

import { useState } from "react";
import Balancer from "react-wrap-balancer";
import cx from "classnames";

const VITRINE_DEFAULT_PRICE = 750;
const ECOMMERCE_DEFAULT_PRICE = 3000;

function StepProgress({ current, max }: { current: number; max: number }) {
  return (
    <span className="mb-2 block font-spline text-sm font-medium text-gray-400">
      {current}/{max}
    </span>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-spline text-lg font-medium text-gray-950">
      {children}
    </h3>
  );
}

function StepDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-base mt-2 text-sm text-gray-800">
      <Balancer>{children}</Balancer>
    </p>
  );
}

function StepContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex w-full flex-col justify-between space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0">
      {children}
    </div>
  );
}

function StepButton({
  children,
  ...buttonProps
}: React.HTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) {
  return (
    <button
      {...buttonProps}
      type="button"
      className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors duration-300 ease-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
    >
      {children}
    </button>
  );
}

function StepReveal({ price }: { price: number }) {
  return (
    <>
      <StepTitle>Estimation de votre projet web</StepTitle>

      <h3 className="mt-4 text-gray-950">
        Votre site à partir de{" "}
        <span className="ml-0.5 font-spline text-xl font-medium text-gray-950">
          {new Intl.NumberFormat("fr-FR", { style: "decimal" }).format(price)}€
        </span>
      </h3>

      <p className="mt-4 text-sm text-gray-800">
        N&apos;hésitez pas à nous contactez via le formulaire ci-dessous si vous
        souhaitez plus d&apos;informations ou un devis plus précis.
      </p>

      <p className="mt-4 text-xs text-gray-600">
        Estimation à titre informatif, le devis final varie selon les besoins
        précis.
      </p>
    </>
  );
}

function EcommerceStepper() {
  const END_STEP = 5;

  const [step, setStep] = useState(0);
  const [price, setPrice] = useState(ECOMMERCE_DEFAULT_PRICE);

  const handleAnswer = (optionPrice: number) => {
    setPrice((p) => p + optionPrice);
    setStep((s) => s + 1);
  };

  return (
    <>
      {step < END_STEP ? (
        <StepProgress current={step + 1} max={END_STEP} />
      ) : null}

      {step === 0 ? (
        <>
          <StepTitle>Combien de produits souhaitez-vous vendre ?</StepTitle>

          <StepDescription>
            Une estimation approximative du nombre de produits que vous
            souhaitez vendre en ligne.
          </StepDescription>

          <StepContainer>
            <StepButton onClick={() => handleAnswer(0)}>
              Moins de 50 produits
            </StepButton>

            <StepButton onClick={() => handleAnswer(250)}>
              Jusqu&apos;à 100 produits
            </StepButton>

            <StepButton onClick={() => handleAnswer(1000)}>
              Plus de 100 produits
            </StepButton>
          </StepContainer>
        </>
      ) : null}

      {step === 1 ? (
        <>
          <StepTitle>Proposez-vous la personnalisation de produit ?</StepTitle>

          <StepDescription>
            Si vous souhaitez ajouter des options de personnalisation sur vos
            produits, par exemple la couleur, la taille, etc.
          </StepDescription>

          <StepContainer>
            <StepButton onClick={() => handleAnswer(500)}>Oui</StepButton>
            <StepButton onClick={() => handleAnswer(0)}>Non</StepButton>
          </StepContainer>
        </>
      ) : null}

      {step === 2 ? (
        <>
          <StepTitle>Comment expédiez vous les commandes ?</StepTitle>

          <StepDescription>
            Vous pouvez proposer à vos clients de venir récupérer leur commande
            en magasin ou de leur envoyer par colis.
          </StepDescription>

          <StepContainer>
            <StepButton onClick={() => handleAnswer(0)}>
              Pick-up en magasin
            </StepButton>

            <StepButton onClick={() => handleAnswer(750)}>
              Expédition colis
            </StepButton>

            <StepButton onClick={() => handleAnswer(750)}>
              Pick-up & expédition
            </StepButton>
          </StepContainer>
        </>
      ) : null}

      {step === 3 ? (
        <>
          <StepTitle>
            Prévoyez-vous d&apos;ajouter de nouveaux produits régulièrement ?
          </StepTitle>

          <StepDescription>
            Si tous les mois, vous prévoyez d&apos;ajouter de nouveaux produits
            à votre catalogue de vente en ligne.
          </StepDescription>

          <StepContainer>
            <StepButton onClick={() => handleAnswer(250)}>Oui</StepButton>
            <StepButton onClick={() => handleAnswer(0)}>Non</StepButton>
          </StepContainer>
        </>
      ) : null}

      {step === 4 ? (
        <>
          <StepTitle>
            Souhaitez-vous un nouveau logo, une nouvelle identité graphique ?
          </StepTitle>

          <StepDescription>
            Nous pouvons vous proposer une nouvelle identité graphique prête à
            l&apos;emploi sur votre site et réseaux sociaux.
          </StepDescription>

          <StepContainer>
            <StepButton onClick={() => handleAnswer(1250)}>Oui</StepButton>
            <StepButton onClick={() => handleAnswer(0)}>Non</StepButton>
          </StepContainer>
        </>
      ) : null}

      {step === END_STEP ? <StepReveal price={price} /> : null}
    </>
  );
}

function VitrineStepper() {
  const END_STEP = 4;

  const [step, setStep] = useState(0);
  const [price, setPrice] = useState(VITRINE_DEFAULT_PRICE);

  const handleAnswer = (optionPrice: number) => {
    setPrice((p) => p + optionPrice);
    setStep((s) => s + 1);
  };

  return (
    <>
      {step < END_STEP ? (
        <StepProgress current={step + 1} max={END_STEP} />
      ) : null}

      {step === 0 ? (
        <>
          <StepTitle>Avez-vous déjà du contenu prêt à être intégré ?</StepTitle>

          <StepDescription>
            Si vous avez déjà un logo exploitable, des textes et des images à
            intégrer sur votre site.
          </StepDescription>

          <StepContainer>
            <StepButton onClick={() => handleAnswer(0)}>Oui</StepButton>
            <StepButton onClick={() => handleAnswer(0)}>Non</StepButton>
          </StepContainer>
        </>
      ) : null}

      {step === 1 ? (
        <>
          <StepTitle>Souhaitez-vous 1 ou plusieurs formulaires ?</StepTitle>

          <StepDescription>
            Si vous souhaitez que vos visiteurs puissent vous contacter via un
            formulaire au lieu d&apos;un simple email.
          </StepDescription>

          <StepContainer>
            <StepButton onClick={() => handleAnswer(250)}>Oui</StepButton>
            <StepButton onClick={() => handleAnswer(0)}>Non</StepButton>
          </StepContainer>
        </>
      ) : null}

      {step === 2 ? (
        <>
          <StepTitle>
            Souhaitez-vous régulièrement mettre à jour le contenu de votre site
            ?
          </StepTitle>

          <StepDescription>
            Si vous souhaitez modifier le contenu de votre site à hauteur de 2
            fois/mois, par exemple pour mettre à jour certaines images.
          </StepDescription>

          <StepContainer>
            <StepButton onClick={() => handleAnswer(250)}>Oui</StepButton>
            <StepButton onClick={() => handleAnswer(0)}>Non</StepButton>
          </StepContainer>
        </>
      ) : null}

      {step === 3 ? (
        <>
          <StepTitle>
            Souhaitez-vous un nouveau logo, une nouvelle identité graphique ?
          </StepTitle>

          <StepDescription>
            Nous pouvons vous proposer une nouvelle identité graphique prête à
            l&apos;emploi sur votre site et réseaux sociaux.
          </StepDescription>

          <StepContainer>
            <StepButton onClick={() => handleAnswer(1250)}>Oui</StepButton>
            <StepButton onClick={() => handleAnswer(0)}>Non</StepButton>
          </StepContainer>
        </>
      ) : null}

      {step === END_STEP ? <StepReveal price={price} /> : null}
    </>
  );
}

export function WebsiteCalculator({ className }: { className?: string }) {
  const [websiteType, setWebsiteType] = useState<
    "vitrine" | "ecommerce" | null
  >(null);

  return (
    <section className={cx("relative px-8", className)}>
      <div className="mx-auto w-full max-w-xl rounded-md border border-gray-200 bg-white p-6 shadow-md lg:p-10">
        {!websiteType ? (
          <>
            <h2 className="mb-4 font-spline text-2xl font-semibold text-gray-950">
              Outil d&apos;estimation rapide de votre projet web
            </h2>

            <StepTitle>Quel type de site souhaitez-vous ?</StepTitle>

            <StepDescription>
              Un site vitrine active votre présence sur le web. Un site
              e-commerce vous permet de vendre vos produits en ligne.
            </StepDescription>

            <StepContainer>
              <StepButton onClick={() => setWebsiteType("vitrine")}>
                Site vitrine
              </StepButton>

              <StepButton onClick={() => setWebsiteType("ecommerce")}>
                Site e-commerce
              </StepButton>
            </StepContainer>
          </>
        ) : null}

        {websiteType === "vitrine" ? <VitrineStepper /> : null}
        {websiteType === "ecommerce" ? <EcommerceStepper /> : null}
      </div>
    </section>
  );
}
