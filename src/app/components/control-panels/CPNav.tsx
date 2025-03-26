"use client";

import React from "react";

interface CPNavProps {
  sites: string[];
  selectedSite: string;
  setSelectedSite: (value: string) => void;
}

const CPNav: React.FC<CPNavProps> = ({
  sites,
  selectedSite,
  setSelectedSite,
}) => {
  return (
    <div className="p-4 text-black">
      <label htmlFor="site-select" className="sr-only">
        Choose a Site
      </label>
      <select
        id="site-select"
        value={selectedSite}
        onChange={(e) => setSelectedSite(e.target.value)}
        className="p-2 bg-gray-200 rounded text-black w-full"
      >
        {sites.map((site) => (
          <option key={site} value={site}>
            {site}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CPNav;
