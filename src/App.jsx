import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import HomePage from "./components/home-page";
import NotFound from "./components/not-found";
import PlayerPage from "./components/player-page";
import Favorites from "./components/favorites";
import Recents from "./components/recents";

const App = () => {
  const { data } = useStoreState((state) => state.playlists);

  const playlistArray = Object.values(data);
  console.log(playlistArray);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        {/* Routes for homepage */}
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />

        {/* * Routes for every single playlist */}
        <Route path="/player/:playlistId" element={<PlayerPage />} />

        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recents" element={<Recents />} />

        {/* Routes for invalid url */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
