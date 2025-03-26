"use client";

import React from "react";

interface CCTVHeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedSite: string;
  setSelectedSite: (value: string) => void;
  onRefresh: () => void;
  sites: string[]; // List of available site names for filtering
}

const CCTVHeader: React.FC<CCTVHeaderProps> = ({
  searchTerm,
  setSearchTerm,
  selectedSite,
  setSelectedSite,
  onRefresh,
  sites,
}) => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between mb-6">
      <div className="flex gap-2 w-full md:w-auto mb-4 md:mb-0">
        <input
          type="text"
          placeholder="Search by site, camera, status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full md:w-64"
          aria-label="Search Cameras"
        />
        <select
          value={selectedSite}
          onChange={(e) => setSelectedSite(e.target.value)}
          className="p-2 border rounded"
          aria-label="Filter by Site"
        >
          <option value="all">All Sites</option>
          {sites.map((site) => (
            <option key={site} value={site}>
              {site}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={onRefresh}
        className="p-2 bg-blue-500 text-white rounded"
        aria-label="Refresh"
      >
        Refresh
      </button>
    </header>
  );
};

export default CCTVHeader;
