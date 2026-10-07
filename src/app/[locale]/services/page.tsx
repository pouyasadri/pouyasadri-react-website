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
    <section className="section">
      <h1>{dict.services.title}</h1>
      <p className="muted">{dict.services.intro}</p>
      <div className="list-plain">
        <div>
          <h2>{dict.services.lead.title}</h2>
          <p className="muted">{dict.services.lead.body}</p>
        </div>
        {dict.services.supporting.map((item) => (
          <div key={item.title}>
            <h2>{item.title}</h2>
            <p className="muted">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
