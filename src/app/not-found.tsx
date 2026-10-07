import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <main className="site-main">
          <h1>404</h1>
          <p className="muted">Page introuvable / Not found</p>
          <p>
            <Link href="/fr">Accueil FR</Link>
            {" · "}
            <Link href="/en">Home EN</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
