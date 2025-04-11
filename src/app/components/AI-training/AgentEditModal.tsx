"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type AgentEditModalProps = {
  open: boolean;
  onClose: () => void;
  onSave: (updated: { name: string; description: string }) => void;
  onRetrain: () => void;
  initialData: {
    name?: string;
    description?: string;
  };
};

export default function AgentEditModal({
  open,
  onClose,
  onSave,
  onRetrain,
  initialData,
}: AgentEditModalProps) {
  const [name, setName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setError("");
    }
  }, [open, initialData]);

  const handleSave = () => {
    if (!name.trim()) {
      setError("Agent name is required.");
      return;
    }
    onSave({ name: name.trim(), description: description.trim() });
    onClose();
  };

  const handleRetrain = () => {
    onRetrain();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Agent Info</DialogTitle>
          <DialogDescription>
            Customize the name and description of your AI Agent before saving.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="agent-name">Agent Name</Label>
            <Input
              id="agent-name"
              placeholder="Enter agent name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="agent-description">Description</Label>
            <Textarea
              id="agent-description"
              placeholder="Optional description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[80px]"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <DialogFooter className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleRetrain}>
            Retrain Agent
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
