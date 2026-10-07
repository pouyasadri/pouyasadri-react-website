import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getFaqItems } from "@/lib/content/faq";
import { localize } from "@/lib/content/projects";
import { JsonLd } from "@/components/json-ld";
import { faqPageJsonLd } from "@/lib/seo/json-ld";

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
    title: dict.faq.title,
    description: dict.faq.intro,
    pathWithoutLocale: "/faq",
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);
  const items = await getFaqItems();

  return (
    <section className="page-section faq animate-fade-up">
      <JsonLd data={faqPageJsonLd(items, locale)} />
      <div className="page-heading-row">
        <div>
          <h1 className="page-heading">{dict.faq.title}</h1>
          <p className="page-sub">{dict.faq.intro}</p>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/faq.svg" alt="" width={360} height={280} />
        </div>
      </div>
      {items.map((item) => (
        <details key={localize(item.question, locale)}>
          <summary>{localize(item.question, locale)}</summary>
          <p>{localize(item.answer, locale)}</p>
        </details>
      ))}
    </section>
  );
}
