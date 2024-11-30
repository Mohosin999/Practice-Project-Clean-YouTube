import React, { useState, useEffect } from "react";
import { useStoreState } from "easy-peasy";
import {
  Box,
  Button,
  Grid,
  Pagination,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Container } from "@mui/system";
import PlaylistCardItem from "../../playlist-card-item";
import { HourglassEmpty } from "@mui/icons-material";

const HomePage = () => {
  const { data } = useStoreState((state) => state.playlists);
  const playlistArray = Object.values(data);

  // State for search query and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Responsive Design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Filter playlists based on the search query
  const filteredPlaylists = playlistArray.filter((playlist) =>
    playlist.playlistTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPlaylists.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlaylists = filteredPlaylists.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Adjust pagination when playlists are deleted
  useEffect(() => {
    if (currentPlaylists.length === 0 && currentPage > 1) {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  }, [currentPlaylists, currentPage]);

  return (
    <Container maxWidth={"lg"} sx={{ paddingTop: 12, minHeight: "100vh" }}>
      {playlistArray.length > 0 ? (
        <>
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
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
          />

          {/* Playlist Grid */}
          <Grid container alignItems="stretch" spacing={2}>
            {currentPlaylists.length > 0 ? (
              currentPlaylists.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.playlistId}>
                  <PlaylistCardItem
                    playlistId={item.playlistId}
                    playlistThumbnail={item.playlistItems[0]?.thumbnails}
                    playlistTitle={item.playlistTitle}
                    channelTitle={item.channelTitle}
                    path={"home"}
                  />
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <p>No playlists found</p>
              </Grid>
            )}
          </Grid>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color={"primary"}
                sx={{ marginTop: 2 }}
              />
            </div>
          )}
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
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Organize and manage your favorite YouTube playlists seamlessly.
            Explore a distraction-free platform to search, save, and enjoy your
            playlists. For that you have to add playlist first using playlist id
            or URL.
          </Typography>

          {/* Two-Box Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Stacks vertically on small screens
              gap: 4, // Space between the two boxes
              justifyContent: "center",
            }}
          >
            {/* Left Box: Instruction */}
            <Box
              sx={{
                flex: 1,
                padding: 3,
                borderRadius: 2,
                backgroundColor: "#292929", // Slightly lighter background for contrast
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
                3️⃣ Search playlists with ease.
              </Typography>
              <Typography variant="body1">
                4️⃣ Access your playlists from any device.
              </Typography>
            </Box>

            {/* Right Box: Features */}
            <Box
              sx={{
                flex: 1,
                padding: 3,
                borderRadius: 2,
                backgroundColor: "#292929", // Matches the left box for uniformity
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
                ✅ Search and explore playlists effortlessly.
              </Typography>
              <Typography variant="body1">
                ✅ Fully responsive and mobile-friendly.
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default HomePage;
