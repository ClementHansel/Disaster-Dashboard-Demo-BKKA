"use client";

import { useState } from "react";

const disasterTypes = [
  "All",
  "Flood",
  "Earthquake",
  "Land Slide",
  "Forest Fire",
  "Fire",
  "Tsunami",
  "Riots",
  "Military Emergency",
];

interface DisasterTabsProps {
  onSelect: (type: string) => void;
}

const DisasterTabs: React.FC<DisasterTabsProps> = ({ onSelect }) => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabClick = (type: string) => {
    setActiveTab(type);
    onSelect(type);
  };

  return (
    <div className="flex justify-center bg-white shadow-md rounded-lg p-2 overflow-x-auto space-x-2">
      {disasterTypes.map((type) => (
        <button
          key={type}
          className={`px-4 py-2 text-sm font-semibold rounded-lg transition ${
            activeTab === type
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => handleTabClick(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default DisasterTabs;
