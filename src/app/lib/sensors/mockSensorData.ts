import {
  Sensor,
  SensorAlert,
  DisasterImpact,
  SiteSensor,
  SensorIssue,
  SensorUpdate,
  HistoricalDataPoint,
  SensorSeries,
  SensorTypeCount,
  SensorStatusSummary,
  SensorNotification,
} from "@/app/types/sensors/sensor";

// Core sensor mock
export const mockSensors: Sensor[] = [
  {
    id: "1",
    siteId: "site-a",
    sensorName: "Temperature Sensor",
    sensorType: "Temperature",
    value: 30,
    coordinates: { lat: -6.2, lng: 106.8 },
    status: {
      status: "Normal",
      online: 1,
      offline: 0,
    },
  },
  {
    id: "2",
    siteId: "site-b",
    sensorName: "Water Level Sensor",
    sensorType: "Water Level",
    value: 1.2,
    coordinates: { lat: -6.3, lng: 106.7 },
    status: {
      status: "Alert",
      online: 1,
      offline: 0,
    },
  },
  {
    id: "3",
    siteId: "site-a",
    sensorName: "Hygrometer",
    sensorType: "Humidity",
    value: 70,
    coordinates: { lat: -6.25, lng: 106.85 },
    status: {
      status: "Normal",
      online: 1,
      offline: 0,
    },
  },
];

// Dashboard summary stats
export const mockAlerts: SensorAlert = {
  totalAlerts: 10,
  critical: 4,
  warning: 6,
};

export const mockStatus: SensorStatusSummary = {
  total: 20,
  online: 18,
  offline: 2,
  issues: 3,
};

export const mockImpacts: DisasterImpact[] = [
  {
    id: "1",
    name: "Flood Jakarta",
    severity: "High",
    affectedSensors: 12,
    affectedSites: 2,
  },
];

export const mockSiteSummary: SiteSensor[] = [
  {
    siteName: "Site A",
    totalSensors: 10,
    active: 8,
    inactive: 2,
    lastUpdate: "2025-04-07T12:00:00Z",
  },
];

export const mockSensorIssues: SensorIssue[] = [
  {
    id: "s1",
    name: "Sensor A",
    site: "Site A",
    type: "Temperature",
    lat: -6.2,
    lng: 106.8,
    issues: ["Battery low", "Signal lost"],
    lastIssue: "2025-04-06T10:30:00Z",
  },
];

export const mockLastUpdatedSensors: SensorUpdate[] = [
  {
    id: "s2",
    name: "Sensor B",
    site: "Site B",
    type: "Water Level",
    lat: -6.25,
    lng: 106.85,
    lastUpdated: "2025-04-07T10:00:00Z",
  },
];

export const mockTypeDistribution: SensorTypeCount[] = [
  { type: "Temperature", count: 8 },
  { type: "Water Level", count: 6 },
];

export const mockNotifications: SensorNotification[] = [
  {
    id: "n1",
    site: "Site A",
    sensorName: "Sensor A",
    sensorType: "Temperature",
    type: "Critical",
    message: "Sensor disconnected",
    status: "Unresolved",
    timestamp: "2025-04-07T09:00:00Z",
  },
];

export const mockHistoricalData: HistoricalDataPoint[] = [
  {
    timestamp: "2025-04-07T08:00:00Z",
    value: 28.5,
  },
];

export const mockCompareSensors: SensorSeries[] = [
  {
    sensorId: "s1",
    sensorName: "Sensor A",
    data: [
      { timestamp: "2025-04-07T08:00:00Z", value: 28.5 },
      { timestamp: "2025-04-07T09:00:00Z", value: 28.8 },
    ],
  },
];
