// lib/youtube.ts

export type YouTubeVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnail: string;
  liveBroadcastContent: "none" | "live" | "upcoming";
};

const API_KEY = process.env.YOUTUBE_API_KEY;
const HANDLE = process.env.YOUTUBE_HANDLE;

async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Erreur YouTube API: ${res.status}`);
  }

  return res.json();
}

async function getChannelIdFromHandle(handle: string): Promise<string | null> {
  if (!API_KEY) {
    throw new Error("YOUTUBE_API_KEY manquante dans .env.local");
  }

  const cleanHandle = handle.replace("@", "");

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(
    cleanHandle
  )}&maxResults=10&key=${API_KEY}`;

  const data = await fetchJson<{
    items?: Array<{
      snippet?: {
        customUrl?: string;
      };
      id?: {
        channelId?: string;
      };
    }>;
  }>(url);

  const exactMatch = data.items?.find((item) => {
    const customUrl = item.snippet?.customUrl?.toLowerCase();
    return customUrl === `@${cleanHandle.toLowerCase()}` || customUrl === cleanHandle.toLowerCase();
  });

  if (exactMatch?.id?.channelId) {
    return exactMatch.id.channelId;
  }

  return data.items?.[0]?.id?.channelId ?? null;
}

async function getUploadsPlaylistId(channelId: string): Promise<string | null> {
  if (!API_KEY) {
    throw new Error("YOUTUBE_API_KEY manquante dans .env.local");
  }

  const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`;

  const data = await fetchJson<{
    items?: Array<{
      contentDetails?: {
        relatedPlaylists?: {
          uploads?: string;
        };
      };
    }>;
  }>(url);

  return data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads ?? null;
}

export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  if (!API_KEY) {
    throw new Error("YOUTUBE_API_KEY manquante dans .env.local");
  }

  if (!HANDLE) {
    throw new Error("YOUTUBE_HANDLE manquant dans .env.local");
  }

  const channelId = await getChannelIdFromHandle(HANDLE);

  if (!channelId) {
    throw new Error("Impossible de trouver la chaîne YouTube.");
  }

  const uploadsPlaylistId = await getUploadsPlaylistId(channelId);

  if (!uploadsPlaylistId) {
    throw new Error("Impossible de trouver la playlist des vidéos.");
  }

  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=12&key=${API_KEY}`;

  const data = await fetchJson<{
    items?: Array<{
      snippet?: {
        title?: string;
        description?: string;
        publishedAt?: string;
        liveBroadcastContent?: "none" | "live" | "upcoming";
        resourceId?: {
          videoId?: string;
        };
        thumbnails?: {
          high?: { url?: string };
          medium?: { url?: string };
          default?: { url?: string };
        };
      };
    }>;
  }>(url);

  return (
    data.items?.map((item) => ({
      id: item.snippet?.resourceId?.videoId ?? "",
      title: item.snippet?.title ?? "Sans titre",
      description: item.snippet?.description ?? "",
      publishedAt: item.snippet?.publishedAt ?? "",
      thumbnail:
        item.snippet?.thumbnails?.high?.url ??
        item.snippet?.thumbnails?.medium?.url ??
        item.snippet?.thumbnails?.default?.url ??
        "",
      liveBroadcastContent: item.snippet?.liveBroadcastContent ?? "none",
    })) ?? []
  ).filter((video) => video.id);
}