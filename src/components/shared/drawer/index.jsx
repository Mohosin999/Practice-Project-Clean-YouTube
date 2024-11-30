import React, { useState } from "react";
import { List, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CustomButton from "../custom-button";

// Icons for the buttons
import { Favorite, AllOut, Add } from "@mui/icons-material";

const DrawerComp = ({ handleClickOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleButtonClick = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={"right"}
      >
        <List
          sx={{
            background: "linear-gradient(90deg, #141E30, #243B55)",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              margin: "16px 24px 0 0",
            }}
          >
            <CustomButton
              to="/favorites"
              icon={Favorite}
              text="Favorites"
              onClick={handleButtonClick}
            />
            <CustomButton
              to="/recents"
              icon={AllOut}
              text="Recents"
              onClick={handleButtonClick}
            />
            <CustomButton
              onClick={() => {
                handleClickOpen();
                handleButtonClick();
              }}
              icon={Add}
              text="Add Playlist"
            />
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
