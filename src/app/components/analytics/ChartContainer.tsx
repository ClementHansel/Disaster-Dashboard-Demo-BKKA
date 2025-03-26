"use client";

import React from "react";

interface ChartContainerProps {
  children: React.ReactNode;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ children }) => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  );
};

export default ChartContainer;
