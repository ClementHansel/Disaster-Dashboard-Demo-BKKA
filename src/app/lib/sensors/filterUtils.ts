// libs/sensors/sensorFilters.ts

type SensorData = {
  id: string;
  site: string;
  sensorType: string;
  disasterType?: string;
  value: number;
  timestamp: string;
};

export function getUniqueSites(data: SensorData[]): string[] {
  return [...new Set(data.map((d) => d.site))];
}

export function getUniqueSensorTypes(data: SensorData[]): string[] {
  return [...new Set(data.map((d) => d.sensorType))];
}

export function getSensorTypesBySite(
  data: SensorData[],
  site: string
): string[] {
  return [
    ...new Set(data.filter((d) => d.site === site).map((d) => d.sensorType)),
  ];
}

export function filterBySite(data: SensorData[], site?: string): SensorData[] {
  return site ? data.filter((d) => d.site === site) : data;
}

export function filterBySensorType(
  data: SensorData[],
  sensorType?: string
): SensorData[] {
  return sensorType ? data.filter((d) => d.sensorType === sensorType) : data;
}

export function filterByDisaster(
  data: SensorData[],
  disasterType?: string
): SensorData[] {
  return disasterType
    ? data.filter((d) => d.disasterType === disasterType)
    : data;
}

export function filterAll(
  data: SensorData[],
  filters: {
    site?: string;
    sensorType?: string;
    disasterType?: string;
  }
): SensorData[] {
  let result = [...data];
  if (filters.site) result = filterBySite(result, filters.site);
  if (filters.sensorType)
    result = filterBySensorType(result, filters.sensorType);
  if (filters.disasterType)
    result = filterByDisaster(result, filters.disasterType);
  return result;
}
