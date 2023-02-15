import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const NotFound = () => {
  return (
    <div>
      <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
        <Typography variant="h2" align="center">
          404 Page Not Found
        </Typography>
      </Container>
    </div>
  );
};

export default NotFound;
