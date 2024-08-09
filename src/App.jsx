import { useEffect } from "react";
import usePlaylists from "./hooks/usePlaylists";

const App = () => {
  const { getPlaylistById, playlists } = usePlaylists();

  useEffect(() => {
    getPlaylistById("PLchGjvsPxgIUoUprh4wo_KfdDuc4BV1Z4");
  }, []);

  console.log("Playlist", playlists);

  return <div>App</div>;
};

export default App;
