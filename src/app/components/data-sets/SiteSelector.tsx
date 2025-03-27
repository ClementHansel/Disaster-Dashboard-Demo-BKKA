import React from "react";

interface Site {
  id: string;
  name: string;
}

interface SiteSelectorProps {
  sites: Site[]; // ✅ Add this prop
  onSelect: (site: Site | null) => void;
}

const SiteSelector: React.FC<SiteSelectorProps> = ({ sites, onSelect }) => {
  return (
    <div>
      <label
        htmlFor="site-selector"
        className="block text-sm font-medium text-gray-700"
      >
        Select Site
      </label>
      <select
        id="site-selector"
        className="mt-1 block w-full p-2 border rounded"
        onChange={(e) => {
          const selectedSite =
            sites.find((s) => s.id === e.target.value) || null;
          onSelect(selectedSite);
        }}
      >
        <option value="">All Sites</option>
        {sites.map((site) => (
          <option key={site.id} value={site.id}>
            {site.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SiteSelector;
