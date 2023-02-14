import React from "react";
import { useStoreState } from "easy-peasy";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import PlaylistCardItem from "./components/playlist-card-item";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
// import HomePage from "./components/home-page";

const App = () => {
  const { data } = useStoreState((state) => state.playlists);

  const playlistArray = Object.values(data);

  return (
    <>
      <CssBaseline />
      <Navbar />
      {/* <HomePage /> */}
      <Container maxWidth={"lg"} sx={{ marginTop: 12 }}>
        {playlistArray.length > 0 && (
          <Grid container alignItems="stretch">
            {playlistArray.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
                <PlaylistCardItem
                  key={item.playlistId}
                  playlistId={item.playlistId}
                  playlistThumbnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
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
  );
};

export default App;
