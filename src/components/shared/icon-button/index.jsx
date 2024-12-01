import React from "react";
import PropTypes from "prop-types";
import { Stack } from "@mui/system";
import { useStoreActions } from "easy-peasy";
import DeleteWithConfirm from "../delete-confirmation";
import { Favorite } from "@mui/icons-material";

/**
 * IconButton Component
 * Renders favorite and delete buttons based on the page context.
 * Supports "home", "favorites", and "recents" paths.
 *
 * @param {string} id - The unique ID of the playlist.
 * @param {string} path - The current page path ("home", "favorites", or "recents").
 * @param {boolean} isFavorite - Indicates whether the playlist is marked as a favorite.
 */
const IconButton = ({ id, path, isFavorite }) => {
  // Easy-Peasy actions for handling favorites, recent items, and playlists
  const { addToFavorite, removeFromFavorite } = useStoreActions(
    (actions) => actions.favorites
  );
  const { removeFromRecent } = useStoreActions((actions) => actions.recents);
  const { removePlaylist } = useStoreActions((actions) => actions.playlists);

  /**
   * Handles favorite actions.
   * Adds or removes the playlist from favorites based on its current state.
   */
  const handleFavoriteActions = () => {
    if (isFavorite) {
      removeFromFavorite(id);
    } else {
      addToFavorite(id);
    }
  };

  /**
   * Deletes the playlist and removes it from favorites and recent items.
   *
   * @param {string} id - The ID of the playlist to be deleted.
   */
  const handleDeletePlaylist = (id) => {
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
              color: "#fff",
              fill: isFavorite ? "#fff" : "none", // Conditional fill color
              stroke: "#fff", // Optional: outline stroke color
            }}
          />

          <DeleteWithConfirm
            title={"Delete Playlist"}
            confirmTitle={"Delete⚠️"}
            message={"Are you sure you want to delete this playlist?"}
            onConfirm={() => handleDeletePlaylist(id)}
          />
        </Stack>
      )}

      {/* This logic for favoritepage button */}
      {path === "favorites" && (
        <Stack direction={"row"} sx={{ marginLeft: "auto" }}>
          <Favorite
            titleAccess={
              isFavorite ? "Remove from Favorite" : "Add to Favorite"
            }
            onClick={handleFavoriteActions}
            sx={{
              cursor: "pointer",
              marginLeft: "0.8rem",
              color: "#fff",
              fill: isFavorite ? "#fff" : "none",
              stroke: "#fff",
            }}
          />
        </Stack>
      )}

      {/* This logic for recentpage button */}
      {path === "recents" && null}
    </div>
  );
};

// Prop validation using PropTypes
IconButton.propTypes = {
  id: PropTypes.string.isRequired,
  path: PropTypes.oneOf(["home", "favorites", "recents"]).isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default IconButton;
