// src/app/components/AI-training/AgentSaveModal.tsx
"use client";

import React, { useState } from "react";

export interface AgentSaveModalProps {
  open: boolean;
  onClose: () => void;
  modelId: string;
}

const AgentSaveModal: React.FC<AgentSaveModalProps> = ({
  open,
  onClose,
  modelId,
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate saving
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Agent saved for model:", modelId);
    setIsSaving(false);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
          Save Agent
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Are you sure you want to save this agent based on Model ID:{" "}
          <span className="font-mono text-blue-600">{modelId}</span>?
        </p>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            className="px-4 py-2 text-sm rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white"
            onClick={onClose}
            disabled={isSaving}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm rounded bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Agent"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSaveModal;
