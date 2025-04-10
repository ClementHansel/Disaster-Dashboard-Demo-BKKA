"use client";

import { TrainingJob } from "@/app/types/ai/AI-training/training";
import TrainingProgress from "./TrainingProgress"; // ✅ Add this line

type TrainingJobCardProps = {
  job: TrainingJob;
  onViewLogs: (jobId: string) => void;
  onClick?: () => void;
};

export default function TrainingJobCard({
  job,
  onViewLogs,
  onClick,
}: TrainingJobCardProps) {
  const formatDate = (date?: string) => {
    if (!date) return "In progress";
    const d = new Date(date);
    return d.toLocaleString();
  };

  return (
    <div
      onClick={onClick}
      className="border border-border rounded-xl p-4 shadow-sm bg-background space-y-2 hover:shadow-md transition cursor-pointer"
      aria-label={`Training job card for ${job.modelName}`}
    >
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

      {/* View Logs Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onViewLogs(job.id);
        }}
        className="mt-2 text-blue-600 hover:underline text-sm"
        aria-label={`View logs for ${job.modelName}`}
      >
        View Logs
      </button>
    </div>
  );
}
