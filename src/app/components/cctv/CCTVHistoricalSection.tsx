"use client";

import React, { useState } from "react";
import CCTVModal from "./CCTVModal";

// Define the HistoricalCCTV type
export interface HistoricalCCTV {
  id: string;
  siteName: string;
  cameraName: string;
  streamUrl: string;
  status: "online" | "offline" | "error";
  description: string;
  severity: "low" | "moderate" | "severe";
}

interface CCTVHistoricalSectionProps {
  data: HistoricalCCTV[];
  selectedSite: string;
}

const CCTVHistoricalSection: React.FC<CCTVHistoricalSectionProps> = ({
  data,
  selectedSite,
}) => {
  const [modalStream, setModalStream] = useState<HistoricalCCTV | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState<
    "all" | "low" | "moderate" | "severe"
  >("all");

  // Filter data by selected site, then by search term and severity
  let filteredData = data;
  if (selectedSite !== "all") {
    filteredData = filteredData.filter(
      (item) => item.siteName === selectedSite
    );
  }
  filteredData = filteredData.filter(
    (item) =>
      (severityFilter === "all" || item.severity === severityFilter) &&
      (item.siteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cameraName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // If "all" is selected, group by site and show one representative per site.
  let displayedData;
  if (selectedSite === "all") {
    const grouped: { [site: string]: HistoricalCCTV } = {};
    filteredData.forEach((item) => {
      if (!grouped[item.siteName]) {
        grouped[item.siteName] = item;
      }
    });
    displayedData = Object.values(grouped);
  } else {
    displayedData = filteredData;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-3">Historical CCTV Recordings</h2>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Search historical recordings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full"
          aria-label="Search Historical CCTV Recordings"
        />
        <select
          value={severityFilter}
          onChange={(e) =>
            setSeverityFilter(
              e.target.value as "all" | "low" | "moderate" | "severe"
            )
          }
          className="p-2 border rounded"
          aria-label="Filter by Severity"
        >
          <option value="all">All Severities</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="severe">Severe</option>
        </select>
      </div>
      {displayedData.length === 0 ? (
        <p>No historical recordings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayedData.map((record) => (
            <div
              key={record.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden"
            >
              <video
                src={record.streamUrl}
                className="w-full h-64 object-cover"
                controls
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
                <div className="text-sm">{record.cameraName}</div>
                <button
                  onClick={() => setModalStream(record)}
                  className="text-white"
                  aria-label="Fullscreen"
                >
                  ⛶
                </button>
              </div>
              <button
                onClick={() => setModalStream(record)}
                className="absolute inset-0 z-10 focus:outline-none"
                aria-label="View Fullscreen"
              ></button>
            </div>
          ))}
        </div>
      )}
      {modalStream && (
        <CCTVModal
          streamUrl={modalStream.streamUrl}
          cameraName={modalStream.cameraName}
          onClose={() => setModalStream(null)}
        />
      )}
    </div>
  );
};

export default CCTVHistoricalSection;
