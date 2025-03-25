"use client";

import React, { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMap,
  LayersControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";
import { Sensor, DisasterEvent, DisasterCategory } from "@/app/types/dashboard";

interface MapViewProps {
  sensors: Sensor[];
  disasterEvents: DisasterEvent[];
  selectedDisaster: DisasterCategory | "All";
}

const { BaseLayer } = LayersControl;

// Pulsing Marker Icon Generator
const getPulsingMarker = (color: string): L.DivIcon =>
  L.divIcon({
    className: "pulsing-marker",
    html: `<div class="pulsing-circle" style="
      background-color: ${color};
      width: 15px;
      height: 15px;
      border-radius: 50%;
      box-shadow: 0 0 10px ${color};
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  });

// Auto-adjust map view to fit markers
const AdjustMapView: React.FC<{ allLocations: [number, number][] }> = ({
  allLocations,
}) => {
  const map = useMap();

  useEffect(() => {
    if (allLocations.length > 0) {
      const bounds = L.latLngBounds(allLocations);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [allLocations, map]);

  return null;
};

const MapView: React.FC<MapViewProps> = ({
  sensors,
  disasterEvents,
  selectedDisaster,
}) => {
  const router = useRouter();

  // Merge sensors and disaster events into a single list, filtered by disaster type
  const filteredData = [
    ...sensors,
    ...disasterEvents.flatMap(
      (event) =>
        event.sensors?.map((sensor) => ({
          ...sensor,
          disasterCategory: event.disasterCategory,
          severity: event.severity || "Low",
          eventId: event.id,
          timestamp: event.timestamp || new Date().toISOString(),
        })) ?? []
    ),
  ].filter((item) =>
    selectedDisaster === "All"
      ? true
      : item.disasterCategory === selectedDisaster
  );

  const allLocations: [number, number][] = filteredData.map((item) => [
    item.lat,
    item.lng,
  ]);

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[-6.2, 106.8]} // Default Jakarta area
        zoom={10}
        scrollWheelZoom
        className="w-full h-full z-0"
      >
        <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </BaseLayer>
          <BaseLayer name="Topographic Map">
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenTopoMap contributors"
            />
          </BaseLayer>
          <BaseLayer name="Satellite Map">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution="&copy; Esri & the GIS Community"
            />
          </BaseLayer>
        </LayersControl>

        <AdjustMapView allLocations={allLocations} />

        {/* Markers for all filtered data */}
        {filteredData.map((item, index) => (
          <Marker
            key={item.id || `marker-${index}`} // Ensure unique key
            position={[item.lat, item.lng]}
            icon={getPulsingMarker(
              item.severity === "High"
                ? "#FF0000"
                : item.severity === "Moderate"
                ? "#FFD700"
                : "#008000"
            )}
            eventHandlers={{
              click: () =>
                router.push(`/dashboard/events/${item.eventId || item.id}`),
            }}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <div className="text-sm space-y-2">
                <p className="font-semibold text-lg">
                  {item.name || "Unknown Sensor"}
                </p>
                {"waterDepth" in item && (
                  <p className="text-gray-700">
                    🌊 Water Depth: <strong>{item.waterLevel}m</strong>
                  </p>
                )}
                <p className="text-gray-700">
                  📍 {item.lat}, {item.lng}
                </p>
                <p className="text-gray-700">
                  🕒 {new Date(item.lastUpdated).toLocaleString()}
                </p>
                {item.severity && (
                  <p
                    className={`font-bold ${
                      item.severity === "High"
                        ? "text-red-600"
                        : item.severity === "Moderate"
                        ? "text-yellow-600"
                        : "text-green-600"
                    }`}
                  >
                    ⚠️ Severity Level: {item.severity}
                  </p>
                )}
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
