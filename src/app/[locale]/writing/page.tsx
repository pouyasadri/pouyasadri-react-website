import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/lib/i18n/config";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getWritingPosts } from "@/lib/content/writing";
import { localize } from "@/lib/content/projects";
import { getMediumItems, getYouTubeItems } from "@/lib/content/media";

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
    title: dict.writing.title,
    description: dict.writing.intro,
    pathWithoutLocale: "/writing",
  });
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);
  const posts = await getWritingPosts();
  const medium = await getMediumItems();
  const youtube = await getYouTubeItems();

  return (
    <section className="section">
      <h1>{dict.writing.title}</h1>
      <p className="muted">{dict.writing.intro}</p>

      {posts.length === 0 ? (
        <p className="note">{dict.writing.empty}</p>
      ) : (
        <ul className="list-plain">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link className="title" href={localePath(locale, `/writing/${post.slug}`)}>
                {localize(post.title, locale)}
              </Link>
              <p className="muted">{localize(post.excerpt, locale)}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="note">
        <p>{dict.writing.mediumTodo}</p>
        <p>Medium items loaded: {medium.length}</p>
        <p>{dict.writing.youtubeTodo}</p>
        <p>YouTube items loaded: {youtube.length}</p>
      </div>
    </section>
  );
}
