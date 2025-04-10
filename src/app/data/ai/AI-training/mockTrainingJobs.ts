// src/app/data/ai/AI-training/mockTrainingJobs.ts
import { TrainingJob } from "@/app/types/ai/AI-training/training";
import { v4 as uuidv4 } from "uuid";

export const mockTrainingJobs: TrainingJob[] = [
  {
    id: uuidv4(),
    name: "Anomaly Detector Training Job #1",
    modelId: "model-001",
    modelName: "Anomaly Detector",
    datasetIds: ["dataset-001", "dataset-002"],
    status: "Completed",
    createdAt: new Date("2025-03-10T08:50:00Z").toISOString(),
    startedAt: new Date("2025-03-10T09:00:00Z").toISOString(),
    completedAt: new Date("2025-03-10T10:45:00Z").toISOString(),
    progress: 100,
    logs: [
      "[09:00] Job started",
      "[09:30] Data preprocessing completed",
      "[10:15] Training completed",
      "[10:45] Model saved to /downloads/anomaly-detector-trained-v1.zip",
    ],
    resultUrl: "/downloads/anomaly-detector-trained-v1.zip",
    statusMessage: "Training completed successfully",
  },
  {
    id: uuidv4(),
    name: "Wave Predictor Training Run",
    modelId: "model-002",
    modelName: "Wave Predictor",
    datasetIds: ["dataset-003"],
    status: "Running",
    createdAt: new Date().toISOString(),
    startedAt: new Date().toISOString(),
    progress: 45,
    logs: [
      "[10:00] Job started",
      "[10:20] Data preprocessing completed",
      "[10:30] Training in progress...",
    ],
    resultUrl: "",
    statusMessage: "Currently training...",
  },
  {
    id: uuidv4(),
    name: "Buoy Classifier Attempt",
    modelId: "model-003",
    modelName: "Buoy Classifier",
    datasetIds: ["dataset-004"],
    status: "Failed",
    createdAt: new Date("2025-03-05T12:45:00Z").toISOString(),
    startedAt: new Date("2025-03-05T13:00:00Z").toISOString(),
    completedAt: new Date("2025-03-05T13:40:00Z").toISOString(),
    progress: 25,
    logs: [
      "[13:00] Job started",
      "[13:30] Data preprocessing failed: Missing values in Dataset A",
      "[13:40] Job failed",
    ],
    resultUrl: "",
    statusMessage: "Data preprocessing failed",
  },
];
