// src/data/sensors/mockSensorsStatus.ts

import {
  CameraStatus,
  ConnectionStatus,
  SensorStatus,
  SiteStatus,
  TaskStatus,
} from "@/app/types/sensors";

export const siteStatus: SiteStatus = {
  online: 10,
  offline: 2,
  calibration: 1,
};
export const sensorStatus: SensorStatus = {
  online: 50,
  offline: 5,
  calibration: 3,
};
export const cameraStatus: CameraStatus = { online: 8, offline: 2 };
export const connectionStatus: ConnectionStatus = {
  avg: "50 Mbps",
  high: "100 Mbps",
  low: "10 Mbps",
};
export const taskStatus: TaskStatus = {
  completed: 20,
  progress: 5,
  notCompleted: 3,
};
