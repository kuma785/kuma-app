import { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useMessages } from "../../../hooks/useMessages";

export function Footer(senderId: { senderId: string }) {
  const [message, setMessage] = useState("");
  const { addMessage } = useMessages();

  const handleSend = () => {
    if (message.trim()) {
      console.log(message);
      addMessage(senderId.senderId, message);
      setMessage("");
  }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "white",
        padding: "8px",
        borderTop: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="メッセージを入力"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
        sx={{ flexGrow: 1, marginRight: "8px" }}
      />
      <IconButton color="primary" onClick={handleSend}>
        <SendIcon />
      </IconButton>
    </Box>
  );
}
