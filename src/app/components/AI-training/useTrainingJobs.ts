// src/app/components/AI-training/useTrainingJobs.ts
import { useEffect, useState } from "react";
import { TrainingJob } from "@/app/types/ai/AI-training/training";
import { mockTrainingJobs } from "@/app/data/ai/AI-training/mockTrainingJobs";

export const useTrainingJobs = () => {
  const [jobs, setJobs] = useState<TrainingJob[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        await new Promise((res) => setTimeout(res, 500)); // Simulate latency
        setJobs(mockTrainingJobs);
      } catch (err) {
        console.error("Failed to fetch training jobs:", err);
        setError("Failed to fetch jobs");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const addJob = (newJob: TrainingJob) => {
    setJobs((prev) => [...prev, newJob]);
  };

  const updateJob = (updatedJob: TrainingJob) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === updatedJob.id ? updatedJob : job))
    );
  };

  return { jobs, isLoading, error, addJob, updateJob };
};
