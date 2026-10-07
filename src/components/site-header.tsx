"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";
import { SITE } from "@/lib/site";

const navKeys = [
  ["home", ""],
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
  const pathname = usePathname();

  return (
    <header className="header animate-fade-down">
      <Link href={localePath(locale)} className="logo" aria-label={SITE.brand}>
        <span>&lt;</span>
        <span className="logo-name">{SITE.brand}</span>
        <span>/&gt;</span>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn" aria-label="Menu">
        <span className="navicon" />
      </label>
      <ul className="menu">
        {navKeys.map(([key, path]) => {
          const href = localePath(locale, path ? `/${path}` : "");
          const active =
            path === ""
              ? pathname === href || pathname === `/${locale}`
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={key}>
              <Link href={href} className={active ? "is-active" : undefined}>
                {key === "home" ? dict.nav.home : dict.nav[key]}
              </Link>
            </li>
          );
        })}
        <li>
          <Link href={localePath(other)} hrefLang={other} className="locale-switch">
            {other.toUpperCase()}
          </Link>
        </li>
      </ul>
    </header>
  );
}
