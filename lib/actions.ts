"use server";

import { cookies } from "next/headers";

import { contactFormSchema } from "./schemas";

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
