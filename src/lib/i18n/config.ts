import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/site";

export { DEFAULT_LOCALE, LOCALES, type Locale };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localePath(locale: Locale, path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const clean = normalized === "/" ? "" : normalized;
  return `/${locale}${clean}`;
}

/** Alternate language URLs for hreflang / metadata.alternates.languages */
export function alternateLanguageUrls(pathWithoutLocale: string): Record<Locale, string> {
  const path =
    pathWithoutLocale === "/" || pathWithoutLocale === ""
      ? ""
      : pathWithoutLocale.startsWith("/")
        ? pathWithoutLocale
        : `/${pathWithoutLocale}`;

  return {
    fr: `/fr${path}`,
    en: `/en${path}`,
  };
}
