import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";

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
    title: dict.services.title,
    description: dict.services.intro,
    pathWithoutLocale: "/services",
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = await getDictionary(raw);

  return (
    <section className="page-section animate-fade-up">
      <h1 className="page-heading">{dict.services.title}</h1>
      <p className="page-sub">{dict.services.intro}</p>
      <ul className="list-plain">
        <li>
          <p className="title" style={{ margin: 0 }}>
            {dict.services.lead.title}
          </p>
          <p className="muted">{dict.services.lead.body}</p>
        </li>
        {dict.services.supporting.map((item) => (
          <li key={item.title}>
            <p className="title" style={{ margin: 0 }}>
              {item.title}
            </p>
            <p className="muted">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
