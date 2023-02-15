import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";

const PlayerPage = ({ data }) => {
  const { playlistId } = useParams();
  const current = data[playlistId];

  if (!current) return;

  return (
    <div>
      <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
        <Typography variant="h2" align="center">
          {current.playlists}
        </Typography>
      </Container>
    </div>
  );
};

export default PlayerPage;
