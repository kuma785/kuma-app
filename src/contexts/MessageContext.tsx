import { createContext, useState, ReactNode } from "react";

// メッセージの型
interface MessageType {
  id: number;
  senderId: string;
  text: string;
}

// コンテキストの型
interface MessageContextType {
  messages: MessageType[];
  addMessage: (senderId: string, text: string) => void;
}

// コンテキスト作成（useContext の使用は別ファイルで）
export const MessageContext = createContext<MessageContextType | undefined>(undefined);

// プロバイダー
export function MessageProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const addMessage = (senderId: string, text: string) => {
    setMessages((prev) => [...prev, { id: prev.length + 1, senderId, text }]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
