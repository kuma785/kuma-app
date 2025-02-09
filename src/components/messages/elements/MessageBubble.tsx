import { Box, Typography } from "@mui/material";

interface MessageBubbleProps {
  senderId: string;
  messageSenderId: string;
  text: string;
}

export function MessageBubble({ senderId, messageSenderId, text }: MessageBubbleProps) {
  const isOwnMessage = senderId === messageSenderId;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isOwnMessage ? "flex-end" : "flex-start",
        marginBottom: "8px",
      }}
    >
      <Typography
        sx={{
          maxWidth: "70%",
          padding: "8px 12px",
          borderRadius: isOwnMessage
            ? "16px 4px 16px 16px" 
            : "4px 16px 16px 16px",
          backgroundColor: isOwnMessage ? "#d1e7ff" : "#ffffff",
          color: "#000",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
