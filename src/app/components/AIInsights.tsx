import React from "react";
import { AIInsight } from "@/app/types/dashboard";
import mockData from "@/app/data/mockData";

const AIInsights: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-3">AI Flood Risk Insights</h2>
      <ul className="space-y-2">
        {mockData.aiInsights.map((insight: AIInsight) => (
          <li key={insight.id} className="border p-3 rounded-lg bg-gray-100">
            <p className="font-medium">{insight.prediction}</p>
            <p className="text-sm text-gray-600">
              Confidence: {insight.confidence}%
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIInsights;
