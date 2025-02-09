import { createContext, useState, ReactNode } from "react";

// メッセージの型
interface MessageType {
  id: number;
  senderId: string;
  text: string;
  timestamp: string; // 追加: メッセージの送信時間
}

// コンテキストの型
interface MessageContextType {
  messages: MessageType[];
  addMessage: (senderId: string, text: string) => void;
}

// コンテキスト作成
export const MessageContext = createContext<MessageContextType | undefined>(undefined);

// プロバイダー
export function MessageProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const addMessage = (senderId: string, text: string) => {
    const newMessage: MessageType = {
      id: messages.length + 1,
      senderId,
      text,
      timestamp: new Date().toISOString(), // 現在時刻を ISO 形式で保存
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
}
