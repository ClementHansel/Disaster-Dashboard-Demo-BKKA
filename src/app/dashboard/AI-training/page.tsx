// src/app/dashboard/AI-training/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { mockTrainingJobs } from "@/app/data/ai/AI-training/mockTrainingJobs";
import TrainingJobCard from "@/app/components/AI-training/TrainingJobCard";
import TrainingJobTable from "@/app/components/AI-training/TrainingJobTable";
import TrainingJobLogsModal from "@/app/components/AI-training/TrainingJobLogsModal";
import { TrainingJob } from "@/app/types/ai/AI-training/training";
import CreateTrainingTaskForm from "@/app/components/AI-training/CreateTrainingJob";

const AITrainingPage = () => {
  const [selectedLogs, setSelectedLogs] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleViewLogs = (jobId: string) => {
    const job = mockTrainingJobs.find((j) => j.id === jobId);
    if (job) {
      setSelectedLogs(job.logs.join("\n"));
      setIsModalOpen(true);
    }
  };

  const handleCardClick = (modelId: string) => {
    router.push(`/dashboard/models/${modelId}`);
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
          onSubmit={(data) => {
            console.log("Create Task:", data);
            // Optional: Add it to the mockTrainingJobs list or show confirmation
          }}
        />
      </section>

      {/* Training Jobs Cards */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Recent Training Jobs</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {mockTrainingJobs.map((job: TrainingJob) => (
            <TrainingJobCard
              key={job.id}
              job={job}
              onViewLogs={handleViewLogs}
              onClick={() => handleCardClick(job.modelId)}
            />
          ))}
        </div>
      </section>

      {/* Training Jobs Table */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Training Jobs Overview</h2>
        <TrainingJobTable jobs={mockTrainingJobs} onViewLogs={handleViewLogs} />
      </section>

      {/* Logs Modal */}
      <TrainingJobLogsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        logs={selectedLogs}
      />
    </div>
  );
};

export default AITrainingPage;
