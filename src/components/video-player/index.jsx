import React from "react";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";

const VideoPlayer = ({ onClose }) => {
  const location = useLocation();
  const videoId = new URLSearchParams(location.search).get("videoId");

  const opts = {
    height: "480",
    width: "640",
    playerVars: {
      autoplay: 1,
      fullscreen: 1,
    },
  };

  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  return (
    <div style={{ margin: "64px" }}>
      <div onClick={onClose} style={{ color: "red", cursor: "pointer" }}>
        Close
      </div>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default VideoPlayer;
