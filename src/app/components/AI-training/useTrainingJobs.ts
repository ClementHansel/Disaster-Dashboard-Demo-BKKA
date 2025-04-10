// src/app/components/AI-training/useTrainingJobs.ts
import { useEffect, useState } from "react";
import { TrainingJob } from "@/app/types/ai/AI-training/training";
import { mockTrainingJobs } from "@/app/data/ai/AI-training/mockTrainingJobs";

/**
 * Utility to simulate network delay
 */
const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Custom hook to manage AI training jobs
 */
export const useTrainingJobs = () => {
  const [jobs, setJobs] = useState<TrainingJob[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        await simulateDelay(500); // Simulate latency for UI
        setJobs(mockTrainingJobs);
      } catch (err) {
        console.error("Failed to fetch training jobs:", err);
        setError("Failed to fetch training jobs.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  /**
   * Add a new training job
   */
  const addJob = (newJob: TrainingJob) => {
    setJobs((prev) => [...prev, newJob]);
  };

  /**
   * Update an existing training job
   */
  const updateJob = (updatedJob: TrainingJob) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  return {
    jobs,
    isLoading,
    error,
    addJob,
    updateJob,
  };
};
