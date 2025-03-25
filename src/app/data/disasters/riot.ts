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
  },
  {
    id: 2,
    disasterCategory: "Riot",
    name: "Demonstration Near Government Buildings",
    description: "Demonstration disrupting traffic near government buildings.",
    severity: "Moderate",
    status: "Pending",
    timestamp: "2025-03-19T10:15:00Z",
    location: {
      lat: -6.9175,
      lng: 107.6191,
      name: "Bandung City Hall",
    },
    source: "Manual",
    reportedBy: "Government",
    affectedAreas: [{ lat: -6.9175, lng: 107.6191, name: "Bandung City Hall" }],
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
  },
];

export default riotEvents;
