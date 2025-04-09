"use client";

import React from "react";
import Link from "next/link";
import { TrainingJob } from "@/app/types/ai/AI-training/training";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  model: TrainingJob;
};

const getStatusStyle = (status: string) => {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-green-100 text-green-700";
    case "in progress":
      return "bg-yellow-100 text-yellow-700";
    case "failed":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const ModelCard: React.FC<Props> = ({ model }) => {
  const formattedDate = model.startedAt
    ? new Date(model.startedAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Unknown";

  return (
    <div className="p-4 border rounded-2xl shadow-sm bg-white hover:shadow-md transition space-y-2">
      <div className="flex justify-between items-center gap-2">
        <h3 className="text-lg font-semibold truncate">{model.modelName}</h3>
        <span
          className={cn(
            "text-xs font-medium px-2 py-1 rounded-full capitalize",
            getStatusStyle(model.status)
          )}
          aria-label={`Status: ${model.status}`}
        >
          {model.status}
        </span>
      </div>

      <p className="text-sm text-muted-foreground">
        Created: <span>{formattedDate}</span>
      </p>

      <div className="flex justify-between items-center mt-2">
        <Link
          href={`/dashboard/models/${model.modelId}`}
          className="text-blue-600 text-sm hover:underline"
        >
          View Details
        </Link>
        <button
          className="text-muted-foreground hover:text-gray-800 transition"
          aria-label="More options"
          title="More options"
        >
          <MoreHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
