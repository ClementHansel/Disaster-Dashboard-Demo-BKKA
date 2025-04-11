type TrainingStatus = "queued" | "running" | "success" | "failed" | "cancelled";

export type TrainingJob = {
  id: string;
  status: TrainingStatus;
  logs: string[];
  progress: number; // 0 - 100
  lastUpdate: number;
  resultUrl?: string; // simulated downloadable result URL
};

const mockJobStore: Record<string, TrainingJob> = {};

// Start a mock training job
export async function startTrainingJob(jobId: string): Promise<void> {
  const now = Date.now();
  mockJobStore[jobId] = {
    id: jobId,
    status: "queued",
    logs: [`[${new Date(now).toISOString()}] Job ${jobId} queued.`],
    progress: 0,
    lastUpdate: now,
    resultUrl: undefined,
  };
}

// Poll job status, simulate progress
export async function pollTrainingStatus(
  jobId: string
): Promise<TrainingJob | null> {
  const job = mockJobStore[jobId];
  if (!job) return null;

  const now = Date.now();
  const elapsed = now - job.lastUpdate;

  if (
    job.status === "cancelled" ||
    job.status === "success" ||
    job.status === "failed"
  ) {
    return job;
  }

  if (job.status === "queued" && elapsed > 1000) {
    job.status = "running";
    job.logs.push(`[${new Date().toISOString()}] Job started...`);
    job.lastUpdate = now;
  } else if (job.status === "running") {
    job.progress = Math.min(
      job.progress + Math.floor(Math.random() * 20 + 10),
      100
    );
    job.logs.push(`[${new Date().toISOString()}] Progress: ${job.progress}%`);
    job.lastUpdate = now;

    if (job.progress >= 100) {
      const isSuccess = Math.random() < 0.9;
      job.status = isSuccess ? "success" : "failed";
      job.logs.push(
        `[${new Date().toISOString()}] Job ${
          isSuccess ? "completed successfully." : "failed with errors."
        }`
      );
      job.resultUrl = isSuccess ? `/downloads/${job.id}-model.zip` : undefined;
    }
  }

  return job;
}

// Fetch logs
export async function fetchTrainingLogs(jobId: string): Promise<string[]> {
  const job = mockJobStore[jobId];
  return job
    ? job.logs
    : [`[${new Date().toISOString()}] No logs found for job ${jobId}.`];
}

// Stop or cancel a job
export async function cancelTrainingJob(jobId: string): Promise<void> {
  const job = mockJobStore[jobId];
  if (job && (job.status === "queued" || job.status === "running")) {
    job.status = "cancelled";
    job.logs.push(`[${new Date().toISOString()}] Job cancelled by user.`);
    job.lastUpdate = Date.now();
  }
}

// Download model result (simulated)
export async function getDownloadUrl(jobId: string): Promise<string | null> {
  const job = mockJobStore[jobId];
  if (job && job.status === "success" && job.resultUrl) {
    return job.resultUrl;
  }
  return null;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
