"use server";

import { contactFormSchema } from "./schemas";

export async function submitContactForm(formData: FormData) {
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
  } catch {
    return {
      error: "Une erreur est survenue lors de l'envoi du formulaire, veuillez réessayer.",
    };
  }

  return { success: true };
}
