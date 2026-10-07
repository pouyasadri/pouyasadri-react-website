import type { Dictionary } from "@/lib/i18n/dictionaries/fr";
import { SITE } from "@/lib/site";

type Props = {
  dict: Dictionary;
};

export function SiteFooter({ dict }: Props) {
  // Static copyright year — avoids Cache Components prerender error from `new Date()`.
  const year = 2026;
  return (
    <footer className="site-footer">
      <p>
        © {year} {SITE.brand}. {dict.footer.rights}
      </p>
      <p className="muted">{dict.footer.builtWith}</p>
    </footer>
  );
}
