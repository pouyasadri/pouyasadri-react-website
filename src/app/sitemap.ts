import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { LOCALES } from "@/lib/i18n/config";
import { getProjects } from "@/lib/content/projects";
import { getWritingPosts } from "@/lib/content/writing";

const staticPaths = ["", "/work", "/services", "/writing", "/about", "/faq", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const posts = await getWritingPosts();
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE.url}/${locale}${path}`,
        lastModified,
        alternates: {
          languages: {
            fr: `${SITE.url}/fr${path}`,
            en: `${SITE.url}/en${path}`,
          },
        },
      });
    }

    for (const project of projects) {
      const path = `/work/${project.slug}`;
      entries.push({
        url: `${SITE.url}/${locale}${path}`,
        lastModified,
        alternates: {
          languages: {
            fr: `${SITE.url}/fr${path}`,
            en: `${SITE.url}/en${path}`,
          },
        },
      });
    }

    for (const post of posts) {
      const path = `/writing/${post.slug}`;
      entries.push({
        url: `${SITE.url}/${locale}${path}`,
        lastModified,
        alternates: {
          languages: {
            fr: `${SITE.url}/fr${path}`,
            en: `${SITE.url}/en${path}`,
          },
        },
      });
    }
  }

  return entries;
}
