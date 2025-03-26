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
  averageWaterPressure: number;
}

interface AverageWaterPressureChartProps {
  data: AggregatedSensorData[];
}

const AverageWaterPressureChart: React.FC<AverageWaterPressureChartProps> = ({
  data,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">
        Average Water Pressure (All Sites)
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis
            label={{
              value: "Avg Water Pressure",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            type="monotone"
            dataKey="averageWaterPressure"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Avg Water Pressure"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageWaterPressureChart;
