import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const PlaylistForm = ({ open, handleClose }) => {
  const [state, setState] = useState("");
  //TODO: you can destructure these playlist {getPlaylist}
  const playlist = useStoreActions((actions) => actions.playlists);

  const handleSubmit = () => {
    if (!state) {
      alert("Invalid State");
    } else {
      playlist.getPlaylist(state);
      setState("");
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a playlist, you should input here playlist link or id.
          Otherwise we can't provide you any playlist.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Playlist Link or ID"
          fullWidth
          variant="standard"
          onChange={(e) => setState(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add Playlist</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaylistForm;
