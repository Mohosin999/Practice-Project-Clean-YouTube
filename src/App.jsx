import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import HomePage from "./components/home-page";
import NotFound from "./components/not-found";
import PlayerPage from "./components/player-page";

const App = () => {
  const { data } = useStoreState((state) => state.playlists);

  const playlistArray = Object.values(data);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage data={data} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
