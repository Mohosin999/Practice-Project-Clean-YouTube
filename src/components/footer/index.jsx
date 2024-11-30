// import React from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Home, Twitter, LinkedIn, GitHub, Email } from "@mui/icons-material";

// const Footer = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#333",
//         color: "#fff",
//         padding: 3,
//         paddingX: 6,
//         marginTop: 4,
//         textAlign: "center",
//         display: "flex",
//         flexDirection: isSmallScreen ? "column" : "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         gap: isSmallScreen ? 2 : 0,
//       }}
//     >
//       {/* Copyright Section */}
//       <Typography
//         variant="body2"
//         sx={{
//           fontSize: isSmallScreen ? "0.8rem" : "1rem",
//         }}
//       >
//         © {new Date().getFullYear()} Clean YouTube
//       </Typography>

//       {/* Social Media Links */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         <IconButton
//           href="https://twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{ color: "#1DA1F2" }}
//         >
//           <Twitter />
//         </IconButton>
//         <IconButton
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{ color: "#0A66C2" }}
//         >
//           <LinkedIn />
//         </IconButton>
//         <IconButton
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{ color: "#fff" }}
//         >
//           <GitHub />
//         </IconButton>
//         <IconButton
//           href="mohosin.hasan.akash@gmail.com"
//           sx={{ color: "#EA4335" }}
//         >
//           <Email />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

// import React from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Twitter, LinkedIn, GitHub, Email } from "@mui/icons-material";

// const Footer = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

//   const handleCopyEmail = () => {
//     const email = "mohosin.hasan.akash@gmail.com";
//     navigator.clipboard
//       .writeText(email)
//       .then(() => {
//         alert("Email copied to clipboard!");
//       })
//       .catch((err) => {
//         console.error("Failed to copy email:", err);
//       });
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#333",
//         color: "#fff",
//         padding: 3,
//         paddingX: 6,
//         marginTop: 4,
//         textAlign: "center",
//         display: "flex",
//         flexDirection: isSmallScreen ? "column" : "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         gap: isSmallScreen ? 2 : 0,
//       }}
//     >
//       {/* Copyright Section */}
//       <Typography
//         variant="body2"
//         sx={{
//           fontSize: isSmallScreen ? "0.8rem" : "1rem",
//         }}
//       >
//         © {new Date().getFullYear()} Clean YouTube
//       </Typography>

//       {/* Social Media Links */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         <IconButton
//           href="https://twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{ color: "#1DA1F2" }}
//         >
//           <Twitter />
//         </IconButton>
//         <IconButton
//           href="https://linkedin.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{ color: "#0A66C2" }}
//         >
//           <LinkedIn />
//         </IconButton>
//         <IconButton
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           sx={{ color: "#fff" }}
//         >
//           <GitHub />
//         </IconButton>
//         <IconButton onClick={handleCopyEmail} sx={{ color: "#EA4335" }}>
//           <Email />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Twitter, LinkedIn, GitHub, Facebook } from "@mui/icons-material";

const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const email = "mohosin.hasan.akash@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
      });
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #141E30, #243B55)",
        color: "#fff",
        padding: 3,
        paddingX: isSmallScreen ? 0 : 6,
        marginTop: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: isSmallScreen ? 2 : 0,
      }}
    >
      {/* Left Section */}
      <Typography
        variant="body2"
        sx={{
          fontSize: isSmallScreen ? "0.8rem" : "1rem",
        }}
      >
        © {new Date().getFullYear()} Clean YouTube
      </Typography>

      {/* Center Email Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: 1,
          }}
        >
          Email me for quick contact
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: "center",
            gap: 1,
            border: "1px solid #fff",
            padding: "12px",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              wordBreak: "break-word",
            }}
          >
            {email}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleCopyEmail}
            sx={{
              fontWeight: "bold",
              backgroundColor: isCopied ? "#4caf50" : "#1E90FF",
              color: "#fff",
              borderRadius: "20px",
              padding: "4px 10px",
              fontSize: "0.9rem",
              "&:hover": {
                backgroundColor: isCopied ? "#388e3c" : "#1C86EE",
              },
            }}
          >
            {isCopied ? "Copied" : "Copy"}
          </Button>
        </Box>
      </Box>

      {/* Right Social Media Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton
          href="https://www.facebook.com/mohosinh99"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#4267B2",
            "&:hover": {
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
        >
          <Facebook />
        </IconButton>
        <IconButton
          href="https://x.com/mohosinh99"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#1DA1F2",
            "&:hover": {
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/mohosinh99/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#0A66C2",
            "&:hover": {
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="https://github.com/Mohosin999"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            "&:hover": {
              transform: "scale(1.2)",
              transition: "transform 0.2s ease-in-out",
            },
          }}
        >
          <GitHub />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
