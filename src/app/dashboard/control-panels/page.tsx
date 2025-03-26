"use client";

import AutomaticControlSetting from "@/app/components/control-panels/automatic-settings/AutomaticControlSetting";
import ConnectionManager from "@/app/components/control-panels/connection-manager/ConnectionManager";
import CPHeader from "@/app/components/control-panels/CPHeader";
import CPNav from "@/app/components/control-panels/CPNav";
import CPNotifications from "@/app/components/control-panels/CPNotifications";
import DeviceConnectionDiagram from "@/app/components/control-panels/DeviceConnectionDiagram";
import ManualControl from "@/app/components/control-panels/manual-control/ManualControl";
import { useState } from "react";

// Define types for the device connection diagram (if not defined in a shared file)
export interface DeviceNode {
  id: string;
  label: string;
  imageUrl: string;
  x: number;
  y: number;
  status: "active" | "error" | "offline";
}

export interface ConnectionLine {
  from: string;
  to: string;
  status: "good" | "warning" | "critical";
}

// Sample data for the connection diagram
const mockDevices: DeviceNode[] = [
  {
    id: "1",
    label: "HQ Router",
    imageUrl: "/images/router.png",
    x: 100,
    y: 50,
    status: "active",
  },
  {
    id: "2",
    label: "Regional Switch",
    imageUrl: "/images/switch.png",
    x: 100,
    y: 150,
    status: "active",
  },
  {
    id: "3",
    label: "Site A Sensor",
    imageUrl: "/images/sensor.png",
    x: 50,
    y: 250,
    status: "active",
  },
  {
    id: "4",
    label: "Site A Camera",
    imageUrl: "/images/camera.png",
    x: 150,
    y: 250,
    status: "error",
  },
];

const mockConnections: ConnectionLine[] = [
  { from: "1", to: "2", status: "good" },
  { from: "2", to: "3", status: "warning" },
  { from: "2", to: "4", status: "critical" },
];

export default function ControlPanelsPage() {
  // Header state (search term, etc.)
  const [searchTerm, setSearchTerm] = useState("");
  // Use "all sites" by default
  const [selectedSite, setSelectedSite] = useState("all sites");

  // Tab state to control which section is visible
  const [activeTab, setActiveTab] = useState<
    "manual" | "automatic" | "connection" | "diagram"
  >("manual");

  // List of sites for the dropdown (we include "all sites" separately)
  const sites = ["Jakarta", "Surabaya", "Bandung", "Makasar", "Medan"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <CPHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onRefresh={() => window.location.reload()}
      />

      {/* Combined Row: Site Dropdown & Tab Navigation */}
      <div className="p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/3">
          <CPNav
            sites={["all sites", ...sites]}
            selectedSite={selectedSite}
            setSelectedSite={setSelectedSite}
          />
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button
            onClick={() => setActiveTab("manual")}
            className={`px-4 py-2 rounded ${
              activeTab === "manual" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Manual Control
          </button>
          <button
            onClick={() => setActiveTab("automatic")}
            className={`px-4 py-2 rounded ${
              activeTab === "automatic"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Automatic Settings
          </button>
          <button
            onClick={() => setActiveTab("connection")}
            className={`px-4 py-2 rounded ${
              activeTab === "connection"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Connection Manager
          </button>
          <button
            onClick={() => setActiveTab("diagram")}
            className={`px-4 py-2 rounded ${
              activeTab === "diagram" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Connection Diagram
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {activeTab === "manual" && (
          <ManualControl
            pumpsData={[
              { id: "pump-1", name: "Pump 1", status: "on", speed: 75 },
              { id: "pump-2", name: "Pump 2", status: "off", speed: 0 },
            ]}
            sluiceGatesData={[
              {
                id: "gate-1",
                name: "Sluice Gate 1",
                status: "open",
                opening: 100,
              },
              {
                id: "gate-2",
                name: "Sluice Gate 2",
                status: "closed",
                opening: 0,
              },
            ]}
          />
        )}
        {activeTab === "automatic" && <AutomaticControlSetting />}
        {activeTab === "connection" && <ConnectionManager />}
        {activeTab === "diagram" && (
          <DeviceConnectionDiagram
            devices={mockDevices}
            connections={mockConnections}
          />
        )}
      </div>

      {/* Notifications Area */}
      <div className="p-6">
        <CPNotifications />
      </div>
    </div>
  );
}
