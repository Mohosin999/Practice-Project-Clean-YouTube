import React from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Container } from "@mui/system";
import PlaylistCardItem from "../../playlist-card-item";
import { Box, Grid, Typography } from "@mui/material";

const Favorites = () => {
  const { data } = useStoreState((state) => state.playlists);
  const { items } = useStoreState((state) => state.favorites);
  const itemArray = [];
  items.forEach((item) => itemArray.push(data[item]));

  return (
    <div>
      <Container maxWidth={"lg"} sx={{ paddingTop: 12, minHeight: "100vh" }}>
        {itemArray.length > 0 ? (
          <Grid container alignItems="stretch">
            {itemArray.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
                <PlaylistCardItem
                  key={item.playlistId}
                  playlistId={item.playlistId}
                  playlistThumbnail={item.playlistItems[0]?.thumbnails}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                  path={"favorites"}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "50vh",
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            <Typography variant="h4" gutterBottom>
              🗳️ Empty Favorite Page
            </Typography>
            <Typography variant="body1">
              Start adding your favorite playlists to see them here!
            </Typography>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Favorites;
