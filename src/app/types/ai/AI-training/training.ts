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
  site?: string; // e.g., "North Jakarta"
  originType?: "base" | "clone" | "fine-tune"; // for origin info
};

export type Agent = {
  id: string;
  modelId: string;
  name: string;
  description?: string;
  status: "Ready" | "Training" | "Archived";
  createdAt: string;
  updatedAt?: string;
  metrics?: {
    accuracy?: number;
    loss?: number;
  };
};
