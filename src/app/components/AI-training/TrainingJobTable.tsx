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
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-border rounded-lg">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="p-2 text-left">Model</th>
            <th className="p-2 text-left">Dataset</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Started</th>
            <th className="p-2 text-left">Ended</th>
            <th className="p-2 text-left">Logs</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="hover:bg-muted/50 transition">
              <td className="p-2">{job.modelName}</td>
              <td className="p-2">{job.datasetIds}</td>
              <td className="p-2">{job.status}</td>
              <td className="p-2">{job.startedAt}</td>
              <td className="p-2">{job.completedAt || "In progress"}</td>
              <td className="p-2">
                <button
                  onClick={() => onViewLogs(job.id)}
                  className="text-blue-600 hover:underline"
                  aria-label={`View logs for job ${job.modelName}`}
                >
                  View Logs
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
