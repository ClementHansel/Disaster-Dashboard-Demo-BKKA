import { useState } from "react";
import AnnotatedCard from "./AnnotatedCard";
import AnnotatedButtons from "./AnnotatedButtons";
import { Annotation } from "@/app/types/ai/annotation";

interface AnnotatedListProps {
  data: Annotation[]; // Receive filtered data directly
}

export default function AnnotatedList({ data }: AnnotatedListProps) {
  const [selectedAnnotations, setSelectedAnnotations] = useState<Set<string>>(
    new Set()
  );

  const toggleSelection = (id: string) => {
    setSelectedAnnotations((prev) => {
      const newSelection = new Set(prev);
      if (newSelection.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
      return newSelection;
    });
  };

  const handleDeleteSelected = () => {
    console.log(
      "Deleting selected annotations:",
      Array.from(selectedAnnotations)
    );
    // Implement deletion logic here
    setSelectedAnnotations(new Set()); // Clear selection after deletion
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="font-bold mb-2">Saved Annotations</h2>
      {data.length > 0 ? (
        <div className="grid gap-4">
          {data.map((annotation) => (
            <AnnotatedCard
              key={annotation.id}
              annotation={annotation}
              isSelected={selectedAnnotations.has(annotation.id)}
              onToggleSelect={toggleSelection}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No annotations available.</p>
      )}

      {selectedAnnotations.size > 0 && (
        <AnnotatedButtons
          onMark={() => console.log("Marking selected")}
          onDelete={handleDeleteSelected}
        />
      )}
    </div>
  );
}
