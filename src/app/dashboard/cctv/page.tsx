"use client";

import { useState } from "react";

// or defined inline
import CCTVHeader from "@/app/components/cctv/CCTVHeader";
import CCTVLiveSection from "@/app/components/cctv/CCTVLiveSection";
import CCTVHistoricalSection from "@/app/components/cctv/CCTVHistoricalSection";
import CCTVNotification from "@/app/components/cctv/CCTVNotification";
import { HistoricalCCTV, LiveCCTV } from "@/app/types/cctv";

// Mock data (use your existing mock arrays)
const liveCCTVData: LiveCCTV[] = [
  {
    id: "live-1",
    siteName: "Jakarta",
    cameraName: "Jakarta Cam 1",
    streamUrl: "https://dummyimage.com/640x360/000/fff&text=Jakarta+Live+1",
    status: "online",
  },
  {
    id: "live-2",
    siteName: "Surabaya",
    cameraName: "Surabaya Cam 1",
    streamUrl: "https://dummyimage.com/640x360/000/fff&text=Surabaya+Live+1",
    status: "online",
  },
  {
    id: "live-3",
    siteName: "Bandung",
    cameraName: "Bandung Cam 1",
    streamUrl: "https://dummyimage.com/640x360/000/fff&text=Bandung+Live+1",
    status: "online",
  },
  // ... more streams as needed
];

const historicalCCTVData: HistoricalCCTV[] = [
  {
    id: "hist-1",
    siteName: "Jakarta",
    cameraName: "Jakarta Cam 3",
    streamUrl: "https://dummyimage.com/640x360/000/fff&text=Jakarta+Hist+Cam+3",
    status: "offline",
    description: "Recorded during severe outage",
    severity: "severe",
  },
  {
    id: "hist-2",
    siteName: "Surabaya",
    cameraName: "Surabaya Cam 5",
    streamUrl:
      "https://dummyimage.com/640x360/000/fff&text=Surabaya+Hist+Cam+5",
    status: "online",
    description: "Recorded during moderate event",
    severity: "moderate",
  },
  {
    id: "hist-3",
    siteName: "Bandung",
    cameraName: "Bandung Cam 1",
    streamUrl: "https://dummyimage.com/640x360/000/fff&text=Bandung+Hist+Cam+1",
    status: "online",
    description: "Normal operation recording",
    severity: "low",
  },
  // ... add more historical records as needed
];

export default function CCTVDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSite, setSelectedSite] = useState("all");
  const [activeTab, setActiveTab] = useState<"live" | "historical">("live");

  const sites = [
    "Jakarta",
    "Surabaya",
    "Bandung",
    "Makasar",
    "Medan",
    "Pekanbaru",
    "Bali",
    "Gili",
    "Flores",
    "Gorontalo",
    "Manado",
    "Ambon",
    "Sorong",
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <CCTVHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedSite={selectedSite}
        setSelectedSite={setSelectedSite}
        onRefresh={() => window.location.reload()}
        sites={sites}
      />
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "live" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("live")}
        >
          Live CCTV
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "historical"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("historical")}
        >
          Historical CCTV
        </button>
      </div>
      {activeTab === "live" ? (
        <CCTVLiveSection data={liveCCTVData} selectedSite={selectedSite} />
      ) : (
        <CCTVHistoricalSection
          data={historicalCCTVData}
          selectedSite={selectedSite}
        />
      )}
      <CCTVNotification notifications={historicalCCTVData} />
    </div>
  );
}
