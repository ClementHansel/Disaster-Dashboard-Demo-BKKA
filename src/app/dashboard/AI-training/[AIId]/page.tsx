"use client";

import { useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import { mockAgents } from "@/app/data/ai/AI-training/mockAgent";
import { Button } from "@/components/ui/button";
import AgentEditModal from "@/app/components/AI-training/AgentEditModal";
import AgentSaveModal from "@/app/components/AI-training/AgentSaveModal";
import { Agent, Dataset } from "@/app/types/ai/AI-training/training";

// Updated placeholder components with props
import LiveTestBox from "@/app/components/AI-training/LiveTestBox";
import DeploymentStatusToggle from "@/app/components/AI-training/DeploymentStatusToggle";
import AgentNotes from "@/app/components/AI-training/AgentNotes";
import ExplainabilityViewer from "@/app/components/AI-training/ExplainabilityViewer";
import TrainingHistory from "@/app/components/AI-training/TrainingHistory";
import AgentPerformanceChart from "@/app/components/AI-training/AgentPerformanceChart";
import DatasetInfoCard from "@/app/components/AI-training/DatasetInfoCard";
import ModelVersionPanel from "@/app/components/AI-training/ModelVersionPanel";
import { mockDatasets } from "@/app/data/ai/AI-training/mockDataset";

export default function AIAgentDetailPage() {
  const params = useParams();
  const AIId = Array.isArray(params.AIId) ? params.AIId[0] : params.AIId;
  const agentData = mockAgents.find((a) => a.id === AIId);

  const [agent, setAgent] = useState<Agent | null>(agentData || null);
  const [editOpen, setEditOpen] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);

  const datasets: Dataset[] = mockDatasets.filter((d) =>
    agent?.datasetIds?.includes(d.id)
  );

  useEffect(() => {
    if (!agentData) notFound();
  }, [agentData]);

  if (!agent) {
    return (
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300">Loading agent...</p>
      </div>
    );
  }

  const handleEditSave = (updated: { name: string; description: string }) => {
    setAgent((prev) =>
      prev
        ? {
            ...prev,
            name: updated.name,
            description: updated.description,
          }
        : prev
    );
  };

  const handleRetrain = () => {
    alert(`Retraining agent "${agent.name}"...`);
    // Add retraining logic here
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Agent Detail: {agent.name}</h1>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => setEditOpen(true)}>
            Edit Agent
          </Button>
          <Button onClick={() => setSaveModalOpen(true)}>Save As New</Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-3">
        <div>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Model ID:</strong> {agent.modelId}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Created:</strong> {agent.createdAt}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Status:</strong> {agent.status}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Description:</strong>{" "}
            {agent.description || "No description provided."}
          </p>
        </div>

        <div className="pt-4">
          <Button className="bg-blue-600" onClick={handleRetrain}>
            Retrain Agent
          </Button>
        </div>
      </div>

      {/* Additional Components (with corrected props) */}
      <DeploymentStatusToggle status={agent.status} />

      <AgentPerformanceChart modelId={agent.modelId} />

      <TrainingHistory modelId={agent.modelId} />

      {datasets.map((ds) => (
        <DatasetInfoCard key={ds.id} dataset={ds} />
      ))}

      <ModelVersionPanel modelId={agent.modelId} />

      <LiveTestBox modelId={agent.modelId} />

      <ExplainabilityViewer modelId={agent.modelId} />

      <AgentNotes agentId={agent.id} />

      {/* Modals */}
      <AgentEditModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        onSave={handleEditSave}
        onRetrain={handleRetrain}
        initialData={{
          name: agent.name,
          description: agent.description,
        }}
      />

      <AgentSaveModal
        open={saveModalOpen}
        onClose={() => setSaveModalOpen(false)}
        modelId={agent.modelId}
      />
    </div>
  );
}
