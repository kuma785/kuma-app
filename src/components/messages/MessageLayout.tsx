import { useMessages } from "../../hooks/useMessages";
import { Footer } from "./elements/Footer";
import { Box } from "@mui/material";
import { MessageBubble } from "./elements/MessageBubble";

export function MessageLayout(senderId:{senderId:string}) {
    const { messages } = useMessages();
    return (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "#f5f5f5",
            padding: "16px 16px 56px 16px",
          }}
        >
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                senderId={message.senderId}
                messageSenderId={senderId.senderId}
                text={message.text}
                timestamp={message.timestamp}
              />
            ))}
          <Footer senderId={senderId.senderId}/>
        </Box>
      );
}
