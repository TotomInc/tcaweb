"use server";

import { cookies } from "next/headers";
import { Resend } from "resend";

import QuoteEmail from "@/emails/QuoteEmail";
import { calculateQuote } from "@/lib/quote-pricing";
import { quoteSchema } from "@/lib/schemas";

import { contactFormSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const cookieStore = await cookies();
  const datafastVisitorId = cookieStore.get("datafast_visitor_id");

  const { organization, firstName, lastName, email, phone, message, website } =
    Object.fromEntries(formData);

  const validatedFields = contactFormSchema.safeParse({
    organization,
    firstName,
    lastName,
    email,
    phone,
    message,
    website,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // If the honeypot field has a value, it's likely a bot submission.
  // Return success without actually submitting the form.
  if (validatedFields.data.website) {
    return { success: true };
  }

  try {
    // See: https://app.formcarry.com/form/6zbmtB69VVV
    const response = await fetch("https://formcarry.com/s/6zbmtB69VVV", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        organization: validatedFields.data.organization,
        firstName: validatedFields.data.firstName,
        lastName: validatedFields.data.lastName,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
        message: validatedFields.data.message,
      }),
    });

    if (!response.ok) {
      return {
        error: "Une erreur est survenue lors de l'envoi du formulaire, veuillez réessayer.",
      };
    }

    // When form successfully submitted, we can send the data to Datafast to send a new goal.
    if (datafastVisitorId?.value && process.env.DATAFAST_API_KEY) {
      await fetch("https://datafa.st/api/v1/goals", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.DATAFAST_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          datafast_visitor_id: datafastVisitorId.value,
          name: "contact_us",
          metadata: {
            name: `${validatedFields.data.firstName} ${validatedFields.data.lastName}`,
            email: validatedFields.data.email,
          },
        }),
      });
    }
  } catch {
    return {
      error: "Une erreur est survenue lors de l'envoi du formulaire, veuillez réessayer.",
    };
  }

  return { success: true };
}

export async function submitQuote(formData: unknown) {
  const validatedFields = quoteSchema.safeParse(formData);

  if (!validatedFields.success) {
    return { ok: false, errors: validatedFields.error.flatten().fieldErrors };
  }

  try {
    const response = await fetch("https://formcarry.com/s/6zbmtB69VVV", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        firstname: validatedFields.data.contact.firstName,
        lastname: validatedFields.data.contact.lastName,
        email: validatedFields.data.contact.email,
        phone: validatedFields.data.contact.phone,
        companyName: validatedFields.data.contact.companyName,
        websiteType: validatedFields.data.websiteType,
        pages: validatedFields.data.pages,
        features: validatedFields.data.features || "none",
        payments: validatedFields.data.payments || "none",
        delivery: validatedFields.data.delivery || "none",
        priceOption: validatedFields.data.priceOption,
      }),
    });

    const pricing = calculateQuote(validatedFields.data);

    const email = await resend.emails.send({
      from: "thomas@updates.tcaweb.fr",
      to: validatedFields.data.contact.email,
      subject: "Votre devis est prêt !",
      react: QuoteEmail({
        contact: validatedFields.data.contact,
        priceOption: validatedFields.data.priceOption,
        pricing,
      }),
    });

    if (!response.ok || email.error) {
      return { ok: false, error: "Une erreur est survenue. Veuillez réessayer." };
    }
  } catch {
    return { ok: false, error: "Une erreur est survenue. Veuillez réessayer." };
  }

  return { ok: true };
}
