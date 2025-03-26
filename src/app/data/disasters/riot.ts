import { DisasterEvent } from "@/app/types/dashboard";

const riotEvents: DisasterEvent[] = [
  {
    id: 1,
    disasterCategory: "Riot",
    name: "Violent Protest in City Center",
    description: "Protest turned violent in the city center.",
    severity: "Critical",
    status: "Active",
    timestamp: "2025-03-20T14:30:00Z",
    date: "2025-03-20", // ✅ Added date field
    type: "Riot", // ✅ Added type field
    reportedAt: "2025-03-20T14:45:00Z", // ✅ Added reportedAt field
    location: {
      lat: -6.2088,
      lng: 106.8456,
      name: "Jakarta City Center",
    },
    source: "Manual",
    reportedBy: "Public Report",
    affectedAreas: [
      { lat: -6.2088, lng: 106.8456, name: "Jakarta City Center" },
    ],
    sensors: [],
  },
  {
    id: 2,
    disasterCategory: "Riot",
    name: "Demonstration Near Government Buildings",
    description: "Demonstration disrupting traffic near government buildings.",
    severity: "Moderate",
    status: "Pending",
    timestamp: "2025-03-19T10:15:00Z",
    date: "2025-03-19",
    type: "Riot",
    reportedAt: "2025-03-19T10:30:00Z",
    location: {
      lat: -6.9175,
      lng: 107.6191,
      name: "Bandung City Hall",
    },
    source: "Manual",
    reportedBy: "Government",
    affectedAreas: [{ lat: -6.9175, lng: 107.6191, name: "Bandung City Hall" }],
    sensors: [],
  },
  {
    id: 403,
    disasterCategory: "Riot",
    name: "Violent Protest",
    description:
      "Large-scale protest turning violent, authorities on high alert.",
    severity: "Critical",
    status: "Active",
    timestamp: "2025-03-20T15:45:00Z",
    date: "2025-03-20",
    type: "Riot",
    reportedAt: "2025-03-20T16:00:00Z",
    location: {
      lat: -6.2088,
      lng: 106.8456,
      name: "Jakarta, Indonesia",
    },
    source: "Manual",
    reportedBy: "Public Report",
    affectedAreas: [
      { lat: -6.2088, lng: 106.8456, name: "Jakarta, Indonesia" },
    ],
    sensors: [],
  },
];

export default riotEvents;
