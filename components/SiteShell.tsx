import Link from "next/link";
import { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <p className="brand">Corse Sport Diffusion</p>
            <p className="subbrand">Site WebTV prêt à déployer</p>
          </div>
          <nav className="nav">
            <Link href="/">Accueil</Link>
            <Link href="/live">Live</Link>
            <Link href="/admin">Admin</Link>
          </nav>
        </div>
      </header>
      <main className="container main-content">{children}</main>
    </div>
  );
}
