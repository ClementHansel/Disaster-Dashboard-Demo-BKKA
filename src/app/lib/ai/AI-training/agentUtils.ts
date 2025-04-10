// lib/ai/agentUtils.ts

import { Agent } from "@/app/types/ai/AI-training/training";

export const mockAgents: Agent[] = [
  {
    id: "agent-1",
    modelId: "gpt-base",
    name: "Customer Support Agent",
    description: "Trained to answer customer FAQs",
    status: "Ready",
    createdAt: "2025-04-01T12:00:00Z",
    metrics: { accuracy: 0.92 },
  },
  {
    id: "agent-2",
    modelId: "sensor-anomaly-detector",
    name: "Sensor Anomaly AI",
    description: "Trained to find anomaly in sensors data",
    status: "Ready",
    createdAt: "2025-03-28T15:45:00Z",
    metrics: { accuracy: 0.87 },
  },
];
