"use client";

import React from "react";

export interface DeviceStatus {
  id: string;
  deviceName: string;
  connectionStatus: "connected" | "disconnected" | "error";
}

interface DeviceConnectionStatusProps {
  devices: DeviceStatus[];
}

const DeviceConnectionStatus: React.FC<DeviceConnectionStatusProps> = ({
  devices,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Device Connection Status</h2>
      {devices.length === 0 ? (
        <p>No devices found.</p>
      ) : (
        <ul className="space-y-2">
          {devices.map((device) => (
            <li
              key={device.id}
              className="p-2 border rounded flex justify-between items-center"
            >
              <span className="font-semibold">{device.deviceName}</span>
              <span
                className={`px-2 py-1 rounded text-white text-sm ${
                  device.connectionStatus === "connected"
                    ? "bg-green-500"
                    : device.connectionStatus === "disconnected"
                    ? "bg-red-500"
                    : "bg-orange-500"
                }`}
              >
                {device.connectionStatus.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeviceConnectionStatus;
