import { action, thunk, persist } from "easy-peasy";
import getPlaylist from "../api";

const playlistModel = persist({
  // As playlistModel will be an object, so data is an object here
  data: {},
  error: "",
  isLoading: false,
  // Now we create some actions
  addPlaylist: action((state, payload) => {
    state.data[payload.playlistId] = payload;
  }),
  removePlaylist: action((state, payload) => {
    delete state.data[payload];
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  setLoading: action((state, payload) => {
    state.isLoading = payload;
  }),
  // Now we create a thunk
  getPlaylist: thunk(
    async ({ addPlaylist, setError, setLoading }, payload, { getState }) => {
      // getState is a function, payload means playlistId
      if (getState().data[payload]) {
        return;
      }
      setLoading(true);
      try {
        const playlist = await getPlaylist(payload);
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
