"use client";

import React, { useState } from "react";

export interface Pump {
  id: string;
  name: string;
  status: "on" | "off";
  speed: number; // percentage (0-100)
}

interface AutoPumpsProps {
  pumpsData: Pump[];
  onUpdatePump?: (pump: Pump) => void;
}

const AutoPumps: React.FC<AutoPumpsProps> = ({ pumpsData, onUpdatePump }) => {
  // Ensure pump status is properly typed
  const initialPumps: Pump[] = pumpsData.map((p) => ({
    ...p,
    status: p.status === "on" ? "on" : "off",
  }));
  const [pumps, setPumps] = useState<Pump[]>(initialPumps);

  const toggleAutomaticPump = (id: string) => {
    const updatedPumps = pumps.map((pump) => {
      if (pump.id === id) {
        const newStatus: "on" | "off" = pump.status === "on" ? "off" : "on";
        const updatedPump: Pump = { ...pump, status: newStatus };
        if (onUpdatePump) onUpdatePump(updatedPump);
        return updatedPump;
      }
      return pump;
    });
    setPumps(updatedPumps);
  };

  const updateAutomaticPumpSpeed = (id: string, newSpeed: number) => {
    const updatedPumps = pumps.map((pump) => {
      if (pump.id === id) {
        const updatedPump: Pump = { ...pump, speed: newSpeed };
        if (onUpdatePump) onUpdatePump(updatedPump);
        return updatedPump;
      }
      return pump;
    });
    setPumps(updatedPumps);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Pump Controls (Automatic)</h2>
      {pumps.length === 0 ? (
        <p>No pumps configured for this site.</p>
      ) : (
        <div className="space-y-4">
          {pumps.map((pump) => (
            <div key={pump.id} className="flex flex-col border p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{pump.name}</span>
                <button
                  onClick={() => toggleAutomaticPump(pump.id)}
                  className={`px-3 py-1 rounded text-white text-sm ${
                    pump.status === "on" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {pump.status === "on" ? "ON" : "OFF"}
                </button>
              </div>
              <div className="mt-2">
                <label
                  htmlFor={`speed-auto-${pump.id}`}
                  className="block text-xs mb-1"
                >
                  Speed: {pump.speed}%
                </label>
                <input
                  id={`speed-auto-${pump.id}`}
                  type="range"
                  min="0"
                  max="100"
                  value={pump.speed}
                  onChange={(e) =>
                    updateAutomaticPumpSpeed(pump.id, Number(e.target.value))
                  }
                  className="w-full"
                />
                <input
                  type="number"
                  value={pump.speed}
                  onChange={(e) =>
                    updateAutomaticPumpSpeed(pump.id, Number(e.target.value))
                  }
                  className="mt-2 p-1 border rounded w-full text-center"
                  min="0"
                  max="100"
                  aria-label="Pump speed percentage"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoPumps;
