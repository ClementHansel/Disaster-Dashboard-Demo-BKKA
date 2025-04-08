// lib/ai/modeling/modelUtils.ts

import { Model } from "@/app/types/ai/modeling/model";

let mockModels: Model[] = [];

export function getModels(): Model[] {
  return mockModels;
}

export function createModel(newModel: Omit<Model, "id" | "createdAt">): Model {
  const model: Model = {
    ...newModel,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  mockModels.push(model);
  return model;
}

export function updateModel(
  id: string,
  updatedFields: Partial<Model>
): Model | null {
  const index = mockModels.findIndex((m) => m.id === id);
  if (index === -1) return null;

  mockModels[index] = {
    ...mockModels[index],
    ...updatedFields,
  };

  return mockModels[index];
}

export function deleteModels(ids: string[]): void {
  mockModels = mockModels.filter((m) => !ids.includes(m.id));
}

export function uploadModels(file: File): Promise<Model[]> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string) as Model[];
        mockModels = [...mockModels, ...parsed];
        resolve(parsed);
      } catch (e) {
        console.error("Failed to parse model file:", e);
        resolve([]);
      }
    };
    reader.readAsText(file);
  });
}

export function downloadModels(): string {
  return JSON.stringify(mockModels, null, 2);
}
