import Image from "next/image";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";
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
    title: dict.about.title,
    description: dict.about.body[0] ?? dict.meta.siteDescription,
    pathWithoutLocale: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = await getDictionary(raw);

  return (
    <section className="page-section animate-fade-up">
      <div className="page-heading-row">
        <div className="prose-block" style={{ margin: 0 }}>
          <h1 className="page-heading" style={{ textAlign: "left", marginTop: 0 }}>
            {dict.about.title}
          </h1>
          {dict.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <SocialLinks />
        </div>
        <div>
          <Image
            src="/images/pouyasadri_image.png"
            alt="Pouya Sadri"
            width={360}
            height={360}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
