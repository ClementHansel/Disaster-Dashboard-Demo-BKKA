"use client";

import React, { useState } from "react";
import { mockDatasetGroups } from "@/app/data/ai/data-sets/mockDatasets";

export interface TrainingFormData {
  name: string;
  datasetGroupId: string;
  modelType: string;
  notes?: string;
  site?: string;
  agentName?: string;
  readyForDeployment?: boolean;
  originType?: "base" | "clone" | "fine-tune";
}

interface CreateTrainingTaskFormProps {
  onSubmit: (data: TrainingFormData) => void;
  prefillData?: TrainingFormData;
}

const modelOptions = [
  { value: "default", label: "Default" },
  { value: "cnn", label: "CNN" },
  { value: "lstm", label: "LSTM" },
  { value: "transformer", label: "Transformer" },
];

const mockSites = [
  "Jakarta Site A",
  "Jakarta Site B",
  "North Coast",
  "Lab Unit",
];

const CreateTrainingTaskForm: React.FC<CreateTrainingTaskFormProps> = ({
  onSubmit,
  prefillData,
}) => {
  const [name, setName] = useState(prefillData?.name || "");
  const [selectedDataset, setSelectedDataset] = useState(
    prefillData?.datasetGroupId || ""
  );
  const [modelType, setModelType] = useState(
    prefillData?.modelType || "default"
  );
  const [notes, setNotes] = useState(prefillData?.notes || "");
  const [site, setSite] = useState(prefillData?.site || "");
  const [agentName, setAgentName] = useState(prefillData?.agentName || "");
  const [readyForDeployment, setReadyForDeployment] = useState(
    prefillData?.readyForDeployment || false
  );
  const [originType, setOriginType] = useState<"base" | "clone" | "fine-tune">(
    prefillData?.originType || "fine-tune"
  );

  const isFormValid = name.trim() !== "" && selectedDataset !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    onSubmit({
      name,
      datasetGroupId: selectedDataset,
      modelType,
      notes,
      site,
      agentName,
      readyForDeployment,
      originType,
    });

    // Reset form
    setName("");
    setSelectedDataset("");
    setModelType("default");
    setNotes("");
    setSite("");
    setAgentName("");
    setReadyForDeployment(false);
    setOriginType("fine-tune");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-xl p-6 shadow space-y-4"
    >
      <h2 className="text-xl font-semibold mb-2">Create AI Training Task</h2>

      {/* Training Job Name */}
      <div>
        <label htmlFor="job-name" className="block text-sm font-medium mb-1">
          Training Job Name
        </label>
        <input
          id="job-name"
          type="text"
          className="w-full border rounded p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. March Anomaly Detection"
          required
        />
      </div>

      {/* Dataset Group */}
      <div>
        <label
          htmlFor="dataset-group"
          className="block text-sm font-medium mb-1"
        >
          Select Dataset Group
        </label>
        <select
          id="dataset-group"
          className="w-full border rounded p-2"
          value={selectedDataset}
          onChange={(e) => setSelectedDataset(e.target.value)}
          required
        >
          <option value="" disabled>
            -- Choose a dataset group --
          </option>
          {mockDatasetGroups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name} (Sensor: {group.sensorId})
            </option>
          ))}
        </select>
      </div>

      {/* Site Selection */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Site (Optional)
        </label>
        <select
          className="w-full border rounded p-2"
          value={site}
          onChange={(e) => setSite(e.target.value)}
          aria-label="Select Site"
        >
          <option value="">-- Select Site --</option>
          {mockSites.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Agent Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Agent Name (Optional)
        </label>
        <input
          type="text"
          className="w-full border rounded p-2"
          value={agentName}
          onChange={(e) => setAgentName(e.target.value)}
          placeholder="e.g. Jakarta Anomaly Bot"
        />
      </div>

      {/* Model Origin Type */}
      <div>
        <label className="block text-sm font-medium mb-1">Model Origin</label>
        <select
          className="w-full border rounded p-2"
          value={originType}
          onChange={(e) =>
            setOriginType(e.target.value as "base" | "clone" | "fine-tune")
          }
          aria-label="Select Origin Type"
        >
          <option value="base">Base Model</option>
          <option value="fine-tune">Fine-Tuned</option>
          <option value="clone">Clone</option>
        </select>
      </div>

      {/* Model Type */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Model Type (optional)
        </label>
        <select
          className="w-full border rounded p-2"
          value={modelType}
          onChange={(e) => setModelType(e.target.value)}
          aria-label="Select Model Type"
        >
          {modelOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Notes (optional)
        </label>
        <textarea
          className="w-full border rounded p-2"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any notes or description..."
        />
      </div>

      {/* Deployment Ready Toggle */}
      <div className="flex items-center space-x-2">
        <input
          id="ready-deploy"
          type="checkbox"
          checked={readyForDeployment}
          onChange={(e) => setReadyForDeployment(e.target.checked)}
        />
        <label htmlFor="ready-deploy" className="text-sm">
          Mark as Ready for Deployment
        </label>
      </div>

      <button
        type="submit"
        className={`px-4 py-2 rounded text-white ${
          isFormValid
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={!isFormValid}
      >
        Start Training
      </button>
    </form>
  );
};

export default CreateTrainingTaskForm;
