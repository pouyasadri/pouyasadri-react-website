import "server-only";

import seed from "../../../content/seed/faq.json";
import type { FaqItem } from "@/lib/content/types";
import { getSanityClient, isSanityConfigured } from "@/lib/sanity/client";

const seedFaq = seed.items as FaqItem[];

const FAQ_QUERY = `*[_type == "faqItem"] | order(order asc) {
  question,
  answer
}`;

export async function getFaqItems(): Promise<FaqItem[]> {
  "use cache";

  if (isSanityConfigured()) {
    const client = getSanityClient();
    if (client) {
      try {
        const remote = await client.fetch<FaqItem[]>(FAQ_QUERY);
        if (remote.length > 0) return remote;
      } catch {
        // fall through to seed
      }
    }
  }

  return seedFaq;
}
