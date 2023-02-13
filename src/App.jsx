import React, { useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import CssBaseline from "@mui/material/CssBaseline";

const playlistId = "PL7E7DFtKYTnaRk_ABqufrz6-zJHYhMEsU";

const App = () => {
  const playlist = useStoreActions((actions) => actions.playlists);

  useEffect(() => {
    playlist.getPlaylist(playlistId);
  }, []);

  return (
    <>
      <CssBaseline />
      <h1>New Project</h1>
    </>
  );
};

export default App;
