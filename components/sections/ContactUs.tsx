"use client";

import { CheckCircleIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Input } from "@/components/ui/form/Input";
import { PhoneInput } from "@/components/ui/form/PhoneInput";
import { Textarea } from "@/components/ui/form/Textarea";
import { Section } from "@/components/ui/Section";
import { Spinner } from "@/components/ui/spinner/Spinner";
import { submitContactForm } from "@/lib/actions";
import { contactFormSchema } from "@/lib/schemas";
import type { ContactFormValues } from "@/lib/schemas";

export function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const onSubmit = async (data: ContactFormValues) => {
    setIsLoading(true);
    setError(null);

    const formData = new FormData();

    formData.append("organization", data.organization);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);

    // Include honeypot field in form data if it has a value.
    if (data.website) {
      formData.append("website", data.website);
    }

    try {
      const response = await submitContactForm(formData);

      // Simulate a delay in the response for the animation.
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (!response.success) {
        setError("Une erreur est survenue lors de l'envoi du formulaire, veuillez réessayer.");
      } else {
        setSuccess("Votre message a été envoyé avec succès.");
      }
    } catch {
      setError("Une erreur est survenue lors de l'envoi du formulaire, veuillez réessayer.");
    }

    setIsLoading(false);
  };

  return (
    <Section.Root id="contact">
      <Section.Heading
        badge="Un projet ?"
        description="Créons ensemble un site web qui reflète votre entreprise et attire de nouveaux clients."
        label="Travaillons ensemble sur votre projet web."
      />

      <div className="mx-auto flex w-full max-w-2xl items-center rounded-lg border border-gray-200 bg-white p-6 shadow-xl shadow-gray-900/5 sm:p-8">
        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Honeypot field - hidden from real users but bots will fill it */}
          <div aria-hidden="true" className="hidden">
            <Input autoComplete="off" label="Website (leave empty)" {...register("website")} />
          </div>

          <Input
            autoComplete="organization"
            error={errors.organization?.message}
            label="Nom de votre entreprise*"
            readOnly={isLoading || !!success}
            {...register("organization")}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              autoComplete="given-name"
              error={errors.firstName?.message}
              label="Votre prénom*"
              readOnly={isLoading || !!success}
              {...register("firstName")}
            />

            <Input
              autoComplete="family-name"
              error={errors.lastName?.message}
              label="Votre nom*"
              readOnly={isLoading || !!success}
              {...register("lastName")}
            />
          </div>

          <Input
            autoComplete="email"
            error={errors.email?.message}
            label="Votre email*"
            readOnly={isLoading || !!success}
            type="email"
            {...register("email")}
          />

          <PhoneInput
            autoComplete="tel"
            error={errors.phone?.message}
            label="Votre numéro de téléphone*"
            readOnly={isLoading || !!success}
            {...register("phone")}
          />

          <Textarea
            autoCapitalize="off"
            error={errors.message?.message}
            label="Votre message*"
            readOnly={isLoading || !!success}
            rows={4}
            {...register("message")}
          />

          <button
            className="flex cursor-pointer items-center justify-center rounded-sm bg-blue-600 px-4 py-2 font-semibold tracking-tight text-white shadow-md ring inset-shadow-sm inset-ring ring-blue-600 inset-shadow-white/30 inset-ring-white/25 transition-colors duration-150 ease-out hover:bg-blue-700 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            data-fast-goal="contact-us-submit"
            disabled={isLoading || !!success}
            type="submit"
          >
            <AnimatePresence initial={false} mode="wait">
              {!isLoading && !success ? (
                <motion.div
                  key="idle"
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center"
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Envoyer <PaperAirplaneIcon className="ml-2 size-5" />
                </motion.div>
              ) : null}

              {isLoading ? (
                <motion.div
                  key="loading"
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Spinner className="size-5" />
                </motion.div>
              ) : null}

              {success ? (
                <motion.div
                  key="success"
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center"
                  exit={{ opacity: 0, y: -10 }}
                  initial={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Formulaire envoyé
                  <CheckCircleIcon className="ml-2 size-5" />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </button>

          {error ? (
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-red-700"
              initial={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </motion.p>
          ) : null}

          {success ? (
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-medium text-blue-950"
              initial={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.3 }}
            >
              Nous reviendrons vers vous dans les plus brefs délais.
            </motion.p>
          ) : null}
        </form>
      </div>
    </Section.Root>
  );
}
