import React, { useState, useEffect, useRef, useCallback } from "react";

interface EditGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  groupName: string;
  onSave: (newName: string) => void;
}

const EditGroupModal: React.FC<EditGroupModalProps> = ({
  isOpen,
  onClose,
  groupName,
  onSave,
}) => {
  const [newName, setNewName] = useState(groupName);
  const inputRef = useRef<HTMLInputElement>(null);

  // ✅ Reset name when modal opens
  useEffect(() => {
    if (isOpen) {
      setNewName(groupName);
      setTimeout(() => inputRef.current?.focus(), 100); // Auto-focus input
    }
  }, [isOpen, groupName]);

  // ✅ Memoized handleSave function
  const handleSave = useCallback(() => {
    if (newName.trim()) {
      onSave(newName.trim());
      onClose();
    }
  }, [newName, onSave, onClose]);

  // ✅ Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter" && newName.trim()) handleSave();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, newName, handleSave, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity"
      role="dialog"
      aria-labelledby="editGroupTitle"
      aria-modal="true"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 animate-fadeIn">
        <h2 id="editGroupTitle" className="text-lg font-semibold mb-4">
          Edit Group Name
        </h2>
        <input
          ref={inputRef}
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
          placeholder="Enter new group name"
          aria-label="New group name"
        />
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`px-4 py-2 rounded transition ${
              newName.trim()
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!newName.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditGroupModal;
