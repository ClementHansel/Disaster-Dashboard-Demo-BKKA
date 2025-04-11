import { Dataset } from "@/app/types/ai/AI-training/training";
import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatDate } from "@/app/lib/ai/AI-training/trainingUtils";

const COLORS = ["#00C49F", "#FF8042", "#FFBB28", "#0088FE", "#FF6384"];

type Props = {
  dataset: Dataset;
};

export default function DatasetInfoCard({ dataset }: Props) {
  const [chartType, setChartType] = useState<"bar" | "pie">("bar");

  const statEntries = Object.entries(dataset.stats ?? {}).map(
    ([label, value]) => ({
      name: label,
      value,
    })
  );

  const toggleChart = () => {
    setChartType((prev) => (prev === "bar" ? "pie" : "bar"));
  };

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{dataset.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{dataset.description}</p>
        <p className="text-xs mt-2 text-muted-foreground">
          Type: <span className="font-medium">{dataset.type}</span> | Size:{" "}
          <span className="font-medium">{dataset.size}</span>
        </p>
        <span>
          {dataset.updatedAt ? formatDate(dataset.updatedAt) : "Unknown date"}
        </span>
        <button
          onClick={toggleChart}
          className="mt-2 px-3 py-1 bg-primary text-white text-xs rounded-md hover:bg-primary/90"
        >
          Toggle to {chartType === "bar" ? "Pie" : "Bar"} Chart
        </button>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          {chartType === "bar" ? (
            <BarChart data={statEntries}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {statEntries.map((entry, index) => (
                  <Cell
                    key={`bar-cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={statEntries}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {statEntries.map((entry, index) => (
                  <Cell
                    key={`pie-cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
