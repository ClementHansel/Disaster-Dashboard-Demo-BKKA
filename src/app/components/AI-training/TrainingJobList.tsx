"use client";

import React, { useState } from "react";
import { useTrainingJobs } from "./useTrainingJobs";
import TrainingProgress from "./TrainingProgress";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { TrainingJob } from "@/app/types/ai/AI-training/training";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";

// Icon mock (you can use lucide-react icons here)
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";

// Define supported badge variants
type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

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

const mapStatusToIcon = (status: TrainingJob["status"]) => {
  switch (status) {
    case "Success":
    case "Completed":
      return <CheckCircle className="text-green-500 w-4 h-4" />;
    case "Failed":
      return <AlertCircle className="text-red-500 w-4 h-4" />;
    case "Running":
    case "Training":
    case "Queued":
    case "Pending":
      return <Loader2 className="animate-spin text-blue-500 w-4 h-4" />;
    default:
      return null;
  }
};

const TrainingJobList: React.FC = () => {
  const { jobs, isLoading, error } = useTrainingJobs();
  const [readyForDeploy, setReadyForDeploy] = useState<Record<string, boolean>>(
    {}
  );

  const handleSaveAgent = (job: TrainingJob) => {
    const metadata = {
      agentName: job.modelName || "Unnamed Agent",
      site: job.site || "Unknown Site",
      type: job.originType || "base",
      isReadyForDeployment: readyForDeploy[job.id] || false,
    };

    console.log("Saving Agent with metadata:", metadata);
    alert(`Agent "${metadata.agentName}" saved. (Mock)`);
  };

  if (isLoading) return <p>Loading training jobs...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!jobs || jobs.length === 0) return <p>No training jobs found.</p>;

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardContent className="space-y-3 pt-4">
            <div className="flex justify-between items-center">
              <div className="text-sm font-semibold flex gap-2 items-center">
                {mapStatusToIcon(job.status)}
                Model: {job.modelName || job.modelId || "Unnamed"}
              </div>
              <Badge variant={mapStatusToBadgeVariant(job.status)}>
                {job.status}
              </Badge>
            </div>

            <TrainingProgress progress={job.progress} status={job.status} />

            <div className="text-xs text-muted-foreground">
              Started{" "}
              {formatDistanceToNow(new Date(job.createdAt), {
                addSuffix: true,
              })}
            </div>

            <div className="text-sm flex flex-col gap-1">
              <span>
                Site: <strong>{job.site || "N/A"}</strong>
              </span>
              <span>
                Type: <strong>{job.originType || "base"}</strong>
              </span>
            </div>

            {/* Ready for Deployment Toggle */}
            <div className="flex items-center space-x-2">
              <Switch
                id={`ready-${job.id}`}
                checked={readyForDeploy[job.id] || false}
                onCheckedChange={(val) =>
                  setReadyForDeploy((prev) => ({
                    ...prev,
                    [job.id]: val,
                  }))
                }
              />
              <Label htmlFor={`ready-${job.id}`}>
                Mark as Ready for Deployment
              </Label>
            </div>

            {/* Save as Agent button for Completed Jobs */}
            {job.status === "Completed" || job.status === "Success" ? (
              <Button onClick={() => handleSaveAgent(job)} className="mt-2">
                Save as Agent
              </Button>
            ) : null}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TrainingJobList;
