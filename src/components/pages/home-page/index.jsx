import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import { Grid, Pagination } from "@mui/material";
import { Container } from "@mui/system";
import PlaylistCardItem from "../../playlist-card-item";

const HomePage = () => {
  const { data } = useStoreState((state) => state.playlists);
  const playlistArray = Object.values(data);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the number of pages
  const totalPages = Math.ceil(playlistArray.length / itemsPerPage);

  // Calculate the index of the first item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlaylists = playlistArray.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Container maxWidth={"lg"} sx={{ paddingTop: 12 }}>
        {playlistArray.length > 0 && (
          <>
            <Grid container alignItems="stretch">
              {currentPlaylists.map((item) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  mb={2}
                  key={item.playlistId}
                >
                  <PlaylistCardItem
                    playlistId={item.playlistId}
                    playlistThumbnail={item.playlistThumbnail}
                    playlistTitle={item.playlistTitle}
                    channelTitle={item.channelTitle}
                    path={"home"}
                  />
                </Grid>
              ))}
            </Grid>
            {totalPages > 1 && (
              <div style={{ display: "flex", justifyContent: "end" }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  color={"primary"}
                  sx={{ marginTop: 2 }}
                />
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
