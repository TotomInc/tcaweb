"use client";

import type { Control } from "react-hook-form";
import { useFormState } from "react-hook-form";

import { Back } from "@/components/quote/ui/Back";
import { CheckboxGroup } from "@/components/quote/ui/CheckboxGroup";
import { Continue } from "@/components/quote/ui/Continue";
import { Step } from "@/components/quote/ui/Step";
import type { QuoteInput } from "@/lib/schemas";

interface Props {
  control: Control<QuoteInput>;
  onNext: () => void;
  onBack: () => void;
}

export function PaymentsStep({ control, onNext, onBack }: Props) {
  const { errors } = useFormState({ control });

  return (
    <Step.Container>
      <Step.Label
        title="Paiements (e‑commerce)"
        description="Choisissez un ou plusieurs moyens de paiement."
      />

      <CheckboxGroup
        control={control}
        name="payments"
        options={[
          {
            label: "Paiement en ligne",
            value: "online",
          },
          { label: "Paiement en boutique", value: "instore" },
          { label: "Autre", value: "other" },
        ]}
      />

      {errors.payments?.message ? <Step.Error message={errors.payments.message} /> : null}

      <Step.Footer>
        <Back onBack={onBack} />

        <Continue disabled={!!errors.payments} onNext={onNext} />
      </Step.Footer>
    </Step.Container>
  );
}
