import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { ContactForm } from "@/components/contact-form";
import { getSiteSettings } from "@/lib/content/settings";
import { SITE } from "@/lib/site";

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
    title: dict.contact.title,
    description: dict.contact.intro,
    pathWithoutLocale: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);
  const settings = await getSiteSettings();

  return (
    <section className="section">
      <h1>{dict.contact.title}</h1>
      <p className="muted">{dict.contact.intro}</p>
      <ContactForm dict={dict.contact} locale={locale} />
      <aside className="contact-aside">
        <p>
          {dict.contact.emailLabel}:{" "}
          <a href={`mailto:${settings.email}`}>{settings.email}</a>
        </p>
        <p>
          {dict.contact.phone}:{" "}
          <a href={SITE.phoneTel}>{settings.phoneDisplay}</a>
          {" · "}
          <a href={settings.whatsappUrl} rel="noopener noreferrer" target="_blank">
            WhatsApp
          </a>
        </p>
        <p>
          {dict.contact.location}: {settings.location}
        </p>
      </aside>
    </section>
  );
}
