// src/app/types/sensors/sensor.ts

export type Coordinates = {
  lat: number;
  lng: number;
};

export type Site = {
  id: string;
  name: string;
  coordinates: Coordinates;
};

export type SensorType =
  | "Water Level"
  | "Rainfall"
  | "Temperature"
  | "Humidity"
  | "Wind Speed";

export type Sensor = {
  id: string;
  sensorName: string;
  siteId: string;
  sensorType: SensorType;
  value: number;
  coordinates: Coordinates;
  status: SensorStatus;
  timestamp?: string;
};

export type FilterType = {
  disaster: string | null;
  site: string | null;
  sensorType: string | null;
};

export type MainFilterProps = {
  onFilterChange: (filters: FilterType) => void;
  className?: string;
};

export type SensorFilter = {
  disaster?: string;
  site?: string;
  sensorType?: SensorType;
  dateFrom?: string;
  dateTo?: string;
  timeFrom?: string;
  timeTo?: string;
};

export type DisasterImpact = {
  id: string;
  name: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  affectedSensors: number;
  affectedSites: number;
};

export type SiteSensor = {
  siteName: string;
  totalSensors: number;
  active: number;
  inactive: number;
  lastUpdate: string;
};

export type SensorIssue = {
  id: string;
  name: string;
  site: string;
  type: SensorType;
  lat: number;
  lng: number;
  issues: string[];
  lastIssue: string;
};

export type SensorUpdate = {
  id: string;
  name: string;
  site: string;
  type: SensorType;
  lat: number;
  lng: number;
  lastUpdated: string;
  value?: string;
};

export type SensorNotification = {
  id: string;
  site: string;
  sensorName: string;
  sensorType: SensorType;
  type: "Info" | "Warning" | "Critical";
  message: string;
  status: "Resolved" | "Unresolved";
  timestamp: string;
};

type Notification = {
  id: string;
  site: string;
  sensorName: string;
  sensorType: string;
  status: "alert" | "normal" | "offline" | "Resolved" | "Unresolved";
  timestamp: string;
  message: string;
};

export type NotificationListProps = {
  notifications: Notification[];
};

export type HistoricalDataPoint = {
  timestamp: string;
  value: number;
};

export type SensorSeries = {
  sensorId: string;
  sensorName: string;
  data: HistoricalDataPoint[];
};

export type SensorTypeCount = {
  type: SensorType;
  count: number;
};

export type SensorAlert = {
  totalAlerts: number;
  critical: number;
  warning: number;
};

export type SensorStatusSummary = {
  total: number;
  online: number;
  offline: number;
  issues: number;
};

export type SiteSummary = {
  siteId: string;
  siteName: string;
  totalSensors: number;
  active: number;
  offline: number;
  alert: number;
};

export type TopSensorIssuesWidgetProps = {
  sensors: SensorIssue[];
};

export type DisasterImpactWidgetProps = {
  impacts: DisasterImpact[];
};

export type LastUpdatedSensorsWidgetProps = {
  sensors: SensorUpdate[];
};

export type SiteSensorSummaryProps = {
  data: SiteSensor[];
};

export type SensorAlertWidgetProps = {
  totalAlerts: number;
  critical: number;
  warning: number;
  topAffected?: string; // site or sensor type
};

export type SensorTypeDistributionProps = {
  data: {
    type: string;
    count: number;
  }[];
  chartType?: "bar" | "pie";
};

export type Location = {
  name: string;
  lat: number;
  lng: number;
  status: "online" | "offline" | "in progress" | "maintenance";
  totalSensors: number;
  onlineSensors: number;
  totalCameras: number;
  onlineCameras: number;
  connection: "stable" | "slow" | "disconnected";
  tasks: string; // could become a structured type later
};

export type SensorData = {
  id: string;
  site: string;
  reading: number;
  timestamp: string;
};

export type SiteStatus = {
  online: number;
  offline: number;
  calibration?: number;
};

export type SensorStatus = {
  online: number;
  offline: number;
  calibration?: number;
  status:
    | "Normal"
    | "Alert"
    | "Online"
    | "Offline"
    | "Maintenance"
    | "Resolved"
    | "Unresolved";
};

export type CameraStatus = {
  online: number;
  offline: number;
};

export type ConnectionStatus = {
  avg: string;
  high: string;
  low: string;
};

export type TaskStatus = {
  completed: number;
  inProgress: number;
  issue: number;
  noConnection: number;
};

export type HistoricalSummaryProps = {
  data: HistoricalDataPoint[];
  site?: string;
  sensorType?: string;
  fromDate?: string;
  toDate?: string;
  sensorName?: string;
  unit?: string;
};

export type _EnsureUsedTypes =
  | Coordinates
  | Sensor
  | SensorType
  | SensorStatus
  | SensorAlert
  | SensorStatusSummary
  | SensorTypeCount
  | DisasterImpact
  | SiteSensor
  | SensorIssue
  | SensorUpdate
  | Notification
  | HistoricalDataPoint
  | SensorSeries;
