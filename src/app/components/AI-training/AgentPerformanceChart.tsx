"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AgentPerformanceChartProps,
  ChartDataPoint,
} from "@/app/types/ai/AI-training/training";
import { mockAgents } from "@/app/data/ai/AI-training/mockAgent";
import { Card, CardContent } from "../ui/card";

export default function AgentPerformanceChart({
  agents = mockAgents,
  modelId,
}: AgentPerformanceChartProps) {
  const [data, setData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    if (!agents || agents.length === 0) {
      setData([]);
      return;
    }

    const filteredAgents = modelId
      ? agents.filter((agent) => agent.modelId === modelId)
      : agents;

    const chartData: ChartDataPoint[] = filteredAgents.map((agent) => ({
      name: agent.name,
      accuracy: agent.metrics?.accuracy ?? 0,
      loss: agent.metrics?.loss ?? 0,
      precision: agent.metrics?.precision ?? 0,
      recall: agent.metrics?.recall ?? 0,
    }));

    setData(chartData);
  }, [agents, modelId]);

  return (
    <Card className="rounded-xl">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">Agent Performance</h2>

        {data.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No performance data available.
          </p>
        ) : (
          <ScrollArea className="w-full overflow-x-auto">
            <div className="min-w-[700px] h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke="#22c55e"
                    strokeWidth={2}
                    name="Accuracy"
                    dot={{ r: 3 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="loss"
                    stroke="#ef4444"
                    strokeWidth={2}
                    name="Loss"
                    dot={{ r: 3 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="precision"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Precision"
                    dot={{ r: 3 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="recall"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    name="Recall"
                    dot={{ r: 3 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
}
