// import React from "react";
// import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";

// const VideoCardItem = ({ title, thumbnails, videoId, videos, playlistId }) => {
//   const videoIndex = videos.indexOf(videoId);

//   return (
//     <div>
//       <Card
//         sx={{
//           backgroundColor: "#efefef",
//           height: "300",
//           display: "flex",
//           flexDirection: "column",
//           margin: 1,
//         }}
//       >
//         <Link to={`/player/${playlistId}/${videoIndex}?videoId=${videoId}`}>
//           <CardMedia
//             component="img"
//             image={thumbnails.url}
//             alt={title}
//             sx={{ height: "180", width: "320" }}
//           />
//         </Link>
//         <CardContent>
//           <Typography variant="body1" color="text.primary">
//             {`${title.length > 50 ? title.substr(0, 50) + "..." : title}`}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default VideoCardItem;

// <PlayCircleOutlineIcon fontSize="large" />

import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { PlayCircleOutline } from "@mui/icons-material";

const VideoCardItem = ({ title, thumbnails, videoId, videos, playlistId }) => {
  const videoIndex = videos.indexOf(videoId);

  return (
    <div>
      <div
        style={{
          // backgroundColor: "#efefef",
          height: "300",
          display: "flex",
          flexDirection: "column",
          margin: 2,
        }}
      >
        <Link
          to={`/player/${playlistId}/${videoIndex}?videoId=${videoId}`}
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            image={thumbnails.url}
            alt={title}
            sx={{
              height: "180",
              width: "320",
              borderRadius: "5%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />

          <CardContent sx={{ display: "flex" }}>
            <PlayCircleOutline sx={{ marginRight: "0.3rem", color: "#fff" }} />
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ color: "#fff" }}
            >
              {`${title.length > 50 ? title.substr(0, 50) + "..." : title}`}
            </Typography>
          </CardContent>
        </Link>
      </div>
    </div>
  );
};

export default VideoCardItem;
