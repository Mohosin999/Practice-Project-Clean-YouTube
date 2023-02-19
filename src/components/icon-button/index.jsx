import React, { useState } from "react";
import { Stack } from "@mui/system";
import { useStoreActions } from "easy-peasy";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import useSnackbar from "../../hooks/useSnackbar";

const IconButton = ({ id, path }) => {
  const { handleSnackbar, SnackbarComponent } = useSnackbar();

  const { addToFavorite } = useStoreActions((actions) => actions.favorites);
  const { removePlaylist } = useStoreActions((actions) => actions.playlists);
  const { removeFromFavorite } = useStoreActions(
    (actions) => actions.favorites
  );

  const handleClick = () => {
    addToFavorite(id);
    handleSnackbar("Successfully Added to Favorite", "success");
  };

  return (
    <div>
      {path === "home" && (
        <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
          <FavoriteIcon
            titleAccess="Add to Favorite"
            onClick={handleClick}
            sx={{ cursor: "pointer", color: "#EA2027", marginLeft: "0.8rem" }}
          />
          <SnackbarComponent />

          <DeleteIcon
            titleAccess="Delete Playlist"
            onClick={() => removePlaylist(id)}
            sx={{ cursor: "pointer", color: "#1B9CFC", marginLeft: "0.8rem" }}
          />
        </Stack>
      )}
      {/* This logic for favoritepage button */}
      {path === "favorites" && (
        <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
          <DeleteIcon
            titleAccess="Remove from Favorite"
            onClick={() => removeFromFavorite(id)}
            sx={{ cursor: "pointer", color: "#1B9CFC", marginLeft: "auto" }}
          />
        </Stack>
      )}
      {/* This logic for recentpage button */}
      {path === "recents" && null}
    </div>
  );
};

export default IconButton;
