"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Model } from "@/app/types/ai/modeling/model";
import { format } from "date-fns";

export interface CompareModelModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentModelId: string;
  models: Model[];
}

export default function CompareModelModal({
  isOpen,
  onClose,
  currentModelId,
  models,
}: CompareModelModalProps) {
  const selectedModels = models.filter((model) => model.id !== currentModelId);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle>Compare Models</DialogTitle>
        </DialogHeader>

        {selectedModels.length < 1 ? (
          <p className="text-sm text-muted-foreground">
            No models available to compare.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {selectedModels.map((model) => (
              <div
                key={model.id}
                className="p-4 border rounded-md bg-white shadow-sm space-y-2"
              >
                <h3 className="text-lg font-semibold">{model.name}</h3>

                <p className="text-sm text-gray-600">
                  Version: {model.version}
                </p>
                <p className="text-sm text-gray-600">
                  Created:{" "}
                  {model.createdAt
                    ? format(new Date(model.createdAt), "PPPp")
                    : "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Last Updated:{" "}
                  {model.lastUpdated
                    ? format(new Date(model.lastUpdated), "PPPp")
                    : "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Type: {model.type || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Status: {model.status || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Accuracy:{" "}
                  {model.accuracy != null ? `${model.accuracy}%` : "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Dataset Source:{" "}
                  {model.datasetsType === "upload" ? "Uploaded File" : "Group"}
                </p>

                {model.datasetsType === "group" && (
                  <p className="text-sm text-gray-600">
                    Dataset Groups: {model.datasetGroupIds?.length || 0}
                  </p>
                )}

                {model.datasetsType === "upload" && (
                  <p className="text-sm text-gray-600">
                    Uploaded File: {model.uploadedFileName || "N/A"}
                  </p>
                )}

                <p className="text-sm text-gray-600">
                  Owner Role: {model.ownerRole || "N/A"}
                </p>

                {model.tags && model.tags.length > 0 && (
                  <p className="text-sm text-gray-600">
                    Tags: {model.tags.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
