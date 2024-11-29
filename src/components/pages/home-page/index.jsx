// import React, { useState, useEffect } from "react";
// import { useStoreState } from "easy-peasy";
// import { Grid, Pagination, TextField } from "@mui/material";
// import { Container } from "@mui/system";
// import PlaylistCardItem from "../../playlist-card-item";

// const HomePage = () => {
//   const { data } = useStoreState((state) => state.playlists);
//   const playlistArray = Object.values(data);

//   // State for search query and pagination
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   // Filter playlists based on the search query
//   const filteredPlaylists = playlistArray.filter((playlist) =>
//     playlist.playlistTitle.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Calculate pagination
//   const totalPages = Math.ceil(filteredPlaylists.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentPlaylists = filteredPlaylists.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   // Handle page change
//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   // Handle search query change
//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//     setCurrentPage(1); // Reset to the first page after filtering
//   };

//   // Adjust pagination when playlists are deleted
//   useEffect(() => {
//     if (currentPlaylists.length === 0 && currentPage > 1) {
//       setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//     }
//   }, [currentPlaylists, currentPage]);

//   return (
//     <Container maxWidth={"lg"} sx={{ paddingTop: 12 }}>
//       {playlistArray.length > 0 ? (
//         <>
//           {/* Search Bar */}
//           <TextField
//             placeholder="Search Playlists"
//             variant="outlined"
//             size="small"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             sx={{
//               marginBottom: 3,
//               width: "100%",
//               backgroundColor: "#fff",
//               borderRadius: "4px",
//             }}
//           />

//           {/* Playlist Grid */}
//           <Grid container alignItems="stretch" spacing={2}>
//             {currentPlaylists.length > 0 ? (
//               currentPlaylists.map((item) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} key={item.playlistId}>
//                   <PlaylistCardItem
//                     playlistId={item.playlistId}
//                     playlistThumbnail={item.playlistItems[0]?.thumbnails}
//                     playlistTitle={item.playlistTitle}
//                     channelTitle={item.channelTitle}
//                     path={"home"}
//                   />
//                 </Grid>
//               ))
//             ) : (
//               <Grid item xs={12}>
//                 <p>No playlists found</p>
//               </Grid>
//             )}
//           </Grid>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div style={{ display: "flex", justifyContent: "end" }}>
//               <Pagination
//                 count={totalPages}
//                 page={currentPage}
//                 onChange={handlePageChange}
//                 color={"primary"}
//                 sx={{ marginTop: 2 }}
//               />
//             </div>
//           )}
//         </>
//       ) : (
//         <p style={{ textAlign: "center", marginTop: 50 }}>
//           No playlists available!
//         </p>
//       )}
//     </Container>
//   );
// };

// export default HomePage;

import React, { useState, useEffect, Suspense, lazy } from "react";
import { useStoreState } from "easy-peasy";
import { Grid, Pagination, TextField } from "@mui/material";
import { Container } from "@mui/system";

// Lazy load PlaylistCardItem component
const PlaylistCardItem = lazy(() => import("../../playlist-card-item"));

const HomePage = () => {
  const { data } = useStoreState((state) => state.playlists);
  const playlistArray = Object.values(data);

  // State for search query and pagination
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filter playlists based on the search query
  const filteredPlaylists = playlistArray.filter((playlist) =>
    playlist.playlistTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredPlaylists.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlaylists = filteredPlaylists.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page after filtering
  };

  // Adjust pagination when playlists are deleted
  useEffect(() => {
    if (currentPlaylists.length === 0 && currentPage > 1) {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    }
  }, [currentPlaylists, currentPage]);

  return (
    <Container maxWidth={"lg"} sx={{ paddingTop: 12 }}>
      {playlistArray.length > 0 ? (
        <>
          {/* Search Bar */}
          <TextField
            placeholder="Search Playlists"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              marginBottom: 3,
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: "4px",
            }}
          />

          {/* Playlist Grid */}
          <Grid container alignItems="stretch" spacing={2}>
            {currentPlaylists.length > 0 ? (
              currentPlaylists.map((item) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={item.playlistId}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <PlaylistCardItem
                      playlistId={item.playlistId}
                      playlistThumbnail={item.playlistItems[0]?.thumbnails}
                      playlistTitle={item.playlistTitle}
                      channelTitle={item.channelTitle}
                      path={"home"}
                    />
                  </Suspense>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <p>No playlists found</p>
              </Grid>
            )}
          </Grid>

          {/* Pagination */}
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
      ) : (
        <p style={{ textAlign: "center", marginTop: 50 }}>
          No playlists available!
        </p>
      )}
    </Container>
  );
};

export default HomePage;
