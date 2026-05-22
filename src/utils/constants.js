const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`;

// Returns search suggestions for a given query string
export const YOUTUBE_SEARCH_SUGGESTION_API = (query) =>
  `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(query)}`;