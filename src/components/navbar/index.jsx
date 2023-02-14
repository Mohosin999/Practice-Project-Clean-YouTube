import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PlaylistForm from "../playlist-form";
import { Button, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:735px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#444" }}>
        <Toolbar sx={{ flexDirection: isSmallScreen ? "column" : "row" }}>
          <Typography
            variant="h6"
            sx={{
              color: "#efefef",
              userSelect: "none",
              letterSpacing: "0.2rem",
              mr: isSmallScreen ? 0 : 1,
              mb: isSmallScreen ? 1 : 0,
            }}
          >
            CLEAN YOUTUBE
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              sx={{
                marginLeft: isSmallScreen ? 0 : 1,
                mb: isSmallScreen ? 1 : 0,
              }}
            >
              <Typography
                variant="button"
                sx={{ color: "#efefef", letterSpacing: "0.1rem" }}
              >
                Add Playlist
              </Typography>
            </Button>
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              sx={{
                marginLeft: isSmallScreen ? 0 : 1,
                mb: isSmallScreen ? 1 : 0,
              }}
            >
              <Typography
                variant="button"
                sx={{ color: "#efefef", letterSpacing: "0.1rem" }}
              >
                Add Playlist
              </Typography>
            </Button>
            <Button
              variant="outlined"
              startIcon={<AddIcon sx={{ color: "#efefef" }} />}
              onClick={handleClickOpen}
              sx={{
                marginLeft: isSmallScreen ? 0 : 1,
                mb: isSmallScreen ? 1 : 0,
              }}
              // sx={{
              //   marginLeft: "1rem",
              //   "&:hover": { backgroundColor: "green" },
              // }}
            >
              <Typography
                variant="button"
                sx={{ color: "#efefef", letterSpacing: "0.1rem" }}
              >
                Add Playlist
              </Typography>
            </Button>
            <PlaylistForm open={open} handleClose={handleClose} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
