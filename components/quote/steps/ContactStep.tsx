"use client";

import type { Control } from "react-hook-form";
import { Controller } from "react-hook-form";

import { Back } from "@/components/quote/ui/Back";
import { Continue } from "@/components/quote/ui/Continue";
import { Step } from "@/components/quote/ui/Step";
import { Input } from "@/components/ui/form/Input";
import { PhoneInput } from "@/components/ui/form/PhoneInput";
import type { QuoteInput } from "@/lib/schemas";

interface Props {
  control: Control<QuoteInput>;
  onSubmit: () => void;
  onBack: () => void;
}

export function ContactStep({ control, onSubmit, onBack }: Props) {
  return (
    <Step.Container>
      <Step.Label description="Nous enverrons votre devis par email." title="Vos coordonnées" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Controller
          control={control}
          name="contact.firstName"
          render={({ field, fieldState }) => (
            <Input
              autoComplete="given-name"
              error={fieldState.error?.message}
              label="Prénom*"
              placeholder="Jean"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="contact.lastName"
          render={({ field, fieldState }) => (
            <Input
              autoComplete="family-name"
              error={fieldState.error?.message}
              label="Nom*"
              placeholder="Dupont"
              {...field}
            />
          )}
        />
      </div>

      <Controller
        control={control}
        name="contact.companyName"
        render={({ field }) => (
          <Input
            autoComplete="organization"
            label="Entreprise"
            placeholder="Ma société"
            {...field}
          />
        )}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Controller
          control={control}
          name="contact.email"
          render={({ field, fieldState }) => (
            <Input
              autoComplete="email"
              error={fieldState.error?.message}
              label="Email*"
              placeholder="jean@exemple.com"
              type="email"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="contact.phone"
          render={({ field, fieldState }) => (
            <PhoneInput
              autoComplete="tel"
              error={fieldState.error?.message}
              label="Téléphone*"
              placeholder="06 12 34 56 78"
              {...field}
            />
          )}
        />
      </div>

      <Step.Footer>
        <Back onBack={onBack} />

        <Continue onNext={onSubmit} />
      </Step.Footer>
    </Step.Container>
  );
}
