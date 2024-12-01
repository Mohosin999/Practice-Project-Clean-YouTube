import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

/**
 * Fetches all items from a YouTube playlist, including details such as ID, content, and snippet.
 * This function recursively retrieves all items, handling pagination using the pageToken.
 *
 * @param {string} playlistId - The ID of the YouTube playlist from which items are to be fetched.
 * @param {string} [pageToken=""] - The token used to retrieve the next set of results, default is an empty string for the first page.
 * @param {Array} [result=[]] - The array that accumulates the results across multiple pages.
 *
 * @returns {Array} - Returns an array of playlist items, each containing details like title, description, thumbnails, and content.
 */
const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?
key=${key}&part=id, contentDetails, snippet&maxResults=50&
playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];

  // If there are more pages of results, recursively fetch them.
  if (data.nextPageToken) {
    result = await getPlaylistItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

/**
 * Retrieves detailed information about a YouTube playlist, including the playlist's metadata and its items.
 * It calls the `getPlaylistItem` function to fetch all items in the playlist.
 *
 * @param {string} playlistId - The ID of the YouTube playlist to retrieve.
 *
 * @returns {Object} - Returns an object containing playlist details, including title, description, items, and channel info.
 */
const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?
part=snippet&id=${playlistId}&key=${key}`;

  const { data } = await axios.get(URL);
  let playlistItems = await getPlaylistItem(playlistId);

  const {
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelId,
    channelTitle,
  } = data?.items[0]?.snippet;

  // Format playlist items with relevant details.
  playlistItems = playlistItems.map((item) => {
    const {
      title,
      description,
      thumbnails: { medium },
    } = item.snippet;

    return {
      title,
      description,
      thumbnails: medium,
      contentDetails: item.contentDetails,
    };
  });

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
