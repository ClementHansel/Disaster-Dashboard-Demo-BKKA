// src/data/sensors/mockSensorLocations.ts

import { Location } from "@/app/types/sensors";

export const locationsData: Location[] = [
  {
    name: "Jakarta",
    lat: -6.2088,
    lng: 106.8456,
    status: "online",
    totalSensors: 10,
    onlineSensors: 10,
    totalCameras: 5,
    onlineCameras: 5,
    connection: "stable",
    tasks: "Completed: 8",
  },
  {
    name: "Surabaya",
    lat: -7.2504,
    lng: 112.7688,
    status: "online",
    totalSensors: 8,
    onlineSensors: 7, // sensor problem
    totalCameras: 4,
    onlineCameras: 4,
    connection: "stable",
    tasks: "In Progress: 2",
  },
  {
    name: "Bandung",
    lat: -6.9147,
    lng: 107.6098,
    status: "offline",
    totalSensors: 6,
    onlineSensors: 0,
    totalCameras: 3,
    onlineCameras: 0,
    connection: "stable",
    tasks: "No Connection",
  },
  {
    name: "Medan",
    lat: 3.5952,
    lng: 98.6722,
    status: "in progress",
    totalSensors: 7,
    onlineSensors: 7,
    totalCameras: 5,
    onlineCameras: 5,
    connection: "stable",
    tasks: "In Progress: 1",
  },
  {
    name: "Bali",
    lat: -8.4095,
    lng: 115.1889,
    status: "online",
    totalSensors: 6,
    onlineSensors: 6,
    totalCameras: 3,
    onlineCameras: 3,
    connection: "slow", // slow connection
    tasks: "Completed: 3",
  },
  {
    name: "Makasar",
    lat: -5.1477,
    lng: 119.4327,
    status: "online",
    totalSensors: 5,
    onlineSensors: 5,
    totalCameras: 4,
    onlineCameras: 3, // camera problem
    connection: "stable",
    tasks: "In Progress: 2",
  },
  {
    name: "Raja Ampat",
    lat: -0.4436,
    lng: 130.9938,
    status: "online",
    totalSensors: 12,
    onlineSensors: 12,
    totalCameras: 8,
    onlineCameras: 8,
    connection: "stable",
    tasks: "Completed: 4",
  },
  {
    name: "Pekanbaru",
    lat: 0.5071,
    lng: 101.4478,
    status: "offline",
    totalSensors: 6,
    onlineSensors: 0,
    totalCameras: 3,
    onlineCameras: 0,
    connection: "stable",
    tasks: "No Connection",
  },
  {
    name: "Manado",
    lat: 1.4748,
    lng: 124.8421,
    status: "online",
    totalSensors: 7,
    onlineSensors: 7,
    totalCameras: 5,
    onlineCameras: 4, // camera problem
    connection: "stable",
    tasks: "In Progress: 1",
  },
  {
    name: "Gorontalo",
    lat: 0.5435,
    lng: 123.0564,
    status: "online",
    totalSensors: 6,
    onlineSensors: 6,
    totalCameras: 4,
    onlineCameras: 4,
    connection: "stable",
    tasks: "Completed: 2",
  },
  {
    name: "Ambon",
    lat: -3.6547,
    lng: 128.1908,
    status: "online",
    totalSensors: 12,
    onlineSensors: 11, // sensor problem
    totalCameras: 8,
    onlineCameras: 4, // camera problem
    connection: "stable",
    tasks: "Issue: Check devices",
  },
  {
    name: "Sorong",
    lat: -0.8711,
    lng: 131.2559,
    status: "maintenance", // under maintenance
    totalSensors: 8,
    onlineSensors: 8,
    totalCameras: 4,
    onlineCameras: 4,
    connection: "stable",
    tasks: "Maintenance ongoing",
  },
  {
    name: "Timika",
    lat: -4.554,
    lng: 136.888,
    status: "online",
    totalSensors: 8,
    onlineSensors: 8,
    totalCameras: 6,
    onlineCameras: 6,
    connection: "stable",
    tasks: "Completed: 5",
  },
  {
    name: "Flores",
    lat: -8.6574,
    lng: 121.0794,
    status: "online",
    totalSensors: 9,
    onlineSensors: 9,
    totalCameras: 5,
    onlineCameras: 4, // camera problem
    connection: "stable",
    tasks: "In Progress: 1",
  },
  {
    name: "Gili",
    lat: -8.3482,
    lng: 116.0465,
    status: "online",
    totalSensors: 7,
    onlineSensors: 7,
    totalCameras: 4,
    onlineCameras: 4,
    connection: "stable",
    tasks: "Completed: 3",
  },
];
