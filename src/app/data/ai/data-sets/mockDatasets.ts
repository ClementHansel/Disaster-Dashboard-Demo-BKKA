import {
  DatasetGroup,
  Sensor,
  Site,
  Annotation,
} from "@/app/types/ai/data-sets/dataset";

// Site mock data
export const mockSites: Site[] = [
  { id: "site1", name: "Site A" },
  { id: "site2", name: "Site B" },
];

// Sensor mock data
export const mockSensors: Sensor[] = [
  { id: "sensor1", name: "Sensor X", siteId: "site1" },
  { id: "sensor2", name: "Sensor Y", siteId: "site2" },
];

// Annotation mock data
export const mockAnnotations: Annotation[] = [
  {
    id: "a1",
    timestamp: "2025-03-27T10:00:00Z",
    label: "Normal",
    description: "Temperature within range",
    sensorId: "sensor1",
  },
  {
    id: "a2",
    timestamp: "2025-03-27T10:05:00Z",
    label: "Anomaly",
    description: "Spike in pressure detected",
    sensorId: "sensor2",
  },
  {
    id: "a3",
    timestamp: "2025-03-27T10:10:00Z",
    label: "Warning",
    description: "Battery voltage low",
    sensorId: "sensor1",
  },
  {
    id: "a4",
    timestamp: "2025-03-27T10:15:00Z",
    label: "Critical",
    description: "High vibration detected",
    sensorId: "sensor2", // Changed to sensor2 to ensure mapping exists
  },
];

// Dataset Group mock data
export const mockDatasetGroups: DatasetGroup[] = [
  {
    id: "group1",
    name: "Dataset Group 1",
    sensorId: "sensor1",
    annotations: ["a1", "a3"],
    datasets: [], // Add actual mock datasets if needed
    uploadedAt: "2025-04-08T10:00:00Z",
  },
  {
    id: "group2",
    name: "Dataset Group 2",
    sensorId: "sensor2",
    annotations: ["a2", "a4"],
    datasets: [],
    uploadedAt: "2025-04-07T14:30:00Z",
  },
];
