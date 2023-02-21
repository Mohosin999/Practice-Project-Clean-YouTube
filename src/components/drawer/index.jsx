import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Drawer, IconButton, List } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = ({ handleClickOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={"right"}
      >
        <List sx={{ backgroundColor: "#A77B06", height: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              to="favorites"
              component={Link}
              sx={{ color: "#efefef", margin: "1rem" }}
            >
              Favorites
            </Button>
            <Button
              to="recents"
              component={Link}
              sx={{ color: "#efefef", margin: "1rem" }}
            >
              Recents
            </Button>
            <Button
              onClick={handleClickOpen}
              sx={{ color: "#efefef", margin: "1rem" }}
            >
              Add Playlist
            </Button>
          </div>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "#efefef" }} />
      </IconButton>
    </>
  );
};

export default DrawerComp;
