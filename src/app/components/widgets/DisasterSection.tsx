"use client";

import { DisasterCategory } from "@/app/types/dashboard";
import React, { FC, ReactNode } from "react";
import {
  FaWater,
  FaFire,
  FaMountain,
  FaTree,
  FaWaveSquare,
  FaSkullCrossbones,
  FaShieldAlt,
  FaVirus,
  FaWind,
  FaHardHat,
  FaTint,
  FaExclamationTriangle,
} from "react-icons/fa";
import { GiCrackedHelm, GiVolcano, GiDesert } from "react-icons/gi";

// Disaster information mapping
const disasterInfo: Record<
  DisasterCategory,
  { icon: ReactNode; description: string }
> = {
  Flood: {
    icon: <FaWater className="text-blue-600 text-3xl" />,
    description:
      "Floods can cause severe damage to infrastructure and homes. Stay updated with real-time water level monitoring.",
  },
  Earthquake: {
    icon: <GiCrackedHelm className="text-gray-600 text-3xl" />,
    description:
      "Earthquakes can strike suddenly. Monitoring seismic activity helps in early warning and response.",
  },
  Landslide: {
    icon: <FaMountain className="text-brown-600 text-3xl" />,
    description:
      "Landslides can be triggered by heavy rains or earthquakes. Monitoring helps in predicting potential risks.",
  },
  "Forest Fire": {
    icon: <FaTree className="text-green-600 text-3xl" />,
    description:
      "Forest fires pose threats to wildlife and air quality. Heat and smoke sensors help in early detection.",
  },
  "Urban Fire": {
    icon: <FaFire className="text-red-600 text-3xl" />,
    description:
      "Urban and industrial fires can be catastrophic. Temperature and smoke sensors assist in quick response.",
  },
  Tsunami: {
    icon: <FaWaveSquare className="text-blue-400 text-3xl" />,
    description:
      "Tsunamis are triggered by underwater earthquakes. Early warning systems help in evacuation planning.",
  },
  "Volcanic Eruption": {
    icon: <GiVolcano className="text-red-700 text-3xl" />,
    description:
      "Volcanic eruptions can impact air travel and surrounding communities. Monitoring ash clouds and seismic activity is crucial.",
  },
  "Cyclone & Storm": {
    icon: <FaWind className="text-blue-500 text-3xl" />,
    description:
      "Cyclones and storms bring heavy rain, strong winds, and storm surges. Weather monitoring provides early warnings.",
  },
  "Drought & Water Crisis": {
    icon: <GiDesert className="text-yellow-600 text-3xl" />,
    description:
      "Droughts can lead to severe water shortages. Monitoring water levels and soil moisture is key to early intervention.",
  },
  Riot: {
    icon: <FaSkullCrossbones className="text-gray-800 text-3xl" />,
    description:
      "Civil disturbances can escalate quickly. Real-time monitoring helps in response coordination.",
  },
  "Military Emergency": {
    icon: <FaShieldAlt className="text-gray-700 text-3xl" />,
    description:
      "Military emergencies require immediate response. Security monitoring and situational awareness are crucial.",
  },
  "Pandemic & Outbreak": {
    icon: <FaVirus className="text-green-500 text-3xl" />,
    description:
      "Pandemics and outbreaks pose significant health risks. Real-time case tracking and alerts improve response strategies.",
  },
  "Coastal Erosion": {
    icon: <FaTint className="text-blue-700 text-3xl" />,
    description:
      "Coastal erosion threatens communities and infrastructure. Monitoring wave impact and sediment loss is critical.",
  },
  "Infrastructure Collapse": {
    icon: <FaHardHat className="text-gray-900 text-3xl" />,
    description:
      "Building and infrastructure failures can lead to disasters. Regular inspections and monitoring help prevent collapses.",
  },
  All: {
    icon: <FaExclamationTriangle className="text-gray-600 text-3xl" />,
    description:
      "This section provides an overview of all disaster categories and their latest updates.",
  },
};

// Component Props
interface DisasterSectionProps {
  type: DisasterCategory;
}

// DisasterSection Component
const DisasterSection: FC<DisasterSectionProps> = ({ type }) => {
  const disaster = disasterInfo[type] || disasterInfo["All"];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex items-center space-x-4">
      {disaster.icon}
      <div>
        <h2 className="text-xl font-semibold">{type} Overview</h2>
        <p className="text-gray-600 mt-2">{disaster.description}</p>
      </div>
    </div>
  );
};

export default DisasterSection;
