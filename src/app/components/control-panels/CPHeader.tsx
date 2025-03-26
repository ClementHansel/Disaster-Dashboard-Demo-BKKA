"use client";

import React from "react";

interface CPHeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onRefresh: () => void;
}

const CPHeader: React.FC<CPHeaderProps> = ({
  searchTerm,
  setSearchTerm,
  onRefresh,
}) => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <div className="text-xl font-bold">Control Panel</div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search devices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 rounded border border-blue-300 text-black"
          aria-label="Search Devices"
        />
        <button
          onClick={onRefresh}
          className="px-4 py-2 bg-blue-800 rounded hover:bg-blue-900"
          aria-label="Refresh Control Panel"
        >
          Refresh
        </button>
      </div>
    </header>
  );
};

export default CPHeader;
