import type { ReactNode } from "react";
import "./globals.css";

/**
 * Root passthrough — locale-specific `<html lang>` lives in `app/[locale]/layout.tsx`.
 * Required by the App Router even when the real chrome is under `[locale]`.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
