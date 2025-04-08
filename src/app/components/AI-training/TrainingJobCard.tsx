"use client";

import { TrainingJob } from "@/app/types/ai/AI-training/training";

type TrainingJobCardProps = {
  job: TrainingJob;
  onViewLogs: (jobId: string) => void;
  onClick?: () => void; // ✅ Support card click
};

export default function TrainingJobCard({
  job,
  onViewLogs,
  onClick,
}: TrainingJobCardProps) {
  return (
    <div
      onClick={onClick}
      className="border border-border rounded-xl p-4 shadow-sm bg-background space-y-2 hover:shadow-md transition cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{job.modelName}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs ${
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
      <p className="text-sm text-muted-foreground">Dataset: {job.datasetIds}</p>
      <p className="text-sm text-muted-foreground">
        Started: {job.startedAt}
        <br />
        Ended: {job.completedAt || "In progress"}
      </p>
      <button
        onClick={(e) => {
          e.stopPropagation(); // ✅ Prevent triggering card click
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
