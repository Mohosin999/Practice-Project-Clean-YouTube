import React from "react";
import { Stack } from "@mui/system";
import { useStoreActions } from "easy-peasy";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import useSnackbar from "../../hooks/useSnackbar";
import DeleteWithConfirm from "../delete-confirmation";
import { Favorite } from "@mui/icons-material";

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
          <Favorite
            titleAccess="Add to Favorite"
            onClick={handleClick}
            sx={{ cursor: "pointer", marginLeft: "0.8rem" }}
          />
          <SnackbarComponent />

          <DeleteWithConfirm
            title={"Delete Playlist"}
            confirmTitle={"Delete⚠️"}
            message={"Are you sure you want to delete this playlist?"}
            onConfirm={() => removePlaylist(id)}
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
