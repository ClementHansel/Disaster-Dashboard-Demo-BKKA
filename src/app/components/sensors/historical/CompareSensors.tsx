"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent } from "@/app/components/ui/card";

type SensorSeries = {
  sensorId: string;
  sensorName: string;
  unit?: string;
  color?: string;
  data: {
    timestamp: string;
    value: number;
  }[];
};

type CompareSensorsProps = {
  title?: string;
  sensors: SensorSeries[];
};

const defaultColors = [
  "#3b82f6", // blue
  "#ef4444", // red
  "#10b981", // green
  "#f59e0b", // amber
  "#8b5cf6", // violet
  "#ec4899", // pink
  "#0ea5e9", // sky
];

export default function CompareSensors({
  title = "Compare Sensor Data",
  sensors,
}: CompareSensorsProps) {
  // Get all unique timestamps across sensors
  const timestamps = new Set<string>();
  sensors.forEach((sensor) =>
    sensor.data.forEach((point) => timestamps.add(point.timestamp))
  );

  type MergedDataPoint = {
    timestamp: string;
    [sensorName: string]: string | number | null;
  };

  // Merge sensor values by timestamp
  const mergedData: MergedDataPoint[] = Array.from(timestamps)
    .sort()
    .map((timestamp) => {
      const point: MergedDataPoint = { timestamp };
      sensors.forEach((sensor) => {
        const match = sensor.data.find((d) => d.timestamp === timestamp);
        point[sensor.sensorName] = match?.value ?? null;
      });
      return point;
    });

  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent className="space-y-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {sensors.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No sensor data to compare.
          </p>
        ) : (
          <div className="h-[400px] sm:h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mergedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Legend />
                {sensors.map((sensor, index) => (
                  <Line
                    key={sensor.sensorId}
                    type="monotone"
                    dataKey={sensor.sensorName}
                    stroke={
                      sensor.color ??
                      defaultColors[index % defaultColors.length]
                    }
                    dot={false}
                    name={`${sensor.sensorName}${
                      sensor.unit ? ` (${sensor.unit})` : ""
                    }`}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
