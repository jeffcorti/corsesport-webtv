export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const handle = process.env.YOUTUBE_HANDLE;

  if (!apiKey || !handle) {
    return Response.json({ live: false });
  }

  try {
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${encodeURIComponent(handle)}&key=${apiKey}`,
      { cache: "no-store" }
    );

    const channelData = await channelRes.json();
    const channelId = channelData?.items?.[0]?.id;

    if (!channelId) {
      return Response.json({ live: false });
    }

    const liveRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`,
      { cache: "no-store" }
    );

    const liveData = await liveRes.json();
    const videoId = liveData?.items?.[0]?.id?.videoId;

    if (!videoId) {
      return Response.json({ live: false });
    }

    return Response.json({
      live: true,
      embedUrl: `https://www.youtube.com/embed/${videoId}`,
    });
  } catch (e) {
    return Response.json({ live: false });
  }
}