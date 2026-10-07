/**
 * Canonical entity data — keep consistent across UI, metadata, and JSON-LD.
 */
export const SITE = {
  name: "Pouya Sadri",
  legalName: "Seyedpouya Sadrifard",
  brand: "Pouya Sadri",
  domain: "pouyasadri.com",
  url: "https://pouyasadri.com",
  email: "info@pouyasadri.com",
  /** Local FR display form from CV */
  phoneDisplay: "0768411196",
  /** E.164 for schema, tel:, and WhatsApp */
  phoneE164: "+33768411196",
  phoneTel: "tel:+33768411196",
  phoneWhatsApp: "https://wa.me/33768411196",
  phoneFormatted: "+33 7 68 41 11 96",
  location: {
    city: "Strasbourg",
    region: "Grand Est",
    country: "FR",
    countryName: "France",
  },
  sameAs: [
    "https://github.com/pouyasadri",
    "https://www.linkedin.com/in/pouyasadri",
  ],
  githubUser: "pouyasadri",
  jobTitle: "Senior freelance full-stack engineer",
  knowsAbout: [
    "Next.js",
    "NestJS",
    "TypeScript",
    "React",
    "Go",
    "Model Context Protocol",
    "Product platforms",
    "Full-stack engineering",
  ],
} as const;

export type Locale = "fr" | "en";

export const LOCALES: readonly Locale[] = ["fr", "en"] as const;
export const DEFAULT_LOCALE: Locale = "fr";
