"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Pencil, Save } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AgentNotesProps } from "@/app/types/ai/AI-training/training";

export default function AgentNotes({ notes, onSave }: AgentNotesProps) {
  const [editMode, setEditMode] = useState(false);
  const [editableNotes, setEditableNotes] = useState(notes || "");

  // Handle saving the notes
  const handleSave = () => {
    if (onSave) {
      onSave(editableNotes); // Call the provided save handler
    }
    setEditMode(false); // Exit edit mode after saving
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Agent Notes</CardTitle>

        {/* Button toggle based on editMode */}
        {editMode ? (
          <Button size="sm" onClick={handleSave} aria-label="Save notes">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        ) : (
          <Button
            size="sm"
            onClick={() => setEditMode(true)}
            variant="secondary"
            aria-label="Edit notes"
          >
            <Pencil className="h-4 w-4 mr-2" />
            Edit
          </Button>
        )}
      </CardHeader>

      <CardContent>
        {/* Render either Textarea or Markdown content based on editMode */}
        {editMode ? (
          <Textarea
            value={editableNotes}
            onChange={(e) => setEditableNotes(e.target.value)}
            rows={8}
            className="resize-none"
            placeholder="Enter your notes here..."
            aria-label="Edit notes"
          />
        ) : editableNotes.trim() ? (
          <ScrollArea className="h-40 pr-4">
            <div className="prose prose-sm text-muted-foreground max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {editableNotes}
              </ReactMarkdown>
            </div>
          </ScrollArea>
        ) : (
          <p className="text-sm text-muted-foreground italic">
            No notes available.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
