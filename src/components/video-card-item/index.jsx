import React from "react";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Box, Stack } from "@mui/system";

const VideoCardItem = ({ title, thumbnails }) => {
  return (
    <Card
      sx={{
        height: "300",
        display: "flex",
        flexDirection: "column",
        margin: 1,
        boxShadow: "none",
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
  );
};

export default VideoCardItem;
