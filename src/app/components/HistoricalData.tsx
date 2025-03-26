import React, { useState } from "react";
import { floodSensors } from "@/app/data/disasters/flood"; // ✅ Import default export

const HistoricalData = () => {
  const [selectedSensor, setSelectedSensor] = useState<number | null>(null);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSensor(event.target.value ? Number(event.target.value) : null);
  };

  // ✅ Use floodSensors correctly
  const filteredData = selectedSensor
    ? floodSensors.filter((sensor) => sensor.id === selectedSensor)
    : floodSensors;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Historical Data</h2>

      {/* ✅ Improved accessibility */}
      <label
        htmlFor="sensorSelect"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Select Sensor:
      </label>

      <select
        id="sensorSelect"
        title="Select a Sensor"
        onChange={handleSelectChange}
        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"
      >
        <option value="">All Sensors</option>
        {floodSensors.map((sensor) => (
          <option key={sensor.id} value={sensor.id}>
            {sensor.name}
          </option>
        ))}
      </select>

      <div className="mt-4">
        {filteredData.map((sensor) => (
          <div
            key={sensor.id}
            className="p-3 mb-2 border rounded-lg bg-gray-100"
          >
            <h3 className="text-lg font-medium">{sensor.name}</h3>
            <p>Water Level: {sensor.waterLevel}m</p>
            <p>Risk: {sensor.severity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalData;
