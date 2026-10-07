import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getProjectBySlug, getProjects, localize } from "@/lib/content/projects";

export async function generateStaticParams() {
  const projects = await getProjects();
  const locales: Locale[] = ["fr", "en"];
  return locales.flatMap((locale) =>
    projects.map((project) => ({ locale, slug: project.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return buildPageMetadata({
    locale: raw,
    title: localize(project.title, raw),
    description: localize(project.summary, raw),
    pathWithoutLocale: `/work/${slug}`,
  });
}

export default async function WorkCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="section prose-block">
      <p className="muted">
        <Link href={localePath(locale, "/work")}>{dict.work.title}</Link>
      </p>
      <h1>{localize(project.title, locale)}</h1>
      <p>{localize(project.summary, locale)}</p>
      <div className="stack-tags">
        {project.language ? <span>{project.language}</span> : null}
        {project.topics.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <p>
        <a href={project.githubUrl} rel="noopener noreferrer" target="_blank">
          {dict.work.github}
        </a>
      </p>
      <h2>{dict.work.problem}</h2>
      <p className="muted">{localize(project.problem, locale, dict.work.stubProblem)}</p>
      <h2>{dict.work.approach}</h2>
      <p className="muted">{localize(project.approach, locale, dict.work.stubApproach)}</p>
      <h2>{dict.work.outcome}</h2>
      <p className="muted">{localize(project.outcome, locale, dict.work.stubOutcome)}</p>
      <p className="note">{dict.work.sourceNote}</p>
    </article>
  );
}
