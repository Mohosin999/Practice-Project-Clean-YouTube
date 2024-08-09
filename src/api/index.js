import axios from "axios";

// Access the API key from the .env file
const key = import.meta.env.VITE_YOUTUBE_API_KEY;
console.log("api key ->", key);

const getPlaylist = async (playlistId, pageToken = "", result = []) => {
  // If we pass pageToken as an empty string, it'll still load the first page
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  // Update the result with new items
  result = [...result, ...data.items];

  // If next page token exist, then this function will call again
  if (data.nextPageToken) {
    result = await getPlaylist(playlistId, data.nextPageToken, result);
  }

  return result;
};

export default getPlaylist;
