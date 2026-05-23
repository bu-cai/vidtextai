import { VideoInfo } from '@/types'

export async function getVideoInfo(videoId: string): Promise<VideoInfo> {
  const apiKey = process.env.YOUTUBE_API_KEY

  if (apiKey) {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    const data = await res.json()

    if (data.items?.length > 0) {
      const item = data.items[0]
      const snippet = item.snippet
      const stats = item.statistics

      return {
        videoId,
        title: snippet.title,
        channelName: snippet.channelTitle,
        channelId: snippet.channelId,
        publishedAt: snippet.publishedAt,
        duration: item.contentDetails.duration,
        thumbnailUrl:
          snippet.thumbnails?.maxres?.url ||
          snippet.thumbnails?.high?.url ||
          snippet.thumbnails?.medium?.url ||
          `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        description: snippet.description,
        viewCount: stats?.viewCount,
      }
    }
  }

  // Fallback: minimal info from oEmbed
  try {
    const oembedUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
    const res = await fetch(oembedUrl, {
      signal: AbortSignal.timeout(8_000),
      next: { revalidate: 3600 },
    })
    const data = await res.json()
    return {
      videoId,
      title: data.title || 'Unknown Title',
      channelName: data.author_name || 'Unknown Channel',
      channelId: '',
      publishedAt: new Date().toISOString(),
      duration: '',
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      description: '',
    }
  } catch {
    return {
      videoId,
      title: `YouTube Video ${videoId}`,
      channelName: 'Unknown',
      channelId: '',
      publishedAt: new Date().toISOString(),
      duration: '',
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      description: '',
    }
  }
}
