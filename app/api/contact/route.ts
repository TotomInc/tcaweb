import { z } from "zod";
import { NextResponse } from "next/server";

interface RequestData {
  nom: string;
  email: string;
  phone: string;
  activite: string;
  message: string;
}

const schema = z.object({
  nom: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().min(2).max(50),
  activite: z.string().min(2).max(50),
  message: z.string().min(2).max(1000),
});

export async function POST(request: Request) {
  if (
    !request.body
    || request.headers.get("content-type") !== "application/json"
  ) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  const { activite, nom, email, phone, message } = await request.json() as RequestData;

  const validated = schema.safeParse({
    nom,
    email,
    phone,
    activite,
    message,
  });

  if (!validated.success) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }

  const formData = new FormData();

  formData.append("nom", validated.data.nom);
  formData.append("email", validated.data.email);
  formData.append("phone", validated.data.phone);
  formData.append("activite", validated.data.activite);
  formData.append("message", validated.data.message);

  try {
    await fetch("https://nocodeform.io/f/653257ec2f0eb1b11db8a503", {
      method: "POST",
      body: formData,
    });

    return NextResponse.json({ message: "Sent" }, { status: 200 });
  }
  catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
}
