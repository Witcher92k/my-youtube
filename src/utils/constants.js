const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=IN&key=${API_KEY}`;