import React, { useEffect } from "react";
import { useStoreState } from "easy-peasy";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import { Container, Box, useMediaQuery, useTheme } from "@mui/material";
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import CustomIconButton from "../shared/custom-icon-button";

const VideoPlayer = () => {
  /**
   * Scroll to top when component is mounted
   * It is done because when goes to this page, it always focus on top
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Retrieve playlist data from the state using easy-peasy store
  const { data } = useStoreState((state) => state.playlists);

  // Use useLocation hook to get the current URL's location
  const location = useLocation();

  // Extract the videoId from the URL's query parameters
  const videoId = new URLSearchParams(location.search).get("videoId");

  // Extract playlistId and index from the URL's path
  const playlistId = location.pathname.split("/")[2];
  const index = location.pathname.split("/")[3];

  // Get the playlist items from the state data
  const playlistItems = data[playlistId].playlistItems;

  // Get the index of the last item in the playlist
  const lastItem = playlistItems.length - 1;

  // Logic for previous button: calculate the previous video's index
  const prevIndex = parseInt(index) - 1;
  const prevItem = playlistItems[prevIndex];
  const prevVideoId = prevItem ? prevItem.contentDetails.videoId : "";

  // Logic for next button: calculate the next video's index
  const nextIndex = parseInt(index) + 1;
  const nextItem = playlistItems[nextIndex];
  const nextVideoId = nextItem ? nextItem.contentDetails.videoId : "";

  // Responsive design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Set options for YouTube player, including autoplay and fullscreen
  const opts = {
    playerVars: {
      autoplay: 1,
      fullscreen: 1,
    },
    // height: isSmallScreen ? "200" : "500",
    height: "100%",
    width: "100%",
  };

  // Handle the video player when it's ready to play
  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 10, mb: 5, minHeight: "100vh" }}>
      <Box
        sx={{
          position: "relative",
          paddingBottom: isSmallScreen ? "56.25%" : "0",
          height: isSmallScreen ? "0" : "500px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: theme.shadows[3],
        }}
      >
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onPlayerReady}
          style={{
            position: isSmallScreen ? "absolute" : "static",
            top: 0,
            left: 0,
            width: isSmallScreen ? "100%" : "auto",
            height: isSmallScreen ? "100%" : "500px",
          }}
        />
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: isSmallScreen ? 2 : 3,
          flexDirection: "row",
          gap: isSmallScreen ? 1 : 2,
          width: "100%",
        }}
      >
        {/* Previous Button */}
        <CustomIconButton
          to={`/player/${playlistId}/${prevIndex}?videoId=${prevVideoId}`}
          disabled={parseInt(index) === 0}
          icon={ArrowBack}
          isSmallScreen={isSmallScreen}
          title="Previous Video"
        />

        {/* Close Video Button */}
        <CustomIconButton
          to={`/player/${playlistId}`}
          icon={Close}
          isSmallScreen={isSmallScreen}
          title="Close Video"
        />

        {/* Next Button */}
        <CustomIconButton
          to={`/player/${playlistId}/${nextIndex}?videoId=${nextVideoId}`}
          disabled={parseInt(index) === lastItem}
          icon={ArrowForward}
          isSmallScreen={isSmallScreen}
          title="Next Video"
        />
      </Box>
    </Container>
  );
};

export default VideoPlayer;
