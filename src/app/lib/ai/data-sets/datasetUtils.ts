import { DatasetGroup } from "@/app/types/ai/data-sets/dataset";

// Function to create a new dataset group
export const createDatasetGroup = (
  name: string,
  sensorId: string,
  annotationIds: string[]
): DatasetGroup => {
  return {
    id: crypto.randomUUID(),
    name,
    sensorId,
    annotations: annotationIds,
    datasets: [], // default empty array
    uploadedAt: new Date().toISOString(), // current timestamp
  };
};

// Function to update an existing dataset group's name
export const updateDatasetGroup = (
  groups: DatasetGroup[],
  id: string,
  name: string
): DatasetGroup[] => {
  return groups.map((group) => (group.id === id ? { ...group, name } : group));
};

// Function to delete a dataset group by ID
export const deleteDatasetGroup = (
  groups: DatasetGroup[],
  id: string
): DatasetGroup[] => {
  return groups.filter((group) => group.id !== id);
};

// Function to delete multiple dataset groups by array of IDs
export const deleteMultipleDatasetGroups = (
  groups: DatasetGroup[],
  ids: string[]
): DatasetGroup[] => {
  return groups.filter((group) => !ids.includes(group.id));
};
