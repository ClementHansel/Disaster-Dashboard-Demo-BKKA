"use client"; // Ensure client-side rendering

import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet"; // Import leaflet and LatLngExpression
import { floodSensors, sluiceGates, pumps } from "@/app/data/mockData";

// Fix for missing marker icons
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Leaflet requires setting the default marker icon manually in some cases
const DefaultIcon = L.icon({
  iconUrl: markerIconPng.src,
  shadowUrl: markerShadowPng.src,
  iconSize: [25, 41], // Default size
  iconAnchor: [12, 41], // Default anchor
});

// Define the map center with the correct type
const center: LatLngExpression = [-6.2297, 106.869];

const GlobalMap = () => {
  return (
    <MapContainer
      center={center} // ✅ Fix: Explicitly set LatLngExpression
      zoom={11}
      className="h-[500px] w-full"
    >
      <LayersControl position="topright">
        {" "}
        {/* ✅ Fix: Ensure correct prop usage */}
        {/* Default OpenStreetMap */}
        <LayersControl.BaseLayer checked name="OpenStreetMap">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        {/* Satellite View */}
        <LayersControl.BaseLayer name="Satellite">
          <TileLayer url="https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=YOUR_API_KEY" />
        </LayersControl.BaseLayer>
        {/* Topographic Map */}
        <LayersControl.BaseLayer name="Topographic">
          <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
      </LayersControl>

      {/* Flood Sensors */}
      {floodSensors.map((sensor) => (
        <Marker
          key={sensor.id}
          position={[sensor.lat, sensor.lng]}
          icon={DefaultIcon}
        >
          <Popup>
            <strong>{sensor.name}</strong>
            <br />
            Water Level: {sensor.waterLevel}m
            <br />
            Risk: {sensor.risk}
          </Popup>
        </Marker>
      ))}

      {/* Sluice Gates */}
      {sluiceGates.map((gate) => (
        <Marker
          key={gate.id}
          position={[gate.lat, gate.lng]}
          icon={DefaultIcon}
        >
          <Popup>
            <strong>{gate.name}</strong>
            <br />
            Status: {gate.status}
            <br />
            Capacity: {gate.capacity}
          </Popup>
        </Marker>
      ))}

      {/* Pumps */}
      {pumps.map((pump) => (
        <Marker
          key={pump.id}
          position={[pump.lat, pump.lng]}
          icon={DefaultIcon}
        >
          <Popup>
            <strong>{pump.name}</strong>
            <br />
            Status: {pump.status}
            <br />
            Capacity: {pump.capacity}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GlobalMap;
