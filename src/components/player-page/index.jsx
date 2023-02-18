import React from "react";
import { useStoreState } from "easy-peasy";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import VideoCardItem from "../video-card-item";

const PlayerPage = () => {
  const { playlistId } = useParams();
  const { data } = useStoreState((state) => state.playlists);
  const current = data[playlistId];

  if (!current) return;

  const videoItemArray = current.playlistItems;

  return (
    <div>
      <Container maxWidth={"lg"} sx={{ marginTop: 12 }}>
        {videoItemArray.length > 0 && (
          <Grid container alignItems="stretch">
            {videoItemArray.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} mb={1}>
                <VideoCardItem
                  key={index}
                  title={item.title}
                  thumbnails={item.thumbnails}
                  videoId={item.contentDetails.videoId}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default PlayerPage;
