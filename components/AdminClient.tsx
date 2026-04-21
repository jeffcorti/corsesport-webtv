"use client";

import { FormEvent, useEffect, useState } from "react";
import { defaultNews, defaultSettings } from "@/lib/defaults";
import { loadNews, loadSettings, saveNews, saveSettings } from "@/lib/storage";
import { NewsItem, SiteSettings } from "@/lib/types";

export function AdminClient() {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [news, setNews] = useState<NewsItem[]>(defaultNews);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    setSettings(loadSettings());
    setNews(loadNews());
  }, []);

  const handleSaveSettings = () => {
    saveSettings(settings);
    setNotice("Réglages enregistrés.");
  };

  const handleAddNews = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    const next: NewsItem[] = [
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        content: content.trim(),
        createdAt: new Date().toISOString(),
        published: true,
      },
      ...news,
    ];
    setNews(next);
    saveNews(next);
    setTitle("");
    setContent("");
    setNotice("Actualité publiée.");
  };

  return (
    <div className="admin-grid">
      <section className="card stack-gap">
        <div className="section-head">
          <h1>Admin</h1>
          <p>Tu modifies ici les textes, les lecteurs et le statut du live.</p>
        </div>

        <label>
          <span>Nom du site</span>
          <input value={settings.siteName} onChange={(e) => setSettings({ ...settings, siteName: e.target.value })} />
        </label>
        <label>
          <span>Titre d’accueil</span>
          <input value={settings.heroTitle} onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })} />
        </label>
        <label>
          <span>Texte d’accueil</span>
          <textarea rows={4} value={settings.heroText} onChange={(e) => setSettings({ ...settings, heroText: e.target.value })} />
        </label>
        <label>
          <span>Titre du live</span>
          <input value={settings.liveTitle} onChange={(e) => setSettings({ ...settings, liveTitle: e.target.value })} />
        </label>
        <label>
          <span>Embed Facebook</span>
          <input value={settings.facebookEmbedUrl} onChange={(e) => setSettings({ ...settings, facebookEmbedUrl: e.target.value })} />
        </label>
        <label>
          <span>Embed YouTube</span>
          <input value={settings.youtubeEmbedUrl} onChange={(e) => setSettings({ ...settings, youtubeEmbedUrl: e.target.value })} />
        </label>

        <div className="switch-row">
          <label className="check"><input type="checkbox" checked={settings.isLive} onChange={(e) => setSettings({ ...settings, isLive: e.target.checked })} /> Live actif</label>
          <label className="check"><input type="checkbox" checked={settings.showFacebook} onChange={(e) => setSettings({ ...settings, showFacebook: e.target.checked })} /> Afficher Facebook</label>
          <label className="check"><input type="checkbox" checked={settings.showYouTube} onChange={(e) => setSettings({ ...settings, showYouTube: e.target.checked })} /> Afficher YouTube</label>
        </div>

        <button className="button primary" onClick={handleSaveSettings}>Enregistrer les réglages</button>
        {notice ? <p className="notice">{notice}</p> : null}
      </section>

      <section className="card stack-gap">
        <div className="section-head">
          <h2>Publier une actualité</h2>
          <p>Elle apparaîtra sur la page d’accueil.</p>
        </div>
        <form className="stack-gap" onSubmit={handleAddNews}>
          <input placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea rows={5} placeholder="Contenu" value={content} onChange={(e) => setContent(e.target.value)} />
          <button className="button secondary" type="submit">Publier</button>
        </form>

        <div className="stack-gap">
          {news.map((item) => (
            <article className="mini-card" key={item.id}>
              <strong>{item.title}</strong>
              <p>{item.content}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
