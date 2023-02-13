import { createStore } from "easy-peasy";
import playlistModel from "./playlist-model";

const store = createStore({
  playlists: playlistModel,
});

export default store;
