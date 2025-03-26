// src/types/sensors.ts

// Define system statuses for various sensor systems (used in widgets)
export interface SiteStatus {
  online: number;
  offline: number;
  calibration: number;
}

export interface SensorStatus {
  online: number;
  offline: number;
  calibration: number;
}

export interface CameraStatus {
  online: number;
  offline: number;
}

export interface ConnectionStatus {
  avg: string;
  high: string;
  low: string;
}

export interface TaskStatus {
  completed: number;
  progress: number;
  notCompleted: number;
}

// A generic sensor reading type (for realtime and historical data)
export interface SensorData {
  id: string;
  site: string;
  reading: number;
  timestamp: string;
}

// Define a union type for sensor notifications
export type SensorNotificationType = "error" | "warning" | "success";

// For sensor site locations (used in sensor maps)
// Use a string union for the status in sensor locations
export type LocationStatus =
  | "online"
  | "offline"
  | "in progress"
  | "maintenance";

export interface Location {
  name: string;
  lat: number;
  lng: number;
  status: LocationStatus;
  totalSensors: number;
  onlineSensors: number;
  totalCameras: number;
  onlineCameras: number;
  connection: "stable" | "slow";
  tasks: string;
}
