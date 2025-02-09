import { Box, Typography } from "@mui/material";
import { format } from "date-fns";

interface MessageBubbleProps {
  senderId: string;
  messageSenderId: string;
  text: string;
  timestamp: string;
}

export function MessageBubble({ senderId, messageSenderId, text, timestamp }: MessageBubbleProps) {
  const isOwnMessage = senderId === messageSenderId;
  const formattedTime = format(new Date(timestamp), "HH:mm"); // 時間をフォーマット

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isOwnMessage ? "row-reverse" : "row", // 自分のメッセージなら吹き出しを右寄せ
        alignItems: "flex-end", // 吹き出しと時間を下揃え
        gap: "4px", // 吹き出しと時間の間隔
        marginBottom: "8px",
      }}
    >
      {/* メッセージ吹き出し */}
      <Box
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
        <Typography sx={{ wordBreak: "break-word" }}>{text}</Typography>
      </Box>

      {/* 時間表示（吹き出しの外） */}
      <Typography sx={{ fontSize: "10px", color: "#666", padding: "0 4px" }}>
        {formattedTime}
      </Typography>
    </Box>
  );
}
