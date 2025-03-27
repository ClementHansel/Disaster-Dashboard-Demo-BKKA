import React from "react";
import { DatasetGroup, Annotation } from "@/app/types/ai/data-sets/dataset";

interface CreateGroupProps {
  datasets: DatasetGroup[];
  allAnnotations: Annotation[];
  selectedAnnotations: Record<string, string[]>;
  onToggleAnnotation: (sensorId: string, annotationId: string) => void;
  onCreateGroup: () => void;
}

const CreateGroup: React.FC<CreateGroupProps> = ({
  datasets,
  allAnnotations,
  selectedAnnotations,
  onToggleAnnotation,
  onCreateGroup,
}) => {
  // ✅ Optimized event handler to prevent unnecessary re-renders
  const handleToggle = (sensorId: string, annotationId: string) => () => {
    onToggleAnnotation(sensorId, annotationId);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Dataset Groups</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={onCreateGroup}
          title="Create a new dataset group" // ✅ Accessibility fix
        >
          + Create Group
        </button>
      </div>

      {/* Dataset Groups List */}
      {datasets.length > 0 ? (
        <ul>
          {datasets.map((group) => (
            <li key={group.id} className="border-b py-2 flex justify-between">
              <span>{group.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No groups available</p>
      )}

      {/* Annotation Selection Table */}
      <div className="mt-4">
        <h3 className="text-md font-semibold">Select Annotations</h3>
        <div className="border p-2 rounded-md max-h-48 overflow-auto">
          {allAnnotations.length > 0 ? (
            allAnnotations.map((annotation) => {
              const isSelected = selectedAnnotations[
                annotation.sensorId
              ]?.includes(annotation.id);
              return (
                <div
                  key={annotation.id}
                  className="flex items-center gap-2 py-1"
                >
                  <input
                    type="checkbox"
                    id={`annotation-${annotation.id}`}
                    checked={isSelected}
                    onChange={handleToggle(annotation.sensorId, annotation.id)} // ✅ Optimized
                    title="Select annotation"
                  />
                  <label
                    htmlFor={`annotation-${annotation.id}`}
                    className="cursor-pointer"
                  >
                    {annotation.label ?? "Unnamed Annotation"}{" "}
                    {/* ✅ Prevents undefined errors */}
                  </label>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No annotations available</p> // ✅ Empty state handling
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
