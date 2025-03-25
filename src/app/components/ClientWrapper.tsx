"use client";

import { useState } from "react";
import Header from "@/app/components/layouts/Header";
import Sidebar from "@/app/components/layouts/Sidebar";
import Footer from "@/app/components/layouts/Footer";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      {/* Sidebar + Main Content */}
      <div className="flex flex-grow">
        <Sidebar
          isExpanded={isExpanded}
          toggleSidebar={() => setIsExpanded(!isExpanded)}
        />
        <main className="flex-grow p-4 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
