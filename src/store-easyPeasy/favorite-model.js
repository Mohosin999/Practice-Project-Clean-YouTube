import { action, persist } from "easy-peasy";

const favoriteModel = persist({
  items: [],
  // Here payload means playlistId
  addToFavorite: action((state, payload) => {
    if (state.items.includes(payload)) {
      return;
    } else {
      state.items.push(payload);
    }
  }),
  removeFromFavorite: action((state, payload) => {
    state.items = state.items.filter((pId) => payload != pId);
  }),
});

export default favoriteModel;
