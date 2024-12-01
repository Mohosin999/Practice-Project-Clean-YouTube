import React from "react";
import { useStoreState } from "easy-peasy";
import { Container } from "@mui/system";
import PlaylistCardItem from "../../playlist-card-item";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

/**
 * Recents Component
 * Displays a grid of recently visited playlists. If no recent playlists are available,
 * shows a message prompting the user to visit a playlist.
 *
 * @returns {JSX.Element} React Component
 */
const Recents = () => {
  // Retrieve playlist data and recent items from the Easy-Peasy store
  const { data } = useStoreState((state) => state.playlists);
  const { items } = useStoreState((state) => state.recents);

  // Map recent items to their corresponding playlist data
  const itemArray = [];
  items.forEach((item) => itemArray.push(data[item]));

  // Responsive Design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Container
        maxWidth={"lg"}
        sx={{ paddingTop: isSmallScreen ? 10 : 12, minHeight: "100vh" }}
      >
        {itemArray.length > 0 ? (
          <Grid container alignItems="stretch" spacing={2}>
            {itemArray.map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                mb={2}
                key={item.playlistId}
              >
                <PlaylistCardItem
                  key={item.playlistId}
                  playlistId={item.playlistId}
                  playlistThumbnail={item.playlistItems[0]?.thumbnails}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                  path={"recents"}
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
              color: "#fff",
            }}
          >
            <Typography variant="h4" gutterBottom>
              📄 Empty Recent Page
            </Typography>
            <Typography variant="body1" sx={{ color: "#B4B2B0" }}>
              You should visit a palylist at first!
            </Typography>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Recents;
