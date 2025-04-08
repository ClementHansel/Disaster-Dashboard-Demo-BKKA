"use client";

import { Dataset } from "@/app/types/ai/data-sets/dataset";

type DatasetTableProps = {
  datasets: Dataset[];
  selectedIds: string[];
  onSelect: (id: string) => void;
};

export default function DatasetTable({
  datasets,
  selectedIds,
  onSelect,
}: DatasetTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-border rounded-lg">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="p-2 text-left">Select</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Size</th>
            <th className="p-2 text-left">Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {datasets.map((dataset) => (
            <tr key={dataset.id} className="hover:bg-muted/50 transition">
              <td className="p-2">
                <label
                  className="sr-only"
                  htmlFor={`dataset-checkbox-${dataset.id}`}
                >
                  Select dataset {dataset.name}
                </label>
                <input
                  id={`dataset-checkbox-${dataset.id}`}
                  type="checkbox"
                  checked={selectedIds.includes(dataset.id)}
                  onChange={() => onSelect(dataset.id)}
                  aria-label={`Select dataset ${dataset.name}`}
                />
              </td>
              <td className="p-2">{dataset.name}</td>
              <td className="p-2">{dataset.size} MB</td>
              <td className="p-2">{dataset.uploadedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
