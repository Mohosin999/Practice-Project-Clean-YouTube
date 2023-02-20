import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import VideoPlayer from "../video-player";

const VideoCardItem = ({ title, thumbnails, videoId, videos, playlistId }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleClick = () => {
    setIsVideoPlaying(true);
  };

  const videoIndex = videos.indexOf(videoId);

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
      >
        <Link to={`/player/${playlistId}/${videoIndex}?videoId=${videoId}`}>
          <CardMedia
            component="img"
            image={thumbnails.url}
            alt={title}
            onClick={handleClick}
            sx={{ height: "180", width: "320" }}
          />
        </Link>
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {`${title.length > 50 ? title.substr(0, 50) + "..." : title}`}
          </Typography>
        </CardContent>
      </Card>
      {/* {isVideoPlaying && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VideoPlayer
            videoId={videoId}
            onClose={() => setIsVideoPlaying(false)}
          />
        </div>
      )} */}
    </div>
  );
};

export default VideoCardItem;
