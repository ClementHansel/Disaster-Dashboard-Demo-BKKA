// Individual annotation within a dataset
export interface Annotation {
  id: string;
  timestamp: string;
  label: string;
  description: string;
  sensorId: string;
}

// Group of datasets (used for bulk management or categorization)
export interface DatasetGroup {
  id: string;
  name: string;
  sensorId: string;
  annotations: string[]; // List of annotation IDs
  datasets: Dataset[]; // Group contains one or more datasets
  uploadedAt: string; // Date of group upload or creation
}

// Represents a single dataset file
export interface Dataset {
  id: string;
  name: string;
  size: number; // Size in MB
  uploadedAt: string; // Date of individual dataset upload
}

// Geographic or organizational site (contains sensors)
export interface Site {
  id: string;
  name: string;
}

// Physical or logical sensor located at a site
export interface Sensor {
  id: string;
  name: string;
  siteId: string;
}

// Props for a site selector UI component
export interface SiteSelectorProps {
  sites: Site[];
  onSelect: (site: Site | null) => void;
}

// Props for a sensor selector UI component
export interface SensorSelectorProps {
  site: Site | null;
  sensors: Sensor[];
  onSelect: (selectedSensorIds: string[]) => void;
}
