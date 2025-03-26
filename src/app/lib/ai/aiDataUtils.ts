import { mockAnnotations, mockSensorData } from "@/app/data/ai/mockData";
import { Annotation, SensorData } from "@/app/types/ai/annotation";

/**
 * Defines the structure of the filters used across data retrieval functions.
 */
interface Filters {
  site?: string;
  sensor?: string;
  dateFrom?: string;
  dateTo?: string;
  timeFrom?: string;
  timeTo?: string;
}

/**
 * Helper function to check if a timestamp falls within a given date-time range.
 */
const isWithinTimeRange = (timestamp: string, filters: Filters): boolean => {
  if (!filters.dateFrom || !filters.dateTo) return true;

  const entryTime = new Date(timestamp).getTime();
  const startTime = new Date(
    `${filters.dateFrom}T${filters.timeFrom || "00:00"}`
  ).getTime();
  const endTime = new Date(
    `${filters.dateTo}T${filters.timeTo || "23:59"}`
  ).getTime();

  return entryTime >= startTime && entryTime <= endTime;
};

/**
 * Fetches filtered sensor data based on provided filters.
 */
export const getFilteredSensorData = (filters: Filters): SensorData[] => {
  return mockSensorData.filter(
    (data) =>
      (!filters.sensor || data.sensorId === filters.sensor) &&
      (!filters.site || data.site === filters.site) &&
      isWithinTimeRange(data.timestamp, filters)
  );
};

/**
 * Fetches annotations based on provided filters.
 */
export const getFilteredAnnotations = (filters: Filters): Annotation[] => {
  return mockAnnotations.filter(
    (annotation) =>
      (!filters.sensor || annotation.sensorId === filters.sensor) &&
      (!filters.site || annotation.site === filters.site) &&
      isWithinTimeRange(annotation.timestamp, filters)
  );
};

/**
 * Fetches unique available sites from mock sensor data.
 */
export const getAvailableSites = (): string[] => {
  const sites = mockSensorData.map((data) => data.site);
  return Array.from(new Set(sites)); // Remove duplicates
};

/**
 * Fetches unique available sensors for a given site.
 */
export const getAvailableSensors = (site?: string): string[] => {
  if (!site) return []; // Return empty list if no site is selected
  const sensors = mockSensorData
    .filter((data) => data.site === site)
    .map((data) => data.sensorId);
  return Array.from(new Set(sensors)); // Remove duplicates
};

/**
 * Fetches the unit of measurement for a given sensor.
 */
export const getSensorUnit = (sensorId: string): string => {
  const sensor = mockSensorData.find((data) => data.sensorId === sensorId);
  return sensor?.unit || "";
};

/**
 * Saves an annotation to the mock database (for now, just updates mock data).
 */
export const saveAnnotation = (newAnnotation: Annotation): void => {
  mockAnnotations.push(newAnnotation);
};
