// src/app/components/AI-training/AgentSaveModal.tsx
import React from "react";

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
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Save Agent</h2>
        <p className="text-sm text-gray-600">Model ID: {modelId}</p>

        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="px-4 py-2 text-sm bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded"
            onClick={() => {
              console.log("Saving agent for model:", modelId);
              onClose();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgentSaveModal;
