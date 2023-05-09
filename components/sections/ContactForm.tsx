/* eslint jsx-a11y/label-has-associated-control: "off" */

"use client";

import { useState } from "react";
import Balancer from "react-wrap-balancer";

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
      className="block w-full rounded-md border border-gray-200 px-3 py-2.5 text-base font-medium text-gray-950 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  );
}

function Textarea({
  ...inputProps
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...inputProps}
      className="block w-full rounded-md border border-gray-200 px-3 py-2 text-base font-medium text-gray-950 placeholder-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
    />
  );
}

export function ContactForm() {
  const [success, setSuccess] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [entreprise, setEntreprise] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entreprise,
        nom,
        email,
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
        onSubmit={handleOnSubmit}
        className="mx-auto flex w-full max-w-xl flex-col rounded-md border border-gray-200 bg-white p-6 shadow-md lg:p-10"
      >
        <h3 className="font-spline text-xl font-medium text-gray-950">
          Contact
        </h3>

        <p className="mt-4 text-base text-gray-800">
          <Balancer>
            Vous avez un projet web et vous souhaitez en discuter&nbsp;?
            Contactez-nous via le formulaire ci-dessous ou à l&apos;adresse
            e-mail{" "}
            <a
              href="mailto:thomas@lelaboweb.fr"
              target="_blank"
              className="font-spline font-medium text-blue-950 underline hover:text-blue-700"
              rel="noreferrer"
            >
              thomas@lelaboweb.fr
            </a>
            .
          </Balancer>
        </p>

        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full flex-col">
            <Label htmlFor="entreprise">Entreprise</Label>

            <Input
              name="entreprise"
              id="entreprise"
              placeholder="Nom de votre entreprise"
              onChange={(e) => setEntreprise(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col">
            <Label htmlFor="nom">Nom</Label>

            <Input
              name="nom"
              id="nom"
              placeholder="Votre nom"
              onChange={(e) => setNom(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col">
            <Label htmlFor="email">Adresse e-mail</Label>

            <Input
              name="email"
              id="email"
              placeholder="Votre adresse e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex w-full flex-col">
            <Label htmlFor="message">Message</Label>

            <Textarea
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
          className="mt-8 self-end rounded-md bg-blue-600 px-8 py-3 font-spline font-medium text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          disabled={isLoading || success}
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
