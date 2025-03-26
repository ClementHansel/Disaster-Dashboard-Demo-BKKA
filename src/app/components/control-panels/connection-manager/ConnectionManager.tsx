"use client";

import React, { useState } from "react";
import AddSite from "./AddSite";
import UpdateSite from "./UpdateSite";
import DeleteSite from "./DeleteSite";
import AddDevice from "./AddDevices";
import UpdateDevice from "./UpdateDevices";
import DeleteDevice from "./DeleteDevices";
import DeviceConnectionStatus from "./DeviceConnectionStatus";

// Define proper types for the connection manager

export interface Site {
  id: string;
  siteName: string;
  ipAddress: string;
  location: string;
}

export interface Device {
  id: string;
  deviceName: string;
  deviceType: string;
  siteId: string;
  ipAddress: string;
}

export interface DeviceStatus {
  id: string;
  deviceName: string;
  connectionStatus: "connected" | "disconnected" | "error";
}

const ConnectionManager: React.FC = () => {
  // Use typed state arrays instead of "any[]"
  const [sites, setSites] = useState<Site[]>([]);
  const [devices, setDevices] = useState<Device[]>([]);
  // Removed deviceStatus state because it's not used

  const handleAddSite = (site: Site) => {
    setSites([...sites, site]);
  };

  const handleUpdateSite = (site: Site) => {
    setSites(sites.map((s) => (s.id === site.id ? site : s)));
  };

  const handleDeleteSite = (siteId: string) => {
    setSites(sites.filter((s) => s.id !== siteId));
  };

  const handleAddDevice = (device: Device) => {
    setDevices([...devices, device]);
  };

  const handleUpdateDevice = (device: Device) => {
    setDevices(devices.map((d) => (d.id === device.id ? device : d)));
  };

  const handleDeleteDevice = (deviceId: string) => {
    setDevices(devices.filter((d) => d.id !== deviceId));
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Connection Manager</h1>

      {/* Site Management */}
      <div className="space-y-4">
        <AddSite onAddSite={handleAddSite} />
        <UpdateSite
          initialSiteData={{
            id: "site-1",
            siteName: "Example",
            ipAddress: "192.168.0.1",
            location: "Location A",
          }}
          onUpdateSite={handleUpdateSite}
        />
        <DeleteSite
          siteId="site-1"
          siteName="Example"
          onDeleteSite={handleDeleteSite}
        />
      </div>

      {/* Device Management */}
      <div className="space-y-4">
        <AddDevice onAddDevice={handleAddDevice} />
        <UpdateDevice
          initialDeviceData={{
            id: "device-1",
            deviceName: "Device A",
            deviceType: "Type 1",
            siteId: "site-1",
            ipAddress: "192.168.0.2",
          }}
          onUpdateDevice={handleUpdateDevice}
        />
        <DeleteDevice
          deviceId="device-1"
          deviceName="Device A"
          onDeleteDevice={handleDeleteDevice}
        />
      </div>

      {/* Device Connection Status */}
      <DeviceConnectionStatus devices={[]} />
    </div>
  );
};

export default ConnectionManager;
