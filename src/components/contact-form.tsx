"use client";

import { ArrowRight, CircleCheck } from "lucide-react";
import { type FormEvent, type ReactNode, useState } from "react";

const propertyOptions = ["Studio", "T2", "T3", "T4 ou plus", "Maison"];

const fieldClass =
  "w-full rounded-2xl border border-sand bg-paper px-4 py-3.5 text-ink placeholder:text-ink/35 transition-colors outline-none focus:border-terracotta focus:ring-4 focus:ring-coral/20";

function Field({
  label,
  htmlFor,
  required,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-forest">
        {label}
        {required ? <span className="text-rust"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [firstName, setFirstName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setFirstName(String(data.get("prenom") ?? ""));
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[34rem] flex-col items-center justify-center rounded-[2rem] bg-paper p-10 text-center text-ink shadow-2xl">
        <span className="grid size-16 place-items-center rounded-full bg-forest text-paper">
          <CircleCheck className="size-8" strokeWidth={1.5} />
        </span>
        <p className="mt-8 font-serif text-4xl text-forest">Merci{firstName ? ` ${firstName}` : ""} !</p>
        <p className="mt-4 max-w-sm leading-relaxed text-ink/65">
          Votre demande d&apos;estimation a bien été envoyée. Leslye revient vers vous personnellement très
          rapidement.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-sm font-semibold text-rust underline-offset-4 hover:underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-paper p-7 text-ink shadow-[0_50px_100px_-40px_rgba(0,0,0,0.55)] sm:p-10"
    >
      <p className="font-serif text-3xl text-forest">Demander une estimation</p>
      <p className="mt-2 text-sm text-ink/60">Gratuit et sans engagement. Réponse personnalisée.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Nom" htmlFor="nom" required>
          <input id="nom" name="nom" required autoComplete="family-name" className={fieldClass} />
        </Field>
        <Field label="Prénom" htmlFor="prenom" required>
          <input id="prenom" name="prenom" required autoComplete="given-name" className={fieldClass} />
        </Field>
        <Field label="E-mail" htmlFor="email" required>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </Field>
        <Field label="Téléphone" htmlFor="telephone">
          <input id="telephone" name="telephone" type="tel" autoComplete="tel" className={fieldClass} />
        </Field>
        <Field label="Type de bien" htmlFor="type" required>
          <select id="type" name="type" required defaultValue="" className={`${fieldClass} appearance-none`}>
            <option value="" disabled>
              Sélectionnez
            </option>
            {propertyOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Ville du bien" htmlFor="ville" required>
          <input id="ville" name="ville" required placeholder="Ex. Ambérieu-en-Bugey" className={fieldClass} />
        </Field>
        <Field label="Votre message" htmlFor="message" required className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Parlez-nous de votre logement et de vos attentes…"
            className={`${fieldClass} resize-none`}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-coral px-7 py-4 text-sm font-semibold text-forest-deep shadow-[0_12px_30px_-12px_rgba(253,139,123,0.9)] transition-all duration-300 hover:bg-coral-deep"
      >
        Demander une estimation
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-center text-xs text-ink/45">
        Vos données sont uniquement utilisées pour répondre à votre demande.
      </p>
    </form>
  );
}
