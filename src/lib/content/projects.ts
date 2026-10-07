import "server-only";

import seed from "../../../content/seed/projects.json";
import type { Locale } from "@/lib/i18n/config";
import type { ProjectCaseStudy } from "@/lib/content/types";
import { isSanityConfigured, sanityClient } from "@/lib/sanity/client";

const seedProjects = seed.projects as ProjectCaseStudy[];

/** GROQ stub — populate once Sanity project documents exist */
const PROJECTS_QUERY = `*[_type == "project"] | order(pinOrder asc) {
  slug,
  title,
  summary,
  githubUrl,
  homepage,
  language,
  topics,
  source,
  pinOrder,
  problem,
  approach,
  outcome
}`;

export async function getProjects(): Promise<ProjectCaseStudy[]> {
  if (isSanityConfigured() && sanityClient) {
    try {
      const remote = await sanityClient.fetch<ProjectCaseStudy[]>(PROJECTS_QUERY);
      if (remote.length > 0) return remote;
    } catch {
      // Fall back to GitHub-pin seed when Sanity is unreachable or empty
    }
  }
  return seedProjects;
}

export async function getProjectBySlug(slug: string): Promise<ProjectCaseStudy | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}

export function localize<T extends Record<Locale, string>>(
  value: T | undefined,
  locale: Locale,
  fallback = "",
): string {
  if (!value) return fallback;
  return value[locale] || value.fr || fallback;
}
