import { createStore } from "easy-peasy";
import playlistModel from "./playlist-model";
import recentModel from "./recent-model";
import favoriteModel from "./favorite-model";

const store = createStore({
  playlists: playlistModel,
  recents: recentModel,
  favorites: favoriteModel,
});

export default store;
