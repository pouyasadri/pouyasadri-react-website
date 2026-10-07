/**
 * Medium + YouTube surface hooks (out of scope for full ingestion this pass).
 *
 * - Never ship API keys to the browser.
 * - Prefer build-time or Route Handler fetch with env secrets.
 */

export type MediumItemStub = {
  title: string;
  url: string;
  publishedAt?: string;
};

export type YouTubeItemStub = {
  title: string;
  url: string;
  videoId: string;
};

/**
 * TODO: SSR/build-time Medium feed sync (replace former client rss2json).
 * Env: MEDIUM_USERNAME or MEDIUM_RSS_URL
 */
export async function getMediumItems(): Promise<MediumItemStub[]> {
  // Stub — return empty until ingestion is wired
  return [];
}

/**
 * TODO: SSR/build-time YouTube playlist/channel sync (replace client Data API + leaked key).
 * Env: YOUTUBE_API_KEY (server-only), YOUTUBE_CHANNEL_ID or YOUTUBE_PLAYLIST_ID
 * Rotate any previously committed YouTube API keys.
 */
export async function getYouTubeItems(): Promise<YouTubeItemStub[]> {
  // Stub — return empty until ingestion is wired
  return [];
}
