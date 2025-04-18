"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TrainingJobCard from "@/app/components/AI-training/TrainingJobCard";
import TrainingJobTable from "@/app/components/AI-training/TrainingJobTable";
import TrainingJobLogsModal from "@/app/components/AI-training/TrainingJobLogsModal";
import CreateTrainingTaskForm, {
  TrainingFormData,
} from "@/app/components/AI-training/CreateTrainingJob";
import AgentSaveModal from "@/app/components/AI-training/AgentSaveModal";
import AgentList from "@/app/components/AI-training/AgentList";

import { useTrainingJobs } from "@/app/components/AI-training/useTrainingJobs";
import { mockAgents } from "@/app/data/ai/AI-training/mockAgent";

import { TrainingJob, Agent } from "@/app/types/ai/AI-training/training";

const AITrainingPage = () => {
  const [selectedLogs, setSelectedLogs] = useState<string>("");
  const [isLogsModalOpen, setIsLogsModalOpen] = useState<boolean>(false);
  const [isAgentModalOpen, setIsAgentModalOpen] = useState<boolean>(false);
  const [selectedModelId, setSelectedModelId] = useState<string>("");

  // ✅ Strongly typed prefill state
  const [prefillData, setPrefillData] = useState<TrainingFormData | undefined>(
    undefined
  );

  const router = useRouter();
  const { jobs, addJob, updateJob } = useTrainingJobs();

  const handleViewLogs = (jobId: string) => {
    const job = jobs.find((j: TrainingJob) => j.id === jobId);
    if (job) {
      setSelectedLogs(job.logs?.join("\n") ?? "No logs available.");
      setIsLogsModalOpen(true);
    }
  };

  const handleCardClick = (modelId?: string) => {
    if (modelId) {
      router.push(`/dashboard/AI-training/${modelId}`);
    }
  };

  const handleSaveAgent = (modelId: string) => {
    setSelectedModelId(modelId);
    setIsAgentModalOpen(true);
  };

  const handleUpdateProgress = (jobId: string) => {
    const job = jobs.find((j) => j.id === jobId);
    if (job && job.progress < 100) {
      const updatedProgress = Math.min(job.progress + 10, 100);
      updateJob({
        ...job,
        progress: updatedProgress,
        status: updatedProgress === 100 ? "Completed" : "Running",
        statusMessage:
          updatedProgress === 100
            ? "Training complete!"
            : "Training in progress...",
        logs: [
          ...(job.logs || []),
          `[00:${updatedProgress}] Progress at ${updatedProgress}%`,
        ],
      });
    }
  };

  // ✅ Retrain agent logic
  const handleRetrainAgent = (agent: Agent) => {
    setPrefillData({
      name: `Retrain ${agent.name}`,
      modelType: agent.modelId,
      datasetGroupId: "", // Prefill if dataset info available
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-6 space-y-10">
      <header>
        <h1 className="text-3xl font-bold mb-2">AI Training Dashboard</h1>
        <p className="text-gray-700">
          Use selected dataset groups to initiate training sessions.
        </p>
      </header>

      <section>
        <CreateTrainingTaskForm
          prefillData={prefillData}
          onSubmit={(data) => {
            const newJob: TrainingJob = {
              id: crypto.randomUUID(),
              name: data.name,
              modelId: data.modelType,
              modelName: data.modelType,
              datasetIds: [data.datasetGroupId],
              status: "Running",
              progress: 0,
              createdAt: new Date().toISOString(),
              startedAt: new Date().toISOString(),
              logs: ["[00:00] Job created"],
              resultUrl: "",
              statusMessage: "Initializing training...",
            };

            addJob(newJob);
            setPrefillData(undefined);
          }}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Recent Training Jobs</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job: TrainingJob) => (
            <div key={job.id} className="relative">
              <TrainingJobCard
                job={job}
                onViewLogs={handleViewLogs}
                onClick={() => handleCardClick(job.modelId)}
              />
              <div className="flex justify-between mt-2 gap-2">
                <button
                  className="px-3 py-1 text-sm bg-blue-600 text-white rounded"
                  onClick={() => handleUpdateProgress(job.id)}
                >
                  +10% Progress
                </button>
                <button
                  className="px-3 py-1 text-sm bg-green-600 text-white rounded"
                  onClick={() => handleSaveAgent(job.modelId!)}
                >
                  Save Agent
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Training Jobs Overview</h2>
        <TrainingJobTable jobs={jobs} onViewLogs={handleViewLogs} />
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Ready-to-Deploy Agents</h2>
        <AgentList
          agents={mockAgents}
          onEdit={(agent) => console.log("Edit", agent)}
          onRetrain={handleRetrainAgent}
        />
      </section>

      <TrainingJobLogsModal
        isOpen={isLogsModalOpen}
        onClose={() => setIsLogsModalOpen(false)}
        logs={selectedLogs}
      />

      <AgentSaveModal
        open={isAgentModalOpen}
        onClose={() => setIsAgentModalOpen(false)}
        modelId={selectedModelId}
      />
    </div>
  );
};

export default AITrainingPage;
