/* eslint jsx-a11y/label-has-associated-control: "off" */

"use client";

import { useState } from "react";

interface Props {
  title?: string;
}

function Label({
  children,
  ...labelProps
}: React.LabelHTMLAttributes<HTMLElement> & { children: React.ReactNode }) {
  return (
    <label
      {...labelProps}
      className="mb-2 block text-sm font-medium text-gray-950"
    >
      {children}
    </label>
  );
}

function Input({ ...inputProps }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...inputProps}
      className="block w-full rounded-md border border-gray-200 px-3 py-2.5 text-base font-medium text-gray-950 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  );
}

function Textarea({
  ...inputProps
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...inputProps}
      className="block w-full rounded-md border border-gray-200 px-3 py-2 text-base font-medium text-gray-950 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  );
}

export function ContactForm({ title }: Props) {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [activite, setActivite] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom,
        email,
        phone,
        activite,
        message,
      }),
    });

    if (response.status === 200) {
      setSuccess(true);
    }

    setIsLoading(false);
  };

  return (
    <section className="relative mb-8 px-8">
      <form
        className="mx-auto flex w-full max-w-2xl flex-col rounded-md border border-gray-200 bg-white p-6 shadow-md lg:p-12"
        onSubmit={handleOnSubmit}
      >
        <h3 className="font-spline text-xl font-medium text-gray-950">
          {title ?? "Contact"}
        </h3>

        <p className="mt-4 text-base text-gray-800">
          Discutons ensemble de votre projet web. Contactez-nous via le
          formulaire ci-dessous.
        </p>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full flex-col">
            <Label htmlFor="nom">Nom</Label>

            <Input
              required
              name="nom"
              id="nom"
              placeholder="Votre nom"
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col">
            <Label htmlFor="email">Adresse e-mail</Label>

            <Input
              required
              name="email"
              id="email"
              placeholder="Votre adresse e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col">
            <Label htmlFor="email">Numéro de téléphone</Label>

            <Input
              required
              name="email"
              id="email"
              placeholder="Votre numéro de téléphone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col">
            <Label htmlFor="email">Activité</Label>

            <Input
              required
              name="activite"
              id="activite"
              placeholder="Votre activité"
              onChange={(e) => setActivite(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col">
            <Label htmlFor="message">Votre projet</Label>

            <Textarea
              required
              name="message"
              id="message"
              placeholder="Expliquez brièvement votre projet web"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        {success ? (
          <p className="mt-6 text-center text-sm font-medium text-gray-950">
            Merci ! Nous vous recontacterons le plus rapidement possible afin de
            prendre connaissance de votre projet.
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-8 self-end rounded-md bg-blue-600 px-8 py-3 font-spline font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50"
          disabled={isLoading || success}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
