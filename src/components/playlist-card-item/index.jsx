import React, { useState } from "react";
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
  // const [open, setOpen] = useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  // These information from main store
  const { removePlaylist } = useStoreActions((actions) => actions.playlists);
  const { addToFavorite } = useStoreActions((actions) => actions.favorites);
  const { addToRecent } = useStoreActions((actions) => actions.recents);
  const { removeFromFavorite } = useStoreActions(
    (actions) => actions.favorites
  );

  // const handleAddToFavorite = () => {
  //   addToFavorite(playlistId);
  //   handleClick();
  // };

  // const handleRemoveFromFavorite = () => {
  //   removeFromFavorite(playlistId);
  //   handleClick();
  // };

  // const handleRemovePlaylist = () => {
  //   removePlaylist(playlistId);
  //   handleClick();
  // };

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
              // onClick={handleAddToFavorite}
              onClick={() => addToFavorite(playlistId)}
              sx={{ cursor: "pointer", color: "#EA2027", marginLeft: "0.8rem" }}
            />
            {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Successfully Added to Favorite!
              </MuiAlert>
            </Snackbar> */}

            {/* Delete icon */}
            <DeleteIcon
              titleAccess="Delete Playlist"
              onClick={() => removePlaylist(playlistId)}
              // onClick={handleRemovePlaylist}
              sx={{ cursor: "pointer", color: "#1B9CFC", marginLeft: "0.8rem" }}
            />
            {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Action Successful!
              </MuiAlert>
            </Snackbar> */}
          </Stack>
        )}
        {/* This logic for favoritepage button */}
        {path === "favorites" && (
          <>
            <DeleteIcon
              titleAccess="Remove from Favorite"
              onClick={() => removeFromFavorite(playlistId)}
              // onClick={handleRemoveFromFavorite}
              sx={{ cursor: "pointer", color: "#1B9CFC", marginLeft: "auto" }}
            />
            {/* <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
              <MuiAlert
                elevation={6}
                variant="filled"
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
              >
                Action Successful!
              </MuiAlert>
            </Snackbar> */}
          </>
        )}
        {/* This logic for recentpage button */}
        {path === "recents" && null}
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
