import "server-only";

import seed from "../../../content/seed/writing.json";
import type { WritingPost } from "@/lib/content/types";
import { isSanityConfigured, sanityClient } from "@/lib/sanity/client";

const seedPosts = seed.posts as WritingPost[];

const POSTS_QUERY = `*[_type == "writingPost" && defined(slug)] | order(publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  body
}`;

const POST_BY_SLUG_QUERY = `*[_type == "writingPost" && slug.current == $slug][0] {
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  body
}`;

export async function getWritingPosts(): Promise<WritingPost[]> {
  if (isSanityConfigured() && sanityClient) {
    try {
      const remote = await sanityClient.fetch<WritingPost[]>(POSTS_QUERY);
      if (remote.length > 0) return remote;
    } catch {
      // fall through
    }
  }
  return seedPosts;
}

export async function getWritingPostBySlug(slug: string): Promise<WritingPost | undefined> {
  if (isSanityConfigured() && sanityClient) {
    try {
      const remote = await sanityClient.fetch<WritingPost | null>(POST_BY_SLUG_QUERY, { slug });
      if (remote) return remote;
    } catch {
      // fall through
    }
  }
  return seedPosts.find((p) => p.slug === slug);
}
