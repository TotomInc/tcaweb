import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  entreprise: z.string().min(2).max(50),
  nom: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(1000),
});

export async function POST(request: Request) {
  if (
    !request.body ||
    request.headers.get("content-type") !== "application/json"
  ) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  const { entreprise, nom, email, message } = await request.json();

  const validated = schema.safeParse({
    entreprise,
    nom,
    email,
    message,
  });

  if (!validated.success) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  const formData = new FormData();

  formData.append("entreprise", validated.data.entreprise);
  formData.append("nom", validated.data.nom);
  formData.append("email", validated.data.email);
  formData.append("message", validated.data.message);

  try {
    await fetch("https://nocodeform.io/f/645a138193a604851b338ffe", {
      method: "POST",
      body: formData,
    });

    return NextResponse.json({ message: "Sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
