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
  Legend,
} from "recharts";

export interface WaterDataPoint {
  timestamp: string;
  waterLevel: number;
  waterPressure: number;
}

interface CumulativeWaterAndPressureChartProps {
  data: WaterDataPoint[];
}

const CumulativeWaterAndPressureChart: React.FC<
  CumulativeWaterAndPressureChartProps
> = ({ data }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">
        Cumulative Water Level & Pressure
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis
            yAxisId="left"
            orientation="left"
            label={{ value: "Water Level", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Water Pressure",
              angle: 90,
              position: "insideRight",
            }}
          />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="waterLevel"
            stroke="#8884d8"
            strokeWidth={2}
            name="Water Level"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="waterPressure"
            stroke="#82ca9d"
            strokeWidth={2}
            name="Water Pressure"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CumulativeWaterAndPressureChart;
