import React from "react";
import { useTrainingJobs } from "./useTrainingJobs";
import TrainingProgress from "./TrainingProgress";
import { Badge } from "@/components/ui/badge";

import { formatDistanceToNow } from "date-fns";
import { TrainingJob } from "@/app/types/ai/AI-training/training";
import { Card, CardContent } from "../ui/card";

// Define supported badge variants from the UI library
type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

// Map training statuses to badge variants
const mapStatusToBadgeVariant = (
  status: TrainingJob["status"]
): BadgeVariant => {
  switch (status) {
    case "Completed":
    case "Success":
      return "secondary";
    case "Failed":
    case "Cancelled":
      return "destructive";
    case "Running":
    case "Training":
    case "Queued":
    case "Pending":
      return "outline";
    default:
      return "default";
  }
};

const TrainingJobList: React.FC = () => {
  const { jobs, isLoading, error } = useTrainingJobs();

  if (isLoading) return <p>Loading training jobs...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!jobs || jobs.length === 0) return <p>No training jobs found.</p>;

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardContent className="space-y-2 pt-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">
                Model: {job.modelName || job.modelId || "Unnamed"}
              </div>
              <Badge variant={mapStatusToBadgeVariant(job.status)}>
                {job.status}
              </Badge>
            </div>

            <TrainingProgress progress={job.progress} status={job.status} />

            <p className="text-xs text-muted-foreground">
              Started{" "}
              {formatDistanceToNow(new Date(job.createdAt), {
                addSuffix: true,
              })}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrainingJobList;
