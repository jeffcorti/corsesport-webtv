import { ChatMessage, NewsItem, SiteSettings } from "@/lib/types";

export const defaultSettings: SiteSettings = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Corse Sport Diffusion",
  heroTitle: "Actualités, directs et communauté au même endroit",
  heroText:
    "Une base prête à déployer pour afficher tes actualités, tes lecteurs Facebook et YouTube, et un tchat intégré.",
  facebookEmbedUrl:
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&show_text=false",
  youtubeEmbedUrl: "https://www.youtube.com/embed/jfKfPfyJRdk",
  liveTitle: "Direct du jour",
  isLive: true,
  showFacebook: true,
  showYouTube: true,
};

export const defaultNews: NewsItem[] = [
  {
    id: "1",
    title: "Bienvenue sur le site",
    content: "Tu peux publier ici tes actualités, annonces de concours, résultats et partenariats.",
    createdAt: new Date().toISOString(),
    published: true,
  },
  {
    id: "2",
    title: "Page live prête",
    content: "La page live regroupe Facebook, YouTube et le tchat sur une seule interface.",
    createdAt: new Date().toISOString(),
    published: true,
  },
];

export const defaultChat: ChatMessage[] = [
  {
    id: "1",
    author: "Admin",
    message: "Bienvenue dans le tchat du live 👋",
    createdAt: new Date().toISOString(),
  },
];
