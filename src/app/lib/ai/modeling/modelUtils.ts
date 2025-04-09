// src/app/lib/ai/modeling/modelUtils.ts

import { Model } from "@/app/types/ai/modeling/model";

let mockModels: Model[] = [];

// Internal helper: Create full Model object with defaults
function buildModel(partial: Omit<Model, "id" | "createdAt">): Model {
  return {
    ...partial,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: partial.status ?? "Draft",
    type: partial.type ?? "Supervised",
    accuracy: partial.accuracy ?? 0,
    ownerRole: partial.ownerRole ?? "Editor",
  };
}

export const modelService = {
  getAll(): Model[] {
    return mockModels;
  },

  create(data: Omit<Model, "id" | "createdAt">): Model {
    const newModel = buildModel(data);
    mockModels.push(newModel);
    return newModel;
  },

  update(id: string, updates: Partial<Model>): Model | null {
    const index = mockModels.findIndex((m) => m.id === id);
    if (index === -1) return null;

    const updatedModel: Model = {
      ...mockModels[index],
      ...updates,
      lastUpdated: new Date().toISOString(),
    };

    mockModels[index] = updatedModel;
    return updatedModel;
  },

  delete(ids: string[]): void {
    mockModels = mockModels.filter((m) => !ids.includes(m.id));
  },

  async upload(file: File): Promise<Model[]> {
    try {
      const content = await file.text();
      const parsed = JSON.parse(content) as Model[];
      mockModels = [...mockModels, ...parsed];
      return parsed;
    } catch (error) {
      console.error("Failed to parse uploaded model file:", error);
      return [];
    }
  },

  download(): string {
    return JSON.stringify(mockModels, null, 2);
  },
};
