/* eslint regexp/no-unused-capturing-group: "off", regexp/no-contradiction-with-assertion: "off", regexp/prefer-w: "off", regexp/no-useless-escape: "off" */
import { parsePhoneNumberWithError } from "libphonenumber-js";
import { z } from "zod";

const emailRegex =
  /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;

export const contactFormSchema = z.object({
  organization: z.string().min(2, "Le nom de l'entreprise est requis"),
  firstName: z.string().min(2, "Le prénom est requis"),
  lastName: z.string().min(2, "Le nom est requis"),
  email: z
    .string()
    .min(4, "L'email est requis")
    .refine((value) => emailRegex.test(value), "Veuillez entrer une adresse email valide"),
  phone: z
    .string()
    .min(1, "Le numéro de téléphone est requis")
    .refine((value) => {
      try {
        const parsed = parsePhoneNumberWithError(value, "FR");
        return parsed.country === "FR" && parsed.isValid();
      } catch {
        return false;
      }
    }, "Veuillez entrer un numéro de téléphone français valide"),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
  // Honeypot field - should remain empty.
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
