"use client";

import { mockModelVersions } from "@/app/data/ai/AI-training/mockModelVersions";
import { ModelVersion } from "@/app/types/ai/AI-training/training";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { formatDate } from "@/app/lib/ai/AI-training/trainingUtils";

export type Props = {
  modelId: string;
};

export default function ModelVersionPanel({ modelId }: Props) {
  // Filter model versions based on modelId prop
  const filteredVersions = mockModelVersions.filter(
    (model) => model.modelId === modelId
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredVersions.length === 0 ? (
        <div className="col-span-full text-muted-foreground">
          No model versions found for this model.
        </div>
      ) : (
        filteredVersions.map((model: ModelVersion) => (
          <Card
            key={model.id}
            className="shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{model.version}</span>
                <Badge
                  variant={
                    model.status === "Training"
                      ? "outline"
                      : model.status === "Trained"
                      ? "default"
                      : "destructive"
                  }
                >
                  {model.status}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <div>
                <strong>Accuracy:</strong> {(model.accuracy * 100).toFixed(2)}%
              </div>
              <div>
                <strong>Loss:</strong> {model.loss.toFixed(3)}
              </div>
              <div>
                <strong>Created At:</strong> {formatDate(model.createdAt)}
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
