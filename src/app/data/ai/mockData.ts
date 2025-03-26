import {
  Annotation,
  AnnotationLabel,
  SensorData,
} from "@/app/types/ai/annotation";

/**
 * Mock annotations for testing AI analysis.
 */
export const mockAnnotations: Annotation[] = [
  {
    id: "1",
    sensorId: "sensor_001",
    site: "Site A",
    timestamp: "2025-03-16T10:00:00Z",
    label: AnnotationLabel.GOOD,
    comment: "Stable humidity levels",
  },
  {
    id: "2",
    sensorId: "sensor_002",
    site: "Site B",
    timestamp: "2025-03-16T11:00:00Z",
    label: AnnotationLabel.ANOMALY,
    comment: "Sudden pressure drop detected",
  },
  {
    id: "3",
    sensorId: "sensor_003",
    site: "Site C",
    timestamp: "2025-03-16T12:00:00Z",
    label: AnnotationLabel.BAD,
    comment: "High temperature fluctuation",
  },
];

/**
 * Mock saved annotations.
 */
export const mockSavedAnnotations: Annotation[] = [
  {
    id: "101",
    sensorId: "sensor_001",
    site: "Site A",
    timestamp: "2025-03-17T08:30:00Z",
    label: AnnotationLabel.GOOD,
    comment: "Temperature stable within safe limits",
  },
  {
    id: "102",
    sensorId: "sensor_002",
    site: "Site B",
    timestamp: "2025-03-17T09:15:00Z",
    label: AnnotationLabel.BAD,
    comment: "Frequent voltage spikes detected",
  },
  {
    id: "103",
    sensorId: "sensor_003",
    site: "Site C",
    timestamp: "2025-03-17T10:45:00Z",
    label: AnnotationLabel.ANOMALY,
    comment: "Unusual humidity drop observed",
  },
  {
    id: "104",
    sensorId: "sensor_004",
    site: "Site D",
    timestamp: "2025-03-17T12:20:00Z",
    label: AnnotationLabel.GOOD,
    comment: "Stable pressure readings",
  },
  {
    id: "105",
    sensorId: "sensor_005",
    site: "Site E",
    timestamp: "2025-03-17T14:00:00Z",
    label: AnnotationLabel.ANOMALY,
    comment: "Current fluctuation detected in equipment",
  },
];

/**
 * Mock sensor data for AI analysis and annotations.
 */
export const mockSensorData: SensorData[] = [];

const sites = [
  "Site A",
  "Site B",
  "Site C",
  "Site D",
  "Site E",
  "Site F",
  "Site G",
  "Site H",
  "Site I",
  "Site J",
];
const sensorsPerSite = 5;
const dataPointsPerSensor = 20;
const startTime = new Date("2025-03-16T00:00:00Z");
const timeInterval = 3600000; // 1 hour in milliseconds

let idCounter = 1;

sites.forEach((site, siteIndex) => {
  for (let sensorNum = 1; sensorNum <= sensorsPerSite; sensorNum++) {
    const sensorId = `sensor_${siteIndex * sensorsPerSite + sensorNum}`;
    for (let dataNum = 0; dataNum < dataPointsPerSensor; dataNum++) {
      const timestamp = new Date(
        startTime.getTime() + dataNum * timeInterval
      ).toISOString();
      const value = Math.random() * (100 - 10) + 10; // Random value between 10 and 100
      const unit = ["°C", "hPa", "%", "V", "A"][sensorNum % 5]; // Rotate units

      mockSensorData.push({
        id: idCounter.toString(),
        sensorId,
        site,
        timestamp,
        value: parseFloat(value.toFixed(2)),
        unit,
      });
      idCounter++;
    }
  }
});
