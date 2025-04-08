"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/app/components/ui/card";

type HistoricalDataPoint = {
  timestamp: string;
  value: number;
};

type HistoricalChartProps = {
  title?: string;
  data: HistoricalDataPoint[];
  sensorName?: string;
  unit?: string;
};

export default function HistoricalChart({
  data,
  sensorName = "Sensor",
  title = "Sensor Reading Over Time",
  unit = "",
}: HistoricalChartProps) {
  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent className="space-y-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {data.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No historical data available.
          </p>
        ) : (
          <div className="h-[350px] sm:h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3b82f6"
                  dot={false}
                  name={`${sensorName}${unit ? ` (${unit})` : ""}`}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
