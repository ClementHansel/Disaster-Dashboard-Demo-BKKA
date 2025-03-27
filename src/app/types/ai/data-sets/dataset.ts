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
  sensorId: string;
  annotations: string[];
}

export interface Site {
  id: string;
  name: string;
}

export interface Sensor {
  id: string;
  name: string;
  siteId: string;
}

// Ensure TypeScript knows `sites` is an array of `Site`
export interface SiteSelectorProps {
  sites: Site[];
  onSelect: (site: Site | null) => void;
}

export interface SensorSelectorProps {
  site: Site | null;
  sensors: Sensor[];
  onSelect: (selectedSensorIds: string[]) => void;
}
