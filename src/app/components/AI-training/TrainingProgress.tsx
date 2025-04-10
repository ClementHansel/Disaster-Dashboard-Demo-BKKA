"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";

type TrainingProgressProps = {
  progress: number; // 0 to 100
  status?: string;
};

const TrainingProgress: React.FC<TrainingProgressProps> = ({
  progress,
  status,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-medium">
        <span>Training Progress</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} />
      {status && <p className="text-xs text-muted-foreground">{status}</p>}
    </div>
  );
};

export default TrainingProgress;
