import { Agent } from "@/app/types/ai/AI-training/training";

export const mockAgents: Agent[] = [
  {
    id: "model-001",
    modelId: "model-001",
    name: "Anomaly Detector",
    description: "Anomaly Detector model from Training Job #1",
    status: "Ready",
    createdAt: "2025-03-10T10:45:00Z",
    updatedAt: "2025-03-12T08:20:00Z",
    metrics: {
      accuracy: 94.2,
      loss: 0.07,
    },
  },
  {
    id: "model-002",
    modelId: "model-002",
    name: "Wave Predictor",
    description: "Wave Predictor model currently in training",
    status: "Training",
    createdAt: new Date().toISOString(),
    metrics: {
      accuracy: 85.6,
      loss: 0.12,
    },
  },
  {
    id: "model-003",
    modelId: "model-003",
    name: "Buoy Classifier",
    description: "Buoy Classifier that failed during preprocessing",
    status: "Archived",
    createdAt: "2025-03-05T13:40:00Z",
    updatedAt: "2025-03-06T09:00:00Z",
    metrics: {
      accuracy: 72.3,
      loss: 0.28,
    },
  },
  {
    id: "model-004",
    modelId: "model-004",
    name: "Corthea NLP",
    description: "Fine-tuned Corthea model for text classification",
    status: "Ready",
    createdAt: "2025-03-15T11:30:00Z",
    updatedAt: "2025-03-16T14:00:00Z",
    metrics: {
      accuracy: 96.7,
      loss: 0.04,
    },
  },
  {
    id: "model-005",
    modelId: "model-005",
    name: "Ocean Temp Forecaster",
    description: "Predicts ocean temperatures from satellite data",
    status: "Ready",
    createdAt: "2025-03-18T09:15:00Z",
    updatedAt: "2025-03-20T17:30:00Z",
    metrics: {
      accuracy: 91.8,
      loss: 0.09,
    },
  },
];
