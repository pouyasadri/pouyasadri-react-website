import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getProjects, localize } from "@/lib/content/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return buildPageMetadata({
    locale: raw,
    title: dict.work.title,
    description: dict.work.intro,
    pathWithoutLocale: "/work",
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);
  const projects = await getProjects();

  return (
    <section className="section">
      <h1>{dict.work.title}</h1>
      <p className="muted">{dict.work.intro}</p>
      <p className="note">{dict.work.sourceNote}</p>
      <ul className="list-plain">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link className="title" href={localePath(locale, `/work/${project.slug}`)}>
              {localize(project.title, locale)}
            </Link>
            <p className="muted">{localize(project.summary, locale)}</p>
            <div className="stack-tags">
              {project.language ? <span>{project.language}</span> : null}
              {project.topics.slice(0, 4).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
