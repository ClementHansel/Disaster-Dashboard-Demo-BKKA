"use client";

import React, { useState } from "react";
import { mockDatasetGroups } from "@/app/data/ai/data-sets/mockDatasets";

interface CreateTrainingTaskFormProps {
  onSubmit: (data: {
    name: string;
    datasetGroupId: string;
    modelType: string;
    notes?: string;
  }) => void;
}

const modelOptions = [
  { value: "default", label: "Default" },
  { value: "cnn", label: "CNN" },
  { value: "lstm", label: "LSTM" },
  { value: "transformer", label: "Transformer" },
];

const CreateTrainingTaskForm: React.FC<CreateTrainingTaskFormProps> = ({
  onSubmit,
}) => {
  const [name, setName] = useState("");
  const [selectedDataset, setSelectedDataset] = useState("");
  const [modelType, setModelType] = useState("default");
  const [notes, setNotes] = useState("");

  const isFormValid = name.trim() !== "" && selectedDataset !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    onSubmit({
      name,
      datasetGroupId: selectedDataset,
      modelType,
      notes,
    });

    // Reset
    setName("");
    setSelectedDataset("");
    setModelType("default");
    setNotes("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border rounded-xl p-6 shadow space-y-4"
    >
      <h2 className="text-xl font-semibold mb-2">Create AI Training Task</h2>

      {/* Job Name */}
      <div>
        <label
          htmlFor="job-name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Training Job Name
        </label>
        <input
          id="job-name"
          type="text"
          className="w-full border rounded p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Anomaly Detection March Batch"
          required
        />
      </div>

      {/* Dataset Group */}
      <div>
        <label
          htmlFor="dataset-group"
          className="block text-sm font-medium text-gray-700 mb-1"
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

      {/* Model Type */}
      <div>
        <label
          htmlFor="model-type"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Model Type (optional)
        </label>
        <select
          id="model-type"
          className="w-full border rounded p-2"
          value={modelType}
          onChange={(e) => setModelType(e.target.value)}
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
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Notes (optional)
        </label>
        <textarea
          id="notes"
          className="w-full border rounded p-2"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Any notes or description..."
        />
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
