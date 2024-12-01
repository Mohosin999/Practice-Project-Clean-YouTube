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

// import { action, thunk, persist } from "easy-peasy";
// import getPlaylist from "../api";

// const playlistModel = persist({
//   data: {}, // Data object to store playlists
//   error: "", // Error message if fetching fails
//   isLoading: false, // Loading state

//   // Actions
//   addPlaylist: action((state, payload) => {
//     state.data[payload.playlistId] = payload;
//   }),
//   removePlaylist: action((state, payload) => {
//     delete state.data[payload];

//     // Update local storage to reflect the deletion
//     const localData = JSON.parse(localStorage.getItem("playlists")) || {};
//     if (localData[payload]) {
//       delete localData[payload];
//       localStorage.setItem("playlists", JSON.stringify(localData));
//     }
//   }),
//   setError: action((state, payload) => {
//     state.error = payload;
//   }),
//   setLoading: action((state, payload) => {
//     state.isLoading = payload;
//   }),

//   // Thunk to fetch playlist
//   getPlaylist: thunk(
//     async ({ addPlaylist, setError, setLoading }, payload, { getState }) => {
//       // Check if data is already available in local storage
//       const localData = JSON.parse(localStorage.getItem("playlists")) || {};
//       const playlistFromLocal = localData[payload];

//       if (playlistFromLocal) {
//         // If data exists in local storage, add it to the state
//         addPlaylist(playlistFromLocal);
//         return;
//       }

//       // Otherwise, fetch data from the API
//       setLoading(true);
//       try {
//         const playlist = await getPlaylist(payload);
//         addPlaylist(playlist);

//         // Update local storage with the new playlist
//         const updatedLocalData = {
//           ...localData,
//           [payload]: playlist,
//         };
//         localStorage.setItem("playlists", JSON.stringify(updatedLocalData));
//       } catch (e) {
//         setError(e.response?.data?.error?.message || "Something Went Wrong");
//       } finally {
//         setLoading(false);
//       }
//     }
//   ),
// });

// export default playlistModel;
