import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Container } from "@mui/system";
import PlaylistCardItem from "../playlist-card-item";
import { Grid } from "@mui/material";

const Favorites = () => {
  const { data } = useStoreState((state) => state.playlists);
  const { items } = useStoreState((state) => state.favorites);
  const itemId = items[items.length - 1];

  const itemObj = data[itemId];

  const { removeFromFavorite } = useStoreActions(
    (actions) => actions.favorites
  );

  return (
    <div>
      <Container maxWidth={"lg"} sx={{ marginTop: 12 }}>
        <Grid container alignItems="stretch">
          <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
            <PlaylistCardItem
              key={itemObj.playlistId}
              playlistId={itemObj.playlistId}
              playlistThumbnail={itemObj.playlistThumbnail}
              playlistTitle={itemObj.playlistTitle}
              channelTitle={itemObj.channelTitle}
            />
            <button onClick={() => removeFromFavorite(itemObj.playlistId)}>
              Remove From Favorite
            </button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Favorites;
