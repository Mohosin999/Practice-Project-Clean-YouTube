import React, { useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const id = "PL_XxuZqN0xVDIlzHwTJr7IqIW1A2eECwy";
  const playlist = useStoreActions((actions) => actions.playlists);

  useEffect(() => {
    // playlist.getPlaylist(id);
    console.log(playlist.getPlaylist(id));
  }, []);

  return (
    <>
      <CssBaseline />
      <h1>New Project</h1>
    </>
  );
};

export default App;
