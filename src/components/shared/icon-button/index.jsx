import React from "react";
import { Stack } from "@mui/system";
import { useStoreActions } from "easy-peasy";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import useSnackbar from "../../../hooks/useSnackbar";
import DeleteWithConfirm from "../delete-confirmation";
import { Favorite } from "@mui/icons-material";

const IconButton = ({ id, path, isFavorite }) => {
  const { handleSnackbar, SnackbarComponent } = useSnackbar();

  const { addToFavorite, removeFromFavorite } = useStoreActions(
    (actions) => actions.favorites
  );
  const { removeFromRecent } = useStoreActions((actions) => actions.recents);
  const { removePlaylist } = useStoreActions((actions) => actions.playlists);

  /**
   * Function to handle favorite related actions.
   * Add a playlist to favorite or
   * Remove a playlist from favorite
   */
  const handleFavoriteActions = () => {
    if (isFavorite) {
      // Remove from favorites
      removeFromFavorite(id);
      handleSnackbar("Successfully Removed from Favorite", "success"); // Success message on removal
    } else {
      // Add to favorites
      addToFavorite(id);
      handleSnackbar("Successfully Added to Favorite", "success");
    }
  };

  /**
   * Function to remove playlist.
   * Also remove playlist from favorite and recent.
   *
   * @param {string} id - This is a playlist id.
   */
  const handleRemovePlaylist = (id) => {
    removePlaylist(id);
    removeFromFavorite(id);
    removeFromRecent(id);
  };

  return (
    <div>
      {path === "home" && (
        <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
          <Favorite
            titleAccess={
              isFavorite ? "Remove from Favorite" : "Add to Favorite"
            }
            onClick={handleFavoriteActions}
            sx={{
              cursor: "pointer",
              marginLeft: "0.8rem",
              color: "gray",
              fill: isFavorite ? "gray" : "none", // Conditional fill color
              stroke: "black", // Optional: outline stroke color
            }}
          />

          <SnackbarComponent />

          <DeleteWithConfirm
            title={"Delete Playlist"}
            confirmTitle={"Delete⚠️"}
            message={"Are you sure you want to delete this playlist?"}
            onConfirm={() => handleRemovePlaylist(id)}
          />
        </Stack>
      )}

      {/* This logic for favoritepage button */}
      {path === "favorites" && (
        <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
          <DeleteWithConfirm
            title={"Remove from Favorite"}
            confirmTitle={"Remove"}
            message={"Do you want to remove this playlist from favorite?😔"}
            onConfirm={() => removeFromFavorite(id)}
          />
        </Stack>
      )}
      {/* This logic for recentpage button */}
      {path === "recents" && null}
    </div>
  );
};

export default IconButton;
