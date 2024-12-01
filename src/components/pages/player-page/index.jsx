import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import { Grid, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import VideoCardItem from "../../video-card-item";
import GoToTopButton from "../../shared/go-to-top-button";

const PlayerPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);
  const current = data[playlistId];

  // Responsive Design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Return a message or fallback if the playlist is not found
  if (!current) {
    return (
      <Container
        maxWidth="lg"
        sx={{ paddingTop: isSmallScreen ? 10 : 12, textAlign: "center" }}
      >
        <h2>Playlist not found!</h2>
      </Container>
    );
  }

  const videoItemArray = current.playlistItems;

  // Filter playlists based on the search query
  const filteredPlaylistItem = videoItemArray.filter((playlistItem) =>
    playlistItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Container
        maxWidth="lg"
        sx={{ paddingTop: isSmallScreen ? 10 : 12, minHeight: "100vh" }}
      >
        {/* Search Bar */}
        <TextField
          placeholder="Search Playlists"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            marginBottom: 3,
            width: "100%",
            backgroundColor: "#333", // Darker background
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              color: "#fff", // Text color for dark mode
              borderRadius: "4px",
              "& fieldset": {
                borderColor: "#555", // Border color
              },
              "&:hover fieldset": {
                borderColor: "#777", // Lighter border on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "#1e88e5", // Focus color
              },
            },
            "& .MuiInputBase-input": {
              color: "#fff", // Text color
            },
            "& .MuiInputLabel-root": {
              color: "#aaa", // Placeholder color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#1e88e5", // Placeholder focus color
            },
          }}
        />

        {filteredPlaylistItem.length > 0 ? (
          <Grid container alignItems="stretch" spacing={2}>
            {filteredPlaylistItem.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={item.contentDetails.videoId}
              >
                <VideoCardItem
                  title={item.title}
                  thumbnails={item.thumbnails}
                  videoId={item.contentDetails.videoId}
                  videos={filteredPlaylistItem.map(
                    (video) => video.contentDetails.videoId
                  )}
                  playlistId={playlistId}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <h3 style={{ textAlign: "center" }}>No videos found!</h3>
        )}
      </Container>

      {/* Go to Top Button */}
      <GoToTopButton />
    </div>
  );
};

export default PlayerPage;
