// src/data/sensors/mockSensorsRealtime.ts

import { SensorData } from "@/app/types/sensors";

export const mockSensorsRealtime: SensorData[] = [
  {
    id: "sensor1",
    site: "Site A",
    reading: 45,
    timestamp: new Date().toISOString(),
  },
  {
    id: "sensor2",
    site: "Site B",
    reading: 40,
    timestamp: new Date().toISOString(),
  },
  // Add more realtime sensor readings as needed
];
