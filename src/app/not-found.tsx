import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-main">
      <div className="page-section">
        <h1 className="page-heading">404</h1>
        <p className="page-sub">Page introuvable / Not found</p>
        <p style={{ textAlign: "center" }}>
          <Link className="main-button" href="/fr">
            Accueil FR
          </Link>{" "}
          <Link className="main-button" href="/en">
            Home EN
          </Link>
        </p>
      </div>
    </main>
  );
}
