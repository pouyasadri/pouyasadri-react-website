import { createClient, type SanityClient } from "next-sanity";

/**
 * Lazy Sanity client — avoid module-level createClient side effects during prerender.
 * Env is read when first needed (inside `"use cache"` loaders).
 */
export function isSanityConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET,
  );
}

let cachedClient: SanityClient | null | undefined;

export function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) return null;
  if (cachedClient !== undefined) return cachedClient;

  cachedClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01",
    useCdn: true,
    token: process.env.SANITY_API_READ_TOKEN,
  });

  return cachedClient;
}
