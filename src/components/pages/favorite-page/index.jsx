import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Container } from "@mui/system";
import PlaylistCardItem from "../../playlist-card-item";
import { Grid } from "@mui/material";

const Favorites = () => {
  const { data } = useStoreState((state) => state.playlists);
  const { items } = useStoreState((state) => state.favorites);
  const itemArray = [];
  items.forEach((item) => itemArray.push(data[item]));

  return (
    <div>
      <Container maxWidth={"lg"} sx={{ marginTop: 12 }}>
        {itemArray.length > 0 && (
          <Grid container alignItems="stretch">
            {itemArray.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
                <PlaylistCardItem
                  key={item.playlistId}
                  playlistId={item.playlistId}
                  playlistThumbnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                  path={"favorites"}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default Favorites;
