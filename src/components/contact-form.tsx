"use client";

import { useActionState } from "react";
import {
  submitContact,
  type ContactFormState,
} from "@/app/[locale]/contact/actions";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

type Props = {
  dict: Dictionary["contact"];
  locale: string;
};

const initial: ContactFormState = { status: "idle" };

export function ContactForm({ dict, locale }: Props) {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  return (
    <form action={formAction} className="contact-form" noValidate>
      <input type="hidden" name="locale" value={locale} />

      <label htmlFor="name">
        {dict.name}
        <input id="name" name="name" type="text" required autoComplete="name" />
      </label>

      <label htmlFor="email">
        {dict.email}
        <input id="email" name="email" type="email" required autoComplete="email" />
      </label>

      <label htmlFor="message">
        {dict.message}
        <textarea id="message" name="message" rows={6} required />
      </label>

      <button className="main-button" type="submit" disabled={pending}>
        {dict.submit}
      </button>

      {state.status === "error" ? (
        <p className="form-status form-status--error" role="alert">
          {state.message}
        </p>
      ) : null}

      {state.status === "todo" ? (
        <p className="form-status form-status--todo" role="status">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
