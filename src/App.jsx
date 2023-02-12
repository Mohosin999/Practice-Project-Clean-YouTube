import React from "react";
import getPlaylist from "./api";

const App = () => {
  const id = "PL_XxuZqN0xVDIlzHwTJr7IqIW1A2eECwy";
  async function a(id) {
    const { playlistTitle, playlistItems } = await getPlaylist(id);
    console.log(playlistTitle, playlistItems);
  }
  a(id);

  return (
    <div>
      <h1>New Project</h1>
    </div>
  );
};

export default App;
