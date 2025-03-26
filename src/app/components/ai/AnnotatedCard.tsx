import { useState } from "react";

import AlertModal from "./AlertModal";
import { Annotation } from "@/app/types/ai/annotation";

interface AnnotatedCardProps {
  annotation: Annotation;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
}

export default function AnnotatedCard({
  annotation,
  isSelected,
  onToggleSelect,
}: AnnotatedCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(annotation.comment);
  const [showModal, setShowModal] = useState(false);

  const handleSaveEdit = () => setShowModal(true);

  const confirmEdit = () => {
    console.log("Saving annotation edit:", annotation.id, editedComment);
    setIsEditing(false);
    setShowModal(false);
  };

  return (
    <div
      className={`border p-4 rounded-lg shadow bg-white relative ${
        isSelected ? "border-blue-500" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggleSelect(annotation.id)}
        className="absolute top-2 right-2 w-5 h-5 cursor-pointer"
        title="Select annotation"
      />

      <p className="text-sm text-gray-500">
        <strong>Sensor:</strong> {annotation.sensorId}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Site:</strong> {annotation.site}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Timestamp:</strong>{" "}
        {new Date(annotation.timestamp).toLocaleString()}
      </p>
      <p className="text-sm text-gray-500">
        <strong>Label:</strong>{" "}
        <span className="text-blue-600">{annotation.label}</span>
      </p>

      {isEditing ? (
        <div className="mt-2">
          <label
            htmlFor={`comment-${annotation.id}`}
            className="block text-sm font-medium text-gray-700"
          >
            Edit Comment:
          </label>
          <textarea
            id={`comment-${annotation.id}`}
            className="w-full border rounded p-2 mt-1"
            title="Edit comment for annotation"
            placeholder="Enter your annotation comment"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
        </div>
      ) : (
        <p className="mt-2 text-gray-700">
          <strong>Comment:</strong> {annotation.comment}
        </p>
      )}

      <div className="mt-3 flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-700"
              title="Save edited comment"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-600"
              title="Cancel editing"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
              title="Edit annotation comment"
            >
              Edit
            </button>
          </>
        )}
      </div>

      {showModal && (
        <AlertModal
          onConfirm={confirmEdit}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
