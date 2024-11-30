import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CustomButton = ({ to, onClick, icon: Icon, text, component = Link }) => (
  <Button
    variant="contained"
    to={to}
    component={component}
    sx={{
      color: "#efefef",
      marginLeft: "1.5rem",
      // marginBottom: "1rem",
    }}
    onClick={onClick}
  >
    {Icon && <Icon sx={{ marginRight: "5px" }} />}
    {text}
  </Button>
);

export default CustomButton;
