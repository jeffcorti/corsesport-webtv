export type SiteSettings = {
  siteName: string;
  heroTitle: string;
  heroText: string;
  facebookEmbedUrl: string;
  youtubeEmbedUrl: string;
  liveTitle: string;
  isLive: boolean;
  showFacebook: boolean;
  showYouTube: boolean;
};

export type NewsItem = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  published: boolean;
};

export type ChatMessage = {
  id: string;
  author: string;
  message: string;
  createdAt: string;
};
