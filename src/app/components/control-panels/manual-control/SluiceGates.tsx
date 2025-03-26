"use client";

import React, { useState } from "react";

export interface SluiceGate {
  id: string;
  name: string;
  status: "open" | "closed";
  opening: number; // percentage, 0 to 100 (0 = fully closed, 100 = fully open)
}

interface SluiceGatesProps {
  sluiceGatesData: SluiceGate[];
  onUpdateSluiceGate?: (gate: SluiceGate) => void;
}

const SluiceGates: React.FC<SluiceGatesProps> = ({
  sluiceGatesData,
  onUpdateSluiceGate,
}) => {
  // Initialize state, ensuring the status is either "open" or "closed"
  const initialGates: SluiceGate[] = sluiceGatesData.map((gate) => ({
    ...gate,
    status: gate.status === "open" ? "open" : "closed",
  }));
  const [sluiceGates, setSluiceGates] = useState<SluiceGate[]>(initialGates);

  // Function to toggle the sluice gate manually (open/closed)
  const toggleManualSluiceGate = (id: string) => {
    const updatedGates = sluiceGates.map((gate) => {
      if (gate.id === id) {
        const newStatus: "open" | "closed" =
          gate.status === "open" ? "closed" : "open";
        const updatedGate: SluiceGate = { ...gate, status: newStatus };
        if (onUpdateSluiceGate) onUpdateSluiceGate(updatedGate);
        return updatedGate;
      }
      return gate;
    });
    setSluiceGates(updatedGates);
  };

  // Function to update the manual setting for the sluice gate opening
  const updateManualSluiceGateOpening = (id: string, newOpening: number) => {
    const updatedGates = sluiceGates.map((gate) => {
      if (gate.id === id) {
        const updatedGate: SluiceGate = { ...gate, opening: newOpening };
        if (onUpdateSluiceGate) onUpdateSluiceGate(updatedGate);
        return updatedGate;
      }
      return gate;
    });
    setSluiceGates(updatedGates);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Sluice Gate Controls (Manual)</h2>
      {sluiceGates.length === 0 ? (
        <p>No sluice gates found for this site.</p>
      ) : (
        <div className="space-y-4">
          {sluiceGates.map((gate) => (
            <div key={gate.id} className="flex flex-col border p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{gate.name}</span>
                <button
                  onClick={() => toggleManualSluiceGate(gate.id)}
                  className={`px-3 py-1 rounded text-white text-sm ${
                    gate.status === "open" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {gate.status === "open" ? "OPEN" : "CLOSED"}
                </button>
              </div>
              <div className="mt-2">
                <label
                  htmlFor={`opening-${gate.id}`}
                  className="block text-xs mb-1"
                >
                  Opening: {gate.opening}%
                </label>
                <input
                  id={`opening-${gate.id}`}
                  type="range"
                  min="0"
                  max="100"
                  value={gate.opening}
                  onChange={(e) =>
                    updateManualSluiceGateOpening(
                      gate.id,
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />
                {/* Numeric input for precise control */}
                <input
                  type="number"
                  value={gate.opening}
                  onChange={(e) =>
                    updateManualSluiceGateOpening(
                      gate.id,
                      Number(e.target.value)
                    )
                  }
                  className="mt-2 p-1 border rounded w-full text-center"
                  min="0"
                  max="100"
                  aria-label="Sluice gate opening percentage"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SluiceGates;
