import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import getPlaylist from "./api";

const App = () => {
  const id = "PL_XxuZqN0xVDIlzHwTJr7IqIW1A2eECwy";
  async function a(id) {
    const { playlistTitle, playlistItems } = await getPlaylist(id);
    console.log(playlistTitle, playlistItems);
  }
  a(id);

  return (
    <>
      <CssBaseline />
      <h1>New Project</h1>
    </>
  );
};

export default App;
