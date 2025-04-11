import { Dataset } from "@/app/types/ai/AI-training/training";

export const mockDatasets: Dataset[] = [
  {
    id: "ds-001",
    name: "Sensor Readings - March",
    description:
      "Hourly buoy sensor data for temperature, salinity, and depth.",
    type: "CSV",
    size: "8.4 MB",
    createdAt: "2025-03-01T10:00:00Z",
    updatedAt: "2025-03-20T16:45:00Z",
    usageCount: 3,
    stats: {
      min: 4.8,
      max: 98.1,
      average: 42.7,
      missingValues: 12,
      totalValues: 1024,
    },
  },
  {
    id: "ds-002",
    name: "Wave Heights - Jakarta North",
    description:
      "Recorded wave height data every 30 minutes from coastal sensors.",
    type: "JSON",
    size: "5.1 MB",
    createdAt: "2025-02-15T08:00:00Z",
    updatedAt: "2025-03-01T11:15:00Z",
    usageCount: 1,
    stats: {
      min: 0.3,
      max: 3.2,
      average: 1.4,
      missingValues: 4,
      totalValues: 832,
    },
  },
  {
    id: "ds-003",
    name: "Buoy Classification Labels",
    description:
      "Annotated labels for buoy status: Normal, Anomaly, or Offline.",
    type: "XLSX",
    size: "1.2 MB",
    createdAt: "2025-01-12T09:30:00Z",
    updatedAt: "2025-02-10T17:30:00Z",
    usageCount: 4,
    stats: {
      Normal: 652,
      Anomaly: 45,
      Offline: 12,
      missingValues: 0,
      totalValues: 709,
    },
  },
  {
    id: "ds-004",
    name: "Wind Speed Readings",
    description: "Wind speed data in knots recorded every 10 minutes.",
    type: "CSV",
    size: "6.7 MB",
    createdAt: "2025-03-05T06:00:00Z",
    updatedAt: "2025-03-22T20:00:00Z",
    usageCount: 2,
    stats: {
      min: 1.2,
      max: 28.4,
      average: 14.6,
      missingValues: 8,
      totalValues: 1020,
    },
  },
  {
    id: "ds-005",
    name: "Battery Voltage - Solar Buoys",
    description:
      "Voltage history of solar-powered buoys during daytime and nighttime.",
    type: "CSV",
    size: "4.3 MB",
    createdAt: "2025-02-20T07:15:00Z",
    updatedAt: "2025-03-18T14:10:00Z",
    usageCount: 5,
    stats: {
      min: 10.5,
      max: 13.2,
      average: 11.8,
      missingValues: 2,
      totalValues: 900,
    },
  },
];
