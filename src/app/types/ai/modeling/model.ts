// src/app/types/ai/modeling/model.ts

// Status of the AI model
export type ModelStatus =
  | "Pending"
  | "Trained"
  | "Training"
  | "Deployed"
  | "Failed"
  | "Draft";

// Type/category of the AI model
export type ModelType =
  | "Supervised"
  | "Unsupervised"
  | "Classification"
  | "Time Series";

// Roles allowed in the system
export type UserRole = "Admin" | "Manager" | "Editor" | "Viewer";

// Represents a single model log entry
export type ModelLog = {
  timestamp: string;
  message: string;
  level?: "info" | "warning" | "error";
};

// Main model type definition
export type Model = {
  id: string;
  name: string;
  version: string;
  description?: string;
  tags?: string[];
  fileUrl?: string; // URL for uploading/downloading model file

  createdAt: string;
  lastUpdated?: string;

  status?: ModelStatus; // Current status of the model (e.g. Training, Deployed)
  accuracy?: number; // Accuracy value if applicable
  type?: ModelType; // Type of ML model (e.g. Classification, Time Series)
  datasetsType: "group" | "upload"; //Type of datasets origin
  datasetGroupIds?: string[]; // if using dataset groups
  uploadedFileName?: string; // if dataset uploaded

  ownerRole?: UserRole; // Role that owns or can modify the model
  logs?: ModelLog[];
};
