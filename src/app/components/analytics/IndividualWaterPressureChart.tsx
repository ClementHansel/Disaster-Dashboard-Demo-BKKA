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

export interface IndividualSensorPressureData {
  timestamp: string;
  waterPressure: number;
}

interface IndividualWaterPressureChartProps {
  sensorName: string;
  data: IndividualSensorPressureData[];
}

const IndividualWaterPressureChart: React.FC<
  IndividualWaterPressureChartProps
> = ({ sensorName, data }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">
        {sensorName} - Water Pressure Realtime
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis
            label={{
              value: "Water Pressure",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line
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

export default IndividualWaterPressureChart;
