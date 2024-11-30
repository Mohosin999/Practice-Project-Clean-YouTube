// import React, { useState } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import { useMediaQuery } from "@mui/material";
// import { Button } from "@mui/material";
// import Link from "@mui/material/Link";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { Container } from "@mui/system";
// import DrawerComp from "../../components/shared/drawer";
// import PlaylistForm from "../playlist-form";
// import {  } from "@mui/icons-material";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const isSmallScreen = useMediaQuery("(max-width:992px)");

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed">
//         <Container>
//           <Toolbar>
//             {isSmallScreen ? (
//               <>
//                 <Link
//                   to="/"
//                   component={RouterLink}
//                   sx={{ textDecoration: "none" }}
//                 >
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: "#efefef",
//                       userSelect: "none",
//                       letterSpacing: "0.2rem",
//                     }}
//                   >
//                     Clean•YouTube
//                   </Typography>
//                 </Link>
//                 <Box sx={{ flexGrow: 1 }} />
//                 <DrawerComp handleClickOpen={handleClickOpen} />
//                 <PlaylistForm open={open} handleClose={handleClose} />
//               </>
//             ) : (
//               <>
//                 <Link
//                   to="/"
//                   component={RouterLink}
//                   sx={{ textDecoration: "none" }}
//                 >
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: "#efefef",
//                       userSelect: "none",
//                       letterSpacing: "0.2rem",
//                     }}
//                   >
//                     Clean•YouTube
//                   </Typography>
//                 </Link>
//                 <Box sx={{ flexGrow: 1 }} />
//                 <Box>
//                   <Button
//                     to="/favorites"
//                     component={RouterLink}
//                     sx={{ color: "#efefef", marginLeft: "1.5rem" }}
//                   >
//                     Favorites
//                   </Button>
//                   <Button
//                     to="/recents"
//                     component={RouterLink}
//                     sx={{ color: "#efefef", marginLeft: "1.5rem" }}
//                   >
//                     Recents
//                   </Button>
//                   <Button
//                     sx={{ color: "#efefef", marginLeft: "1.5rem" }}
//                     onClick={handleClickOpen}
//                   >
//                     Add Playlist
//                   </Button>
//                   <PlaylistForm open={open} handleClose={handleClose} />
//                 </Box>
//               </>
//             )}
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </Box>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import DrawerComp from "../../components/shared/drawer";
import PlaylistForm from "../playlist-form";
import { Add, AllOut, Favorite } from "@mui/icons-material";
import CustomButton from "../shared/custom-button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:992px)");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Container>
          <Toolbar sx={{ padding: "0px !important" }}>
            {isSmallScreen ? (
              <>
                <Link
                  to="/"
                  component={RouterLink}
                  sx={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#efefef",
                      userSelect: "none",
                      letterSpacing: "0.2rem",
                    }}
                  >
                    Clean•YouTube
                  </Typography>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <DrawerComp handleClickOpen={handleClickOpen} />
                <PlaylistForm open={open} handleClose={handleClose} />
              </>
            ) : (
              <>
                <Link
                  to="/"
                  component={RouterLink}
                  sx={{ textDecoration: "none" }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#efefef",
                      userSelect: "none",
                      letterSpacing: "0.2rem",
                    }}
                  >
                    Clean•YouTube
                  </Typography>
                </Link>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: "flex", gap: 1 }}>
                  {/* <Button
                    to="/favorites"
                    component={RouterLink}
                    // sx={{ color: "#efefef", marginLeft: "1.5rem" }}
                  >
                    <Favorite /> Favorites
                  </Button> */}
                  {/* <Button
                    to="/favorites"
                    component={RouterLink}
                    sx={{ color: "#efefef", marginLeft: "1.5rem" }}
                  >
                    <Favorite sx={{ marginRight: "5px" }} /> Favorites
                  </Button> */}
                  {/* <CustomButton
                    Component={<Favorite sx={{ marginRight: "5px" }} />}
                    title={"Favorites A"}
                    to={"/favorites"}
                    component={RouterLink}
                  /> */}
                  <Button
                    to="/recents"
                    component={RouterLink}
                    // sx={{ color: "#efefef", marginLeft: "1.5rem" }}
                  >
                    <AllOut /> Recents
                  </Button>
                  <Button
                    // sx={{ color: "#efefef", marginLeft: "1.5rem" }}
                    onClick={handleClickOpen}
                  >
                    <Add /> Add Playlist
                  </Button>
                  <PlaylistForm open={open} handleClose={handleClose} />
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
