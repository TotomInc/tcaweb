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

export function PagesStep({ control, onNext, onBack }: Props) {
  const { errors } = useFormState({ control });

  return (
    <Step.Container>
      <Step.Label
        title="Combien de pages ?"
        description="Pour l'e-commerce, les pages produits sont illimitées."
      />

      <RadioCardGroup
        control={control}
        name="pages"
        options={[
          { label: "1 page", description: "Accueil", value: "1" },
          { label: "4 pages", description: "Accueil, services, à propos, contact", value: "4" },
          {
            label: "7 pages",
            description: "Accueil, 4 pages services, à propos, contact",
            value: "7",
          },
        ]}
      />

      {errors.pages?.message ? <Step.Error message={errors.pages.message} /> : null}

      <Step.Footer>
        <Back onBack={onBack} />

        <Continue disabled={!!errors.pages} onNext={onNext} />
      </Step.Footer>
    </Step.Container>
  );
}
