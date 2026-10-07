import { SITE } from "@/lib/site";
import type { FaqItem } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n/config";
import { localize } from "@/lib/content/projects";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    alternateName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneE164,
    jobTitle: SITE.jobTitle,
    knowsAbout: [...SITE.knowsAbout],
    sameAs: [...SITE.sameAs],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.country,
    },
  };
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE.brand} — Full-stack engineering`,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneE164,
    image: `${SITE.url}/icons/android-chrome-512x512.png`,
    areaServed: ["FR", "EU"],
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.location.city,
      addressRegion: SITE.location.region,
      addressCountry: SITE.location.country,
    },
    sameAs: [...SITE.sameAs],
    founder: {
      "@type": "Person",
      name: SITE.name,
      alternateName: SITE.legalName,
    },
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Product web platforms",
        description: "Next.js / NestJS / TypeScript product platforms — MVP to production",
      },
    },
  };
}

export function faqPageJsonLd(items: FaqItem[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: localize(item.question, locale),
      acceptedAnswer: {
        "@type": "Answer",
        text: localize(item.answer, locale),
      },
    })),
  };
}
