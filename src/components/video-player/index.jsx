import React from "react";
import { useStoreState } from "easy-peasy";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  const { data } = useStoreState((state) => state.playlists);

  const location = useLocation();
  const videoId = new URLSearchParams(location.search).get("videoId");
  const playlistId = location.pathname.split("/")[2];
  const index = location.pathname.split("/")[3];
  const playlistItems = data[playlistId].playlistItems;
  const lastItem = playlistItems.length - 1;

  // Previous button logic
  const prevIndex = parseInt(index) - 1;
  const prevItem = playlistItems[prevIndex];
  const prevVideoId = prevItem ? prevItem.contentDetails.videoId : "";

  // Next button logic
  const nextIndex = parseInt(index) + 1;
  const nextItem = playlistItems[nextIndex];
  const nextVideoId = nextItem ? nextItem.contentDetails.videoId : "";

  // Responsive design
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const opts = {
    playerVars: {
      autoplay: 1,
      fullscreen: 1,
    },
    height: isSmallScreen ? "200" : "500",
    width: "100%",
  };

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  return (
    <Container maxWidth={"md"}>
      <div
        style={{
          position: "relative",
          paddingBottom: isSmallScreen ? "56.25%" : "0",
          height: isSmallScreen ? "0" : "500px",
          marginTop: "64px",
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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "0.2rem",
          }}
        >
          {/* Previous Video Button */}
          <Button
            to={`/player/${playlistId}/${prevIndex}?videoId=${prevVideoId}`}
            component={Link}
            variant="contained"
            color="success"
            disabled={parseInt(index) === 0}
          >
            Previous
          </Button>

          {/* Close Running Video Button */}
          <Button
            to={`/player/${playlistId}`}
            component={Link}
            variant="contained"
            color="error"
            sx={{ marginLeft: "0.2rem" }}
          >
            Close Video
          </Button>

          {/* Next Video Button */}
          <Button
            to={`/player/${playlistId}/${nextIndex}?videoId=${nextVideoId}`}
            component={Link}
            variant="contained"
            color="success"
            disabled={parseInt(index) === lastItem}
            sx={{ marginLeft: "0.2rem" }}
          >
            Next
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default VideoPlayer;
