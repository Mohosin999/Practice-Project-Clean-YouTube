import React from "react";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import { Container } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  const location = useLocation();
  const videoId = new URLSearchParams(location.search).get("videoId");
  const playlistId = location.pathname.split("/")[2];

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
        <Button
          to={`/player/${playlistId}`}
          component={Link}
          variant="outlined"
        >
          Close
        </Button>
      </div>
    </Container>
  );
};

export default VideoPlayer;
