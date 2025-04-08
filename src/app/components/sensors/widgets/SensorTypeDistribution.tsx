"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { SensorTypeDistributionProps } from "@/app/types/sensors/sensor";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = [
  "#4f46e5",
  "#059669",
  "#f59e0b",
  "#ef4444",
  "#3b82f6",
  "#a855f7",
  "#10b981",
];

export default function SensorTypeDistribution({
  data,
  chartType = "pie",
}: SensorTypeDistributionProps) {
  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Sensor Type Distribution</h2>

        <ResponsiveContainer width="100%" height={250}>
          {chartType === "bar" ? (
            <BarChart data={data}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4f46e5" />
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={data}
                dataKey="count"
                nameKey="type"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
