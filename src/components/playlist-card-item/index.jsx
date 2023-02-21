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
import IconButton from "../icon-button";

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
  path,
}) => {
  const { addToRecent } = useStoreActions((actions) => actions.recents);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 1,
      }}
    >
      <CardMedia
        to={`/player/${playlistId}`}
        component={Link}
        image={playlistThumbnail.url}
        alt={playlistTitle}
        onClick={() => addToRecent(playlistId)}
        sx={{
          width: "100%",
          height: "180px",
        }}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {`${
            playlistTitle.length > 50
              ? playlistTitle.substr(0, 50) + "..."
              : playlistTitle
          }`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {channelTitle}
        </Typography>
      </CardContent>

      <Box sx={{ flexGrow: 1 }}></Box>
      <CardActions disableSpacing>
        <Button
          to={`/player/${playlistId}`}
          component={Link}
          onClick={() => addToRecent(playlistId)}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <PlayCircleOutline />
            <Typography variant="body2" fontWeight={600}>
              View Playlist
            </Typography>
          </Stack>
        </Button>

        <div style={{ marginLeft: "auto" }}>
          <IconButton id={playlistId} path={path} />
        </div>
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
