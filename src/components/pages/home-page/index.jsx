import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import { Container } from "@mui/system";
import PlaylistCardItem from "../../playlist-card-item";
import { Add, HourglassEmpty, Warning } from "@mui/icons-material";
import GoToTopButton from "../../shared/go-to-top-button";
import CustomButton from "../../shared/custom-button";
import PlaylistForm from "../../playlist-form";

/**
 * HomePage Component
 * Displays a grid of playlists or a placeholder message if no playlists are
 * available.
 */
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // Access playlists from the store
  const { data } = useStoreState((state) => state.playlists);
  const playlistArray = Object.values(data);

  // const isSmallScreen = useMediaQuery("(max-width:992px)");

  // Responsive Design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  /**
   * Opens the PlaylistForm modal when the "Add Playlist" button is clicked
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * Closes the PlaylistForm modal
   */
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Handles click event for playlist cards.
   * Shows a temporary loading animation when a card is clicked.
   */
  const handleCardClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  return (
    <>
      {/* Main Container */}
      <Container maxWidth={"lg"} sx={{ paddingTop: 12, minHeight: "100vh" }}>
        {/* Loader Overlay */}
        {loading && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backdropFilter: "blur(5px)", // Apply blur to the screen
            }}
          >
            <CircularProgress color="secondary" />
          </Box>
        )}

        {/* Render playlists if available */}
        {playlistArray.length > 0 ? (
          <>
            {/* Playlist Grid */}
            <Grid container alignItems="stretch" spacing={2}>
              {playlistArray.map((item) => (
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
                    playlistId={item.playlistId}
                    playlistThumbnail={item.playlistItems[0]?.thumbnails}
                    playlistTitle={item.playlistTitle}
                    channelTitle={item.channelTitle}
                    path={"home"}
                    onCardClick={handleCardClick} // Pass click handler here
                  />
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          // Placeholder for empty playlist state
          <Box
            sx={{
              marginTop: isSmallScreen ? 0 : 3,
              padding: isSmallScreen ? 0 : 4,
              borderRadius: 2,
              color: "#fff",
              textAlign: "center",
            }}
          >
            {/* Top Section: Title */}
            <div>
              <span style={{ fontSize: "32px", color: "#ffc107" }}>
                OOPS! 😔
              </span>
              <Typography variant="h4" gutterBottom sx={{ marginBottom: 3 }}>
                No Playlists Available! Add One to Begin Your Journey! 🎥
              </Typography>
            </div>

            <div>
              {/* Action Button Named `Add Playlist` */}
              <CustomButton
                icon={Add}
                text="Add Playlist"
                onClick={handleClickOpen}
                marginLeft="0rem"
              />

              <PlaylistForm open={open} handleClose={handleClose} />
            </div>

            {/* Instruction Card */}
            <Box
              sx={{
                marginTop: 5,
                padding: 3,
                borderRadius: 2,
                backgroundColor: "#2d2d2d",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                maxWidth: isSmallScreen ? "100%" : "70%",
                marginX: "auto",
                color: "#ddd",
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#ffc107" }}>
                📝 How to Add a Playlist:
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ marginTop: 1 }}>
                🔍 Go to YouTube and find the playlist you want to add.
              </Typography>
              <Typography variant="body2" gutterBottom>
                📋 Copy the playlist's link or ID from the browser's address
                bar.
              </Typography>
              <Typography variant="body2">
                ➕ Paste it into the form and hit the "Add Playlist" button to
                start managing your playlists!
              </Typography>
            </Box>
          </Box>
        )}
      </Container>

      {/* Go to Top Button */}
      <GoToTopButton />
    </>
  );
};

export default HomePage;
