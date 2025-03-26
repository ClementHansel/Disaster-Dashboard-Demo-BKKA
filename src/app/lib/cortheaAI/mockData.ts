// src/lib/cortheaAI/mockData.ts

import { Message } from "@/app/types/cortheaAI/chatTypes";

export const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hello, I need some help with my project.",
    sender: "user",
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    content: "Sure! How can I assist you today?",
    sender: "ai",
    timestamp: new Date().toISOString(),
  },
  {
    id: "3",
    content: "I'm having trouble with my React code. Can you help me fix it?",
    sender: "user",
    timestamp: new Date().toISOString(),
  },
  {
    id: "4",
    content: "I'd be happy to! Could you share the code you're working on?",
    sender: "ai",
    timestamp: new Date().toISOString(),
  },
];
