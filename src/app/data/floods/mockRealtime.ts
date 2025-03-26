// src/data/floods/mockRealtime.ts

import { FloodEvent } from "@/app/types/floods";

export const fetchRealTimeFloodData = (): FloodEvent[] => [
  {
    id: "yogyakarta",
    name: "Yogyakarta",
    lat: -7.7956,
    lng: 110.3695,
    floodSeverity: "moderate",
    radius_km: 3, // Approximate radius (km)
    impactedArea: 3,
    description: "Flood warnings issued due to heavy rains.",
    isHistorical: false,
  },
  {
    id: "jakarta",
    name: "Jakarta",
    lat: -6.2088,
    lng: 106.8456,
    floodSeverity: "severe",
    radius_km: 6, // Flood affects an approximate 6 km radius
    impactedArea: 5,
    description: "Heavy flooding in downtown areas.",
    isHistorical: true,
  },
  {
    id: "surabaya",
    name: "Surabaya",
    lat: -7.2504,
    lng: 112.7688,
    floodSeverity: "moderate",
    radius_km: 4, // Flood affects an approximate 4 km radius
    impactedArea: 3,
    description: "Rising water levels in low-lying zones.",
    isHistorical: false,
  },
  {
    id: "bandung",
    name: "Bandung",
    lat: -6.9147,
    lng: 107.6098,
    floodSeverity: "low",
    radius_km: 2, // Flood affects an approximate 2 km radius
    impactedArea: 2,
    description: "Minor flooding detected near the river.",
    isHistorical: false,
  },
  {
    id: "medan",
    name: "Medan",
    lat: 3.5952,
    lng: 98.6722,
    floodSeverity: "moderate",
    radius_km: 5, // Flood affects an approximate 5 km radius
    impactedArea: 4,
    description: "Increased water levels in suburban areas.",
    isHistorical: false,
  },
  {
    id: "bali",
    name: "Bali",
    lat: -8.4095,
    lng: 115.1889,
    floodSeverity: "severe",
    radius_km: 7, // Flood affects an approximate 7 km radius
    impactedArea: 6,
    description: "Severe floods impacting coastal areas.",
    isHistorical: true,
  },
  {
    id: "makasar",
    name: "Makasar",
    lat: -5.1477,
    lng: 119.4327,
    floodSeverity: "moderate",
    radius_km: 3, // Flood affects an approximate 3 km radius
    impactedArea: 3,
    description: "Flooding affecting local infrastructure.",
    isHistorical: false,
  },
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    lat: -0.4436,
    lng: 130.9938,
    floodSeverity: "low",
    radius_km: 2, // Flood affects an approximate 2 km radius
    impactedArea: 2,
    description: "Minor flooding reported in remote areas.",
    isHistorical: false,
  },
  {
    id: "pekanbaru",
    name: "Pekanbaru",
    lat: 0.5071,
    lng: 101.4478,
    floodSeverity: "severe",
    radius_km: 5, // Flood affects an approximate 5 km radius
    impactedArea: 5,
    description: "Critical flooding; immediate action required.",
    isHistorical: true,
  },
  {
    id: "manado",
    name: "Manado",
    lat: 1.4748,
    lng: 124.8421,
    floodSeverity: "moderate",
    radius_km: 3, // Flood affects an approximate 3 km radius
    impactedArea: 3,
    description: "Flood warning in place for downtown.",
    isHistorical: false,
  },
  {
    id: "gorontalo",
    name: "Gorontalo",
    lat: 0.5435,
    lng: 123.0564,
    floodSeverity: "low",
    radius_km: 1, // Flood affects an approximate 1 km radius
    impactedArea: 1,
    description: "Light rain with minor water accumulation.",
    isHistorical: false,
  },
];
