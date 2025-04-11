"use client";

import { TrainingJob } from "@/app/types/ai/AI-training/training";
import TrainingProgress from "./TrainingProgress";
import { CheckCircle } from "lucide-react";

type TrainingJobCardProps = {
  job: TrainingJob;
  onViewLogs: (jobId: string) => void;
  onClick?: () => void;
  onSaveAgent?: (job: TrainingJob) => void; // ✅ Added for save logic
};

export default function TrainingJobCard({
  job,
  onViewLogs,
  onClick,
  onSaveAgent,
}: TrainingJobCardProps) {
  const formatDate = (date?: string) => {
    if (!date) return "In progress";
    const d = new Date(date);
    return d.toLocaleString();
  };

  const handleSaveAgent = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!job.savedAsAgent && onSaveAgent) {
      onSaveAgent(job);
    }
  };

  return (
    <div
      onClick={onClick}
      className="border border-border rounded-xl p-4 shadow-sm bg-background space-y-2 hover:shadow-md transition cursor-pointer relative"
      aria-label={`Training job card for ${job.modelName}`}
    >
      {/* Top Right Badge if Saved */}
      {job.savedAsAgent && (
        <div className="absolute top-2 right-2 flex items-center gap-1 text-green-600 bg-green-100 text-xs px-2 py-0.5 rounded-full font-medium">
          <CheckCircle className="h-4 w-4" />
          Saved as Agent
        </div>
      )}

      {/* Header: Title + Status */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{job.modelName}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            job.status === "Completed"
              ? "bg-green-100 text-green-600"
              : job.status === "Running"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {job.status}
        </span>
      </div>

      {/* Dataset Info */}
      <p className="text-sm text-muted-foreground">
        Dataset:{" "}
        {Array.isArray(job.datasetIds)
          ? job.datasetIds.join(", ")
          : job.datasetIds}
      </p>

      {/* Timing Info */}
      <p className="text-sm text-muted-foreground">
        Started: {formatDate(job.startedAt)}
        <br />
        Ended: {formatDate(job.completedAt)}
      </p>

      {/* Training Progress */}
      {job.status === "Running" && typeof job.progress === "number" && (
        <TrainingProgress progress={job.progress} status={job.status} />
      )}

      {/* Footer Actions */}
      <div className="mt-3 flex justify-between items-center">
        {/* View Logs */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewLogs(job.id);
          }}
          className="text-blue-600 hover:underline text-sm"
          aria-label={`View logs for ${job.modelName}`}
        >
          View Logs
        </button>

        {/* Save Agent */}
        <button
          onClick={handleSaveAgent}
          disabled={job.savedAsAgent}
          className={`text-sm px-3 py-1 rounded-md font-medium transition ${
            job.savedAsAgent
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {job.savedAsAgent ? "Already Saved" : "Save Agent"}
        </button>
      </div>
    </div>
  );
}
