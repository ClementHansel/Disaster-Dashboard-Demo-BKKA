"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export interface SensorDataPoint {
  timestamp: string;
  value: number;
}

interface SiteWaterLevelRealtimeChartProps {
  data: SensorDataPoint[];
}

const SiteWaterLevelRealtimeChart: React.FC<
  SiteWaterLevelRealtimeChartProps
> = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">Site Water Level Realtime</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis
            label={{ value: "Water Level", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            name="Water Level"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SiteWaterLevelRealtimeChart;
