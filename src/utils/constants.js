const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3";

export const YOUTUBE_VIDEOS_API =
  `${YOUTUBE_API_BASE}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`;

// Full details (snippet + statistics) for a single video id
export const YOUTUBE_VIDEO_DETAILS_API = (videoId) =>
  `${YOUTUBE_API_BASE}/videos?part=snippet,statistics&id=${encodeURIComponent(videoId)}&key=${API_KEY}`;

// Keyword search — returns snippets only (no statistics)
export const YOUTUBE_SEARCH_API = (query) =>
  `${YOUTUBE_API_BASE}/search?part=snippet&type=video&maxResults=20&q=${encodeURIComponent(query)}&key=${API_KEY}`;

// Top-level comment threads (with replies) for a video
export const YOUTUBE_COMMENTS_API = (videoId) =>
  `${YOUTUBE_API_BASE}/commentThreads?part=snippet,replies&maxResults=25&order=relevance&videoId=${encodeURIComponent(videoId)}&key=${API_KEY}`;

// Returns search suggestions for a given query string.
// NOTE: this Google endpoint does not send CORS headers, so it must be
// consumed via JSONP (see utils/jsonp.js) rather than fetch().
export const YOUTUBE_SEARCH_SUGGESTION_API = (query, callbackName) =>
  `https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${encodeURIComponent(query)}&jsonp=${callbackName}`;
