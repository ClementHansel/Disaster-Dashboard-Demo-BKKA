export type TrainingStatus =
  | "Queued"
  | "Running"
  | "Success"
  | "Failed"
  | "Cancelled"
  | "Completed"
  | "Pending"
  | "Training"; // Added for UI-friendly states

export type TrainingJob = {
  id: string;
  name: string; // Human-readable job name (new)
  modelId?: string; // Optional for now
  modelName?: string;
  datasetIds?: string[];
  status: TrainingStatus;
  progress: number; // 0-100
  logs?: string[];
  statusMessage?: string; // Optional for live feedback
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  resultUrl?: string; // Download result if success
};
