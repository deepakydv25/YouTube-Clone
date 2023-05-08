const YOUTUBE_API_KEY = "AIzaSyCn0rVZgSult9LFjmb44Ogbm6ABe25JR-s";

export const OFFSET_LIVE_CHAT = 20;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULT_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_CHANNEL_ID =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";

export const YOUTUBE_ID_VIDEO =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUTUBE_API_KEY +
  "&id=";

export const RELATED_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=[VIDEO_ID]&maxResults=50&type=video&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_COMMENTS =
  "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=" +
  [YOUTUBE_API_KEY];

// UgzDE2tasfmrYLyNkGt4AaABAg
// UC2J_VKrAzOEJuQvFFtj3KUw;
