"use client";

import React, { useState } from "react";

interface AddSiteProps {
  onAddSite?: (site: {
    id: string;
    siteName: string;
    ipAddress: string;
    location: string;
  }) => void;
}

const AddSite: React.FC<AddSiteProps> = ({ onAddSite }) => {
  const [siteName, setSiteName] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSite = {
      id: Date.now().toString(),
      siteName,
      ipAddress,
      location,
    };
    if (onAddSite) onAddSite(newSite);
    setSiteName("");
    setIpAddress("");
    setLocation("");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Site</h2>
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
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Site
        </button>
      </form>
    </div>
  );
};

export default AddSite;
