import React from "react";
import { Sensor } from "@/app/types/ai/data-sets/dataset"; // ✅ Import Sensor type

interface SensorSelectorProps {
  site: string | null;
  sensors: Sensor[]; // ✅ Use sensors from props instead of mock data
  onSelect: (selectedSensors: string[]) => void;
}

const SensorSelector: React.FC<SensorSelectorProps> = ({
  site,
  sensors,
  onSelect,
}) => {
  // ✅ Filter sensors based on the selected site
  const filteredSensors = sensors.filter(
    (sensor) => !site || sensor.siteId === site
  );

  return (
    <div>
      <label
        htmlFor="sensor-selector"
        className="block text-sm font-medium text-gray-700"
      >
        Select Sensors
      </label>
      <select
        id="sensor-selector"
        className="mt-1 block w-full p-2 border rounded"
        multiple
        onChange={(e) => {
          const selected = Array.from(
            e.target.selectedOptions,
            (option) => option.value
          );
          onSelect(selected);
        }}
      >
        {filteredSensors.length > 0 ? (
          filteredSensors.map((sensor) => (
            <option key={sensor.id} value={sensor.id}>
              {sensor.name}
            </option>
          ))
        ) : (
          <option disabled>No sensors available</option>
        )}
      </select>
    </div>
  );
};

export default SensorSelector;
