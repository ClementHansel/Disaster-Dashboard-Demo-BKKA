// src/types/cortheaAI/chatTypes.ts

export type Message = {
  id: string;
  content: string;
  sender: "user" | "ai"; // Either user or ai
  timestamp: string; // Timestamp when the message is sent
};

export type ChatState = {
  messages: Message[]; // Array of messages in the current chat
  isLoading: boolean; // Indicates if AI is processing the message
};

export type User = {
  id: string;
  name: string;
  avatarUrl: string;
};

export type AIResponse = {
  id: string;
  content: string;
  timestamp: string;
};
