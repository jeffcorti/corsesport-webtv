"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { defaultNews, defaultSettings } from "@/lib/defaults";
import { loadNews, loadSettings } from "@/lib/storage";
import { NewsItem, SiteSettings } from "@/lib/types";

export function HomeClient() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [news, setNews] = useState<NewsItem[]>(defaultNews);

  useEffect(() => {
    setSettings(loadSettings());
    setNews(loadNews());
  }, []);

  return (
    <>
      <section className="hero grid-2">
        <div className="card hero-card">
          <span className="pill">WebTV pétanque</span>
          <h1>{settings.heroTitle}</h1>
          <p>{settings.heroText}</p>
          <div className="button-row">
            <Link href="/live" className="button primary">Voir la page live</Link>
            <Link href="/admin" className="button secondary">Ouvrir l’admin</Link>
          </div>
        </div>
        <div className="card">
          <h2>Le site contient déjà</h2>
          <ul className="clean-list">
            <li>Une page d’accueil</li>
            <li>Une page live avec 2 lecteurs</li>
            <li>Un tchat intégré</li>
            <li>Une page admin</li>
            <li>Une base prête pour Supabase</li>
          </ul>
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2>Actualités</h2>
          <p>Ces contenus se modifient depuis la page admin.</p>
        </div>
        <div className="cards-grid">
          {news.filter((item) => item.published).map((item) => (
            <article className="card" key={item.id}>
              <div className="meta">Publié</div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
