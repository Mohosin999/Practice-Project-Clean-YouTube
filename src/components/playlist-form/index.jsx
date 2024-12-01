import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useSnackbar from "../../hooks/useSnackbar";

const PlaylistForm = ({ open, handleClose }) => {
  const [state, setState] = useState("");
  const [isError, setIsError] = useState(false);

  const { handleSnackbar, SnackbarComponent } = useSnackbar();

  const { getPlaylist } = useStoreActions((actions) => actions.playlists);
  const { data } = useStoreState((state) => state.playlists);

  const handleSubmit = async () => {
    if (!state) {
      setIsError(true);
      handleSnackbar("Invalid Link or ID", "error");
      return;
    }

    /**
     * This is extracting the playlist ID from a given YouTube playlist URL
     * - /(?:list=)([\w-]+)/)?.[1]
     */
    const playlistId = state.match(/(?:list=)([\w-]+)/)?.[1] || state;

    if (data[playlistId]) {
      handleSnackbar("Playlist Already Exists!", "warning");
      return;
    }

    try {
      setIsError(false);

      // Attempt to fetch the playlist
      await getPlaylist(playlistId);

      // Success handling
      handleSnackbar("Playlist Added Successfully", "success");
      setState("");
      handleClose();
    } catch (error) {
      // Error handling
      console.error("Error fetching playlist:", error);
      handleSnackbar(
        "Failed to add playlist. Please check the ID or link.",
        "error"
      );
    }
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#292929",
          },
        }}
      >
        <DialogTitle
          sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
          }}
        >
          Add Playlist
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "#B4B2B0" }}>
            To add a playlist, please input the playlist link or ID. Otherwise,
            we cannot fetch the playlist.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Playlist Link or ID"
            fullWidth
            error={isError}
            variant="standard"
            onChange={(e) => setState(e.target.value)}
            value={state}
            InputLabelProps={{
              style: { color: "#B4B2B0" }, // Gold label color
            }}
            sx={{
              backgroundColor: "#424242", // Slightly lighter gray background
              borderRadius: "4px",
              input: { color: "#FFFFFF" }, // Text color in the input field
            }}
          />
        </DialogContent>
        <DialogActions>
          {/* <Button variant="outlined" onClick={handleClose}> */}
          <Button
            onClick={() => {
              handleClose();
              setState("");
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Add Playlist</Button>
        </DialogActions>
      </Dialog>

      <SnackbarComponent />
    </>
  );
};

export default PlaylistForm;
