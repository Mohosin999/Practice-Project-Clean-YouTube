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
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
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
        paddingX: isMediumScreen ? 0 : 6,
        marginTop: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: isMediumScreen ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: isMediumScreen ? 2 : 0,
      }}
    >
      {/* Left Section */}
      <Typography
        variant="body2"
        sx={{
          fontSize: isMediumScreen ? "0.8rem" : "1rem",
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
            flexDirection: isMediumScreen ? "column" : "row",
            alignItems: "center",
            gap: 1,
            border: "1px solid #fff",
            padding: "12px 24px",
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
