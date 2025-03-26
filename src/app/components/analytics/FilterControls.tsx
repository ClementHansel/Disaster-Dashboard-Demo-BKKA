"use client";

import React from "react";

interface FilterControlsProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedSite: string;
  setSelectedSite: (value: string) => void;
  selectedSensorType: string;
  setSelectedSensorType: (value: string) => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  dataMode: "realtime" | "historical";
  setDataMode: (value: "realtime" | "historical") => void;
  startTime?: string;
  setStartTime?: (value: string) => void;
  endTime?: string;
  setEndTime?: (value: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  searchTerm,
  setSearchTerm,
  selectedSite,
  setSelectedSite,
  selectedSensorType,
  setSelectedSensorType,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  dataMode,
  setDataMode,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
}) => {
  const siteOptions = [
    "All Sites",
    "Jakarta",
    "Surabaya",
    "Bandung",
    "Makasar",
  ];
  const sensorTypeOptions = [
    "All Sensors",
    "Temperature",
    "Humidity",
    "Water Level",
    "Flow Rate",
  ];

  return (
    <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Data Mode Toggle */}
      <div className="flex items-center gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="dataMode"
            value="realtime"
            checked={dataMode === "realtime"}
            onChange={(e) =>
              setDataMode(e.target.value as "realtime" | "historical")
            }
            className="mr-2"
          />
          Realtime
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="dataMode"
            value="historical"
            checked={dataMode === "historical"}
            onChange={(e) =>
              setDataMode(e.target.value as "realtime" | "historical")
            }
            className="mr-2"
          />
          Historical
        </label>
      </div>

      {/* Common Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search sensors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded flex-1"
          aria-label="Search Sensors"
        />
        <select
          value={selectedSite}
          onChange={(e) => setSelectedSite(e.target.value)}
          className="p-2 border rounded"
          aria-label="Select Site"
        >
          {siteOptions.map((site) => (
            <option key={site} value={site}>
              {site}
            </option>
          ))}
        </select>
        <select
          value={selectedSensorType}
          onChange={(e) => setSelectedSensorType(e.target.value)}
          className="p-2 border rounded"
          aria-label="Select Sensor Type"
        >
          {sensorTypeOptions.map((sensor) => (
            <option key={sensor} value={sensor}>
              {sensor}
            </option>
          ))}
        </select>
      </div>

      {/* Conditional Date & Time Controls for Historical Data */}
      {dataMode === "historical" && (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="startDate" className="block text-xs mb-1">
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="p-2 border rounded w-full"
              aria-label="Start Date"
            />
            {setStartTime && startTime !== undefined && (
              <>
                <label htmlFor="startTime" className="block text-xs mb-1 mt-2">
                  Start Time
                </label>
                <input
                  id="startTime"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="p-2 border rounded w-full"
                  aria-label="Start Time"
                />
              </>
            )}
          </div>
          <div className="flex-1">
            <label htmlFor="endDate" className="block text-xs mb-1">
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="p-2 border rounded w-full"
              aria-label="End Date"
            />
            {setEndTime && endTime !== undefined && (
              <>
                <label htmlFor="endTime" className="block text-xs mb-1 mt-2">
                  End Time
                </label>
                <input
                  id="endTime"
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="p-2 border rounded w-full"
                  aria-label="End Time"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterControls;
