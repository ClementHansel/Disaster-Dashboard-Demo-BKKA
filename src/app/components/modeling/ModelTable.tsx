"use client";

import { Model } from "@/app/types/ai/modeling/model";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export interface ModelTableProps {
  models: Model[];
  selectedIds: string[];
  onSelect: (id: string) => void;
  searchTerm: string;
  onRowClick: (id: string) => void;
  onCompare: (model: Model) => void;
  onShowLogs: (model: Model) => void;
  onDeleteModel: () => void;
}

export default function ModelTable({
  models,
  selectedIds,
  onSelect,
}: ModelTableProps) {
  const router = useRouter();

  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted text-muted-foreground text-left">
          <tr>
            <th scope="col" className="p-3">
              Select
            </th>
            <th scope="col" className="p-3">
              Name
            </th>
            <th scope="col" className="p-3">
              Version
            </th>
            <th scope="col" className="p-3">
              Created
            </th>
            <th scope="col" className="p-3">
              Status
            </th>
            <th scope="col" className="p-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {models.length > 0 ? (
            models.map((model) => (
              <tr key={model.id} className="hover:bg-muted/50 transition">
                <td className="p-3">
                  <input
                    type="checkbox"
                    id={`model-checkbox-${model.id}`}
                    checked={selectedIds.includes(model.id)}
                    onChange={() => onSelect(model.id)}
                    aria-label={`Select model ${model.name}`}
                    className="cursor-pointer"
                  />
                </td>
                <td className="p-3 font-medium text-foreground">
                  {model.name}
                </td>
                <td className="p-3">{model.version}</td>
                <td className="p-3">
                  {model.createdAt
                    ? format(new Date(model.createdAt), "PPP")
                    : "Unknown"}
                </td>
                <td className="p-3">
                  <span
                    className={`inline-block px-2 py-0.5 text-xs rounded-full font-medium ${
                      model.status === "Deployed"
                        ? "bg-green-100 text-green-700"
                        : model.status === "Training"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {model.status}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      title="View details"
                      aria-label={`View ${model.name}`}
                      onClick={() =>
                        router.push(`/dashboard/models/${model.id}`)
                      }
                    >
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      title="Deploy model"
                      aria-label={`Deploy ${model.name}`}
                    >
                      Deploy
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      title="Delete model"
                      aria-label={`Delete ${model.name}`}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="p-4 text-center text-muted-foreground">
                No models found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
