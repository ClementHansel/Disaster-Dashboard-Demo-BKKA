// src/components/cortheaAI/MessageBubble.tsx

import { Message } from "@/app/types/cortheaAI/chatTypes";
import React from "react";

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} space-x-2`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300"></div> // AI Avatar
      )}
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isUser
            ? "bg-blue-500 text-white rounded-tl-none"
            : "bg-gray-100 text-gray-900 rounded-tr-none"
        }`}
      >
        <p>{message.content}</p>
      </div>
    </div>
  );
};

export default MessageBubble;
