"use client";

import React, { useState } from "react";

interface DeviceConfigurationData {
  deviceName: string;
  ipAddress: string;
  port: number;
  connectionStatus: "connected" | "disconnected";
}

const initialDevices: DeviceConfigurationData[] = [
  {
    deviceName: "Sensor A",
    ipAddress: "192.168.1.10",
    port: 8080,
    connectionStatus: "connected",
  },
  {
    deviceName: "Camera B",
    ipAddress: "192.168.1.11",
    port: 8081,
    connectionStatus: "disconnected",
  },
  // Add more devices as needed
];

const DeviceConfiguration: React.FC = () => {
  const [devices, setDevices] =
    useState<DeviceConfigurationData[]>(initialDevices);

  const handleInputChange = (
    index: number,
    field: keyof DeviceConfigurationData,
    value: string
  ) => {
    const updatedDevices = [...devices];
    if (field === "port") {
      updatedDevices[index][field] = Number(value);
    } else if (field === "connectionStatus") {
      updatedDevices[index][field] = value as "connected" | "disconnected";
    } else {
      updatedDevices[index][field] = value;
    }
    setDevices(updatedDevices);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Device Configuration</h2>
      <div className="space-y-4">
        {devices.map((device, index) => (
          <div key={device.deviceName} className="border p-4 rounded-md">
            <div className="mb-2">
              <label
                htmlFor={`deviceName-${index}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Device Name
              </label>
              <input
                id={`deviceName-${index}`}
                type="text"
                value={device.deviceName}
                onChange={(e) =>
                  handleInputChange(index, "deviceName", e.target.value)
                }
                className="p-2 border rounded w-full"
                placeholder="Enter device name"
                aria-label="Device Name"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor={`ipAddress-${index}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                IP Address
              </label>
              <input
                id={`ipAddress-${index}`}
                type="text"
                value={device.ipAddress}
                onChange={(e) =>
                  handleInputChange(index, "ipAddress", e.target.value)
                }
                className="p-2 border rounded w-full"
                placeholder="Enter IP address"
                aria-label="IP Address"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor={`port-${index}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Port
              </label>
              <input
                id={`port-${index}`}
                type="number"
                value={device.port}
                onChange={(e) =>
                  handleInputChange(index, "port", e.target.value)
                }
                className="p-2 border rounded w-full"
                placeholder="Enter port number"
                aria-label="Port"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor={`connectionStatus-${index}`}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Connection Status
              </label>
              <select
                id={`connectionStatus-${index}`}
                value={device.connectionStatus}
                onChange={(e) =>
                  handleInputChange(index, "connectionStatus", e.target.value)
                }
                className="p-2 border rounded w-full"
                aria-label="Connection Status"
              >
                <option value="connected">Connected</option>
                <option value="disconnected">Disconnected</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceConfiguration;
