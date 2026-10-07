import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { alternateLanguageUrls, type Locale } from "@/lib/i18n/config";

type BuildMetaInput = {
  locale: Locale;
  title: string;
  description: string;
  pathWithoutLocale: string;
};

export function buildPageMetadata({
  locale,
  title,
  description,
  pathWithoutLocale,
}: BuildMetaInput): Metadata {
  const alternates = alternateLanguageUrls(pathWithoutLocale);
  const canonicalPath = alternates[locale];
  const canonical = `${SITE.url}${canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fr: `${SITE.url}${alternates.fr}`,
        en: `${SITE.url}${alternates.en}`,
        "x-default": `${SITE.url}${alternates.fr}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.brand,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}
