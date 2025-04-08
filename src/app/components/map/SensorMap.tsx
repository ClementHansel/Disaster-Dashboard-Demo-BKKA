"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Fix for marker icon issue (Next.js + Leaflet)
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

type Sensor = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type: string;
  value?: number;
};

type SensorMapProps = {
  sensors: Sensor[];
  center?: LatLngExpression;
  zoom?: number;
};

// Custom marker with hover and click behavior
function SensorMarker({ sensor }: { sensor: Sensor }) {
  const router = useRouter();

  return (
    <Marker
      position={[sensor.lat, sensor.lng]}
      eventHandlers={{
        mouseover: (e) => e.target.openPopup(),
        mouseout: (e) => e.target.closePopup(),
        click: () => router.push(`/dashboard/sites/${sensor.id}`),
      }}
    >
      <Popup>
        <div>
          <strong>{sensor.name}</strong>
          <br />
          Type: {sensor.type}
          {sensor.value !== undefined && (
            <>
              <br />
              Value: {sensor.value}
            </>
          )}
        </div>
      </Popup>
    </Marker>
  );
}

export default function SensorMap({
  sensors,
  center = [0, 0],
  zoom = 2,
}: SensorMapProps) {
  useEffect(() => {
    // Run only on client to avoid hydration mismatch
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom
      className="h-[500px] w-full rounded-xl z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {sensors.map((sensor) => (
        <SensorMarker key={sensor.id} sensor={sensor} />
      ))}
    </MapContainer>
  );
}
