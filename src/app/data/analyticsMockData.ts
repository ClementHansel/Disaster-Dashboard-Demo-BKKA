// src/data/analyticsMockData.ts

import { SensorData } from "../types/analyticsTypes";

// Mock realtime sensor data (e.g., water level, temperature, etc.)
export const realtimeSensorData: SensorData[] = [
  { timestamp: "2025-03-11 08:00", value: 12 },
  { timestamp: "2025-03-11 08:15", value: 14 },
  { timestamp: "2025-03-11 08:30", value: 13 },
  { timestamp: "2025-03-11 08:45", value: 15 },
  { timestamp: "2025-03-11 09:00", value: 17 },
  { timestamp: "2025-03-11 09:15", value: 16 },
  { timestamp: "2025-03-11 09:30", value: 18 },
  // ... add more points as needed
];

// Mock historical sensor data
export const historicalSensorData: SensorData[] = [
  { timestamp: "2025-03-10 08:00", value: 10 },
  { timestamp: "2025-03-10 09:00", value: 11 },
  { timestamp: "2025-03-10 10:00", value: 12 },
  { timestamp: "2025-03-10 11:00", value: 13 },
  { timestamp: "2025-03-10 12:00", value: 15 },
  { timestamp: "2025-03-10 13:00", value: 14 },
  { timestamp: "2025-03-10 14:00", value: 16 },
  // ... add more historical data as needed
];
