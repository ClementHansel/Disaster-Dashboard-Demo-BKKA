"use client";

import { TrainingJob } from "@/app/types/ai/AI-training/training";

type TrainingJobTableProps = {
  jobs: TrainingJob[];
  onViewLogs: (jobId: string) => void;
};

export default function TrainingJobTable({
  jobs,
  onViewLogs,
}: TrainingJobTableProps) {
  return (
    <div className="overflow-x-auto border border-border rounded-xl">
      <table className="w-full text-sm">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="p-3 text-left font-medium">Model</th>
            <th className="p-3 text-left font-medium">Dataset</th>
            <th className="p-3 text-left font-medium">Status</th>
            <th className="p-3 text-left font-medium">Started</th>
            <th className="p-3 text-left font-medium">Ended</th>
            <th className="p-3 text-left font-medium">Logs</th>
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <tr
                key={job.id}
                className="hover:bg-muted/50 transition border-t border-border"
              >
                <td className="p-3">{job.modelName}</td>
                <td className="p-3">{job.datasetIds}</td>
                <td className="p-3">
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
                </td>
                <td className="p-3" title={job.startedAt}>
                  {job.startedAt}
                </td>
                <td className="p-3" title={job.completedAt || "In progress"}>
                  {job.completedAt || "In progress"}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => onViewLogs(job.id)}
                    className="text-blue-600 hover:underline"
                    aria-label={`View logs for ${job.modelName}`}
                  >
                    View Logs
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="p-4 text-center text-muted-foreground italic"
              >
                No training jobs available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
