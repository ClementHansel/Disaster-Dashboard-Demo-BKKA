"use client";

import React from "react";
import Pumps, { Pump } from "./Pumps";
import SluiceGates, { SluiceGate } from "./SluiceGates";

interface ManualControlProps {
  pumpsData: Pump[];
  sluiceGatesData: SluiceGate[];
}

const ManualControl: React.FC<ManualControlProps> = ({
  pumpsData,
  sluiceGatesData,
}) => {
  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Manual Control Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Pumps pumpsData={pumpsData} />
        <SluiceGates sluiceGatesData={sluiceGatesData} />
      </div>
    </div>
  );
};

export default ManualControl;
