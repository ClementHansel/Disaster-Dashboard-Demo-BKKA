"use client";

import React, { useState, useEffect } from "react";

interface UpdateDeviceProps {
  initialDeviceData: {
    id: string;
    deviceName: string;
    deviceType: string;
    siteId: string;
    ipAddress: string;
  };
  onUpdateDevice?: (device: {
    id: string;
    deviceName: string;
    deviceType: string;
    siteId: string;
    ipAddress: string;
  }) => void;
}

const UpdateDevice: React.FC<UpdateDeviceProps> = ({
  initialDeviceData,
  onUpdateDevice,
}) => {
  const [deviceName, setDeviceName] = useState(initialDeviceData.deviceName);
  const [deviceType, setDeviceType] = useState(initialDeviceData.deviceType);
  const [siteId, setSiteId] = useState(initialDeviceData.siteId);
  const [ipAddress, setIpAddress] = useState(initialDeviceData.ipAddress);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedDevice = {
      id: initialDeviceData.id,
      deviceName,
      deviceType,
      siteId,
      ipAddress,
    };
    if (onUpdateDevice) onUpdateDevice(updatedDevice);
  };

  useEffect(() => {
    setDeviceName(initialDeviceData.deviceName);
    setDeviceType(initialDeviceData.deviceType);
    setSiteId(initialDeviceData.siteId);
    setIpAddress(initialDeviceData.ipAddress);
  }, [initialDeviceData]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Update Device</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="deviceName" className="block text-sm font-semibold">
            Device Name
          </label>
          <input
            id="deviceName"
            type="text"
            value={deviceName}
            onChange={(e) => setDeviceName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="deviceType" className="block text-sm font-semibold">
            Device Type
          </label>
          <input
            id="deviceType"
            type="text"
            value={deviceType}
            onChange={(e) => setDeviceType(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="siteId" className="block text-sm font-semibold">
            Site ID
          </label>
          <input
            id="siteId"
            type="text"
            value={siteId}
            onChange={(e) => setSiteId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="ipAddress" className="block text-sm font-semibold">
            IP Address
          </label>
          <input
            id="ipAddress"
            type="text"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Update Device
        </button>
      </form>
    </div>
  );
};

export default UpdateDevice;
