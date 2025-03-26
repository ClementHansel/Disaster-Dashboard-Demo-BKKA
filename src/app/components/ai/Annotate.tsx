import { saveAnnotation } from "@/app/lib/ai/aiDataUtils";
import { Annotation, AnnotationLabel } from "@/app/types/ai/annotation";
import { useState } from "react";

interface Filters {
  site: string;
  sensor: string;
  dateFrom: string;
  dateTo: string;
  timeFrom: string;
  timeTo: string;
}

interface AnnotateProps {
  filters: Filters;
}

export default function Annotate({ filters }: AnnotateProps) {
  const [label, setLabel] = useState<AnnotationLabel | null>(null);
  const [comment, setComment] = useState("");

  const handleSave = () => {
    if (!label) return;

    const annotation: Annotation = {
      id: crypto.randomUUID(), // Generate unique ID
      sensorId: filters.sensor,
      site: filters.site,
      timestamp: new Date().toISOString(), // Mock timestamp
      label,
      comment,
    };

    saveAnnotation(annotation);
    setLabel(null);
    setComment("");
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="font-bold mb-2">Annotate Data</h2>
      <div className="space-y-2">
        <label
          htmlFor="annotation-label"
          className="block text-sm font-medium text-gray-700"
        >
          Select Label
        </label>
        <select
          id="annotation-label"
          className="w-full p-2 border rounded"
          value={label || ""}
          onChange={(e) => setLabel(e.target.value as AnnotationLabel)}
        >
          <option value="" disabled>
            Select Label
          </option>
          {Object.values(AnnotationLabel).map((lbl) => (
            <option key={lbl} value={lbl}>
              {lbl}
            </option>
          ))}
        </select>
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Add a comment (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded"
          onClick={handleSave}
        >
          Save Annotation
        </button>
      </div>
    </div>
  );
}
