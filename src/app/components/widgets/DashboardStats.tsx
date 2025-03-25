import { SensorData } from "@/app/types/dashboard";
import React, { useMemo } from "react";

import { FaExclamationTriangle, FaWater, FaFire } from "react-icons/fa";
import { GiCrackedHelm } from "react-icons/gi";

interface DashboardStatsProps {
  sensors: SensorData[];
  selectedDisaster: string;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  sensors,
  selectedDisaster,
}) => {
  const filteredSensors = useMemo(() => {
    return selectedDisaster === "All"
      ? sensors
      : sensors.filter((sensor) => sensor.type === selectedDisaster);
  }, [selectedDisaster, sensors]);

  const totalSensors = filteredSensors.length;
  const highRiskSensors = filteredSensors.filter(
    (sensor) => sensor.severity === "High"
  ).length;

  // Compute disaster-specific stats
  const disasterStats = useMemo(() => {
    let averageValue = 0;

    if (totalSensors > 0) {
      if (selectedDisaster === "Flood") {
        averageValue =
          filteredSensors.reduce(
            (sum, sensor) => sum + (sensor.waterLevel || 0),
            0
          ) / totalSensors;
      } else if (selectedDisaster === "Earthquake") {
        averageValue =
          filteredSensors.reduce(
            (sum, sensor) => sum + (sensor.magnitude || 0),
            0
          ) / totalSensors;
      } else if (selectedDisaster === "Fire") {
        averageValue =
          filteredSensors.reduce(
            (sum, sensor) => sum + (sensor.temperature || 0),
            0
          ) / totalSensors;
      }
    }

    return { averageValue };
  }, [filteredSensors, selectedDisaster, totalSensors]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-md">
      {/* Total Sensors */}
      <div className="p-4 bg-blue-100 rounded-lg text-center">
        <h3 className="text-lg font-semibold">Total Sensors</h3>
        <p className="text-2xl font-bold text-blue-600">{totalSensors}</p>
      </div>

      {/* High-Risk Areas */}
      <div className="p-4 bg-red-100 rounded-lg text-center">
        <h3 className="text-lg font-semibold flex justify-center items-center gap-2">
          <FaExclamationTriangle className="text-red-600" /> High Risk Areas
        </h3>
        <p className="text-2xl font-bold text-red-600">{highRiskSensors}</p>
      </div>

      {/* Disaster-Specific Stat */}
      {selectedDisaster !== "All" && (
        <div className="p-4 bg-green-100 rounded-lg text-center">
          <h3 className="text-lg font-semibold flex justify-center items-center gap-2">
            {selectedDisaster === "Flood" && (
              <FaWater className="text-blue-600" />
            )}
            {selectedDisaster === "Earthquake" && (
              <GiCrackedHelm className="text-gray-600" />
            )}
            {selectedDisaster === "Fire" && (
              <FaFire className="text-orange-600" />
            )}
            Avg. {selectedDisaster} Level
          </h3>
          <p className="text-2xl font-bold text-green-600">
            {disasterStats.averageValue.toFixed(1)}
            {selectedDisaster === "Flood" && "m"}
            {selectedDisaster === "Earthquake" && " magnitude"}
            {selectedDisaster === "Fire" && "°C"}
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardStats;
