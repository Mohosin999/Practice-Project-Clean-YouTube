import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

const PlayerPage = () => {
  return (
    <div>
      <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
        <Typography variant="h2" align="center">
          PLAYER PAGE
        </Typography>
      </Container>
    </div>
  );
};

export default PlayerPage;
