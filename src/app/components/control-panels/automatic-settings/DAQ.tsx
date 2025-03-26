"use client";

import React, { useState } from "react";

export interface DAQ {
  id: string;
  name: string;
  status: "active" | "inactive";
  samplingRate: number; // In Hz (e.g., 1-100)
}

interface DAQProps {
  daqData: DAQ[];
  onUpdateDAQ?: (daq: DAQ) => void;
}

const DAQComponent: React.FC<DAQProps> = ({ daqData, onUpdateDAQ }) => {
  const initialDAQ: DAQ[] = daqData.map((daq) => ({
    ...daq,
    status: daq.status === "active" ? "active" : "inactive",
  }));
  const [daqDevices, setDAQDevices] = useState<DAQ[]>(initialDAQ);

  const toggleAutomaticDAQ = (id: string) => {
    const updatedDAQ = daqDevices.map((daq) => {
      if (daq.id === id) {
        const newStatus: "active" | "inactive" =
          daq.status === "active" ? "inactive" : "active";
        const updatedDAQDevice: DAQ = { ...daq, status: newStatus };
        if (onUpdateDAQ) onUpdateDAQ(updatedDAQDevice);
        return updatedDAQDevice;
      }
      return daq;
    });
    setDAQDevices(updatedDAQ);
  };

  const updateAutomaticDAQSamplingRate = (id: string, newRate: number) => {
    const updatedDAQ = daqDevices.map((daq) => {
      if (daq.id === id) {
        const updatedDAQDevice: DAQ = { ...daq, samplingRate: newRate };
        if (onUpdateDAQ) onUpdateDAQ(updatedDAQDevice);
        return updatedDAQDevice;
      }
      return daq;
    });
    setDAQDevices(updatedDAQ);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">DAQ Settings (Automatic)</h2>
      {daqDevices.length === 0 ? (
        <p>No DAQ devices configured for this site.</p>
      ) : (
        <div className="space-y-4">
          {daqDevices.map((daq) => (
            <div key={daq.id} className="flex flex-col border p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{daq.name}</span>
                <button
                  onClick={() => toggleAutomaticDAQ(daq.id)}
                  className={`px-3 py-1 rounded text-white text-sm ${
                    daq.status === "active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {daq.status === "active" ? "ACTIVE" : "INACTIVE"}
                </button>
              </div>
              <div className="mt-2">
                <label
                  htmlFor={`daq-sampling-${daq.id}`}
                  className="block text-xs mb-1"
                >
                  Sampling Rate: {daq.samplingRate} Hz
                </label>
                <input
                  id={`daq-sampling-${daq.id}`}
                  type="range"
                  min="1"
                  max="100"
                  value={daq.samplingRate}
                  onChange={(e) =>
                    updateAutomaticDAQSamplingRate(
                      daq.id,
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />
                <input
                  type="number"
                  value={daq.samplingRate}
                  onChange={(e) =>
                    updateAutomaticDAQSamplingRate(
                      daq.id,
                      Number(e.target.value)
                    )
                  }
                  className="mt-2 p-1 border rounded w-full text-center"
                  min="1"
                  max="100"
                  aria-label="DAQ sampling rate"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DAQComponent;
