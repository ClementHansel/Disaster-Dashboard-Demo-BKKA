// src/types/analyticsTypes.ts

export interface SensorData {
  timestamp: string;
  value: number;
}

export interface SensorCategoryData {
  name: string;
  value: number;
}

export interface AnalyticsFilter {
  site: string;
  sensorType: string;
  startDate: string;
  endDate: string;
}
