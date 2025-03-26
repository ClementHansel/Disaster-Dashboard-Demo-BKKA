"use client";

import React from "react";

export interface DeviceNode {
  id: string;
  label: string;
  imageUrl: string; // URL of the device picture/icon
  x: number; // X position on the diagram
  y: number; // Y position on the diagram
  status: "active" | "error" | "offline";
}

export interface ConnectionLine {
  from: string; // device id
  to: string; // device id
  status: "good" | "warning" | "critical";
}

interface DeviceConnectionDiagramProps {
  devices: DeviceNode[];
  connections: ConnectionLine[];
}

const DeviceConnectionDiagram: React.FC<DeviceConnectionDiagramProps> = ({
  devices,
  connections,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Device Connection Diagram</h2>
      <svg width="100%" height="500px" className="overflow-visible">
        {/* Draw connection lines */}
        {connections.map((conn) => {
          const fromDevice = devices.find((d) => d.id === conn.from);
          const toDevice = devices.find((d) => d.id === conn.to);
          if (!fromDevice || !toDevice) return null;
          // Determine stroke color based on connection status
          let strokeColor = "#00E676"; // default green
          if (conn.status === "warning") strokeColor = "#FFC107";
          else if (conn.status === "critical") strokeColor = "#FF1744";

          return (
            <line
              key={`${conn.from}-${conn.to}`}
              x1={fromDevice.x}
              y1={fromDevice.y}
              x2={toDevice.x}
              y2={toDevice.y}
              stroke={strokeColor}
              strokeWidth={2}
              markerEnd="url(#arrow)"
            />
          );
        })}
        {/* Define an arrow marker */}
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="0"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#333" />
          </marker>
        </defs>
        {/* Draw device nodes */}
        {devices.map((device) => (
          <g key={device.id} transform={`translate(${device.x}, ${device.y})`}>
            <image
              href={device.imageUrl}
              width="40"
              height="40"
              className="rounded-full"
            />
            <text x="50" y="20" className="text-sm fill-current text-gray-800">
              {device.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default DeviceConnectionDiagram;
