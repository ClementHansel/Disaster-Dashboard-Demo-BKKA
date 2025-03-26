import { useState, useEffect } from "react";

interface FiltersType {
  site: string;
  sensor: string;
  dateFrom: string;
  dateTo: string;
  timeFrom: string;
  timeTo: string;
}

interface AnnotatedFiltersProps {
  onFilterChange: (filters: FiltersType) => void;
  filters: FiltersType;
  availableSites: string[];
  availableSensors: string[];
}

export default function AnnotatedFilters({
  onFilterChange,
  filters,
  availableSites,
  availableSensors,
}: AnnotatedFiltersProps) {
  const [localFilters, setLocalFilters] = useState<FiltersType>(filters);

  // Ensure that local state is updated when the parent filters change
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (field: keyof FiltersType, value: string) => {
    const updatedFilters = { ...localFilters, [field]: value };
    setLocalFilters(updatedFilters);
    onFilterChange(updatedFilters); // Pass the updated filters to the parent
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg flex flex-col gap-4">
      {/* Site Filter */}
      <div>
        <label
          htmlFor="site"
          className="block text-sm font-medium text-gray-700"
        >
          Site
        </label>
        <select
          id="site"
          name="site"
          title="Select a site"
          className="p-2 border rounded w-full"
          value={localFilters.site}
          onChange={(e) => handleFilterChange("site", e.target.value)}
        >
          <option value="">Select a site</option>
          {availableSites.map((site) => (
            <option key={site} value={site}>
              {site}
            </option>
          ))}
        </select>
      </div>

      {/* Sensor Filter */}
      <div>
        <label
          htmlFor="sensor"
          className="block text-sm font-medium text-gray-700"
        >
          Sensor
        </label>
        <select
          id="sensor"
          name="sensor"
          title="Select a sensor"
          className="p-2 border rounded w-full"
          value={localFilters.sensor}
          onChange={(e) => handleFilterChange("sensor", e.target.value)}
        >
          <option value="">Select a sensor</option>
          {availableSensors.map((sensor) => (
            <option key={sensor} value={sensor}>
              {sensor}
            </option>
          ))}
        </select>
      </div>

      {/* Date Filters */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="dateFrom"
            className="block text-sm font-medium text-gray-700"
          >
            Date From
          </label>
          <input
            type="date"
            id="dateFrom"
            name="dateFrom"
            title="Select start date"
            className="p-2 border rounded w-full"
            value={localFilters.dateFrom}
            onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="dateTo"
            className="block text-sm font-medium text-gray-700"
          >
            Date To
          </label>
          <input
            type="date"
            id="dateTo"
            name="dateTo"
            title="Select end date"
            className="p-2 border rounded w-full"
            value={localFilters.dateTo}
            onChange={(e) => handleFilterChange("dateTo", e.target.value)}
          />
        </div>
      </div>

      {/* Time Filters */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="timeFrom"
            className="block text-sm font-medium text-gray-700"
          >
            Time From
          </label>
          <input
            type="time"
            id="timeFrom"
            name="timeFrom"
            title="Select start time"
            className="p-2 border rounded w-full"
            value={localFilters.timeFrom}
            onChange={(e) => handleFilterChange("timeFrom", e.target.value)}
          />
        </div>

        <div>
          <label
            htmlFor="timeTo"
            className="block text-sm font-medium text-gray-700"
          >
            Time To
          </label>
          <input
            type="time"
            id="timeTo"
            name="timeTo"
            title="Select end time"
            className="p-2 border rounded w-full"
            value={localFilters.timeTo}
            onChange={(e) => handleFilterChange("timeTo", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
