"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ModelLog } from "@/app/types/ai/modeling/model";

type ModelLogsModalProps = {
  logs: ModelLog[];
  modelName: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function ModelLogsModal({
  logs,
  modelName,
  isOpen,
  onClose,
}: ModelLogsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl" aria-label={`Logs for ${modelName}`}>
        <DialogHeader>
          <DialogTitle>Logs: {modelName}</DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] p-4 bg-muted rounded-md text-sm text-gray-800 whitespace-pre-wrap border border-gray-200">
          {logs.length > 0
            ? logs.map((log) => `${log.timestamp} - ${log.message}`).join("\n")
            : "No logs available for this model."}
        </ScrollArea>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
