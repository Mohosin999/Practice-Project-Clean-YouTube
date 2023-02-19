import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, onClose }) => {
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
    <div>
      <div onClick={onClose} style={{ color: "red", cursor: "pointer" }}>
        Close
      </div>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </div>
  );
};

export default VideoPlayer;
