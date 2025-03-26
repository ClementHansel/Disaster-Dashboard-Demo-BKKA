"use client";

import ChatHeader from "@/app/components/cortheaAI/ChatHeader";
import ChatSidebar from "@/app/components/cortheaAI/ChatSidebar";
import ChatWindow from "@/app/components/cortheaAI/ChatWindow";
import MessageInput from "@/app/components/cortheaAI/MessageInput";
import { Message } from "@/app/types/cortheaAI/chatTypes";
import React, { useState } from "react";

const CortheaAIPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handle sending message from the user
  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: message,
      timestamp: new Date().toISOString(), // Add timestamp
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setIsLoading(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now().toString(),
        sender: "ai",
        content: "AI response here", // AI logic will be added later
        timestamp: new Date().toISOString(), // Add timestamp
      };

      setMessages((prevMessages) => [...prevMessages, aiResponse]);
      setIsLoading(false);
    }, 2000);
  };

  // Handle sidebar toggle
  const handleSidebarToggle = () => {
    setIsSidebarOpen((prev) => !prev); // Toggle sidebar state
  };

  return (
    <div className="relative max-h-screen flex">
      {/* Sidebar component */}
      <ChatSidebar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleSidebarToggle} // Pass the toggle handler to the sidebar
      />

      {/* Page content, adjusting width based on sidebar state */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "mr-64" : "mr-20" // Adjust left margin based on sidebar state
        }`}
      >
        {/* Header component */}
        <ChatHeader />

        <div className="flex-1 overflow-auto mt-16">
          {/* Chat window component with scrollable messages */}
          <ChatWindow messages={messages} isLoading={isLoading} />
        </div>

        {/* Message input field */}
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default CortheaAIPage;
