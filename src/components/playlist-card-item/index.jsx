// import React from "react";
// import { Link } from "react-router-dom";
// import { useStoreActions } from "easy-peasy";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Typography from "@mui/material/Typography";
// import { Button } from "@mui/material";
// import { PlayCircleOutline } from "@mui/icons-material";
// import { Box, Stack } from "@mui/system";
// import IconButton from "../icon-button";

// const PlaylistCardItem = ({
//   playlistThumbnail,
//   playlistTitle,
//   channelTitle,
//   playlistId,
//   path,
// }) => {
//   const { addToRecent } = useStoreActions((actions) => actions.recents);

//   return (
//     <Card
//       sx={{
//         backgroundColor: "#efefef",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         margin: 1,
//       }}
//     >
//       <CardMedia
//         to={`/player/${playlistId}`}
//         component={Link}
//         image={playlistThumbnail.url}
//         alt={playlistTitle}
//         onClick={() => addToRecent(playlistId)}
//         sx={{
//           paddingTop: "56.25%",
//           objectFit: "cover",
//           objectPosition: "center",
//         }}
//       />

//       <CardContent>
//         <Typography variant="body1" color="text.primary">
//           {`${
//             playlistTitle.length > 50
//               ? playlistTitle.substr(0, 50) + "..."
//               : playlistTitle
//           }`}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {channelTitle}
//         </Typography>
//       </CardContent>

//       <Box sx={{ flexGrow: 1 }}></Box>
//       <CardActions disableSpacing>
//         <Button
//           to={`/player/${playlistId}`}
//           component={Link}
//           onClick={() => addToRecent(playlistId)}
//         >
//           <Stack direction={"row"} spacing={1} alignItems={"center"}>
//             <PlayCircleOutline />
//             <Typography variant="body2" fontWeight={600}>
//               View Playlist
//             </Typography>
//           </Stack>
//         </Button>

//         <div style={{ marginLeft: "auto" }}>
//           <IconButton id={playlistId} path={path} />
//         </div>
//       </CardActions>
//     </Card>
//   );
// };

// export default PlaylistCardItem;

import React from "react";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Box, Stack } from "@mui/system";
import IconButton from "../icon-button";

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
  path,
}) => {
  const { addToRecent } = useStoreActions((actions) => actions.recents);

  return (
    <Card
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        margin: "16px",
        overflow: "hidden",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      {/* Thumbnail Section */}
      <CardMedia
        to={`/player/${playlistId}`}
        component={Link}
        image={playlistThumbnail.url}
        alt={playlistTitle}
        onClick={() => addToRecent(playlistId)}
        sx={{
          paddingTop: "56.25%",
          objectFit: "cover",
          objectPosition: "center",
          cursor: "pointer",
        }}
      />

      {/* Content Section */}
      <CardContent
        sx={{
          padding: "16px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          color="text.primary"
          fontWeight={600}
          gutterBottom
          sx={{
            fontSize: "1rem",
            lineHeight: "1.5",
          }}
        >
          {playlistTitle.length > 50
            ? `${playlistTitle.substr(0, 50)}...`
            : playlistTitle}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "0.875rem", marginTop: "4px" }}
        >
          {channelTitle}
        </Typography>
      </CardContent>

      {/* Actions Section */}
      <CardActions
        sx={{
          padding: "8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          to={`/player/${playlistId}`}
          component={Link}
          onClick={() => addToRecent(playlistId)}
          sx={{
            textTransform: "none",
            backgroundColor: "#1976d2",
            color: "#fff",
            borderRadius: "8px",
            padding: "8px 12px",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <PlayCircleOutline />
            <Typography variant="body2" fontWeight={600}>
              View Playlist
            </Typography>
          </Stack>
        </Button>

        <IconButton id={playlistId} path={path} />
      </CardActions>
    </Card>
  );
};

export default PlaylistCardItem;
