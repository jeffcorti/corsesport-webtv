export type YouTubeVideo = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  liveBroadcastContent: "none" | "live" | "upcoming";
};

const API_KEY = process.env.YOUTUBE_API_KEY;
const HANDLE = process.env.YOUTUBE_HANDLE;

async function fetchJson(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text();
    console.error("Erreur API YouTube :", res.status, text);
    return null;
  }

  return res.json();
}

async function getChannelId() {
  if (!API_KEY || !HANDLE) {
    console.error("YOUTUBE_API_KEY ou YOUTUBE_HANDLE manquant");
    return null;
  }

  const handle = HANDLE.replace("@", "");

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(
    handle
  )}&maxResults=10&key=${API_KEY}`;

  const data = await fetchJson(url);

  if (!data || !data.items || !Array.isArray(data.items) || data.items.length === 0) {
    return null;
  }

  return data.items[0]?.id?.channelId ?? null;
}

export async function getYouTubeVideos(): Promise<YouTubeVideo[]> {
  try {
    if (!API_KEY) {
      console.error("YOUTUBE_API_KEY manquante");
      return [];
    }

    const channelId = await getChannelId();

    if (!channelId) {
      console.error("Impossible de trouver la chaîne YouTube");
      return [];
    }

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=12&order=date&type=video&key=${API_KEY}`;

    const data = await fetchJson(url);

    if (!data || !data.items || !Array.isArray(data.items)) {
      return [];
    }

    return data.items
      .map((item: any) => ({
        id: item?.id?.videoId ?? "",
        title: item?.snippet?.title ?? "Vidéo",
        thumbnail:
          item?.snippet?.thumbnails?.high?.url ??
          item?.snippet?.thumbnails?.medium?.url ??
          item?.snippet?.thumbnails?.default?.url ??
          "",
        publishedAt: item?.snippet?.publishedAt ?? "",
        liveBroadcastContent: item?.snippet?.liveBroadcastContent ?? "none",
      }))
      .filter((video: YouTubeVideo) => video.id && video.thumbnail);
  } catch (error) {
    console.error("Erreur getYouTubeVideos :", error);
    return [];
  }
}