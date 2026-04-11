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

export function FeaturesStep({ control, onNext, onBack }: Props) {
  const { errors } = useFormState({ control });

  return (
    <Step.Container>
      <Step.Label
        description="Sélectionnez les options souhaitées (facultatif)."
        title="Fonctionnalités"
      />

      <CheckboxGroup
        control={control}
        name="features"
        options={[
          {
            label: "Formulaire de contact",
            description: "Formulaire de contact pour les visiteurs",
            value: "contact",
          },
          {
            label: "Google My Business",
            description: "Augmentez votre visibilité sur Google",
            value: "gmb",
          },
          {
            label: "Google Maps",
            description: "Carte dynamique Google Maps sur votre site",
            value: "maps",
          },
          { label: "Portfolio", description: "Galerie de photos et vidéos", value: "portfolio" },
          { label: "Blog", description: "Blog pour partager vos actualités", value: "blog" },
          { label: "FAQ", description: "Questions fréquentes et réponses", value: "faq" },
          {
            label: "Avis clients",
            description: "Avis clients sur votre site",
            value: "testimonials",
          },
        ]}
      />

      {errors.features?.message ? <Step.Error message={errors.features.message} /> : null}

      <Step.Footer>
        <Back onBack={onBack} />

        <Continue onNext={onNext} />
      </Step.Footer>
    </Step.Container>
  );
}
