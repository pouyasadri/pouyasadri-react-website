import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HtmlLang } from "@/components/html-lang";
import { JsonLd } from "@/components/json-ld";
import { personJsonLd, professionalServiceJsonLd } from "@/lib/seo/json-ld";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw;
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: dict.meta.siteTitle,
      template: `%s · ${SITE.brand}`,
    },
    description: dict.meta.siteDescription,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);

  return (
    <>
      <HtmlLang lang={locale} />
      <JsonLd data={personJsonLd()} />
      <JsonLd data={professionalServiceJsonLd()} />
      <div className="site-shell">
        <SiteHeader locale={locale} dict={dict} />
        <main className="site-main">{children}</main>
        <SiteFooter dict={dict} locale={locale} />
      </div>
    </>
  );
}
