import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Container } from "@mui/system";
// import PlaylistCardItem from "../playlist-card-item";
import { Grid } from "@mui/material";

const Recents = () => {
  const { items } = useStoreState((state) => state.recents);

  return (
    <div>
      <Container maxWidth={"lg"} sx={{ marginTop: 12 }}>
        {items.length > 0 && (
          <Grid container alignItems="stretch">
            {items.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
                {/* <PlaylistCardItem
                  key={item.playlistId}
                  playlistId={item.playlistId}
                  playlistThumbnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                /> */}
                <div>
                  <ul>
                    <li>{item}</li>
                  </ul>
                </div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Recents;
