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

export interface AggregatedSensorData {
  timestamp: string;
  averageWaterLevel: number;
}

interface AverageWaterLevelChartProps {
  data: AggregatedSensorData[];
}

const AverageWaterLevelChart: React.FC<AverageWaterLevelChartProps> = ({
  data,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">
        Average Water Level (All Sites)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis
            label={{
              value: "Average Water Level",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="averageWaterLevel"
            stroke="#8884d8"
            strokeWidth={2}
            name="Average Water Level"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageWaterLevelChart;
