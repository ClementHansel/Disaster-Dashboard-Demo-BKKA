// components/AI-training/AgentList.tsx

import React from "react";

import { Agent } from "@/app/types/ai/AI-training/training";
import AgentCard from "./AgentCard";

type Props = {
  agents: Agent[];
  onEdit: (agent: Agent) => void;
  onRetrain: (agent: Agent) => void;
};

const AgentList: React.FC<Props> = ({ agents, onEdit, onRetrain }) => {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          agent={agent}
          onEdit={() => onEdit(agent)}
          onRetrain={() => onRetrain(agent)}
        />
      ))}
    </div>
  );
};

export default AgentList;
