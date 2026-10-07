import Link from "next/link";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getProjects, localize } from "@/lib/content/projects";
import { notFound } from "next/navigation";

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
    title: dict.meta.siteTitle,
    description: dict.meta.siteDescription,
    pathWithoutLocale: "/",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);
  const projects = (await getProjects()).slice(0, 3);

  return (
    <>
      <section className="hero">
        <p className="hero__brand">{dict.home.brand}</p>
        <h1>{dict.home.headline}</h1>
        <p>{dict.home.sub}</p>
        <div className="cta-row">
          <Link className="btn btn--primary" href={localePath(locale, "/contact")}>
            {dict.home.ctaPrimary}
          </Link>
          <Link className="btn" href={localePath(locale, "/work")}>
            {dict.home.ctaSecondary}
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>{dict.home.proofTitle}</h2>
        <p className="muted">{dict.home.proofBody}</p>
        <ul className="list-plain">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link className="title" href={localePath(locale, `/work/${project.slug}`)}>
                {localize(project.title, locale)}
              </Link>
              <p className="muted">{localize(project.summary, locale)}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
