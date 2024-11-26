import axios from "axios";

// Extracting the YouTube API key from environment variables
// const key = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const key = "AIzaSyAp6cLQglG_DwLRGljZ20YHs3H9ncUqDLY";
console.log("api key form api index file -> ", key);

/**
 * Fetches all items from a YouTube playlist using the YouTube Data API.
 * Handles pagination by recursively fetching subsequent pages.
 *
 * @param {string} playlistId - The ID of the YouTube playlist.
 * @param {string} [pageToken=""] - Token for fetching the next page (default is empty).
 * @param {Array} [result=[]] - Accumulator for storing fetched playlist items.
 * @returns {Promise<Array>} - A promise that resolves to an array of all playlist items.
 */
const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  // Constructing the API request URL
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?
  key=${key}&part=id, contentDetails, snippet&maxResults=50&
  playlistId=${playlistId}&pageToken=${pageToken}`;

  // Making the API request and destructuring the response to get 'data'
  const { data } = await axios.get(URL);

  // Adding the fetched items to the result array
  result = [...result, ...data.items];

  // Checking if there is a next page and recursively fetching it
  if (data?.nextPageToken) {
    result = await getPlaylistItem(playlistId, data.nextPageToken, result);
  }

  // Returning the final list of playlist items
  return result;
};

/**
 * Fetches detailed information about a YouTube playlist, including its metadata
 * and all associated video items, using the YouTube Data API.
 *
 * @param {string} playlistId - The ID of the YouTube playlist to fetch.
 * @returns {Promise<Object>} - An object containing playlist metadata and video details.
 */
const getPlaylist = async (playlistId) => {
  // Constructing the API URL to fetch playlist metadata
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

  // Making an API call to fetch the playlist metadata
  const { data } = await axios.get(URL);
  // Fetching all items (videos) in the playlist using a helper function
  let playlistItems = await getPlaylistItem(playlistId);

  // Destructuring the playlist metadata (title, description, thumbnails, etc.)
  const {
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelId,
    channelTitle,
  } = data?.items[0]?.snippet; // this informations for Playlist

  // Mapping over each video item in the playlist to extract necessary details
  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet; // this informations for every single video

    return {
      title,
      description,
      thumbnails: medium,
      contentDetails: item.contentDetails,
    };
  });

  // Returning the final object containing playlist metadata and video items
  return {
    playlistId,
    playlistTitle,
    playlistDescription,
    playlistItems,
    playlistThumbnail: thumbnails.default,
    channelId,
    channelTitle,
  };
};

export default getPlaylist;
