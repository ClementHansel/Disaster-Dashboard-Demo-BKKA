"use client";

import { DatasetGroup } from "@/app/types/ai/data-sets/dataset";

export interface DatasetTableProps {
  datasetGroups: DatasetGroup[];
  setDatasetGroups: React.Dispatch<React.SetStateAction<DatasetGroup[]>>;
  selectedGroupIds: string[];
  setSelectedGroupIds: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function DatasetTable({
  datasetGroups,
  selectedGroupIds,
  setSelectedGroupIds,
}: DatasetTableProps) {
  const handleSelect = (id: string) => {
    setSelectedGroupIds((prev) =>
      prev.includes(id) ? prev.filter((gid) => gid !== id) : [...prev, id]
    );
  };

  return (
    <div className="overflow-x-auto border border-border rounded-lg">
      {datasetGroups.length === 0 ? (
        <div className="p-4 text-center text-muted-foreground text-sm">
          No dataset groups available.
        </div>
      ) : (
        <table className="w-full text-sm">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="p-2 text-left">Select</th>
              <th className="p-2 text-left">Group Name</th>
              <th className="p-2 text-left">Dataset Count</th>
              <th className="p-2 text-left">Uploaded</th>
            </tr>
          </thead>
          <tbody>
            {datasetGroups.map((group) => (
              <tr key={group.id} className="hover:bg-muted/50 transition">
                <td className="p-2">
                  <input
                    id={`group-checkbox-${group.id}`}
                    type="checkbox"
                    checked={selectedGroupIds.includes(group.id)}
                    onChange={() => handleSelect(group.id)}
                    aria-label={`Select ${group.name}`}
                    className="cursor-pointer"
                  />
                </td>
                <td className="p-2 font-medium text-foreground">
                  {group.name}
                </td>
                <td className="p-2">{group.datasets?.length ?? 0}</td>
                <td className="p-2">{group.uploadedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
