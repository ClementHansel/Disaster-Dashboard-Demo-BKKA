"use client";

import React from "react";

interface DeleteDeviceProps {
  deviceId: string;
  deviceName: string;
  onDeleteDevice?: (deviceId: string) => void;
}

const DeleteDevice: React.FC<DeleteDeviceProps> = ({
  deviceId,
  deviceName,
  onDeleteDevice,
}) => {
  const handleDelete = () => {
    if (onDeleteDevice) onDeleteDevice(deviceId);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <p className="mb-2">Delete Device: {deviceName}</p>
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-500 text-white rounded"
      >
        Delete Device
      </button>
    </div>
  );
};

export default DeleteDevice;
