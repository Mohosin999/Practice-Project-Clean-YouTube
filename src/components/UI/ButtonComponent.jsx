import React from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

const ButtonComponent = ({ text, variant, startIcon, handleClickOpen, sx }) => {
  return (
    <>
      <Button
        variant={variant}
        startIcon={startIcon}
        onClick={handleClickOpen}
        sx={sx}
      >
        <Typography variant="button">{text}</Typography>
      </Button>
    </>
  );
};

export default ButtonComponent;
