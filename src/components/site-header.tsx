import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";
import { SITE } from "@/lib/site";

const navKeys = [
  ["work", "work"],
  ["services", "services"],
  ["writing", "writing"],
  ["about", "about"],
  ["faq", "faq"],
  ["contact", "contact"],
] as const;

type Props = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeader({ locale, dict }: Props) {
  const other: Locale = locale === "fr" ? "en" : "fr";

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href={localePath(locale)} className="site-brand">
          {SITE.brand}
        </Link>
        <nav className="site-nav" aria-label="Main">
          {navKeys.map(([key, path]) => (
            <Link key={key} href={localePath(locale, `/${path}`)}>
              {dict.nav[key]}
            </Link>
          ))}
          <Link href={localePath(other)} className="locale-switch" hrefLang={other}>
            {other.toUpperCase()}
          </Link>
        </nav>
      </div>
    </header>
  );
}
