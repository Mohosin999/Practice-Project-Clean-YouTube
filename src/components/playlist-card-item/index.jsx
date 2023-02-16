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
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
}) => {
  // const { removePlaylist } = useStoreActions((actions) => actions.playlists);
  // const { addToFavorite } = useStoreActions((actions) => actions.favorites);
  const { addToRecent } = useStoreActions((actions) => actions.recents);

  return (
    <Card
      sx={{
        height: "350px",
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
        sx={{ height: "200px" }}
        onClick={() => addToRecent(playlistId)}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary">
          {`${
            playlistTitle.length > 25
              ? playlistTitle.substr(0, 25) + "..."
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

        {/* <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
          <FavoriteIcon
            onClick={() => addToFavorite(playlistId)}
            sx={{ cursor: "pointer", color: "red", marginLeft: "0.8rem" }}
          />
          <DeleteIcon
            onClick={() => removePlaylist(playlistId)}
            sx={{ cursor: "pointer", color: "green", marginLeft: "0.8rem" }}
          />
        </Stack> */}
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
