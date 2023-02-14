import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const PAGES = ["Recents", "Favorites", "Add Playlist", "Akash"];

const DrawerComp = ({ handleClickOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={"right"}
      >
        <List>
          <ListItemButton>Recents</ListItemButton>
          <ListItemButton onClick={handleClickOpen}>Add</ListItemButton>
          <ListItemButton>Recents</ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "#efefef" }} />
      </IconButton>
    </>
  );
};

export default DrawerComp;
