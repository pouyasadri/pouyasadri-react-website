import Link from "next/link";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getProjects, localize } from "@/lib/content/projects";
import { notFound } from "next/navigation";
import { SocialLinks } from "@/components/social-links";

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
      <section className="greet-main animate-fade-up" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <p className="greeting-text">{dict.home.headline}</p>
            <h2 className="greeting-nickname">( {dict.home.brand} )</h2>
            <p className="greeting-text-p subTitle">{dict.home.sub}</p>
            <SocialLinks />
            <div className="portfolio-repo-btn-div">
              <Link className="main-button" href={localePath(locale, "/contact")}>
                {dict.home.ctaPrimary}
              </Link>
              <Link className="main-button" href={localePath(locale, "/work")}>
                {dict.home.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="greeting-image-div">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/feelingProud.svg" alt="" width={520} height={420} />
          </div>
        </div>
      </section>

      <section className="page-section animate-fade-up-delay">
        <h2 className="page-heading" style={{ fontSize: "2.25rem", marginTop: "1rem" }}>
          {dict.home.proofTitle}
        </h2>
        <p className="page-sub">{dict.home.proofBody}</p>
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
