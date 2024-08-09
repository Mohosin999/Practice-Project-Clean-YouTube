import { useState } from "react";
import getPlaylist from "../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorite: [],
  });

  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    let result = await getPlaylist(playlistId);

    /**
     * Let's define a channelId and channelTitle
     * They will be same everywhere, so defined separately
     */
    let cid, ct;

    // Let's customize the result like us
    result = result.map((item) => {
      // Destructuring the snippet object
      const {
        channelId,
        title,
        description,
        thumbnails: { medium },
        channelTitle,
      } = item.snippet;

      // These (cid, ct) will be same everywhere, so worked separately
      if (!cid) {
        cid = channelId;
      }

      if (!ct) {
        ct = channelTitle;
      }

      // These will change everywhere, so returned
      return {
        title,
        description,
        thumbnails: medium,
        contentDetails: item.contentDetails,
      };
    });

    // result এর মধ্যে কিন্তু cid এবং ct থাকছে না, তাই আমরা state এর ভেতর playlists এ তা
    // রাখব
    setState((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistId]: {
          items: result,
          playlistId: playlistId,
          channelId: cid,
          channelTitle: ct,
        },
      },
    }));
  };

  /**
   * Add to recentPlaylists
   * @param {string} playlistId - you must give playlistId as a string
   */
  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  /**
   * Add to favorite
   * @param {string} playlistId - you must give playlistId as a string
   */
  const addToFavorite = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorite: [...prev, playlistId],
    }));
  };

  const getPlaylistsByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
    favorite: getPlaylistsByIds(state.favorite),
    getPlaylistById,
    addToRecent,
    addToFavorite,
  };
};

export default usePlaylists;
