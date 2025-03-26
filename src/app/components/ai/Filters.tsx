import {
  getAvailableSensors,
  getAvailableSites,
} from "@/app/lib/ai/aiDataUtils";
import { useState, useEffect, useCallback } from "react";

interface FiltersProps {
  filters: {
    site: string;
    sensor: string;
    dateFrom: string;
    dateTo: string;
    timeFrom: string;
    timeTo: string;
  };
  onFilterChange: (filters: Partial<FiltersProps["filters"]>) => void;
}

export default function Filters({ filters, onFilterChange }: FiltersProps) {
  const [sites, setSites] = useState<string[]>([]);
  const [sensors, setSensors] = useState<string[]>([]);

  // Memoized function to handle site change and reset sensor
  const handleSiteChange = useCallback(
    (site: string) => {
      onFilterChange({ site, sensor: "" }); // Reset sensor when site changes
    },
    [onFilterChange]
  );

  useEffect(() => {
    setSites(getAvailableSites());
  }, []);

  useEffect(() => {
    setSensors(getAvailableSensors(filters.site));
  }, [filters.site]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Filters</h2>

      <div className="flex flex-row space-x-6 justify-between">
        <div>
          {/* Site Dropdown */}
          <label
            htmlFor="site-filter"
            className="block mt-2 text-sm font-medium text-gray-700"
          >
            Site:
          </label>
          <select
            id="site-filter"
            aria-label="Select a site"
            value={filters.site}
            onChange={(e) => handleSiteChange(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">All Sites</option>
            {sites.map((site) => (
              <option key={site} value={site}>
                {site}
              </option>
            ))}
          </select>
        </div>

        <div>
          {/* Sensor Dropdown */}
          <label
            htmlFor="sensor-filter"
            className="block mt-2 text-sm font-medium text-gray-700"
          >
            Sensor:
          </label>
          <select
            id="sensor-filter"
            aria-label="Select a sensor"
            value={filters.sensor}
            onChange={(e) => onFilterChange({ sensor: e.target.value })}
            disabled={!filters.site || sensors.length === 0}
            className={`w-full mt-1 p-2 border rounded-lg ${
              !filters.site || sensors.length === 0
                ? "bg-gray-200 cursor-not-allowed"
                : ""
            }`}
          >
            <option value="">All Sensors</option>
            {sensors.map((sensor) => (
              <option key={sensor} value={sensor}>
                {sensor}
              </option>
            ))}
          </select>
        </div>

        <div>
          {/* Date From */}
          <label
            htmlFor="date-from-filter"
            className="block mt-2 text-sm font-medium text-gray-700"
          >
            Date From:
          </label>
          <input
            id="date-from-filter"
            type="date"
            value={filters.dateFrom}
            onChange={(e) => onFilterChange({ dateFrom: e.target.value })}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <div>
          {/* Date To */}
          <label
            htmlFor="date-to-filter"
            className="block mt-2 text-sm font-medium text-gray-700"
          >
            Date To:
          </label>
          <input
            id="date-to-filter"
            type="date"
            value={filters.dateTo}
            onChange={(e) => onFilterChange({ dateTo: e.target.value })}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <div>
          {/* Time From */}
          <label
            htmlFor="time-from-filter"
            className="block mt-2 text-sm font-medium text-gray-700"
          >
            Time From:
          </label>
          <input
            id="time-from-filter"
            type="time"
            value={filters.timeFrom}
            onChange={(e) => onFilterChange({ timeFrom: e.target.value })}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>

        <div>
          {/* Time To */}
          <label
            htmlFor="time-to-filter"
            className="block mt-2 text-sm font-medium text-gray-700"
          >
            Time To:
          </label>
          <input
            id="time-to-filter"
            type="time"
            value={filters.timeTo}
            onChange={(e) => onFilterChange({ timeTo: e.target.value })}
            className="w-full mt-1 p-2 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
