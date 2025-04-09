"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Model } from "@/app/types/ai/modeling/model";
import { Button } from "@/components/ui/button";
import ModelLogsModal from "@/app/components/modeling/ModelLogsModal";
import CompareModelModal from "@/app/components/modeling/CompareModelModal";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import {
  mockModels,
  mockModelMetrics,
} from "@/app/data/ai/modeling/mockModels";

// Status color function
const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "trained":
      return "bg-green-100 text-green-700";
    case "training":
      return "bg-yellow-100 text-yellow-700";
    case "failed":
      return "bg-red-100 text-red-700";
    case "draft":
      return "bg-gray-100 text-gray-700";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const ModelDetailPage = () => {
  const { modelId } = useParams();
  const model: Model | undefined = mockModels.find((m) => m.id === modelId);
  const [showLogs, setShowLogs] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  if (!model) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">
          Model not found
        </h1>
        <p className="text-gray-600">
          We couldn&apos;t find a model with the ID <strong>{modelId}</strong>.
          Please check the URL or return to the dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Model Detail: {model.name}</h1>
        <p className="text-muted-foreground text-sm">
          Model ID: <span className="text-gray-700">{model.id}</span>
        </p>
        <span
          className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
            model.status || ""
          )}`}
        >
          {model.status}
        </span>
      </div>

      {/* Model Info */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Model Info</h2>
        <div className="text-sm space-y-1 text-gray-700">
          <p>Type: {model.type}</p>
          <p>Accuracy: {model.accuracy?.toFixed(2) ?? "-"}</p>
          <p>Created At: {model.createdAt}</p>
          <p>Last Updated: {model.lastUpdated || "-"}</p>
        </div>
      </section>

      {/* Metrics */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Metrics</h2>
        <div className="bg-white p-4 rounded-md shadow-sm border">
          <LineChart width={600} height={250} data={mockModelMetrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="epoch" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="accuracy" stroke="#3b82f6" />
            <Line type="monotone" dataKey="loss" stroke="#ef4444" />
          </LineChart>
        </div>
      </section>

      {/* Logs */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Logs</h2>
        <Button variant="outline" onClick={() => setShowLogs(true)}>
          View Logs
        </Button>
        <ModelLogsModal
          isOpen={showLogs}
          onClose={() => setShowLogs(false)}
          logs={model.logs ?? []}
          modelName={model.name}
        />
      </section>

      {/* Download */}
      {model.fileUrl && (
        <div>
          <a
            href={model.fileUrl}
            className="inline-block mt-4 text-blue-600 hover:underline text-sm"
            download
          >
            ⬇️ Download Trained Model
          </a>
        </div>
      )}

      {/* Compare */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mt-6">
          Compare With Another Model
        </h2>
        <Button className="mt-2" onClick={() => setCompareOpen(true)}>
          View Comparison
        </Button>
        <CompareModelModal
          isOpen={compareOpen}
          onClose={() => setCompareOpen(false)}
          currentModelId={model.id}
          models={mockModels}
        />
      </section>
    </div>
  );
};

export default ModelDetailPage;
