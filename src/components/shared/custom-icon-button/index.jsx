import React from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const CustomIconButton = ({
  to,
  disabled = false,
  size = "medium",
  icon: Icon,
  isSmallScreen,
  additionalStyles = {},
  title,
}) => {
  const defaultStyles = {
    backgroundColor: "gold",
    color: "black",
    "&:hover": { backgroundColor: "#ffc107" },
    "&:disabled": { backgroundColor: "grey.400", color: "grey.600" },
    width: isSmallScreen ? "32px" : "42px",
    height: isSmallScreen ? "32px" : "42px",
  };

  return (
    <IconButton
      to={to}
      component={Link}
      disabled={disabled}
      size={isSmallScreen ? "small" : size}
      title={title}
      sx={{ ...defaultStyles, ...additionalStyles }}
    >
      <Icon fontSize={isSmallScreen ? "small" : "medium"} />
    </IconButton>
  );
};

export default CustomIconButton;