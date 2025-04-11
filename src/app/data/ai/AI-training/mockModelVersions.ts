import { ModelVersion } from "@/app/types/ai/AI-training/training";

export const mockModelVersions: ModelVersion[] = [
  {
    id: "1",
    modelId: "model-001", // ✅ Add this
    version: "v1.0",
    accuracy: 0.91,
    loss: 0.12,
    createdAt: "2025-04-01T08:30:00Z",
    status: "Trained",
  },
  {
    id: "2",
    modelId: "model-001", // ✅ Same model, newer version
    version: "v2.0",
    accuracy: 0.93,
    loss: 0.1,
    createdAt: "2025-04-07T14:10:00Z",
    status: "Training",
  },
  {
    id: "3",
    modelId: "model-002", // ✅ Different model for diversity
    version: "v1.5",
    accuracy: 0.89,
    loss: 0.15,
    createdAt: "2025-04-03T10:45:00Z",
    status: "Failed",
  },
];
