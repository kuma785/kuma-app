import { useContext } from "react";
import { MessageContext } from "../contexts/MessageContext";

// カスタムフック
export function useMessages() {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessageProvider");
  }
  return context;
}
