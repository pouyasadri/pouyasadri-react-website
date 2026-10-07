import type { ReactNode } from "react";
import "./globals.css";

/**
 * Root layout owns `<html>` / `<body>` so global CSS always attaches.
 * Locale `lang` is updated by `<HtmlLang />` in `app/[locale]/layout.tsx`.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
