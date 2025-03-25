"use client";

import React from "react";

const LoadingSpinner: React.FC<{ size?: number }> = ({ size = 24 }) => {
  return (
    <div
      className="animate-spin rounded-full border-4 border-gray-300 border-t-blue-500"
      style={{ width: size, height: size }}
    />
  );
};

export default LoadingSpinner;
