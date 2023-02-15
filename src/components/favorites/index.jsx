import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const Favorites = () => {
  return (
    <div>
      <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
        <Typography variant="h2" align="center">
          I am Fovorite Area
        </Typography>
      </Container>
    </div>
  );
};

export default Favorites;
