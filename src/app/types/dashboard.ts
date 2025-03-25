// 📌 Defines different types of disasters monitored in the system
export type DisasterCategory =
  | "Flood"
  | "Earthquake"
  | "Landslide"
  | "Forest Fire"
  | "Urban Fire"
  | "Tsunami"
  | "Volcanic Eruption"
  | "Cyclone & Storm"
  | "Drought & Water Crisis"
  | "Riot"
  | "Military Emergency"
  | "Pandemic & Outbreak"
  | "Coastal Erosion"
  | "Infrastructure Collapse"
  | "All"; // "All" for filtering

// 📌 Defines system-wide severity levels
export type Severity = "Low" | "Moderate" | "High" | "Critical";

// 📌 Defines system-wide status values
export type Status =
  | "Active"
  | "Inactive"
  | "Maintenance"
  | "Resolved"
  | "Pending";

// 📌 Defines different types of sensors used for monitoring disasters
export type SensorCategory =
  | "Water Level"
  | "Water Pressure"
  | "Rain Gauge"
  | "Seismic"
  | "Gas Emission"
  | "Temperature"
  | "Wind Speed"
  | "Sluice Gate"
  | "Pump"
  | "Soil Moisture"
  | "Water Storage"
  | "Weather Monitoring"
  | "Geotechnical"
  | "Other";

// 📌 Defines sensor data structure (real-time sensor reading)
export type SensorData = {
  id: number;
  name: string;
  category: SensorCategory;
  disasterCategory: DisasterCategory;
  unit: string;
  value: number;
  lat: number;
  lng: number;
  type: DisasterCategory; // Use disaster category as type for display purposes
  severity: Severity;
  // For sensors, we allow only these statuses (Resolved/Pending are not used)
  status: Extract<Status, "Active" | "Inactive" | "Maintenance">;
  lastUpdated: string;
  batteryLevel?: number;
  location?: string;
  history: { timestamp: string; value: number }[];
  eventId?: number; // if sensor is linked to an event

  // Optional sensor-specific properties
  waterLevel?: number;
  moistureLevel?: number;
  magnitude?: number;
  temperature?: number;
  windSpeed?: number;
  capacity?: number;
};

// For convenience we alias SensorData as Sensor
export type Sensor = SensorData;

// 📌 Defines system alerts
export type Alert = {
  id: number;
  sensorId?: number;
  type: DisasterCategory;
  message: string;
  severity: Extract<Severity, "Low" | "Moderate" | "High" | "Critical">;
  timestamp: string;
};

// 📌 Defines AI-generated insights for disaster analysis
export type AIInsight = {
  id: number;
  sensorId?: number;
  prediction: string;
  confidence: number;
  generatedAt: string;
};

// 📌 Defines a unified structure for all disaster-related events
export type DisasterEvent = {
  id: number;
  name: string;
  disasterCategory: DisasterCategory;
  description?: string;
  severity: Severity;
  // For events, status is one of these (not "Maintenance")
  status: Extract<Status, "Active" | "Resolved" | "Pending">;
  timestamp: string;
  location: { lat: number; lng: number; name: string };
  source: "Sensor" | "Manual";
  sensors: SensorData[]; // Associated sensor readings (may be empty)

  // Additional manual event properties
  reportedBy?:
    | "Government"
    | "Military"
    | "Ministry of Health"
    | "Public Report";
  affectedAreas?: { lat: number; lng: number; name: string }[];
};

// 📌 Defines the main dashboard state structure
export type DashboardState = {
  sensors: SensorData[];
  alerts: Alert[];
  insights: AIInsight[];
  disasterEvents: DisasterEvent[];
  selectedDisasterType: DisasterCategory | "All";
  selectedSensorId?: number;
  selectedEventId?: number;
  isLoading: boolean;
  error?: string;
};

// 📌 Defines actions available for updating the dashboard state
export type DashboardActions = {
  setSensors: (sensors: SensorData[]) => void;
  setAlerts: (alerts: Alert[]) => void;
  setInsights: (insights: AIInsight[]) => void;
  setDisasterEvents: (events: DisasterEvent[]) => void;
  setSelectedDisasterType: (type: DisasterCategory | "All") => void;
  setSelectedSensorId: (id?: number) => void;
  setSelectedEventId: (id?: number) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error?: string) => void;
};

// 📌 Defines the complete dashboard context (state + actions)
export type DashboardContextType = DashboardState & DashboardActions;

export interface EventType {
  id: number;
  name: string;
  description: string;
  type: string;
  severity: string;
  timestamp: string;
  date: string;
  location: string;
  status: string;
  sensors: Sensor[]; // ✅ Ensure sensors are correctly typed
}
