import React from "react";
import { useStoreActions } from "easy-peasy";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Box, Stack } from "@mui/system";

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
}) => {
  const removePlaylist = useStoreActions(
    (actions) => actions.playlists.removePlaylist
  );

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
        component="img"
        image={playlistThumbnail.url}
        alt={playlistTitle}
      />
      <CardContent>
        <Typography variant="h6" color="text.primary">
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
        <Button>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <PlayCircleOutline />
            <Typography variant="body2" fontWeight={600}>
              Start Tutorial
            </Typography>
          </Stack>
        </Button>
        <Button onClick={() => removePlaylist(playlistId)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
