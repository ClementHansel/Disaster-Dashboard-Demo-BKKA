// src/app/lib/sensors/sensorUtils.ts

export type SiteSummary = {
  siteName: string;
  totalSensors: number;
  active: number;
};

export type SiteSensor = {
  siteName: string;
  totalSensors: number;
  active: number;
  inactive: number;
  lastUpdate: string;
};

export function mapSiteSummaryToSensor(summary: SiteSummary): SiteSensor {
  return {
    ...summary,
    inactive: summary.totalSensors - summary.active,
    lastUpdate: new Date().toISOString(), // Replace with real last update if needed
  };
}

export function mapAllSiteSummaries(summaries: SiteSummary[]): SiteSensor[] {
  return summaries.map(mapSiteSummaryToSensor);
}
