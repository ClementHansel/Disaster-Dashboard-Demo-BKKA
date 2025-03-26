"use client";

import React, { useState } from "react";

export interface PCDevice {
  id: string;
  name: string;
  status: "active" | "inactive";
  performance: number; // some performance parameter, e.g. CPU load threshold (0-100)
}

interface PCProps {
  pcData: PCDevice[];
  onUpdatePC?: (device: PCDevice) => void;
}

const PC: React.FC<PCProps> = ({ pcData, onUpdatePC }) => {
  const initialPCDevices: PCDevice[] = pcData.map((device) => ({
    ...device,
    status: device.status === "active" ? "active" : "inactive",
  }));
  const [pcDevices, setPCDevices] = useState<PCDevice[]>(initialPCDevices);

  const toggleAutomaticPC = (id: string) => {
    const updatedDevices = pcDevices.map((device) => {
      if (device.id === id) {
        const newStatus: "active" | "inactive" =
          device.status === "active" ? "inactive" : "active";
        const updatedDevice: PCDevice = { ...device, status: newStatus };
        if (onUpdatePC) onUpdatePC(updatedDevice);
        return updatedDevice;
      }
      return device;
    });
    setPCDevices(updatedDevices);
  };

  const updateAutomaticPCPerformance = (id: string, newPerformance: number) => {
    const updatedDevices = pcDevices.map((device) => {
      if (device.id === id) {
        const updatedDevice: PCDevice = {
          ...device,
          performance: newPerformance,
        };
        if (onUpdatePC) onUpdatePC(updatedDevice);
        return updatedDevice;
      }
      return device;
    });
    setPCDevices(updatedDevices);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">PC Settings (Automatic)</h2>
      {pcDevices.length === 0 ? (
        <p>No PC devices configured for this site.</p>
      ) : (
        <div className="space-y-4">
          {pcDevices.map((device) => (
            <div
              key={device.id}
              className="flex flex-col border p-4 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{device.name}</span>
                <button
                  onClick={() => toggleAutomaticPC(device.id)}
                  className={`px-3 py-1 rounded text-white text-sm ${
                    device.status === "active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {device.status === "active" ? "ACTIVE" : "INACTIVE"}
                </button>
              </div>
              <div className="mt-2">
                <label
                  htmlFor={`pc-performance-${device.id}`}
                  className="block text-xs mb-1"
                >
                  Performance: {device.performance}
                </label>
                <input
                  id={`pc-performance-${device.id}`}
                  type="range"
                  min="0"
                  max="100"
                  value={device.performance}
                  onChange={(e) =>
                    updateAutomaticPCPerformance(
                      device.id,
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />
                <input
                  type="number"
                  value={device.performance}
                  onChange={(e) =>
                    updateAutomaticPCPerformance(
                      device.id,
                      Number(e.target.value)
                    )
                  }
                  className="mt-2 p-1 border rounded w-full text-center"
                  min="0"
                  max="100"
                  aria-label="PC performance setting"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PC;
