import axios from "axios";

const key = import.meta.env.VITE_YOUTUBE_API_KEY;

/**
 * This function is for a single video of playlist
 * @param {string} playlistId - playlistId will be a string
 * @param {string} pageToken - pageToken will be a string
 * @param {Array} result - result will be an array
 * @returns {Array} - Array
 */
const getPlaylistItem = async (playlistId, pageToken = "", result = []) => {
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?
key=${key}&part=id, contentDetails, snippet&maxResults=50&
playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = await getPlaylistItem(playlistId, data.nextPageToken, result);
  }

  return result;
};

/**
 * This function is for Playlist
 * @param {string} playlistId - playlistId will be a string
 * @returns {Object} - Object
 */
const getPlaylist = async (playlistId) => {
  const URL = `https://youtube.googleapis.com/youtube/v3/playlists?
part=snippet&id=${playlistId}&key=${key}`;

  const { data } = await axios.get(URL);
  let playlistItems = await getPlaylistItem(playlistId);

  // Destructuring informations for a playlist
  const {
    title: playlistTitle,
    description: playlistDescription,
    thumbnails,
    channelId,
    channelTitle,
  } = data?.items[0]?.snippet;

  // Modify playlistItems for a single video
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
