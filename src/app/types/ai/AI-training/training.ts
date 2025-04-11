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
  savedAsAgent?: boolean;
};

export type Agent = {
  id: string;
  modelId: string;
  name: string;
  description?: string;
  status: "Ready" | "Training" | "Archived";
  createdAt: string;
  updatedAt?: string;
  datasetIds?: string[];
  metrics?: {
    accuracy?: number;
    loss?: number;
    precision?: number;
    recall?: number;
  };
};

export type TrainingPrefill = {
  name: string;
  modelType: string;
  datasetGroupId?: string;
};

export type TrainingHistoryItem = {
  id: string;
  status: TrainingStatus; // Reuse the existing status type
  date: string;
  duration: string;
  modelSize: string;
  accuracy: number; // cleaner to use number for calculations, UI will format
  notes: string;
};

export type DatasetStats = {
  missingValues?: number;
  totalValues?: number;
  average?: number;
  min?: number;
  max?: number;
  [key: string]: number | undefined;
};

export type Dataset = {
  id: string;
  name: string;
  description?: string;
  type?: string;
  size?: string;
  createdAt: string;
  updatedAt?: string;
  usageCount?: number;
  stats?: DatasetStats;
};

export interface ModelVersion {
  id: string;
  version: string;
  modelId: string;
  accuracy: number;
  loss: number;
  createdAt: string;
  status: "Training" | "Trained" | "Failed";
}

export type InputType = "image" | "csv" | "text";

export interface LiveTestParams {
  threshold?: number;
  temperature?: number;
  maxTokens?: number;
  [key: string]: number | string | undefined;
}

export interface LiveTestResult {
  label: string;
  confidence: number; // from 0 to 1
  explanation?: string; // optional AI explanation text
}

export interface LiveTestHistoryItem {
  id: string;
  modelId: string;
  inputType: InputType;
  inputValue: string; // URL, CSV name, or short text
  params: LiveTestParams;
  result: LiveTestResult;
  timestamp: string;
}

// Define types for the tab
export interface ExplainabilityCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  markdownContent: string;
  exportFileName: string;
  createdAt: string;
}

export type AgentNotesProps = {
  agentId: string;
  notes?: string;
  onSave?: (updatedNotes: string) => void;
};

export type AgentPerformanceChartProps = {
  agents?: Agent[];
  modelId: string;
};

export type ChartDataPoint = {
  name: string;
  accuracy: number;
  loss: number;
  precision?: number;
  recall?: number;
};

export type RegionType = "coastal" | "inland" | "mountain";

export interface InputValues {
  region: RegionType;
  rainfall: number;
  temperature: number;
  soilMoisture: number;
}

export interface HistoryEntry {
  inputs: InputValues;
  result: string;
  explanation: string;
  timestamp: string;
}
