"use server";

export type ContactFormState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "todo"; message: string }
  | { status: "success"; message: string };

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Fixed contact fields: name, email, message (matches legacy form).
 *
 * Does NOT report fake success. Until an email provider is configured,
 * returns a clear TODO status.
 *
 * TODO: Wire CONTACT_EMAIL_PROVIDER (e.g. resend | formspree | nodemailer)
 * with CONTACT_TO_EMAIL / RESEND_API_KEY / etc. See .env.example.
 */
export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const locale = String(formData.get("locale") ?? "fr");
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message || !isValidEmail(email)) {
    return {
      status: "error",
      message:
        locale === "en"
          ? "Please provide a name, valid email, and message."
          : "Merci de renseigner nom, e-mail valide et message.",
    };
  }

  const provider = process.env.CONTACT_EMAIL_PROVIDER;

  if (!provider) {
    // Intentionally not success — avoid false confirmation.
    console.info("[contact] submission received (provider unset)", {
      name,
      email,
      messageLength: message.length,
    });
    return {
      status: "todo",
      message:
        locale === "en"
          ? "Email provider is not configured yet. TODO: set CONTACT_EMAIL_PROVIDER and provider credentials in env."
          : "Le fournisseur d’e-mail n’est pas encore configuré. TODO : définir CONTACT_EMAIL_PROVIDER et les credentials en env.",
    };
  }

  // Provider branch stub — implement when secrets exist.
  // Example: Resend, Formspree, SMTP.
  return {
    status: "todo",
    message: `CONTACT_EMAIL_PROVIDER=${provider} is set but not implemented yet. TODO: implement send in submitContact.`,
  };
}
