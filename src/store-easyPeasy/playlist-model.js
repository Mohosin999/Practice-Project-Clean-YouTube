import { action, thunk, persist } from "easy-peasy";
import getPlaylist from "../api";

const playlistModel = persist({
  data: {}, // As playlistModel will be an object, so data is an object here
  error: "",
  isLoading: false,

  // Action to add a playlist to the 'data' object
  addPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
  }),

  // Action to remove a playlist from the 'data' object by playlistId
  removePlaylist: action((state, payload) => {
    delete state.data[payload];
  }),

  // Action to set an error message
  setError: action((state, payload) => {
    state.error = payload;
  }),

  // Action to set loading state
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),

  /*
   * Thunk to fetch a playlist by playlistId.
   * 'getState' is used to check if the playlist already exists in the state.
   * 'payload' represents the playlistId.
   */
  getPlaylist: thunk(
    async ({ addPlaylist, setError, setLoading }, payload, { getState }) => {
      // Check if the playlist is already in the state
      if (getState().data[payload]) {
        return;
      }

      // Set loading to true before starting the API request
      setLoading(true);

      try {
        // Fetch playlist from API
        const playlist = await getPlaylist(payload);
        // Add the fetched playlist to the state
        addPlaylist(playlist);
      } catch (e) {
        setError(e.response?.data?.error?.message || "Something Went Wrong");
      } finally {
        setLoading(false);
      }
    }
  ),
});

export default playlistModel;
