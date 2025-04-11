import { LiveTestHistoryItem } from "@/app/types/ai/AI-training/training";

export const mockLiveTestHistory: LiveTestHistoryItem[] = [
  {
    id: "test1",
    modelId: "model-123",
    inputType: "image",
    inputValue: "https://example.com/images/test-image.jpg",
    params: {
      threshold: 0.7,
    },
    result: {
      label: "Flood",
      confidence: 0.92,
      explanation:
        "Detected high water coverage and discoloration typical of flood zones.",
    },
    timestamp: new Date().toISOString(),
  },
  {
    id: "test2",
    modelId: "model-456",
    inputType: "csv",
    inputValue: "dataset-sample.csv",
    params: {
      threshold: 0.6,
      maxTokens: 128,
    },
    result: {
      label: "Landslide Risk",
      confidence: 0.81,
      explanation:
        "Soil instability and moisture indicators exceeded safety thresholds.",
    },
    timestamp: new Date().toISOString(),
  },
  {
    id: "test3",
    modelId: "model-789",
    inputType: "text",
    inputValue: "Heavy rainfall in mountainous region",
    params: {
      temperature: 0.5,
    },
    result: {
      label: "High Alert",
      confidence: 0.88,
      explanation:
        "Text mentions multiple risk factors and location vulnerability.",
    },
    timestamp: new Date().toISOString(),
  },
];
