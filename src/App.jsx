import React from "react";
<<<<<<< HEAD

const App = () => {
  let id = 0;
  const increment = () => {
    return id++;
  };

  return (
    <div>
      <h1>Param</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
        autem et iusto, fugiat consequuntur facere, obcaecati, pariatur
        repudiandae sequi aliquid corrupti velit itaque est sunt hic esse
        quisquam. Labore exercitationem harum eius dolore. Assumenda deserunt
        quia architecto, officia quisquam provident vero debitis similique cum,
        molestias placeat quibusdam natus, quis nesciunt.
      </p>
      <button onClick={increment}>Add</button>
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import HomePage from "./components/pages/home-page";
import NotFound from "./components/not-found";
import PlayerPage from "./components/pages/player-page";
import Favorites from "./components/pages/favorite-page";
import Recents from "./components/pages/recent-page";
import VideoPlayer from "./components/video-player";

const App = () => {
  return (
    <div
      style={{
        // backgroundColor: "#92a68a",
        height: "100%",
        paddingBottom: "75rem",
      }}
    >
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/player/:playlistId" element={<PlayerPage />} />
          <Route path="/player/:playlistId/:index" element={<VideoPlayer />} />

          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recents" element={<Recents />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
>>>>>>> ff5b1a827190a545f5053f82564ea013734132f7
    </div>
  );
};

export default App;
