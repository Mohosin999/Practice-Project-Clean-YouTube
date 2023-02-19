import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import VideoPlayer from "../video-player";

const VideoCardItem = ({ title, thumbnails, videoId }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div>
      <Card
        sx={{
          height: "300",
          display: "flex",
          flexDirection: "column",
          margin: 1,
          // boxShadow: "none",
        }}
        onClick={handleClick}
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
      {isVideoPlaying && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VideoPlayer
            videoId={videoId}
            onClose={() => setIsVideoPlaying(false)}
          />
        </div>
      )}
    </div>
  );
};

export default VideoCardItem;
