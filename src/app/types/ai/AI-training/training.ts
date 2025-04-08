export type TrainingStatus =
  | "Queued"
  | "Running"
  | "Success"
  | "Failed"
  | "Cancelled"
  | "Completed";

export type TrainingJob = {
  id: string;
  modelId: string;
  modelName: string;
  datasetIds: string[];
  status: TrainingStatus;
  progress: number; // 0-100
  logs: string[];
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  resultUrl?: string; // download result if success
};
