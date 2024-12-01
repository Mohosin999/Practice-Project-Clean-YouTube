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

/**
 * Footer component that displays contact information and social media links.
 * It includes an email section with the ability to copy the email to the clipboard
 * and social media icons with hover effects.
 */
const Footer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const email = "mohosin.hasan.akash@gmail.com";

  /**
   * Handles the click event to copy the email to clipboard.
   * Displays a "Copied" message when successful.
   */
  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
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
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: isMediumScreen ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: isMediumScreen ? 2 : 0,
          width: "100%",
          borderBottom: "1px solid #fff",
          paddingBottom: 2,
        }}
      >
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
            Quick Contact via Email
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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

      <Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: isMediumScreen ? "0.8rem" : "1rem",
          }}
        >
          © 2023 Clean YouTube
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
