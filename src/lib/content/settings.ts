import "server-only";

import { SITE } from "@/lib/site";
import type { SiteSettings } from "@/lib/content/types";
import { isSanityConfigured, sanityClient } from "@/lib/sanity/client";

const SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  email,
  phoneE164,
  phoneDisplay,
  whatsappUrl,
  location,
  socials
}`;

const defaults: SiteSettings = {
  email: SITE.email,
  phoneE164: SITE.phoneE164,
  phoneDisplay: SITE.phoneFormatted,
  whatsappUrl: SITE.phoneWhatsApp,
  location: `${SITE.location.city}, ${SITE.location.countryName}`,
  socials: {
    github: SITE.sameAs[0],
    linkedin: SITE.sameAs[1],
  },
};

export async function getSiteSettings(): Promise<SiteSettings> {
  if (isSanityConfigured() && sanityClient) {
    try {
      const remote = await sanityClient.fetch<SiteSettings | null>(SETTINGS_QUERY);
      if (remote) {
        return {
          ...defaults,
          ...remote,
          socials: { ...defaults.socials, ...remote.socials },
        };
      }
    } catch {
      // fall through
    }
  }
  return defaults;
}
