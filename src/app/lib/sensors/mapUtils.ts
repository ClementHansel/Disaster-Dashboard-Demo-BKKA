// libs/sensors/mapUtils.ts

type Coordinates = {
  lat: number;
  lng: number;
};

export type Site = {
  id: string;
  name: string;
  coordinates: Coordinates;
};

export type Sensor = {
  id: string;
  siteId: string;
  sensorType: string;
  value: number;
  coordinates: Coordinates;
  status: "normal" | "alert" | "offline";
};

// Convert site to marker format
export function siteToMarker(site: Site) {
  return {
    id: site.id,
    position: site.coordinates,
    label: site.name,
    type: "site",
  };
}

// Convert sensor to marker format
export function sensorToMarker(sensor: Sensor) {
  return {
    id: sensor.id,
    position: sensor.coordinates,
    label: sensor.sensorType,
    type: "sensor",
    status: sensor.status,
  };
}

// Determine marker color/icon based on sensor status
export function getMarkerColor(status: "normal" | "alert" | "offline"): string {
  switch (status) {
    case "alert":
      return "red";
    case "offline":
      return "gray";
    default:
      return "green";
  }
}

// Optional: group sensors by site
export function groupSensorsBySite(sensors: Sensor[]) {
  return sensors.reduce<Record<string, Sensor[]>>((acc, sensor) => {
    if (!acc[sensor.siteId]) acc[sensor.siteId] = [];
    acc[sensor.siteId].push(sensor);
    return acc;
  }, {});
}
