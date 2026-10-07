import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getWritingPostBySlug, getWritingPosts } from "@/lib/content/writing";
import { localize } from "@/lib/content/projects";

export async function generateStaticParams() {
  const posts = await getWritingPosts();
  const locales: Locale[] = ["fr", "en"];
  return locales.flatMap((locale) => posts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};
  const post = await getWritingPostBySlug(slug);
  if (!post) return {};
  return buildPageMetadata({
    locale: raw,
    title: localize(post.title, raw),
    description: localize(post.excerpt, raw),
    pathWithoutLocale: `/writing/${slug}`,
  });
}

export default async function WritingPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);
  const post = await getWritingPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="section prose-block">
      <p className="muted">
        <Link href={localePath(locale, "/writing")}>{dict.writing.title}</Link>
      </p>
      <h1>{localize(post.title, locale)}</h1>
      {post.publishedAt ? <p className="muted">{post.publishedAt}</p> : null}
      <p>{localize(post.excerpt, locale)}</p>
      {post.body ? <p>{localize(post.body, locale)}</p> : null}
    </article>
  );
}
