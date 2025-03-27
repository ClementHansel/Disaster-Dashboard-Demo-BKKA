import React, { useState, useCallback } from "react";

interface Group {
  id: string;
  name: string;
  annotations: string[];
}

interface GroupManagerProps {
  datasetGroups: Group[]; // Renamed from "groups"
  onEditGroup: (id: string) => void;
  onDeleteGroup: (id: string) => void;
  onDeleteMultipleGroups: (ids: string[]) => void;
}

const GroupManager: React.FC<GroupManagerProps> = ({
  datasetGroups,
  onEditGroup,
  onDeleteGroup,
  onDeleteMultipleGroups,
}) => {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  // ✅ Toggle selection for individual group
  const toggleGroupSelection = useCallback((id: string) => {
    setSelectedGroups((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  }, []);

  // ✅ Select/Deselect All Groups
  const toggleSelectAll = useCallback(() => {
    setSelectedGroups((prev) =>
      prev.length === datasetGroups.length ? [] : datasetGroups.map((g) => g.id)
    );
  }, [datasetGroups]);

  // ✅ Handle single group deletion with confirmation
  const handleDeleteGroup = useCallback(
    (id: string, name: string) => {
      if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
        onDeleteGroup(id);
        setSelectedGroups((prev) => prev.filter((g) => g !== id));
      }
    },
    [onDeleteGroup]
  );

  // ✅ Handle multiple deletions with confirmation
  const handleDeleteSelected = useCallback(() => {
    if (
      selectedGroups.length > 0 &&
      window.confirm("Delete selected groups?")
    ) {
      onDeleteMultipleGroups(selectedGroups);
      setSelectedGroups([]); // Clear selection after deletion
    }
  }, [selectedGroups, onDeleteMultipleGroups]);

  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-lg font-semibold mb-3">Saved Groups</h2>
      {datasetGroups.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-2 text-center w-12">
                  <input
                    type="checkbox"
                    checked={
                      selectedGroups.length === datasetGroups.length &&
                      datasetGroups.length > 0
                    }
                    onChange={toggleSelectAll}
                    title="Select all groups"
                  />
                </th>
                <th className="border p-2 text-left">Group Name</th>
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {datasetGroups.map((group) => (
                <tr key={group.id} className="hover:bg-gray-50">
                  <td className="border p-2 text-center">
                    <input
                      type="checkbox"
                      checked={selectedGroups.includes(group.id)}
                      onChange={() => toggleGroupSelection(group.id)}
                      title={`Select group ${group.name}`}
                    />
                  </td>
                  <td className="border p-2">{group.name}</td>
                  <td className="border p-2">
                    <div className="flex justify-center gap-2">
                      <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                        onClick={() => onEditGroup(group.id)}
                        aria-label={`Edit group ${group.name}`}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        onClick={() => handleDeleteGroup(group.id, group.name)}
                        aria-label={`Delete group ${group.name}`}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No groups available</p>
      )}

      {/* ✅ Show delete button only when groups are selected */}
      {selectedGroups.length > 0 && (
        <button
          className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 transition w-full"
          onClick={handleDeleteSelected}
        >
          Delete Selected ({selectedGroups.length})
        </button>
      )}
    </div>
  );
};

export default GroupManager;
