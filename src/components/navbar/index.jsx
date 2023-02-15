import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PlaylistForm from "../playlist-form";
import { Button } from "@mui/material";
import { Container } from "@mui/system";
import DrawerComp from "../drawer";
import { useMediaQuery } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:992px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#444" }}>
        <Container>
          <Toolbar>
            {isSmallScreen ? (
              <>
                <Link
                  to="/"
                  component={RouterLink}
                  sx={{ textDecoration: "none" }}
                >
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
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <DrawerComp handleClickOpen={handleClickOpen} />
                <PlaylistForm open={open} handleClose={handleClose} />
              </>
            ) : (
              <>
                <Link
                  to="/"
                  component={RouterLink}
                  sx={{ textDecoration: "none" }}
                >
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
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Box>
                  <Button
                    to="/favorites"
                    component={RouterLink}
                    sx={{ color: "#efefef", marginLeft: "1.5rem" }}
                  >
                    Favorites
                  </Button>
                  <Button
                    to="/recents"
                    component={RouterLink}
                    sx={{ color: "#efefef", marginLeft: "1.5rem" }}
                  >
                    Recents
                  </Button>
                  <Button
                    sx={{ color: "#efefef", marginLeft: "1.5rem" }}
                    onClick={handleClickOpen}
                  >
                    Add Playlist
                  </Button>
                  <PlaylistForm open={open} handleClose={handleClose} />
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
