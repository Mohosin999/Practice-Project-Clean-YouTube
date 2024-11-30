import React from "react";
import {
  Box,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Home, Twitter, LinkedIn, GitHub, Email } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: 3,
        paddingX: 6,
        marginTop: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: isSmallScreen ? 2 : 0,
      }}
    >
      {/* Copyright Section */}
      <Typography
        variant="body2"
        sx={{
          fontSize: isSmallScreen ? "0.8rem" : "1rem",
        }}
      >
        © {new Date().getFullYear()} Clean YouTube
      </Typography>

      {/* Social Media Links */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#1DA1F2" }}
        >
          <Twitter />
        </IconButton>
        <IconButton
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#0A66C2" }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "#fff" }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          href="mohosin.hasan.akash@gmail.com"
          sx={{ color: "#EA4335" }}
        >
          <Email />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
