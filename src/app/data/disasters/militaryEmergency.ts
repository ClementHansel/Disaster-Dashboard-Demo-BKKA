import { DisasterEvent } from "@/app/types/dashboard";

const militaryEmergencyData: DisasterEvent[] = [
  {
    id: 1,
    name: "Border Conflict in Northern Region",
    disasterCategory: "Military Emergency",
    description: "Border conflict reported near the northern region.",
    severity: "Critical",
    status: "Active",
    timestamp: "2025-03-20T14:30:00Z",
    location: { lat: -6.2, lng: 106.816, name: "Northern Border" },
    source: "Manual",
    reportedBy: "Military",
    affectedAreas: [
      { lat: -6.2, lng: 106.816, name: "Northern Border" },
      { lat: -6.3, lng: 106.9, name: "Nearby Military Base" },
    ],
  },
  {
    id: 2,
    name: "Unidentified Aircraft Detected",
    disasterCategory: "Military Emergency",
    description: "Unidentified aircraft detected in restricted airspace.",
    severity: "Moderate",
    status: "Pending",
    timestamp: "2025-03-21T09:45:00Z",
    location: {
      lat: -6.5,
      lng: 107.0,
      name: "Restricted Airspace Zone",
    },
    source: "Manual",
    reportedBy: "Government",
    affectedAreas: [
      { lat: -6.5, lng: 107.0, name: "Restricted Airspace Zone" },
    ],
  },
  {
    id: 3,
    name: "Suspicious Naval Activity",
    disasterCategory: "Military Emergency",
    description: "Coastal patrol reports suspicious naval activity.",
    severity: "Low",
    status: "Resolved",
    timestamp: "2025-03-22T07:20:00Z",
    location: {
      lat: -5.8,
      lng: 105.3,
      name: "Western Coastal Waters",
    },
    source: "Manual",
    reportedBy: "Military",
    affectedAreas: [{ lat: -5.8, lng: 105.3, name: "Western Coastal Waters" }],
  },
  {
    id: 401,
    disasterCategory: "Military Emergency",
    name: "Military Operation",
    description: "Military operation in progress, restricted area declared.",
    severity: "Critical",
    status: "Active",
    timestamp: "2025-03-20T13:30:00Z",
    location: {
      lat: -6.2001,
      lng: 106.8453,
      name: "Jakarta, Indonesia",
    },
    source: "Manual",
    reportedBy: "Military",
    affectedAreas: [
      { lat: -6.2001, lng: 106.8453, name: "Jakarta, Indonesia" },
      { lat: -7.7975, lng: 110.3705, name: "Yogyakarta, Indonesia" },
    ],
  },
];

export default militaryEmergencyData;
