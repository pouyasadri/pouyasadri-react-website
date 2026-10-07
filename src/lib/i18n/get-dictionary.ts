import "server-only";

import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("@/lib/i18n/dictionaries/fr").then((m) => m.default),
  en: () => import("@/lib/i18n/dictionaries/en").then((m) => m.default),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (!isLocale(locale)) notFound();
  return dictionaries[locale]();
}

export { isLocale as hasLocale };
