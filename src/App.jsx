import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import HomePage from "./components/home-page";

const App = () => {
  const { data } = useStoreState((state) => state.playlists);

  const playlistArray = Object.values(data);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// <>
//   <CssBaseline />
//   <Navbar />
//   {playlistArray.length > 0 && (
//     <Grid container alignItems="stretch">
//       playlistArray.map((item) => (
//       <Grid item xs={12} md={6} lg={4} mb={2}>
//         <PlaylistCardItem
//           key={item.playlistId}
//           playlistId={item.playlistId}
//           playlistTitle={item.playlistTitle}
//           channelTitle={item.channelTitle}
//           playlistThumbnail={item.playlistThumbnail}
//         />
//       </Grid>
//       ))}
//     </Grid>
//   )}
// </>
