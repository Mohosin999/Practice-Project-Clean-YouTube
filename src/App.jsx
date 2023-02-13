import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import CssBaseline from "@mui/material/CssBaseline";

const playlistId = "PL7E7DFtKYTnY-Cdo414-bdfjx4L7VleqK";

const App = () => {
  const playlist = useStoreActions((actions) => actions.playlists);
  const { playlists } = useStoreState((state) => state);

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
