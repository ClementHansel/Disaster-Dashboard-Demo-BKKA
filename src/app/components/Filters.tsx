import React from "react";

interface FiltersProps {
  selectedSensor: number | null;
  onSelectSensor: (sensorId: number | null) => void;
  sensors: { id: number; name: string }[];
}

const Filters: React.FC<FiltersProps> = ({
  selectedSensor,
  onSelectSensor,
  sensors,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sensorId = event.target.value ? Number(event.target.value) : null;
    onSelectSensor(sensorId);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="sensor-select"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Sensor:
      </label>
      <select
        id="sensor-select"
        value={selectedSensor ?? ""}
        onChange={handleSelectChange}
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
        aria-label="Sensor Selection"
      >
        <option value="">All Sensors</option>
        {sensors.map((sensor) => (
          <option key={sensor.id} value={sensor.id}>
            {sensor.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
