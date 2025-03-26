// src/data/floods/mockGeoJSON.ts
import type { FeatureCollection, Polygon } from "geojson";
import * as turf from "@turf/turf";
import { fetchRealTimeFloodData } from "./mockRealtime";
import { FloodEvent } from "@/app/types/floods";

// Define properties type for flood features
type FloodProperties = {
  name: string;
  fill: string;
  "fill-opacity": number;
  stroke: string;
  "stroke-width": number;
  "stroke-opacity": number;
};

// Retrieve realtime flood data (combined from your sources)
const realtimeFloodData: FloodEvent[] = fetchRealTimeFloodData();

// Generate a GeoJSON FeatureCollection where each feature is a circle polygon
// representing the flood extent. Here, we use the `impactedArea` property as the
// radius in kilometers.
export const floodGeoJSON: FeatureCollection<Polygon, FloodProperties> = {
  type: "FeatureCollection",
  features: realtimeFloodData.map((event: FloodEvent) => {
    // Create a circle polygon using Turf.js. You can change 'event.impactedArea'
    // to 'event.radius_km' if that's your intended measure.
    const circle = turf.circle([event.lng, event.lat], event.impactedArea, {
      steps: 64, // More steps for a smoother circle.
      units: "kilometers",
    });

    // Choose fill color based on floodSeverity.
    const fillColor =
      event.floodSeverity === "severe"
        ? "#FF0000"
        : event.floodSeverity === "moderate"
        ? "#FFC107"
        : "#00E676";

    return {
      ...circle,
      properties: {
        name: event.name,
        fill: fillColor,
        "fill-opacity": 0.3,
        stroke: fillColor,
        "stroke-width": 2,
        "stroke-opacity": 0.5,
      },
    };
  }),
};
