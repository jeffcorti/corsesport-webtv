"use client";

import { defaultChat, defaultNews, defaultSettings } from "@/lib/defaults";
import { ChatMessage, NewsItem, SiteSettings } from "@/lib/types";

const SETTINGS_KEY = "webtv_settings";
const NEWS_KEY = "webtv_news";
const CHAT_KEY = "webtv_chat";

export function loadSettings(): SiteSettings {
  if (typeof window === "undefined") return defaultSettings;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? { ...defaultSettings, ...JSON.parse(raw) } : defaultSettings;
  } catch {
    return defaultSettings;
  }
}

export function saveSettings(settings: SiteSettings) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function loadNews(): NewsItem[] {
  if (typeof window === "undefined") return defaultNews;
  try {
    const raw = localStorage.getItem(NEWS_KEY);
    return raw ? JSON.parse(raw) : defaultNews;
  } catch {
    return defaultNews;
  }
}

export function saveNews(news: NewsItem[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(NEWS_KEY, JSON.stringify(news));
}

export function loadChat(): ChatMessage[] {
  if (typeof window === "undefined") return defaultChat;
  try {
    const raw = localStorage.getItem(CHAT_KEY);
    return raw ? JSON.parse(raw) : defaultChat;
  } catch {
    return defaultChat;
  }
}

export function saveChat(chat: ChatMessage[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CHAT_KEY, JSON.stringify(chat));
}
