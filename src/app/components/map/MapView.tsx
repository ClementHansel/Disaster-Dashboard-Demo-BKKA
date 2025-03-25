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

  // Filter sensors based on selected disaster category.
  const filteredSensors = sensors.filter((sensor) =>
    selectedDisaster === "All"
      ? true
      : sensor.disasterCategory === selectedDisaster
  );

  // Filter disaster events based on selected disaster category.
  const filteredEvents = disasterEvents.filter((event) =>
    selectedDisaster === "All"
      ? true
      : event.disasterCategory === selectedDisaster
  );

  // Collect locations for all markers (both sensors and disaster events)
  const sensorLocations: [number, number][] = filteredSensors
    .filter((sensor) => sensor.lat && sensor.lng)
    .map((sensor) => [sensor.lat, sensor.lng]);

  const eventLocations: [number, number][] = filteredEvents
    .filter((event) => event.location.lat && event.location.lng)
    .map((event) => [event.location.lat, event.location.lng]);

  const allLocations = [...sensorLocations, ...eventLocations];

  // Render a marker for a sensor.
  const renderSensorMarker = (sensor: Sensor) => (
    <Marker
      key={`sensor-${sensor.id}`}
      position={[sensor.lat, sensor.lng]}
      icon={getPulsingMarker(
        sensor.severity === "High"
          ? "#FF0000"
          : sensor.severity === "Moderate"
          ? "#FFD700"
          : "#008000"
      )}
      eventHandlers={{
        click: () =>
          router.push(`/dashboard/events/${sensor.eventId || sensor.id}`),
      }}
    >
      <Tooltip direction="top" offset={[0, -10]} opacity={1}>
        <div className="text-sm space-y-2">
          <p className="font-semibold text-lg">
            {sensor.name || "Unknown Sensor"}
          </p>
          {sensor.waterLevel !== undefined && (
            <p className="text-gray-700">
              🌊 Water Depth: <strong>{sensor.waterLevel}m</strong>
            </p>
          )}
          <p className="text-gray-700">
            📍 {sensor.lat}, {sensor.lng}
          </p>
          {sensor.lastUpdated && (
            <p className="text-gray-700">
              🕒 {new Date(sensor.lastUpdated).toLocaleString()}
            </p>
          )}
          {sensor.severity && (
            <p
              className={`font-bold ${
                sensor.severity === "High"
                  ? "text-red-600"
                  : sensor.severity === "Moderate"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              ⚠️ Severity Level: {sensor.severity}
            </p>
          )}
        </div>
      </Tooltip>
    </Marker>
  );

  // Render a marker for a disaster event.
  const renderEventMarker = (event: DisasterEvent) => (
    <Marker
      key={`event-${event.id}`}
      position={[event.location.lat, event.location.lng]}
      icon={getPulsingMarker(
        event.severity === "High"
          ? "#FF0000"
          : event.severity === "Moderate"
          ? "#FFD700"
          : "#008000"
      )}
      eventHandlers={{
        click: () => router.push(`/dashboard/events/${event.id}`),
      }}
    >
      <Tooltip direction="top" offset={[0, -10]} opacity={1}>
        <div className="text-sm space-y-2">
          <p className="font-semibold text-lg">
            {event.name || "Unknown Event"}
          </p>
          <p className="text-gray-700">
            📍 {event.location.name || "Unknown Location"} ({event.location.lat}
            , {event.location.lng})
          </p>
          {event.timestamp && (
            <p className="text-gray-700">
              🕒 {new Date(event.timestamp).toLocaleString()}
            </p>
          )}
          {event.severity && (
            <p
              className={`font-bold ${
                event.severity === "High"
                  ? "text-red-600"
                  : event.severity === "Moderate"
                  ? "text-yellow-600"
                  : "text-green-600"
              }`}
            >
              ⚠️ Severity Level: {event.severity}
            </p>
          )}
        </div>
      </Tooltip>
    </Marker>
  );

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={allLocations.length > 0 ? allLocations[0] : [-6.2, 106.8]} // Default to Jakarta if no markers
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

        {/* Render markers for sensors */}
        {filteredSensors.map(renderSensorMarker)}

        {/* Render markers for disaster events */}
        {filteredEvents.map(renderEventMarker)}
      </MapContainer>
    </div>
  );
};

export default MapView;
