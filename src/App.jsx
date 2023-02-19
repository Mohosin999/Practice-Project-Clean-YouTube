import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import HomePage from "./components/pages/home-page";
import NotFound from "./components/not-found";
import PlayerPage from "./components/pages/player-page";
import Favorites from "./components/pages/favorite-page";
import Recents from "./components/pages/recent-page";

const App = () => {
  const { data } = useStoreState((state) => state.playlists);

  const playlistArray = Object.values(data);

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
