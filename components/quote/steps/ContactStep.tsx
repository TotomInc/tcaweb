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
      <Step.Label title="Vos coordonnées" description="Nous enverrons votre devis par email." />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Controller
          control={control}
          name="contact.firstName"
          render={({ field, fieldState }) => (
            <Input
              label="Prénom*"
              placeholder="Jean"
              autoComplete="given-name"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="contact.lastName"
          render={({ field, fieldState }) => (
            <Input
              label="Nom*"
              placeholder="Dupont"
              autoComplete="family-name"
              error={fieldState.error?.message}
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
            label="Entreprise"
            placeholder="Ma société"
            autoComplete="organization"
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
              type="email"
              label="Email*"
              placeholder="jean@exemple.com"
              autoComplete="email"
              error={fieldState.error?.message}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="contact.phone"
          render={({ field, fieldState }) => (
            <PhoneInput
              label="Téléphone*"
              placeholder="06 12 34 56 78"
              autoComplete="tel"
              error={fieldState.error?.message}
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
