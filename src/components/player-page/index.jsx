import React from "react";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";

const PlayerPage = ({ data }) => {
  const { playlistId } = useParams();
  const current = data[playlistId];

  if (!current) return;

  const currentArray = Object.keys(current);

  return (
    <div>
      <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
        <Typography variant="h2" align="center">
          {current.playlists}
        </Typography>
      </Container>
      {/* <Container maxWidth={"lg"} sx={{ marginTop: 12 }}>
        {currentArray.length > 0 && (
          <Grid container alignItems="stretch">
            {currentArray.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
                <PlaylistCardItem
                  key={item.playlistId}
                  playlistId={item.playlistId}
                  playlistThumbnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container> */}
    </div>
  );
};

export default PlayerPage;
