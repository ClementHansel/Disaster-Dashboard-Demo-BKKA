"use client";

import React from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { AlertTriangle, LineChart, Brain } from "lucide-react";
import { HistoricalDataPoint } from "@/app/types/sensors/sensor";

type HistoricalInsightsProps = {
  data: HistoricalDataPoint[];
  site?: string;
  sensorType?: string;
  fromDate?: string;
  toDate?: string;
};

type Insight = {
  icon: React.ReactNode;
  title: string;
};

const mockedInsights: Insight[] = [
  {
    icon: <LineChart className="h-5 w-5 text-blue-600" />,
    title: "Water level has been increasing consistently over the past 3 days.",
  },
  {
    icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />,
    title: "Anomaly detected: Sudden spike on April 5 at 14:00.",
  },
  {
    icon: <Brain className="h-5 w-5 text-green-600" />,
    title:
      "AI suggests monitoring closely within the next 24 hours due to risk of overflow.",
  },
];

export default function HistoricalInsights({
  site,
  sensorType,
  fromDate,
  toDate,
}: HistoricalInsightsProps) {
  const hasMeta = site || sensorType || (fromDate && toDate);

  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent className="space-y-4">
        <h2 className="text-lg font-semibold">AI Insights</h2>

        <div className="space-y-3 text-sm text-muted-foreground">
          {mockedInsights.map((insight, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="pt-1">{insight.icon}</div>
              <p>{insight.title}</p>
            </div>
          ))}
        </div>

        {hasMeta && (
          <p className="text-xs text-muted-foreground italic">
            Based on: {site && <span>Site: {site}. </span>}
            {sensorType && <span>Sensor Type: {sensorType}. </span>}
            {fromDate && toDate && (
              <span>
                Date Range: {fromDate} → {toDate}.
              </span>
            )}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
