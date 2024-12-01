import React, { useState } from "react";
import PropTypes from "prop-types";
import { List, Drawer, IconButton } from "@mui/material";
import { Home, Favorite, AllOut, Add } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "../custom-button";

/**
 * DrawerComp Component
 * A drawer menu component with navigation buttons for "Favorites", "Recents",
 * and "Add Playlist". The drawer opens from the right side.
 *
 * @param {Function} handleClickOpen - A function to handle opening the "Add Playlist" dialog.
 */
const DrawerComp = ({ handleClickOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  /**
   * Handles button click to close the drawer.
   */
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
              margin: "24px 24px 0 10px",
            }}
          >
            {/* Navigation button to Home */}
            <CustomButton
              to="/"
              icon={Home}
              text="Home"
              onClick={handleButtonClick}
            />
            {/* Navigation button to Favorites */}
            <CustomButton
              to="/favorites"
              icon={Favorite}
              text="Favorites"
              onClick={handleButtonClick}
            />
            {/* Navigation button to Recents */}
            <CustomButton
              to="/recents"
              icon={AllOut}
              text="Recents"
              onClick={handleButtonClick}
            />
            {/* Button to add a new playlist */}
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

      {/* Icon button to toggle the drawer */}
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "#efefef" }} />
      </IconButton>
    </>
  );
};

// Prop validation using PropTypes
DrawerComp.propTypes = {
  handleClickOpen: PropTypes.func.isRequired,
};

export default DrawerComp;
