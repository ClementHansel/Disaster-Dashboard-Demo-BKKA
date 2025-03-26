"use client";

import React, { useState, useEffect } from "react";

interface UpdateSiteProps {
  initialSiteData: {
    id: string;
    siteName: string;
    ipAddress: string;
    location: string;
  };
  onUpdateSite?: (site: {
    id: string;
    siteName: string;
    ipAddress: string;
    location: string;
  }) => void;
}

const UpdateSite: React.FC<UpdateSiteProps> = ({
  initialSiteData,
  onUpdateSite,
}) => {
  const [siteName, setSiteName] = useState(initialSiteData.siteName);
  const [ipAddress, setIpAddress] = useState(initialSiteData.ipAddress);
  const [location, setLocation] = useState(initialSiteData.location);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSite = {
      id: initialSiteData.id,
      siteName,
      ipAddress,
      location,
    };
    if (onUpdateSite) onUpdateSite(updatedSite);
  };

  useEffect(() => {
    setSiteName(initialSiteData.siteName);
    setIpAddress(initialSiteData.ipAddress);
    setLocation(initialSiteData.location);
  }, [initialSiteData]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Update Site</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="siteName" className="block text-sm font-semibold">
            Site Name
          </label>
          <input
            id="siteName"
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="ipAddress" className="block text-sm font-semibold">
            IP Address
          </label>
          <input
            id="ipAddress"
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-semibold">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Update Site
        </button>
      </form>
    </div>
  );
};

export default UpdateSite;
