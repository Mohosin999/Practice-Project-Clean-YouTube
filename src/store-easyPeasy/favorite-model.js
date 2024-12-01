import { action, persist } from "easy-peasy";

const favoriteModel = persist({
  items: [],

  /**
   * Action to add a playlist ID to the favorites list
   * 'payload' represents the playlistId to be added
   */
  addToFavorite: action((state, payload) => {
    // Check if the playlist is already in the favorites
    if (state.items.includes(payload)) {
      // If it is, do nothing
      return;
    } else {
      // If not, add the playlistId to the 'items' array
      state.items.push(payload);
    }
  }),

  /**
   * Action to remove a playlist ID from the favorites list
   * 'payload' represents the playlistId to be removed
   */
  removeFromFavorite: action((state, payload) => {
    // Filter out the playlistId that needs to be removed
    state.items = state.items.filter((pId) => payload != pId);
  }),
});

export default favoriteModel;
