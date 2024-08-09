import { useState } from "react";
import getPlaylist from "../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorite: [],
  });

  const getPlaylistById = async (playlistId, force = false) => {
    // যদি এই playlistId টা state.playlists এর ভেতরে থাকে তবে আমরা আর নিচে যেতে দিবোনা
    if (state.playlists[playlistId] && !force) {
      return;
    }

    let result = await getPlaylist(playlistId);

    /**
     * cid = channelId, ct = channelTitle
     * এইগুলো সব জায়গায় একই থাকবে, তাই আলাদাভাবে কাজ করলাম
     */
    let cid, ct;

    // আমরা রেজাল্টে যেভাবে চাচ্ছি সেরকমভাবে সাজালাম
    result = result.map((item) => {
      const {
        channelId,
        title,
        description,
        thumbnails: { medium },
        channelTitle,
      } = item.snippet;

      /**
       * cid = channelId, ct = channelTitle
       * এইগুলো সব জায়গায় একই থাকবে, তাই আলাদাভাবে কাজ করলাম
       */
      if (!cid) {
        cid = channelId;
      }

      if (!ct) {
        ct = channelTitle;
      }

      // এইগুলো সব জায়গায় পরিবর্তন হবে, তাই রির্টান করলাম
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
