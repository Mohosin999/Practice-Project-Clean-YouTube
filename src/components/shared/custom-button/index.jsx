import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ Component, title, to = null, component = null }) => {
  return (
    <Button
      to={to}
      component={component}
      sx={{ color: "#efefef", marginLeft: "1.5rem" }}
    >
      <Component /> {title}
    </Button>
  );
};

export default CustomButton;
