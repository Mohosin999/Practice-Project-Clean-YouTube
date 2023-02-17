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
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
  path,
}) => {
  // These useState,handleOpen & handleClose function for Snackbar
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // These information from main store
  const { removePlaylist } = useStoreActions((actions) => actions.playlists);
  const { addToFavorite } = useStoreActions((actions) => actions.favorites);
  const { addToRecent } = useStoreActions((actions) => actions.recents);
  const { removeFromFavorite } = useStoreActions(
    (actions) => actions.favorites
  );

  return (
    <Card
      sx={{
        height: "350",
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
        sx={{ height: "180px", width: "320px" }}
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

        {/* Logic for showing delete & favorite buttons */}
        {/* This logic for homepage buttons */}
        {path === "home" && (
          <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
            {/* Favorite icon */}
            <FavoriteIcon
              titleAccess="Add to Favorite"
              onClick={handleOpen}
              onClick={() => addToFavorite(playlistId)}
              sx={{ cursor: "pointer", color: "#EA2027", marginLeft: "0.8rem" }}
            />
            {/* Sncakbar for favorites */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <MuiAlert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Added to Favorites
              </MuiAlert>
            </Snackbar>
            {/* Delete icon */}
            <DeleteIcon
              titleAccess="Delete Playlist"
              onClick={() => removePlaylist(playlistId)}
              onClick={handleOpen}
              sx={{ cursor: "pointer", color: "#1B9CFC", marginLeft: "0.8rem" }}
            />
            {/* Snackbar for delete  */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <MuiAlert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Deleted Successfully
              </MuiAlert>
            </Snackbar>
          </Stack>
        )}
        {/* This logic for favoritepage button */}
        {path === "favorites" && (
          <>
            <DeleteIcon
              titleAccess="Remove from Favorite"
              onClick={() => removeFromFavorite(playlistId)}
              onClick={handleOpen}
              sx={{ cursor: "pointer", color: "#1B9CFC", marginLeft: "auto" }}
            />
            {/* Snackbar for delete */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <MuiAlert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Deleted Successfully
              </MuiAlert>
            </Snackbar>
          </>
        )}
        {/* This logic for recentpage button */}
        {path === "recents" && null}
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
