"use client";

import React from "react";

interface AnalyticsHeaderProps {
  title?: string;
}

const AnalyticsHeader: React.FC<AnalyticsHeaderProps> = ({
  title = "Analytics",
}) => {
  return (
    <header className="bg-blue-600 text-white p-4 rounded-t-lg shadow-md">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
};

export default AnalyticsHeader;
