import { DisasterEvent } from "@/app/types/dashboard";

export const pandemicOutbreakEvents: DisasterEvent[] = [
  {
    id: 1,
    disasterCategory: "Pandemic & Outbreak",
    name: "COVID-25 Surge",
    description: "Increase in reported COVID-25 cases in multiple regions.",
    severity: "Moderate",
    status: "Active",
    timestamp: "2025-03-20T12:00:00Z",
    location: { lat: -6.2, lng: 106.816, name: "Jakarta" },
    source: "Manual",
    reportedBy: "Ministry of Health",
    affectedAreas: [
      { lat: -6.2, lng: 106.816, name: "Jakarta" },
      { lat: -7.25, lng: 112.75, name: "Surabaya" },
    ],
  },
  {
    id: 2,
    disasterCategory: "Pandemic & Outbreak",
    name: "Dengue Fever Outbreak",
    description:
      "Outbreak of Dengue fever due to heavy rains and standing water.",
    severity: "Critical",
    status: "Pending",
    timestamp: "2025-03-18T08:30:00Z",
    location: { lat: -6.914, lng: 107.609, name: "Bandung" },
    source: "Manual",
    reportedBy: "Public Report",
    affectedAreas: [
      { lat: -6.914, lng: 107.609, name: "Bandung" },
      { lat: -0.789, lng: 113.921, name: "Central Kalimantan" },
    ],
  },
  {
    id: 402,
    disasterCategory: "Pandemic & Outbreak",
    name: "Viral Outbreak",
    description: "New viral outbreak detected, containment measures enforced.",
    severity: "Moderate",
    status: "Pending",
    timestamp: "2025-03-20T14:00:00Z",
    location: {
      lat: -6.9147,
      lng: 107.6098,
      name: "Bandung, Indonesia",
    },
    source: "Manual",
    reportedBy: "Ministry of Health",
    affectedAreas: [
      { lat: -6.9147, lng: 107.6098, name: "Bandung, Indonesia" },
    ],
  },
];
