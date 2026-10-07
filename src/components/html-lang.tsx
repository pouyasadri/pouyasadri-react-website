"use client";

import { useEffect } from "react";

/** Keeps `<html lang>` in sync when locale lives under `[locale]` (root layout owns html/body for CSS). */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
