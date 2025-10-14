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

export function DeliveryStep({ control, onNext, onBack }: Props) {
  const { errors } = useFormState({ control });

  return (
    <Step.Container>
      <Step.Label
        title="Livraison (e‑commerce)"
        description="Choisissez un ou plusieurs modes de livraison."
      />

      <CheckboxGroup
        control={control}
        name="delivery"
        options={[
          {
            label: "Retrait en boutique",
            description: "Vos clients passent en boutique récupérer leur commande",
            value: "instore",
          },
          {
            label: "Mondial Relay",
            description: "Livraison via votre point de relais Mondial Relay",
            value: "mondialrelay",
          },
          { label: "Autre", description: "Autre mode de livraison", value: "other" },
        ]}
      />

      {errors.delivery?.message ? <Step.Error message={errors.delivery.message} /> : null}

      <Step.Footer>
        <Back onBack={onBack} />

        <Continue disabled={!!errors.delivery} onNext={onNext} />
      </Step.Footer>
    </Step.Container>
  );
}
