"use client";

import type { Control } from "react-hook-form";
import { useFormState } from "react-hook-form";

import { Back } from "@/components/quote/ui/Back";
import { Continue } from "@/components/quote/ui/Continue";
import { RadioCardGroup } from "@/components/quote/ui/RadioCardGroup";
import { Step } from "@/components/quote/ui/Step";
import type { QuoteInput } from "@/lib/schemas";

interface Props {
  control: Control<QuoteInput>;
  onNext: () => void;
  onBack: () => void;
}

export function PriceOptionStep({ control, onNext, onBack }: Props) {
  const { errors } = useFormState({ control });

  return (
    <Step.Container>
      <Step.Label description="Sélectionnez votre mode de paiement." title="Option tarifaire" />

      <RadioCardGroup
        control={control}
        name="priceOption"
        options={[
          {
            label: "Louer mon site (mensuel)",
            description: "Paiement mensuel, frais d'hébergement inclus",
            value: "rent",
          },
          {
            label: "Acheter mon site (paiement unique)",
            description: "Paiement unique, frais d'hébergement exclus",
            value: "buy",
          },
        ]}
      />

      {errors.priceOption?.message ? <Step.Error message={errors.priceOption.message} /> : null}

      <Step.Footer>
        <Back onBack={onBack} />

        <Continue disabled={!!errors.priceOption} onNext={onNext} />
      </Step.Footer>
    </Step.Container>
  );
}
