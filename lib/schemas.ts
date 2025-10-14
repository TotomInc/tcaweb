/* eslint regexp/no-unused-capturing-group: "off", regexp/no-contradiction-with-assertion: "off", regexp/prefer-w: "off", regexp/no-useless-escape: "off" */
import { parsePhoneNumber, parsePhoneNumberWithError } from "libphonenumber-js";
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

export const quoteSchema = z
  .object({
    websiteType: z.enum(["vitrine", "ecommerce"], {
      message: "Sélectionnez un type de site",
    }),
    pages: z.enum(["1", "4", "7"], {
      message: "Sélectionnez un nombre de pages",
    }),
    features: z.array(
      z.enum(["contact", "gmb", "maps", "portfolio", "blog", "faq", "testimonials"]),
    ),
    payments: z.array(z.enum(["online", "instore", "other"])).optional(),
    delivery: z.array(z.enum(["instore", "mondialrelay", "other"])).optional(),
    priceOption: z.enum(["rent", "buy"], {
      message: "Choisissez une option tarifaire",
    }),
    contact: z.object({
      firstName: z.string().min(1, "Prénom requis"),
      lastName: z.string().min(1, "Nom requis"),
      companyName: z.string().optional(),
      email: z.string().email("Email invalide"),
      phone: z
        .string()
        .min(14, "Veuillez entrer un numéro de téléphone français valide")
        .refine((value) => {
          try {
            const parsed = parsePhoneNumber(value, "FR");
            return parsed.country === "FR" && parsed.isValid();
          } catch {
            return false;
          }
        }, "Veuillez entrer un numéro de téléphone français valide"),
    }),
  })
  .superRefine((val, ctx) => {
    if (val.websiteType === "ecommerce") {
      if (!val.payments || val.payments.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["payments"],
          message: "Choisissez au moins un mode de paiement",
        });
      }

      if (!val.delivery || val.delivery.length < 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["delivery"],
          message: "Choisissez au moins un mode de livraison",
        });
      }
    }
  });

export type QuoteInput = z.infer<typeof quoteSchema>;
