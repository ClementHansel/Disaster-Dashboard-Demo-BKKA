"use client";

import React from "react";

type Site = {
  id: string;
  name: string;
};

const mockSites: Site[] = [
  { id: "site-1", name: "Site A" },
  { id: "site-2", name: "Site B" },
  { id: "site-3", name: "Site C" },
];

type SiteSelectProps = {
  selectedSite: string;
  onChange: (siteId: string) => void;
  label?: string;
  includeDefaultOption?: boolean;
};

const SiteSelect: React.FC<SiteSelectProps> = ({
  selectedSite,
  onChange,
  label = "Select Site",
  includeDefaultOption = true,
}) => {
  return (
    <div>
      <label
        htmlFor="site-select"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id="site-select"
        value={selectedSite}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded p-2"
      >
        {includeDefaultOption && <option value="">-- Choose a site --</option>}
        {mockSites.map((site: Site) => (
          <option key={site.id} value={site.id}>
            {site.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SiteSelect;
