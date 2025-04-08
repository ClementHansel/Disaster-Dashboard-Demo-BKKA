import { Sensor, SensorUpdate } from "@/app/types/sensors/sensor";

export const convertToSensorUpdate = (sensors: Sensor[]): SensorUpdate[] => {
  return sensors.map((sensor) => ({
    id: sensor.id,
    name: sensor.sensorName,
    site: sensor.siteId,
    type: sensor.sensorType,
    lat: sensor.coordinates.lat,
    lng: sensor.coordinates.lng,
    lastUpdated: sensor.timestamp || new Date().toISOString(),
    value: sensor.value.toString(),
  }));
};
