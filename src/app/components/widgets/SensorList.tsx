"use client";

import React from "react";
import { SensorData } from "@/app/types/dashboard";

interface SensorListProps {
  sensors: SensorData[];
  selectedDisaster: string;
}

const SensorList: React.FC<SensorListProps> = ({
  sensors,
  selectedDisaster,
}) => {
  // Filter sensors based on selected disaster type
  const filteredSensors =
    selectedDisaster === "All"
      ? sensors
      : sensors.filter((sensor) => sensor.type === selectedDisaster);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4">
      <h2 className="text-lg font-semibold mb-3">
        {selectedDisaster === "All"
          ? "All Sensors"
          : `${selectedDisaster} Sensors`}
      </h2>

      {filteredSensors.length === 0 ? (
        <p className="text-gray-500 text-center">
          No sensors available for {selectedDisaster}.
        </p>
      ) : (
        <ul className="space-y-3">
          {filteredSensors.map((sensor) => (
            <li
              key={sensor.id}
              className="flex justify-between items-center border-b pb-2 last:border-none"
            >
              <div>
                <p className="font-medium">{sensor.name}</p>
                <p className="text-sm text-gray-500">
                  {sensor.lat}, {sensor.lng}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  sensor.severity === "High"
                    ? "bg-red-500 text-white"
                    : sensor.severity === "Moderate"
                    ? "bg-yellow-400 text-black"
                    : "bg-green-500 text-white"
                }`}
              >
                {sensor.severity}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SensorList;
