// Type for raw sensor data (before annotation)
export type SensorData = {
  id: string;
  sensorId: string;
  site: string;
  timestamp: string;
  value: number; // Sensor measurement value
  unit: string; // Example: "°C", "m/s", "Pa"
};

// Type for annotations linked to sensor data
export type Annotation = {
  id: string;
  sensorId: string;
  site: string;
  timestamp: string;
  label: AnnotationLabel;
  comment?: string; // Optional comment for additional details
};

// Enum for annotation labels
export enum AnnotationLabel {
  ANOMALY = "Anomaly",
  GOOD = "Good",
  BAD = "Bad",
  UNKNOWN = "Unknown",
}

// Type for filtering annotations
export type AnnotationFilters = {
  site?: string;
  sensorId?: string;
  dateFrom?: string;
  dateTo?: string;
  timeFrom?: string;
  timeTo?: string;
  label?: AnnotationLabel;
};

// Type for annotated dataset (used in lists, tables, or AI processing)
// This is updated to support filtering annotations and matching them to raw sensor data
export type AnnotatedData = {
  id: string;
  sensorId: string;
  site: string;
  timestamp: string;
  value: number;
  unit: string;
  annotation?: Annotation; // Optional annotation if available
  filters?: AnnotationFilters; // Optional filters that can be applied for the annotated section
};

// Type for AI-generated insights on annotations
export type AIAnnotationInsight = {
  totalRecords: number;
  anomaliesDetected: number;
  goodRecords: number;
  badRecords: number;
  unknownRecords: number;
  summary: string;
};

export type AIAnalysisResult = {
  summary: string;
  comparison: string;
  conclusion: string;
};
