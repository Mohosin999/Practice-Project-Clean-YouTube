import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PlaylistForm from "../playlist-form";
import { Button } from "@mui/material";
// import { useMediaQuery } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const isSmallScreen = useMediaQuery("(max-width:735px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#444" }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              color: "#efefef",
              userSelect: "none",
              letterSpacing: "0.2rem",
            }}
          >
            CLEAN YOUTUBE
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Button onClick={handleClickOpen}>Add Playlist</Button>
            <PlaylistForm open={open} handleClose={handleClose} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
