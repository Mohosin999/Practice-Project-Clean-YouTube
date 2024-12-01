import React from "react";
import { useStoreState } from "easy-peasy";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import PlaylistCardItem from "../../playlist-card-item";
import { HourglassEmpty } from "@mui/icons-material";

const HomePage = () => {
  const { data } = useStoreState((state) => state.playlists);
  const playlistArray = Object.values(data);

  // Responsive Design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={"lg"}
      sx={{ paddingTop: isSmallScreen ? 10 : 12, minHeight: "100vh" }}
    >
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
                />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
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
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: isSmallScreen ? "28px" : null }}
          >
            <HourglassEmpty fontSize="medium" /> No Playlist Available, Please
            Add One
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{ marginBottom: 4, color: "#B4B2B0" }}
          >
            Organize and manage your favorite YouTube playlists seamlessly.
            Explore a distraction-free platform to search, save, and enjoy your
            playlists. For that, you have to add a playlist first using the
            playlist ID or URL.
          </Typography>

          {/* Two-Box Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              justifyContent: "center",
            }}
          >
            {/* Left Box: Instruction */}
            <Box
              sx={{
                flex: 1,
                padding: 3,
                borderRadius: 2,
                backgroundColor: "#292929",
                textAlign: "center",
              }}
            >
              <Typography variant="h5" gutterBottom>
                How It Works:
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                1️⃣ Save playlists for quick access.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                2️⃣ Explore new content distraction-free.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                3️⃣ Access your playlists from any device.
              </Typography>
              <Typography variant="body1">
                4️⃣ Fully responsive interface.
              </Typography>
            </Box>

            {/* Right Box: Features */}
            <Box
              sx={{
                flex: 1,
                padding: 3,
                borderRadius: 2,
                backgroundColor: "#292929",
                textAlign: "center",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Features:
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                ✅ Save and organize playlists in one place.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                ✅ Clean and user-friendly interface.
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 1 }}>
                ✅ Explore playlists seamlessly.
              </Typography>
              <Typography variant="body1">
                ✅ Mobile-friendly design.
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
