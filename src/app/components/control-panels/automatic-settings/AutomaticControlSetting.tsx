"use client";

import React from "react";
import AutoPumps from "./Pumps";
import AutoSluiceGates from "./SluiceGates"; // Ensure the file name is exactly "SluiceGates.tsx"
import Controllers from "./Controllers";
import DAQComponent from "./DAQ";
import PC from "./PC";

// Define the types (if not defined in a shared types file)
export interface Pump {
  id: string;
  name: string;
  status: "on" | "off";
  speed: number;
}

export interface SluiceGate {
  id: string;
  name: string;
  status: "open" | "closed";
  opening: number;
}

export interface Controller {
  id: string;
  name: string;
  status: "active" | "inactive";
  setting: number;
}

export interface DAQ {
  id: string;
  name: string;
  status: "active" | "inactive";
  samplingRate: number;
}

export interface PCDevice {
  id: string;
  name: string;
  status: "active" | "inactive";
  performance: number;
}

// Correctly typed mock data for each component
const mockPumps: Pump[] = [
  { id: "pump-1", name: "Pump 1", status: "on", speed: 75 },
  { id: "pump-2", name: "Pump 2", status: "off", speed: 0 },
];

const mockSluiceGates: SluiceGate[] = [
  { id: "gate-1", name: "Sluice Gate 1", status: "open", opening: 100 },
  { id: "gate-2", name: "Sluice Gate 2", status: "closed", opening: 0 },
];

const mockControllers: Controller[] = [
  { id: "ctrl-1", name: "Controller 1", status: "active", setting: 50 },
  { id: "ctrl-2", name: "Controller 2", status: "inactive", setting: 20 },
];

const mockDAQ: DAQ[] = [
  { id: "daq-1", name: "DAQ 1", status: "active", samplingRate: 30 },
  { id: "daq-2", name: "DAQ 2", status: "inactive", samplingRate: 10 },
];

const mockPC: PCDevice[] = [
  { id: "pc-1", name: "PC 1", status: "active", performance: 80 },
  { id: "pc-2", name: "PC 2", status: "inactive", performance: 40 },
];

const AutomaticControlSetting: React.FC = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Automatic Control Settings</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AutoPumps pumpsData={mockPumps} />
        <AutoSluiceGates sluiceGatesData={mockSluiceGates} />
        <Controllers controllersData={mockControllers} />
        <DAQComponent daqData={mockDAQ} />
        <PC pcData={mockPC} />
      </div>
    </div>
  );
};

export default AutomaticControlSetting;
