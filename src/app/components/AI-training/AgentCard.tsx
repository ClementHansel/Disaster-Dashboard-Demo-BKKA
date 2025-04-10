// components/AI-training/AgentCard.tsx

import { Agent } from "@/app/types/ai/AI-training/training";
import React from "react";

type Props = {
  agent: Agent;
  onEdit: () => void;
  onRetrain: () => void;
};

const AgentCard: React.FC<Props> = ({ agent, onEdit, onRetrain }) => (
  <div className="border rounded-lg p-4 shadow bg-white">
    <h3 className="text-lg font-bold">{agent.name}</h3>
    <p className="text-sm text-gray-500">{agent.description}</p>
    <p className="text-xs mt-2">Status: {agent.status}</p>
    {agent.metrics && (
      <p className="text-xs text-green-600">
        Accuracy: {agent.metrics.accuracy?.toFixed(2)}
      </p>
    )}
    <div className="mt-4 flex gap-2">
      <button
        className="px-3 py-1 bg-yellow-500 text-white text-sm rounded"
        onClick={onEdit}
      >
        Edit
      </button>
      <button
        className="px-3 py-1 bg-purple-600 text-white text-sm rounded"
        onClick={onRetrain}
      >
        Retrain
      </button>
    </div>
  </div>
);

export default AgentCard;
