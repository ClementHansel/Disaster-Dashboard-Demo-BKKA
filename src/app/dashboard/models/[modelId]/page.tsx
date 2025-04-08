// src/app/dashboard/models/[modelId]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { mockTrainingJobs } from "@/app/data/ai/AI-training/mockTrainingJobs";
import { TrainingJob } from "@/app/types/ai/AI-training/training";

const ModelDetailPage = () => {
  const { modelId } = useParams();
  const model: TrainingJob | undefined = mockTrainingJobs.find(
    (job) => job.modelId === modelId
  );

  if (!model) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">
          Model not found
        </h1>
        <p className="text-gray-600">
          We couldn&apost find a model with the ID <strong>{modelId}</strong>.
          Please check the URL or return to the dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Model Detail: {model.modelName}</h1>
        <p className="text-muted-foreground text-sm">
          Model ID: <span className="text-gray-700">{model.modelId}</span>
        </p>
      </div>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Training Info</h2>
        <div className="text-sm space-y-1 text-gray-700">
          <p>
            Status: <strong>{model.status}</strong>
          </p>
          <p>Progress: {model.progress}%</p>
          <p>Started At: {model.startedAt}</p>
          <p>Completed At: {model.completedAt || "In Progress"}</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Logs</h2>
        <div className="bg-muted p-4 rounded-md text-sm whitespace-pre-wrap text-gray-800 border border-gray-200">
          {model.logs.length > 0 ? model.logs.join("\n") : "No logs available."}
        </div>
      </section>

      {model.resultUrl && (
        <div>
          <a
            href={model.resultUrl}
            className="inline-block mt-4 text-blue-600 hover:underline text-sm"
            download
          >
            ⬇️ Download Trained Model
          </a>
        </div>
      )}
    </div>
  );
};

export default ModelDetailPage;
