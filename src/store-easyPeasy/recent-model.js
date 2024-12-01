import { action, persist } from "easy-peasy";

const recentModel = persist({
  items: [],
  // Here payload means playlistId
  addToRecent: action((state, payload) => {
    if (state.items.indexOf(payload) !== -1) {
      state.items.splice(state.items.indexOf(payload), 1);
    }
    state.items.unshift(payload);
    state.items = state.items.slice(0, 8);
  }),

  removeFromRecent: action((state, payload) => {
    state.items = state.items.filter((pId) => payload !== pId);
  }),
});

export default recentModel;
