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
  annotations: string[]; // Array of annotation IDs
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

export interface Dataset {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;
}

// For reusable selector components
export interface SiteSelectorProps {
  sites: Site[];
  onSelect: (site: Site | null) => void;
}

export interface SensorSelectorProps {
  site: Site | null;
  sensors: Sensor[];
  onSelect: (selectedSensorIds: string[]) => void;
}
