import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import YouTube from "react-youtube";

const VideoCardItem = ({ title, thumbnails, videoId }) => {
  const [playing, setPlaying] = useState(false);
  const [pause, setPause] = useState(false);
  const [end, setEnd] = useState(false);

  const handleClick = () => {
    setPlaying(true);
  };
  // const handlePlayPause = () => {
  //   setPlaying(!playing);
  // };

  // const handleClose = () => {
  //   setPlaying(false);
  // };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div onClick={handleClick}>
      <Card
        sx={{
          height: "300",
          display: "flex",
          flexDirection: "column",
          margin: 1,
          // boxShadow: "none",
        }}
      >
        <CardMedia
          component="img"
          image={thumbnails.url}
          alt={title}
          sx={{ height: "180", width: "320" }}
        />
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {`${title.length > 50 ? title.substr(0, 50) + "..." : title}`}
          </Typography>
        </CardContent>
      </Card>
      {/* {playing && <YouTube videoId={videoId} onEnd={() => setPlaying(false)} />} */}
      {playing && (
        <div>
          <YouTube
            videoId={videoId}
            opts={opts}
            onPlay={() => setPlaying(true)}
            onPause={() => setPause(true)}
            onEnd={() => setEnd(true)}
          />

          {/* <div style={{ display: playing ? "none" : "block" }}>
            <button onClick={handlePlayPause}>Play</button>
          </div>
          <div style={{ display: playing ? "block" : "none" }}>
            <button onClick={handlePlayPause}>Pause</button>
          </div>
          <div style={{ display: playing ? "block" : "none" }}>
            <button onClick={handleClose}>Close</button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default VideoCardItem;
