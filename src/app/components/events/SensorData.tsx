import React from "react";
import type { DisasterEvent, SensorData } from "@/app/types/dashboard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Progress } from "@/app/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// 📌 Sensor Data Type Definition
interface SensorDataProps {
  disasterEvent?: DisasterEvent; // Updated type reference
  sensors: SensorData[];
}

const SensorData: React.FC<SensorDataProps> = ({ disasterEvent, sensors }) => {
  // Apply filtering logic if disasterEvent is provided
  const filteredSensors = disasterEvent
    ? sensors.filter((sensor) => sensor.eventId === disasterEvent.id)
    : sensors;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredSensors.map((sensor) => {
        // Ensure value is within range 0-100 for progress bar
        const progressValue = Math.min(Math.max(sensor.value ?? 0, 0), 100);

        return (
          <Card key={sensor.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {sensor.name} ({sensor.category})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Current Value:</span>
                <span
                  className={`font-bold ${
                    sensor.status === "Inactive"
                      ? "text-red-600"
                      : sensor.status === "Maintenance"
                      ? "text-yellow-600"
                      : "text-green-600"
                  }`}
                >
                  {sensor.value ?? "N/A"} {sensor.unit}
                </span>
              </div>

              {/* 📌 Progress Bar */}
              <Progress value={progressValue} className="h-2" />

              {/* 📌 Sensor Data Chart */}
              <div className="mt-4 h-32">
                {sensor.history && sensor.history.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sensor.history}>
                      <XAxis dataKey="timestamp" hide />
                      <YAxis domain={["auto", "auto"]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-gray-500 text-sm text-center">
                    No history data available.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default SensorData;
