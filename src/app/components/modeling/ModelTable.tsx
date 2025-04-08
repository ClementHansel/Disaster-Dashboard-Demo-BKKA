// src/app/components/modeling/ModelTable.tsx
"use client";

import { Model } from "@/app/types/ai/modeling/model";

type ModelTableProps = {
  models: Model[];
  selectedIds: string[];
  onSelect: (id: string) => void;
};

export default function ModelTable({
  models,
  selectedIds,
  onSelect,
}: ModelTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-border rounded-lg">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="p-2 text-left">Select</th>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Version</th>
            <th className="p-2 text-left">Created</th>
          </tr>
        </thead>
        <tbody>
          {models.map((model) => (
            <tr key={model.id} className="hover:bg-muted/50 transition">
              <td className="p-2">
                <label
                  className="sr-only"
                  htmlFor={`model-checkbox-${model.id}`}
                >
                  Select model {model.name}
                </label>
                <input
                  id={`model-checkbox-${model.id}`}
                  type="checkbox"
                  checked={selectedIds.includes(model.id)}
                  onChange={() => onSelect(model.id)}
                  aria-label={`Select model ${model.name}`}
                />
              </td>
              <td className="p-2">{model.name}</td>
              <td className="p-2">{model.version}</td>
              <td className="p-2">{model.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
