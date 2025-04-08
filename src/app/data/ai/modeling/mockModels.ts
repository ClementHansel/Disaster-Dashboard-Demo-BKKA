import { Model } from "@/app/types/ai/modeling/model";
import { v4 as uuidv4 } from "uuid";

export const mockModels: Model[] = [
  {
    id: uuidv4(),
    name: "Anomaly Detector",
    version: "1.0.0",
    createdAt: new Date("2024-12-01T10:30:00Z").toISOString(),
    description: "Detects anomalies in buoy sensor data",
    tags: ["anomaly", "buoy", "sensor"],
    fileUrl: "/downloads/anomaly-detector-v1.zip",
  },
  {
    id: uuidv4(),
    name: "Wave Predictor",
    version: "2.1.3",
    createdAt: new Date("2025-02-15T14:45:00Z").toISOString(),
    description: "Predicts wave height and behavior",
    tags: ["prediction", "waves", "ML"],
    fileUrl: "/downloads/wave-predictor-v2.zip",
  },
];
