import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../ui/card";
import { RefreshCw as ReloadIcon } from "lucide-react";
import { mockTrainingHistory } from "@/app/data/ai/AI-training/mockHistory";
import { TrainingHistoryItem } from "@/app/types/ai/AI-training/training";

export default function TrainingHistory({ modelId }: { modelId: string }) {
  const [history, setHistory] =
    useState<TrainingHistoryItem[]>(mockTrainingHistory);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setHistory(mockTrainingHistory);
      setLoading(false);
    }, 800);
  }, [modelId]);

  return (
    <Card className="rounded-xl overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Training History</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setHistory(mockTrainingHistory);
                setLoading(false);
              }, 600);
            }}
          >
            {loading && (
              <ReloadIcon className="animate-spin mr-2 transition-opacity" />
            )}
            Refresh
          </Button>
        </div>

        <ScrollArea className="h-60 pr-2">
          {history.map((run) => (
            <div
              key={run.id}
              className="border-b border-muted py-3 flex flex-col gap-1"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-base">{run.id}</div>
                <Badge
                  variant={
                    run.status === "Completed"
                      ? "default"
                      : run.status === "Failed"
                      ? "destructive"
                      : "outline"
                  }
                >
                  {run.status}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {run.date} • {run.duration} • {run.modelSize} • {run.accuracy}
              </div>
              <div className="text-sm text-gray-700 dark:text-gray-300 italic">
                {run.notes}
              </div>
            </div>
          ))}
        </ScrollArea>

        {history.length === 0 && !loading && (
          <p className="text-sm text-muted-foreground">
            No training history found.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
