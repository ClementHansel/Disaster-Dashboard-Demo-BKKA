import { TrainingHistoryItem } from "@/app/types/ai/AI-training/training";

export const mockTrainingHistory: TrainingHistoryItem[] = [
  {
    id: "train-001",
    date: "2025-04-01",
    duration: "35m",
    modelSize: "128MB",
    accuracy: 91.2,
    status: "Success",
    notes: "Initial training on base dataset",
  },
  {
    id: "train-002",
    date: "2025-04-05",
    duration: "42m",
    modelSize: "130MB",
    accuracy: 92.1,
    status: "Success",
    notes: "Retrained with updated sensor data",
  },
  {
    id: "train-003",
    date: "2025-04-08",
    duration: "50m",
    modelSize: "132MB",
    accuracy: 88.6,
    status: "Failed",
    notes: "Issue with corrupted dataset",
  },
];
