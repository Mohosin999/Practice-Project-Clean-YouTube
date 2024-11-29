// import React from "react";
// import { Link } from "react-router-dom";
// import { useStoreActions } from "easy-peasy";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { Button, Stack } from "@mui/material";
// import { PlayCircleOutline } from "@mui/icons-material";
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
//     <div
//       style={{
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         margin: 2,
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
//           borderRadius: "5%",
//           transition: "transform 0.3s ease",
//           "&:hover": {
//             transform: "scale(1.05)",
//           },
//         }}
//       />

//       <CardContent sx={{ paddingBottom: "0px !important" }}>
//         <Typography variant="body1" color="text.primary">
//           {`${
//             playlistTitle.length > 70
//               ? playlistTitle.substr(0, 70) + "..."
//               : playlistTitle
//           }`}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {channelTitle}
//         </Typography>

//         <div style={{ display: "flex", marginTop: "0.4rem" }}>
//           <Button
//             to={`/player/${playlistId}`}
//             component={Link}
//             onClick={() => addToRecent(playlistId)}
//             sx={{ padding: "6px 0px" }}
//           >
//             <Typography variant="body2" fontWeight={500}>
//               View Playlist
//             </Typography>
//           </Button>

//           <div style={{ marginLeft: "auto" }}>
//             <IconButton id={playlistId} path={path} />
//           </div>
//         </div>
//       </CardContent>
//     </div>
//   );
// };

// export default PlaylistCardItem;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import IconButton from "../icon-button";

const PlaylistCardItem = ({
  playlistThumbnail,
  playlistTitle,
  channelTitle,
  playlistId,
  path,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { addToRecent } = useStoreActions((actions) => actions.recents);
  const { items } = useStoreState((state) => state.favorites);

  // Update `isFavorite` based on `items` and `playlistId`
  useEffect(() => {
    const favoriteExists = items.some((item) => item === playlistId);
    setIsFavorite(favoriteExists);
  }, [items, playlistId]);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: 2,
      }}
    >
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
          borderRadius: "5%",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />

      <CardContent sx={{ paddingBottom: "0px !important" }}>
        <Typography variant="body1" color="text.primary">
          {`${
            playlistTitle.length > 70
              ? playlistTitle.substr(0, 70) + "..."
              : playlistTitle
          }`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {channelTitle}
        </Typography>

        <div style={{ display: "flex", marginTop: "0.4rem" }}>
          <Button
            to={`/player/${playlistId}`}
            component={Link}
            onClick={() => addToRecent(playlistId)}
            sx={{ padding: "6px 0px" }}
          >
            <Typography variant="body2" fontWeight={500}>
              View Playlist
            </Typography>
          </Button>

          <div style={{ marginLeft: "auto" }}>
            <IconButton id={playlistId} path={path} isFavorite={isFavorite} />
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default PlaylistCardItem;
