export interface Annotation {
  id: string;
  timestamp: string;
  label: string;
  description: string;
  sensorId: string;
}

export interface DatasetGroup {
  id: string;
  name: string;
  annotations: Annotation[];
}

// Function to create a new dataset group
export const createDatasetGroup = (
  name: string,
  annotations: Annotation[]
): DatasetGroup => {
  return {
    id: crypto.randomUUID(),
    name,
    annotations,
  };
};

// Function to update an existing dataset group
export const updateDatasetGroup = (
  groups: DatasetGroup[],
  id: string,
  name: string
): DatasetGroup[] => {
  return groups.map((group) => (group.id === id ? { ...group, name } : group));
};

// Function to delete a dataset group
export const deleteDatasetGroup = (
  groups: DatasetGroup[],
  id: string
): DatasetGroup[] => {
  return groups.filter((group) => group.id !== id);
};

// Function to delete multiple dataset groups
export const deleteMultipleDatasetGroups = (
  groups: DatasetGroup[],
  ids: string[]
): DatasetGroup[] => {
  return groups.filter((group) => !ids.includes(group.id));
};
