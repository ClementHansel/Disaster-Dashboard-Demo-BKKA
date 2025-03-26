// src/data/sensors/mockSensorsHistorical.ts

import { SensorData } from "@/app/types/sensors";

export const mockSensorsHistorical: SensorData[] = [
  {
    id: "sensor1-hist",
    site: "Site A",
    reading: 42,
    timestamp: "2023-01-01T12:00:00Z",
  },
  {
    id: "sensor2-hist",
    site: "Site B",
    reading: 38,
    timestamp: "2023-01-02T12:00:00Z",
  },
  // Add more historical sensor readings as needed
];
