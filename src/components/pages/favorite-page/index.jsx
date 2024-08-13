// import React from "react";
// import { useStoreState, useStoreActions } from "easy-peasy";
// import { Container } from "@mui/system";
// import PlaylistCardItem from "../../playlist-card-item";
// import { Box, Grid, Typography } from "@mui/material";

// const Favorites = () => {
//   const { data } = useStoreState((state) => state.playlists);
//   const { items } = useStoreState((state) => state.favorites);
//   const itemArray = [];
//   items.forEach((item) => itemArray.push(data[item]));

//   return (
//     <div>
//       <Container maxWidth={"lg"} sx={{ paddingTop: 12 }}>
//         {itemArray.length > 0 ? (
//           <Grid container alignItems="stretch">
//             {itemArray.map((item) => (
//               <Grid item xs={12} sm={6} md={4} lg={3} mb={2}>
//                 <PlaylistCardItem
//                   key={item.playlistId}
//                   playlistId={item.playlistId}
//                   playlistThumbnail={item.playlistThumbnail}
//                   playlistTitle={item.playlistTitle}
//                   channelTitle={item.channelTitle}
//                   path={"favorites"}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         ) : (
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               minHeight: "50vh",
//               textAlign: "center",
//               color: "text.secondary",
//             }}
//           >
//             <Typography variant="h4" gutterBottom>
//               🗳️ Empty Favorite Page
//             </Typography>
//             <Typography variant="body1">
//               Start adding your favorite playlists to see them here!
//             </Typography>
//           </Box>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default Favorites;

import React, { useState } from "react";
import { useStoreState } from "easy-peasy";
import { Container } from "@mui/system";
import PlaylistCardItem from "../../playlist-card-item";
import { Box, Grid, Typography, Pagination } from "@mui/material";

const Favorites = () => {
  const { data } = useStoreState((state) => state.playlists);
  const { items } = useStoreState((state) => state.favorites);

  const itemArray = items.map((item) => data[item]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the number of pages
  const totalPages = Math.ceil(itemArray.length / itemsPerPage);

  // Calculate the index of the first item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemArray.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth={"lg"} sx={{ paddingTop: 12 }}>
      {itemArray.length > 0 ? (
        <>
          <Grid container alignItems="stretch" spacing={2} sx={{ flex: 1 }}>
            {currentItems.map((item) => (
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
                  path={"favorites"}
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
              />
            </div>
          )}
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          <Typography variant="h4" gutterBottom>
            🗳️ Empty Favorite Page
          </Typography>
          <Typography variant="body1">
            Start adding your favorite playlists to see them here!
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Favorites;
