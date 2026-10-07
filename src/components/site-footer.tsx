import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/config";
import { SITE } from "@/lib/site";

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export function SiteFooter({ dict, locale }: Props) {
  return (
    <div className="footer-div">
      <p className="footer-text">
        Made with <span aria-hidden="true">❤️</span> by{" "}
        <Link href={localePath(locale, "/contact")}>{SITE.brand}</Link>
      </p>
      <p className="footer-meta">
        © 2026 {SITE.brand}. {dict.footer.rights}
      </p>
    </div>
  );
}
