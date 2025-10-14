"use client";

import type { Control } from "react-hook-form";
import { useFormState } from "react-hook-form";

import { Continue } from "@/components/quote/ui/Continue";
import { RadioCardGroup } from "@/components/quote/ui/RadioCardGroup";
import { Step } from "@/components/quote/ui/Step";
import type { QuoteInput } from "@/lib/schemas";

interface Props {
  control: Control<QuoteInput>;
  onNext: () => void;
}

export function WebsiteTypeStep({ control, onNext }: Props) {
  const { errors } = useFormState({ control });

  return (
    <Step.Container>
      <Step.Label
        title="Quel type de site souhaitez-vous ?"
        description="Sélectionnez une option."
      />

      <RadioCardGroup
        control={control}
        name="websiteType"
        options={[
          { label: "Site vitrine", value: "vitrine" },
          { label: "Site e-commerce", value: "ecommerce" },
        ]}
      />

      {errors.websiteType?.message ? <Step.Error message={errors.websiteType.message} /> : null}

      <Step.Footer>
        <Continue disabled={!!errors.websiteType} onNext={onNext} />
      </Step.Footer>
    </Step.Container>
  );
}
